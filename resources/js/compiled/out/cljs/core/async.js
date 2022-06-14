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
var G__27473 = arguments.length;
switch (G__27473) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27474 = (function (f,blockable,meta27475){
this.f = f;
this.blockable = blockable;
this.meta27475 = meta27475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27476,meta27475__$1){
var self__ = this;
var _27476__$1 = this;
return (new cljs.core.async.t_cljs$core$async27474(self__.f,self__.blockable,meta27475__$1));
}));

(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27476){
var self__ = this;
var _27476__$1 = this;
return self__.meta27475;
}));

(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27475","meta27475",-799131289,null)], null);
}));

(cljs.core.async.t_cljs$core$async27474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27474");

(cljs.core.async.t_cljs$core$async27474.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27474.
 */
cljs.core.async.__GT_t_cljs$core$async27474 = (function cljs$core$async$__GT_t_cljs$core$async27474(f__$1,blockable__$1,meta27475){
return (new cljs.core.async.t_cljs$core$async27474(f__$1,blockable__$1,meta27475));
});

}

return (new cljs.core.async.t_cljs$core$async27474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27480 = arguments.length;
switch (G__27480) {
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
var G__27483 = arguments.length;
switch (G__27483) {
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
var G__27486 = arguments.length;
switch (G__27486) {
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
var val_27488 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27488);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27488);
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
var G__27490 = arguments.length;
switch (G__27490) {
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
var n__5635__auto___27492 = n;
var x_27493 = (0);
while(true){
if((x_27493 < n__5635__auto___27492)){
(a[x_27493] = x_27493);

var G__27494 = (x_27493 + (1));
x_27493 = G__27494;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27495 = (function (flag,meta27496){
this.flag = flag;
this.meta27496 = meta27496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27497,meta27496__$1){
var self__ = this;
var _27497__$1 = this;
return (new cljs.core.async.t_cljs$core$async27495(self__.flag,meta27496__$1));
}));

(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27497){
var self__ = this;
var _27497__$1 = this;
return self__.meta27496;
}));

(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27496","meta27496",86593300,null)], null);
}));

(cljs.core.async.t_cljs$core$async27495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27495");

(cljs.core.async.t_cljs$core$async27495.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27495.
 */
cljs.core.async.__GT_t_cljs$core$async27495 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27495(flag__$1,meta27496){
return (new cljs.core.async.t_cljs$core$async27495(flag__$1,meta27496));
});

}

return (new cljs.core.async.t_cljs$core$async27495(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27498 = (function (flag,cb,meta27499){
this.flag = flag;
this.cb = cb;
this.meta27499 = meta27499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27500,meta27499__$1){
var self__ = this;
var _27500__$1 = this;
return (new cljs.core.async.t_cljs$core$async27498(self__.flag,self__.cb,meta27499__$1));
}));

(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27500){
var self__ = this;
var _27500__$1 = this;
return self__.meta27499;
}));

(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27499","meta27499",-377084629,null)], null);
}));

(cljs.core.async.t_cljs$core$async27498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27498");

(cljs.core.async.t_cljs$core$async27498.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async27498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27498.
 */
cljs.core.async.__GT_t_cljs$core$async27498 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27498(flag__$1,cb__$1,meta27499){
return (new cljs.core.async.t_cljs$core$async27498(flag__$1,cb__$1,meta27499));
});

}

return (new cljs.core.async.t_cljs$core$async27498(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27501_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27501_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27502_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27502_SHARP_,port], null));
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
var G__27503 = (i + (1));
i = G__27503;
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
var len__5768__auto___27508 = arguments.length;
var i__5769__auto___27509 = (0);
while(true){
if((i__5769__auto___27509 < len__5768__auto___27508)){
args__5774__auto__.push((arguments[i__5769__auto___27509]));

var G__27510 = (i__5769__auto___27509 + (1));
i__5769__auto___27509 = G__27510;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27506){
var map__27507 = p__27506;
var map__27507__$1 = cljs.core.__destructure_map.call(null,map__27507);
var opts = map__27507__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27504){
var G__27505 = cljs.core.first.call(null,seq27504);
var seq27504__$1 = cljs.core.next.call(null,seq27504);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27505,seq27504__$1);
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
var G__27512 = arguments.length;
switch (G__27512) {
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
var c__27413__auto___27559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27536){
var state_val_27537 = (state_27536[(1)]);
if((state_val_27537 === (7))){
var inst_27532 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27538_27560 = state_27536__$1;
(statearr_27538_27560[(2)] = inst_27532);

(statearr_27538_27560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (1))){
var state_27536__$1 = state_27536;
var statearr_27539_27561 = state_27536__$1;
(statearr_27539_27561[(2)] = null);

(statearr_27539_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (4))){
var inst_27515 = (state_27536[(7)]);
var inst_27515__$1 = (state_27536[(2)]);
var inst_27516 = (inst_27515__$1 == null);
var state_27536__$1 = (function (){var statearr_27540 = state_27536;
(statearr_27540[(7)] = inst_27515__$1);

return statearr_27540;
})();
if(cljs.core.truth_(inst_27516)){
var statearr_27541_27562 = state_27536__$1;
(statearr_27541_27562[(1)] = (5));

} else {
var statearr_27542_27563 = state_27536__$1;
(statearr_27542_27563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (13))){
var state_27536__$1 = state_27536;
var statearr_27543_27564 = state_27536__$1;
(statearr_27543_27564[(2)] = null);

(statearr_27543_27564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (6))){
var inst_27515 = (state_27536[(7)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27536__$1,(11),to,inst_27515);
} else {
if((state_val_27537 === (3))){
var inst_27534 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27536__$1,inst_27534);
} else {
if((state_val_27537 === (12))){
var state_27536__$1 = state_27536;
var statearr_27544_27565 = state_27536__$1;
(statearr_27544_27565[(2)] = null);

(statearr_27544_27565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (2))){
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(4),from);
} else {
if((state_val_27537 === (11))){
var inst_27525 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27525)){
var statearr_27545_27566 = state_27536__$1;
(statearr_27545_27566[(1)] = (12));

} else {
var statearr_27546_27567 = state_27536__$1;
(statearr_27546_27567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (9))){
var state_27536__$1 = state_27536;
var statearr_27547_27568 = state_27536__$1;
(statearr_27547_27568[(2)] = null);

(statearr_27547_27568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (5))){
var state_27536__$1 = state_27536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27548_27569 = state_27536__$1;
(statearr_27548_27569[(1)] = (8));

} else {
var statearr_27549_27570 = state_27536__$1;
(statearr_27549_27570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (14))){
var inst_27530 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27550_27571 = state_27536__$1;
(statearr_27550_27571[(2)] = inst_27530);

(statearr_27550_27571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (10))){
var inst_27522 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27551_27572 = state_27536__$1;
(statearr_27551_27572[(2)] = inst_27522);

(statearr_27551_27572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (8))){
var inst_27519 = cljs.core.async.close_BANG_.call(null,to);
var state_27536__$1 = state_27536;
var statearr_27552_27573 = state_27536__$1;
(statearr_27552_27573[(2)] = inst_27519);

(statearr_27552_27573[(1)] = (10));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_27553 = [null,null,null,null,null,null,null,null];
(statearr_27553[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_27553[(1)] = (1));

return statearr_27553;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_27536){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27554){var ex__27343__auto__ = e27554;
var statearr_27555_27574 = state_27536;
(statearr_27555_27574[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27536[(4)]))){
var statearr_27556_27575 = state_27536;
(statearr_27556_27575[(1)] = cljs.core.first.call(null,(state_27536[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27576 = state_27536;
state_27536 = G__27576;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_27536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_27536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27557 = f__27414__auto__.call(null);
(statearr_27557[(6)] = c__27413__auto___27559);

return statearr_27557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var process__$1 = (function (p__27577){
var vec__27578 = p__27577;
var v = cljs.core.nth.call(null,vec__27578,(0),null);
var p = cljs.core.nth.call(null,vec__27578,(1),null);
var job = vec__27578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27413__auto___27754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27585){
var state_val_27586 = (state_27585[(1)]);
if((state_val_27586 === (1))){
var state_27585__$1 = state_27585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27585__$1,(2),res,v);
} else {
if((state_val_27586 === (2))){
var inst_27582 = (state_27585[(2)]);
var inst_27583 = cljs.core.async.close_BANG_.call(null,res);
var state_27585__$1 = (function (){var statearr_27587 = state_27585;
(statearr_27587[(7)] = inst_27582);

return statearr_27587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27585__$1,inst_27583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_27588 = [null,null,null,null,null,null,null,null];
(statearr_27588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__);

(statearr_27588[(1)] = (1));

return statearr_27588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1 = (function (state_27585){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27589){var ex__27343__auto__ = e27589;
var statearr_27590_27755 = state_27585;
(statearr_27590_27755[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27585[(4)]))){
var statearr_27591_27756 = state_27585;
(statearr_27591_27756[(1)] = cljs.core.first.call(null,(state_27585[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27757 = state_27585;
state_27585 = G__27757;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = function(state_27585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1.call(this,state_27585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27592 = f__27414__auto__.call(null);
(statearr_27592[(6)] = c__27413__auto___27754);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27593){
var vec__27594 = p__27593;
var v = cljs.core.nth.call(null,vec__27594,(0),null);
var p = cljs.core.nth.call(null,vec__27594,(1),null);
var job = vec__27594;
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
var n__5635__auto___27758 = n;
var __27759 = (0);
while(true){
if((__27759 < n__5635__auto___27758)){
var G__27597_27760 = type;
var G__27597_27761__$1 = (((G__27597_27760 instanceof cljs.core.Keyword))?G__27597_27760.fqn:null);
switch (G__27597_27761__$1) {
case "compute":
var c__27413__auto___27763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27759,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = ((function (__27759,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function (state_27610){
var state_val_27611 = (state_27610[(1)]);
if((state_val_27611 === (1))){
var state_27610__$1 = state_27610;
var statearr_27612_27764 = state_27610__$1;
(statearr_27612_27764[(2)] = null);

(statearr_27612_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (2))){
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27610__$1,(4),jobs);
} else {
if((state_val_27611 === (3))){
var inst_27608 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27610__$1,inst_27608);
} else {
if((state_val_27611 === (4))){
var inst_27600 = (state_27610[(2)]);
var inst_27601 = process__$1.call(null,inst_27600);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27601)){
var statearr_27613_27765 = state_27610__$1;
(statearr_27613_27765[(1)] = (5));

} else {
var statearr_27614_27766 = state_27610__$1;
(statearr_27614_27766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (5))){
var state_27610__$1 = state_27610;
var statearr_27615_27767 = state_27610__$1;
(statearr_27615_27767[(2)] = null);

(statearr_27615_27767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (6))){
var state_27610__$1 = state_27610;
var statearr_27616_27768 = state_27610__$1;
(statearr_27616_27768[(2)] = null);

(statearr_27616_27768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (7))){
var inst_27606 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27617_27769 = state_27610__$1;
(statearr_27617_27769[(2)] = inst_27606);

(statearr_27617_27769[(1)] = (3));


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
});})(__27759,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
;
return ((function (__27759,switch__27339__auto__,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_27618 = [null,null,null,null,null,null,null];
(statearr_27618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__);

(statearr_27618[(1)] = (1));

return statearr_27618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1 = (function (state_27610){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27619){var ex__27343__auto__ = e27619;
var statearr_27620_27770 = state_27610;
(statearr_27620_27770[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27610[(4)]))){
var statearr_27621_27771 = state_27610;
(statearr_27621_27771[(1)] = cljs.core.first.call(null,(state_27610[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27772 = state_27610;
state_27610 = G__27772;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = function(state_27610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1.call(this,state_27610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__;
})()
;})(__27759,switch__27339__auto__,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
})();
var state__27415__auto__ = (function (){var statearr_27622 = f__27414__auto__.call(null);
(statearr_27622[(6)] = c__27413__auto___27763);

return statearr_27622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
});})(__27759,c__27413__auto___27763,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
);


break;
case "async":
var c__27413__auto___27773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27759,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = ((function (__27759,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function (state_27635){
var state_val_27636 = (state_27635[(1)]);
if((state_val_27636 === (1))){
var state_27635__$1 = state_27635;
var statearr_27637_27774 = state_27635__$1;
(statearr_27637_27774[(2)] = null);

(statearr_27637_27774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (2))){
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27635__$1,(4),jobs);
} else {
if((state_val_27636 === (3))){
var inst_27633 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27635__$1,inst_27633);
} else {
if((state_val_27636 === (4))){
var inst_27625 = (state_27635[(2)]);
var inst_27626 = async.call(null,inst_27625);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27626)){
var statearr_27638_27775 = state_27635__$1;
(statearr_27638_27775[(1)] = (5));

} else {
var statearr_27639_27776 = state_27635__$1;
(statearr_27639_27776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (5))){
var state_27635__$1 = state_27635;
var statearr_27640_27777 = state_27635__$1;
(statearr_27640_27777[(2)] = null);

(statearr_27640_27777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (6))){
var state_27635__$1 = state_27635;
var statearr_27641_27778 = state_27635__$1;
(statearr_27641_27778[(2)] = null);

(statearr_27641_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (7))){
var inst_27631 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27642_27779 = state_27635__$1;
(statearr_27642_27779[(2)] = inst_27631);

(statearr_27642_27779[(1)] = (3));


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
});})(__27759,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
;
return ((function (__27759,switch__27339__auto__,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null];
(statearr_27643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1 = (function (state_27635){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27644){var ex__27343__auto__ = e27644;
var statearr_27645_27780 = state_27635;
(statearr_27645_27780[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27635[(4)]))){
var statearr_27646_27781 = state_27635;
(statearr_27646_27781[(1)] = cljs.core.first.call(null,(state_27635[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27782 = state_27635;
state_27635 = G__27782;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = function(state_27635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1.call(this,state_27635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__;
})()
;})(__27759,switch__27339__auto__,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
})();
var state__27415__auto__ = (function (){var statearr_27647 = f__27414__auto__.call(null);
(statearr_27647[(6)] = c__27413__auto___27773);

return statearr_27647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
});})(__27759,c__27413__auto___27773,G__27597_27760,G__27597_27761__$1,n__5635__auto___27758,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27597_27761__$1)].join('')));

}

var G__27783 = (__27759 + (1));
__27759 = G__27783;
continue;
} else {
}
break;
}

var c__27413__auto___27784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27669){
var state_val_27670 = (state_27669[(1)]);
if((state_val_27670 === (7))){
var inst_27665 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
var statearr_27671_27785 = state_27669__$1;
(statearr_27671_27785[(2)] = inst_27665);

(statearr_27671_27785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (1))){
var state_27669__$1 = state_27669;
var statearr_27672_27786 = state_27669__$1;
(statearr_27672_27786[(2)] = null);

(statearr_27672_27786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (4))){
var inst_27650 = (state_27669[(7)]);
var inst_27650__$1 = (state_27669[(2)]);
var inst_27651 = (inst_27650__$1 == null);
var state_27669__$1 = (function (){var statearr_27673 = state_27669;
(statearr_27673[(7)] = inst_27650__$1);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27651)){
var statearr_27674_27787 = state_27669__$1;
(statearr_27674_27787[(1)] = (5));

} else {
var statearr_27675_27788 = state_27669__$1;
(statearr_27675_27788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (6))){
var inst_27655 = (state_27669[(8)]);
var inst_27650 = (state_27669[(7)]);
var inst_27655__$1 = cljs.core.async.chan.call(null,(1));
var inst_27656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27657 = [inst_27650,inst_27655__$1];
var inst_27658 = (new cljs.core.PersistentVector(null,2,(5),inst_27656,inst_27657,null));
var state_27669__$1 = (function (){var statearr_27676 = state_27669;
(statearr_27676[(8)] = inst_27655__$1);

return statearr_27676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27669__$1,(8),jobs,inst_27658);
} else {
if((state_val_27670 === (3))){
var inst_27667 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27669__$1,inst_27667);
} else {
if((state_val_27670 === (2))){
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27669__$1,(4),from);
} else {
if((state_val_27670 === (9))){
var inst_27662 = (state_27669[(2)]);
var state_27669__$1 = (function (){var statearr_27677 = state_27669;
(statearr_27677[(9)] = inst_27662);

return statearr_27677;
})();
var statearr_27678_27789 = state_27669__$1;
(statearr_27678_27789[(2)] = null);

(statearr_27678_27789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (5))){
var inst_27653 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27669__$1 = state_27669;
var statearr_27679_27790 = state_27669__$1;
(statearr_27679_27790[(2)] = inst_27653);

(statearr_27679_27790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (8))){
var inst_27655 = (state_27669[(8)]);
var inst_27660 = (state_27669[(2)]);
var state_27669__$1 = (function (){var statearr_27680 = state_27669;
(statearr_27680[(10)] = inst_27660);

return statearr_27680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27669__$1,(9),results,inst_27655);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_27681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__);

(statearr_27681[(1)] = (1));

return statearr_27681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1 = (function (state_27669){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27682){var ex__27343__auto__ = e27682;
var statearr_27683_27791 = state_27669;
(statearr_27683_27791[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27669[(4)]))){
var statearr_27684_27792 = state_27669;
(statearr_27684_27792[(1)] = cljs.core.first.call(null,(state_27669[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27669;
state_27669 = G__27793;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = function(state_27669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1.call(this,state_27669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27685 = f__27414__auto__.call(null);
(statearr_27685[(6)] = c__27413__auto___27784);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27723){
var state_val_27724 = (state_27723[(1)]);
if((state_val_27724 === (7))){
var inst_27719 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27725_27794 = state_27723__$1;
(statearr_27725_27794[(2)] = inst_27719);

(statearr_27725_27794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (20))){
var state_27723__$1 = state_27723;
var statearr_27726_27795 = state_27723__$1;
(statearr_27726_27795[(2)] = null);

(statearr_27726_27795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (1))){
var state_27723__$1 = state_27723;
var statearr_27727_27796 = state_27723__$1;
(statearr_27727_27796[(2)] = null);

(statearr_27727_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (4))){
var inst_27688 = (state_27723[(7)]);
var inst_27688__$1 = (state_27723[(2)]);
var inst_27689 = (inst_27688__$1 == null);
var state_27723__$1 = (function (){var statearr_27728 = state_27723;
(statearr_27728[(7)] = inst_27688__$1);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27689)){
var statearr_27729_27797 = state_27723__$1;
(statearr_27729_27797[(1)] = (5));

} else {
var statearr_27730_27798 = state_27723__$1;
(statearr_27730_27798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (15))){
var inst_27701 = (state_27723[(8)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27723__$1,(18),to,inst_27701);
} else {
if((state_val_27724 === (21))){
var inst_27714 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27731_27799 = state_27723__$1;
(statearr_27731_27799[(2)] = inst_27714);

(statearr_27731_27799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (13))){
var inst_27716 = (state_27723[(2)]);
var state_27723__$1 = (function (){var statearr_27732 = state_27723;
(statearr_27732[(9)] = inst_27716);

return statearr_27732;
})();
var statearr_27733_27800 = state_27723__$1;
(statearr_27733_27800[(2)] = null);

(statearr_27733_27800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (6))){
var inst_27688 = (state_27723[(7)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(11),inst_27688);
} else {
if((state_val_27724 === (17))){
var inst_27709 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
if(cljs.core.truth_(inst_27709)){
var statearr_27734_27801 = state_27723__$1;
(statearr_27734_27801[(1)] = (19));

} else {
var statearr_27735_27802 = state_27723__$1;
(statearr_27735_27802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (3))){
var inst_27721 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27723__$1,inst_27721);
} else {
if((state_val_27724 === (12))){
var inst_27698 = (state_27723[(10)]);
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(14),inst_27698);
} else {
if((state_val_27724 === (2))){
var state_27723__$1 = state_27723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27723__$1,(4),results);
} else {
if((state_val_27724 === (19))){
var state_27723__$1 = state_27723;
var statearr_27736_27803 = state_27723__$1;
(statearr_27736_27803[(2)] = null);

(statearr_27736_27803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (11))){
var inst_27698 = (state_27723[(2)]);
var state_27723__$1 = (function (){var statearr_27737 = state_27723;
(statearr_27737[(10)] = inst_27698);

return statearr_27737;
})();
var statearr_27738_27804 = state_27723__$1;
(statearr_27738_27804[(2)] = null);

(statearr_27738_27804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (9))){
var state_27723__$1 = state_27723;
var statearr_27739_27805 = state_27723__$1;
(statearr_27739_27805[(2)] = null);

(statearr_27739_27805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (5))){
var state_27723__$1 = state_27723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27740_27806 = state_27723__$1;
(statearr_27740_27806[(1)] = (8));

} else {
var statearr_27741_27807 = state_27723__$1;
(statearr_27741_27807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (14))){
var inst_27701 = (state_27723[(8)]);
var inst_27703 = (state_27723[(11)]);
var inst_27701__$1 = (state_27723[(2)]);
var inst_27702 = (inst_27701__$1 == null);
var inst_27703__$1 = cljs.core.not.call(null,inst_27702);
var state_27723__$1 = (function (){var statearr_27742 = state_27723;
(statearr_27742[(8)] = inst_27701__$1);

(statearr_27742[(11)] = inst_27703__$1);

return statearr_27742;
})();
if(inst_27703__$1){
var statearr_27743_27808 = state_27723__$1;
(statearr_27743_27808[(1)] = (15));

} else {
var statearr_27744_27809 = state_27723__$1;
(statearr_27744_27809[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (16))){
var inst_27703 = (state_27723[(11)]);
var state_27723__$1 = state_27723;
var statearr_27745_27810 = state_27723__$1;
(statearr_27745_27810[(2)] = inst_27703);

(statearr_27745_27810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (10))){
var inst_27695 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27746_27811 = state_27723__$1;
(statearr_27746_27811[(2)] = inst_27695);

(statearr_27746_27811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (18))){
var inst_27706 = (state_27723[(2)]);
var state_27723__$1 = state_27723;
var statearr_27747_27812 = state_27723__$1;
(statearr_27747_27812[(2)] = inst_27706);

(statearr_27747_27812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27724 === (8))){
var inst_27692 = cljs.core.async.close_BANG_.call(null,to);
var state_27723__$1 = state_27723;
var statearr_27748_27813 = state_27723__$1;
(statearr_27748_27813[(2)] = inst_27692);

(statearr_27748_27813[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_27749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__);

(statearr_27749[(1)] = (1));

return statearr_27749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1 = (function (state_27723){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27750){var ex__27343__auto__ = e27750;
var statearr_27751_27814 = state_27723;
(statearr_27751_27814[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27723[(4)]))){
var statearr_27752_27815 = state_27723;
(statearr_27752_27815[(1)] = cljs.core.first.call(null,(state_27723[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27816 = state_27723;
state_27723 = G__27816;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__ = function(state_27723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1.call(this,state_27723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27753 = f__27414__auto__.call(null);
(statearr_27753[(6)] = c__27413__auto__);

return statearr_27753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
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
var G__27818 = arguments.length;
switch (G__27818) {
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
var G__27821 = arguments.length;
switch (G__27821) {
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
var G__27824 = arguments.length;
switch (G__27824) {
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
var c__27413__auto___27874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (7))){
var inst_27846 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27852_27875 = state_27850__$1;
(statearr_27852_27875[(2)] = inst_27846);

(statearr_27852_27875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (1))){
var state_27850__$1 = state_27850;
var statearr_27853_27876 = state_27850__$1;
(statearr_27853_27876[(2)] = null);

(statearr_27853_27876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (4))){
var inst_27827 = (state_27850[(7)]);
var inst_27827__$1 = (state_27850[(2)]);
var inst_27828 = (inst_27827__$1 == null);
var state_27850__$1 = (function (){var statearr_27854 = state_27850;
(statearr_27854[(7)] = inst_27827__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27828)){
var statearr_27855_27877 = state_27850__$1;
(statearr_27855_27877[(1)] = (5));

} else {
var statearr_27856_27878 = state_27850__$1;
(statearr_27856_27878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (13))){
var state_27850__$1 = state_27850;
var statearr_27857_27879 = state_27850__$1;
(statearr_27857_27879[(2)] = null);

(statearr_27857_27879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (6))){
var inst_27827 = (state_27850[(7)]);
var inst_27833 = p.call(null,inst_27827);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27833)){
var statearr_27858_27880 = state_27850__$1;
(statearr_27858_27880[(1)] = (9));

} else {
var statearr_27859_27881 = state_27850__$1;
(statearr_27859_27881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (3))){
var inst_27848 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
if((state_val_27851 === (12))){
var state_27850__$1 = state_27850;
var statearr_27860_27882 = state_27850__$1;
(statearr_27860_27882[(2)] = null);

(statearr_27860_27882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (2))){
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27850__$1,(4),ch);
} else {
if((state_val_27851 === (11))){
var inst_27827 = (state_27850[(7)]);
var inst_27837 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27850__$1,(8),inst_27837,inst_27827);
} else {
if((state_val_27851 === (9))){
var state_27850__$1 = state_27850;
var statearr_27861_27883 = state_27850__$1;
(statearr_27861_27883[(2)] = tc);

(statearr_27861_27883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (5))){
var inst_27830 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27831 = cljs.core.async.close_BANG_.call(null,fc);
var state_27850__$1 = (function (){var statearr_27862 = state_27850;
(statearr_27862[(8)] = inst_27830);

return statearr_27862;
})();
var statearr_27863_27884 = state_27850__$1;
(statearr_27863_27884[(2)] = inst_27831);

(statearr_27863_27884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (14))){
var inst_27844 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27864_27885 = state_27850__$1;
(statearr_27864_27885[(2)] = inst_27844);

(statearr_27864_27885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (10))){
var state_27850__$1 = state_27850;
var statearr_27865_27886 = state_27850__$1;
(statearr_27865_27886[(2)] = fc);

(statearr_27865_27886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (8))){
var inst_27839 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27839)){
var statearr_27866_27887 = state_27850__$1;
(statearr_27866_27887[(1)] = (12));

} else {
var statearr_27867_27888 = state_27850__$1;
(statearr_27867_27888[(1)] = (13));

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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_27868 = [null,null,null,null,null,null,null,null,null];
(statearr_27868[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_27868[(1)] = (1));

return statearr_27868;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_27850){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27869){var ex__27343__auto__ = e27869;
var statearr_27870_27889 = state_27850;
(statearr_27870_27889[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27850[(4)]))){
var statearr_27871_27890 = state_27850;
(statearr_27871_27890[(1)] = cljs.core.first.call(null,(state_27850[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27891 = state_27850;
state_27850 = G__27891;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27872 = f__27414__auto__.call(null);
(statearr_27872[(6)] = c__27413__auto___27874);

return statearr_27872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27913){
var state_val_27914 = (state_27913[(1)]);
if((state_val_27914 === (7))){
var inst_27909 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27915_27934 = state_27913__$1;
(statearr_27915_27934[(2)] = inst_27909);

(statearr_27915_27934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (1))){
var inst_27892 = init;
var inst_27893 = inst_27892;
var state_27913__$1 = (function (){var statearr_27916 = state_27913;
(statearr_27916[(7)] = inst_27893);

return statearr_27916;
})();
var statearr_27917_27935 = state_27913__$1;
(statearr_27917_27935[(2)] = null);

(statearr_27917_27935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (4))){
var inst_27896 = (state_27913[(8)]);
var inst_27896__$1 = (state_27913[(2)]);
var inst_27897 = (inst_27896__$1 == null);
var state_27913__$1 = (function (){var statearr_27918 = state_27913;
(statearr_27918[(8)] = inst_27896__$1);

return statearr_27918;
})();
if(cljs.core.truth_(inst_27897)){
var statearr_27919_27936 = state_27913__$1;
(statearr_27919_27936[(1)] = (5));

} else {
var statearr_27920_27937 = state_27913__$1;
(statearr_27920_27937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (6))){
var inst_27896 = (state_27913[(8)]);
var inst_27893 = (state_27913[(7)]);
var inst_27900 = (state_27913[(9)]);
var inst_27900__$1 = f.call(null,inst_27893,inst_27896);
var inst_27901 = cljs.core.reduced_QMARK_.call(null,inst_27900__$1);
var state_27913__$1 = (function (){var statearr_27921 = state_27913;
(statearr_27921[(9)] = inst_27900__$1);

return statearr_27921;
})();
if(inst_27901){
var statearr_27922_27938 = state_27913__$1;
(statearr_27922_27938[(1)] = (8));

} else {
var statearr_27923_27939 = state_27913__$1;
(statearr_27923_27939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (3))){
var inst_27911 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else {
if((state_val_27914 === (2))){
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(4),ch);
} else {
if((state_val_27914 === (9))){
var inst_27900 = (state_27913[(9)]);
var inst_27893 = inst_27900;
var state_27913__$1 = (function (){var statearr_27924 = state_27913;
(statearr_27924[(7)] = inst_27893);

return statearr_27924;
})();
var statearr_27925_27940 = state_27913__$1;
(statearr_27925_27940[(2)] = null);

(statearr_27925_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (5))){
var inst_27893 = (state_27913[(7)]);
var state_27913__$1 = state_27913;
var statearr_27926_27941 = state_27913__$1;
(statearr_27926_27941[(2)] = inst_27893);

(statearr_27926_27941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (10))){
var inst_27907 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27927_27942 = state_27913__$1;
(statearr_27927_27942[(2)] = inst_27907);

(statearr_27927_27942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (8))){
var inst_27900 = (state_27913[(9)]);
var inst_27903 = cljs.core.deref.call(null,inst_27900);
var state_27913__$1 = state_27913;
var statearr_27928_27943 = state_27913__$1;
(statearr_27928_27943[(2)] = inst_27903);

(statearr_27928_27943[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27340__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27340__auto____0 = (function (){
var statearr_27929 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27929[(0)] = cljs$core$async$reduce_$_state_machine__27340__auto__);

(statearr_27929[(1)] = (1));

return statearr_27929;
});
var cljs$core$async$reduce_$_state_machine__27340__auto____1 = (function (state_27913){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27930){var ex__27343__auto__ = e27930;
var statearr_27931_27944 = state_27913;
(statearr_27931_27944[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27913[(4)]))){
var statearr_27932_27945 = state_27913;
(statearr_27932_27945[(1)] = cljs.core.first.call(null,(state_27913[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27946 = state_27913;
state_27913 = G__27946;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27340__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27340__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27340__auto____0;
cljs$core$async$reduce_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27340__auto____1;
return cljs$core$async$reduce_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27933 = f__27414__auto__.call(null);
(statearr_27933[(6)] = c__27413__auto__);

return statearr_27933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (1))){
var inst_27947 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(2),inst_27947);
} else {
if((state_val_27953 === (2))){
var inst_27949 = (state_27952[(2)]);
var inst_27950 = f__$1.call(null,inst_27949);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27340__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27340__auto____0 = (function (){
var statearr_27954 = [null,null,null,null,null,null,null];
(statearr_27954[(0)] = cljs$core$async$transduce_$_state_machine__27340__auto__);

(statearr_27954[(1)] = (1));

return statearr_27954;
});
var cljs$core$async$transduce_$_state_machine__27340__auto____1 = (function (state_27952){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e27955){var ex__27343__auto__ = e27955;
var statearr_27956_27959 = state_27952;
(statearr_27956_27959[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27952[(4)]))){
var statearr_27957_27960 = state_27952;
(statearr_27957_27960[(1)] = cljs.core.first.call(null,(state_27952[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27961 = state_27952;
state_27952 = G__27961;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27340__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27340__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27340__auto____0;
cljs$core$async$transduce_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27340__auto____1;
return cljs$core$async$transduce_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_27958 = f__27414__auto__.call(null);
(statearr_27958[(6)] = c__27413__auto__);

return statearr_27958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
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
var G__27963 = arguments.length;
switch (G__27963) {
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
var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_27988){
var state_val_27989 = (state_27988[(1)]);
if((state_val_27989 === (7))){
var inst_27970 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
var statearr_27990_28012 = state_27988__$1;
(statearr_27990_28012[(2)] = inst_27970);

(statearr_27990_28012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (1))){
var inst_27964 = cljs.core.seq.call(null,coll);
var inst_27965 = inst_27964;
var state_27988__$1 = (function (){var statearr_27991 = state_27988;
(statearr_27991[(7)] = inst_27965);

return statearr_27991;
})();
var statearr_27992_28013 = state_27988__$1;
(statearr_27992_28013[(2)] = null);

(statearr_27992_28013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (4))){
var inst_27965 = (state_27988[(7)]);
var inst_27968 = cljs.core.first.call(null,inst_27965);
var state_27988__$1 = state_27988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27988__$1,(7),ch,inst_27968);
} else {
if((state_val_27989 === (13))){
var inst_27982 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
var statearr_27993_28014 = state_27988__$1;
(statearr_27993_28014[(2)] = inst_27982);

(statearr_27993_28014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (6))){
var inst_27973 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
if(cljs.core.truth_(inst_27973)){
var statearr_27994_28015 = state_27988__$1;
(statearr_27994_28015[(1)] = (8));

} else {
var statearr_27995_28016 = state_27988__$1;
(statearr_27995_28016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (3))){
var inst_27986 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27988__$1,inst_27986);
} else {
if((state_val_27989 === (12))){
var state_27988__$1 = state_27988;
var statearr_27996_28017 = state_27988__$1;
(statearr_27996_28017[(2)] = null);

(statearr_27996_28017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (2))){
var inst_27965 = (state_27988[(7)]);
var state_27988__$1 = state_27988;
if(cljs.core.truth_(inst_27965)){
var statearr_27997_28018 = state_27988__$1;
(statearr_27997_28018[(1)] = (4));

} else {
var statearr_27998_28019 = state_27988__$1;
(statearr_27998_28019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (11))){
var inst_27979 = cljs.core.async.close_BANG_.call(null,ch);
var state_27988__$1 = state_27988;
var statearr_27999_28020 = state_27988__$1;
(statearr_27999_28020[(2)] = inst_27979);

(statearr_27999_28020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (9))){
var state_27988__$1 = state_27988;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28000_28021 = state_27988__$1;
(statearr_28000_28021[(1)] = (11));

} else {
var statearr_28001_28022 = state_27988__$1;
(statearr_28001_28022[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (5))){
var inst_27965 = (state_27988[(7)]);
var state_27988__$1 = state_27988;
var statearr_28002_28023 = state_27988__$1;
(statearr_28002_28023[(2)] = inst_27965);

(statearr_28002_28023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (10))){
var inst_27984 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
var statearr_28003_28024 = state_27988__$1;
(statearr_28003_28024[(2)] = inst_27984);

(statearr_28003_28024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (8))){
var inst_27965 = (state_27988[(7)]);
var inst_27975 = cljs.core.next.call(null,inst_27965);
var inst_27965__$1 = inst_27975;
var state_27988__$1 = (function (){var statearr_28004 = state_27988;
(statearr_28004[(7)] = inst_27965__$1);

return statearr_28004;
})();
var statearr_28005_28025 = state_27988__$1;
(statearr_28005_28025[(2)] = null);

(statearr_28005_28025[(1)] = (2));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28006 = [null,null,null,null,null,null,null,null];
(statearr_28006[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28006[(1)] = (1));

return statearr_28006;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_27988){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_27988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28007){var ex__27343__auto__ = e28007;
var statearr_28008_28026 = state_27988;
(statearr_28008_28026[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_27988[(4)]))){
var statearr_28009_28027 = state_27988;
(statearr_28009_28027[(1)] = cljs.core.first.call(null,(state_27988[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28028 = state_27988;
state_27988 = G__28028;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_27988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_27988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28010 = f__27414__auto__.call(null);
(statearr_28010[(6)] = c__27413__auto__);

return statearr_28010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
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
var G__28030 = arguments.length;
switch (G__28030) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_28032 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_28032.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_28033 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_28033.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_28034 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_28034.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_28035 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_28035.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28036 = (function (ch,cs,meta28037){
this.ch = ch;
this.cs = cs;
this.meta28037 = meta28037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28038,meta28037__$1){
var self__ = this;
var _28038__$1 = this;
return (new cljs.core.async.t_cljs$core$async28036(self__.ch,self__.cs,meta28037__$1));
}));

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28038){
var self__ = this;
var _28038__$1 = this;
return self__.meta28037;
}));

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28037","meta28037",-946190185,null)], null);
}));

(cljs.core.async.t_cljs$core$async28036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28036");

(cljs.core.async.t_cljs$core$async28036.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28036.
 */
cljs.core.async.__GT_t_cljs$core$async28036 = (function cljs$core$async$mult_$___GT_t_cljs$core$async28036(ch__$1,cs__$1,meta28037){
return (new cljs.core.async.t_cljs$core$async28036(ch__$1,cs__$1,meta28037));
});

}

return (new cljs.core.async.t_cljs$core$async28036(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27413__auto___28255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28171){
var state_val_28172 = (state_28171[(1)]);
if((state_val_28172 === (7))){
var inst_28167 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28173_28256 = state_28171__$1;
(statearr_28173_28256[(2)] = inst_28167);

(statearr_28173_28256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (20))){
var inst_28072 = (state_28171[(7)]);
var inst_28084 = cljs.core.first.call(null,inst_28072);
var inst_28085 = cljs.core.nth.call(null,inst_28084,(0),null);
var inst_28086 = cljs.core.nth.call(null,inst_28084,(1),null);
var state_28171__$1 = (function (){var statearr_28174 = state_28171;
(statearr_28174[(8)] = inst_28085);

return statearr_28174;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28175_28257 = state_28171__$1;
(statearr_28175_28257[(1)] = (22));

} else {
var statearr_28176_28258 = state_28171__$1;
(statearr_28176_28258[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (27))){
var inst_28121 = (state_28171[(9)]);
var inst_28041 = (state_28171[(10)]);
var inst_28114 = (state_28171[(11)]);
var inst_28116 = (state_28171[(12)]);
var inst_28121__$1 = cljs.core._nth.call(null,inst_28114,inst_28116);
var inst_28122 = cljs.core.async.put_BANG_.call(null,inst_28121__$1,inst_28041,done);
var state_28171__$1 = (function (){var statearr_28177 = state_28171;
(statearr_28177[(9)] = inst_28121__$1);

return statearr_28177;
})();
if(cljs.core.truth_(inst_28122)){
var statearr_28178_28259 = state_28171__$1;
(statearr_28178_28259[(1)] = (30));

} else {
var statearr_28179_28260 = state_28171__$1;
(statearr_28179_28260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (1))){
var state_28171__$1 = state_28171;
var statearr_28180_28261 = state_28171__$1;
(statearr_28180_28261[(2)] = null);

(statearr_28180_28261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (24))){
var inst_28072 = (state_28171[(7)]);
var inst_28091 = (state_28171[(2)]);
var inst_28092 = cljs.core.next.call(null,inst_28072);
var inst_28050 = inst_28092;
var inst_28051 = null;
var inst_28052 = (0);
var inst_28053 = (0);
var state_28171__$1 = (function (){var statearr_28181 = state_28171;
(statearr_28181[(13)] = inst_28053);

(statearr_28181[(14)] = inst_28052);

(statearr_28181[(15)] = inst_28091);

(statearr_28181[(16)] = inst_28051);

(statearr_28181[(17)] = inst_28050);

return statearr_28181;
})();
var statearr_28182_28262 = state_28171__$1;
(statearr_28182_28262[(2)] = null);

(statearr_28182_28262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (39))){
var state_28171__$1 = state_28171;
var statearr_28186_28263 = state_28171__$1;
(statearr_28186_28263[(2)] = null);

(statearr_28186_28263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (4))){
var inst_28041 = (state_28171[(10)]);
var inst_28041__$1 = (state_28171[(2)]);
var inst_28042 = (inst_28041__$1 == null);
var state_28171__$1 = (function (){var statearr_28187 = state_28171;
(statearr_28187[(10)] = inst_28041__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28042)){
var statearr_28188_28264 = state_28171__$1;
(statearr_28188_28264[(1)] = (5));

} else {
var statearr_28189_28265 = state_28171__$1;
(statearr_28189_28265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (15))){
var inst_28053 = (state_28171[(13)]);
var inst_28052 = (state_28171[(14)]);
var inst_28051 = (state_28171[(16)]);
var inst_28050 = (state_28171[(17)]);
var inst_28068 = (state_28171[(2)]);
var inst_28069 = (inst_28053 + (1));
var tmp28183 = inst_28052;
var tmp28184 = inst_28051;
var tmp28185 = inst_28050;
var inst_28050__$1 = tmp28185;
var inst_28051__$1 = tmp28184;
var inst_28052__$1 = tmp28183;
var inst_28053__$1 = inst_28069;
var state_28171__$1 = (function (){var statearr_28190 = state_28171;
(statearr_28190[(13)] = inst_28053__$1);

(statearr_28190[(14)] = inst_28052__$1);

(statearr_28190[(18)] = inst_28068);

(statearr_28190[(16)] = inst_28051__$1);

(statearr_28190[(17)] = inst_28050__$1);

return statearr_28190;
})();
var statearr_28191_28266 = state_28171__$1;
(statearr_28191_28266[(2)] = null);

(statearr_28191_28266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (21))){
var inst_28095 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28195_28267 = state_28171__$1;
(statearr_28195_28267[(2)] = inst_28095);

(statearr_28195_28267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (31))){
var inst_28121 = (state_28171[(9)]);
var inst_28125 = cljs.core.async.untap_STAR_.call(null,m,inst_28121);
var state_28171__$1 = state_28171;
var statearr_28196_28268 = state_28171__$1;
(statearr_28196_28268[(2)] = inst_28125);

(statearr_28196_28268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (32))){
var inst_28113 = (state_28171[(19)]);
var inst_28115 = (state_28171[(20)]);
var inst_28114 = (state_28171[(11)]);
var inst_28116 = (state_28171[(12)]);
var inst_28127 = (state_28171[(2)]);
var inst_28128 = (inst_28116 + (1));
var tmp28192 = inst_28113;
var tmp28193 = inst_28115;
var tmp28194 = inst_28114;
var inst_28113__$1 = tmp28192;
var inst_28114__$1 = tmp28194;
var inst_28115__$1 = tmp28193;
var inst_28116__$1 = inst_28128;
var state_28171__$1 = (function (){var statearr_28197 = state_28171;
(statearr_28197[(19)] = inst_28113__$1);

(statearr_28197[(20)] = inst_28115__$1);

(statearr_28197[(11)] = inst_28114__$1);

(statearr_28197[(12)] = inst_28116__$1);

(statearr_28197[(21)] = inst_28127);

return statearr_28197;
})();
var statearr_28198_28269 = state_28171__$1;
(statearr_28198_28269[(2)] = null);

(statearr_28198_28269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (40))){
var inst_28140 = (state_28171[(22)]);
var inst_28144 = cljs.core.async.untap_STAR_.call(null,m,inst_28140);
var state_28171__$1 = state_28171;
var statearr_28199_28270 = state_28171__$1;
(statearr_28199_28270[(2)] = inst_28144);

(statearr_28199_28270[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (33))){
var inst_28131 = (state_28171[(23)]);
var inst_28133 = cljs.core.chunked_seq_QMARK_.call(null,inst_28131);
var state_28171__$1 = state_28171;
if(inst_28133){
var statearr_28200_28271 = state_28171__$1;
(statearr_28200_28271[(1)] = (36));

} else {
var statearr_28201_28272 = state_28171__$1;
(statearr_28201_28272[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (13))){
var inst_28062 = (state_28171[(24)]);
var inst_28065 = cljs.core.async.close_BANG_.call(null,inst_28062);
var state_28171__$1 = state_28171;
var statearr_28202_28273 = state_28171__$1;
(statearr_28202_28273[(2)] = inst_28065);

(statearr_28202_28273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (22))){
var inst_28085 = (state_28171[(8)]);
var inst_28088 = cljs.core.async.close_BANG_.call(null,inst_28085);
var state_28171__$1 = state_28171;
var statearr_28203_28274 = state_28171__$1;
(statearr_28203_28274[(2)] = inst_28088);

(statearr_28203_28274[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (36))){
var inst_28131 = (state_28171[(23)]);
var inst_28135 = cljs.core.chunk_first.call(null,inst_28131);
var inst_28136 = cljs.core.chunk_rest.call(null,inst_28131);
var inst_28137 = cljs.core.count.call(null,inst_28135);
var inst_28113 = inst_28136;
var inst_28114 = inst_28135;
var inst_28115 = inst_28137;
var inst_28116 = (0);
var state_28171__$1 = (function (){var statearr_28204 = state_28171;
(statearr_28204[(19)] = inst_28113);

(statearr_28204[(20)] = inst_28115);

(statearr_28204[(11)] = inst_28114);

(statearr_28204[(12)] = inst_28116);

return statearr_28204;
})();
var statearr_28205_28275 = state_28171__$1;
(statearr_28205_28275[(2)] = null);

(statearr_28205_28275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (41))){
var inst_28131 = (state_28171[(23)]);
var inst_28146 = (state_28171[(2)]);
var inst_28147 = cljs.core.next.call(null,inst_28131);
var inst_28113 = inst_28147;
var inst_28114 = null;
var inst_28115 = (0);
var inst_28116 = (0);
var state_28171__$1 = (function (){var statearr_28206 = state_28171;
(statearr_28206[(19)] = inst_28113);

(statearr_28206[(25)] = inst_28146);

(statearr_28206[(20)] = inst_28115);

(statearr_28206[(11)] = inst_28114);

(statearr_28206[(12)] = inst_28116);

return statearr_28206;
})();
var statearr_28207_28276 = state_28171__$1;
(statearr_28207_28276[(2)] = null);

(statearr_28207_28276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (43))){
var state_28171__$1 = state_28171;
var statearr_28208_28277 = state_28171__$1;
(statearr_28208_28277[(2)] = null);

(statearr_28208_28277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (29))){
var inst_28155 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28209_28278 = state_28171__$1;
(statearr_28209_28278[(2)] = inst_28155);

(statearr_28209_28278[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (44))){
var inst_28164 = (state_28171[(2)]);
var state_28171__$1 = (function (){var statearr_28210 = state_28171;
(statearr_28210[(26)] = inst_28164);

return statearr_28210;
})();
var statearr_28211_28279 = state_28171__$1;
(statearr_28211_28279[(2)] = null);

(statearr_28211_28279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (6))){
var inst_28105 = (state_28171[(27)]);
var inst_28104 = cljs.core.deref.call(null,cs);
var inst_28105__$1 = cljs.core.keys.call(null,inst_28104);
var inst_28106 = cljs.core.count.call(null,inst_28105__$1);
var inst_28107 = cljs.core.reset_BANG_.call(null,dctr,inst_28106);
var inst_28112 = cljs.core.seq.call(null,inst_28105__$1);
var inst_28113 = inst_28112;
var inst_28114 = null;
var inst_28115 = (0);
var inst_28116 = (0);
var state_28171__$1 = (function (){var statearr_28212 = state_28171;
(statearr_28212[(19)] = inst_28113);

(statearr_28212[(20)] = inst_28115);

(statearr_28212[(11)] = inst_28114);

(statearr_28212[(28)] = inst_28107);

(statearr_28212[(12)] = inst_28116);

(statearr_28212[(27)] = inst_28105__$1);

return statearr_28212;
})();
var statearr_28213_28280 = state_28171__$1;
(statearr_28213_28280[(2)] = null);

(statearr_28213_28280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (28))){
var inst_28131 = (state_28171[(23)]);
var inst_28113 = (state_28171[(19)]);
var inst_28131__$1 = cljs.core.seq.call(null,inst_28113);
var state_28171__$1 = (function (){var statearr_28214 = state_28171;
(statearr_28214[(23)] = inst_28131__$1);

return statearr_28214;
})();
if(inst_28131__$1){
var statearr_28215_28281 = state_28171__$1;
(statearr_28215_28281[(1)] = (33));

} else {
var statearr_28216_28282 = state_28171__$1;
(statearr_28216_28282[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (25))){
var inst_28115 = (state_28171[(20)]);
var inst_28116 = (state_28171[(12)]);
var inst_28118 = (inst_28116 < inst_28115);
var inst_28119 = inst_28118;
var state_28171__$1 = state_28171;
if(cljs.core.truth_(inst_28119)){
var statearr_28217_28283 = state_28171__$1;
(statearr_28217_28283[(1)] = (27));

} else {
var statearr_28218_28284 = state_28171__$1;
(statearr_28218_28284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (34))){
var state_28171__$1 = state_28171;
var statearr_28219_28285 = state_28171__$1;
(statearr_28219_28285[(2)] = null);

(statearr_28219_28285[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (17))){
var state_28171__$1 = state_28171;
var statearr_28220_28286 = state_28171__$1;
(statearr_28220_28286[(2)] = null);

(statearr_28220_28286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (3))){
var inst_28169 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28171__$1,inst_28169);
} else {
if((state_val_28172 === (12))){
var inst_28100 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28221_28287 = state_28171__$1;
(statearr_28221_28287[(2)] = inst_28100);

(statearr_28221_28287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (2))){
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28171__$1,(4),ch);
} else {
if((state_val_28172 === (23))){
var state_28171__$1 = state_28171;
var statearr_28222_28288 = state_28171__$1;
(statearr_28222_28288[(2)] = null);

(statearr_28222_28288[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (35))){
var inst_28153 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28223_28289 = state_28171__$1;
(statearr_28223_28289[(2)] = inst_28153);

(statearr_28223_28289[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (19))){
var inst_28072 = (state_28171[(7)]);
var inst_28076 = cljs.core.chunk_first.call(null,inst_28072);
var inst_28077 = cljs.core.chunk_rest.call(null,inst_28072);
var inst_28078 = cljs.core.count.call(null,inst_28076);
var inst_28050 = inst_28077;
var inst_28051 = inst_28076;
var inst_28052 = inst_28078;
var inst_28053 = (0);
var state_28171__$1 = (function (){var statearr_28224 = state_28171;
(statearr_28224[(13)] = inst_28053);

(statearr_28224[(14)] = inst_28052);

(statearr_28224[(16)] = inst_28051);

(statearr_28224[(17)] = inst_28050);

return statearr_28224;
})();
var statearr_28225_28290 = state_28171__$1;
(statearr_28225_28290[(2)] = null);

(statearr_28225_28290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (11))){
var inst_28072 = (state_28171[(7)]);
var inst_28050 = (state_28171[(17)]);
var inst_28072__$1 = cljs.core.seq.call(null,inst_28050);
var state_28171__$1 = (function (){var statearr_28226 = state_28171;
(statearr_28226[(7)] = inst_28072__$1);

return statearr_28226;
})();
if(inst_28072__$1){
var statearr_28227_28291 = state_28171__$1;
(statearr_28227_28291[(1)] = (16));

} else {
var statearr_28228_28292 = state_28171__$1;
(statearr_28228_28292[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (9))){
var inst_28102 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28229_28293 = state_28171__$1;
(statearr_28229_28293[(2)] = inst_28102);

(statearr_28229_28293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (5))){
var inst_28048 = cljs.core.deref.call(null,cs);
var inst_28049 = cljs.core.seq.call(null,inst_28048);
var inst_28050 = inst_28049;
var inst_28051 = null;
var inst_28052 = (0);
var inst_28053 = (0);
var state_28171__$1 = (function (){var statearr_28230 = state_28171;
(statearr_28230[(13)] = inst_28053);

(statearr_28230[(14)] = inst_28052);

(statearr_28230[(16)] = inst_28051);

(statearr_28230[(17)] = inst_28050);

return statearr_28230;
})();
var statearr_28231_28294 = state_28171__$1;
(statearr_28231_28294[(2)] = null);

(statearr_28231_28294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (14))){
var state_28171__$1 = state_28171;
var statearr_28232_28295 = state_28171__$1;
(statearr_28232_28295[(2)] = null);

(statearr_28232_28295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (45))){
var inst_28161 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28233_28296 = state_28171__$1;
(statearr_28233_28296[(2)] = inst_28161);

(statearr_28233_28296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (26))){
var inst_28105 = (state_28171[(27)]);
var inst_28157 = (state_28171[(2)]);
var inst_28158 = cljs.core.seq.call(null,inst_28105);
var state_28171__$1 = (function (){var statearr_28234 = state_28171;
(statearr_28234[(29)] = inst_28157);

return statearr_28234;
})();
if(inst_28158){
var statearr_28235_28297 = state_28171__$1;
(statearr_28235_28297[(1)] = (42));

} else {
var statearr_28236_28298 = state_28171__$1;
(statearr_28236_28298[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (16))){
var inst_28072 = (state_28171[(7)]);
var inst_28074 = cljs.core.chunked_seq_QMARK_.call(null,inst_28072);
var state_28171__$1 = state_28171;
if(inst_28074){
var statearr_28237_28299 = state_28171__$1;
(statearr_28237_28299[(1)] = (19));

} else {
var statearr_28238_28300 = state_28171__$1;
(statearr_28238_28300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (38))){
var inst_28150 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28239_28301 = state_28171__$1;
(statearr_28239_28301[(2)] = inst_28150);

(statearr_28239_28301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (30))){
var state_28171__$1 = state_28171;
var statearr_28240_28302 = state_28171__$1;
(statearr_28240_28302[(2)] = null);

(statearr_28240_28302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (10))){
var inst_28053 = (state_28171[(13)]);
var inst_28051 = (state_28171[(16)]);
var inst_28061 = cljs.core._nth.call(null,inst_28051,inst_28053);
var inst_28062 = cljs.core.nth.call(null,inst_28061,(0),null);
var inst_28063 = cljs.core.nth.call(null,inst_28061,(1),null);
var state_28171__$1 = (function (){var statearr_28241 = state_28171;
(statearr_28241[(24)] = inst_28062);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28063)){
var statearr_28242_28303 = state_28171__$1;
(statearr_28242_28303[(1)] = (13));

} else {
var statearr_28243_28304 = state_28171__$1;
(statearr_28243_28304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (18))){
var inst_28098 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28244_28305 = state_28171__$1;
(statearr_28244_28305[(2)] = inst_28098);

(statearr_28244_28305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (42))){
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28171__$1,(45),dchan);
} else {
if((state_val_28172 === (37))){
var inst_28041 = (state_28171[(10)]);
var inst_28131 = (state_28171[(23)]);
var inst_28140 = (state_28171[(22)]);
var inst_28140__$1 = cljs.core.first.call(null,inst_28131);
var inst_28141 = cljs.core.async.put_BANG_.call(null,inst_28140__$1,inst_28041,done);
var state_28171__$1 = (function (){var statearr_28245 = state_28171;
(statearr_28245[(22)] = inst_28140__$1);

return statearr_28245;
})();
if(cljs.core.truth_(inst_28141)){
var statearr_28246_28306 = state_28171__$1;
(statearr_28246_28306[(1)] = (39));

} else {
var statearr_28247_28307 = state_28171__$1;
(statearr_28247_28307[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (8))){
var inst_28053 = (state_28171[(13)]);
var inst_28052 = (state_28171[(14)]);
var inst_28055 = (inst_28053 < inst_28052);
var inst_28056 = inst_28055;
var state_28171__$1 = state_28171;
if(cljs.core.truth_(inst_28056)){
var statearr_28248_28308 = state_28171__$1;
(statearr_28248_28308[(1)] = (10));

} else {
var statearr_28249_28309 = state_28171__$1;
(statearr_28249_28309[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27340__auto__ = null;
var cljs$core$async$mult_$_state_machine__27340__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$mult_$_state_machine__27340__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$mult_$_state_machine__27340__auto____1 = (function (state_28171){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28251){var ex__27343__auto__ = e28251;
var statearr_28252_28310 = state_28171;
(statearr_28252_28310[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28171[(4)]))){
var statearr_28253_28311 = state_28171;
(statearr_28253_28311[(1)] = cljs.core.first.call(null,(state_28171[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28171;
state_28171 = G__28312;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27340__auto__ = function(state_28171){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27340__auto____1.call(this,state_28171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27340__auto____0;
cljs$core$async$mult_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27340__auto____1;
return cljs$core$async$mult_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28254 = f__27414__auto__.call(null);
(statearr_28254[(6)] = c__27413__auto___28255);

return statearr_28254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var G__28314 = arguments.length;
switch (G__28314) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_28316 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_28316.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28317 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_28317.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28318 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28318.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28319 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_28319.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28320 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28320.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___28330 = arguments.length;
var i__5769__auto___28331 = (0);
while(true){
if((i__5769__auto___28331 < len__5768__auto___28330)){
args__5774__auto__.push((arguments[i__5769__auto___28331]));

var G__28332 = (i__5769__auto___28331 + (1));
i__5769__auto___28331 = G__28332;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28325){
var map__28326 = p__28325;
var map__28326__$1 = cljs.core.__destructure_map.call(null,map__28326);
var opts = map__28326__$1;
var statearr_28327_28333 = state;
(statearr_28327_28333[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28328_28334 = state;
(statearr_28328_28334[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28329_28335 = state;
(statearr_28329_28335[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28321){
var G__28322 = cljs.core.first.call(null,seq28321);
var seq28321__$1 = cljs.core.next.call(null,seq28321);
var G__28323 = cljs.core.first.call(null,seq28321__$1);
var seq28321__$2 = cljs.core.next.call(null,seq28321__$1);
var G__28324 = cljs.core.first.call(null,seq28321__$2);
var seq28321__$3 = cljs.core.next.call(null,seq28321__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28322,G__28323,G__28324,seq28321__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28336 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28337){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28337 = meta28337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28338,meta28337__$1){
var self__ = this;
var _28338__$1 = this;
return (new cljs.core.async.t_cljs$core$async28336(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28337__$1));
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28338){
var self__ = this;
var _28338__$1 = this;
return self__.meta28337;
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28337","meta28337",-1974198953,null)], null);
}));

(cljs.core.async.t_cljs$core$async28336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28336");

(cljs.core.async.t_cljs$core$async28336.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28336.
 */
cljs.core.async.__GT_t_cljs$core$async28336 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28337){
return (new cljs.core.async.t_cljs$core$async28336(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28337));
});

}

return (new cljs.core.async.t_cljs$core$async28336(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27413__auto___28451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28366 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28366)){
var statearr_28408_28452 = state_28406__$1;
(statearr_28408_28452[(1)] = (8));

} else {
var statearr_28409_28453 = state_28406__$1;
(statearr_28409_28453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (20))){
var inst_28359 = (state_28406[(7)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28406__$1,(23),out,inst_28359);
} else {
if((state_val_28407 === (1))){
var inst_28342 = calc_state.call(null);
var inst_28343 = cljs.core.__destructure_map.call(null,inst_28342);
var inst_28344 = cljs.core.get.call(null,inst_28343,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28345 = cljs.core.get.call(null,inst_28343,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28346 = cljs.core.get.call(null,inst_28343,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28347 = inst_28342;
var state_28406__$1 = (function (){var statearr_28410 = state_28406;
(statearr_28410[(8)] = inst_28344);

(statearr_28410[(9)] = inst_28345);

(statearr_28410[(10)] = inst_28347);

(statearr_28410[(11)] = inst_28346);

return statearr_28410;
})();
var statearr_28411_28454 = state_28406__$1;
(statearr_28411_28454[(2)] = null);

(statearr_28411_28454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (24))){
var inst_28350 = (state_28406[(12)]);
var inst_28347 = inst_28350;
var state_28406__$1 = (function (){var statearr_28412 = state_28406;
(statearr_28412[(10)] = inst_28347);

return statearr_28412;
})();
var statearr_28413_28455 = state_28406__$1;
(statearr_28413_28455[(2)] = null);

(statearr_28413_28455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28361 = (state_28406[(13)]);
var inst_28359 = (state_28406[(7)]);
var inst_28358 = (state_28406[(2)]);
var inst_28359__$1 = cljs.core.nth.call(null,inst_28358,(0),null);
var inst_28360 = cljs.core.nth.call(null,inst_28358,(1),null);
var inst_28361__$1 = (inst_28359__$1 == null);
var state_28406__$1 = (function (){var statearr_28414 = state_28406;
(statearr_28414[(13)] = inst_28361__$1);

(statearr_28414[(14)] = inst_28360);

(statearr_28414[(7)] = inst_28359__$1);

return statearr_28414;
})();
if(cljs.core.truth_(inst_28361__$1)){
var statearr_28415_28456 = state_28406__$1;
(statearr_28415_28456[(1)] = (5));

} else {
var statearr_28416_28457 = state_28406__$1;
(statearr_28416_28457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (15))){
var inst_28380 = (state_28406[(15)]);
var inst_28351 = (state_28406[(16)]);
var inst_28380__$1 = cljs.core.empty_QMARK_.call(null,inst_28351);
var state_28406__$1 = (function (){var statearr_28417 = state_28406;
(statearr_28417[(15)] = inst_28380__$1);

return statearr_28417;
})();
if(inst_28380__$1){
var statearr_28418_28458 = state_28406__$1;
(statearr_28418_28458[(1)] = (17));

} else {
var statearr_28419_28459 = state_28406__$1;
(statearr_28419_28459[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (21))){
var inst_28350 = (state_28406[(12)]);
var inst_28347 = inst_28350;
var state_28406__$1 = (function (){var statearr_28420 = state_28406;
(statearr_28420[(10)] = inst_28347);

return statearr_28420;
})();
var statearr_28421_28460 = state_28406__$1;
(statearr_28421_28460[(2)] = null);

(statearr_28421_28460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (13))){
var inst_28373 = (state_28406[(2)]);
var inst_28374 = calc_state.call(null);
var inst_28347 = inst_28374;
var state_28406__$1 = (function (){var statearr_28422 = state_28406;
(statearr_28422[(17)] = inst_28373);

(statearr_28422[(10)] = inst_28347);

return statearr_28422;
})();
var statearr_28423_28461 = state_28406__$1;
(statearr_28423_28461[(2)] = null);

(statearr_28423_28461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (22))){
var inst_28400 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28424_28462 = state_28406__$1;
(statearr_28424_28462[(2)] = inst_28400);

(statearr_28424_28462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28360 = (state_28406[(14)]);
var inst_28364 = cljs.core._EQ_.call(null,inst_28360,change);
var state_28406__$1 = state_28406;
var statearr_28425_28463 = state_28406__$1;
(statearr_28425_28463[(2)] = inst_28364);

(statearr_28425_28463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (25))){
var state_28406__$1 = state_28406;
var statearr_28426_28464 = state_28406__$1;
(statearr_28426_28464[(2)] = null);

(statearr_28426_28464[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (17))){
var inst_28360 = (state_28406[(14)]);
var inst_28352 = (state_28406[(18)]);
var inst_28382 = inst_28352.call(null,inst_28360);
var inst_28383 = cljs.core.not.call(null,inst_28382);
var state_28406__$1 = state_28406;
var statearr_28427_28465 = state_28406__$1;
(statearr_28427_28465[(2)] = inst_28383);

(statearr_28427_28465[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (12))){
var state_28406__$1 = state_28406;
var statearr_28428_28466 = state_28406__$1;
(statearr_28428_28466[(2)] = null);

(statearr_28428_28466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (2))){
var inst_28350 = (state_28406[(12)]);
var inst_28347 = (state_28406[(10)]);
var inst_28350__$1 = cljs.core.__destructure_map.call(null,inst_28347);
var inst_28351 = cljs.core.get.call(null,inst_28350__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28352 = cljs.core.get.call(null,inst_28350__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28353 = cljs.core.get.call(null,inst_28350__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28406__$1 = (function (){var statearr_28429 = state_28406;
(statearr_28429[(12)] = inst_28350__$1);

(statearr_28429[(16)] = inst_28351);

(statearr_28429[(18)] = inst_28352);

return statearr_28429;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28406__$1,(4),inst_28353);
} else {
if((state_val_28407 === (23))){
var inst_28391 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28391)){
var statearr_28430_28467 = state_28406__$1;
(statearr_28430_28467[(1)] = (24));

} else {
var statearr_28431_28468 = state_28406__$1;
(statearr_28431_28468[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (19))){
var inst_28386 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28432_28469 = state_28406__$1;
(statearr_28432_28469[(2)] = inst_28386);

(statearr_28432_28469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (11))){
var inst_28360 = (state_28406[(14)]);
var inst_28370 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28360);
var state_28406__$1 = state_28406;
var statearr_28433_28470 = state_28406__$1;
(statearr_28433_28470[(2)] = inst_28370);

(statearr_28433_28470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var inst_28351 = (state_28406[(16)]);
var inst_28360 = (state_28406[(14)]);
var inst_28377 = (state_28406[(19)]);
var inst_28377__$1 = inst_28351.call(null,inst_28360);
var state_28406__$1 = (function (){var statearr_28434 = state_28406;
(statearr_28434[(19)] = inst_28377__$1);

return statearr_28434;
})();
if(cljs.core.truth_(inst_28377__$1)){
var statearr_28435_28471 = state_28406__$1;
(statearr_28435_28471[(1)] = (14));

} else {
var statearr_28436_28472 = state_28406__$1;
(statearr_28436_28472[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var inst_28361 = (state_28406[(13)]);
var state_28406__$1 = state_28406;
var statearr_28437_28473 = state_28406__$1;
(statearr_28437_28473[(2)] = inst_28361);

(statearr_28437_28473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (14))){
var inst_28377 = (state_28406[(19)]);
var state_28406__$1 = state_28406;
var statearr_28438_28474 = state_28406__$1;
(statearr_28438_28474[(2)] = inst_28377);

(statearr_28438_28474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (26))){
var inst_28396 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28439_28475 = state_28406__$1;
(statearr_28439_28475[(2)] = inst_28396);

(statearr_28439_28475[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (16))){
var inst_28388 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28388)){
var statearr_28440_28476 = state_28406__$1;
(statearr_28440_28476[(1)] = (20));

} else {
var statearr_28441_28477 = state_28406__$1;
(statearr_28441_28477[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28402 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28442_28478 = state_28406__$1;
(statearr_28442_28478[(2)] = inst_28402);

(statearr_28442_28478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (18))){
var inst_28380 = (state_28406[(15)]);
var state_28406__$1 = state_28406;
var statearr_28443_28479 = state_28406__$1;
(statearr_28443_28479[(2)] = inst_28380);

(statearr_28443_28479[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28359 = (state_28406[(7)]);
var inst_28368 = (inst_28359 == null);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28368)){
var statearr_28444_28480 = state_28406__$1;
(statearr_28444_28480[(1)] = (11));

} else {
var statearr_28445_28481 = state_28406__$1;
(statearr_28445_28481[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27340__auto__ = null;
var cljs$core$async$mix_$_state_machine__27340__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = cljs$core$async$mix_$_state_machine__27340__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var cljs$core$async$mix_$_state_machine__27340__auto____1 = (function (state_28406){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28447){var ex__27343__auto__ = e28447;
var statearr_28448_28482 = state_28406;
(statearr_28448_28482[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28406[(4)]))){
var statearr_28449_28483 = state_28406;
(statearr_28449_28483[(1)] = cljs.core.first.call(null,(state_28406[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28484 = state_28406;
state_28406 = G__28484;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27340__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27340__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27340__auto____0;
cljs$core$async$mix_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27340__auto____1;
return cljs$core$async$mix_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28450 = f__27414__auto__.call(null);
(statearr_28450[(6)] = c__27413__auto___28451);

return statearr_28450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_28487 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_28487.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28488 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_28488.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28489 = (function() {
var G__28490 = null;
var G__28490__1 = (function (p){
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
var G__28490__2 = (function (p,v){
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
G__28490 = function(p,v){
switch(arguments.length){
case 1:
return G__28490__1.call(this,p);
case 2:
return G__28490__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28490.cljs$core$IFn$_invoke$arity$1 = G__28490__1;
G__28490.cljs$core$IFn$_invoke$arity$2 = G__28490__2;
return G__28490;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28486 = arguments.length;
switch (G__28486) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28489.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28489.call(null,p,v);
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
var G__28494 = arguments.length;
switch (G__28494) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28492_SHARP_){
if(cljs.core.truth_(p1__28492_SHARP_.call(null,topic))){
return p1__28492_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28492_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28495 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28496){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28496 = meta28496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28497,meta28496__$1){
var self__ = this;
var _28497__$1 = this;
return (new cljs.core.async.t_cljs$core$async28495(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28496__$1));
}));

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28497){
var self__ = this;
var _28497__$1 = this;
return self__.meta28496;
}));

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28495.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28496","meta28496",2105915793,null)], null);
}));

(cljs.core.async.t_cljs$core$async28495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28495");

(cljs.core.async.t_cljs$core$async28495.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28495.
 */
cljs.core.async.__GT_t_cljs$core$async28495 = (function cljs$core$async$__GT_t_cljs$core$async28495(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28496){
return (new cljs.core.async.t_cljs$core$async28495(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28496));
});

}

return (new cljs.core.async.t_cljs$core$async28495(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27413__auto___28616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28569){
var state_val_28570 = (state_28569[(1)]);
if((state_val_28570 === (7))){
var inst_28565 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28571_28617 = state_28569__$1;
(statearr_28571_28617[(2)] = inst_28565);

(statearr_28571_28617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (20))){
var state_28569__$1 = state_28569;
var statearr_28572_28618 = state_28569__$1;
(statearr_28572_28618[(2)] = null);

(statearr_28572_28618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (1))){
var state_28569__$1 = state_28569;
var statearr_28573_28619 = state_28569__$1;
(statearr_28573_28619[(2)] = null);

(statearr_28573_28619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (24))){
var inst_28548 = (state_28569[(7)]);
var inst_28557 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28548);
var state_28569__$1 = state_28569;
var statearr_28574_28620 = state_28569__$1;
(statearr_28574_28620[(2)] = inst_28557);

(statearr_28574_28620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (4))){
var inst_28500 = (state_28569[(8)]);
var inst_28500__$1 = (state_28569[(2)]);
var inst_28501 = (inst_28500__$1 == null);
var state_28569__$1 = (function (){var statearr_28575 = state_28569;
(statearr_28575[(8)] = inst_28500__$1);

return statearr_28575;
})();
if(cljs.core.truth_(inst_28501)){
var statearr_28576_28621 = state_28569__$1;
(statearr_28576_28621[(1)] = (5));

} else {
var statearr_28577_28622 = state_28569__$1;
(statearr_28577_28622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (15))){
var inst_28542 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28578_28623 = state_28569__$1;
(statearr_28578_28623[(2)] = inst_28542);

(statearr_28578_28623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (21))){
var inst_28562 = (state_28569[(2)]);
var state_28569__$1 = (function (){var statearr_28579 = state_28569;
(statearr_28579[(9)] = inst_28562);

return statearr_28579;
})();
var statearr_28580_28624 = state_28569__$1;
(statearr_28580_28624[(2)] = null);

(statearr_28580_28624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (13))){
var inst_28524 = (state_28569[(10)]);
var inst_28526 = cljs.core.chunked_seq_QMARK_.call(null,inst_28524);
var state_28569__$1 = state_28569;
if(inst_28526){
var statearr_28581_28625 = state_28569__$1;
(statearr_28581_28625[(1)] = (16));

} else {
var statearr_28582_28626 = state_28569__$1;
(statearr_28582_28626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (22))){
var inst_28554 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
if(cljs.core.truth_(inst_28554)){
var statearr_28583_28627 = state_28569__$1;
(statearr_28583_28627[(1)] = (23));

} else {
var statearr_28584_28628 = state_28569__$1;
(statearr_28584_28628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (6))){
var inst_28548 = (state_28569[(7)]);
var inst_28500 = (state_28569[(8)]);
var inst_28550 = (state_28569[(11)]);
var inst_28548__$1 = topic_fn.call(null,inst_28500);
var inst_28549 = cljs.core.deref.call(null,mults);
var inst_28550__$1 = cljs.core.get.call(null,inst_28549,inst_28548__$1);
var state_28569__$1 = (function (){var statearr_28585 = state_28569;
(statearr_28585[(7)] = inst_28548__$1);

(statearr_28585[(11)] = inst_28550__$1);

return statearr_28585;
})();
if(cljs.core.truth_(inst_28550__$1)){
var statearr_28586_28629 = state_28569__$1;
(statearr_28586_28629[(1)] = (19));

} else {
var statearr_28587_28630 = state_28569__$1;
(statearr_28587_28630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (25))){
var inst_28559 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28588_28631 = state_28569__$1;
(statearr_28588_28631[(2)] = inst_28559);

(statearr_28588_28631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (17))){
var inst_28524 = (state_28569[(10)]);
var inst_28533 = cljs.core.first.call(null,inst_28524);
var inst_28534 = cljs.core.async.muxch_STAR_.call(null,inst_28533);
var inst_28535 = cljs.core.async.close_BANG_.call(null,inst_28534);
var inst_28536 = cljs.core.next.call(null,inst_28524);
var inst_28510 = inst_28536;
var inst_28511 = null;
var inst_28512 = (0);
var inst_28513 = (0);
var state_28569__$1 = (function (){var statearr_28589 = state_28569;
(statearr_28589[(12)] = inst_28512);

(statearr_28589[(13)] = inst_28535);

(statearr_28589[(14)] = inst_28510);

(statearr_28589[(15)] = inst_28511);

(statearr_28589[(16)] = inst_28513);

return statearr_28589;
})();
var statearr_28590_28632 = state_28569__$1;
(statearr_28590_28632[(2)] = null);

(statearr_28590_28632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (3))){
var inst_28567 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28569__$1,inst_28567);
} else {
if((state_val_28570 === (12))){
var inst_28544 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28591_28633 = state_28569__$1;
(statearr_28591_28633[(2)] = inst_28544);

(statearr_28591_28633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (2))){
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28569__$1,(4),ch);
} else {
if((state_val_28570 === (23))){
var state_28569__$1 = state_28569;
var statearr_28592_28634 = state_28569__$1;
(statearr_28592_28634[(2)] = null);

(statearr_28592_28634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (19))){
var inst_28500 = (state_28569[(8)]);
var inst_28550 = (state_28569[(11)]);
var inst_28552 = cljs.core.async.muxch_STAR_.call(null,inst_28550);
var state_28569__$1 = state_28569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28569__$1,(22),inst_28552,inst_28500);
} else {
if((state_val_28570 === (11))){
var inst_28510 = (state_28569[(14)]);
var inst_28524 = (state_28569[(10)]);
var inst_28524__$1 = cljs.core.seq.call(null,inst_28510);
var state_28569__$1 = (function (){var statearr_28593 = state_28569;
(statearr_28593[(10)] = inst_28524__$1);

return statearr_28593;
})();
if(inst_28524__$1){
var statearr_28594_28635 = state_28569__$1;
(statearr_28594_28635[(1)] = (13));

} else {
var statearr_28595_28636 = state_28569__$1;
(statearr_28595_28636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (9))){
var inst_28546 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28596_28637 = state_28569__$1;
(statearr_28596_28637[(2)] = inst_28546);

(statearr_28596_28637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (5))){
var inst_28507 = cljs.core.deref.call(null,mults);
var inst_28508 = cljs.core.vals.call(null,inst_28507);
var inst_28509 = cljs.core.seq.call(null,inst_28508);
var inst_28510 = inst_28509;
var inst_28511 = null;
var inst_28512 = (0);
var inst_28513 = (0);
var state_28569__$1 = (function (){var statearr_28597 = state_28569;
(statearr_28597[(12)] = inst_28512);

(statearr_28597[(14)] = inst_28510);

(statearr_28597[(15)] = inst_28511);

(statearr_28597[(16)] = inst_28513);

return statearr_28597;
})();
var statearr_28598_28638 = state_28569__$1;
(statearr_28598_28638[(2)] = null);

(statearr_28598_28638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (14))){
var state_28569__$1 = state_28569;
var statearr_28602_28639 = state_28569__$1;
(statearr_28602_28639[(2)] = null);

(statearr_28602_28639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (16))){
var inst_28524 = (state_28569[(10)]);
var inst_28528 = cljs.core.chunk_first.call(null,inst_28524);
var inst_28529 = cljs.core.chunk_rest.call(null,inst_28524);
var inst_28530 = cljs.core.count.call(null,inst_28528);
var inst_28510 = inst_28529;
var inst_28511 = inst_28528;
var inst_28512 = inst_28530;
var inst_28513 = (0);
var state_28569__$1 = (function (){var statearr_28603 = state_28569;
(statearr_28603[(12)] = inst_28512);

(statearr_28603[(14)] = inst_28510);

(statearr_28603[(15)] = inst_28511);

(statearr_28603[(16)] = inst_28513);

return statearr_28603;
})();
var statearr_28604_28640 = state_28569__$1;
(statearr_28604_28640[(2)] = null);

(statearr_28604_28640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (10))){
var inst_28512 = (state_28569[(12)]);
var inst_28510 = (state_28569[(14)]);
var inst_28511 = (state_28569[(15)]);
var inst_28513 = (state_28569[(16)]);
var inst_28518 = cljs.core._nth.call(null,inst_28511,inst_28513);
var inst_28519 = cljs.core.async.muxch_STAR_.call(null,inst_28518);
var inst_28520 = cljs.core.async.close_BANG_.call(null,inst_28519);
var inst_28521 = (inst_28513 + (1));
var tmp28599 = inst_28512;
var tmp28600 = inst_28510;
var tmp28601 = inst_28511;
var inst_28510__$1 = tmp28600;
var inst_28511__$1 = tmp28601;
var inst_28512__$1 = tmp28599;
var inst_28513__$1 = inst_28521;
var state_28569__$1 = (function (){var statearr_28605 = state_28569;
(statearr_28605[(17)] = inst_28520);

(statearr_28605[(12)] = inst_28512__$1);

(statearr_28605[(14)] = inst_28510__$1);

(statearr_28605[(15)] = inst_28511__$1);

(statearr_28605[(16)] = inst_28513__$1);

return statearr_28605;
})();
var statearr_28606_28641 = state_28569__$1;
(statearr_28606_28641[(2)] = null);

(statearr_28606_28641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (18))){
var inst_28539 = (state_28569[(2)]);
var state_28569__$1 = state_28569;
var statearr_28607_28642 = state_28569__$1;
(statearr_28607_28642[(2)] = inst_28539);

(statearr_28607_28642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28570 === (8))){
var inst_28512 = (state_28569[(12)]);
var inst_28513 = (state_28569[(16)]);
var inst_28515 = (inst_28513 < inst_28512);
var inst_28516 = inst_28515;
var state_28569__$1 = state_28569;
if(cljs.core.truth_(inst_28516)){
var statearr_28608_28643 = state_28569__$1;
(statearr_28608_28643[(1)] = (10));

} else {
var statearr_28609_28644 = state_28569__$1;
(statearr_28609_28644[(1)] = (11));

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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_28569){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28611){var ex__27343__auto__ = e28611;
var statearr_28612_28645 = state_28569;
(statearr_28612_28645[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28569[(4)]))){
var statearr_28613_28646 = state_28569;
(statearr_28613_28646[(1)] = cljs.core.first.call(null,(state_28569[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28647 = state_28569;
state_28569 = G__28647;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_28569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_28569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28614 = f__27414__auto__.call(null);
(statearr_28614[(6)] = c__27413__auto___28616);

return statearr_28614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var G__28649 = arguments.length;
switch (G__28649) {
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
var G__28652 = arguments.length;
switch (G__28652) {
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
var G__28655 = arguments.length;
switch (G__28655) {
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
var c__27413__auto___28733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28698){
var state_val_28699 = (state_28698[(1)]);
if((state_val_28699 === (7))){
var state_28698__$1 = state_28698;
var statearr_28700_28734 = state_28698__$1;
(statearr_28700_28734[(2)] = null);

(statearr_28700_28734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (1))){
var state_28698__$1 = state_28698;
var statearr_28701_28735 = state_28698__$1;
(statearr_28701_28735[(2)] = null);

(statearr_28701_28735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (4))){
var inst_28659 = (state_28698[(7)]);
var inst_28658 = (state_28698[(8)]);
var inst_28661 = (inst_28659 < inst_28658);
var state_28698__$1 = state_28698;
if(cljs.core.truth_(inst_28661)){
var statearr_28702_28736 = state_28698__$1;
(statearr_28702_28736[(1)] = (6));

} else {
var statearr_28703_28737 = state_28698__$1;
(statearr_28703_28737[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (15))){
var inst_28684 = (state_28698[(9)]);
var inst_28689 = cljs.core.apply.call(null,f,inst_28684);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28698__$1,(17),out,inst_28689);
} else {
if((state_val_28699 === (13))){
var inst_28684 = (state_28698[(9)]);
var inst_28684__$1 = (state_28698[(2)]);
var inst_28685 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28684__$1);
var state_28698__$1 = (function (){var statearr_28704 = state_28698;
(statearr_28704[(9)] = inst_28684__$1);

return statearr_28704;
})();
if(cljs.core.truth_(inst_28685)){
var statearr_28705_28738 = state_28698__$1;
(statearr_28705_28738[(1)] = (14));

} else {
var statearr_28706_28739 = state_28698__$1;
(statearr_28706_28739[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (6))){
var state_28698__$1 = state_28698;
var statearr_28707_28740 = state_28698__$1;
(statearr_28707_28740[(2)] = null);

(statearr_28707_28740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (17))){
var inst_28691 = (state_28698[(2)]);
var state_28698__$1 = (function (){var statearr_28709 = state_28698;
(statearr_28709[(10)] = inst_28691);

return statearr_28709;
})();
var statearr_28710_28741 = state_28698__$1;
(statearr_28710_28741[(2)] = null);

(statearr_28710_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (3))){
var inst_28696 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
} else {
if((state_val_28699 === (12))){
var _ = (function (){var statearr_28711 = state_28698;
(statearr_28711[(4)] = cljs.core.rest.call(null,(state_28698[(4)])));

return statearr_28711;
})();
var state_28698__$1 = state_28698;
var ex28708 = (state_28698__$1[(2)]);
var statearr_28712_28742 = state_28698__$1;
(statearr_28712_28742[(5)] = ex28708);


if((ex28708 instanceof Object)){
var statearr_28713_28743 = state_28698__$1;
(statearr_28713_28743[(1)] = (11));

(statearr_28713_28743[(5)] = null);

} else {
throw ex28708;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (2))){
var inst_28657 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28658 = cnt;
var inst_28659 = (0);
var state_28698__$1 = (function (){var statearr_28714 = state_28698;
(statearr_28714[(7)] = inst_28659);

(statearr_28714[(8)] = inst_28658);

(statearr_28714[(11)] = inst_28657);

return statearr_28714;
})();
var statearr_28715_28744 = state_28698__$1;
(statearr_28715_28744[(2)] = null);

(statearr_28715_28744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (11))){
var inst_28663 = (state_28698[(2)]);
var inst_28664 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28698__$1 = (function (){var statearr_28716 = state_28698;
(statearr_28716[(12)] = inst_28663);

return statearr_28716;
})();
var statearr_28717_28745 = state_28698__$1;
(statearr_28717_28745[(2)] = inst_28664);

(statearr_28717_28745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (9))){
var inst_28659 = (state_28698[(7)]);
var _ = (function (){var statearr_28718 = state_28698;
(statearr_28718[(4)] = cljs.core.cons.call(null,(12),(state_28698[(4)])));

return statearr_28718;
})();
var inst_28670 = chs__$1.call(null,inst_28659);
var inst_28671 = done.call(null,inst_28659);
var inst_28672 = cljs.core.async.take_BANG_.call(null,inst_28670,inst_28671);
var ___$1 = (function (){var statearr_28719 = state_28698;
(statearr_28719[(4)] = cljs.core.rest.call(null,(state_28698[(4)])));

return statearr_28719;
})();
var state_28698__$1 = state_28698;
var statearr_28720_28746 = state_28698__$1;
(statearr_28720_28746[(2)] = inst_28672);

(statearr_28720_28746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (5))){
var inst_28682 = (state_28698[(2)]);
var state_28698__$1 = (function (){var statearr_28721 = state_28698;
(statearr_28721[(13)] = inst_28682);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(13),dchan);
} else {
if((state_val_28699 === (14))){
var inst_28687 = cljs.core.async.close_BANG_.call(null,out);
var state_28698__$1 = state_28698;
var statearr_28722_28747 = state_28698__$1;
(statearr_28722_28747[(2)] = inst_28687);

(statearr_28722_28747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (16))){
var inst_28694 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28723_28748 = state_28698__$1;
(statearr_28723_28748[(2)] = inst_28694);

(statearr_28723_28748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (10))){
var inst_28659 = (state_28698[(7)]);
var inst_28675 = (state_28698[(2)]);
var inst_28676 = (inst_28659 + (1));
var inst_28659__$1 = inst_28676;
var state_28698__$1 = (function (){var statearr_28724 = state_28698;
(statearr_28724[(7)] = inst_28659__$1);

(statearr_28724[(14)] = inst_28675);

return statearr_28724;
})();
var statearr_28725_28749 = state_28698__$1;
(statearr_28725_28749[(2)] = null);

(statearr_28725_28749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (8))){
var inst_28680 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28726_28750 = state_28698__$1;
(statearr_28726_28750[(2)] = inst_28680);

(statearr_28726_28750[(1)] = (5));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28727[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28727[(1)] = (1));

return statearr_28727;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_28698){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28728){var ex__27343__auto__ = e28728;
var statearr_28729_28751 = state_28698;
(statearr_28729_28751[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28698[(4)]))){
var statearr_28730_28752 = state_28698;
(statearr_28730_28752[(1)] = cljs.core.first.call(null,(state_28698[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28753 = state_28698;
state_28698 = G__28753;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28731 = f__27414__auto__.call(null);
(statearr_28731[(6)] = c__27413__auto___28733);

return statearr_28731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var G__28756 = arguments.length;
switch (G__28756) {
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
var c__27413__auto___28811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28788){
var state_val_28789 = (state_28788[(1)]);
if((state_val_28789 === (7))){
var inst_28768 = (state_28788[(7)]);
var inst_28767 = (state_28788[(8)]);
var inst_28767__$1 = (state_28788[(2)]);
var inst_28768__$1 = cljs.core.nth.call(null,inst_28767__$1,(0),null);
var inst_28769 = cljs.core.nth.call(null,inst_28767__$1,(1),null);
var inst_28770 = (inst_28768__$1 == null);
var state_28788__$1 = (function (){var statearr_28790 = state_28788;
(statearr_28790[(9)] = inst_28769);

(statearr_28790[(7)] = inst_28768__$1);

(statearr_28790[(8)] = inst_28767__$1);

return statearr_28790;
})();
if(cljs.core.truth_(inst_28770)){
var statearr_28791_28812 = state_28788__$1;
(statearr_28791_28812[(1)] = (8));

} else {
var statearr_28792_28813 = state_28788__$1;
(statearr_28792_28813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (1))){
var inst_28757 = cljs.core.vec.call(null,chs);
var inst_28758 = inst_28757;
var state_28788__$1 = (function (){var statearr_28793 = state_28788;
(statearr_28793[(10)] = inst_28758);

return statearr_28793;
})();
var statearr_28794_28814 = state_28788__$1;
(statearr_28794_28814[(2)] = null);

(statearr_28794_28814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (4))){
var inst_28758 = (state_28788[(10)]);
var state_28788__$1 = state_28788;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28788__$1,(7),inst_28758);
} else {
if((state_val_28789 === (6))){
var inst_28784 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28795_28815 = state_28788__$1;
(statearr_28795_28815[(2)] = inst_28784);

(statearr_28795_28815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (3))){
var inst_28786 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28788__$1,inst_28786);
} else {
if((state_val_28789 === (2))){
var inst_28758 = (state_28788[(10)]);
var inst_28760 = cljs.core.count.call(null,inst_28758);
var inst_28761 = (inst_28760 > (0));
var state_28788__$1 = state_28788;
if(cljs.core.truth_(inst_28761)){
var statearr_28797_28816 = state_28788__$1;
(statearr_28797_28816[(1)] = (4));

} else {
var statearr_28798_28817 = state_28788__$1;
(statearr_28798_28817[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (11))){
var inst_28758 = (state_28788[(10)]);
var inst_28777 = (state_28788[(2)]);
var tmp28796 = inst_28758;
var inst_28758__$1 = tmp28796;
var state_28788__$1 = (function (){var statearr_28799 = state_28788;
(statearr_28799[(11)] = inst_28777);

(statearr_28799[(10)] = inst_28758__$1);

return statearr_28799;
})();
var statearr_28800_28818 = state_28788__$1;
(statearr_28800_28818[(2)] = null);

(statearr_28800_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (9))){
var inst_28768 = (state_28788[(7)]);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28788__$1,(11),out,inst_28768);
} else {
if((state_val_28789 === (5))){
var inst_28782 = cljs.core.async.close_BANG_.call(null,out);
var state_28788__$1 = state_28788;
var statearr_28801_28819 = state_28788__$1;
(statearr_28801_28819[(2)] = inst_28782);

(statearr_28801_28819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (10))){
var inst_28780 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28802_28820 = state_28788__$1;
(statearr_28802_28820[(2)] = inst_28780);

(statearr_28802_28820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (8))){
var inst_28769 = (state_28788[(9)]);
var inst_28768 = (state_28788[(7)]);
var inst_28758 = (state_28788[(10)]);
var inst_28767 = (state_28788[(8)]);
var inst_28772 = (function (){var cs = inst_28758;
var vec__28763 = inst_28767;
var v = inst_28768;
var c = inst_28769;
return (function (p1__28754_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28754_SHARP_);
});
})();
var inst_28773 = cljs.core.filterv.call(null,inst_28772,inst_28758);
var inst_28758__$1 = inst_28773;
var state_28788__$1 = (function (){var statearr_28803 = state_28788;
(statearr_28803[(10)] = inst_28758__$1);

return statearr_28803;
})();
var statearr_28804_28821 = state_28788__$1;
(statearr_28804_28821[(2)] = null);

(statearr_28804_28821[(1)] = (2));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28805[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28805[(1)] = (1));

return statearr_28805;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_28788){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28806){var ex__27343__auto__ = e28806;
var statearr_28807_28822 = state_28788;
(statearr_28807_28822[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28788[(4)]))){
var statearr_28808_28823 = state_28788;
(statearr_28808_28823[(1)] = cljs.core.first.call(null,(state_28788[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28824 = state_28788;
state_28788 = G__28824;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_28788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_28788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28809 = f__27414__auto__.call(null);
(statearr_28809[(6)] = c__27413__auto___28811);

return statearr_28809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
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
var G__28826 = arguments.length;
switch (G__28826) {
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
var c__27413__auto___28872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28850){
var state_val_28851 = (state_28850[(1)]);
if((state_val_28851 === (7))){
var inst_28832 = (state_28850[(7)]);
var inst_28832__$1 = (state_28850[(2)]);
var inst_28833 = (inst_28832__$1 == null);
var inst_28834 = cljs.core.not.call(null,inst_28833);
var state_28850__$1 = (function (){var statearr_28852 = state_28850;
(statearr_28852[(7)] = inst_28832__$1);

return statearr_28852;
})();
if(inst_28834){
var statearr_28853_28873 = state_28850__$1;
(statearr_28853_28873[(1)] = (8));

} else {
var statearr_28854_28874 = state_28850__$1;
(statearr_28854_28874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (1))){
var inst_28827 = (0);
var state_28850__$1 = (function (){var statearr_28855 = state_28850;
(statearr_28855[(8)] = inst_28827);

return statearr_28855;
})();
var statearr_28856_28875 = state_28850__$1;
(statearr_28856_28875[(2)] = null);

(statearr_28856_28875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (4))){
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28850__$1,(7),ch);
} else {
if((state_val_28851 === (6))){
var inst_28845 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
var statearr_28857_28876 = state_28850__$1;
(statearr_28857_28876[(2)] = inst_28845);

(statearr_28857_28876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (3))){
var inst_28847 = (state_28850[(2)]);
var inst_28848 = cljs.core.async.close_BANG_.call(null,out);
var state_28850__$1 = (function (){var statearr_28858 = state_28850;
(statearr_28858[(9)] = inst_28847);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28850__$1,inst_28848);
} else {
if((state_val_28851 === (2))){
var inst_28827 = (state_28850[(8)]);
var inst_28829 = (inst_28827 < n);
var state_28850__$1 = state_28850;
if(cljs.core.truth_(inst_28829)){
var statearr_28859_28877 = state_28850__$1;
(statearr_28859_28877[(1)] = (4));

} else {
var statearr_28860_28878 = state_28850__$1;
(statearr_28860_28878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (11))){
var inst_28827 = (state_28850[(8)]);
var inst_28837 = (state_28850[(2)]);
var inst_28838 = (inst_28827 + (1));
var inst_28827__$1 = inst_28838;
var state_28850__$1 = (function (){var statearr_28861 = state_28850;
(statearr_28861[(10)] = inst_28837);

(statearr_28861[(8)] = inst_28827__$1);

return statearr_28861;
})();
var statearr_28862_28879 = state_28850__$1;
(statearr_28862_28879[(2)] = null);

(statearr_28862_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (9))){
var state_28850__$1 = state_28850;
var statearr_28863_28880 = state_28850__$1;
(statearr_28863_28880[(2)] = null);

(statearr_28863_28880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (5))){
var state_28850__$1 = state_28850;
var statearr_28864_28881 = state_28850__$1;
(statearr_28864_28881[(2)] = null);

(statearr_28864_28881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (10))){
var inst_28842 = (state_28850[(2)]);
var state_28850__$1 = state_28850;
var statearr_28865_28882 = state_28850__$1;
(statearr_28865_28882[(2)] = inst_28842);

(statearr_28865_28882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28851 === (8))){
var inst_28832 = (state_28850[(7)]);
var state_28850__$1 = state_28850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28850__$1,(11),out,inst_28832);
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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28866[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28866[(1)] = (1));

return statearr_28866;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_28850){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28867){var ex__27343__auto__ = e28867;
var statearr_28868_28883 = state_28850;
(statearr_28868_28883[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28850[(4)]))){
var statearr_28869_28884 = state_28850;
(statearr_28869_28884[(1)] = cljs.core.first.call(null,(state_28850[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28850;
state_28850 = G__28885;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_28850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_28850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28870 = f__27414__auto__.call(null);
(statearr_28870[(6)] = c__27413__auto___28872);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28887 = (function (f,ch,meta28888){
this.f = f;
this.ch = ch;
this.meta28888 = meta28888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28889,meta28888__$1){
var self__ = this;
var _28889__$1 = this;
return (new cljs.core.async.t_cljs$core$async28887(self__.f,self__.ch,meta28888__$1));
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28889){
var self__ = this;
var _28889__$1 = this;
return self__.meta28888;
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28890 = (function (f,ch,meta28888,_,fn1,meta28891){
this.f = f;
this.ch = ch;
this.meta28888 = meta28888;
this._ = _;
this.fn1 = fn1;
this.meta28891 = meta28891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28892,meta28891__$1){
var self__ = this;
var _28892__$1 = this;
return (new cljs.core.async.t_cljs$core$async28890(self__.f,self__.ch,self__.meta28888,self__._,self__.fn1,meta28891__$1));
}));

(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28892){
var self__ = this;
var _28892__$1 = this;
return self__.meta28891;
}));

(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28886_SHARP_){
return f1.call(null,(((p1__28886_SHARP_ == null))?null:self__.f.call(null,p1__28886_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28888","meta28888",-887366168,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28887","cljs.core.async/t_cljs$core$async28887",-497921045,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28891","meta28891",137318894,null)], null);
}));

(cljs.core.async.t_cljs$core$async28890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28890");

(cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28890.
 */
cljs.core.async.__GT_t_cljs$core$async28890 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28890(f__$1,ch__$1,meta28888__$1,___$2,fn1__$1,meta28891){
return (new cljs.core.async.t_cljs$core$async28890(f__$1,ch__$1,meta28888__$1,___$2,fn1__$1,meta28891));
});

}

return (new cljs.core.async.t_cljs$core$async28890(self__.f,self__.ch,self__.meta28888,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28888","meta28888",-887366168,null)], null);
}));

(cljs.core.async.t_cljs$core$async28887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28887");

(cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28887.
 */
cljs.core.async.__GT_t_cljs$core$async28887 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28887(f__$1,ch__$1,meta28888){
return (new cljs.core.async.t_cljs$core$async28887(f__$1,ch__$1,meta28888));
});

}

return (new cljs.core.async.t_cljs$core$async28887(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28893 = (function (f,ch,meta28894){
this.f = f;
this.ch = ch;
this.meta28894 = meta28894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28895,meta28894__$1){
var self__ = this;
var _28895__$1 = this;
return (new cljs.core.async.t_cljs$core$async28893(self__.f,self__.ch,meta28894__$1));
}));

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28895){
var self__ = this;
var _28895__$1 = this;
return self__.meta28894;
}));

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28894","meta28894",-243330597,null)], null);
}));

(cljs.core.async.t_cljs$core$async28893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28893");

(cljs.core.async.t_cljs$core$async28893.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28893.
 */
cljs.core.async.__GT_t_cljs$core$async28893 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28893(f__$1,ch__$1,meta28894){
return (new cljs.core.async.t_cljs$core$async28893(f__$1,ch__$1,meta28894));
});

}

return (new cljs.core.async.t_cljs$core$async28893(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28896 = (function (p,ch,meta28897){
this.p = p;
this.ch = ch;
this.meta28897 = meta28897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28898,meta28897__$1){
var self__ = this;
var _28898__$1 = this;
return (new cljs.core.async.t_cljs$core$async28896(self__.p,self__.ch,meta28897__$1));
}));

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28898){
var self__ = this;
var _28898__$1 = this;
return self__.meta28897;
}));

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28897","meta28897",1739700410,null)], null);
}));

(cljs.core.async.t_cljs$core$async28896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28896");

(cljs.core.async.t_cljs$core$async28896.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28896.
 */
cljs.core.async.__GT_t_cljs$core$async28896 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28896(p__$1,ch__$1,meta28897){
return (new cljs.core.async.t_cljs$core$async28896(p__$1,ch__$1,meta28897));
});

}

return (new cljs.core.async.t_cljs$core$async28896(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28900 = arguments.length;
switch (G__28900) {
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
var c__27413__auto___28941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_28921){
var state_val_28922 = (state_28921[(1)]);
if((state_val_28922 === (7))){
var inst_28917 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28923_28942 = state_28921__$1;
(statearr_28923_28942[(2)] = inst_28917);

(statearr_28923_28942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (1))){
var state_28921__$1 = state_28921;
var statearr_28924_28943 = state_28921__$1;
(statearr_28924_28943[(2)] = null);

(statearr_28924_28943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (4))){
var inst_28903 = (state_28921[(7)]);
var inst_28903__$1 = (state_28921[(2)]);
var inst_28904 = (inst_28903__$1 == null);
var state_28921__$1 = (function (){var statearr_28925 = state_28921;
(statearr_28925[(7)] = inst_28903__$1);

return statearr_28925;
})();
if(cljs.core.truth_(inst_28904)){
var statearr_28926_28944 = state_28921__$1;
(statearr_28926_28944[(1)] = (5));

} else {
var statearr_28927_28945 = state_28921__$1;
(statearr_28927_28945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (6))){
var inst_28903 = (state_28921[(7)]);
var inst_28908 = p.call(null,inst_28903);
var state_28921__$1 = state_28921;
if(cljs.core.truth_(inst_28908)){
var statearr_28928_28946 = state_28921__$1;
(statearr_28928_28946[(1)] = (8));

} else {
var statearr_28929_28947 = state_28921__$1;
(statearr_28929_28947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (3))){
var inst_28919 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28921__$1,inst_28919);
} else {
if((state_val_28922 === (2))){
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28921__$1,(4),ch);
} else {
if((state_val_28922 === (11))){
var inst_28911 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28930_28948 = state_28921__$1;
(statearr_28930_28948[(2)] = inst_28911);

(statearr_28930_28948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (9))){
var state_28921__$1 = state_28921;
var statearr_28931_28949 = state_28921__$1;
(statearr_28931_28949[(2)] = null);

(statearr_28931_28949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (5))){
var inst_28906 = cljs.core.async.close_BANG_.call(null,out);
var state_28921__$1 = state_28921;
var statearr_28932_28950 = state_28921__$1;
(statearr_28932_28950[(2)] = inst_28906);

(statearr_28932_28950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (10))){
var inst_28914 = (state_28921[(2)]);
var state_28921__$1 = (function (){var statearr_28933 = state_28921;
(statearr_28933[(8)] = inst_28914);

return statearr_28933;
})();
var statearr_28934_28951 = state_28921__$1;
(statearr_28934_28951[(2)] = null);

(statearr_28934_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (8))){
var inst_28903 = (state_28921[(7)]);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28921__$1,(11),out,inst_28903);
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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_28935 = [null,null,null,null,null,null,null,null,null];
(statearr_28935[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_28935[(1)] = (1));

return statearr_28935;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_28921){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_28921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e28936){var ex__27343__auto__ = e28936;
var statearr_28937_28952 = state_28921;
(statearr_28937_28952[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_28921[(4)]))){
var statearr_28938_28953 = state_28921;
(statearr_28938_28953[(1)] = cljs.core.first.call(null,(state_28921[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28954 = state_28921;
state_28921 = G__28954;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_28921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_28921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_28939 = f__27414__auto__.call(null);
(statearr_28939[(6)] = c__27413__auto___28941);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28956 = arguments.length;
switch (G__28956) {
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
var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_29019){
var state_val_29020 = (state_29019[(1)]);
if((state_val_29020 === (7))){
var inst_29015 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29021_29060 = state_29019__$1;
(statearr_29021_29060[(2)] = inst_29015);

(statearr_29021_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (20))){
var inst_28985 = (state_29019[(7)]);
var inst_28996 = (state_29019[(2)]);
var inst_28997 = cljs.core.next.call(null,inst_28985);
var inst_28971 = inst_28997;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29022 = state_29019;
(statearr_29022[(8)] = inst_28973);

(statearr_29022[(9)] = inst_28996);

(statearr_29022[(10)] = inst_28974);

(statearr_29022[(11)] = inst_28972);

(statearr_29022[(12)] = inst_28971);

return statearr_29022;
})();
var statearr_29023_29061 = state_29019__$1;
(statearr_29023_29061[(2)] = null);

(statearr_29023_29061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (1))){
var state_29019__$1 = state_29019;
var statearr_29024_29062 = state_29019__$1;
(statearr_29024_29062[(2)] = null);

(statearr_29024_29062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (4))){
var inst_28960 = (state_29019[(13)]);
var inst_28960__$1 = (state_29019[(2)]);
var inst_28961 = (inst_28960__$1 == null);
var state_29019__$1 = (function (){var statearr_29025 = state_29019;
(statearr_29025[(13)] = inst_28960__$1);

return statearr_29025;
})();
if(cljs.core.truth_(inst_28961)){
var statearr_29026_29063 = state_29019__$1;
(statearr_29026_29063[(1)] = (5));

} else {
var statearr_29027_29064 = state_29019__$1;
(statearr_29027_29064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (15))){
var state_29019__$1 = state_29019;
var statearr_29031_29065 = state_29019__$1;
(statearr_29031_29065[(2)] = null);

(statearr_29031_29065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (21))){
var state_29019__$1 = state_29019;
var statearr_29032_29066 = state_29019__$1;
(statearr_29032_29066[(2)] = null);

(statearr_29032_29066[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (13))){
var inst_28973 = (state_29019[(8)]);
var inst_28974 = (state_29019[(10)]);
var inst_28972 = (state_29019[(11)]);
var inst_28971 = (state_29019[(12)]);
var inst_28981 = (state_29019[(2)]);
var inst_28982 = (inst_28974 + (1));
var tmp29028 = inst_28973;
var tmp29029 = inst_28972;
var tmp29030 = inst_28971;
var inst_28971__$1 = tmp29030;
var inst_28972__$1 = tmp29029;
var inst_28973__$1 = tmp29028;
var inst_28974__$1 = inst_28982;
var state_29019__$1 = (function (){var statearr_29033 = state_29019;
(statearr_29033[(8)] = inst_28973__$1);

(statearr_29033[(10)] = inst_28974__$1);

(statearr_29033[(11)] = inst_28972__$1);

(statearr_29033[(12)] = inst_28971__$1);

(statearr_29033[(14)] = inst_28981);

return statearr_29033;
})();
var statearr_29034_29067 = state_29019__$1;
(statearr_29034_29067[(2)] = null);

(statearr_29034_29067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (22))){
var state_29019__$1 = state_29019;
var statearr_29035_29068 = state_29019__$1;
(statearr_29035_29068[(2)] = null);

(statearr_29035_29068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (6))){
var inst_28960 = (state_29019[(13)]);
var inst_28969 = f.call(null,inst_28960);
var inst_28970 = cljs.core.seq.call(null,inst_28969);
var inst_28971 = inst_28970;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29036 = state_29019;
(statearr_29036[(8)] = inst_28973);

(statearr_29036[(10)] = inst_28974);

(statearr_29036[(11)] = inst_28972);

(statearr_29036[(12)] = inst_28971);

return statearr_29036;
})();
var statearr_29037_29069 = state_29019__$1;
(statearr_29037_29069[(2)] = null);

(statearr_29037_29069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (17))){
var inst_28985 = (state_29019[(7)]);
var inst_28989 = cljs.core.chunk_first.call(null,inst_28985);
var inst_28990 = cljs.core.chunk_rest.call(null,inst_28985);
var inst_28991 = cljs.core.count.call(null,inst_28989);
var inst_28971 = inst_28990;
var inst_28972 = inst_28989;
var inst_28973 = inst_28991;
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29038 = state_29019;
(statearr_29038[(8)] = inst_28973);

(statearr_29038[(10)] = inst_28974);

(statearr_29038[(11)] = inst_28972);

(statearr_29038[(12)] = inst_28971);

return statearr_29038;
})();
var statearr_29039_29070 = state_29019__$1;
(statearr_29039_29070[(2)] = null);

(statearr_29039_29070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (3))){
var inst_29017 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29019__$1,inst_29017);
} else {
if((state_val_29020 === (12))){
var inst_29005 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29040_29071 = state_29019__$1;
(statearr_29040_29071[(2)] = inst_29005);

(statearr_29040_29071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (2))){
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29019__$1,(4),in$);
} else {
if((state_val_29020 === (23))){
var inst_29013 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29041_29072 = state_29019__$1;
(statearr_29041_29072[(2)] = inst_29013);

(statearr_29041_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (19))){
var inst_29000 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29042_29073 = state_29019__$1;
(statearr_29042_29073[(2)] = inst_29000);

(statearr_29042_29073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (11))){
var inst_28971 = (state_29019[(12)]);
var inst_28985 = (state_29019[(7)]);
var inst_28985__$1 = cljs.core.seq.call(null,inst_28971);
var state_29019__$1 = (function (){var statearr_29043 = state_29019;
(statearr_29043[(7)] = inst_28985__$1);

return statearr_29043;
})();
if(inst_28985__$1){
var statearr_29044_29074 = state_29019__$1;
(statearr_29044_29074[(1)] = (14));

} else {
var statearr_29045_29075 = state_29019__$1;
(statearr_29045_29075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (9))){
var inst_29007 = (state_29019[(2)]);
var inst_29008 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29019__$1 = (function (){var statearr_29046 = state_29019;
(statearr_29046[(15)] = inst_29007);

return statearr_29046;
})();
if(cljs.core.truth_(inst_29008)){
var statearr_29047_29076 = state_29019__$1;
(statearr_29047_29076[(1)] = (21));

} else {
var statearr_29048_29077 = state_29019__$1;
(statearr_29048_29077[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (5))){
var inst_28963 = cljs.core.async.close_BANG_.call(null,out);
var state_29019__$1 = state_29019;
var statearr_29049_29078 = state_29019__$1;
(statearr_29049_29078[(2)] = inst_28963);

(statearr_29049_29078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (14))){
var inst_28985 = (state_29019[(7)]);
var inst_28987 = cljs.core.chunked_seq_QMARK_.call(null,inst_28985);
var state_29019__$1 = state_29019;
if(inst_28987){
var statearr_29050_29079 = state_29019__$1;
(statearr_29050_29079[(1)] = (17));

} else {
var statearr_29051_29080 = state_29019__$1;
(statearr_29051_29080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (16))){
var inst_29003 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29052_29081 = state_29019__$1;
(statearr_29052_29081[(2)] = inst_29003);

(statearr_29052_29081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29020 === (10))){
var inst_28974 = (state_29019[(10)]);
var inst_28972 = (state_29019[(11)]);
var inst_28979 = cljs.core._nth.call(null,inst_28972,inst_28974);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29019__$1,(13),out,inst_28979);
} else {
if((state_val_29020 === (18))){
var inst_28985 = (state_29019[(7)]);
var inst_28994 = cljs.core.first.call(null,inst_28985);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29019__$1,(20),out,inst_28994);
} else {
if((state_val_29020 === (8))){
var inst_28973 = (state_29019[(8)]);
var inst_28974 = (state_29019[(10)]);
var inst_28976 = (inst_28974 < inst_28973);
var inst_28977 = inst_28976;
var state_29019__$1 = state_29019;
if(cljs.core.truth_(inst_28977)){
var statearr_29053_29082 = state_29019__$1;
(statearr_29053_29082[(1)] = (10));

} else {
var statearr_29054_29083 = state_29019__$1;
(statearr_29054_29083[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____1 = (function (state_29019){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_29019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e29056){var ex__27343__auto__ = e29056;
var statearr_29057_29084 = state_29019;
(statearr_29057_29084[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_29019[(4)]))){
var statearr_29058_29085 = state_29019;
(statearr_29058_29085[(1)] = cljs.core.first.call(null,(state_29019[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29086 = state_29019;
state_29019 = G__29086;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__ = function(state_29019){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____1.call(this,state_29019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27340__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_29059 = f__27414__auto__.call(null);
(statearr_29059[(6)] = c__27413__auto__);

return statearr_29059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29088 = arguments.length;
switch (G__29088) {
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
var G__29091 = arguments.length;
switch (G__29091) {
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
var G__29094 = arguments.length;
switch (G__29094) {
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
var c__27413__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (7))){
var inst_29113 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29120_29143 = state_29118__$1;
(statearr_29120_29143[(2)] = inst_29113);

(statearr_29120_29143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (1))){
var inst_29095 = null;
var state_29118__$1 = (function (){var statearr_29121 = state_29118;
(statearr_29121[(7)] = inst_29095);

return statearr_29121;
})();
var statearr_29122_29144 = state_29118__$1;
(statearr_29122_29144[(2)] = null);

(statearr_29122_29144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var inst_29098 = (state_29118[(8)]);
var inst_29098__$1 = (state_29118[(2)]);
var inst_29099 = (inst_29098__$1 == null);
var inst_29100 = cljs.core.not.call(null,inst_29099);
var state_29118__$1 = (function (){var statearr_29123 = state_29118;
(statearr_29123[(8)] = inst_29098__$1);

return statearr_29123;
})();
if(inst_29100){
var statearr_29124_29145 = state_29118__$1;
(statearr_29124_29145[(1)] = (5));

} else {
var statearr_29125_29146 = state_29118__$1;
(statearr_29125_29146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (6))){
var state_29118__$1 = state_29118;
var statearr_29126_29147 = state_29118__$1;
(statearr_29126_29147[(2)] = null);

(statearr_29126_29147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (3))){
var inst_29115 = (state_29118[(2)]);
var inst_29116 = cljs.core.async.close_BANG_.call(null,out);
var state_29118__$1 = (function (){var statearr_29127 = state_29118;
(statearr_29127[(9)] = inst_29115);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (2))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(4),ch);
} else {
if((state_val_29119 === (11))){
var inst_29098 = (state_29118[(8)]);
var inst_29107 = (state_29118[(2)]);
var inst_29095 = inst_29098;
var state_29118__$1 = (function (){var statearr_29128 = state_29118;
(statearr_29128[(10)] = inst_29107);

(statearr_29128[(7)] = inst_29095);

return statearr_29128;
})();
var statearr_29129_29148 = state_29118__$1;
(statearr_29129_29148[(2)] = null);

(statearr_29129_29148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (9))){
var inst_29098 = (state_29118[(8)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(11),out,inst_29098);
} else {
if((state_val_29119 === (5))){
var inst_29098 = (state_29118[(8)]);
var inst_29095 = (state_29118[(7)]);
var inst_29102 = cljs.core._EQ_.call(null,inst_29098,inst_29095);
var state_29118__$1 = state_29118;
if(inst_29102){
var statearr_29131_29149 = state_29118__$1;
(statearr_29131_29149[(1)] = (8));

} else {
var statearr_29132_29150 = state_29118__$1;
(statearr_29132_29150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (10))){
var inst_29110 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29133_29151 = state_29118__$1;
(statearr_29133_29151[(2)] = inst_29110);

(statearr_29133_29151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (8))){
var inst_29095 = (state_29118[(7)]);
var tmp29130 = inst_29095;
var inst_29095__$1 = tmp29130;
var state_29118__$1 = (function (){var statearr_29134 = state_29118;
(statearr_29134[(7)] = inst_29095__$1);

return statearr_29134;
})();
var statearr_29135_29152 = state_29118__$1;
(statearr_29135_29152[(2)] = null);

(statearr_29135_29152[(1)] = (2));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29136[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_29118){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e29137){var ex__27343__auto__ = e29137;
var statearr_29138_29153 = state_29118;
(statearr_29138_29153[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_29118[(4)]))){
var statearr_29139_29154 = state_29118;
(statearr_29139_29154[(1)] = cljs.core.first.call(null,(state_29118[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29118;
state_29118 = G__29155;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_29140 = f__27414__auto__.call(null);
(statearr_29140[(6)] = c__27413__auto___29142);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29157 = arguments.length;
switch (G__29157) {
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
var c__27413__auto___29224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_29195){
var state_val_29196 = (state_29195[(1)]);
if((state_val_29196 === (7))){
var inst_29191 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29197_29225 = state_29195__$1;
(statearr_29197_29225[(2)] = inst_29191);

(statearr_29197_29225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (1))){
var inst_29158 = (new Array(n));
var inst_29159 = inst_29158;
var inst_29160 = (0);
var state_29195__$1 = (function (){var statearr_29198 = state_29195;
(statearr_29198[(7)] = inst_29159);

(statearr_29198[(8)] = inst_29160);

return statearr_29198;
})();
var statearr_29199_29226 = state_29195__$1;
(statearr_29199_29226[(2)] = null);

(statearr_29199_29226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (4))){
var inst_29163 = (state_29195[(9)]);
var inst_29163__$1 = (state_29195[(2)]);
var inst_29164 = (inst_29163__$1 == null);
var inst_29165 = cljs.core.not.call(null,inst_29164);
var state_29195__$1 = (function (){var statearr_29200 = state_29195;
(statearr_29200[(9)] = inst_29163__$1);

return statearr_29200;
})();
if(inst_29165){
var statearr_29201_29227 = state_29195__$1;
(statearr_29201_29227[(1)] = (5));

} else {
var statearr_29202_29228 = state_29195__$1;
(statearr_29202_29228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (15))){
var inst_29185 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29203_29229 = state_29195__$1;
(statearr_29203_29229[(2)] = inst_29185);

(statearr_29203_29229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (13))){
var state_29195__$1 = state_29195;
var statearr_29204_29230 = state_29195__$1;
(statearr_29204_29230[(2)] = null);

(statearr_29204_29230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (6))){
var inst_29160 = (state_29195[(8)]);
var inst_29181 = (inst_29160 > (0));
var state_29195__$1 = state_29195;
if(cljs.core.truth_(inst_29181)){
var statearr_29205_29231 = state_29195__$1;
(statearr_29205_29231[(1)] = (12));

} else {
var statearr_29206_29232 = state_29195__$1;
(statearr_29206_29232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (3))){
var inst_29193 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29195__$1,inst_29193);
} else {
if((state_val_29196 === (12))){
var inst_29159 = (state_29195[(7)]);
var inst_29183 = cljs.core.vec.call(null,inst_29159);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29195__$1,(15),out,inst_29183);
} else {
if((state_val_29196 === (2))){
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29195__$1,(4),ch);
} else {
if((state_val_29196 === (11))){
var inst_29175 = (state_29195[(2)]);
var inst_29176 = (new Array(n));
var inst_29159 = inst_29176;
var inst_29160 = (0);
var state_29195__$1 = (function (){var statearr_29207 = state_29195;
(statearr_29207[(7)] = inst_29159);

(statearr_29207[(8)] = inst_29160);

(statearr_29207[(10)] = inst_29175);

return statearr_29207;
})();
var statearr_29208_29233 = state_29195__$1;
(statearr_29208_29233[(2)] = null);

(statearr_29208_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (9))){
var inst_29159 = (state_29195[(7)]);
var inst_29173 = cljs.core.vec.call(null,inst_29159);
var state_29195__$1 = state_29195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29195__$1,(11),out,inst_29173);
} else {
if((state_val_29196 === (5))){
var inst_29159 = (state_29195[(7)]);
var inst_29168 = (state_29195[(11)]);
var inst_29160 = (state_29195[(8)]);
var inst_29163 = (state_29195[(9)]);
var inst_29167 = (inst_29159[inst_29160] = inst_29163);
var inst_29168__$1 = (inst_29160 + (1));
var inst_29169 = (inst_29168__$1 < n);
var state_29195__$1 = (function (){var statearr_29209 = state_29195;
(statearr_29209[(12)] = inst_29167);

(statearr_29209[(11)] = inst_29168__$1);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29169)){
var statearr_29210_29234 = state_29195__$1;
(statearr_29210_29234[(1)] = (8));

} else {
var statearr_29211_29235 = state_29195__$1;
(statearr_29211_29235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (14))){
var inst_29188 = (state_29195[(2)]);
var inst_29189 = cljs.core.async.close_BANG_.call(null,out);
var state_29195__$1 = (function (){var statearr_29213 = state_29195;
(statearr_29213[(13)] = inst_29188);

return statearr_29213;
})();
var statearr_29214_29236 = state_29195__$1;
(statearr_29214_29236[(2)] = inst_29189);

(statearr_29214_29236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (10))){
var inst_29179 = (state_29195[(2)]);
var state_29195__$1 = state_29195;
var statearr_29215_29237 = state_29195__$1;
(statearr_29215_29237[(2)] = inst_29179);

(statearr_29215_29237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29196 === (8))){
var inst_29159 = (state_29195[(7)]);
var inst_29168 = (state_29195[(11)]);
var tmp29212 = inst_29159;
var inst_29159__$1 = tmp29212;
var inst_29160 = inst_29168;
var state_29195__$1 = (function (){var statearr_29216 = state_29195;
(statearr_29216[(7)] = inst_29159__$1);

(statearr_29216[(8)] = inst_29160);

return statearr_29216;
})();
var statearr_29217_29238 = state_29195__$1;
(statearr_29217_29238[(2)] = null);

(statearr_29217_29238[(1)] = (2));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_29218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29218[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_29218[(1)] = (1));

return statearr_29218;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_29195){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_29195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e29219){var ex__27343__auto__ = e29219;
var statearr_29220_29239 = state_29195;
(statearr_29220_29239[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_29195[(4)]))){
var statearr_29221_29240 = state_29195;
(statearr_29221_29240[(1)] = cljs.core.first.call(null,(state_29195[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29241 = state_29195;
state_29195 = G__29241;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_29195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_29195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_29222 = f__27414__auto__.call(null);
(statearr_29222[(6)] = c__27413__auto___29224);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29243 = arguments.length;
switch (G__29243) {
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
var c__27413__auto___29321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_29288){
var state_val_29289 = (state_29288[(1)]);
if((state_val_29289 === (7))){
var inst_29284 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29290_29322 = state_29288__$1;
(statearr_29290_29322[(2)] = inst_29284);

(statearr_29290_29322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (1))){
var inst_29244 = [];
var inst_29245 = inst_29244;
var inst_29246 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29288__$1 = (function (){var statearr_29291 = state_29288;
(statearr_29291[(7)] = inst_29246);

(statearr_29291[(8)] = inst_29245);

return statearr_29291;
})();
var statearr_29292_29323 = state_29288__$1;
(statearr_29292_29323[(2)] = null);

(statearr_29292_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (4))){
var inst_29249 = (state_29288[(9)]);
var inst_29249__$1 = (state_29288[(2)]);
var inst_29250 = (inst_29249__$1 == null);
var inst_29251 = cljs.core.not.call(null,inst_29250);
var state_29288__$1 = (function (){var statearr_29293 = state_29288;
(statearr_29293[(9)] = inst_29249__$1);

return statearr_29293;
})();
if(inst_29251){
var statearr_29294_29324 = state_29288__$1;
(statearr_29294_29324[(1)] = (5));

} else {
var statearr_29295_29325 = state_29288__$1;
(statearr_29295_29325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (15))){
var inst_29245 = (state_29288[(8)]);
var inst_29276 = cljs.core.vec.call(null,inst_29245);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29288__$1,(18),out,inst_29276);
} else {
if((state_val_29289 === (13))){
var inst_29271 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29296_29326 = state_29288__$1;
(statearr_29296_29326[(2)] = inst_29271);

(statearr_29296_29326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (6))){
var inst_29245 = (state_29288[(8)]);
var inst_29273 = inst_29245.length;
var inst_29274 = (inst_29273 > (0));
var state_29288__$1 = state_29288;
if(cljs.core.truth_(inst_29274)){
var statearr_29297_29327 = state_29288__$1;
(statearr_29297_29327[(1)] = (15));

} else {
var statearr_29298_29328 = state_29288__$1;
(statearr_29298_29328[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (17))){
var inst_29281 = (state_29288[(2)]);
var inst_29282 = cljs.core.async.close_BANG_.call(null,out);
var state_29288__$1 = (function (){var statearr_29299 = state_29288;
(statearr_29299[(10)] = inst_29281);

return statearr_29299;
})();
var statearr_29300_29329 = state_29288__$1;
(statearr_29300_29329[(2)] = inst_29282);

(statearr_29300_29329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (3))){
var inst_29286 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29288__$1,inst_29286);
} else {
if((state_val_29289 === (12))){
var inst_29245 = (state_29288[(8)]);
var inst_29264 = cljs.core.vec.call(null,inst_29245);
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29288__$1,(14),out,inst_29264);
} else {
if((state_val_29289 === (2))){
var state_29288__$1 = state_29288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29288__$1,(4),ch);
} else {
if((state_val_29289 === (11))){
var inst_29245 = (state_29288[(8)]);
var inst_29249 = (state_29288[(9)]);
var inst_29253 = (state_29288[(11)]);
var inst_29261 = inst_29245.push(inst_29249);
var tmp29301 = inst_29245;
var inst_29245__$1 = tmp29301;
var inst_29246 = inst_29253;
var state_29288__$1 = (function (){var statearr_29302 = state_29288;
(statearr_29302[(7)] = inst_29246);

(statearr_29302[(8)] = inst_29245__$1);

(statearr_29302[(12)] = inst_29261);

return statearr_29302;
})();
var statearr_29303_29330 = state_29288__$1;
(statearr_29303_29330[(2)] = null);

(statearr_29303_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (9))){
var inst_29246 = (state_29288[(7)]);
var inst_29257 = cljs.core.keyword_identical_QMARK_.call(null,inst_29246,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29288__$1 = state_29288;
var statearr_29304_29331 = state_29288__$1;
(statearr_29304_29331[(2)] = inst_29257);

(statearr_29304_29331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (5))){
var inst_29246 = (state_29288[(7)]);
var inst_29254 = (state_29288[(13)]);
var inst_29249 = (state_29288[(9)]);
var inst_29253 = (state_29288[(11)]);
var inst_29253__$1 = f.call(null,inst_29249);
var inst_29254__$1 = cljs.core._EQ_.call(null,inst_29253__$1,inst_29246);
var state_29288__$1 = (function (){var statearr_29305 = state_29288;
(statearr_29305[(13)] = inst_29254__$1);

(statearr_29305[(11)] = inst_29253__$1);

return statearr_29305;
})();
if(inst_29254__$1){
var statearr_29306_29332 = state_29288__$1;
(statearr_29306_29332[(1)] = (8));

} else {
var statearr_29307_29333 = state_29288__$1;
(statearr_29307_29333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (14))){
var inst_29249 = (state_29288[(9)]);
var inst_29253 = (state_29288[(11)]);
var inst_29266 = (state_29288[(2)]);
var inst_29267 = [];
var inst_29268 = inst_29267.push(inst_29249);
var inst_29245 = inst_29267;
var inst_29246 = inst_29253;
var state_29288__$1 = (function (){var statearr_29308 = state_29288;
(statearr_29308[(7)] = inst_29246);

(statearr_29308[(8)] = inst_29245);

(statearr_29308[(14)] = inst_29266);

(statearr_29308[(15)] = inst_29268);

return statearr_29308;
})();
var statearr_29309_29334 = state_29288__$1;
(statearr_29309_29334[(2)] = null);

(statearr_29309_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (16))){
var state_29288__$1 = state_29288;
var statearr_29310_29335 = state_29288__$1;
(statearr_29310_29335[(2)] = null);

(statearr_29310_29335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (10))){
var inst_29259 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
if(cljs.core.truth_(inst_29259)){
var statearr_29311_29336 = state_29288__$1;
(statearr_29311_29336[(1)] = (11));

} else {
var statearr_29312_29337 = state_29288__$1;
(statearr_29312_29337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (18))){
var inst_29278 = (state_29288[(2)]);
var state_29288__$1 = state_29288;
var statearr_29313_29338 = state_29288__$1;
(statearr_29313_29338[(2)] = inst_29278);

(statearr_29313_29338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29289 === (8))){
var inst_29254 = (state_29288[(13)]);
var state_29288__$1 = state_29288;
var statearr_29314_29339 = state_29288__$1;
(statearr_29314_29339[(2)] = inst_29254);

(statearr_29314_29339[(1)] = (10));


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
var cljs$core$async$state_machine__27340__auto__ = null;
var cljs$core$async$state_machine__27340__auto____0 = (function (){
var statearr_29315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29315[(0)] = cljs$core$async$state_machine__27340__auto__);

(statearr_29315[(1)] = (1));

return statearr_29315;
});
var cljs$core$async$state_machine__27340__auto____1 = (function (state_29288){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_29288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e29316){var ex__27343__auto__ = e29316;
var statearr_29317_29340 = state_29288;
(statearr_29317_29340[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_29288[(4)]))){
var statearr_29318_29341 = state_29288;
(statearr_29318_29341[(1)] = cljs.core.first.call(null,(state_29288[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29342 = state_29288;
state_29288 = G__29342;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
cljs$core$async$state_machine__27340__auto__ = function(state_29288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27340__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27340__auto____1.call(this,state_29288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27340__auto____0;
cljs$core$async$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27340__auto____1;
return cljs$core$async$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_29319 = f__27414__auto__.call(null);
(statearr_29319[(6)] = c__27413__auto___29321);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1655118085230
