(ns card-game.events
  (:require [re-frame.core :as rf]
            [card-game.ws :refer [send-transit-msg!]]))

(rf/reg-event-db
  :on-connect
  (fn [db _]
    (assoc db :status :connected)))

(rf/reg-event-db
  :on-disconnect
  (fn [db _]
    (assoc db :status :disconnected)))

(rf/reg-fx
  :send
  (fn [msg]
    (send-transit-msg! msg)))

(rf/reg-event-fx
  :on-message
  (fn [{:keys [db]} [_ msg]]
    (prn "got" msg)
    (cond (= :state (:type msg)) {:db (assoc db :game-state (:data msg))}
          :else {})))

(rf/reg-event-fx
  :get-state
  (fn [{:keys [db]}]
    {:send :state}))

(rf/reg-event-db
  :input-name
  [(rf/path :inputs)]
  (fn [db [_ name]]
    (assoc db :name name)))

(rf/reg-event-fx
  :ready
  (fn [_ _]
    {:send :ready}))

(rf/reg-event-fx
  :pass
  (fn [_ _]
    {:send :pass}))

(rf/reg-event-fx
  :submit-name
  (fn [{:keys [db]} _]
    {:send {:type :name :name (get-in db [:inputs :name])}}))

(rf/reg-event-fx
  :play-card
  (fn [{:keys [db]} [_ idx as]]
    {:db (assoc db :selected {:idx idx :as as})}))

(rf/reg-event-fx
  :place-card
  (fn [{:keys [db]} [_ path]]
    {:send {:type :play-cards :data (assoc (:selected db) :on path)}}))

