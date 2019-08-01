(ns card-game.app
  (:gen-class)
  (:require [ring.adapter.jetty9 :as jetty]
            [card-game.ws :as ws]))

(defn dummy-app [req]
  {:body "<h1>It works</h1>" :status 200})


(defn -main [& args]
  (jetty/run-jetty dummy-app {:port 5000 :websockets {"/game" ws/handler}}))
