(ns back.core
  (:require [org.httpkit.server :refer :all]
        [compojure.core :refer :all]
        [compojure.route :as route]
        [ring.util.response :as response]
        )
  (:gen-class))


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

(println "a random print :--------) ")

(defn stop-server []
  (when-not (nil? @server)
    ;; graceful shutdown: wait 100ms for existing requests to be finished
    ;; :timeout is optional, when no timeout, stop immediately
    (@server :timeout 100)
    (reset! server nil)))

(defn ws-handler [request]
  (println "in ws handler")
  (with-channel request channel
                (on-close channel (fn [status] (println "channel closed: " status)))
                (on-receive channel (fn [data] ;; echo it back
                                      (println "data: " data)
                                      (println "message: " (str "Response from server: " data))
                                      (send! channel "hola-from-server")))))

(defroutes all-routes
           (GET "/hello" [] "<h1>Hello World</h1>")
           (GET "/ws" [] ws-handler)
           (GET "/index" [] (fn [req] (println "index" req) (response/resource-response "index.html" {:root "public"})))
           (route/not-found (fn [req] (println "not found" req) "<h1>Page not found</h1>")))

(defn -main
  [& [port]]
  (println "in main............")
  (run-server all-routes {:port (or (Integer. port) 8080)}))
