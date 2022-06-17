(ns chat.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.dom :as rdom]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :as async :include-macros true]))

(goog-define ws-url "ws://localhost:3449/ws")

(enable-console-print!)

(println "hola" ws-url)
(println "going to channel")

(defn send-message [channel message]
  (println "going to send")
  (async/go (async/>! channel message)))

(defn receive-message [channel]
  (async/go
    (if-let [server-msg (:message (async/<! channel))]
      (do (println server-msg))
      (println "Socket closed"))))

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
          (send-message ws-channel (str "hola des de client"))
          (receive-message ws-channel))))))

(connect)


(defn app-container []
  [:h2 "Second title"]
  [:p "a paragraph"]
  )

(rdom/render [app-container]
                (. js/document (getElementById "app")))


