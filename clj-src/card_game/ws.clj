(ns card-game.ws
  (:require [ring.adapter.jetty9 :as ws]
            [cognitect.transit :as t]
            [card-game.game :as g]
            [clojure.tools.logging :as log])
  (:import (java.io ByteArrayInputStream ByteArrayOutputStream)))

(defonce all-sessions (ref #{}))



(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))



(defn read-transit [msg]
  (let [bytes (.getBytes msg)
        bais  (ByteArrayInputStream. bytes)
        r     (t/reader bais :json)
        ret (t/read r)]
    (.reset bais)
    ret))

(defn- on-connect [session]
  (prn "on connect" session)
  (dosync
    (alter all-sessions conj session)
    (g/reg-player session)))

(defn- on-close [session code reason]
  (prn "on close")
  (dosync
    (alter all-sessions disj session)
    (alter g/game-state #(update % :players disj %2) (g/get-player-by-session session))))

(defn broadcast-state []
  (doseq [s @all-sessions]
    (ws/send! s
              (write-transit
                {:type :state
                 :data (g/player-state s)}))))

(defn- on-text [session message]
  (let [message (read-transit message)]
    (cond (= :state message)
          (ws/send! session
                    (write-transit
                      {:type :state
                       :data (g/player-state session)}))

          (= :name (:type message))
          (do (g/set-name! session (:name message))
              (broadcast-state))

          (= :ready message)
          (do (g/ready! session)
              (broadcast-state))

          (and (= :play-cards (:type message)) (g/legal-action? session message))
          (do (g/play-card! session (:data message))
              (broadcast-state))

          (= message :pass)
          (do (g/switch-turn)
              (broadcast-state))

          :else :noop)))

(defn- on-bytes [session bytes]
  (prn "got bytes")
  :noop)

(defn- on-error [session e]
  (.printStackTrace e)
  (dosync
    (alter all-sessions disj session)))

(def handler
  {:on-connect on-connect
   :on-error on-error
   :on-text on-text
   :on-close on-close
   :on-bytes on-bytes})
