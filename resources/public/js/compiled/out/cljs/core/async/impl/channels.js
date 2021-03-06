// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219 = (function (val,meta26220){
this.val = val;
this.meta26220 = meta26220;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26221,meta26220__$1){
var self__ = this;
var _26221__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219(self__.val,meta26220__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26221){
var self__ = this;
var _26221__$1 = this;
return self__.meta26220;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta26220","meta26220",-1873346692,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26219");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26219");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels26219.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels26219 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels26219(val__$1,meta26220){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219(val__$1,meta26220));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels26219(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_26222 = (function (this$){
var x__5392__auto__ = (((this$ == null))?null:this$);
var m__5393__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,this$);
} else {
var m__5391__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_26222.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_26234 = self__.puts.pop();
if((putter_26234 == null)){
} else {
var put_handler_26235 = putter_26234.handler;
var val_26236 = putter_26234.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_26235)){
var put_cb_26237 = cljs.core.async.impl.protocols.commit.call(null,put_handler_26235);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_26237,put_handler_26235,val_26236,putter_26234,this$__$1){
return (function (){
return put_cb_26237.call(null,true);
});})(put_cb_26237,put_handler_26235,val_26236,putter_26234,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(closed__$1){
cljs.core.async.impl.protocols.commit.call(null,handler);

return cljs.core.async.impl.channels.box.call(null,false);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__5043__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__26238 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__26238;
continue;
} else {
var G__26239 = takers;
takers = G__26239;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__26223_26240 = cljs.core.seq.call(null,take_cbs);
var chunk__26224_26241 = null;
var count__26225_26242 = (0);
var i__26226_26243 = (0);
while(true){
if((i__26226_26243 < count__26225_26242)){
var f_26244 = cljs.core._nth.call(null,chunk__26224_26241,i__26226_26243);
cljs.core.async.impl.dispatch.run.call(null,f_26244);


var G__26245 = seq__26223_26240;
var G__26246 = chunk__26224_26241;
var G__26247 = count__26225_26242;
var G__26248 = (i__26226_26243 + (1));
seq__26223_26240 = G__26245;
chunk__26224_26241 = G__26246;
count__26225_26242 = G__26247;
i__26226_26243 = G__26248;
continue;
} else {
var temp__5735__auto___26249 = cljs.core.seq.call(null,seq__26223_26240);
if(temp__5735__auto___26249){
var seq__26223_26250__$1 = temp__5735__auto___26249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26223_26250__$1)){
var c__5567__auto___26251 = cljs.core.chunk_first.call(null,seq__26223_26250__$1);
var G__26252 = cljs.core.chunk_rest.call(null,seq__26223_26250__$1);
var G__26253 = c__5567__auto___26251;
var G__26254 = cljs.core.count.call(null,c__5567__auto___26251);
var G__26255 = (0);
seq__26223_26240 = G__26252;
chunk__26224_26241 = G__26253;
count__26225_26242 = G__26254;
i__26226_26243 = G__26255;
continue;
} else {
var f_26256 = cljs.core.first.call(null,seq__26223_26250__$1);
cljs.core.async.impl.dispatch.run.call(null,f_26256);


var G__26257 = cljs.core.next.call(null,seq__26223_26250__$1);
var G__26258 = null;
var G__26259 = (0);
var G__26260 = (0);
seq__26223_26240 = G__26257;
chunk__26224_26241 = G__26258;
count__26225_26242 = G__26259;
i__26226_26243 = G__26260;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5733__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__26227 = ((((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__5043__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__5043__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))))){
var G__26261 = cbs__$1;
cbs = G__26261;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__26227,(0),null);
var cbs = cljs.core.nth.call(null,vec__26227,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__26230_26262 = cljs.core.seq.call(null,cbs);
var chunk__26231_26263 = null;
var count__26232_26264 = (0);
var i__26233_26265 = (0);
while(true){
if((i__26233_26265 < count__26232_26264)){
var cb_26266 = cljs.core._nth.call(null,chunk__26231_26263,i__26233_26265);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__26230_26262,chunk__26231_26263,count__26232_26264,i__26233_26265,cb_26266,val,vec__26227,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_26266.call(null,true);
});})(seq__26230_26262,chunk__26231_26263,count__26232_26264,i__26233_26265,cb_26266,val,vec__26227,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__26267 = seq__26230_26262;
var G__26268 = chunk__26231_26263;
var G__26269 = count__26232_26264;
var G__26270 = (i__26233_26265 + (1));
seq__26230_26262 = G__26267;
chunk__26231_26263 = G__26268;
count__26232_26264 = G__26269;
i__26233_26265 = G__26270;
continue;
} else {
var temp__5735__auto___26271 = cljs.core.seq.call(null,seq__26230_26262);
if(temp__5735__auto___26271){
var seq__26230_26272__$1 = temp__5735__auto___26271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26230_26272__$1)){
var c__5567__auto___26273 = cljs.core.chunk_first.call(null,seq__26230_26272__$1);
var G__26274 = cljs.core.chunk_rest.call(null,seq__26230_26272__$1);
var G__26275 = c__5567__auto___26273;
var G__26276 = cljs.core.count.call(null,c__5567__auto___26273);
var G__26277 = (0);
seq__26230_26262 = G__26274;
chunk__26231_26263 = G__26275;
count__26232_26264 = G__26276;
i__26233_26265 = G__26277;
continue;
} else {
var cb_26278 = cljs.core.first.call(null,seq__26230_26272__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__26230_26262,chunk__26231_26263,count__26232_26264,i__26233_26265,cb_26278,seq__26230_26272__$1,temp__5735__auto___26271,val,vec__26227,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return cb_26278.call(null,true);
});})(seq__26230_26262,chunk__26231_26263,count__26232_26264,i__26233_26265,cb_26278,seq__26230_26272__$1,temp__5735__auto___26271,val,vec__26227,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__26279 = cljs.core.next.call(null,seq__26230_26272__$1);
var G__26280 = null;
var G__26281 = (0);
var G__26282 = (0);
seq__26230_26262 = G__26279;
chunk__26231_26263 = G__26280;
count__26232_26264 = G__26281;
i__26233_26265 = G__26282;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__5043__auto__;
}
})())){
var has_val = (function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5043__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (self__.puts.length === (0));
} else {
return and__5043__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_26283 = self__.takes.pop();
if((taker_26283 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_26283)){
var take_cb_26284 = cljs.core.async.impl.protocols.commit.call(null,taker_26283);
var val_26285 = (cljs.core.truth_((function (){var and__5043__auto__ = self__.buf;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__5043__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_26284,val_26285,taker_26283,this$__$1){
return (function (){
return take_cb_26284.call(null,val_26285);
});})(take_cb_26284,val_26285,taker_26283,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__5045__auto__ = exh;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__26287 = arguments.length;
switch (G__26287) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__26291 = null;
var G__26291__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e26288){var t = e26288;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__26291__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e26289){var t = e26289;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__26291 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__26291__1.call(this,buf__$1);
case 2:
return G__26291__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26291.cljs$core$IFn$_invoke$arity$1 = G__26291__1;
G__26291.cljs$core$IFn$_invoke$arity$2 = G__26291__2;
return G__26291;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map?rel=1655379913906
