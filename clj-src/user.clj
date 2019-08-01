(ns user
  (:require [ring.adapter.jetty9 :as jetty]
            [card-game.app :as app]
            [card-game.ws :as ws]
            [card-game.game :as g]
            [figwheel.main.logging :as log]))

(defonce server (atom nil))

(defn start []
  (reset! server (jetty/run-jetty app/dummy-app {:port 5000
                                                 :join? false
                                                 :websockets {"/game" ws/handler}})))

(defn stop []
  (when-let [s @server]
    (log/info "Stopping server")
    (jetty/stop-server s)
    (reset! server nil)))

(defn restart []
  (stop)
  (dosync (ref-set g/game-state g/initial-state)
          (ref-set ws/all-sessions #{}))
  (start))