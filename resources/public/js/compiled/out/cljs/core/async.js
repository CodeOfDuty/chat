// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27480 = arguments.length;
switch (G__27480) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27481 = (function (f,blockable,meta27482){
this.f = f;
this.blockable = blockable;
this.meta27482 = meta27482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27483,meta27482__$1){
var self__ = this;
var _27483__$1 = this;
return (new cljs.core.async.t_cljs$core$async27481(self__.f,self__.blockable,meta27482__$1));
}));

(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27483){
var self__ = this;
var _27483__$1 = this;
return self__.meta27482;
}));

(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27482","meta27482",-1167989456,null)], null);
}));

(cljs.core.async.t_cljs$core$async27481.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27481");

(cljs.core.async.t_cljs$core$async27481.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27481");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27481.
 */
cljs.core.async.__GT_t_cljs$core$async27481 = (function cljs$core$async$__GT_t_cljs$core$async27481(f__$1,blockable__$1,meta27482){
return (new cljs.core.async.t_cljs$core$async27481(f__$1,blockable__$1,meta27482));
});

}

return (new cljs.core.async.t_cljs$core$async27481(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27487 = arguments.length;
switch (G__27487) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27490 = arguments.length;
switch (G__27490) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27493 = arguments.length;
switch (G__27493) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27495 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27495);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27495);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27497 = arguments.length;
switch (G__27497) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5635__auto___27499 = n;
var x_27500 = (0);
while(true){
if((x_27500 < n__5635__auto___27499)){
(a[x_27500] = x_27500);

var G__27501 = (x_27500 + (1));
x_27500 = G__27501;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27502 = (function (flag,meta27503){
this.flag = flag;
this.meta27503 = meta27503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27504,meta27503__$1){
var self__ = this;
var _27504__$1 = this;
return (new cljs.core.async.t_cljs$core$async27502(self__.flag,meta27503__$1));
}));

(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27504){
var self__ = this;
var _27504__$1 = this;
return self__.meta27503;
}));

(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27503","meta27503",-1490206063,null)], null);
}));

(cljs.core.async.t_cljs$core$async27502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27502");

(cljs.core.async.t_cljs$core$async27502.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27502.
 */
cljs.core.async.__GT_t_cljs$core$async27502 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27502(flag__$1,meta27503){
return (new cljs.core.async.t_cljs$core$async27502(flag__$1,meta27503));
});

}

return (new cljs.core.async.t_cljs$core$async27502(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27505 = (function (flag,cb,meta27506){
this.flag = flag;
this.cb = cb;
this.meta27506 = meta27506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27507,meta27506__$1){
var self__ = this;
var _27507__$1 = this;
return (new cljs.core.async.t_cljs$core$async27505(self__.flag,self__.cb,meta27506__$1));
}));

(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27507){
var self__ = this;
var _27507__$1 = this;
return self__.meta27506;
}));

(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27506","meta27506",-1052276881,null)], null);
}));

(cljs.core.async.t_cljs$core$async27505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27505");

(cljs.core.async.t_cljs$core$async27505.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27505.
 */
cljs.core.async.__GT_t_cljs$core$async27505 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27505(flag__$1,cb__$1,meta27506){
return (new cljs.core.async.t_cljs$core$async27505(flag__$1,cb__$1,meta27506));
});

}

return (new cljs.core.async.t_cljs$core$async27505(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27508_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27508_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27509_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27509_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27510 = (i + (1));
i = G__27510;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___27515 = arguments.length;
var i__5769__auto___27516 = (0);
while(true){
if((i__5769__auto___27516 < len__5768__auto___27515)){
args__5774__auto__.push((arguments[i__5769__auto___27516]));

var G__27517 = (i__5769__auto___27516 + (1));
i__5769__auto___27516 = G__27517;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27513){
var map__27514 = p__27513;
var map__27514__$1 = cljs.core.__destructure_map.call(null,map__27514);
var opts = map__27514__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27511){
var G__27512 = cljs.core.first.call(null,seq27511);
var seq27511__$1 = cljs.core.next.call(null,seq27511);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27512,seq27511__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27519 = arguments.length;
switch (G__27519) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27420__auto___27566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27543){
var state_val_27544 = (state_27543[(1)]);
if((state_val_27544 === (7))){
var inst_27539 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27545_27567 = state_27543__$1;
(statearr_27545_27567[(2)] = inst_27539);

(statearr_27545_27567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (1))){
var state_27543__$1 = state_27543;
var statearr_27546_27568 = state_27543__$1;
(statearr_27546_27568[(2)] = null);

(statearr_27546_27568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (4))){
var inst_27522 = (state_27543[(7)]);
var inst_27522__$1 = (state_27543[(2)]);
var inst_27523 = (inst_27522__$1 == null);
var state_27543__$1 = (function (){var statearr_27547 = state_27543;
(statearr_27547[(7)] = inst_27522__$1);

return statearr_27547;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27548_27569 = state_27543__$1;
(statearr_27548_27569[(1)] = (5));

} else {
var statearr_27549_27570 = state_27543__$1;
(statearr_27549_27570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (13))){
var state_27543__$1 = state_27543;
var statearr_27550_27571 = state_27543__$1;
(statearr_27550_27571[(2)] = null);

(statearr_27550_27571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (6))){
var inst_27522 = (state_27543[(7)]);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27543__$1,(11),to,inst_27522);
} else {
if((state_val_27544 === (3))){
var inst_27541 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27543__$1,inst_27541);
} else {
if((state_val_27544 === (12))){
var state_27543__$1 = state_27543;
var statearr_27551_27572 = state_27543__$1;
(statearr_27551_27572[(2)] = null);

(statearr_27551_27572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (2))){
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(4),from);
} else {
if((state_val_27544 === (11))){
var inst_27532 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27532)){
var statearr_27552_27573 = state_27543__$1;
(statearr_27552_27573[(1)] = (12));

} else {
var statearr_27553_27574 = state_27543__$1;
(statearr_27553_27574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (9))){
var state_27543__$1 = state_27543;
var statearr_27554_27575 = state_27543__$1;
(statearr_27554_27575[(2)] = null);

(statearr_27554_27575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (5))){
var state_27543__$1 = state_27543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27555_27576 = state_27543__$1;
(statearr_27555_27576[(1)] = (8));

} else {
var statearr_27556_27577 = state_27543__$1;
(statearr_27556_27577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (14))){
var inst_27537 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27557_27578 = state_27543__$1;
(statearr_27557_27578[(2)] = inst_27537);

(statearr_27557_27578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (10))){
var inst_27529 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27558_27579 = state_27543__$1;
(statearr_27558_27579[(2)] = inst_27529);

(statearr_27558_27579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (8))){
var inst_27526 = cljs.core.async.close_BANG_.call(null,to);
var state_27543__$1 = state_27543;
var statearr_27559_27580 = state_27543__$1;
(statearr_27559_27580[(2)] = inst_27526);

(statearr_27559_27580[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_27560 = [null,null,null,null,null,null,null,null];
(statearr_27560[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_27543){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27561){var ex__27350__auto__ = e27561;
var statearr_27562_27581 = state_27543;
(statearr_27562_27581[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27543[(4)]))){
var statearr_27563_27582 = state_27543;
(statearr_27563_27582[(1)] = cljs.core.first.call(null,(state_27543[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27583 = state_27543;
state_27543 = G__27583;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_27543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_27543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27564 = f__27421__auto__.call(null);
(statearr_27564[(6)] = c__27420__auto___27566);

return statearr_27564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__27584){
var vec__27585 = p__27584;
var v = cljs.core.nth.call(null,vec__27585,(0),null);
var p = cljs.core.nth.call(null,vec__27585,(1),null);
var job = vec__27585;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27420__auto___27761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27592){
var state_val_27593 = (state_27592[(1)]);
if((state_val_27593 === (1))){
var state_27592__$1 = state_27592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27592__$1,(2),res,v);
} else {
if((state_val_27593 === (2))){
var inst_27589 = (state_27592[(2)]);
var inst_27590 = cljs.core.async.close_BANG_.call(null,res);
var state_27592__$1 = (function (){var statearr_27594 = state_27592;
(statearr_27594[(7)] = inst_27589);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27592__$1,inst_27590);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_27595 = [null,null,null,null,null,null,null,null];
(statearr_27595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__);

(statearr_27595[(1)] = (1));

return statearr_27595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1 = (function (state_27592){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27596){var ex__27350__auto__ = e27596;
var statearr_27597_27762 = state_27592;
(statearr_27597_27762[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27592[(4)]))){
var statearr_27598_27763 = state_27592;
(statearr_27598_27763[(1)] = cljs.core.first.call(null,(state_27592[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27592;
state_27592 = G__27764;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = function(state_27592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1.call(this,state_27592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27599 = f__27421__auto__.call(null);
(statearr_27599[(6)] = c__27420__auto___27761);

return statearr_27599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27600){
var vec__27601 = p__27600;
var v = cljs.core.nth.call(null,vec__27601,(0),null);
var p = cljs.core.nth.call(null,vec__27601,(1),null);
var job = vec__27601;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5635__auto___27765 = n;
var __27766 = (0);
while(true){
if((__27766 < n__5635__auto___27765)){
var G__27604_27767 = type;
var G__27604_27768__$1 = (((G__27604_27767 instanceof cljs.core.Keyword))?G__27604_27767.fqn:null);
switch (G__27604_27768__$1) {
case "compute":
var c__27420__auto___27770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27766,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = ((function (__27766,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function (state_27617){
var state_val_27618 = (state_27617[(1)]);
if((state_val_27618 === (1))){
var state_27617__$1 = state_27617;
var statearr_27619_27771 = state_27617__$1;
(statearr_27619_27771[(2)] = null);

(statearr_27619_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27618 === (2))){
var state_27617__$1 = state_27617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27617__$1,(4),jobs);
} else {
if((state_val_27618 === (3))){
var inst_27615 = (state_27617[(2)]);
var state_27617__$1 = state_27617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27617__$1,inst_27615);
} else {
if((state_val_27618 === (4))){
var inst_27607 = (state_27617[(2)]);
var inst_27608 = process__$1.call(null,inst_27607);
var state_27617__$1 = state_27617;
if(cljs.core.truth_(inst_27608)){
var statearr_27620_27772 = state_27617__$1;
(statearr_27620_27772[(1)] = (5));

} else {
var statearr_27621_27773 = state_27617__$1;
(statearr_27621_27773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27618 === (5))){
var state_27617__$1 = state_27617;
var statearr_27622_27774 = state_27617__$1;
(statearr_27622_27774[(2)] = null);

(statearr_27622_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27618 === (6))){
var state_27617__$1 = state_27617;
var statearr_27623_27775 = state_27617__$1;
(statearr_27623_27775[(2)] = null);

(statearr_27623_27775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27618 === (7))){
var inst_27613 = (state_27617[(2)]);
var state_27617__$1 = state_27617;
var statearr_27624_27776 = state_27617__$1;
(statearr_27624_27776[(2)] = inst_27613);

(statearr_27624_27776[(1)] = (3));


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
});})(__27766,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
;
return ((function (__27766,switch__27346__auto__,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_27625 = [null,null,null,null,null,null,null];
(statearr_27625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__);

(statearr_27625[(1)] = (1));

return statearr_27625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1 = (function (state_27617){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27626){var ex__27350__auto__ = e27626;
var statearr_27627_27777 = state_27617;
(statearr_27627_27777[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27617[(4)]))){
var statearr_27628_27778 = state_27617;
(statearr_27628_27778[(1)] = cljs.core.first.call(null,(state_27617[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27779 = state_27617;
state_27617 = G__27779;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = function(state_27617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1.call(this,state_27617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__;
})()
;})(__27766,switch__27346__auto__,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
})();
var state__27422__auto__ = (function (){var statearr_27629 = f__27421__auto__.call(null);
(statearr_27629[(6)] = c__27420__auto___27770);

return statearr_27629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
});})(__27766,c__27420__auto___27770,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
);


break;
case "async":
var c__27420__auto___27780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27766,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = ((function (__27766,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function (state_27642){
var state_val_27643 = (state_27642[(1)]);
if((state_val_27643 === (1))){
var state_27642__$1 = state_27642;
var statearr_27644_27781 = state_27642__$1;
(statearr_27644_27781[(2)] = null);

(statearr_27644_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (2))){
var state_27642__$1 = state_27642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27642__$1,(4),jobs);
} else {
if((state_val_27643 === (3))){
var inst_27640 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27642__$1,inst_27640);
} else {
if((state_val_27643 === (4))){
var inst_27632 = (state_27642[(2)]);
var inst_27633 = async.call(null,inst_27632);
var state_27642__$1 = state_27642;
if(cljs.core.truth_(inst_27633)){
var statearr_27645_27782 = state_27642__$1;
(statearr_27645_27782[(1)] = (5));

} else {
var statearr_27646_27783 = state_27642__$1;
(statearr_27646_27783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (5))){
var state_27642__$1 = state_27642;
var statearr_27647_27784 = state_27642__$1;
(statearr_27647_27784[(2)] = null);

(statearr_27647_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (6))){
var state_27642__$1 = state_27642;
var statearr_27648_27785 = state_27642__$1;
(statearr_27648_27785[(2)] = null);

(statearr_27648_27785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27643 === (7))){
var inst_27638 = (state_27642[(2)]);
var state_27642__$1 = state_27642;
var statearr_27649_27786 = state_27642__$1;
(statearr_27649_27786[(2)] = inst_27638);

(statearr_27649_27786[(1)] = (3));


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
});})(__27766,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
;
return ((function (__27766,switch__27346__auto__,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_27650 = [null,null,null,null,null,null,null];
(statearr_27650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__);

(statearr_27650[(1)] = (1));

return statearr_27650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1 = (function (state_27642){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27651){var ex__27350__auto__ = e27651;
var statearr_27652_27787 = state_27642;
(statearr_27652_27787[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27642[(4)]))){
var statearr_27653_27788 = state_27642;
(statearr_27653_27788[(1)] = cljs.core.first.call(null,(state_27642[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27789 = state_27642;
state_27642 = G__27789;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = function(state_27642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1.call(this,state_27642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__;
})()
;})(__27766,switch__27346__auto__,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
})();
var state__27422__auto__ = (function (){var statearr_27654 = f__27421__auto__.call(null);
(statearr_27654[(6)] = c__27420__auto___27780);

return statearr_27654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
});})(__27766,c__27420__auto___27780,G__27604_27767,G__27604_27768__$1,n__5635__auto___27765,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27604_27768__$1)].join('')));

}

var G__27790 = (__27766 + (1));
__27766 = G__27790;
continue;
} else {
}
break;
}

var c__27420__auto___27791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (7))){
var inst_27672 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27678_27792 = state_27676__$1;
(statearr_27678_27792[(2)] = inst_27672);

(statearr_27678_27792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (1))){
var state_27676__$1 = state_27676;
var statearr_27679_27793 = state_27676__$1;
(statearr_27679_27793[(2)] = null);

(statearr_27679_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (4))){
var inst_27657 = (state_27676[(7)]);
var inst_27657__$1 = (state_27676[(2)]);
var inst_27658 = (inst_27657__$1 == null);
var state_27676__$1 = (function (){var statearr_27680 = state_27676;
(statearr_27680[(7)] = inst_27657__$1);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27681_27794 = state_27676__$1;
(statearr_27681_27794[(1)] = (5));

} else {
var statearr_27682_27795 = state_27676__$1;
(statearr_27682_27795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (6))){
var inst_27657 = (state_27676[(7)]);
var inst_27662 = (state_27676[(8)]);
var inst_27662__$1 = cljs.core.async.chan.call(null,(1));
var inst_27663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27664 = [inst_27657,inst_27662__$1];
var inst_27665 = (new cljs.core.PersistentVector(null,2,(5),inst_27663,inst_27664,null));
var state_27676__$1 = (function (){var statearr_27683 = state_27676;
(statearr_27683[(8)] = inst_27662__$1);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(8),jobs,inst_27665);
} else {
if((state_val_27677 === (3))){
var inst_27674 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
if((state_val_27677 === (2))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(4),from);
} else {
if((state_val_27677 === (9))){
var inst_27669 = (state_27676[(2)]);
var state_27676__$1 = (function (){var statearr_27684 = state_27676;
(statearr_27684[(9)] = inst_27669);

return statearr_27684;
})();
var statearr_27685_27796 = state_27676__$1;
(statearr_27685_27796[(2)] = null);

(statearr_27685_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (5))){
var inst_27660 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27676__$1 = state_27676;
var statearr_27686_27797 = state_27676__$1;
(statearr_27686_27797[(2)] = inst_27660);

(statearr_27686_27797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (8))){
var inst_27662 = (state_27676[(8)]);
var inst_27667 = (state_27676[(2)]);
var state_27676__$1 = (function (){var statearr_27687 = state_27676;
(statearr_27687[(10)] = inst_27667);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(9),results,inst_27662);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_27688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__);

(statearr_27688[(1)] = (1));

return statearr_27688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1 = (function (state_27676){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27689){var ex__27350__auto__ = e27689;
var statearr_27690_27798 = state_27676;
(statearr_27690_27798[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27676[(4)]))){
var statearr_27691_27799 = state_27676;
(statearr_27691_27799[(1)] = cljs.core.first.call(null,(state_27676[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27800 = state_27676;
state_27676 = G__27800;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27692 = f__27421__auto__.call(null);
(statearr_27692[(6)] = c__27420__auto___27791);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27730){
var state_val_27731 = (state_27730[(1)]);
if((state_val_27731 === (7))){
var inst_27726 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27732_27801 = state_27730__$1;
(statearr_27732_27801[(2)] = inst_27726);

(statearr_27732_27801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (20))){
var state_27730__$1 = state_27730;
var statearr_27733_27802 = state_27730__$1;
(statearr_27733_27802[(2)] = null);

(statearr_27733_27802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (1))){
var state_27730__$1 = state_27730;
var statearr_27734_27803 = state_27730__$1;
(statearr_27734_27803[(2)] = null);

(statearr_27734_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (4))){
var inst_27695 = (state_27730[(7)]);
var inst_27695__$1 = (state_27730[(2)]);
var inst_27696 = (inst_27695__$1 == null);
var state_27730__$1 = (function (){var statearr_27735 = state_27730;
(statearr_27735[(7)] = inst_27695__$1);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27696)){
var statearr_27736_27804 = state_27730__$1;
(statearr_27736_27804[(1)] = (5));

} else {
var statearr_27737_27805 = state_27730__$1;
(statearr_27737_27805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (15))){
var inst_27708 = (state_27730[(8)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27730__$1,(18),to,inst_27708);
} else {
if((state_val_27731 === (21))){
var inst_27721 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27738_27806 = state_27730__$1;
(statearr_27738_27806[(2)] = inst_27721);

(statearr_27738_27806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (13))){
var inst_27723 = (state_27730[(2)]);
var state_27730__$1 = (function (){var statearr_27739 = state_27730;
(statearr_27739[(9)] = inst_27723);

return statearr_27739;
})();
var statearr_27740_27807 = state_27730__$1;
(statearr_27740_27807[(2)] = null);

(statearr_27740_27807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (6))){
var inst_27695 = (state_27730[(7)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27730__$1,(11),inst_27695);
} else {
if((state_val_27731 === (17))){
var inst_27716 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
if(cljs.core.truth_(inst_27716)){
var statearr_27741_27808 = state_27730__$1;
(statearr_27741_27808[(1)] = (19));

} else {
var statearr_27742_27809 = state_27730__$1;
(statearr_27742_27809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (3))){
var inst_27728 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27730__$1,inst_27728);
} else {
if((state_val_27731 === (12))){
var inst_27705 = (state_27730[(10)]);
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27730__$1,(14),inst_27705);
} else {
if((state_val_27731 === (2))){
var state_27730__$1 = state_27730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27730__$1,(4),results);
} else {
if((state_val_27731 === (19))){
var state_27730__$1 = state_27730;
var statearr_27743_27810 = state_27730__$1;
(statearr_27743_27810[(2)] = null);

(statearr_27743_27810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (11))){
var inst_27705 = (state_27730[(2)]);
var state_27730__$1 = (function (){var statearr_27744 = state_27730;
(statearr_27744[(10)] = inst_27705);

return statearr_27744;
})();
var statearr_27745_27811 = state_27730__$1;
(statearr_27745_27811[(2)] = null);

(statearr_27745_27811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (9))){
var state_27730__$1 = state_27730;
var statearr_27746_27812 = state_27730__$1;
(statearr_27746_27812[(2)] = null);

(statearr_27746_27812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (5))){
var state_27730__$1 = state_27730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27747_27813 = state_27730__$1;
(statearr_27747_27813[(1)] = (8));

} else {
var statearr_27748_27814 = state_27730__$1;
(statearr_27748_27814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (14))){
var inst_27708 = (state_27730[(8)]);
var inst_27710 = (state_27730[(11)]);
var inst_27708__$1 = (state_27730[(2)]);
var inst_27709 = (inst_27708__$1 == null);
var inst_27710__$1 = cljs.core.not.call(null,inst_27709);
var state_27730__$1 = (function (){var statearr_27749 = state_27730;
(statearr_27749[(8)] = inst_27708__$1);

(statearr_27749[(11)] = inst_27710__$1);

return statearr_27749;
})();
if(inst_27710__$1){
var statearr_27750_27815 = state_27730__$1;
(statearr_27750_27815[(1)] = (15));

} else {
var statearr_27751_27816 = state_27730__$1;
(statearr_27751_27816[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (16))){
var inst_27710 = (state_27730[(11)]);
var state_27730__$1 = state_27730;
var statearr_27752_27817 = state_27730__$1;
(statearr_27752_27817[(2)] = inst_27710);

(statearr_27752_27817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (10))){
var inst_27702 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27753_27818 = state_27730__$1;
(statearr_27753_27818[(2)] = inst_27702);

(statearr_27753_27818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (18))){
var inst_27713 = (state_27730[(2)]);
var state_27730__$1 = state_27730;
var statearr_27754_27819 = state_27730__$1;
(statearr_27754_27819[(2)] = inst_27713);

(statearr_27754_27819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27731 === (8))){
var inst_27699 = cljs.core.async.close_BANG_.call(null,to);
var state_27730__$1 = state_27730;
var statearr_27755_27820 = state_27730__$1;
(statearr_27755_27820[(2)] = inst_27699);

(statearr_27755_27820[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1 = (function (state_27730){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27757){var ex__27350__auto__ = e27757;
var statearr_27758_27821 = state_27730;
(statearr_27758_27821[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27730[(4)]))){
var statearr_27759_27822 = state_27730;
(statearr_27759_27822[(1)] = cljs.core.first.call(null,(state_27730[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27823 = state_27730;
state_27730 = G__27823;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__ = function(state_27730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1.call(this,state_27730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27760 = f__27421__auto__.call(null);
(statearr_27760[(6)] = c__27420__auto__);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27825 = arguments.length;
switch (G__27825) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27828 = arguments.length;
switch (G__27828) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27831 = arguments.length;
switch (G__27831) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27420__auto___27881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27857){
var state_val_27858 = (state_27857[(1)]);
if((state_val_27858 === (7))){
var inst_27853 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27859_27882 = state_27857__$1;
(statearr_27859_27882[(2)] = inst_27853);

(statearr_27859_27882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (1))){
var state_27857__$1 = state_27857;
var statearr_27860_27883 = state_27857__$1;
(statearr_27860_27883[(2)] = null);

(statearr_27860_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (4))){
var inst_27834 = (state_27857[(7)]);
var inst_27834__$1 = (state_27857[(2)]);
var inst_27835 = (inst_27834__$1 == null);
var state_27857__$1 = (function (){var statearr_27861 = state_27857;
(statearr_27861[(7)] = inst_27834__$1);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27835)){
var statearr_27862_27884 = state_27857__$1;
(statearr_27862_27884[(1)] = (5));

} else {
var statearr_27863_27885 = state_27857__$1;
(statearr_27863_27885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (13))){
var state_27857__$1 = state_27857;
var statearr_27864_27886 = state_27857__$1;
(statearr_27864_27886[(2)] = null);

(statearr_27864_27886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (6))){
var inst_27834 = (state_27857[(7)]);
var inst_27840 = p.call(null,inst_27834);
var state_27857__$1 = state_27857;
if(cljs.core.truth_(inst_27840)){
var statearr_27865_27887 = state_27857__$1;
(statearr_27865_27887[(1)] = (9));

} else {
var statearr_27866_27888 = state_27857__$1;
(statearr_27866_27888[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (3))){
var inst_27855 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27857__$1,inst_27855);
} else {
if((state_val_27858 === (12))){
var state_27857__$1 = state_27857;
var statearr_27867_27889 = state_27857__$1;
(statearr_27867_27889[(2)] = null);

(statearr_27867_27889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (2))){
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27857__$1,(4),ch);
} else {
if((state_val_27858 === (11))){
var inst_27834 = (state_27857[(7)]);
var inst_27844 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27857__$1,(8),inst_27844,inst_27834);
} else {
if((state_val_27858 === (9))){
var state_27857__$1 = state_27857;
var statearr_27868_27890 = state_27857__$1;
(statearr_27868_27890[(2)] = tc);

(statearr_27868_27890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (5))){
var inst_27837 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27838 = cljs.core.async.close_BANG_.call(null,fc);
var state_27857__$1 = (function (){var statearr_27869 = state_27857;
(statearr_27869[(8)] = inst_27837);

return statearr_27869;
})();
var statearr_27870_27891 = state_27857__$1;
(statearr_27870_27891[(2)] = inst_27838);

(statearr_27870_27891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (14))){
var inst_27851 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27871_27892 = state_27857__$1;
(statearr_27871_27892[(2)] = inst_27851);

(statearr_27871_27892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (10))){
var state_27857__$1 = state_27857;
var statearr_27872_27893 = state_27857__$1;
(statearr_27872_27893[(2)] = fc);

(statearr_27872_27893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (8))){
var inst_27846 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
if(cljs.core.truth_(inst_27846)){
var statearr_27873_27894 = state_27857__$1;
(statearr_27873_27894[(1)] = (12));

} else {
var statearr_27874_27895 = state_27857__$1;
(statearr_27874_27895[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_27875 = [null,null,null,null,null,null,null,null,null];
(statearr_27875[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_27875[(1)] = (1));

return statearr_27875;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_27857){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27876){var ex__27350__auto__ = e27876;
var statearr_27877_27896 = state_27857;
(statearr_27877_27896[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27857[(4)]))){
var statearr_27878_27897 = state_27857;
(statearr_27878_27897[(1)] = cljs.core.first.call(null,(state_27857[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27898 = state_27857;
state_27857 = G__27898;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_27857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_27857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27879 = f__27421__auto__.call(null);
(statearr_27879[(6)] = c__27420__auto___27881);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27920){
var state_val_27921 = (state_27920[(1)]);
if((state_val_27921 === (7))){
var inst_27916 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27922_27941 = state_27920__$1;
(statearr_27922_27941[(2)] = inst_27916);

(statearr_27922_27941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (1))){
var inst_27899 = init;
var inst_27900 = inst_27899;
var state_27920__$1 = (function (){var statearr_27923 = state_27920;
(statearr_27923[(7)] = inst_27900);

return statearr_27923;
})();
var statearr_27924_27942 = state_27920__$1;
(statearr_27924_27942[(2)] = null);

(statearr_27924_27942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (4))){
var inst_27903 = (state_27920[(8)]);
var inst_27903__$1 = (state_27920[(2)]);
var inst_27904 = (inst_27903__$1 == null);
var state_27920__$1 = (function (){var statearr_27925 = state_27920;
(statearr_27925[(8)] = inst_27903__$1);

return statearr_27925;
})();
if(cljs.core.truth_(inst_27904)){
var statearr_27926_27943 = state_27920__$1;
(statearr_27926_27943[(1)] = (5));

} else {
var statearr_27927_27944 = state_27920__$1;
(statearr_27927_27944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (6))){
var inst_27903 = (state_27920[(8)]);
var inst_27907 = (state_27920[(9)]);
var inst_27900 = (state_27920[(7)]);
var inst_27907__$1 = f.call(null,inst_27900,inst_27903);
var inst_27908 = cljs.core.reduced_QMARK_.call(null,inst_27907__$1);
var state_27920__$1 = (function (){var statearr_27928 = state_27920;
(statearr_27928[(9)] = inst_27907__$1);

return statearr_27928;
})();
if(inst_27908){
var statearr_27929_27945 = state_27920__$1;
(statearr_27929_27945[(1)] = (8));

} else {
var statearr_27930_27946 = state_27920__$1;
(statearr_27930_27946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (3))){
var inst_27918 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27920__$1,inst_27918);
} else {
if((state_val_27921 === (2))){
var state_27920__$1 = state_27920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27920__$1,(4),ch);
} else {
if((state_val_27921 === (9))){
var inst_27907 = (state_27920[(9)]);
var inst_27900 = inst_27907;
var state_27920__$1 = (function (){var statearr_27931 = state_27920;
(statearr_27931[(7)] = inst_27900);

return statearr_27931;
})();
var statearr_27932_27947 = state_27920__$1;
(statearr_27932_27947[(2)] = null);

(statearr_27932_27947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (5))){
var inst_27900 = (state_27920[(7)]);
var state_27920__$1 = state_27920;
var statearr_27933_27948 = state_27920__$1;
(statearr_27933_27948[(2)] = inst_27900);

(statearr_27933_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (10))){
var inst_27914 = (state_27920[(2)]);
var state_27920__$1 = state_27920;
var statearr_27934_27949 = state_27920__$1;
(statearr_27934_27949[(2)] = inst_27914);

(statearr_27934_27949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27921 === (8))){
var inst_27907 = (state_27920[(9)]);
var inst_27910 = cljs.core.deref.call(null,inst_27907);
var state_27920__$1 = state_27920;
var statearr_27935_27950 = state_27920__$1;
(statearr_27935_27950[(2)] = inst_27910);

(statearr_27935_27950[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27347__auto____0 = (function (){
var statearr_27936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27936[(0)] = cljs$core$async$reduce_$_state_machine__27347__auto__);

(statearr_27936[(1)] = (1));

return statearr_27936;
});
var cljs$core$async$reduce_$_state_machine__27347__auto____1 = (function (state_27920){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27937){var ex__27350__auto__ = e27937;
var statearr_27938_27951 = state_27920;
(statearr_27938_27951[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27920[(4)]))){
var statearr_27939_27952 = state_27920;
(statearr_27939_27952[(1)] = cljs.core.first.call(null,(state_27920[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27953 = state_27920;
state_27920 = G__27953;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27347__auto__ = function(state_27920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27347__auto____1.call(this,state_27920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27347__auto____0;
cljs$core$async$reduce_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27347__auto____1;
return cljs$core$async$reduce_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27940 = f__27421__auto__.call(null);
(statearr_27940[(6)] = c__27420__auto__);

return statearr_27940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (1))){
var inst_27954 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(2),inst_27954);
} else {
if((state_val_27960 === (2))){
var inst_27956 = (state_27959[(2)]);
var inst_27957 = f__$1.call(null,inst_27956);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27347__auto____0 = (function (){
var statearr_27961 = [null,null,null,null,null,null,null];
(statearr_27961[(0)] = cljs$core$async$transduce_$_state_machine__27347__auto__);

(statearr_27961[(1)] = (1));

return statearr_27961;
});
var cljs$core$async$transduce_$_state_machine__27347__auto____1 = (function (state_27959){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e27962){var ex__27350__auto__ = e27962;
var statearr_27963_27966 = state_27959;
(statearr_27963_27966[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27959[(4)]))){
var statearr_27964_27967 = state_27959;
(statearr_27964_27967[(1)] = cljs.core.first.call(null,(state_27959[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27968 = state_27959;
state_27959 = G__27968;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27347__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27347__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27347__auto____0;
cljs$core$async$transduce_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27347__auto____1;
return cljs$core$async$transduce_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_27965 = f__27421__auto__.call(null);
(statearr_27965[(6)] = c__27420__auto__);

return statearr_27965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__27970 = arguments.length;
switch (G__27970) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_27995){
var state_val_27996 = (state_27995[(1)]);
if((state_val_27996 === (7))){
var inst_27977 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
var statearr_27997_28019 = state_27995__$1;
(statearr_27997_28019[(2)] = inst_27977);

(statearr_27997_28019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (1))){
var inst_27971 = cljs.core.seq.call(null,coll);
var inst_27972 = inst_27971;
var state_27995__$1 = (function (){var statearr_27998 = state_27995;
(statearr_27998[(7)] = inst_27972);

return statearr_27998;
})();
var statearr_27999_28020 = state_27995__$1;
(statearr_27999_28020[(2)] = null);

(statearr_27999_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (4))){
var inst_27972 = (state_27995[(7)]);
var inst_27975 = cljs.core.first.call(null,inst_27972);
var state_27995__$1 = state_27995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27995__$1,(7),ch,inst_27975);
} else {
if((state_val_27996 === (13))){
var inst_27989 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
var statearr_28000_28021 = state_27995__$1;
(statearr_28000_28021[(2)] = inst_27989);

(statearr_28000_28021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (6))){
var inst_27980 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
if(cljs.core.truth_(inst_27980)){
var statearr_28001_28022 = state_27995__$1;
(statearr_28001_28022[(1)] = (8));

} else {
var statearr_28002_28023 = state_27995__$1;
(statearr_28002_28023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (3))){
var inst_27993 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27995__$1,inst_27993);
} else {
if((state_val_27996 === (12))){
var state_27995__$1 = state_27995;
var statearr_28003_28024 = state_27995__$1;
(statearr_28003_28024[(2)] = null);

(statearr_28003_28024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (2))){
var inst_27972 = (state_27995[(7)]);
var state_27995__$1 = state_27995;
if(cljs.core.truth_(inst_27972)){
var statearr_28004_28025 = state_27995__$1;
(statearr_28004_28025[(1)] = (4));

} else {
var statearr_28005_28026 = state_27995__$1;
(statearr_28005_28026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (11))){
var inst_27986 = cljs.core.async.close_BANG_.call(null,ch);
var state_27995__$1 = state_27995;
var statearr_28006_28027 = state_27995__$1;
(statearr_28006_28027[(2)] = inst_27986);

(statearr_28006_28027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (9))){
var state_27995__$1 = state_27995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28007_28028 = state_27995__$1;
(statearr_28007_28028[(1)] = (11));

} else {
var statearr_28008_28029 = state_27995__$1;
(statearr_28008_28029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (5))){
var inst_27972 = (state_27995[(7)]);
var state_27995__$1 = state_27995;
var statearr_28009_28030 = state_27995__$1;
(statearr_28009_28030[(2)] = inst_27972);

(statearr_28009_28030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (10))){
var inst_27991 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
var statearr_28010_28031 = state_27995__$1;
(statearr_28010_28031[(2)] = inst_27991);

(statearr_28010_28031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (8))){
var inst_27972 = (state_27995[(7)]);
var inst_27982 = cljs.core.next.call(null,inst_27972);
var inst_27972__$1 = inst_27982;
var state_27995__$1 = (function (){var statearr_28011 = state_27995;
(statearr_28011[(7)] = inst_27972__$1);

return statearr_28011;
})();
var statearr_28012_28032 = state_27995__$1;
(statearr_28012_28032[(2)] = null);

(statearr_28012_28032[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28013 = [null,null,null,null,null,null,null,null];
(statearr_28013[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28013[(1)] = (1));

return statearr_28013;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_27995){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_27995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28014){var ex__27350__auto__ = e28014;
var statearr_28015_28033 = state_27995;
(statearr_28015_28033[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_27995[(4)]))){
var statearr_28016_28034 = state_27995;
(statearr_28016_28034[(1)] = cljs.core.first.call(null,(state_27995[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28035 = state_27995;
state_27995 = G__28035;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_27995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_27995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28017 = f__27421__auto__.call(null);
(statearr_28017[(6)] = c__27420__auto__);

return statearr_28017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28037 = arguments.length;
switch (G__28037) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_28039 = (function (_){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,_);
} else {
var m__5391__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_28039.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28040 = (function (m,ch,close_QMARK_){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5391__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_28040.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28041 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,ch);
} else {
var m__5391__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_28041.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28042 = (function (m){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m);
} else {
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_28042.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28043 = (function (ch,cs,meta28044){
this.ch = ch;
this.cs = cs;
this.meta28044 = meta28044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28045,meta28044__$1){
var self__ = this;
var _28045__$1 = this;
return (new cljs.core.async.t_cljs$core$async28043(self__.ch,self__.cs,meta28044__$1));
}));

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28045){
var self__ = this;
var _28045__$1 = this;
return self__.meta28044;
}));

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28044","meta28044",-1884026311,null)], null);
}));

(cljs.core.async.t_cljs$core$async28043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28043");

(cljs.core.async.t_cljs$core$async28043.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28043.
 */
cljs.core.async.__GT_t_cljs$core$async28043 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28043(ch__$1,cs__$1,meta28044){
return (new cljs.core.async.t_cljs$core$async28043(ch__$1,cs__$1,meta28044));
});

}

return (new cljs.core.async.t_cljs$core$async28043(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27420__auto___28262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28178){
var state_val_28179 = (state_28178[(1)]);
if((state_val_28179 === (7))){
var inst_28174 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28180_28263 = state_28178__$1;
(statearr_28180_28263[(2)] = inst_28174);

(statearr_28180_28263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (20))){
var inst_28079 = (state_28178[(7)]);
var inst_28091 = cljs.core.first.call(null,inst_28079);
var inst_28092 = cljs.core.nth.call(null,inst_28091,(0),null);
var inst_28093 = cljs.core.nth.call(null,inst_28091,(1),null);
var state_28178__$1 = (function (){var statearr_28181 = state_28178;
(statearr_28181[(8)] = inst_28092);

return statearr_28181;
})();
if(cljs.core.truth_(inst_28093)){
var statearr_28182_28264 = state_28178__$1;
(statearr_28182_28264[(1)] = (22));

} else {
var statearr_28183_28265 = state_28178__$1;
(statearr_28183_28265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (27))){
var inst_28123 = (state_28178[(9)]);
var inst_28121 = (state_28178[(10)]);
var inst_28128 = (state_28178[(11)]);
var inst_28048 = (state_28178[(12)]);
var inst_28128__$1 = cljs.core._nth.call(null,inst_28121,inst_28123);
var inst_28129 = cljs.core.async.put_BANG_.call(null,inst_28128__$1,inst_28048,done);
var state_28178__$1 = (function (){var statearr_28184 = state_28178;
(statearr_28184[(11)] = inst_28128__$1);

return statearr_28184;
})();
if(cljs.core.truth_(inst_28129)){
var statearr_28185_28266 = state_28178__$1;
(statearr_28185_28266[(1)] = (30));

} else {
var statearr_28186_28267 = state_28178__$1;
(statearr_28186_28267[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (1))){
var state_28178__$1 = state_28178;
var statearr_28187_28268 = state_28178__$1;
(statearr_28187_28268[(2)] = null);

(statearr_28187_28268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (24))){
var inst_28079 = (state_28178[(7)]);
var inst_28098 = (state_28178[(2)]);
var inst_28099 = cljs.core.next.call(null,inst_28079);
var inst_28057 = inst_28099;
var inst_28058 = null;
var inst_28059 = (0);
var inst_28060 = (0);
var state_28178__$1 = (function (){var statearr_28188 = state_28178;
(statearr_28188[(13)] = inst_28057);

(statearr_28188[(14)] = inst_28060);

(statearr_28188[(15)] = inst_28059);

(statearr_28188[(16)] = inst_28098);

(statearr_28188[(17)] = inst_28058);

return statearr_28188;
})();
var statearr_28189_28269 = state_28178__$1;
(statearr_28189_28269[(2)] = null);

(statearr_28189_28269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (39))){
var state_28178__$1 = state_28178;
var statearr_28193_28270 = state_28178__$1;
(statearr_28193_28270[(2)] = null);

(statearr_28193_28270[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (4))){
var inst_28048 = (state_28178[(12)]);
var inst_28048__$1 = (state_28178[(2)]);
var inst_28049 = (inst_28048__$1 == null);
var state_28178__$1 = (function (){var statearr_28194 = state_28178;
(statearr_28194[(12)] = inst_28048__$1);

return statearr_28194;
})();
if(cljs.core.truth_(inst_28049)){
var statearr_28195_28271 = state_28178__$1;
(statearr_28195_28271[(1)] = (5));

} else {
var statearr_28196_28272 = state_28178__$1;
(statearr_28196_28272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (15))){
var inst_28057 = (state_28178[(13)]);
var inst_28060 = (state_28178[(14)]);
var inst_28059 = (state_28178[(15)]);
var inst_28058 = (state_28178[(17)]);
var inst_28075 = (state_28178[(2)]);
var inst_28076 = (inst_28060 + (1));
var tmp28190 = inst_28057;
var tmp28191 = inst_28059;
var tmp28192 = inst_28058;
var inst_28057__$1 = tmp28190;
var inst_28058__$1 = tmp28192;
var inst_28059__$1 = tmp28191;
var inst_28060__$1 = inst_28076;
var state_28178__$1 = (function (){var statearr_28197 = state_28178;
(statearr_28197[(13)] = inst_28057__$1);

(statearr_28197[(14)] = inst_28060__$1);

(statearr_28197[(15)] = inst_28059__$1);

(statearr_28197[(18)] = inst_28075);

(statearr_28197[(17)] = inst_28058__$1);

return statearr_28197;
})();
var statearr_28198_28273 = state_28178__$1;
(statearr_28198_28273[(2)] = null);

(statearr_28198_28273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (21))){
var inst_28102 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28202_28274 = state_28178__$1;
(statearr_28202_28274[(2)] = inst_28102);

(statearr_28202_28274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (31))){
var inst_28128 = (state_28178[(11)]);
var inst_28132 = cljs.core.async.untap_STAR_.call(null,m,inst_28128);
var state_28178__$1 = state_28178;
var statearr_28203_28275 = state_28178__$1;
(statearr_28203_28275[(2)] = inst_28132);

(statearr_28203_28275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (32))){
var inst_28123 = (state_28178[(9)]);
var inst_28120 = (state_28178[(19)]);
var inst_28121 = (state_28178[(10)]);
var inst_28122 = (state_28178[(20)]);
var inst_28134 = (state_28178[(2)]);
var inst_28135 = (inst_28123 + (1));
var tmp28199 = inst_28120;
var tmp28200 = inst_28121;
var tmp28201 = inst_28122;
var inst_28120__$1 = tmp28199;
var inst_28121__$1 = tmp28200;
var inst_28122__$1 = tmp28201;
var inst_28123__$1 = inst_28135;
var state_28178__$1 = (function (){var statearr_28204 = state_28178;
(statearr_28204[(9)] = inst_28123__$1);

(statearr_28204[(19)] = inst_28120__$1);

(statearr_28204[(21)] = inst_28134);

(statearr_28204[(10)] = inst_28121__$1);

(statearr_28204[(20)] = inst_28122__$1);

return statearr_28204;
})();
var statearr_28205_28276 = state_28178__$1;
(statearr_28205_28276[(2)] = null);

(statearr_28205_28276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (40))){
var inst_28147 = (state_28178[(22)]);
var inst_28151 = cljs.core.async.untap_STAR_.call(null,m,inst_28147);
var state_28178__$1 = state_28178;
var statearr_28206_28277 = state_28178__$1;
(statearr_28206_28277[(2)] = inst_28151);

(statearr_28206_28277[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (33))){
var inst_28138 = (state_28178[(23)]);
var inst_28140 = cljs.core.chunked_seq_QMARK_.call(null,inst_28138);
var state_28178__$1 = state_28178;
if(inst_28140){
var statearr_28207_28278 = state_28178__$1;
(statearr_28207_28278[(1)] = (36));

} else {
var statearr_28208_28279 = state_28178__$1;
(statearr_28208_28279[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (13))){
var inst_28069 = (state_28178[(24)]);
var inst_28072 = cljs.core.async.close_BANG_.call(null,inst_28069);
var state_28178__$1 = state_28178;
var statearr_28209_28280 = state_28178__$1;
(statearr_28209_28280[(2)] = inst_28072);

(statearr_28209_28280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (22))){
var inst_28092 = (state_28178[(8)]);
var inst_28095 = cljs.core.async.close_BANG_.call(null,inst_28092);
var state_28178__$1 = state_28178;
var statearr_28210_28281 = state_28178__$1;
(statearr_28210_28281[(2)] = inst_28095);

(statearr_28210_28281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (36))){
var inst_28138 = (state_28178[(23)]);
var inst_28142 = cljs.core.chunk_first.call(null,inst_28138);
var inst_28143 = cljs.core.chunk_rest.call(null,inst_28138);
var inst_28144 = cljs.core.count.call(null,inst_28142);
var inst_28120 = inst_28143;
var inst_28121 = inst_28142;
var inst_28122 = inst_28144;
var inst_28123 = (0);
var state_28178__$1 = (function (){var statearr_28211 = state_28178;
(statearr_28211[(9)] = inst_28123);

(statearr_28211[(19)] = inst_28120);

(statearr_28211[(10)] = inst_28121);

(statearr_28211[(20)] = inst_28122);

return statearr_28211;
})();
var statearr_28212_28282 = state_28178__$1;
(statearr_28212_28282[(2)] = null);

(statearr_28212_28282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (41))){
var inst_28138 = (state_28178[(23)]);
var inst_28153 = (state_28178[(2)]);
var inst_28154 = cljs.core.next.call(null,inst_28138);
var inst_28120 = inst_28154;
var inst_28121 = null;
var inst_28122 = (0);
var inst_28123 = (0);
var state_28178__$1 = (function (){var statearr_28213 = state_28178;
(statearr_28213[(9)] = inst_28123);

(statearr_28213[(19)] = inst_28120);

(statearr_28213[(10)] = inst_28121);

(statearr_28213[(25)] = inst_28153);

(statearr_28213[(20)] = inst_28122);

return statearr_28213;
})();
var statearr_28214_28283 = state_28178__$1;
(statearr_28214_28283[(2)] = null);

(statearr_28214_28283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (43))){
var state_28178__$1 = state_28178;
var statearr_28215_28284 = state_28178__$1;
(statearr_28215_28284[(2)] = null);

(statearr_28215_28284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (29))){
var inst_28162 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28216_28285 = state_28178__$1;
(statearr_28216_28285[(2)] = inst_28162);

(statearr_28216_28285[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (44))){
var inst_28171 = (state_28178[(2)]);
var state_28178__$1 = (function (){var statearr_28217 = state_28178;
(statearr_28217[(26)] = inst_28171);

return statearr_28217;
})();
var statearr_28218_28286 = state_28178__$1;
(statearr_28218_28286[(2)] = null);

(statearr_28218_28286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (6))){
var inst_28112 = (state_28178[(27)]);
var inst_28111 = cljs.core.deref.call(null,cs);
var inst_28112__$1 = cljs.core.keys.call(null,inst_28111);
var inst_28113 = cljs.core.count.call(null,inst_28112__$1);
var inst_28114 = cljs.core.reset_BANG_.call(null,dctr,inst_28113);
var inst_28119 = cljs.core.seq.call(null,inst_28112__$1);
var inst_28120 = inst_28119;
var inst_28121 = null;
var inst_28122 = (0);
var inst_28123 = (0);
var state_28178__$1 = (function (){var statearr_28219 = state_28178;
(statearr_28219[(27)] = inst_28112__$1);

(statearr_28219[(9)] = inst_28123);

(statearr_28219[(19)] = inst_28120);

(statearr_28219[(10)] = inst_28121);

(statearr_28219[(28)] = inst_28114);

(statearr_28219[(20)] = inst_28122);

return statearr_28219;
})();
var statearr_28220_28287 = state_28178__$1;
(statearr_28220_28287[(2)] = null);

(statearr_28220_28287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (28))){
var inst_28120 = (state_28178[(19)]);
var inst_28138 = (state_28178[(23)]);
var inst_28138__$1 = cljs.core.seq.call(null,inst_28120);
var state_28178__$1 = (function (){var statearr_28221 = state_28178;
(statearr_28221[(23)] = inst_28138__$1);

return statearr_28221;
})();
if(inst_28138__$1){
var statearr_28222_28288 = state_28178__$1;
(statearr_28222_28288[(1)] = (33));

} else {
var statearr_28223_28289 = state_28178__$1;
(statearr_28223_28289[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (25))){
var inst_28123 = (state_28178[(9)]);
var inst_28122 = (state_28178[(20)]);
var inst_28125 = (inst_28123 < inst_28122);
var inst_28126 = inst_28125;
var state_28178__$1 = state_28178;
if(cljs.core.truth_(inst_28126)){
var statearr_28224_28290 = state_28178__$1;
(statearr_28224_28290[(1)] = (27));

} else {
var statearr_28225_28291 = state_28178__$1;
(statearr_28225_28291[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (34))){
var state_28178__$1 = state_28178;
var statearr_28226_28292 = state_28178__$1;
(statearr_28226_28292[(2)] = null);

(statearr_28226_28292[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (17))){
var state_28178__$1 = state_28178;
var statearr_28227_28293 = state_28178__$1;
(statearr_28227_28293[(2)] = null);

(statearr_28227_28293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (3))){
var inst_28176 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28178__$1,inst_28176);
} else {
if((state_val_28179 === (12))){
var inst_28107 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28228_28294 = state_28178__$1;
(statearr_28228_28294[(2)] = inst_28107);

(statearr_28228_28294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (2))){
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(4),ch);
} else {
if((state_val_28179 === (23))){
var state_28178__$1 = state_28178;
var statearr_28229_28295 = state_28178__$1;
(statearr_28229_28295[(2)] = null);

(statearr_28229_28295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (35))){
var inst_28160 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28230_28296 = state_28178__$1;
(statearr_28230_28296[(2)] = inst_28160);

(statearr_28230_28296[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (19))){
var inst_28079 = (state_28178[(7)]);
var inst_28083 = cljs.core.chunk_first.call(null,inst_28079);
var inst_28084 = cljs.core.chunk_rest.call(null,inst_28079);
var inst_28085 = cljs.core.count.call(null,inst_28083);
var inst_28057 = inst_28084;
var inst_28058 = inst_28083;
var inst_28059 = inst_28085;
var inst_28060 = (0);
var state_28178__$1 = (function (){var statearr_28231 = state_28178;
(statearr_28231[(13)] = inst_28057);

(statearr_28231[(14)] = inst_28060);

(statearr_28231[(15)] = inst_28059);

(statearr_28231[(17)] = inst_28058);

return statearr_28231;
})();
var statearr_28232_28297 = state_28178__$1;
(statearr_28232_28297[(2)] = null);

(statearr_28232_28297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (11))){
var inst_28057 = (state_28178[(13)]);
var inst_28079 = (state_28178[(7)]);
var inst_28079__$1 = cljs.core.seq.call(null,inst_28057);
var state_28178__$1 = (function (){var statearr_28233 = state_28178;
(statearr_28233[(7)] = inst_28079__$1);

return statearr_28233;
})();
if(inst_28079__$1){
var statearr_28234_28298 = state_28178__$1;
(statearr_28234_28298[(1)] = (16));

} else {
var statearr_28235_28299 = state_28178__$1;
(statearr_28235_28299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (9))){
var inst_28109 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28236_28300 = state_28178__$1;
(statearr_28236_28300[(2)] = inst_28109);

(statearr_28236_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (5))){
var inst_28055 = cljs.core.deref.call(null,cs);
var inst_28056 = cljs.core.seq.call(null,inst_28055);
var inst_28057 = inst_28056;
var inst_28058 = null;
var inst_28059 = (0);
var inst_28060 = (0);
var state_28178__$1 = (function (){var statearr_28237 = state_28178;
(statearr_28237[(13)] = inst_28057);

(statearr_28237[(14)] = inst_28060);

(statearr_28237[(15)] = inst_28059);

(statearr_28237[(17)] = inst_28058);

return statearr_28237;
})();
var statearr_28238_28301 = state_28178__$1;
(statearr_28238_28301[(2)] = null);

(statearr_28238_28301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (14))){
var state_28178__$1 = state_28178;
var statearr_28239_28302 = state_28178__$1;
(statearr_28239_28302[(2)] = null);

(statearr_28239_28302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (45))){
var inst_28168 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28240_28303 = state_28178__$1;
(statearr_28240_28303[(2)] = inst_28168);

(statearr_28240_28303[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (26))){
var inst_28112 = (state_28178[(27)]);
var inst_28164 = (state_28178[(2)]);
var inst_28165 = cljs.core.seq.call(null,inst_28112);
var state_28178__$1 = (function (){var statearr_28241 = state_28178;
(statearr_28241[(29)] = inst_28164);

return statearr_28241;
})();
if(inst_28165){
var statearr_28242_28304 = state_28178__$1;
(statearr_28242_28304[(1)] = (42));

} else {
var statearr_28243_28305 = state_28178__$1;
(statearr_28243_28305[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (16))){
var inst_28079 = (state_28178[(7)]);
var inst_28081 = cljs.core.chunked_seq_QMARK_.call(null,inst_28079);
var state_28178__$1 = state_28178;
if(inst_28081){
var statearr_28244_28306 = state_28178__$1;
(statearr_28244_28306[(1)] = (19));

} else {
var statearr_28245_28307 = state_28178__$1;
(statearr_28245_28307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (38))){
var inst_28157 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28246_28308 = state_28178__$1;
(statearr_28246_28308[(2)] = inst_28157);

(statearr_28246_28308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (30))){
var state_28178__$1 = state_28178;
var statearr_28247_28309 = state_28178__$1;
(statearr_28247_28309[(2)] = null);

(statearr_28247_28309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (10))){
var inst_28060 = (state_28178[(14)]);
var inst_28058 = (state_28178[(17)]);
var inst_28068 = cljs.core._nth.call(null,inst_28058,inst_28060);
var inst_28069 = cljs.core.nth.call(null,inst_28068,(0),null);
var inst_28070 = cljs.core.nth.call(null,inst_28068,(1),null);
var state_28178__$1 = (function (){var statearr_28248 = state_28178;
(statearr_28248[(24)] = inst_28069);

return statearr_28248;
})();
if(cljs.core.truth_(inst_28070)){
var statearr_28249_28310 = state_28178__$1;
(statearr_28249_28310[(1)] = (13));

} else {
var statearr_28250_28311 = state_28178__$1;
(statearr_28250_28311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (18))){
var inst_28105 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28251_28312 = state_28178__$1;
(statearr_28251_28312[(2)] = inst_28105);

(statearr_28251_28312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (42))){
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(45),dchan);
} else {
if((state_val_28179 === (37))){
var inst_28147 = (state_28178[(22)]);
var inst_28138 = (state_28178[(23)]);
var inst_28048 = (state_28178[(12)]);
var inst_28147__$1 = cljs.core.first.call(null,inst_28138);
var inst_28148 = cljs.core.async.put_BANG_.call(null,inst_28147__$1,inst_28048,done);
var state_28178__$1 = (function (){var statearr_28252 = state_28178;
(statearr_28252[(22)] = inst_28147__$1);

return statearr_28252;
})();
if(cljs.core.truth_(inst_28148)){
var statearr_28253_28313 = state_28178__$1;
(statearr_28253_28313[(1)] = (39));

} else {
var statearr_28254_28314 = state_28178__$1;
(statearr_28254_28314[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (8))){
var inst_28060 = (state_28178[(14)]);
var inst_28059 = (state_28178[(15)]);
var inst_28062 = (inst_28060 < inst_28059);
var inst_28063 = inst_28062;
var state_28178__$1 = state_28178;
if(cljs.core.truth_(inst_28063)){
var statearr_28255_28315 = state_28178__$1;
(statearr_28255_28315[(1)] = (10));

} else {
var statearr_28256_28316 = state_28178__$1;
(statearr_28256_28316[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27347__auto__ = null;
var cljs$core$async$mult_$_state_machine__27347__auto____0 = (function (){
var statearr_28257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28257[(0)] = cljs$core$async$mult_$_state_machine__27347__auto__);

(statearr_28257[(1)] = (1));

return statearr_28257;
});
var cljs$core$async$mult_$_state_machine__27347__auto____1 = (function (state_28178){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28258){var ex__27350__auto__ = e28258;
var statearr_28259_28317 = state_28178;
(statearr_28259_28317[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28178[(4)]))){
var statearr_28260_28318 = state_28178;
(statearr_28260_28318[(1)] = cljs.core.first.call(null,(state_28178[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28319 = state_28178;
state_28178 = G__28319;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27347__auto__ = function(state_28178){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27347__auto____1.call(this,state_28178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27347__auto____0;
cljs$core$async$mult_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27347__auto____1;
return cljs$core$async$mult_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28261 = f__27421__auto__.call(null);
(statearr_28261[(6)] = c__27420__auto___28262);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28321 = arguments.length;
switch (G__28321) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28323 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,ch);
} else {
var m__5391__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28323.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28324 = (function (m,ch){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,ch);
} else {
var m__5391__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28324.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28325 = (function (m){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m);
} else {
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28325.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28326 = (function (m,state_map){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,state_map);
} else {
var m__5391__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28326.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28327 = (function (m,mode){
var x__5392__auto__ = (((m == null))?null:m);
var m__5393__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,m,mode);
} else {
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28327.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___28337 = arguments.length;
var i__5769__auto___28338 = (0);
while(true){
if((i__5769__auto___28338 < len__5768__auto___28337)){
args__5774__auto__.push((arguments[i__5769__auto___28338]));

var G__28339 = (i__5769__auto___28338 + (1));
i__5769__auto___28338 = G__28339;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28332){
var map__28333 = p__28332;
var map__28333__$1 = cljs.core.__destructure_map.call(null,map__28333);
var opts = map__28333__$1;
var statearr_28334_28340 = state;
(statearr_28334_28340[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28335_28341 = state;
(statearr_28335_28341[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28336_28342 = state;
(statearr_28336_28342[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28328){
var G__28329 = cljs.core.first.call(null,seq28328);
var seq28328__$1 = cljs.core.next.call(null,seq28328);
var G__28330 = cljs.core.first.call(null,seq28328__$1);
var seq28328__$2 = cljs.core.next.call(null,seq28328__$1);
var G__28331 = cljs.core.first.call(null,seq28328__$2);
var seq28328__$3 = cljs.core.next.call(null,seq28328__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28329,G__28330,G__28331,seq28328__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28343 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28344){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28344 = meta28344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28345,meta28344__$1){
var self__ = this;
var _28345__$1 = this;
return (new cljs.core.async.t_cljs$core$async28343(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28344__$1));
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28345){
var self__ = this;
var _28345__$1 = this;
return self__.meta28344;
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28343.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28344","meta28344",762826864,null)], null);
}));

(cljs.core.async.t_cljs$core$async28343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28343");

(cljs.core.async.t_cljs$core$async28343.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28343.
 */
cljs.core.async.__GT_t_cljs$core$async28343 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28343(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28344){
return (new cljs.core.async.t_cljs$core$async28343(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28344));
});

}

return (new cljs.core.async.t_cljs$core$async28343(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27420__auto___28458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28413){
var state_val_28414 = (state_28413[(1)]);
if((state_val_28414 === (7))){
var inst_28373 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28373)){
var statearr_28415_28459 = state_28413__$1;
(statearr_28415_28459[(1)] = (8));

} else {
var statearr_28416_28460 = state_28413__$1;
(statearr_28416_28460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (20))){
var inst_28366 = (state_28413[(7)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28413__$1,(23),out,inst_28366);
} else {
if((state_val_28414 === (1))){
var inst_28349 = calc_state.call(null);
var inst_28350 = cljs.core.__destructure_map.call(null,inst_28349);
var inst_28351 = cljs.core.get.call(null,inst_28350,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28352 = cljs.core.get.call(null,inst_28350,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28353 = cljs.core.get.call(null,inst_28350,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28354 = inst_28349;
var state_28413__$1 = (function (){var statearr_28417 = state_28413;
(statearr_28417[(8)] = inst_28351);

(statearr_28417[(9)] = inst_28353);

(statearr_28417[(10)] = inst_28352);

(statearr_28417[(11)] = inst_28354);

return statearr_28417;
})();
var statearr_28418_28461 = state_28413__$1;
(statearr_28418_28461[(2)] = null);

(statearr_28418_28461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (24))){
var inst_28357 = (state_28413[(12)]);
var inst_28354 = inst_28357;
var state_28413__$1 = (function (){var statearr_28419 = state_28413;
(statearr_28419[(11)] = inst_28354);

return statearr_28419;
})();
var statearr_28420_28462 = state_28413__$1;
(statearr_28420_28462[(2)] = null);

(statearr_28420_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (4))){
var inst_28366 = (state_28413[(7)]);
var inst_28368 = (state_28413[(13)]);
var inst_28365 = (state_28413[(2)]);
var inst_28366__$1 = cljs.core.nth.call(null,inst_28365,(0),null);
var inst_28367 = cljs.core.nth.call(null,inst_28365,(1),null);
var inst_28368__$1 = (inst_28366__$1 == null);
var state_28413__$1 = (function (){var statearr_28421 = state_28413;
(statearr_28421[(7)] = inst_28366__$1);

(statearr_28421[(14)] = inst_28367);

(statearr_28421[(13)] = inst_28368__$1);

return statearr_28421;
})();
if(cljs.core.truth_(inst_28368__$1)){
var statearr_28422_28463 = state_28413__$1;
(statearr_28422_28463[(1)] = (5));

} else {
var statearr_28423_28464 = state_28413__$1;
(statearr_28423_28464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (15))){
var inst_28387 = (state_28413[(15)]);
var inst_28358 = (state_28413[(16)]);
var inst_28387__$1 = cljs.core.empty_QMARK_.call(null,inst_28358);
var state_28413__$1 = (function (){var statearr_28424 = state_28413;
(statearr_28424[(15)] = inst_28387__$1);

return statearr_28424;
})();
if(inst_28387__$1){
var statearr_28425_28465 = state_28413__$1;
(statearr_28425_28465[(1)] = (17));

} else {
var statearr_28426_28466 = state_28413__$1;
(statearr_28426_28466[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (21))){
var inst_28357 = (state_28413[(12)]);
var inst_28354 = inst_28357;
var state_28413__$1 = (function (){var statearr_28427 = state_28413;
(statearr_28427[(11)] = inst_28354);

return statearr_28427;
})();
var statearr_28428_28467 = state_28413__$1;
(statearr_28428_28467[(2)] = null);

(statearr_28428_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (13))){
var inst_28380 = (state_28413[(2)]);
var inst_28381 = calc_state.call(null);
var inst_28354 = inst_28381;
var state_28413__$1 = (function (){var statearr_28429 = state_28413;
(statearr_28429[(17)] = inst_28380);

(statearr_28429[(11)] = inst_28354);

return statearr_28429;
})();
var statearr_28430_28468 = state_28413__$1;
(statearr_28430_28468[(2)] = null);

(statearr_28430_28468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (22))){
var inst_28407 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28431_28469 = state_28413__$1;
(statearr_28431_28469[(2)] = inst_28407);

(statearr_28431_28469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (6))){
var inst_28367 = (state_28413[(14)]);
var inst_28371 = cljs.core._EQ_.call(null,inst_28367,change);
var state_28413__$1 = state_28413;
var statearr_28432_28470 = state_28413__$1;
(statearr_28432_28470[(2)] = inst_28371);

(statearr_28432_28470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (25))){
var state_28413__$1 = state_28413;
var statearr_28433_28471 = state_28413__$1;
(statearr_28433_28471[(2)] = null);

(statearr_28433_28471[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (17))){
var inst_28367 = (state_28413[(14)]);
var inst_28359 = (state_28413[(18)]);
var inst_28389 = inst_28359.call(null,inst_28367);
var inst_28390 = cljs.core.not.call(null,inst_28389);
var state_28413__$1 = state_28413;
var statearr_28434_28472 = state_28413__$1;
(statearr_28434_28472[(2)] = inst_28390);

(statearr_28434_28472[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (3))){
var inst_28411 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28413__$1,inst_28411);
} else {
if((state_val_28414 === (12))){
var state_28413__$1 = state_28413;
var statearr_28435_28473 = state_28413__$1;
(statearr_28435_28473[(2)] = null);

(statearr_28435_28473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (2))){
var inst_28354 = (state_28413[(11)]);
var inst_28357 = (state_28413[(12)]);
var inst_28357__$1 = cljs.core.__destructure_map.call(null,inst_28354);
var inst_28358 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28359 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28360 = cljs.core.get.call(null,inst_28357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28413__$1 = (function (){var statearr_28436 = state_28413;
(statearr_28436[(12)] = inst_28357__$1);

(statearr_28436[(18)] = inst_28359);

(statearr_28436[(16)] = inst_28358);

return statearr_28436;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28413__$1,(4),inst_28360);
} else {
if((state_val_28414 === (23))){
var inst_28398 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28398)){
var statearr_28437_28474 = state_28413__$1;
(statearr_28437_28474[(1)] = (24));

} else {
var statearr_28438_28475 = state_28413__$1;
(statearr_28438_28475[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (19))){
var inst_28393 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28439_28476 = state_28413__$1;
(statearr_28439_28476[(2)] = inst_28393);

(statearr_28439_28476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (11))){
var inst_28367 = (state_28413[(14)]);
var inst_28377 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28367);
var state_28413__$1 = state_28413;
var statearr_28440_28477 = state_28413__$1;
(statearr_28440_28477[(2)] = inst_28377);

(statearr_28440_28477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (9))){
var inst_28384 = (state_28413[(19)]);
var inst_28367 = (state_28413[(14)]);
var inst_28358 = (state_28413[(16)]);
var inst_28384__$1 = inst_28358.call(null,inst_28367);
var state_28413__$1 = (function (){var statearr_28441 = state_28413;
(statearr_28441[(19)] = inst_28384__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28384__$1)){
var statearr_28442_28478 = state_28413__$1;
(statearr_28442_28478[(1)] = (14));

} else {
var statearr_28443_28479 = state_28413__$1;
(statearr_28443_28479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (5))){
var inst_28368 = (state_28413[(13)]);
var state_28413__$1 = state_28413;
var statearr_28444_28480 = state_28413__$1;
(statearr_28444_28480[(2)] = inst_28368);

(statearr_28444_28480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (14))){
var inst_28384 = (state_28413[(19)]);
var state_28413__$1 = state_28413;
var statearr_28445_28481 = state_28413__$1;
(statearr_28445_28481[(2)] = inst_28384);

(statearr_28445_28481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (26))){
var inst_28403 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28446_28482 = state_28413__$1;
(statearr_28446_28482[(2)] = inst_28403);

(statearr_28446_28482[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (16))){
var inst_28395 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28395)){
var statearr_28447_28483 = state_28413__$1;
(statearr_28447_28483[(1)] = (20));

} else {
var statearr_28448_28484 = state_28413__$1;
(statearr_28448_28484[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (10))){
var inst_28409 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28449_28485 = state_28413__$1;
(statearr_28449_28485[(2)] = inst_28409);

(statearr_28449_28485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (18))){
var inst_28387 = (state_28413[(15)]);
var state_28413__$1 = state_28413;
var statearr_28450_28486 = state_28413__$1;
(statearr_28450_28486[(2)] = inst_28387);

(statearr_28450_28486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (8))){
var inst_28366 = (state_28413[(7)]);
var inst_28375 = (inst_28366 == null);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28375)){
var statearr_28451_28487 = state_28413__$1;
(statearr_28451_28487[(1)] = (11));

} else {
var statearr_28452_28488 = state_28413__$1;
(statearr_28452_28488[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27347__auto__ = null;
var cljs$core$async$mix_$_state_machine__27347__auto____0 = (function (){
var statearr_28453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28453[(0)] = cljs$core$async$mix_$_state_machine__27347__auto__);

(statearr_28453[(1)] = (1));

return statearr_28453;
});
var cljs$core$async$mix_$_state_machine__27347__auto____1 = (function (state_28413){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28454){var ex__27350__auto__ = e28454;
var statearr_28455_28489 = state_28413;
(statearr_28455_28489[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28413[(4)]))){
var statearr_28456_28490 = state_28413;
(statearr_28456_28490[(1)] = cljs.core.first.call(null,(state_28413[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28491 = state_28413;
state_28413 = G__28491;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27347__auto__ = function(state_28413){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27347__auto____1.call(this,state_28413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27347__auto____0;
cljs$core$async$mix_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27347__auto____1;
return cljs$core$async$mix_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28457 = f__27421__auto__.call(null);
(statearr_28457[(6)] = c__27420__auto___28458);

return statearr_28457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28494 = (function (p,v,ch,close_QMARK_){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5391__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28494.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28495 = (function (p,v,ch){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,p,v,ch);
} else {
var m__5391__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28495.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28496 = (function() {
var G__28497 = null;
var G__28497__1 = (function (p){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,p);
} else {
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28497__2 = (function (p,v){
var x__5392__auto__ = (((p == null))?null:p);
var m__5393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,p,v);
} else {
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28497 = function(p,v){
switch(arguments.length){
case 1:
return G__28497__1.call(this,p);
case 2:
return G__28497__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28497.cljs$core$IFn$_invoke$arity$1 = G__28497__1;
G__28497.cljs$core$IFn$_invoke$arity$2 = G__28497__2;
return G__28497;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28493 = arguments.length;
switch (G__28493) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28496.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28496.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28501 = arguments.length;
switch (G__28501) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28499_SHARP_){
if(cljs.core.truth_(p1__28499_SHARP_.call(null,topic))){
return p1__28499_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28499_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28502 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28503){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28503 = meta28503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28504,meta28503__$1){
var self__ = this;
var _28504__$1 = this;
return (new cljs.core.async.t_cljs$core$async28502(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28503__$1));
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28504){
var self__ = this;
var _28504__$1 = this;
return self__.meta28503;
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28502.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28503","meta28503",2050016565,null)], null);
}));

(cljs.core.async.t_cljs$core$async28502.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28502");

(cljs.core.async.t_cljs$core$async28502.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28502");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28502.
 */
cljs.core.async.__GT_t_cljs$core$async28502 = (function cljs$core$async$__GT_t_cljs$core$async28502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28503){
return (new cljs.core.async.t_cljs$core$async28502(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28503));
});

}

return (new cljs.core.async.t_cljs$core$async28502(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27420__auto___28623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28576){
var state_val_28577 = (state_28576[(1)]);
if((state_val_28577 === (7))){
var inst_28572 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28578_28624 = state_28576__$1;
(statearr_28578_28624[(2)] = inst_28572);

(statearr_28578_28624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (20))){
var state_28576__$1 = state_28576;
var statearr_28579_28625 = state_28576__$1;
(statearr_28579_28625[(2)] = null);

(statearr_28579_28625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (1))){
var state_28576__$1 = state_28576;
var statearr_28580_28626 = state_28576__$1;
(statearr_28580_28626[(2)] = null);

(statearr_28580_28626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (24))){
var inst_28555 = (state_28576[(7)]);
var inst_28564 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28555);
var state_28576__$1 = state_28576;
var statearr_28581_28627 = state_28576__$1;
(statearr_28581_28627[(2)] = inst_28564);

(statearr_28581_28627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (4))){
var inst_28507 = (state_28576[(8)]);
var inst_28507__$1 = (state_28576[(2)]);
var inst_28508 = (inst_28507__$1 == null);
var state_28576__$1 = (function (){var statearr_28582 = state_28576;
(statearr_28582[(8)] = inst_28507__$1);

return statearr_28582;
})();
if(cljs.core.truth_(inst_28508)){
var statearr_28583_28628 = state_28576__$1;
(statearr_28583_28628[(1)] = (5));

} else {
var statearr_28584_28629 = state_28576__$1;
(statearr_28584_28629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (15))){
var inst_28549 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28585_28630 = state_28576__$1;
(statearr_28585_28630[(2)] = inst_28549);

(statearr_28585_28630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (21))){
var inst_28569 = (state_28576[(2)]);
var state_28576__$1 = (function (){var statearr_28586 = state_28576;
(statearr_28586[(9)] = inst_28569);

return statearr_28586;
})();
var statearr_28587_28631 = state_28576__$1;
(statearr_28587_28631[(2)] = null);

(statearr_28587_28631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (13))){
var inst_28531 = (state_28576[(10)]);
var inst_28533 = cljs.core.chunked_seq_QMARK_.call(null,inst_28531);
var state_28576__$1 = state_28576;
if(inst_28533){
var statearr_28588_28632 = state_28576__$1;
(statearr_28588_28632[(1)] = (16));

} else {
var statearr_28589_28633 = state_28576__$1;
(statearr_28589_28633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (22))){
var inst_28561 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
if(cljs.core.truth_(inst_28561)){
var statearr_28590_28634 = state_28576__$1;
(statearr_28590_28634[(1)] = (23));

} else {
var statearr_28591_28635 = state_28576__$1;
(statearr_28591_28635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (6))){
var inst_28507 = (state_28576[(8)]);
var inst_28555 = (state_28576[(7)]);
var inst_28557 = (state_28576[(11)]);
var inst_28555__$1 = topic_fn.call(null,inst_28507);
var inst_28556 = cljs.core.deref.call(null,mults);
var inst_28557__$1 = cljs.core.get.call(null,inst_28556,inst_28555__$1);
var state_28576__$1 = (function (){var statearr_28592 = state_28576;
(statearr_28592[(7)] = inst_28555__$1);

(statearr_28592[(11)] = inst_28557__$1);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28557__$1)){
var statearr_28593_28636 = state_28576__$1;
(statearr_28593_28636[(1)] = (19));

} else {
var statearr_28594_28637 = state_28576__$1;
(statearr_28594_28637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (25))){
var inst_28566 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28595_28638 = state_28576__$1;
(statearr_28595_28638[(2)] = inst_28566);

(statearr_28595_28638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (17))){
var inst_28531 = (state_28576[(10)]);
var inst_28540 = cljs.core.first.call(null,inst_28531);
var inst_28541 = cljs.core.async.muxch_STAR_.call(null,inst_28540);
var inst_28542 = cljs.core.async.close_BANG_.call(null,inst_28541);
var inst_28543 = cljs.core.next.call(null,inst_28531);
var inst_28517 = inst_28543;
var inst_28518 = null;
var inst_28519 = (0);
var inst_28520 = (0);
var state_28576__$1 = (function (){var statearr_28596 = state_28576;
(statearr_28596[(12)] = inst_28542);

(statearr_28596[(13)] = inst_28520);

(statearr_28596[(14)] = inst_28518);

(statearr_28596[(15)] = inst_28519);

(statearr_28596[(16)] = inst_28517);

return statearr_28596;
})();
var statearr_28597_28639 = state_28576__$1;
(statearr_28597_28639[(2)] = null);

(statearr_28597_28639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (3))){
var inst_28574 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28576__$1,inst_28574);
} else {
if((state_val_28577 === (12))){
var inst_28551 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28598_28640 = state_28576__$1;
(statearr_28598_28640[(2)] = inst_28551);

(statearr_28598_28640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (2))){
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28576__$1,(4),ch);
} else {
if((state_val_28577 === (23))){
var state_28576__$1 = state_28576;
var statearr_28599_28641 = state_28576__$1;
(statearr_28599_28641[(2)] = null);

(statearr_28599_28641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (19))){
var inst_28507 = (state_28576[(8)]);
var inst_28557 = (state_28576[(11)]);
var inst_28559 = cljs.core.async.muxch_STAR_.call(null,inst_28557);
var state_28576__$1 = state_28576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28576__$1,(22),inst_28559,inst_28507);
} else {
if((state_val_28577 === (11))){
var inst_28531 = (state_28576[(10)]);
var inst_28517 = (state_28576[(16)]);
var inst_28531__$1 = cljs.core.seq.call(null,inst_28517);
var state_28576__$1 = (function (){var statearr_28600 = state_28576;
(statearr_28600[(10)] = inst_28531__$1);

return statearr_28600;
})();
if(inst_28531__$1){
var statearr_28601_28642 = state_28576__$1;
(statearr_28601_28642[(1)] = (13));

} else {
var statearr_28602_28643 = state_28576__$1;
(statearr_28602_28643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (9))){
var inst_28553 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28603_28644 = state_28576__$1;
(statearr_28603_28644[(2)] = inst_28553);

(statearr_28603_28644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (5))){
var inst_28514 = cljs.core.deref.call(null,mults);
var inst_28515 = cljs.core.vals.call(null,inst_28514);
var inst_28516 = cljs.core.seq.call(null,inst_28515);
var inst_28517 = inst_28516;
var inst_28518 = null;
var inst_28519 = (0);
var inst_28520 = (0);
var state_28576__$1 = (function (){var statearr_28604 = state_28576;
(statearr_28604[(13)] = inst_28520);

(statearr_28604[(14)] = inst_28518);

(statearr_28604[(15)] = inst_28519);

(statearr_28604[(16)] = inst_28517);

return statearr_28604;
})();
var statearr_28605_28645 = state_28576__$1;
(statearr_28605_28645[(2)] = null);

(statearr_28605_28645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (14))){
var state_28576__$1 = state_28576;
var statearr_28609_28646 = state_28576__$1;
(statearr_28609_28646[(2)] = null);

(statearr_28609_28646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (16))){
var inst_28531 = (state_28576[(10)]);
var inst_28535 = cljs.core.chunk_first.call(null,inst_28531);
var inst_28536 = cljs.core.chunk_rest.call(null,inst_28531);
var inst_28537 = cljs.core.count.call(null,inst_28535);
var inst_28517 = inst_28536;
var inst_28518 = inst_28535;
var inst_28519 = inst_28537;
var inst_28520 = (0);
var state_28576__$1 = (function (){var statearr_28610 = state_28576;
(statearr_28610[(13)] = inst_28520);

(statearr_28610[(14)] = inst_28518);

(statearr_28610[(15)] = inst_28519);

(statearr_28610[(16)] = inst_28517);

return statearr_28610;
})();
var statearr_28611_28647 = state_28576__$1;
(statearr_28611_28647[(2)] = null);

(statearr_28611_28647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (10))){
var inst_28520 = (state_28576[(13)]);
var inst_28518 = (state_28576[(14)]);
var inst_28519 = (state_28576[(15)]);
var inst_28517 = (state_28576[(16)]);
var inst_28525 = cljs.core._nth.call(null,inst_28518,inst_28520);
var inst_28526 = cljs.core.async.muxch_STAR_.call(null,inst_28525);
var inst_28527 = cljs.core.async.close_BANG_.call(null,inst_28526);
var inst_28528 = (inst_28520 + (1));
var tmp28606 = inst_28518;
var tmp28607 = inst_28519;
var tmp28608 = inst_28517;
var inst_28517__$1 = tmp28608;
var inst_28518__$1 = tmp28606;
var inst_28519__$1 = tmp28607;
var inst_28520__$1 = inst_28528;
var state_28576__$1 = (function (){var statearr_28612 = state_28576;
(statearr_28612[(13)] = inst_28520__$1);

(statearr_28612[(17)] = inst_28527);

(statearr_28612[(14)] = inst_28518__$1);

(statearr_28612[(15)] = inst_28519__$1);

(statearr_28612[(16)] = inst_28517__$1);

return statearr_28612;
})();
var statearr_28613_28648 = state_28576__$1;
(statearr_28613_28648[(2)] = null);

(statearr_28613_28648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (18))){
var inst_28546 = (state_28576[(2)]);
var state_28576__$1 = state_28576;
var statearr_28614_28649 = state_28576__$1;
(statearr_28614_28649[(2)] = inst_28546);

(statearr_28614_28649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28577 === (8))){
var inst_28520 = (state_28576[(13)]);
var inst_28519 = (state_28576[(15)]);
var inst_28522 = (inst_28520 < inst_28519);
var inst_28523 = inst_28522;
var state_28576__$1 = state_28576;
if(cljs.core.truth_(inst_28523)){
var statearr_28615_28650 = state_28576__$1;
(statearr_28615_28650[(1)] = (10));

} else {
var statearr_28616_28651 = state_28576__$1;
(statearr_28616_28651[(1)] = (11));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28617[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28617[(1)] = (1));

return statearr_28617;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_28576){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28618){var ex__27350__auto__ = e28618;
var statearr_28619_28652 = state_28576;
(statearr_28619_28652[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28576[(4)]))){
var statearr_28620_28653 = state_28576;
(statearr_28620_28653[(1)] = cljs.core.first.call(null,(state_28576[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28654 = state_28576;
state_28576 = G__28654;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_28576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_28576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28621 = f__27421__auto__.call(null);
(statearr_28621[(6)] = c__27420__auto___28623);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28656 = arguments.length;
switch (G__28656) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28659 = arguments.length;
switch (G__28659) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28662 = arguments.length;
switch (G__28662) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__27420__auto___28740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28705){
var state_val_28706 = (state_28705[(1)]);
if((state_val_28706 === (7))){
var state_28705__$1 = state_28705;
var statearr_28707_28741 = state_28705__$1;
(statearr_28707_28741[(2)] = null);

(statearr_28707_28741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (1))){
var state_28705__$1 = state_28705;
var statearr_28708_28742 = state_28705__$1;
(statearr_28708_28742[(2)] = null);

(statearr_28708_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (4))){
var inst_28665 = (state_28705[(7)]);
var inst_28666 = (state_28705[(8)]);
var inst_28668 = (inst_28666 < inst_28665);
var state_28705__$1 = state_28705;
if(cljs.core.truth_(inst_28668)){
var statearr_28709_28743 = state_28705__$1;
(statearr_28709_28743[(1)] = (6));

} else {
var statearr_28710_28744 = state_28705__$1;
(statearr_28710_28744[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (15))){
var inst_28691 = (state_28705[(9)]);
var inst_28696 = cljs.core.apply.call(null,f,inst_28691);
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28705__$1,(17),out,inst_28696);
} else {
if((state_val_28706 === (13))){
var inst_28691 = (state_28705[(9)]);
var inst_28691__$1 = (state_28705[(2)]);
var inst_28692 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28691__$1);
var state_28705__$1 = (function (){var statearr_28711 = state_28705;
(statearr_28711[(9)] = inst_28691__$1);

return statearr_28711;
})();
if(cljs.core.truth_(inst_28692)){
var statearr_28712_28745 = state_28705__$1;
(statearr_28712_28745[(1)] = (14));

} else {
var statearr_28713_28746 = state_28705__$1;
(statearr_28713_28746[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (6))){
var state_28705__$1 = state_28705;
var statearr_28714_28747 = state_28705__$1;
(statearr_28714_28747[(2)] = null);

(statearr_28714_28747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (17))){
var inst_28698 = (state_28705[(2)]);
var state_28705__$1 = (function (){var statearr_28716 = state_28705;
(statearr_28716[(10)] = inst_28698);

return statearr_28716;
})();
var statearr_28717_28748 = state_28705__$1;
(statearr_28717_28748[(2)] = null);

(statearr_28717_28748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (3))){
var inst_28703 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28705__$1,inst_28703);
} else {
if((state_val_28706 === (12))){
var _ = (function (){var statearr_28718 = state_28705;
(statearr_28718[(4)] = cljs.core.rest.call(null,(state_28705[(4)])));

return statearr_28718;
})();
var state_28705__$1 = state_28705;
var ex28715 = (state_28705__$1[(2)]);
var statearr_28719_28749 = state_28705__$1;
(statearr_28719_28749[(5)] = ex28715);


if((ex28715 instanceof Object)){
var statearr_28720_28750 = state_28705__$1;
(statearr_28720_28750[(1)] = (11));

(statearr_28720_28750[(5)] = null);

} else {
throw ex28715;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (2))){
var inst_28664 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28665 = cnt;
var inst_28666 = (0);
var state_28705__$1 = (function (){var statearr_28721 = state_28705;
(statearr_28721[(7)] = inst_28665);

(statearr_28721[(11)] = inst_28664);

(statearr_28721[(8)] = inst_28666);

return statearr_28721;
})();
var statearr_28722_28751 = state_28705__$1;
(statearr_28722_28751[(2)] = null);

(statearr_28722_28751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (11))){
var inst_28670 = (state_28705[(2)]);
var inst_28671 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28705__$1 = (function (){var statearr_28723 = state_28705;
(statearr_28723[(12)] = inst_28670);

return statearr_28723;
})();
var statearr_28724_28752 = state_28705__$1;
(statearr_28724_28752[(2)] = inst_28671);

(statearr_28724_28752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (9))){
var inst_28666 = (state_28705[(8)]);
var _ = (function (){var statearr_28725 = state_28705;
(statearr_28725[(4)] = cljs.core.cons.call(null,(12),(state_28705[(4)])));

return statearr_28725;
})();
var inst_28677 = chs__$1.call(null,inst_28666);
var inst_28678 = done.call(null,inst_28666);
var inst_28679 = cljs.core.async.take_BANG_.call(null,inst_28677,inst_28678);
var ___$1 = (function (){var statearr_28726 = state_28705;
(statearr_28726[(4)] = cljs.core.rest.call(null,(state_28705[(4)])));

return statearr_28726;
})();
var state_28705__$1 = state_28705;
var statearr_28727_28753 = state_28705__$1;
(statearr_28727_28753[(2)] = inst_28679);

(statearr_28727_28753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (5))){
var inst_28689 = (state_28705[(2)]);
var state_28705__$1 = (function (){var statearr_28728 = state_28705;
(statearr_28728[(13)] = inst_28689);

return statearr_28728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28705__$1,(13),dchan);
} else {
if((state_val_28706 === (14))){
var inst_28694 = cljs.core.async.close_BANG_.call(null,out);
var state_28705__$1 = state_28705;
var statearr_28729_28754 = state_28705__$1;
(statearr_28729_28754[(2)] = inst_28694);

(statearr_28729_28754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (16))){
var inst_28701 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28730_28755 = state_28705__$1;
(statearr_28730_28755[(2)] = inst_28701);

(statearr_28730_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (10))){
var inst_28666 = (state_28705[(8)]);
var inst_28682 = (state_28705[(2)]);
var inst_28683 = (inst_28666 + (1));
var inst_28666__$1 = inst_28683;
var state_28705__$1 = (function (){var statearr_28731 = state_28705;
(statearr_28731[(8)] = inst_28666__$1);

(statearr_28731[(14)] = inst_28682);

return statearr_28731;
})();
var statearr_28732_28756 = state_28705__$1;
(statearr_28732_28756[(2)] = null);

(statearr_28732_28756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28706 === (8))){
var inst_28687 = (state_28705[(2)]);
var state_28705__$1 = state_28705;
var statearr_28733_28757 = state_28705__$1;
(statearr_28733_28757[(2)] = inst_28687);

(statearr_28733_28757[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28734[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28734[(1)] = (1));

return statearr_28734;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_28705){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28735){var ex__27350__auto__ = e28735;
var statearr_28736_28758 = state_28705;
(statearr_28736_28758[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28705[(4)]))){
var statearr_28737_28759 = state_28705;
(statearr_28737_28759[(1)] = cljs.core.first.call(null,(state_28705[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28705;
state_28705 = G__28760;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_28705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_28705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28738 = f__27421__auto__.call(null);
(statearr_28738[(6)] = c__27420__auto___28740);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28763 = arguments.length;
switch (G__28763) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___28818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28795){
var state_val_28796 = (state_28795[(1)]);
if((state_val_28796 === (7))){
var inst_28775 = (state_28795[(7)]);
var inst_28774 = (state_28795[(8)]);
var inst_28774__$1 = (state_28795[(2)]);
var inst_28775__$1 = cljs.core.nth.call(null,inst_28774__$1,(0),null);
var inst_28776 = cljs.core.nth.call(null,inst_28774__$1,(1),null);
var inst_28777 = (inst_28775__$1 == null);
var state_28795__$1 = (function (){var statearr_28797 = state_28795;
(statearr_28797[(7)] = inst_28775__$1);

(statearr_28797[(9)] = inst_28776);

(statearr_28797[(8)] = inst_28774__$1);

return statearr_28797;
})();
if(cljs.core.truth_(inst_28777)){
var statearr_28798_28819 = state_28795__$1;
(statearr_28798_28819[(1)] = (8));

} else {
var statearr_28799_28820 = state_28795__$1;
(statearr_28799_28820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (1))){
var inst_28764 = cljs.core.vec.call(null,chs);
var inst_28765 = inst_28764;
var state_28795__$1 = (function (){var statearr_28800 = state_28795;
(statearr_28800[(10)] = inst_28765);

return statearr_28800;
})();
var statearr_28801_28821 = state_28795__$1;
(statearr_28801_28821[(2)] = null);

(statearr_28801_28821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (4))){
var inst_28765 = (state_28795[(10)]);
var state_28795__$1 = state_28795;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28795__$1,(7),inst_28765);
} else {
if((state_val_28796 === (6))){
var inst_28791 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28802_28822 = state_28795__$1;
(statearr_28802_28822[(2)] = inst_28791);

(statearr_28802_28822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (3))){
var inst_28793 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28795__$1,inst_28793);
} else {
if((state_val_28796 === (2))){
var inst_28765 = (state_28795[(10)]);
var inst_28767 = cljs.core.count.call(null,inst_28765);
var inst_28768 = (inst_28767 > (0));
var state_28795__$1 = state_28795;
if(cljs.core.truth_(inst_28768)){
var statearr_28804_28823 = state_28795__$1;
(statearr_28804_28823[(1)] = (4));

} else {
var statearr_28805_28824 = state_28795__$1;
(statearr_28805_28824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (11))){
var inst_28765 = (state_28795[(10)]);
var inst_28784 = (state_28795[(2)]);
var tmp28803 = inst_28765;
var inst_28765__$1 = tmp28803;
var state_28795__$1 = (function (){var statearr_28806 = state_28795;
(statearr_28806[(10)] = inst_28765__$1);

(statearr_28806[(11)] = inst_28784);

return statearr_28806;
})();
var statearr_28807_28825 = state_28795__$1;
(statearr_28807_28825[(2)] = null);

(statearr_28807_28825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (9))){
var inst_28775 = (state_28795[(7)]);
var state_28795__$1 = state_28795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28795__$1,(11),out,inst_28775);
} else {
if((state_val_28796 === (5))){
var inst_28789 = cljs.core.async.close_BANG_.call(null,out);
var state_28795__$1 = state_28795;
var statearr_28808_28826 = state_28795__$1;
(statearr_28808_28826[(2)] = inst_28789);

(statearr_28808_28826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (10))){
var inst_28787 = (state_28795[(2)]);
var state_28795__$1 = state_28795;
var statearr_28809_28827 = state_28795__$1;
(statearr_28809_28827[(2)] = inst_28787);

(statearr_28809_28827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28796 === (8))){
var inst_28765 = (state_28795[(10)]);
var inst_28775 = (state_28795[(7)]);
var inst_28776 = (state_28795[(9)]);
var inst_28774 = (state_28795[(8)]);
var inst_28779 = (function (){var cs = inst_28765;
var vec__28770 = inst_28774;
var v = inst_28775;
var c = inst_28776;
return (function (p1__28761_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28761_SHARP_);
});
})();
var inst_28780 = cljs.core.filterv.call(null,inst_28779,inst_28765);
var inst_28765__$1 = inst_28780;
var state_28795__$1 = (function (){var statearr_28810 = state_28795;
(statearr_28810[(10)] = inst_28765__$1);

return statearr_28810;
})();
var statearr_28811_28828 = state_28795__$1;
(statearr_28811_28828[(2)] = null);

(statearr_28811_28828[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28812[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28812[(1)] = (1));

return statearr_28812;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_28795){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28813){var ex__27350__auto__ = e28813;
var statearr_28814_28829 = state_28795;
(statearr_28814_28829[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28795[(4)]))){
var statearr_28815_28830 = state_28795;
(statearr_28815_28830[(1)] = cljs.core.first.call(null,(state_28795[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28831 = state_28795;
state_28795 = G__28831;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_28795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_28795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28816 = f__27421__auto__.call(null);
(statearr_28816[(6)] = c__27420__auto___28818);

return statearr_28816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28833 = arguments.length;
switch (G__28833) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___28879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (7))){
var inst_28839 = (state_28857[(7)]);
var inst_28839__$1 = (state_28857[(2)]);
var inst_28840 = (inst_28839__$1 == null);
var inst_28841 = cljs.core.not.call(null,inst_28840);
var state_28857__$1 = (function (){var statearr_28859 = state_28857;
(statearr_28859[(7)] = inst_28839__$1);

return statearr_28859;
})();
if(inst_28841){
var statearr_28860_28880 = state_28857__$1;
(statearr_28860_28880[(1)] = (8));

} else {
var statearr_28861_28881 = state_28857__$1;
(statearr_28861_28881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (1))){
var inst_28834 = (0);
var state_28857__$1 = (function (){var statearr_28862 = state_28857;
(statearr_28862[(8)] = inst_28834);

return statearr_28862;
})();
var statearr_28863_28882 = state_28857__$1;
(statearr_28863_28882[(2)] = null);

(statearr_28863_28882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (4))){
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(7),ch);
} else {
if((state_val_28858 === (6))){
var inst_28852 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28864_28883 = state_28857__$1;
(statearr_28864_28883[(2)] = inst_28852);

(statearr_28864_28883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (3))){
var inst_28854 = (state_28857[(2)]);
var inst_28855 = cljs.core.async.close_BANG_.call(null,out);
var state_28857__$1 = (function (){var statearr_28865 = state_28857;
(statearr_28865[(9)] = inst_28854);

return statearr_28865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (2))){
var inst_28834 = (state_28857[(8)]);
var inst_28836 = (inst_28834 < n);
var state_28857__$1 = state_28857;
if(cljs.core.truth_(inst_28836)){
var statearr_28866_28884 = state_28857__$1;
(statearr_28866_28884[(1)] = (4));

} else {
var statearr_28867_28885 = state_28857__$1;
(statearr_28867_28885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (11))){
var inst_28834 = (state_28857[(8)]);
var inst_28844 = (state_28857[(2)]);
var inst_28845 = (inst_28834 + (1));
var inst_28834__$1 = inst_28845;
var state_28857__$1 = (function (){var statearr_28868 = state_28857;
(statearr_28868[(10)] = inst_28844);

(statearr_28868[(8)] = inst_28834__$1);

return statearr_28868;
})();
var statearr_28869_28886 = state_28857__$1;
(statearr_28869_28886[(2)] = null);

(statearr_28869_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (9))){
var state_28857__$1 = state_28857;
var statearr_28870_28887 = state_28857__$1;
(statearr_28870_28887[(2)] = null);

(statearr_28870_28887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (5))){
var state_28857__$1 = state_28857;
var statearr_28871_28888 = state_28857__$1;
(statearr_28871_28888[(2)] = null);

(statearr_28871_28888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (10))){
var inst_28849 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28872_28889 = state_28857__$1;
(statearr_28872_28889[(2)] = inst_28849);

(statearr_28872_28889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (8))){
var inst_28839 = (state_28857[(7)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28857__$1,(11),out,inst_28839);
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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28873[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28873[(1)] = (1));

return statearr_28873;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_28857){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28874){var ex__27350__auto__ = e28874;
var statearr_28875_28890 = state_28857;
(statearr_28875_28890[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28857[(4)]))){
var statearr_28876_28891 = state_28857;
(statearr_28876_28891[(1)] = cljs.core.first.call(null,(state_28857[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28892 = state_28857;
state_28857 = G__28892;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28877 = f__27421__auto__.call(null);
(statearr_28877[(6)] = c__27420__auto___28879);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28894 = (function (f,ch,meta28895){
this.f = f;
this.ch = ch;
this.meta28895 = meta28895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28896,meta28895__$1){
var self__ = this;
var _28896__$1 = this;
return (new cljs.core.async.t_cljs$core$async28894(self__.f,self__.ch,meta28895__$1));
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28896){
var self__ = this;
var _28896__$1 = this;
return self__.meta28895;
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28897 = (function (f,ch,meta28895,_,fn1,meta28898){
this.f = f;
this.ch = ch;
this.meta28895 = meta28895;
this._ = _;
this.fn1 = fn1;
this.meta28898 = meta28898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28899,meta28898__$1){
var self__ = this;
var _28899__$1 = this;
return (new cljs.core.async.t_cljs$core$async28897(self__.f,self__.ch,self__.meta28895,self__._,self__.fn1,meta28898__$1));
}));

(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28899){
var self__ = this;
var _28899__$1 = this;
return self__.meta28898;
}));

(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28893_SHARP_){
return f1.call(null,(((p1__28893_SHARP_ == null))?null:self__.f.call(null,p1__28893_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28895","meta28895",2030803037,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28894","cljs.core.async/t_cljs$core$async28894",1314208675,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28898","meta28898",-763231603,null)], null);
}));

(cljs.core.async.t_cljs$core$async28897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28897");

(cljs.core.async.t_cljs$core$async28897.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28897.
 */
cljs.core.async.__GT_t_cljs$core$async28897 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28897(f__$1,ch__$1,meta28895__$1,___$2,fn1__$1,meta28898){
return (new cljs.core.async.t_cljs$core$async28897(f__$1,ch__$1,meta28895__$1,___$2,fn1__$1,meta28898));
});

}

return (new cljs.core.async.t_cljs$core$async28897(self__.f,self__.ch,self__.meta28895,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28895","meta28895",2030803037,null)], null);
}));

(cljs.core.async.t_cljs$core$async28894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28894");

(cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28894.
 */
cljs.core.async.__GT_t_cljs$core$async28894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28894(f__$1,ch__$1,meta28895){
return (new cljs.core.async.t_cljs$core$async28894(f__$1,ch__$1,meta28895));
});

}

return (new cljs.core.async.t_cljs$core$async28894(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28900 = (function (f,ch,meta28901){
this.f = f;
this.ch = ch;
this.meta28901 = meta28901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28902,meta28901__$1){
var self__ = this;
var _28902__$1 = this;
return (new cljs.core.async.t_cljs$core$async28900(self__.f,self__.ch,meta28901__$1));
}));

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28902){
var self__ = this;
var _28902__$1 = this;
return self__.meta28901;
}));

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28901","meta28901",398861172,null)], null);
}));

(cljs.core.async.t_cljs$core$async28900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28900");

(cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28900.
 */
cljs.core.async.__GT_t_cljs$core$async28900 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28900(f__$1,ch__$1,meta28901){
return (new cljs.core.async.t_cljs$core$async28900(f__$1,ch__$1,meta28901));
});

}

return (new cljs.core.async.t_cljs$core$async28900(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28903 = (function (p,ch,meta28904){
this.p = p;
this.ch = ch;
this.meta28904 = meta28904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28905,meta28904__$1){
var self__ = this;
var _28905__$1 = this;
return (new cljs.core.async.t_cljs$core$async28903(self__.p,self__.ch,meta28904__$1));
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28905){
var self__ = this;
var _28905__$1 = this;
return self__.meta28904;
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28904","meta28904",-2035292919,null)], null);
}));

(cljs.core.async.t_cljs$core$async28903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28903");

(cljs.core.async.t_cljs$core$async28903.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28903.
 */
cljs.core.async.__GT_t_cljs$core$async28903 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28903(p__$1,ch__$1,meta28904){
return (new cljs.core.async.t_cljs$core$async28903(p__$1,ch__$1,meta28904));
});

}

return (new cljs.core.async.t_cljs$core$async28903(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28907 = arguments.length;
switch (G__28907) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___28948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_28928){
var state_val_28929 = (state_28928[(1)]);
if((state_val_28929 === (7))){
var inst_28924 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28930_28949 = state_28928__$1;
(statearr_28930_28949[(2)] = inst_28924);

(statearr_28930_28949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (1))){
var state_28928__$1 = state_28928;
var statearr_28931_28950 = state_28928__$1;
(statearr_28931_28950[(2)] = null);

(statearr_28931_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (4))){
var inst_28910 = (state_28928[(7)]);
var inst_28910__$1 = (state_28928[(2)]);
var inst_28911 = (inst_28910__$1 == null);
var state_28928__$1 = (function (){var statearr_28932 = state_28928;
(statearr_28932[(7)] = inst_28910__$1);

return statearr_28932;
})();
if(cljs.core.truth_(inst_28911)){
var statearr_28933_28951 = state_28928__$1;
(statearr_28933_28951[(1)] = (5));

} else {
var statearr_28934_28952 = state_28928__$1;
(statearr_28934_28952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (6))){
var inst_28910 = (state_28928[(7)]);
var inst_28915 = p.call(null,inst_28910);
var state_28928__$1 = state_28928;
if(cljs.core.truth_(inst_28915)){
var statearr_28935_28953 = state_28928__$1;
(statearr_28935_28953[(1)] = (8));

} else {
var statearr_28936_28954 = state_28928__$1;
(statearr_28936_28954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (3))){
var inst_28926 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28928__$1,inst_28926);
} else {
if((state_val_28929 === (2))){
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28928__$1,(4),ch);
} else {
if((state_val_28929 === (11))){
var inst_28918 = (state_28928[(2)]);
var state_28928__$1 = state_28928;
var statearr_28937_28955 = state_28928__$1;
(statearr_28937_28955[(2)] = inst_28918);

(statearr_28937_28955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (9))){
var state_28928__$1 = state_28928;
var statearr_28938_28956 = state_28928__$1;
(statearr_28938_28956[(2)] = null);

(statearr_28938_28956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (5))){
var inst_28913 = cljs.core.async.close_BANG_.call(null,out);
var state_28928__$1 = state_28928;
var statearr_28939_28957 = state_28928__$1;
(statearr_28939_28957[(2)] = inst_28913);

(statearr_28939_28957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (10))){
var inst_28921 = (state_28928[(2)]);
var state_28928__$1 = (function (){var statearr_28940 = state_28928;
(statearr_28940[(8)] = inst_28921);

return statearr_28940;
})();
var statearr_28941_28958 = state_28928__$1;
(statearr_28941_28958[(2)] = null);

(statearr_28941_28958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28929 === (8))){
var inst_28910 = (state_28928[(7)]);
var state_28928__$1 = state_28928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28928__$1,(11),out,inst_28910);
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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_28942 = [null,null,null,null,null,null,null,null,null];
(statearr_28942[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_28942[(1)] = (1));

return statearr_28942;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_28928){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_28928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e28943){var ex__27350__auto__ = e28943;
var statearr_28944_28959 = state_28928;
(statearr_28944_28959[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_28928[(4)]))){
var statearr_28945_28960 = state_28928;
(statearr_28945_28960[(1)] = cljs.core.first.call(null,(state_28928[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28961 = state_28928;
state_28928 = G__28961;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_28928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_28928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_28946 = f__27421__auto__.call(null);
(statearr_28946[(6)] = c__27420__auto___28948);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28963 = arguments.length;
switch (G__28963) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_29026){
var state_val_29027 = (state_29026[(1)]);
if((state_val_29027 === (7))){
var inst_29022 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29028_29067 = state_29026__$1;
(statearr_29028_29067[(2)] = inst_29022);

(statearr_29028_29067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (20))){
var inst_28992 = (state_29026[(7)]);
var inst_29003 = (state_29026[(2)]);
var inst_29004 = cljs.core.next.call(null,inst_28992);
var inst_28978 = inst_29004;
var inst_28979 = null;
var inst_28980 = (0);
var inst_28981 = (0);
var state_29026__$1 = (function (){var statearr_29029 = state_29026;
(statearr_29029[(8)] = inst_28978);

(statearr_29029[(9)] = inst_28980);

(statearr_29029[(10)] = inst_29003);

(statearr_29029[(11)] = inst_28979);

(statearr_29029[(12)] = inst_28981);

return statearr_29029;
})();
var statearr_29030_29068 = state_29026__$1;
(statearr_29030_29068[(2)] = null);

(statearr_29030_29068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (1))){
var state_29026__$1 = state_29026;
var statearr_29031_29069 = state_29026__$1;
(statearr_29031_29069[(2)] = null);

(statearr_29031_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (4))){
var inst_28967 = (state_29026[(13)]);
var inst_28967__$1 = (state_29026[(2)]);
var inst_28968 = (inst_28967__$1 == null);
var state_29026__$1 = (function (){var statearr_29032 = state_29026;
(statearr_29032[(13)] = inst_28967__$1);

return statearr_29032;
})();
if(cljs.core.truth_(inst_28968)){
var statearr_29033_29070 = state_29026__$1;
(statearr_29033_29070[(1)] = (5));

} else {
var statearr_29034_29071 = state_29026__$1;
(statearr_29034_29071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (15))){
var state_29026__$1 = state_29026;
var statearr_29038_29072 = state_29026__$1;
(statearr_29038_29072[(2)] = null);

(statearr_29038_29072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (21))){
var state_29026__$1 = state_29026;
var statearr_29039_29073 = state_29026__$1;
(statearr_29039_29073[(2)] = null);

(statearr_29039_29073[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (13))){
var inst_28978 = (state_29026[(8)]);
var inst_28980 = (state_29026[(9)]);
var inst_28979 = (state_29026[(11)]);
var inst_28981 = (state_29026[(12)]);
var inst_28988 = (state_29026[(2)]);
var inst_28989 = (inst_28981 + (1));
var tmp29035 = inst_28978;
var tmp29036 = inst_28980;
var tmp29037 = inst_28979;
var inst_28978__$1 = tmp29035;
var inst_28979__$1 = tmp29037;
var inst_28980__$1 = tmp29036;
var inst_28981__$1 = inst_28989;
var state_29026__$1 = (function (){var statearr_29040 = state_29026;
(statearr_29040[(8)] = inst_28978__$1);

(statearr_29040[(14)] = inst_28988);

(statearr_29040[(9)] = inst_28980__$1);

(statearr_29040[(11)] = inst_28979__$1);

(statearr_29040[(12)] = inst_28981__$1);

return statearr_29040;
})();
var statearr_29041_29074 = state_29026__$1;
(statearr_29041_29074[(2)] = null);

(statearr_29041_29074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (22))){
var state_29026__$1 = state_29026;
var statearr_29042_29075 = state_29026__$1;
(statearr_29042_29075[(2)] = null);

(statearr_29042_29075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (6))){
var inst_28967 = (state_29026[(13)]);
var inst_28976 = f.call(null,inst_28967);
var inst_28977 = cljs.core.seq.call(null,inst_28976);
var inst_28978 = inst_28977;
var inst_28979 = null;
var inst_28980 = (0);
var inst_28981 = (0);
var state_29026__$1 = (function (){var statearr_29043 = state_29026;
(statearr_29043[(8)] = inst_28978);

(statearr_29043[(9)] = inst_28980);

(statearr_29043[(11)] = inst_28979);

(statearr_29043[(12)] = inst_28981);

return statearr_29043;
})();
var statearr_29044_29076 = state_29026__$1;
(statearr_29044_29076[(2)] = null);

(statearr_29044_29076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (17))){
var inst_28992 = (state_29026[(7)]);
var inst_28996 = cljs.core.chunk_first.call(null,inst_28992);
var inst_28997 = cljs.core.chunk_rest.call(null,inst_28992);
var inst_28998 = cljs.core.count.call(null,inst_28996);
var inst_28978 = inst_28997;
var inst_28979 = inst_28996;
var inst_28980 = inst_28998;
var inst_28981 = (0);
var state_29026__$1 = (function (){var statearr_29045 = state_29026;
(statearr_29045[(8)] = inst_28978);

(statearr_29045[(9)] = inst_28980);

(statearr_29045[(11)] = inst_28979);

(statearr_29045[(12)] = inst_28981);

return statearr_29045;
})();
var statearr_29046_29077 = state_29026__$1;
(statearr_29046_29077[(2)] = null);

(statearr_29046_29077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (3))){
var inst_29024 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29026__$1,inst_29024);
} else {
if((state_val_29027 === (12))){
var inst_29012 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29047_29078 = state_29026__$1;
(statearr_29047_29078[(2)] = inst_29012);

(statearr_29047_29078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (2))){
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29026__$1,(4),in$);
} else {
if((state_val_29027 === (23))){
var inst_29020 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29048_29079 = state_29026__$1;
(statearr_29048_29079[(2)] = inst_29020);

(statearr_29048_29079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (19))){
var inst_29007 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29049_29080 = state_29026__$1;
(statearr_29049_29080[(2)] = inst_29007);

(statearr_29049_29080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (11))){
var inst_28978 = (state_29026[(8)]);
var inst_28992 = (state_29026[(7)]);
var inst_28992__$1 = cljs.core.seq.call(null,inst_28978);
var state_29026__$1 = (function (){var statearr_29050 = state_29026;
(statearr_29050[(7)] = inst_28992__$1);

return statearr_29050;
})();
if(inst_28992__$1){
var statearr_29051_29081 = state_29026__$1;
(statearr_29051_29081[(1)] = (14));

} else {
var statearr_29052_29082 = state_29026__$1;
(statearr_29052_29082[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (9))){
var inst_29014 = (state_29026[(2)]);
var inst_29015 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29026__$1 = (function (){var statearr_29053 = state_29026;
(statearr_29053[(15)] = inst_29014);

return statearr_29053;
})();
if(cljs.core.truth_(inst_29015)){
var statearr_29054_29083 = state_29026__$1;
(statearr_29054_29083[(1)] = (21));

} else {
var statearr_29055_29084 = state_29026__$1;
(statearr_29055_29084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (5))){
var inst_28970 = cljs.core.async.close_BANG_.call(null,out);
var state_29026__$1 = state_29026;
var statearr_29056_29085 = state_29026__$1;
(statearr_29056_29085[(2)] = inst_28970);

(statearr_29056_29085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (14))){
var inst_28992 = (state_29026[(7)]);
var inst_28994 = cljs.core.chunked_seq_QMARK_.call(null,inst_28992);
var state_29026__$1 = state_29026;
if(inst_28994){
var statearr_29057_29086 = state_29026__$1;
(statearr_29057_29086[(1)] = (17));

} else {
var statearr_29058_29087 = state_29026__$1;
(statearr_29058_29087[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (16))){
var inst_29010 = (state_29026[(2)]);
var state_29026__$1 = state_29026;
var statearr_29059_29088 = state_29026__$1;
(statearr_29059_29088[(2)] = inst_29010);

(statearr_29059_29088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29027 === (10))){
var inst_28979 = (state_29026[(11)]);
var inst_28981 = (state_29026[(12)]);
var inst_28986 = cljs.core._nth.call(null,inst_28979,inst_28981);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29026__$1,(13),out,inst_28986);
} else {
if((state_val_29027 === (18))){
var inst_28992 = (state_29026[(7)]);
var inst_29001 = cljs.core.first.call(null,inst_28992);
var state_29026__$1 = state_29026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29026__$1,(20),out,inst_29001);
} else {
if((state_val_29027 === (8))){
var inst_28980 = (state_29026[(9)]);
var inst_28981 = (state_29026[(12)]);
var inst_28983 = (inst_28981 < inst_28980);
var inst_28984 = inst_28983;
var state_29026__$1 = state_29026;
if(cljs.core.truth_(inst_28984)){
var statearr_29060_29089 = state_29026__$1;
(statearr_29060_29089[(1)] = (10));

} else {
var statearr_29061_29090 = state_29026__$1;
(statearr_29061_29090[(1)] = (11));

}

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
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____1 = (function (state_29026){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_29026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e29063){var ex__27350__auto__ = e29063;
var statearr_29064_29091 = state_29026;
(statearr_29064_29091[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_29026[(4)]))){
var statearr_29065_29092 = state_29026;
(statearr_29065_29092[(1)] = cljs.core.first.call(null,(state_29026[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29093 = state_29026;
state_29026 = G__29093;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__ = function(state_29026){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____1.call(this,state_29026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_29066 = f__27421__auto__.call(null);
(statearr_29066[(6)] = c__27420__auto__);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29095 = arguments.length;
switch (G__29095) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29098 = arguments.length;
switch (G__29098) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29101 = arguments.length;
switch (G__29101) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___29149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_29125){
var state_val_29126 = (state_29125[(1)]);
if((state_val_29126 === (7))){
var inst_29120 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29127_29150 = state_29125__$1;
(statearr_29127_29150[(2)] = inst_29120);

(statearr_29127_29150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (1))){
var inst_29102 = null;
var state_29125__$1 = (function (){var statearr_29128 = state_29125;
(statearr_29128[(7)] = inst_29102);

return statearr_29128;
})();
var statearr_29129_29151 = state_29125__$1;
(statearr_29129_29151[(2)] = null);

(statearr_29129_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (4))){
var inst_29105 = (state_29125[(8)]);
var inst_29105__$1 = (state_29125[(2)]);
var inst_29106 = (inst_29105__$1 == null);
var inst_29107 = cljs.core.not.call(null,inst_29106);
var state_29125__$1 = (function (){var statearr_29130 = state_29125;
(statearr_29130[(8)] = inst_29105__$1);

return statearr_29130;
})();
if(inst_29107){
var statearr_29131_29152 = state_29125__$1;
(statearr_29131_29152[(1)] = (5));

} else {
var statearr_29132_29153 = state_29125__$1;
(statearr_29132_29153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (6))){
var state_29125__$1 = state_29125;
var statearr_29133_29154 = state_29125__$1;
(statearr_29133_29154[(2)] = null);

(statearr_29133_29154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (3))){
var inst_29122 = (state_29125[(2)]);
var inst_29123 = cljs.core.async.close_BANG_.call(null,out);
var state_29125__$1 = (function (){var statearr_29134 = state_29125;
(statearr_29134[(9)] = inst_29122);

return statearr_29134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29125__$1,inst_29123);
} else {
if((state_val_29126 === (2))){
var state_29125__$1 = state_29125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29125__$1,(4),ch);
} else {
if((state_val_29126 === (11))){
var inst_29105 = (state_29125[(8)]);
var inst_29114 = (state_29125[(2)]);
var inst_29102 = inst_29105;
var state_29125__$1 = (function (){var statearr_29135 = state_29125;
(statearr_29135[(10)] = inst_29114);

(statearr_29135[(7)] = inst_29102);

return statearr_29135;
})();
var statearr_29136_29155 = state_29125__$1;
(statearr_29136_29155[(2)] = null);

(statearr_29136_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (9))){
var inst_29105 = (state_29125[(8)]);
var state_29125__$1 = state_29125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29125__$1,(11),out,inst_29105);
} else {
if((state_val_29126 === (5))){
var inst_29105 = (state_29125[(8)]);
var inst_29102 = (state_29125[(7)]);
var inst_29109 = cljs.core._EQ_.call(null,inst_29105,inst_29102);
var state_29125__$1 = state_29125;
if(inst_29109){
var statearr_29138_29156 = state_29125__$1;
(statearr_29138_29156[(1)] = (8));

} else {
var statearr_29139_29157 = state_29125__$1;
(statearr_29139_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (10))){
var inst_29117 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29140_29158 = state_29125__$1;
(statearr_29140_29158[(2)] = inst_29117);

(statearr_29140_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (8))){
var inst_29102 = (state_29125[(7)]);
var tmp29137 = inst_29102;
var inst_29102__$1 = tmp29137;
var state_29125__$1 = (function (){var statearr_29141 = state_29125;
(statearr_29141[(7)] = inst_29102__$1);

return statearr_29141;
})();
var statearr_29142_29159 = state_29125__$1;
(statearr_29142_29159[(2)] = null);

(statearr_29142_29159[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_29143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29143[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_29143[(1)] = (1));

return statearr_29143;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_29125){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_29125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e29144){var ex__27350__auto__ = e29144;
var statearr_29145_29160 = state_29125;
(statearr_29145_29160[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_29125[(4)]))){
var statearr_29146_29161 = state_29125;
(statearr_29146_29161[(1)] = cljs.core.first.call(null,(state_29125[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29162 = state_29125;
state_29125 = G__29162;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_29125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_29125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_29147 = f__27421__auto__.call(null);
(statearr_29147[(6)] = c__27420__auto___29149);

return statearr_29147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29164 = arguments.length;
switch (G__29164) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___29231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_29202){
var state_val_29203 = (state_29202[(1)]);
if((state_val_29203 === (7))){
var inst_29198 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29204_29232 = state_29202__$1;
(statearr_29204_29232[(2)] = inst_29198);

(statearr_29204_29232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (1))){
var inst_29165 = (new Array(n));
var inst_29166 = inst_29165;
var inst_29167 = (0);
var state_29202__$1 = (function (){var statearr_29205 = state_29202;
(statearr_29205[(7)] = inst_29167);

(statearr_29205[(8)] = inst_29166);

return statearr_29205;
})();
var statearr_29206_29233 = state_29202__$1;
(statearr_29206_29233[(2)] = null);

(statearr_29206_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (4))){
var inst_29170 = (state_29202[(9)]);
var inst_29170__$1 = (state_29202[(2)]);
var inst_29171 = (inst_29170__$1 == null);
var inst_29172 = cljs.core.not.call(null,inst_29171);
var state_29202__$1 = (function (){var statearr_29207 = state_29202;
(statearr_29207[(9)] = inst_29170__$1);

return statearr_29207;
})();
if(inst_29172){
var statearr_29208_29234 = state_29202__$1;
(statearr_29208_29234[(1)] = (5));

} else {
var statearr_29209_29235 = state_29202__$1;
(statearr_29209_29235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (15))){
var inst_29192 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29210_29236 = state_29202__$1;
(statearr_29210_29236[(2)] = inst_29192);

(statearr_29210_29236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (13))){
var state_29202__$1 = state_29202;
var statearr_29211_29237 = state_29202__$1;
(statearr_29211_29237[(2)] = null);

(statearr_29211_29237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (6))){
var inst_29167 = (state_29202[(7)]);
var inst_29188 = (inst_29167 > (0));
var state_29202__$1 = state_29202;
if(cljs.core.truth_(inst_29188)){
var statearr_29212_29238 = state_29202__$1;
(statearr_29212_29238[(1)] = (12));

} else {
var statearr_29213_29239 = state_29202__$1;
(statearr_29213_29239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (3))){
var inst_29200 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29202__$1,inst_29200);
} else {
if((state_val_29203 === (12))){
var inst_29166 = (state_29202[(8)]);
var inst_29190 = cljs.core.vec.call(null,inst_29166);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29202__$1,(15),out,inst_29190);
} else {
if((state_val_29203 === (2))){
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29202__$1,(4),ch);
} else {
if((state_val_29203 === (11))){
var inst_29182 = (state_29202[(2)]);
var inst_29183 = (new Array(n));
var inst_29166 = inst_29183;
var inst_29167 = (0);
var state_29202__$1 = (function (){var statearr_29214 = state_29202;
(statearr_29214[(10)] = inst_29182);

(statearr_29214[(7)] = inst_29167);

(statearr_29214[(8)] = inst_29166);

return statearr_29214;
})();
var statearr_29215_29240 = state_29202__$1;
(statearr_29215_29240[(2)] = null);

(statearr_29215_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (9))){
var inst_29166 = (state_29202[(8)]);
var inst_29180 = cljs.core.vec.call(null,inst_29166);
var state_29202__$1 = state_29202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29202__$1,(11),out,inst_29180);
} else {
if((state_val_29203 === (5))){
var inst_29167 = (state_29202[(7)]);
var inst_29170 = (state_29202[(9)]);
var inst_29166 = (state_29202[(8)]);
var inst_29175 = (state_29202[(11)]);
var inst_29174 = (inst_29166[inst_29167] = inst_29170);
var inst_29175__$1 = (inst_29167 + (1));
var inst_29176 = (inst_29175__$1 < n);
var state_29202__$1 = (function (){var statearr_29216 = state_29202;
(statearr_29216[(11)] = inst_29175__$1);

(statearr_29216[(12)] = inst_29174);

return statearr_29216;
})();
if(cljs.core.truth_(inst_29176)){
var statearr_29217_29241 = state_29202__$1;
(statearr_29217_29241[(1)] = (8));

} else {
var statearr_29218_29242 = state_29202__$1;
(statearr_29218_29242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (14))){
var inst_29195 = (state_29202[(2)]);
var inst_29196 = cljs.core.async.close_BANG_.call(null,out);
var state_29202__$1 = (function (){var statearr_29220 = state_29202;
(statearr_29220[(13)] = inst_29195);

return statearr_29220;
})();
var statearr_29221_29243 = state_29202__$1;
(statearr_29221_29243[(2)] = inst_29196);

(statearr_29221_29243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (10))){
var inst_29186 = (state_29202[(2)]);
var state_29202__$1 = state_29202;
var statearr_29222_29244 = state_29202__$1;
(statearr_29222_29244[(2)] = inst_29186);

(statearr_29222_29244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29203 === (8))){
var inst_29166 = (state_29202[(8)]);
var inst_29175 = (state_29202[(11)]);
var tmp29219 = inst_29166;
var inst_29166__$1 = tmp29219;
var inst_29167 = inst_29175;
var state_29202__$1 = (function (){var statearr_29223 = state_29202;
(statearr_29223[(7)] = inst_29167);

(statearr_29223[(8)] = inst_29166__$1);

return statearr_29223;
})();
var statearr_29224_29245 = state_29202__$1;
(statearr_29224_29245[(2)] = null);

(statearr_29224_29245[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_29225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29225[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_29225[(1)] = (1));

return statearr_29225;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_29202){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_29202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e29226){var ex__27350__auto__ = e29226;
var statearr_29227_29246 = state_29202;
(statearr_29227_29246[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_29202[(4)]))){
var statearr_29228_29247 = state_29202;
(statearr_29228_29247[(1)] = cljs.core.first.call(null,(state_29202[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29202;
state_29202 = G__29248;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_29202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_29229 = f__27421__auto__.call(null);
(statearr_29229[(6)] = c__27420__auto___29231);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29250 = arguments.length;
switch (G__29250) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27420__auto___29328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_29295){
var state_val_29296 = (state_29295[(1)]);
if((state_val_29296 === (7))){
var inst_29291 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29297_29329 = state_29295__$1;
(statearr_29297_29329[(2)] = inst_29291);

(statearr_29297_29329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (1))){
var inst_29251 = [];
var inst_29252 = inst_29251;
var inst_29253 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29295__$1 = (function (){var statearr_29298 = state_29295;
(statearr_29298[(7)] = inst_29252);

(statearr_29298[(8)] = inst_29253);

return statearr_29298;
})();
var statearr_29299_29330 = state_29295__$1;
(statearr_29299_29330[(2)] = null);

(statearr_29299_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (4))){
var inst_29256 = (state_29295[(9)]);
var inst_29256__$1 = (state_29295[(2)]);
var inst_29257 = (inst_29256__$1 == null);
var inst_29258 = cljs.core.not.call(null,inst_29257);
var state_29295__$1 = (function (){var statearr_29300 = state_29295;
(statearr_29300[(9)] = inst_29256__$1);

return statearr_29300;
})();
if(inst_29258){
var statearr_29301_29331 = state_29295__$1;
(statearr_29301_29331[(1)] = (5));

} else {
var statearr_29302_29332 = state_29295__$1;
(statearr_29302_29332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (15))){
var inst_29252 = (state_29295[(7)]);
var inst_29283 = cljs.core.vec.call(null,inst_29252);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(18),out,inst_29283);
} else {
if((state_val_29296 === (13))){
var inst_29278 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29303_29333 = state_29295__$1;
(statearr_29303_29333[(2)] = inst_29278);

(statearr_29303_29333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (6))){
var inst_29252 = (state_29295[(7)]);
var inst_29280 = inst_29252.length;
var inst_29281 = (inst_29280 > (0));
var state_29295__$1 = state_29295;
if(cljs.core.truth_(inst_29281)){
var statearr_29304_29334 = state_29295__$1;
(statearr_29304_29334[(1)] = (15));

} else {
var statearr_29305_29335 = state_29295__$1;
(statearr_29305_29335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (17))){
var inst_29288 = (state_29295[(2)]);
var inst_29289 = cljs.core.async.close_BANG_.call(null,out);
var state_29295__$1 = (function (){var statearr_29306 = state_29295;
(statearr_29306[(10)] = inst_29288);

return statearr_29306;
})();
var statearr_29307_29336 = state_29295__$1;
(statearr_29307_29336[(2)] = inst_29289);

(statearr_29307_29336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (3))){
var inst_29293 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29295__$1,inst_29293);
} else {
if((state_val_29296 === (12))){
var inst_29252 = (state_29295[(7)]);
var inst_29271 = cljs.core.vec.call(null,inst_29252);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(14),out,inst_29271);
} else {
if((state_val_29296 === (2))){
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29295__$1,(4),ch);
} else {
if((state_val_29296 === (11))){
var inst_29260 = (state_29295[(11)]);
var inst_29256 = (state_29295[(9)]);
var inst_29252 = (state_29295[(7)]);
var inst_29268 = inst_29252.push(inst_29256);
var tmp29308 = inst_29252;
var inst_29252__$1 = tmp29308;
var inst_29253 = inst_29260;
var state_29295__$1 = (function (){var statearr_29309 = state_29295;
(statearr_29309[(7)] = inst_29252__$1);

(statearr_29309[(8)] = inst_29253);

(statearr_29309[(12)] = inst_29268);

return statearr_29309;
})();
var statearr_29310_29337 = state_29295__$1;
(statearr_29310_29337[(2)] = null);

(statearr_29310_29337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (9))){
var inst_29253 = (state_29295[(8)]);
var inst_29264 = cljs.core.keyword_identical_QMARK_.call(null,inst_29253,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29295__$1 = state_29295;
var statearr_29311_29338 = state_29295__$1;
(statearr_29311_29338[(2)] = inst_29264);

(statearr_29311_29338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (5))){
var inst_29260 = (state_29295[(11)]);
var inst_29256 = (state_29295[(9)]);
var inst_29253 = (state_29295[(8)]);
var inst_29261 = (state_29295[(13)]);
var inst_29260__$1 = f.call(null,inst_29256);
var inst_29261__$1 = cljs.core._EQ_.call(null,inst_29260__$1,inst_29253);
var state_29295__$1 = (function (){var statearr_29312 = state_29295;
(statearr_29312[(11)] = inst_29260__$1);

(statearr_29312[(13)] = inst_29261__$1);

return statearr_29312;
})();
if(inst_29261__$1){
var statearr_29313_29339 = state_29295__$1;
(statearr_29313_29339[(1)] = (8));

} else {
var statearr_29314_29340 = state_29295__$1;
(statearr_29314_29340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (14))){
var inst_29260 = (state_29295[(11)]);
var inst_29256 = (state_29295[(9)]);
var inst_29273 = (state_29295[(2)]);
var inst_29274 = [];
var inst_29275 = inst_29274.push(inst_29256);
var inst_29252 = inst_29274;
var inst_29253 = inst_29260;
var state_29295__$1 = (function (){var statearr_29315 = state_29295;
(statearr_29315[(14)] = inst_29275);

(statearr_29315[(7)] = inst_29252);

(statearr_29315[(8)] = inst_29253);

(statearr_29315[(15)] = inst_29273);

return statearr_29315;
})();
var statearr_29316_29341 = state_29295__$1;
(statearr_29316_29341[(2)] = null);

(statearr_29316_29341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (16))){
var state_29295__$1 = state_29295;
var statearr_29317_29342 = state_29295__$1;
(statearr_29317_29342[(2)] = null);

(statearr_29317_29342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (10))){
var inst_29266 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
if(cljs.core.truth_(inst_29266)){
var statearr_29318_29343 = state_29295__$1;
(statearr_29318_29343[(1)] = (11));

} else {
var statearr_29319_29344 = state_29295__$1;
(statearr_29319_29344[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (18))){
var inst_29285 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29320_29345 = state_29295__$1;
(statearr_29320_29345[(2)] = inst_29285);

(statearr_29320_29345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (8))){
var inst_29261 = (state_29295[(13)]);
var state_29295__$1 = state_29295;
var statearr_29321_29346 = state_29295__$1;
(statearr_29321_29346[(2)] = inst_29261);

(statearr_29321_29346[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27347__auto__ = null;
var cljs$core$async$state_machine__27347__auto____0 = (function (){
var statearr_29322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29322[(0)] = cljs$core$async$state_machine__27347__auto__);

(statearr_29322[(1)] = (1));

return statearr_29322;
});
var cljs$core$async$state_machine__27347__auto____1 = (function (state_29295){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_29295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e29323){var ex__27350__auto__ = e29323;
var statearr_29324_29347 = state_29295;
(statearr_29324_29347[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_29295[(4)]))){
var statearr_29325_29348 = state_29295;
(statearr_29325_29348[(1)] = cljs.core.first.call(null,(state_29295[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29349 = state_29295;
state_29295 = G__29349;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
cljs$core$async$state_machine__27347__auto__ = function(state_29295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27347__auto____1.call(this,state_29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27347__auto____0;
cljs$core$async$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27347__auto____1;
return cljs$core$async$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_29326 = f__27421__auto__.call(null);
(statearr_29326[(6)] = c__27420__auto___29328);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1655292225535
