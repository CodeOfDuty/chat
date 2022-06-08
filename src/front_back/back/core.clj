(ns back.core
  (:require [org.httpkit.server :refer :all]
        [compojure.core :refer :all]
        [compojure.route :as route]
        [ring.util.response :as response]
        )
  )

(use 'org.httpkit.timer)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(defn app [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})

(defonce server (atom nil))

(defn stop-server []
  (when-not (nil? @server)
    ;; graceful shutdown: wait 100ms for existing requests to be finished
    ;; :timeout is optional, when no timeout, stop immediately
    (@server :timeout 100)
    (reset! server nil)))

(defn ws-handler [request]
  (with-channel request channel
                (on-close channel (fn [status] (println "channel closed: " status)))
                (on-receive channel (fn [data] ;; echo it back
                                      (println "data: " data)
                                      (send! channel data)))))

(defroutes all-routes
           (GET "/hello" [] "<h1>Hello World</h1>")
           (GET "/ws" [] ws-handler)
           (GET "/index" [] (fn [req] (println "index" req) (response/resource-response "index.html")))
           (route/not-found "<h1>Page not found</h1>"))

(defn -main [& args]
   (run-server all-routes {:port 8080}))