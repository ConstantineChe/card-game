(def jetty-version "9.4.13.v20181111")

(defproject card-game "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [
                 ;; Clojure
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]


                 ;; Front
                 [reagent "0.8.1"]
                 [re-frame "0.10.5"]
                 [com.cognitect/transit-cljs "0.8.256"]

                 ;; Back
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [info.sunng/ring-jetty9-adapter "0.12.2"]
                 [ring/ring-servlet "1.7.0"
                  :exclusions [javax.servlet/servlet-api]]
                 [org.eclipse.jetty/jetty-server ~jetty-version]
                 [org.eclipse.jetty.websocket/websocket-server ~jetty-version]
                 [org.eclipse.jetty.websocket/websocket-servlet ~jetty-version]
                 [org.eclipse.jetty.http2/http2-server ~jetty-version]
                 [org.eclipse.jetty/jetty-alpn-server ~jetty-version]
                 [org.eclipse.jetty/jetty-alpn-conscrypt-server ~jetty-version]
                 [org.conscrypt/conscrypt-openjdk-uber "1.3.0"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [org.clojure/tools.logging "0.4.0"]

                 ;; Front-back
                 [org.clojure/core.async "0.4.490"]]

  :main ^:skip-aot card-game.app

  :source-paths ["src" "clj-src"]

  :plugins [[lein-ring-jetty "0.1.0-SNAPSHOT"]]

  :ring {:handler card-game.app/app
         :websockets {"/game" card-game.ws-handler/handler}}

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" card-game.test-runner]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.1.9"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   }})

