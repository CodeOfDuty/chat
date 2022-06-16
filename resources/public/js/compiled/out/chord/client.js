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
}catch (e39932){var e = e39932;
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
var len__5768__auto___40046 = arguments.length;
var i__5769__auto___40047 = (0);
while(true){
if((i__5769__auto___40047 < len__5768__auto___40046)){
args__5774__auto__.push((arguments[i__5769__auto___40047]));

var G__40048 = (i__5769__auto___40047 + (1));
i__5769__auto___40047 = G__40048;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__39937){
var vec__39938 = p__39937;
var map__39941 = cljs.core.nth.call(null,vec__39938,(0),null);
var map__39941__$1 = cljs.core.__destructure_map.call(null,map__39941);
var opts = map__39941__$1;
var read_ch = cljs.core.get.call(null,map__39941__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__39941__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__39941__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.call(null,map__39941__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws.call(null,ws_url,ws_opts);
var map__39942 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__5045__auto__ = read_ch;
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
var map__39942__$1 = cljs.core.__destructure_map.call(null,map__39942);
var read_ch__$1 = cljs.core.get.call(null,map__39942__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__39942__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__39933_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__39933_SHARP_);
}));

(web_socket.onclose = (function (p1__39934_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__39934_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__27420__auto___40049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_40010){
var state_val_40011 = (state_40010[(1)]);
if((state_val_40011 === (7))){
var inst_40006 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40012_40050 = state_40010__$1;
(statearr_40012_40050[(2)] = inst_40006);

(statearr_40012_40050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (20))){
var state_40010__$1 = state_40010;
var statearr_40013_40051 = state_40010__$1;
(statearr_40013_40051[(2)] = null);

(statearr_40013_40051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (1))){
var inst_39943 = false;
var state_40010__$1 = (function (){var statearr_40014 = state_40010;
(statearr_40014[(7)] = inst_39943);

return statearr_40014;
})();
var statearr_40015_40052 = state_40010__$1;
(statearr_40015_40052[(2)] = null);

(statearr_40015_40052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (4))){
var inst_39958 = (state_40010[(8)]);
var inst_39952 = (state_40010[(9)]);
var inst_39960 = (state_40010[(10)]);
var inst_39958__$1 = (state_40010[(2)]);
var inst_39959 = cljs.core.nth.call(null,inst_39958__$1,(0),null);
var inst_39960__$1 = cljs.core.nth.call(null,inst_39958__$1,(1),null);
var inst_39961 = cljs.core._EQ_.call(null,inst_39960__$1,inst_39952);
var state_40010__$1 = (function (){var statearr_40016 = state_40010;
(statearr_40016[(8)] = inst_39958__$1);

(statearr_40016[(11)] = inst_39959);

(statearr_40016[(10)] = inst_39960__$1);

return statearr_40016;
})();
if(inst_39961){
var statearr_40017_40053 = state_40010__$1;
(statearr_40017_40053[(1)] = (5));

} else {
var statearr_40018_40054 = state_40010__$1;
(statearr_40018_40054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (15))){
var inst_39991 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40019_40055 = state_40010__$1;
(statearr_40019_40055[(2)] = inst_39991);

(statearr_40019_40055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (21))){
var inst_40002 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40020_40056 = state_40010__$1;
(statearr_40020_40056[(2)] = inst_40002);

(statearr_40020_40056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (13))){
var state_40010__$1 = state_40010;
var statearr_40021_40057 = state_40010__$1;
(statearr_40021_40057[(2)] = null);

(statearr_40021_40057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (6))){
var inst_39953 = (state_40010[(12)]);
var inst_39960 = (state_40010[(10)]);
var inst_39975 = cljs.core._EQ_.call(null,inst_39960,inst_39953);
var state_40010__$1 = state_40010;
if(inst_39975){
var statearr_40022_40058 = state_40010__$1;
(statearr_40022_40058[(1)] = (9));

} else {
var statearr_40023_40059 = state_40010__$1;
(statearr_40023_40059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (17))){
var state_40010__$1 = state_40010;
var statearr_40024_40060 = state_40010__$1;
(statearr_40024_40060[(2)] = initial_ch);

(statearr_40024_40060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (3))){
var inst_40008 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40010__$1,inst_40008);
} else {
if((state_val_40011 === (12))){
var inst_39943 = (state_40010[(7)]);
var state_40010__$1 = state_40010;
if(cljs.core.truth_(inst_39943)){
var statearr_40025_40061 = state_40010__$1;
(statearr_40025_40061[(1)] = (16));

} else {
var statearr_40026_40062 = state_40010__$1;
(statearr_40026_40062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (2))){
var inst_39953 = (state_40010[(12)]);
var inst_39952 = (state_40010[(9)]);
var inst_39952__$1 = open_ch;
var inst_39953__$1 = close_ch;
var inst_39954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39955 = [inst_39952__$1,inst_39953__$1];
var inst_39956 = (new cljs.core.PersistentVector(null,2,(5),inst_39954,inst_39955,null));
var state_40010__$1 = (function (){var statearr_40027 = state_40010;
(statearr_40027[(12)] = inst_39953__$1);

(statearr_40027[(9)] = inst_39952__$1);

return statearr_40027;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40010__$1,(4),inst_39956);
} else {
if((state_val_40011 === (19))){
var inst_39959 = (state_40010[(11)]);
var state_40010__$1 = state_40010;
var statearr_40028_40063 = state_40010__$1;
(statearr_40028_40063[(2)] = inst_39959);

(statearr_40028_40063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (11))){
var inst_40004 = (state_40010[(2)]);
var state_40010__$1 = state_40010;
var statearr_40029_40064 = state_40010__$1;
(statearr_40029_40064[(2)] = inst_40004);

(statearr_40029_40064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (9))){
var inst_39958 = (state_40010[(8)]);
var inst_39981 = (state_40010[(13)]);
var inst_39980 = cljs.core.nth.call(null,inst_39958,(0),null);
var inst_39981__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_39980);
var state_40010__$1 = (function (){var statearr_40030 = state_40010;
(statearr_40030[(13)] = inst_39981__$1);

return statearr_40030;
})();
if(cljs.core.truth_(inst_39981__$1)){
var statearr_40031_40065 = state_40010__$1;
(statearr_40031_40065[(1)] = (12));

} else {
var statearr_40032_40066 = state_40010__$1;
(statearr_40032_40066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (5))){
var inst_39958 = (state_40010[(8)]);
var inst_39966 = cljs.core.nth.call(null,inst_39958,(0),null);
var inst_39967 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_39968 = [ws_chan];
var inst_39969 = cljs.core.PersistentHashMap.fromArrays(inst_39967,inst_39968);
var state_40010__$1 = (function (){var statearr_40033 = state_40010;
(statearr_40033[(14)] = inst_39966);

return statearr_40033;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40010__$1,(8),initial_ch,inst_39969);
} else {
if((state_val_40011 === (14))){
var inst_39994 = (state_40010[(2)]);
var inst_39995 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_39996 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_40010__$1 = (function (){var statearr_40034 = state_40010;
(statearr_40034[(15)] = inst_39995);

(statearr_40034[(16)] = inst_39994);

return statearr_40034;
})();
var statearr_40035_40067 = state_40010__$1;
(statearr_40035_40067[(2)] = inst_39996);

(statearr_40035_40067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (16))){
var state_40010__$1 = state_40010;
var statearr_40036_40068 = state_40010__$1;
(statearr_40036_40068[(2)] = read_ch__$1);

(statearr_40036_40068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (10))){
var inst_39960 = (state_40010[(10)]);
var inst_39998 = cljs.core._EQ_.call(null,inst_39960,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_40010__$1 = state_40010;
if(inst_39998){
var statearr_40037_40069 = state_40010__$1;
(statearr_40037_40069[(1)] = (19));

} else {
var statearr_40038_40070 = state_40010__$1;
(statearr_40038_40070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40011 === (18))){
var inst_39981 = (state_40010[(13)]);
var inst_39986 = (state_40010[(2)]);
var inst_39987 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_39988 = [inst_39981];
var inst_39989 = cljs.core.PersistentHashMap.fromArrays(inst_39987,inst_39988);
var state_40010__$1 = state_40010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40010__$1,(15),inst_39986,inst_39989);
} else {
if((state_val_40011 === (8))){
var inst_39971 = (state_40010[(2)]);
var inst_39972 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_39943 = true;
var state_40010__$1 = (function (){var statearr_40039 = state_40010;
(statearr_40039[(17)] = inst_39971);

(statearr_40039[(18)] = inst_39972);

(statearr_40039[(7)] = inst_39943);

return statearr_40039;
})();
var statearr_40040_40071 = state_40010__$1;
(statearr_40040_40071[(2)] = null);

(statearr_40040_40071[(1)] = (2));


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
var chord$client$state_machine__27347__auto__ = null;
var chord$client$state_machine__27347__auto____0 = (function (){
var statearr_40041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40041[(0)] = chord$client$state_machine__27347__auto__);

(statearr_40041[(1)] = (1));

return statearr_40041;
});
var chord$client$state_machine__27347__auto____1 = (function (state_40010){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_40010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e40042){var ex__27350__auto__ = e40042;
var statearr_40043_40072 = state_40010;
(statearr_40043_40072[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_40010[(4)]))){
var statearr_40044_40073 = state_40010;
(statearr_40044_40073[(1)] = cljs.core.first.call(null,(state_40010[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40074 = state_40010;
state_40010 = G__40074;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
chord$client$state_machine__27347__auto__ = function(state_40010){
switch(arguments.length){
case 0:
return chord$client$state_machine__27347__auto____0.call(this);
case 1:
return chord$client$state_machine__27347__auto____1.call(this,state_40010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__27347__auto____0;
chord$client$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__27347__auto____1;
return chord$client$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_40045 = f__27421__auto__.call(null);
(statearr_40045[(6)] = c__27420__auto___40049);

return statearr_40045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq39935){
var G__39936 = cljs.core.first.call(null,seq39935);
var seq39935__$1 = cljs.core.next.call(null,seq39935);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39936,seq39935__$1);
}));


//# sourceMappingURL=client.js.map?rel=1655293794812
