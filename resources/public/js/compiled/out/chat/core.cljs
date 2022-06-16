(ns chat.core
  (:require
            [chord.client :refer [ws-ch]]
            [cljs.core.async :as async :include-macros true]))

(goog-define ws-url "ws://localhost:3449/ws")

(enable-console-print!)

(println "hola" ws-url)
(println "going to channel")

(defn send-message [channel message]
  (println "going to send")
  (async/go (async/>! channel message)))

(defn connect []
  (println "in connect")
  (async/go
    (println "gog go go")
    (let [{:keys [ws-channel error]} (async/<! (ws-ch ws-url))]
      (println "in go: let")
      (if error
        (println "Something went wrong with the websocket")
        (do
          (println "set-up sockets sending message")
          (send-message ws-channel "hola des de client"))))))

(connect)


