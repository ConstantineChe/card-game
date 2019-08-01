(ns card-game.game
  (:require [clojure.tools.logging :as log])
  (:import (java.util UUID)))

(def initial-state {:players #{}  ; set may contain private player information!
                    :table {}
                    :deck (repeat 72 {:clone {:imps []
                                              :name "clone"
                                              :cloned 0}
                                      :imp {:cloned 0
                                            :name "imp"}
                                      :curse {:name "curse"}})
                    :discard {}
                    :game-phase :waiting})

(defonce game-state (ref initial-state))

(defn vec-remove
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(def game-flow
  [:play-cards :clone-imps :clone-clones :draw-cards :discard-cards])

(defn next-phase [phase]
  (let [i (.indexOf game-flow phase)]
    (get game-flow (mod (inc i) (count game-flow)))))

(next-phase :discard-cards)

(defn reg-player [session]
  (dosync
    (alter game-state
           #(update % :players conj
                    {:session %2
                     :id (UUID/randomUUID)
                     :hand []}) session)))

(defn get-player-by-session [session]
  (first (filter (comp (partial = session) :session)
                 (:players @game-state))))

(defn update-player-by-session [session update-fn]
  (let [player (get-player-by-session session)]
    (dosync
      (alter game-state update :players disj player)
      (alter game-state update :players conj (update-fn player)))))

(defn ready-players []
  (filter :ready? (:players @game-state)))

(defn playing-players []
  (filter :playing? (:players @game-state)))

(defn players-state-resp [resp-session]
  (fn [players]
    (into #{} (map (fn [{:keys [session] :as player}]
                     (if (= session resp-session)
                       ;; own session
                       (-> (dissoc player :session)
                           (assoc :you? true))
                       ;; other players info
                       (dissoc player :session))) players))))

(defn set-name! [session name]
  (update-player-by-session session (fn [player] (assoc player :name name))))

(defn player-state [session]
  (-> (update @game-state :players (players-state-resp session))
      (assoc :deck {:cards-in-deck (count (:deck @game-state))})))

(defn draw-card! [session]
  (let [card (first (:deck @game-state))]
    (dosync
      (alter game-state update :deck rest)
      (update-player-by-session session
                                (fn [player]
                                  (update player :hand conj card))))))

(defn init-game! []
  (let [ready-players (ready-players)]
    ; init playing state
    (doseq [{:keys [session]} ready-players]
      (update-player-by-session session (fn [player] (assoc player :playing? true)))
      (dotimes [n 5] (draw-card! session)))
    ; choose who go first
    (update-player-by-session (-> ready-players first :session)
                              (fn [player]
                                (assoc player :your-turn true)))
    (dosync
      (alter game-state assoc
             :to-play (-> ready-players first :id)
             :game-phase (first game-flow)))
    ))

(defn ready! [session]
  (update-player-by-session session (fn [player] (assoc player :ready? true)))
  ; start when 2 players ready
  (when (= (count (ready-players)) 2)
    (init-game!)))

(defn play-card! [session {:keys [idx as on]}]
  (let [card (get-in (get-player-by-session session) [:hand idx])
        {:keys [id]} (get-player-by-session session)]
    (dosync
      (update-player-by-session session
                                (fn [player]
                                  (update player :hand vec-remove idx)))
      (alter game-state update-in (concat [(first on)] [id] (rest on)) conj (as card)))))

(defn legal-action? [session message]
  (and (= (-> session get-player-by-session :id) (:to-play @game-state))
       (= (:type message) (:game-phase @game-state))))

(defn switch-turn []
  (doseq [{:keys [id session your-turn]} (playing-players)]
    (dosync
      (if-not your-turn
        (alter game-state assoc :to-play id)
        (update-player-by-session session (fn [player]
                                            (assoc player :passed true))))
      (update-player-by-session session (fn [player]
                                                (update player :your-turn not)))
      (when (every? :passed (playing-players))
        (dosync
          (alter game-state update :game-phase next-phase)
          (doseq [{:keys [session]} (playing-players)]
            (update-player-by-session session (fn [player]
                                                (dissoc player :passed)))))))))
