(ns card-game.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :status
  (fn [db _]
    (:status db)))

(rf/reg-sub
  :game-state
  (fn [db _]
    (:game-state db)))

(rf/reg-sub
  :inputs
  (fn [db _]
    (:inputs db)))

(rf/reg-sub
  :selected
  (fn [db _]
    (:selected db)))

