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
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_39717){
var state_val_39718 = (state_39717[(1)]);
if((state_val_39718 === (1))){
var state_39717__$1 = state_39717;
var statearr_39719_39732 = state_39717__$1;
(statearr_39719_39732[(2)] = null);

(statearr_39719_39732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39718 === (2))){
var state_39717__$1 = state_39717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39717__$1,(4),ch);
} else {
if((state_val_39718 === (3))){
var inst_39715 = (state_39717[(2)]);
var state_39717__$1 = state_39717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39717__$1,inst_39715);
} else {
if((state_val_39718 === (4))){
var inst_39707 = (state_39717[(7)]);
var inst_39707__$1 = (state_39717[(2)]);
var state_39717__$1 = (function (){var statearr_39720 = state_39717;
(statearr_39720[(7)] = inst_39707__$1);

return statearr_39720;
})();
if(cljs.core.truth_(inst_39707__$1)){
var statearr_39721_39733 = state_39717__$1;
(statearr_39721_39733[(1)] = (5));

} else {
var statearr_39722_39734 = state_39717__$1;
(statearr_39722_39734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39718 === (5))){
var inst_39707 = (state_39717[(7)]);
var inst_39709 = ws.send(inst_39707);
var state_39717__$1 = (function (){var statearr_39723 = state_39717;
(statearr_39723[(8)] = inst_39709);

return statearr_39723;
})();
var statearr_39724_39735 = state_39717__$1;
(statearr_39724_39735[(2)] = null);

(statearr_39724_39735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39718 === (6))){
var state_39717__$1 = state_39717;
var statearr_39725_39736 = state_39717__$1;
(statearr_39725_39736[(2)] = null);

(statearr_39725_39736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39718 === (7))){
var inst_39713 = (state_39717[(2)]);
var state_39717__$1 = state_39717;
var statearr_39726_39737 = state_39717__$1;
(statearr_39726_39737[(2)] = inst_39713);

(statearr_39726_39737[(1)] = (3));


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
var chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____0 = (function (){
var statearr_39727 = [null,null,null,null,null,null,null,null,null];
(statearr_39727[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__);

(statearr_39727[(1)] = (1));

return statearr_39727;
});
var chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____1 = (function (state_39717){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_39717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e39728){var ex__27350__auto__ = e39728;
var statearr_39729_39738 = state_39717;
(statearr_39729_39738[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_39717[(4)]))){
var statearr_39730_39739 = state_39717;
(statearr_39730_39739[(1)] = cljs.core.first.call(null,(state_39717[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39740 = state_39717;
state_39717 = G__39740;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__ = function(state_39717){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____1.call(this,state_39717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__27347__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_39731 = f__27421__auto__.call(null);
(statearr_39731[(6)] = c__27420__auto__);

return statearr_39731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__5774__auto__ = [];
var len__5768__auto___39752 = arguments.length;
var i__5769__auto___39753 = (0);
while(true){
if((i__5769__auto___39753 < len__5768__auto___39752)){
args__5774__auto__.push((arguments[i__5769__auto___39753]));

var G__39754 = (i__5769__auto___39753 + (1));
i__5769__auto___39753 = G__39754;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__39744){
var vec__39745 = p__39744;
var map__39748 = cljs.core.nth.call(null,vec__39745,(0),null);
var map__39748__$1 = cljs.core.__destructure_map.call(null,map__39748);
var on_close = cljs.core.get.call(null,map__39748__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels39749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels39749 = (function (read_ch,write_ch,p__39744,vec__39745,map__39748,on_close,meta39750){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__39744 = p__39744;
this.vec__39745 = vec__39745;
this.map__39748 = map__39748;
this.on_close = on_close;
this.meta39750 = meta39750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels39749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39751,meta39750__$1){
var self__ = this;
var _39751__$1 = this;
return (new chord.channels.t_chord$channels39749(self__.read_ch,self__.write_ch,self__.p__39744,self__.vec__39745,self__.map__39748,self__.on_close,meta39750__$1));
}));

(chord.channels.t_chord$channels39749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39751){
var self__ = this;
var _39751__$1 = this;
return self__.meta39750;
}));

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
}));

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels39749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
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

(chord.channels.t_chord$channels39749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__39744","p__39744",1940858032,null),new cljs.core.Symbol(null,"vec__39745","vec__39745",1795240253,null),new cljs.core.Symbol(null,"map__39748","map__39748",-317714217,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta39750","meta39750",-539558367,null)], null);
}));

(chord.channels.t_chord$channels39749.cljs$lang$type = true);

(chord.channels.t_chord$channels39749.cljs$lang$ctorStr = "chord.channels/t_chord$channels39749");

(chord.channels.t_chord$channels39749.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.channels/t_chord$channels39749");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels39749.
 */
chord.channels.__GT_t_chord$channels39749 = (function chord$channels$__GT_t_chord$channels39749(read_ch__$1,write_ch__$1,p__39744__$1,vec__39745__$1,map__39748__$2,on_close__$1,meta39750){
return (new chord.channels.t_chord$channels39749(read_ch__$1,write_ch__$1,p__39744__$1,vec__39745__$1,map__39748__$2,on_close__$1,meta39750));
});

}

return (new chord.channels.t_chord$channels39749(read_ch,write_ch,p__39744,vec__39745,map__39748__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq39741){
var G__39742 = cljs.core.first.call(null,seq39741);
var seq39741__$1 = cljs.core.next.call(null,seq39741);
var G__39743 = cljs.core.first.call(null,seq39741__$1);
var seq39741__$2 = cljs.core.next.call(null,seq39741__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39742,G__39743,seq39741__$2);
}));


//# sourceMappingURL=channels.js.map?rel=1655293794397
