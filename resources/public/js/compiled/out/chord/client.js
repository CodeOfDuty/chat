// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((function (){var and__5043__auto__ = (typeof require !== 'undefined');
if(and__5043__auto__){
try{return require("ws");
}catch (e30661){var e = e30661;
return false;
}} else {
return and__5043__auto__;
}
})())){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js.call(null,opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__5774__auto__ = [];
var len__5768__auto___30775 = arguments.length;
var i__5769__auto___30776 = (0);
while(true){
if((i__5769__auto___30776 < len__5768__auto___30775)){
args__5774__auto__.push((arguments[i__5769__auto___30776]));

var G__30777 = (i__5769__auto___30776 + (1));
i__5769__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__30666){
var vec__30667 = p__30666;
var map__30670 = cljs.core.nth.call(null,vec__30667,(0),null);
var map__30670__$1 = cljs.core.__destructure_map.call(null,map__30670);
var opts = map__30670__$1;
var read_ch = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.call(null,map__30670__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws.call(null,ws_url,ws_opts);
var map__30671 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__5045__auto__ = read_ch;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__5045__auto__ = write_ch;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__30671__$1 = cljs.core.__destructure_map.call(null,map__30671);
var read_ch__$1 = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__30662_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__30662_SHARP_);
}));

(web_socket.onclose = (function (p1__30663_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__30663_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__28523__auto___30778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30735 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30741_30779 = state_30739__$1;
(statearr_30741_30779[(2)] = inst_30735);

(statearr_30741_30779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (20))){
var state_30739__$1 = state_30739;
var statearr_30742_30780 = state_30739__$1;
(statearr_30742_30780[(2)] = null);

(statearr_30742_30780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var inst_30672 = false;
var state_30739__$1 = (function (){var statearr_30743 = state_30739;
(statearr_30743[(7)] = inst_30672);

return statearr_30743;
})();
var statearr_30744_30781 = state_30739__$1;
(statearr_30744_30781[(2)] = null);

(statearr_30744_30781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var inst_30687 = (state_30739[(8)]);
var inst_30689 = (state_30739[(9)]);
var inst_30681 = (state_30739[(10)]);
var inst_30687__$1 = (state_30739[(2)]);
var inst_30688 = cljs.core.nth.call(null,inst_30687__$1,(0),null);
var inst_30689__$1 = cljs.core.nth.call(null,inst_30687__$1,(1),null);
var inst_30690 = cljs.core._EQ_.call(null,inst_30689__$1,inst_30681);
var state_30739__$1 = (function (){var statearr_30745 = state_30739;
(statearr_30745[(11)] = inst_30688);

(statearr_30745[(8)] = inst_30687__$1);

(statearr_30745[(9)] = inst_30689__$1);

return statearr_30745;
})();
if(inst_30690){
var statearr_30746_30782 = state_30739__$1;
(statearr_30746_30782[(1)] = (5));

} else {
var statearr_30747_30783 = state_30739__$1;
(statearr_30747_30783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (15))){
var inst_30720 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30748_30784 = state_30739__$1;
(statearr_30748_30784[(2)] = inst_30720);

(statearr_30748_30784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (21))){
var inst_30731 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30749_30785 = state_30739__$1;
(statearr_30749_30785[(2)] = inst_30731);

(statearr_30749_30785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var state_30739__$1 = state_30739;
var statearr_30750_30786 = state_30739__$1;
(statearr_30750_30786[(2)] = null);

(statearr_30750_30786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (6))){
var inst_30682 = (state_30739[(12)]);
var inst_30689 = (state_30739[(9)]);
var inst_30704 = cljs.core._EQ_.call(null,inst_30689,inst_30682);
var state_30739__$1 = state_30739;
if(inst_30704){
var statearr_30751_30787 = state_30739__$1;
(statearr_30751_30787[(1)] = (9));

} else {
var statearr_30752_30788 = state_30739__$1;
(statearr_30752_30788[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (17))){
var state_30739__$1 = state_30739;
var statearr_30753_30789 = state_30739__$1;
(statearr_30753_30789[(2)] = initial_ch);

(statearr_30753_30789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30737 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30739__$1,inst_30737);
} else {
if((state_val_30740 === (12))){
var inst_30672 = (state_30739[(7)]);
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30672)){
var statearr_30754_30790 = state_30739__$1;
(statearr_30754_30790[(1)] = (16));

} else {
var statearr_30755_30791 = state_30739__$1;
(statearr_30755_30791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (2))){
var inst_30682 = (state_30739[(12)]);
var inst_30681 = (state_30739[(10)]);
var inst_30681__$1 = open_ch;
var inst_30682__$1 = close_ch;
var inst_30683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30684 = [inst_30681__$1,inst_30682__$1];
var inst_30685 = (new cljs.core.PersistentVector(null,2,(5),inst_30683,inst_30684,null));
var state_30739__$1 = (function (){var statearr_30756 = state_30739;
(statearr_30756[(12)] = inst_30682__$1);

(statearr_30756[(10)] = inst_30681__$1);

return statearr_30756;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30739__$1,(4),inst_30685);
} else {
if((state_val_30740 === (19))){
var inst_30688 = (state_30739[(11)]);
var state_30739__$1 = state_30739;
var statearr_30757_30792 = state_30739__$1;
(statearr_30757_30792[(2)] = inst_30688);

(statearr_30757_30792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (11))){
var inst_30733 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30758_30793 = state_30739__$1;
(statearr_30758_30793[(2)] = inst_30733);

(statearr_30758_30793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30687 = (state_30739[(8)]);
var inst_30710 = (state_30739[(13)]);
var inst_30709 = cljs.core.nth.call(null,inst_30687,(0),null);
var inst_30710__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_30709);
var state_30739__$1 = (function (){var statearr_30759 = state_30739;
(statearr_30759[(13)] = inst_30710__$1);

return statearr_30759;
})();
if(cljs.core.truth_(inst_30710__$1)){
var statearr_30760_30794 = state_30739__$1;
(statearr_30760_30794[(1)] = (12));

} else {
var statearr_30761_30795 = state_30739__$1;
(statearr_30761_30795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (5))){
var inst_30687 = (state_30739[(8)]);
var inst_30695 = cljs.core.nth.call(null,inst_30687,(0),null);
var inst_30696 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_30697 = [ws_chan];
var inst_30698 = cljs.core.PersistentHashMap.fromArrays(inst_30696,inst_30697);
var state_30739__$1 = (function (){var statearr_30762 = state_30739;
(statearr_30762[(14)] = inst_30695);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(8),initial_ch,inst_30698);
} else {
if((state_val_30740 === (14))){
var inst_30723 = (state_30739[(2)]);
var inst_30724 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_30725 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_30739__$1 = (function (){var statearr_30763 = state_30739;
(statearr_30763[(15)] = inst_30724);

(statearr_30763[(16)] = inst_30723);

return statearr_30763;
})();
var statearr_30764_30796 = state_30739__$1;
(statearr_30764_30796[(2)] = inst_30725);

(statearr_30764_30796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (16))){
var state_30739__$1 = state_30739;
var statearr_30765_30797 = state_30739__$1;
(statearr_30765_30797[(2)] = read_ch__$1);

(statearr_30765_30797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30689 = (state_30739[(9)]);
var inst_30727 = cljs.core._EQ_.call(null,inst_30689,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_30739__$1 = state_30739;
if(inst_30727){
var statearr_30766_30798 = state_30739__$1;
(statearr_30766_30798[(1)] = (19));

} else {
var statearr_30767_30799 = state_30739__$1;
(statearr_30767_30799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (18))){
var inst_30710 = (state_30739[(13)]);
var inst_30715 = (state_30739[(2)]);
var inst_30716 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30717 = [inst_30710];
var inst_30718 = cljs.core.PersistentHashMap.fromArrays(inst_30716,inst_30717);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(15),inst_30715,inst_30718);
} else {
if((state_val_30740 === (8))){
var inst_30700 = (state_30739[(2)]);
var inst_30701 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_30672 = true;
var state_30739__$1 = (function (){var statearr_30768 = state_30739;
(statearr_30768[(17)] = inst_30700);

(statearr_30768[(18)] = inst_30701);

(statearr_30768[(7)] = inst_30672);

return statearr_30768;
})();
var statearr_30769_30800 = state_30739__$1;
(statearr_30769_30800[(2)] = null);

(statearr_30769_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var chord$client$state_machine__28450__auto__ = null;
var chord$client$state_machine__28450__auto____0 = (function (){
var statearr_30770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30770[(0)] = chord$client$state_machine__28450__auto__);

(statearr_30770[(1)] = (1));

return statearr_30770;
});
var chord$client$state_machine__28450__auto____1 = (function (state_30739){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30771){var ex__28453__auto__ = e30771;
var statearr_30772_30801 = state_30739;
(statearr_30772_30801[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30739[(4)]))){
var statearr_30773_30802 = state_30739;
(statearr_30773_30802[(1)] = cljs.core.first.call(null,(state_30739[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30803 = state_30739;
state_30739 = G__30803;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
chord$client$state_machine__28450__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return chord$client$state_machine__28450__auto____0.call(this);
case 1:
return chord$client$state_machine__28450__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__28450__auto____0;
chord$client$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__28450__auto____1;
return chord$client$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30774 = f__28524__auto__.call(null);
(statearr_30774[(6)] = c__28523__auto___30778);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq30664){
var G__30665 = cljs.core.first.call(null,seq30664);
var seq30664__$1 = cljs.core.next.call(null,seq30664);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30665,seq30664__$1);
}));


//# sourceMappingURL=client.js.map?rel=1655379917944
