(ns ^:figwheel-hooks card-game.core
  (:require
   [goog.dom :as gdom]
   [card-game.ws :as ws]
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :as rf]
   [card-game.subs]
   [card-game.events]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn status []
  (let [status @(rf/subscribe [:status])]
    [:p (if-not status "Connecting" "Connected")]))

(defn game-started? []
  (contains? #{:play-cards :clone-imps :clone-clones :draw-cards :discard-cards}
             (:game-phase @(rf/subscribe [:game-state]))))

(defn your-turn? []
  (->> @(rf/subscribe [:game-state])
       :players
       (filter :you?)
       first
       :your-turn))

(defn game-phase? [phase]
  (= phase (:game-phase @(rf/subscribe [:game-state]))))

(defn card []
  (let [card (reagent/props (reagent/current-component))
        selected @(rf/subscribe [:selected])]
    [:div (pr-str card)
     (when (your-turn?)
       (if (= (:idx selected) (:key card))
         [:div "selected as " (:as selected)
          (if (= (:as selected) :imp)
            [:button {:on-click #(rf/dispatch [:play-card (:key card) :clone])} "play as clone"]
            [:button {:on-click #(rf/dispatch [:play-card (:key card) :imp])} "play as imp"])]
         [:div
          [:button {:on-click #(rf/dispatch [:play-card (:key card) :imp])} "play as imp"]
          [:button {:on-click #(rf/dispatch [:play-card (:key card) :clone])} "play as clone"]]))]))

(defn hand [cards]
  (prn "cards" cards)
  [:div.hand [:h3 "Hand:"]
   [:div "selected:" (pr-str @(rf/subscribe [:selected]))]
   [:div.cards (map-indexed (fn [i c] [card (assoc c :key i)]) cards)]])

(defn opponent [opp]
  [:div
   [:h3 "Opponent:"]
   [:p "cards in hand: " (count (:hand opp))]])

(defn discard []
  [:div "discard"])

(defn clone-view [{:keys [imps your? key] :as data}]
 [:div.clone (pr-str data)] (when (and your? (your-turn?)
                                       (some-> @(rf/subscribe [:selected]) :as (= :imp)))
                              [:button {:on-click #(rf/dispatch [:place-card [:table key :imps]])}]))

(defn table-view [{:keys [you opponent table]}]
  [:div.table "table"
   [:div.opponent "opponent cards"
    (map-indexed (fn [idx c] [clone-view (assoc c :key idx)]) (get table (:id opponent)))]
   [:div.you "your cards"
    (map-indexed (fn [idx c] [clone-view (assoc c :key idx :your? true)]) (get table (:id you)))
    (when (and (your-turn?) (some-> @(rf/subscribe [:selected]) :as (= :clone)))
      [:button {:on-click #(rf/dispatch [:place-card [:table]])} "place here"])]])

(defn game []
  (let [{:keys [players table game-phase]} @(rf/subscribe [:game-state])
        you (first (filter :you? players))
        opponent-data (first (filter (complement :you?) players))]
    [:div.game
     [:h3 "Game phase: " (name game-phase)]
     [opponent opponent-data]
     [table-view {:you you :opponent opponent-data :table table}]
     [hand (:hand you)]
     [discard]
     (when (:your-turn you)
       [:button {:on-click #(rf/dispatch [:pass])} "Pass"])
     ]))

(defn game-info []
  (let [{:keys [name]} @(rf/subscribe [:inputs])]
    [:div (pr-str @(rf/subscribe [:game-state]))
     [:p [:button {:on-click #(rf/dispatch [:get-state])} "refresh state"]]
     [:p "tell me your name"]
     [:input {:type :text
              :value name
              :on-change #(rf/dispatch [:input-name (-> % .-target .-value)])}]
     [:button {:on-click #(rf/dispatch [:submit-name])} "submit"]
     [:p [:button {:on-click #(rf/dispatch [:ready])} "ready"]]
     (when (game-started?)
       [game])]))

(defn main []
  [:div
   [:h3 "Клоны бесов в клонах"]
   [status]
   [game-info]])

(defn mount [el]
  (reagent/render-component [main] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))



;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)
(ws/make-websocket! "ws://localhost:5000/game/" #(rf/dispatch [:on-message %]))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  (ws/make-websocket! "ws://localhost:5000/game/" #(rf/dispatch [:on-message %]))
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
