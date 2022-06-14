(defproject front_back "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [http-kit "2.5.3"]
                 [compojure "1.7.0"]
                 [org.clojure/clojurescript "1.11.57"]
                 [org.clojure/core.async "1.5.648"]
                 [jarohen/chord "0.8.1"]
                 [reagent "1.1.1"]
                 [medley "1.4.0"]]
  :plugins [[lein-figwheel "0.5.20" :exclusions [[http-kit]]]
            [lein-ancient "0.7.0"]
            [lein-cljsbuild "1.1.8" :exclusions [[org.clojure/clojure]]]]
  :source-paths ["src/front_back"]
  :main back.core
  :resource-paths ["resources"]
  :uberjar-name "chat-simple.jar"
  :figwheel {:server-port 3449 ;; default
             :server-ip "127.0.0.1"
             :server-logfile false
             :css-dirs ["resources/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;:ring-handler back.core/app

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; to pipe all the output to the repl
             ;; :server-logfile false
             }

  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.20" :exclusions [[http-kit]]]
                                  [cider/piggieback "0.5.3"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :cljsbuild {:builds {:dev {:source-paths ["src/front"]
                                              :figwheel true
                                              :compiler {:main chat.core
                                                         :asset-path "js/compiled/out"
                                                         :output-to "resources/js/compiled/chat.js"
                                                         :output-dir "resources/js/compiled/out"
                                                         :source-map-timestamp true}}}}

                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/js/compiled"
                                                     :target-path]}})
