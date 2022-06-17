// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return (ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30487){
var state_val_30488 = (state_30487[(1)]);
if((state_val_30488 === (1))){
var state_30487__$1 = state_30487;
var statearr_30489_30502 = state_30487__$1;
(statearr_30489_30502[(2)] = null);

(statearr_30489_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (2))){
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30487__$1,(4),ch);
} else {
if((state_val_30488 === (3))){
var inst_30485 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30487__$1,inst_30485);
} else {
if((state_val_30488 === (4))){
var inst_30477 = (state_30487[(7)]);
var inst_30477__$1 = (state_30487[(2)]);
var state_30487__$1 = (function (){var statearr_30490 = state_30487;
(statearr_30490[(7)] = inst_30477__$1);

return statearr_30490;
})();
if(cljs.core.truth_(inst_30477__$1)){
var statearr_30491_30503 = state_30487__$1;
(statearr_30491_30503[(1)] = (5));

} else {
var statearr_30492_30504 = state_30487__$1;
(statearr_30492_30504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (5))){
var inst_30477 = (state_30487[(7)]);
var inst_30479 = ws.send(inst_30477);
var state_30487__$1 = (function (){var statearr_30493 = state_30487;
(statearr_30493[(8)] = inst_30479);

return statearr_30493;
})();
var statearr_30494_30505 = state_30487__$1;
(statearr_30494_30505[(2)] = null);

(statearr_30494_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (6))){
var state_30487__$1 = state_30487;
var statearr_30495_30506 = state_30487__$1;
(statearr_30495_30506[(2)] = null);

(statearr_30495_30506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (7))){
var inst_30483 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30496_30507 = state_30487__$1;
(statearr_30496_30507[(2)] = inst_30483);

(statearr_30496_30507[(1)] = (3));


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
});
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____0 = (function (){
var statearr_30497 = [null,null,null,null,null,null,null,null,null];
(statearr_30497[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__);

(statearr_30497[(1)] = (1));

return statearr_30497;
});
var chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____1 = (function (state_30487){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30498){var ex__28453__auto__ = e30498;
var statearr_30499_30508 = state_30487;
(statearr_30499_30508[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30487[(4)]))){
var statearr_30500_30509 = state_30487;
(statearr_30500_30509[(1)] = cljs.core.first.call(null,(state_30487[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30510 = state_30487;
state_30487 = G__30510;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__ = function(state_30487){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____1.call(this,state_30487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__28450__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30501 = f__28524__auto__.call(null);
(statearr_30501[(6)] = c__28523__auto__);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__5774__auto__ = [];
var len__5768__auto___30522 = arguments.length;
var i__5769__auto___30523 = (0);
while(true){
if((i__5769__auto___30523 < len__5768__auto___30522)){
args__5774__auto__.push((arguments[i__5769__auto___30523]));

var G__30524 = (i__5769__auto___30523 + (1));
i__5769__auto___30523 = G__30524;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__30514){
var vec__30515 = p__30514;
var map__30518 = cljs.core.nth.call(null,vec__30515,(0),null);
var map__30518__$1 = cljs.core.__destructure_map.call(null,map__30518);
var on_close = cljs.core.get.call(null,map__30518__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels30519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels30519 = (function (read_ch,write_ch,p__30514,vec__30515,map__30518,on_close,meta30520){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__30514 = p__30514;
this.vec__30515 = vec__30515;
this.map__30518 = map__30518;
this.on_close = on_close;
this.meta30520 = meta30520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels30519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30521,meta30520__$1){
var self__ = this;
var _30521__$1 = this;
return (new chord.channels.t_chord$channels30519(self__.read_ch,self__.write_ch,self__.p__30514,self__.vec__30515,self__.map__30518,self__.on_close,meta30520__$1));
}));

(chord.channels.t_chord$channels30519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30521){
var self__ = this;
var _30521__$1 = this;
return self__.meta30520;
}));

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
}));

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels30519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
}));

(chord.channels.t_chord$channels30519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__30514","p__30514",-1860032543,null),new cljs.core.Symbol(null,"vec__30515","vec__30515",1124514006,null),new cljs.core.Symbol(null,"map__30518","map__30518",-1426547876,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta30520","meta30520",-1402435610,null)], null);
}));

(chord.channels.t_chord$channels30519.cljs$lang$type = true);

(chord.channels.t_chord$channels30519.cljs$lang$ctorStr = "chord.channels/t_chord$channels30519");

(chord.channels.t_chord$channels30519.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.channels/t_chord$channels30519");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels30519.
 */
chord.channels.__GT_t_chord$channels30519 = (function chord$channels$__GT_t_chord$channels30519(read_ch__$1,write_ch__$1,p__30514__$1,vec__30515__$1,map__30518__$2,on_close__$1,meta30520){
return (new chord.channels.t_chord$channels30519(read_ch__$1,write_ch__$1,p__30514__$1,vec__30515__$1,map__30518__$2,on_close__$1,meta30520));
});

}

return (new chord.channels.t_chord$channels30519(read_ch,write_ch,p__30514,vec__30515,map__30518__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq30511){
var G__30512 = cljs.core.first.call(null,seq30511);
var seq30511__$1 = cljs.core.next.call(null,seq30511);
var G__30513 = cljs.core.first.call(null,seq30511__$1);
var seq30511__$2 = cljs.core.next.call(null,seq30511__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30512,G__30513,seq30511__$2);
}));


//# sourceMappingURL=channels.js.map?rel=1655379917669
