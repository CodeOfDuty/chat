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
var G__28583 = arguments.length;
switch (G__28583) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28584 = (function (f,blockable,meta28585){
this.f = f;
this.blockable = blockable;
this.meta28585 = meta28585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28586,meta28585__$1){
var self__ = this;
var _28586__$1 = this;
return (new cljs.core.async.t_cljs$core$async28584(self__.f,self__.blockable,meta28585__$1));
}));

(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28586){
var self__ = this;
var _28586__$1 = this;
return self__.meta28585;
}));

(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28585","meta28585",-592252241,null)], null);
}));

(cljs.core.async.t_cljs$core$async28584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28584");

(cljs.core.async.t_cljs$core$async28584.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28584.
 */
cljs.core.async.__GT_t_cljs$core$async28584 = (function cljs$core$async$__GT_t_cljs$core$async28584(f__$1,blockable__$1,meta28585){
return (new cljs.core.async.t_cljs$core$async28584(f__$1,blockable__$1,meta28585));
});

}

return (new cljs.core.async.t_cljs$core$async28584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28590 = arguments.length;
switch (G__28590) {
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
var G__28593 = arguments.length;
switch (G__28593) {
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
var G__28596 = arguments.length;
switch (G__28596) {
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
var val_28598 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28598);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_28598);
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
var G__28600 = arguments.length;
switch (G__28600) {
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
var n__5635__auto___28602 = n;
var x_28603 = (0);
while(true){
if((x_28603 < n__5635__auto___28602)){
(a[x_28603] = x_28603);

var G__28604 = (x_28603 + (1));
x_28603 = G__28604;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28605 = (function (flag,meta28606){
this.flag = flag;
this.meta28606 = meta28606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28607,meta28606__$1){
var self__ = this;
var _28607__$1 = this;
return (new cljs.core.async.t_cljs$core$async28605(self__.flag,meta28606__$1));
}));

(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28607){
var self__ = this;
var _28607__$1 = this;
return self__.meta28606;
}));

(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28606","meta28606",1328513162,null)], null);
}));

(cljs.core.async.t_cljs$core$async28605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28605");

(cljs.core.async.t_cljs$core$async28605.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28605.
 */
cljs.core.async.__GT_t_cljs$core$async28605 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28605(flag__$1,meta28606){
return (new cljs.core.async.t_cljs$core$async28605(flag__$1,meta28606));
});

}

return (new cljs.core.async.t_cljs$core$async28605(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28608 = (function (flag,cb,meta28609){
this.flag = flag;
this.cb = cb;
this.meta28609 = meta28609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28610,meta28609__$1){
var self__ = this;
var _28610__$1 = this;
return (new cljs.core.async.t_cljs$core$async28608(self__.flag,self__.cb,meta28609__$1));
}));

(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28610){
var self__ = this;
var _28610__$1 = this;
return self__.meta28609;
}));

(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28609","meta28609",882356981,null)], null);
}));

(cljs.core.async.t_cljs$core$async28608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28608");

(cljs.core.async.t_cljs$core$async28608.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async28608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28608.
 */
cljs.core.async.__GT_t_cljs$core$async28608 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28608(flag__$1,cb__$1,meta28609){
return (new cljs.core.async.t_cljs$core$async28608(flag__$1,cb__$1,meta28609));
});

}

return (new cljs.core.async.t_cljs$core$async28608(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28611_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28611_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28612_SHARP_,port], null));
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
var G__28613 = (i + (1));
i = G__28613;
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
var len__5768__auto___28618 = arguments.length;
var i__5769__auto___28619 = (0);
while(true){
if((i__5769__auto___28619 < len__5768__auto___28618)){
args__5774__auto__.push((arguments[i__5769__auto___28619]));

var G__28620 = (i__5769__auto___28619 + (1));
i__5769__auto___28619 = G__28620;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28616){
var map__28617 = p__28616;
var map__28617__$1 = cljs.core.__destructure_map.call(null,map__28617);
var opts = map__28617__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28614){
var G__28615 = cljs.core.first.call(null,seq28614);
var seq28614__$1 = cljs.core.next.call(null,seq28614);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28615,seq28614__$1);
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
var G__28622 = arguments.length;
switch (G__28622) {
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
var c__28523__auto___28669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_28646){
var state_val_28647 = (state_28646[(1)]);
if((state_val_28647 === (7))){
var inst_28642 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28648_28670 = state_28646__$1;
(statearr_28648_28670[(2)] = inst_28642);

(statearr_28648_28670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (1))){
var state_28646__$1 = state_28646;
var statearr_28649_28671 = state_28646__$1;
(statearr_28649_28671[(2)] = null);

(statearr_28649_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (4))){
var inst_28625 = (state_28646[(7)]);
var inst_28625__$1 = (state_28646[(2)]);
var inst_28626 = (inst_28625__$1 == null);
var state_28646__$1 = (function (){var statearr_28650 = state_28646;
(statearr_28650[(7)] = inst_28625__$1);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28626)){
var statearr_28651_28672 = state_28646__$1;
(statearr_28651_28672[(1)] = (5));

} else {
var statearr_28652_28673 = state_28646__$1;
(statearr_28652_28673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (13))){
var state_28646__$1 = state_28646;
var statearr_28653_28674 = state_28646__$1;
(statearr_28653_28674[(2)] = null);

(statearr_28653_28674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (6))){
var inst_28625 = (state_28646[(7)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28646__$1,(11),to,inst_28625);
} else {
if((state_val_28647 === (3))){
var inst_28644 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28646__$1,inst_28644);
} else {
if((state_val_28647 === (12))){
var state_28646__$1 = state_28646;
var statearr_28654_28675 = state_28646__$1;
(statearr_28654_28675[(2)] = null);

(statearr_28654_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (2))){
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28646__$1,(4),from);
} else {
if((state_val_28647 === (11))){
var inst_28635 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28635)){
var statearr_28655_28676 = state_28646__$1;
(statearr_28655_28676[(1)] = (12));

} else {
var statearr_28656_28677 = state_28646__$1;
(statearr_28656_28677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (9))){
var state_28646__$1 = state_28646;
var statearr_28657_28678 = state_28646__$1;
(statearr_28657_28678[(2)] = null);

(statearr_28657_28678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (5))){
var state_28646__$1 = state_28646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28658_28679 = state_28646__$1;
(statearr_28658_28679[(1)] = (8));

} else {
var statearr_28659_28680 = state_28646__$1;
(statearr_28659_28680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (14))){
var inst_28640 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28660_28681 = state_28646__$1;
(statearr_28660_28681[(2)] = inst_28640);

(statearr_28660_28681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (10))){
var inst_28632 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28661_28682 = state_28646__$1;
(statearr_28661_28682[(2)] = inst_28632);

(statearr_28661_28682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (8))){
var inst_28629 = cljs.core.async.close_BANG_.call(null,to);
var state_28646__$1 = state_28646;
var statearr_28662_28683 = state_28646__$1;
(statearr_28662_28683[(2)] = inst_28629);

(statearr_28662_28683[(1)] = (10));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_28663 = [null,null,null,null,null,null,null,null];
(statearr_28663[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_28663[(1)] = (1));

return statearr_28663;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_28646){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28664){var ex__28453__auto__ = e28664;
var statearr_28665_28684 = state_28646;
(statearr_28665_28684[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28646[(4)]))){
var statearr_28666_28685 = state_28646;
(statearr_28666_28685[(1)] = cljs.core.first.call(null,(state_28646[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28686 = state_28646;
state_28646 = G__28686;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_28646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_28646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_28667 = f__28524__auto__.call(null);
(statearr_28667[(6)] = c__28523__auto___28669);

return statearr_28667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var process__$1 = (function (p__28687){
var vec__28688 = p__28687;
var v = cljs.core.nth.call(null,vec__28688,(0),null);
var p = cljs.core.nth.call(null,vec__28688,(1),null);
var job = vec__28688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28523__auto___28864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_28695){
var state_val_28696 = (state_28695[(1)]);
if((state_val_28696 === (1))){
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28695__$1,(2),res,v);
} else {
if((state_val_28696 === (2))){
var inst_28692 = (state_28695[(2)]);
var inst_28693 = cljs.core.async.close_BANG_.call(null,res);
var state_28695__$1 = (function (){var statearr_28697 = state_28695;
(statearr_28697[(7)] = inst_28692);

return statearr_28697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28695__$1,inst_28693);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_28698 = [null,null,null,null,null,null,null,null];
(statearr_28698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__);

(statearr_28698[(1)] = (1));

return statearr_28698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1 = (function (state_28695){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28699){var ex__28453__auto__ = e28699;
var statearr_28700_28865 = state_28695;
(statearr_28700_28865[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28695[(4)]))){
var statearr_28701_28866 = state_28695;
(statearr_28701_28866[(1)] = cljs.core.first.call(null,(state_28695[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28867 = state_28695;
state_28695 = G__28867;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_28702 = f__28524__auto__.call(null);
(statearr_28702[(6)] = c__28523__auto___28864);

return statearr_28702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__28703){
var vec__28704 = p__28703;
var v = cljs.core.nth.call(null,vec__28704,(0),null);
var p = cljs.core.nth.call(null,vec__28704,(1),null);
var job = vec__28704;
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
var n__5635__auto___28868 = n;
var __28869 = (0);
while(true){
if((__28869 < n__5635__auto___28868)){
var G__28707_28870 = type;
var G__28707_28871__$1 = (((G__28707_28870 instanceof cljs.core.Keyword))?G__28707_28870.fqn:null);
switch (G__28707_28871__$1) {
case "compute":
var c__28523__auto___28873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28869,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = ((function (__28869,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function (state_28720){
var state_val_28721 = (state_28720[(1)]);
if((state_val_28721 === (1))){
var state_28720__$1 = state_28720;
var statearr_28722_28874 = state_28720__$1;
(statearr_28722_28874[(2)] = null);

(statearr_28722_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (2))){
var state_28720__$1 = state_28720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28720__$1,(4),jobs);
} else {
if((state_val_28721 === (3))){
var inst_28718 = (state_28720[(2)]);
var state_28720__$1 = state_28720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28720__$1,inst_28718);
} else {
if((state_val_28721 === (4))){
var inst_28710 = (state_28720[(2)]);
var inst_28711 = process__$1.call(null,inst_28710);
var state_28720__$1 = state_28720;
if(cljs.core.truth_(inst_28711)){
var statearr_28723_28875 = state_28720__$1;
(statearr_28723_28875[(1)] = (5));

} else {
var statearr_28724_28876 = state_28720__$1;
(statearr_28724_28876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (5))){
var state_28720__$1 = state_28720;
var statearr_28725_28877 = state_28720__$1;
(statearr_28725_28877[(2)] = null);

(statearr_28725_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (6))){
var state_28720__$1 = state_28720;
var statearr_28726_28878 = state_28720__$1;
(statearr_28726_28878[(2)] = null);

(statearr_28726_28878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28721 === (7))){
var inst_28716 = (state_28720[(2)]);
var state_28720__$1 = state_28720;
var statearr_28727_28879 = state_28720__$1;
(statearr_28727_28879[(2)] = inst_28716);

(statearr_28727_28879[(1)] = (3));


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
});})(__28869,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
;
return ((function (__28869,switch__28449__auto__,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_28728 = [null,null,null,null,null,null,null];
(statearr_28728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__);

(statearr_28728[(1)] = (1));

return statearr_28728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1 = (function (state_28720){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28729){var ex__28453__auto__ = e28729;
var statearr_28730_28880 = state_28720;
(statearr_28730_28880[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28720[(4)]))){
var statearr_28731_28881 = state_28720;
(statearr_28731_28881[(1)] = cljs.core.first.call(null,(state_28720[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28882 = state_28720;
state_28720 = G__28882;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = function(state_28720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1.call(this,state_28720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__;
})()
;})(__28869,switch__28449__auto__,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
})();
var state__28525__auto__ = (function (){var statearr_28732 = f__28524__auto__.call(null);
(statearr_28732[(6)] = c__28523__auto___28873);

return statearr_28732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
});})(__28869,c__28523__auto___28873,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
);


break;
case "async":
var c__28523__auto___28883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28869,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = ((function (__28869,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function (state_28745){
var state_val_28746 = (state_28745[(1)]);
if((state_val_28746 === (1))){
var state_28745__$1 = state_28745;
var statearr_28747_28884 = state_28745__$1;
(statearr_28747_28884[(2)] = null);

(statearr_28747_28884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (2))){
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28745__$1,(4),jobs);
} else {
if((state_val_28746 === (3))){
var inst_28743 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28745__$1,inst_28743);
} else {
if((state_val_28746 === (4))){
var inst_28735 = (state_28745[(2)]);
var inst_28736 = async.call(null,inst_28735);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28736)){
var statearr_28748_28885 = state_28745__$1;
(statearr_28748_28885[(1)] = (5));

} else {
var statearr_28749_28886 = state_28745__$1;
(statearr_28749_28886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (5))){
var state_28745__$1 = state_28745;
var statearr_28750_28887 = state_28745__$1;
(statearr_28750_28887[(2)] = null);

(statearr_28750_28887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (6))){
var state_28745__$1 = state_28745;
var statearr_28751_28888 = state_28745__$1;
(statearr_28751_28888[(2)] = null);

(statearr_28751_28888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (7))){
var inst_28741 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28752_28889 = state_28745__$1;
(statearr_28752_28889[(2)] = inst_28741);

(statearr_28752_28889[(1)] = (3));


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
});})(__28869,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
;
return ((function (__28869,switch__28449__auto__,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_28753 = [null,null,null,null,null,null,null];
(statearr_28753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__);

(statearr_28753[(1)] = (1));

return statearr_28753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1 = (function (state_28745){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28754){var ex__28453__auto__ = e28754;
var statearr_28755_28890 = state_28745;
(statearr_28755_28890[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28745[(4)]))){
var statearr_28756_28891 = state_28745;
(statearr_28756_28891[(1)] = cljs.core.first.call(null,(state_28745[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28892 = state_28745;
state_28745 = G__28892;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = function(state_28745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1.call(this,state_28745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__;
})()
;})(__28869,switch__28449__auto__,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
})();
var state__28525__auto__ = (function (){var statearr_28757 = f__28524__auto__.call(null);
(statearr_28757[(6)] = c__28523__auto___28883);

return statearr_28757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
});})(__28869,c__28523__auto___28883,G__28707_28870,G__28707_28871__$1,n__5635__auto___28868,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28707_28871__$1)].join('')));

}

var G__28893 = (__28869 + (1));
__28869 = G__28893;
continue;
} else {
}
break;
}

var c__28523__auto___28894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_28779){
var state_val_28780 = (state_28779[(1)]);
if((state_val_28780 === (7))){
var inst_28775 = (state_28779[(2)]);
var state_28779__$1 = state_28779;
var statearr_28781_28895 = state_28779__$1;
(statearr_28781_28895[(2)] = inst_28775);

(statearr_28781_28895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28780 === (1))){
var state_28779__$1 = state_28779;
var statearr_28782_28896 = state_28779__$1;
(statearr_28782_28896[(2)] = null);

(statearr_28782_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28780 === (4))){
var inst_28760 = (state_28779[(7)]);
var inst_28760__$1 = (state_28779[(2)]);
var inst_28761 = (inst_28760__$1 == null);
var state_28779__$1 = (function (){var statearr_28783 = state_28779;
(statearr_28783[(7)] = inst_28760__$1);

return statearr_28783;
})();
if(cljs.core.truth_(inst_28761)){
var statearr_28784_28897 = state_28779__$1;
(statearr_28784_28897[(1)] = (5));

} else {
var statearr_28785_28898 = state_28779__$1;
(statearr_28785_28898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28780 === (6))){
var inst_28765 = (state_28779[(8)]);
var inst_28760 = (state_28779[(7)]);
var inst_28765__$1 = cljs.core.async.chan.call(null,(1));
var inst_28766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28767 = [inst_28760,inst_28765__$1];
var inst_28768 = (new cljs.core.PersistentVector(null,2,(5),inst_28766,inst_28767,null));
var state_28779__$1 = (function (){var statearr_28786 = state_28779;
(statearr_28786[(8)] = inst_28765__$1);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28779__$1,(8),jobs,inst_28768);
} else {
if((state_val_28780 === (3))){
var inst_28777 = (state_28779[(2)]);
var state_28779__$1 = state_28779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28779__$1,inst_28777);
} else {
if((state_val_28780 === (2))){
var state_28779__$1 = state_28779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28779__$1,(4),from);
} else {
if((state_val_28780 === (9))){
var inst_28772 = (state_28779[(2)]);
var state_28779__$1 = (function (){var statearr_28787 = state_28779;
(statearr_28787[(9)] = inst_28772);

return statearr_28787;
})();
var statearr_28788_28899 = state_28779__$1;
(statearr_28788_28899[(2)] = null);

(statearr_28788_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28780 === (5))){
var inst_28763 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28779__$1 = state_28779;
var statearr_28789_28900 = state_28779__$1;
(statearr_28789_28900[(2)] = inst_28763);

(statearr_28789_28900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28780 === (8))){
var inst_28765 = (state_28779[(8)]);
var inst_28770 = (state_28779[(2)]);
var state_28779__$1 = (function (){var statearr_28790 = state_28779;
(statearr_28790[(10)] = inst_28770);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28779__$1,(9),results,inst_28765);
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
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1 = (function (state_28779){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28792){var ex__28453__auto__ = e28792;
var statearr_28793_28901 = state_28779;
(statearr_28793_28901[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28779[(4)]))){
var statearr_28794_28902 = state_28779;
(statearr_28794_28902[(1)] = cljs.core.first.call(null,(state_28779[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28903 = state_28779;
state_28779 = G__28903;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = function(state_28779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1.call(this,state_28779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_28795 = f__28524__auto__.call(null);
(statearr_28795[(6)] = c__28523__auto___28894);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_28833){
var state_val_28834 = (state_28833[(1)]);
if((state_val_28834 === (7))){
var inst_28829 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28835_28904 = state_28833__$1;
(statearr_28835_28904[(2)] = inst_28829);

(statearr_28835_28904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (20))){
var state_28833__$1 = state_28833;
var statearr_28836_28905 = state_28833__$1;
(statearr_28836_28905[(2)] = null);

(statearr_28836_28905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (1))){
var state_28833__$1 = state_28833;
var statearr_28837_28906 = state_28833__$1;
(statearr_28837_28906[(2)] = null);

(statearr_28837_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (4))){
var inst_28798 = (state_28833[(7)]);
var inst_28798__$1 = (state_28833[(2)]);
var inst_28799 = (inst_28798__$1 == null);
var state_28833__$1 = (function (){var statearr_28838 = state_28833;
(statearr_28838[(7)] = inst_28798__$1);

return statearr_28838;
})();
if(cljs.core.truth_(inst_28799)){
var statearr_28839_28907 = state_28833__$1;
(statearr_28839_28907[(1)] = (5));

} else {
var statearr_28840_28908 = state_28833__$1;
(statearr_28840_28908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (15))){
var inst_28811 = (state_28833[(8)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28833__$1,(18),to,inst_28811);
} else {
if((state_val_28834 === (21))){
var inst_28824 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28841_28909 = state_28833__$1;
(statearr_28841_28909[(2)] = inst_28824);

(statearr_28841_28909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (13))){
var inst_28826 = (state_28833[(2)]);
var state_28833__$1 = (function (){var statearr_28842 = state_28833;
(statearr_28842[(9)] = inst_28826);

return statearr_28842;
})();
var statearr_28843_28910 = state_28833__$1;
(statearr_28843_28910[(2)] = null);

(statearr_28843_28910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (6))){
var inst_28798 = (state_28833[(7)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(11),inst_28798);
} else {
if((state_val_28834 === (17))){
var inst_28819 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28819)){
var statearr_28844_28911 = state_28833__$1;
(statearr_28844_28911[(1)] = (19));

} else {
var statearr_28845_28912 = state_28833__$1;
(statearr_28845_28912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (3))){
var inst_28831 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28833__$1,inst_28831);
} else {
if((state_val_28834 === (12))){
var inst_28808 = (state_28833[(10)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(14),inst_28808);
} else {
if((state_val_28834 === (2))){
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(4),results);
} else {
if((state_val_28834 === (19))){
var state_28833__$1 = state_28833;
var statearr_28846_28913 = state_28833__$1;
(statearr_28846_28913[(2)] = null);

(statearr_28846_28913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (11))){
var inst_28808 = (state_28833[(2)]);
var state_28833__$1 = (function (){var statearr_28847 = state_28833;
(statearr_28847[(10)] = inst_28808);

return statearr_28847;
})();
var statearr_28848_28914 = state_28833__$1;
(statearr_28848_28914[(2)] = null);

(statearr_28848_28914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (9))){
var state_28833__$1 = state_28833;
var statearr_28849_28915 = state_28833__$1;
(statearr_28849_28915[(2)] = null);

(statearr_28849_28915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (5))){
var state_28833__$1 = state_28833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28850_28916 = state_28833__$1;
(statearr_28850_28916[(1)] = (8));

} else {
var statearr_28851_28917 = state_28833__$1;
(statearr_28851_28917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (14))){
var inst_28813 = (state_28833[(11)]);
var inst_28811 = (state_28833[(8)]);
var inst_28811__$1 = (state_28833[(2)]);
var inst_28812 = (inst_28811__$1 == null);
var inst_28813__$1 = cljs.core.not.call(null,inst_28812);
var state_28833__$1 = (function (){var statearr_28852 = state_28833;
(statearr_28852[(11)] = inst_28813__$1);

(statearr_28852[(8)] = inst_28811__$1);

return statearr_28852;
})();
if(inst_28813__$1){
var statearr_28853_28918 = state_28833__$1;
(statearr_28853_28918[(1)] = (15));

} else {
var statearr_28854_28919 = state_28833__$1;
(statearr_28854_28919[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (16))){
var inst_28813 = (state_28833[(11)]);
var state_28833__$1 = state_28833;
var statearr_28855_28920 = state_28833__$1;
(statearr_28855_28920[(2)] = inst_28813);

(statearr_28855_28920[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (10))){
var inst_28805 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28856_28921 = state_28833__$1;
(statearr_28856_28921[(2)] = inst_28805);

(statearr_28856_28921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (18))){
var inst_28816 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28857_28922 = state_28833__$1;
(statearr_28857_28922[(2)] = inst_28816);

(statearr_28857_28922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (8))){
var inst_28802 = cljs.core.async.close_BANG_.call(null,to);
var state_28833__$1 = state_28833;
var statearr_28858_28923 = state_28833__$1;
(statearr_28858_28923[(2)] = inst_28802);

(statearr_28858_28923[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_28859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__);

(statearr_28859[(1)] = (1));

return statearr_28859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1 = (function (state_28833){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28860){var ex__28453__auto__ = e28860;
var statearr_28861_28924 = state_28833;
(statearr_28861_28924[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28833[(4)]))){
var statearr_28862_28925 = state_28833;
(statearr_28862_28925[(1)] = cljs.core.first.call(null,(state_28833[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28926 = state_28833;
state_28833 = G__28926;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__ = function(state_28833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1.call(this,state_28833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_28863 = f__28524__auto__.call(null);
(statearr_28863[(6)] = c__28523__auto__);

return statearr_28863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
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
var G__28928 = arguments.length;
switch (G__28928) {
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
var G__28931 = arguments.length;
switch (G__28931) {
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
var G__28934 = arguments.length;
switch (G__28934) {
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
var c__28523__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_28960){
var state_val_28961 = (state_28960[(1)]);
if((state_val_28961 === (7))){
var inst_28956 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28962_28985 = state_28960__$1;
(statearr_28962_28985[(2)] = inst_28956);

(statearr_28962_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (1))){
var state_28960__$1 = state_28960;
var statearr_28963_28986 = state_28960__$1;
(statearr_28963_28986[(2)] = null);

(statearr_28963_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (4))){
var inst_28937 = (state_28960[(7)]);
var inst_28937__$1 = (state_28960[(2)]);
var inst_28938 = (inst_28937__$1 == null);
var state_28960__$1 = (function (){var statearr_28964 = state_28960;
(statearr_28964[(7)] = inst_28937__$1);

return statearr_28964;
})();
if(cljs.core.truth_(inst_28938)){
var statearr_28965_28987 = state_28960__$1;
(statearr_28965_28987[(1)] = (5));

} else {
var statearr_28966_28988 = state_28960__$1;
(statearr_28966_28988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (13))){
var state_28960__$1 = state_28960;
var statearr_28967_28989 = state_28960__$1;
(statearr_28967_28989[(2)] = null);

(statearr_28967_28989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (6))){
var inst_28937 = (state_28960[(7)]);
var inst_28943 = p.call(null,inst_28937);
var state_28960__$1 = state_28960;
if(cljs.core.truth_(inst_28943)){
var statearr_28968_28990 = state_28960__$1;
(statearr_28968_28990[(1)] = (9));

} else {
var statearr_28969_28991 = state_28960__$1;
(statearr_28969_28991[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (3))){
var inst_28958 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28960__$1,inst_28958);
} else {
if((state_val_28961 === (12))){
var state_28960__$1 = state_28960;
var statearr_28970_28992 = state_28960__$1;
(statearr_28970_28992[(2)] = null);

(statearr_28970_28992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (2))){
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28960__$1,(4),ch);
} else {
if((state_val_28961 === (11))){
var inst_28937 = (state_28960[(7)]);
var inst_28947 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28960__$1,(8),inst_28947,inst_28937);
} else {
if((state_val_28961 === (9))){
var state_28960__$1 = state_28960;
var statearr_28971_28993 = state_28960__$1;
(statearr_28971_28993[(2)] = tc);

(statearr_28971_28993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (5))){
var inst_28940 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28941 = cljs.core.async.close_BANG_.call(null,fc);
var state_28960__$1 = (function (){var statearr_28972 = state_28960;
(statearr_28972[(8)] = inst_28940);

return statearr_28972;
})();
var statearr_28973_28994 = state_28960__$1;
(statearr_28973_28994[(2)] = inst_28941);

(statearr_28973_28994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (14))){
var inst_28954 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28974_28995 = state_28960__$1;
(statearr_28974_28995[(2)] = inst_28954);

(statearr_28974_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (10))){
var state_28960__$1 = state_28960;
var statearr_28975_28996 = state_28960__$1;
(statearr_28975_28996[(2)] = fc);

(statearr_28975_28996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (8))){
var inst_28949 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
if(cljs.core.truth_(inst_28949)){
var statearr_28976_28997 = state_28960__$1;
(statearr_28976_28997[(1)] = (12));

} else {
var statearr_28977_28998 = state_28960__$1;
(statearr_28977_28998[(1)] = (13));

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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_28978 = [null,null,null,null,null,null,null,null,null];
(statearr_28978[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_28978[(1)] = (1));

return statearr_28978;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_28960){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_28960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e28979){var ex__28453__auto__ = e28979;
var statearr_28980_28999 = state_28960;
(statearr_28980_28999[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_28960[(4)]))){
var statearr_28981_29000 = state_28960;
(statearr_28981_29000[(1)] = cljs.core.first.call(null,(state_28960[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29001 = state_28960;
state_28960 = G__29001;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_28960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_28960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_28982 = f__28524__auto__.call(null);
(statearr_28982[(6)] = c__28523__auto___28984);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29023){
var state_val_29024 = (state_29023[(1)]);
if((state_val_29024 === (7))){
var inst_29019 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
var statearr_29025_29044 = state_29023__$1;
(statearr_29025_29044[(2)] = inst_29019);

(statearr_29025_29044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (1))){
var inst_29002 = init;
var inst_29003 = inst_29002;
var state_29023__$1 = (function (){var statearr_29026 = state_29023;
(statearr_29026[(7)] = inst_29003);

return statearr_29026;
})();
var statearr_29027_29045 = state_29023__$1;
(statearr_29027_29045[(2)] = null);

(statearr_29027_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (4))){
var inst_29006 = (state_29023[(8)]);
var inst_29006__$1 = (state_29023[(2)]);
var inst_29007 = (inst_29006__$1 == null);
var state_29023__$1 = (function (){var statearr_29028 = state_29023;
(statearr_29028[(8)] = inst_29006__$1);

return statearr_29028;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29029_29046 = state_29023__$1;
(statearr_29029_29046[(1)] = (5));

} else {
var statearr_29030_29047 = state_29023__$1;
(statearr_29030_29047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (6))){
var inst_29010 = (state_29023[(9)]);
var inst_29003 = (state_29023[(7)]);
var inst_29006 = (state_29023[(8)]);
var inst_29010__$1 = f.call(null,inst_29003,inst_29006);
var inst_29011 = cljs.core.reduced_QMARK_.call(null,inst_29010__$1);
var state_29023__$1 = (function (){var statearr_29031 = state_29023;
(statearr_29031[(9)] = inst_29010__$1);

return statearr_29031;
})();
if(inst_29011){
var statearr_29032_29048 = state_29023__$1;
(statearr_29032_29048[(1)] = (8));

} else {
var statearr_29033_29049 = state_29023__$1;
(statearr_29033_29049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (3))){
var inst_29021 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29023__$1,inst_29021);
} else {
if((state_val_29024 === (2))){
var state_29023__$1 = state_29023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29023__$1,(4),ch);
} else {
if((state_val_29024 === (9))){
var inst_29010 = (state_29023[(9)]);
var inst_29003 = inst_29010;
var state_29023__$1 = (function (){var statearr_29034 = state_29023;
(statearr_29034[(7)] = inst_29003);

return statearr_29034;
})();
var statearr_29035_29050 = state_29023__$1;
(statearr_29035_29050[(2)] = null);

(statearr_29035_29050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (5))){
var inst_29003 = (state_29023[(7)]);
var state_29023__$1 = state_29023;
var statearr_29036_29051 = state_29023__$1;
(statearr_29036_29051[(2)] = inst_29003);

(statearr_29036_29051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (10))){
var inst_29017 = (state_29023[(2)]);
var state_29023__$1 = state_29023;
var statearr_29037_29052 = state_29023__$1;
(statearr_29037_29052[(2)] = inst_29017);

(statearr_29037_29052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29024 === (8))){
var inst_29010 = (state_29023[(9)]);
var inst_29013 = cljs.core.deref.call(null,inst_29010);
var state_29023__$1 = state_29023;
var statearr_29038_29053 = state_29023__$1;
(statearr_29038_29053[(2)] = inst_29013);

(statearr_29038_29053[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28450__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28450__auto____0 = (function (){
var statearr_29039 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29039[(0)] = cljs$core$async$reduce_$_state_machine__28450__auto__);

(statearr_29039[(1)] = (1));

return statearr_29039;
});
var cljs$core$async$reduce_$_state_machine__28450__auto____1 = (function (state_29023){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29040){var ex__28453__auto__ = e29040;
var statearr_29041_29054 = state_29023;
(statearr_29041_29054[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29023[(4)]))){
var statearr_29042_29055 = state_29023;
(statearr_29042_29055[(1)] = cljs.core.first.call(null,(state_29023[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_29023;
state_29023 = G__29056;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28450__auto__ = function(state_29023){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28450__auto____1.call(this,state_29023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28450__auto____0;
cljs$core$async$reduce_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28450__auto____1;
return cljs$core$async$reduce_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29043 = f__28524__auto__.call(null);
(statearr_29043[(6)] = c__28523__auto__);

return statearr_29043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29062){
var state_val_29063 = (state_29062[(1)]);
if((state_val_29063 === (1))){
var inst_29057 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29062__$1,(2),inst_29057);
} else {
if((state_val_29063 === (2))){
var inst_29059 = (state_29062[(2)]);
var inst_29060 = f__$1.call(null,inst_29059);
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29062__$1,inst_29060);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28450__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28450__auto____0 = (function (){
var statearr_29064 = [null,null,null,null,null,null,null];
(statearr_29064[(0)] = cljs$core$async$transduce_$_state_machine__28450__auto__);

(statearr_29064[(1)] = (1));

return statearr_29064;
});
var cljs$core$async$transduce_$_state_machine__28450__auto____1 = (function (state_29062){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29065){var ex__28453__auto__ = e29065;
var statearr_29066_29069 = state_29062;
(statearr_29066_29069[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29062[(4)]))){
var statearr_29067_29070 = state_29062;
(statearr_29067_29070[(1)] = cljs.core.first.call(null,(state_29062[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29071 = state_29062;
state_29062 = G__29071;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28450__auto__ = function(state_29062){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28450__auto____1.call(this,state_29062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28450__auto____0;
cljs$core$async$transduce_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28450__auto____1;
return cljs$core$async$transduce_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29068 = f__28524__auto__.call(null);
(statearr_29068[(6)] = c__28523__auto__);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
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
var G__29073 = arguments.length;
switch (G__29073) {
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29098){
var state_val_29099 = (state_29098[(1)]);
if((state_val_29099 === (7))){
var inst_29080 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29100_29122 = state_29098__$1;
(statearr_29100_29122[(2)] = inst_29080);

(statearr_29100_29122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (1))){
var inst_29074 = cljs.core.seq.call(null,coll);
var inst_29075 = inst_29074;
var state_29098__$1 = (function (){var statearr_29101 = state_29098;
(statearr_29101[(7)] = inst_29075);

return statearr_29101;
})();
var statearr_29102_29123 = state_29098__$1;
(statearr_29102_29123[(2)] = null);

(statearr_29102_29123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (4))){
var inst_29075 = (state_29098[(7)]);
var inst_29078 = cljs.core.first.call(null,inst_29075);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29098__$1,(7),ch,inst_29078);
} else {
if((state_val_29099 === (13))){
var inst_29092 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29103_29124 = state_29098__$1;
(statearr_29103_29124[(2)] = inst_29092);

(statearr_29103_29124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (6))){
var inst_29083 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29083)){
var statearr_29104_29125 = state_29098__$1;
(statearr_29104_29125[(1)] = (8));

} else {
var statearr_29105_29126 = state_29098__$1;
(statearr_29105_29126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (3))){
var inst_29096 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29098__$1,inst_29096);
} else {
if((state_val_29099 === (12))){
var state_29098__$1 = state_29098;
var statearr_29106_29127 = state_29098__$1;
(statearr_29106_29127[(2)] = null);

(statearr_29106_29127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (2))){
var inst_29075 = (state_29098[(7)]);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29075)){
var statearr_29107_29128 = state_29098__$1;
(statearr_29107_29128[(1)] = (4));

} else {
var statearr_29108_29129 = state_29098__$1;
(statearr_29108_29129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (11))){
var inst_29089 = cljs.core.async.close_BANG_.call(null,ch);
var state_29098__$1 = state_29098;
var statearr_29109_29130 = state_29098__$1;
(statearr_29109_29130[(2)] = inst_29089);

(statearr_29109_29130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (9))){
var state_29098__$1 = state_29098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29110_29131 = state_29098__$1;
(statearr_29110_29131[(1)] = (11));

} else {
var statearr_29111_29132 = state_29098__$1;
(statearr_29111_29132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (5))){
var inst_29075 = (state_29098[(7)]);
var state_29098__$1 = state_29098;
var statearr_29112_29133 = state_29098__$1;
(statearr_29112_29133[(2)] = inst_29075);

(statearr_29112_29133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (10))){
var inst_29094 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29113_29134 = state_29098__$1;
(statearr_29113_29134[(2)] = inst_29094);

(statearr_29113_29134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (8))){
var inst_29075 = (state_29098[(7)]);
var inst_29085 = cljs.core.next.call(null,inst_29075);
var inst_29075__$1 = inst_29085;
var state_29098__$1 = (function (){var statearr_29114 = state_29098;
(statearr_29114[(7)] = inst_29075__$1);

return statearr_29114;
})();
var statearr_29115_29135 = state_29098__$1;
(statearr_29115_29135[(2)] = null);

(statearr_29115_29135[(1)] = (2));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_29116 = [null,null,null,null,null,null,null,null];
(statearr_29116[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_29116[(1)] = (1));

return statearr_29116;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_29098){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29117){var ex__28453__auto__ = e29117;
var statearr_29118_29136 = state_29098;
(statearr_29118_29136[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29098[(4)]))){
var statearr_29119_29137 = state_29098;
(statearr_29119_29137[(1)] = cljs.core.first.call(null,(state_29098[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29138 = state_29098;
state_29098 = G__29138;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_29098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_29098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29120 = f__28524__auto__.call(null);
(statearr_29120[(6)] = c__28523__auto__);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
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
var G__29140 = arguments.length;
switch (G__29140) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_29142 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_29142.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29143 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_29143.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29144 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_29144.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29145 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_29145.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29146 = (function (ch,cs,meta29147){
this.ch = ch;
this.cs = cs;
this.meta29147 = meta29147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29148,meta29147__$1){
var self__ = this;
var _29148__$1 = this;
return (new cljs.core.async.t_cljs$core$async29146(self__.ch,self__.cs,meta29147__$1));
}));

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29148){
var self__ = this;
var _29148__$1 = this;
return self__.meta29147;
}));

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29147","meta29147",-1316074527,null)], null);
}));

(cljs.core.async.t_cljs$core$async29146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29146");

(cljs.core.async.t_cljs$core$async29146.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async29146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29146.
 */
cljs.core.async.__GT_t_cljs$core$async29146 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29146(ch__$1,cs__$1,meta29147){
return (new cljs.core.async.t_cljs$core$async29146(ch__$1,cs__$1,meta29147));
});

}

return (new cljs.core.async.t_cljs$core$async29146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28523__auto___29365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29281){
var state_val_29282 = (state_29281[(1)]);
if((state_val_29282 === (7))){
var inst_29277 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29283_29366 = state_29281__$1;
(statearr_29283_29366[(2)] = inst_29277);

(statearr_29283_29366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (20))){
var inst_29182 = (state_29281[(7)]);
var inst_29194 = cljs.core.first.call(null,inst_29182);
var inst_29195 = cljs.core.nth.call(null,inst_29194,(0),null);
var inst_29196 = cljs.core.nth.call(null,inst_29194,(1),null);
var state_29281__$1 = (function (){var statearr_29284 = state_29281;
(statearr_29284[(8)] = inst_29195);

return statearr_29284;
})();
if(cljs.core.truth_(inst_29196)){
var statearr_29285_29367 = state_29281__$1;
(statearr_29285_29367[(1)] = (22));

} else {
var statearr_29286_29368 = state_29281__$1;
(statearr_29286_29368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (27))){
var inst_29231 = (state_29281[(9)]);
var inst_29224 = (state_29281[(10)]);
var inst_29226 = (state_29281[(11)]);
var inst_29151 = (state_29281[(12)]);
var inst_29231__$1 = cljs.core._nth.call(null,inst_29224,inst_29226);
var inst_29232 = cljs.core.async.put_BANG_.call(null,inst_29231__$1,inst_29151,done);
var state_29281__$1 = (function (){var statearr_29287 = state_29281;
(statearr_29287[(9)] = inst_29231__$1);

return statearr_29287;
})();
if(cljs.core.truth_(inst_29232)){
var statearr_29288_29369 = state_29281__$1;
(statearr_29288_29369[(1)] = (30));

} else {
var statearr_29289_29370 = state_29281__$1;
(statearr_29289_29370[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (1))){
var state_29281__$1 = state_29281;
var statearr_29290_29371 = state_29281__$1;
(statearr_29290_29371[(2)] = null);

(statearr_29290_29371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (24))){
var inst_29182 = (state_29281[(7)]);
var inst_29201 = (state_29281[(2)]);
var inst_29202 = cljs.core.next.call(null,inst_29182);
var inst_29160 = inst_29202;
var inst_29161 = null;
var inst_29162 = (0);
var inst_29163 = (0);
var state_29281__$1 = (function (){var statearr_29291 = state_29281;
(statearr_29291[(13)] = inst_29201);

(statearr_29291[(14)] = inst_29161);

(statearr_29291[(15)] = inst_29162);

(statearr_29291[(16)] = inst_29160);

(statearr_29291[(17)] = inst_29163);

return statearr_29291;
})();
var statearr_29292_29372 = state_29281__$1;
(statearr_29292_29372[(2)] = null);

(statearr_29292_29372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (39))){
var state_29281__$1 = state_29281;
var statearr_29296_29373 = state_29281__$1;
(statearr_29296_29373[(2)] = null);

(statearr_29296_29373[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (4))){
var inst_29151 = (state_29281[(12)]);
var inst_29151__$1 = (state_29281[(2)]);
var inst_29152 = (inst_29151__$1 == null);
var state_29281__$1 = (function (){var statearr_29297 = state_29281;
(statearr_29297[(12)] = inst_29151__$1);

return statearr_29297;
})();
if(cljs.core.truth_(inst_29152)){
var statearr_29298_29374 = state_29281__$1;
(statearr_29298_29374[(1)] = (5));

} else {
var statearr_29299_29375 = state_29281__$1;
(statearr_29299_29375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (15))){
var inst_29161 = (state_29281[(14)]);
var inst_29162 = (state_29281[(15)]);
var inst_29160 = (state_29281[(16)]);
var inst_29163 = (state_29281[(17)]);
var inst_29178 = (state_29281[(2)]);
var inst_29179 = (inst_29163 + (1));
var tmp29293 = inst_29161;
var tmp29294 = inst_29162;
var tmp29295 = inst_29160;
var inst_29160__$1 = tmp29295;
var inst_29161__$1 = tmp29293;
var inst_29162__$1 = tmp29294;
var inst_29163__$1 = inst_29179;
var state_29281__$1 = (function (){var statearr_29300 = state_29281;
(statearr_29300[(18)] = inst_29178);

(statearr_29300[(14)] = inst_29161__$1);

(statearr_29300[(15)] = inst_29162__$1);

(statearr_29300[(16)] = inst_29160__$1);

(statearr_29300[(17)] = inst_29163__$1);

return statearr_29300;
})();
var statearr_29301_29376 = state_29281__$1;
(statearr_29301_29376[(2)] = null);

(statearr_29301_29376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (21))){
var inst_29205 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29305_29377 = state_29281__$1;
(statearr_29305_29377[(2)] = inst_29205);

(statearr_29305_29377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (31))){
var inst_29231 = (state_29281[(9)]);
var inst_29235 = cljs.core.async.untap_STAR_.call(null,m,inst_29231);
var state_29281__$1 = state_29281;
var statearr_29306_29378 = state_29281__$1;
(statearr_29306_29378[(2)] = inst_29235);

(statearr_29306_29378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (32))){
var inst_29223 = (state_29281[(19)]);
var inst_29224 = (state_29281[(10)]);
var inst_29226 = (state_29281[(11)]);
var inst_29225 = (state_29281[(20)]);
var inst_29237 = (state_29281[(2)]);
var inst_29238 = (inst_29226 + (1));
var tmp29302 = inst_29223;
var tmp29303 = inst_29224;
var tmp29304 = inst_29225;
var inst_29223__$1 = tmp29302;
var inst_29224__$1 = tmp29303;
var inst_29225__$1 = tmp29304;
var inst_29226__$1 = inst_29238;
var state_29281__$1 = (function (){var statearr_29307 = state_29281;
(statearr_29307[(19)] = inst_29223__$1);

(statearr_29307[(10)] = inst_29224__$1);

(statearr_29307[(11)] = inst_29226__$1);

(statearr_29307[(21)] = inst_29237);

(statearr_29307[(20)] = inst_29225__$1);

return statearr_29307;
})();
var statearr_29308_29379 = state_29281__$1;
(statearr_29308_29379[(2)] = null);

(statearr_29308_29379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (40))){
var inst_29250 = (state_29281[(22)]);
var inst_29254 = cljs.core.async.untap_STAR_.call(null,m,inst_29250);
var state_29281__$1 = state_29281;
var statearr_29309_29380 = state_29281__$1;
(statearr_29309_29380[(2)] = inst_29254);

(statearr_29309_29380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (33))){
var inst_29241 = (state_29281[(23)]);
var inst_29243 = cljs.core.chunked_seq_QMARK_.call(null,inst_29241);
var state_29281__$1 = state_29281;
if(inst_29243){
var statearr_29310_29381 = state_29281__$1;
(statearr_29310_29381[(1)] = (36));

} else {
var statearr_29311_29382 = state_29281__$1;
(statearr_29311_29382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (13))){
var inst_29172 = (state_29281[(24)]);
var inst_29175 = cljs.core.async.close_BANG_.call(null,inst_29172);
var state_29281__$1 = state_29281;
var statearr_29312_29383 = state_29281__$1;
(statearr_29312_29383[(2)] = inst_29175);

(statearr_29312_29383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (22))){
var inst_29195 = (state_29281[(8)]);
var inst_29198 = cljs.core.async.close_BANG_.call(null,inst_29195);
var state_29281__$1 = state_29281;
var statearr_29313_29384 = state_29281__$1;
(statearr_29313_29384[(2)] = inst_29198);

(statearr_29313_29384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (36))){
var inst_29241 = (state_29281[(23)]);
var inst_29245 = cljs.core.chunk_first.call(null,inst_29241);
var inst_29246 = cljs.core.chunk_rest.call(null,inst_29241);
var inst_29247 = cljs.core.count.call(null,inst_29245);
var inst_29223 = inst_29246;
var inst_29224 = inst_29245;
var inst_29225 = inst_29247;
var inst_29226 = (0);
var state_29281__$1 = (function (){var statearr_29314 = state_29281;
(statearr_29314[(19)] = inst_29223);

(statearr_29314[(10)] = inst_29224);

(statearr_29314[(11)] = inst_29226);

(statearr_29314[(20)] = inst_29225);

return statearr_29314;
})();
var statearr_29315_29385 = state_29281__$1;
(statearr_29315_29385[(2)] = null);

(statearr_29315_29385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (41))){
var inst_29241 = (state_29281[(23)]);
var inst_29256 = (state_29281[(2)]);
var inst_29257 = cljs.core.next.call(null,inst_29241);
var inst_29223 = inst_29257;
var inst_29224 = null;
var inst_29225 = (0);
var inst_29226 = (0);
var state_29281__$1 = (function (){var statearr_29316 = state_29281;
(statearr_29316[(19)] = inst_29223);

(statearr_29316[(10)] = inst_29224);

(statearr_29316[(11)] = inst_29226);

(statearr_29316[(25)] = inst_29256);

(statearr_29316[(20)] = inst_29225);

return statearr_29316;
})();
var statearr_29317_29386 = state_29281__$1;
(statearr_29317_29386[(2)] = null);

(statearr_29317_29386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (43))){
var state_29281__$1 = state_29281;
var statearr_29318_29387 = state_29281__$1;
(statearr_29318_29387[(2)] = null);

(statearr_29318_29387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (29))){
var inst_29265 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29319_29388 = state_29281__$1;
(statearr_29319_29388[(2)] = inst_29265);

(statearr_29319_29388[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (44))){
var inst_29274 = (state_29281[(2)]);
var state_29281__$1 = (function (){var statearr_29320 = state_29281;
(statearr_29320[(26)] = inst_29274);

return statearr_29320;
})();
var statearr_29321_29389 = state_29281__$1;
(statearr_29321_29389[(2)] = null);

(statearr_29321_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (6))){
var inst_29215 = (state_29281[(27)]);
var inst_29214 = cljs.core.deref.call(null,cs);
var inst_29215__$1 = cljs.core.keys.call(null,inst_29214);
var inst_29216 = cljs.core.count.call(null,inst_29215__$1);
var inst_29217 = cljs.core.reset_BANG_.call(null,dctr,inst_29216);
var inst_29222 = cljs.core.seq.call(null,inst_29215__$1);
var inst_29223 = inst_29222;
var inst_29224 = null;
var inst_29225 = (0);
var inst_29226 = (0);
var state_29281__$1 = (function (){var statearr_29322 = state_29281;
(statearr_29322[(19)] = inst_29223);

(statearr_29322[(10)] = inst_29224);

(statearr_29322[(11)] = inst_29226);

(statearr_29322[(28)] = inst_29217);

(statearr_29322[(20)] = inst_29225);

(statearr_29322[(27)] = inst_29215__$1);

return statearr_29322;
})();
var statearr_29323_29390 = state_29281__$1;
(statearr_29323_29390[(2)] = null);

(statearr_29323_29390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (28))){
var inst_29223 = (state_29281[(19)]);
var inst_29241 = (state_29281[(23)]);
var inst_29241__$1 = cljs.core.seq.call(null,inst_29223);
var state_29281__$1 = (function (){var statearr_29324 = state_29281;
(statearr_29324[(23)] = inst_29241__$1);

return statearr_29324;
})();
if(inst_29241__$1){
var statearr_29325_29391 = state_29281__$1;
(statearr_29325_29391[(1)] = (33));

} else {
var statearr_29326_29392 = state_29281__$1;
(statearr_29326_29392[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (25))){
var inst_29226 = (state_29281[(11)]);
var inst_29225 = (state_29281[(20)]);
var inst_29228 = (inst_29226 < inst_29225);
var inst_29229 = inst_29228;
var state_29281__$1 = state_29281;
if(cljs.core.truth_(inst_29229)){
var statearr_29327_29393 = state_29281__$1;
(statearr_29327_29393[(1)] = (27));

} else {
var statearr_29328_29394 = state_29281__$1;
(statearr_29328_29394[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (34))){
var state_29281__$1 = state_29281;
var statearr_29329_29395 = state_29281__$1;
(statearr_29329_29395[(2)] = null);

(statearr_29329_29395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (17))){
var state_29281__$1 = state_29281;
var statearr_29330_29396 = state_29281__$1;
(statearr_29330_29396[(2)] = null);

(statearr_29330_29396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (3))){
var inst_29279 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29281__$1,inst_29279);
} else {
if((state_val_29282 === (12))){
var inst_29210 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29331_29397 = state_29281__$1;
(statearr_29331_29397[(2)] = inst_29210);

(statearr_29331_29397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (2))){
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29281__$1,(4),ch);
} else {
if((state_val_29282 === (23))){
var state_29281__$1 = state_29281;
var statearr_29332_29398 = state_29281__$1;
(statearr_29332_29398[(2)] = null);

(statearr_29332_29398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (35))){
var inst_29263 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29333_29399 = state_29281__$1;
(statearr_29333_29399[(2)] = inst_29263);

(statearr_29333_29399[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (19))){
var inst_29182 = (state_29281[(7)]);
var inst_29186 = cljs.core.chunk_first.call(null,inst_29182);
var inst_29187 = cljs.core.chunk_rest.call(null,inst_29182);
var inst_29188 = cljs.core.count.call(null,inst_29186);
var inst_29160 = inst_29187;
var inst_29161 = inst_29186;
var inst_29162 = inst_29188;
var inst_29163 = (0);
var state_29281__$1 = (function (){var statearr_29334 = state_29281;
(statearr_29334[(14)] = inst_29161);

(statearr_29334[(15)] = inst_29162);

(statearr_29334[(16)] = inst_29160);

(statearr_29334[(17)] = inst_29163);

return statearr_29334;
})();
var statearr_29335_29400 = state_29281__$1;
(statearr_29335_29400[(2)] = null);

(statearr_29335_29400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (11))){
var inst_29182 = (state_29281[(7)]);
var inst_29160 = (state_29281[(16)]);
var inst_29182__$1 = cljs.core.seq.call(null,inst_29160);
var state_29281__$1 = (function (){var statearr_29336 = state_29281;
(statearr_29336[(7)] = inst_29182__$1);

return statearr_29336;
})();
if(inst_29182__$1){
var statearr_29337_29401 = state_29281__$1;
(statearr_29337_29401[(1)] = (16));

} else {
var statearr_29338_29402 = state_29281__$1;
(statearr_29338_29402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (9))){
var inst_29212 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29339_29403 = state_29281__$1;
(statearr_29339_29403[(2)] = inst_29212);

(statearr_29339_29403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (5))){
var inst_29158 = cljs.core.deref.call(null,cs);
var inst_29159 = cljs.core.seq.call(null,inst_29158);
var inst_29160 = inst_29159;
var inst_29161 = null;
var inst_29162 = (0);
var inst_29163 = (0);
var state_29281__$1 = (function (){var statearr_29340 = state_29281;
(statearr_29340[(14)] = inst_29161);

(statearr_29340[(15)] = inst_29162);

(statearr_29340[(16)] = inst_29160);

(statearr_29340[(17)] = inst_29163);

return statearr_29340;
})();
var statearr_29341_29404 = state_29281__$1;
(statearr_29341_29404[(2)] = null);

(statearr_29341_29404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (14))){
var state_29281__$1 = state_29281;
var statearr_29342_29405 = state_29281__$1;
(statearr_29342_29405[(2)] = null);

(statearr_29342_29405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (45))){
var inst_29271 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29343_29406 = state_29281__$1;
(statearr_29343_29406[(2)] = inst_29271);

(statearr_29343_29406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (26))){
var inst_29215 = (state_29281[(27)]);
var inst_29267 = (state_29281[(2)]);
var inst_29268 = cljs.core.seq.call(null,inst_29215);
var state_29281__$1 = (function (){var statearr_29344 = state_29281;
(statearr_29344[(29)] = inst_29267);

return statearr_29344;
})();
if(inst_29268){
var statearr_29345_29407 = state_29281__$1;
(statearr_29345_29407[(1)] = (42));

} else {
var statearr_29346_29408 = state_29281__$1;
(statearr_29346_29408[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (16))){
var inst_29182 = (state_29281[(7)]);
var inst_29184 = cljs.core.chunked_seq_QMARK_.call(null,inst_29182);
var state_29281__$1 = state_29281;
if(inst_29184){
var statearr_29347_29409 = state_29281__$1;
(statearr_29347_29409[(1)] = (19));

} else {
var statearr_29348_29410 = state_29281__$1;
(statearr_29348_29410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (38))){
var inst_29260 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29349_29411 = state_29281__$1;
(statearr_29349_29411[(2)] = inst_29260);

(statearr_29349_29411[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (30))){
var state_29281__$1 = state_29281;
var statearr_29350_29412 = state_29281__$1;
(statearr_29350_29412[(2)] = null);

(statearr_29350_29412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (10))){
var inst_29161 = (state_29281[(14)]);
var inst_29163 = (state_29281[(17)]);
var inst_29171 = cljs.core._nth.call(null,inst_29161,inst_29163);
var inst_29172 = cljs.core.nth.call(null,inst_29171,(0),null);
var inst_29173 = cljs.core.nth.call(null,inst_29171,(1),null);
var state_29281__$1 = (function (){var statearr_29351 = state_29281;
(statearr_29351[(24)] = inst_29172);

return statearr_29351;
})();
if(cljs.core.truth_(inst_29173)){
var statearr_29352_29413 = state_29281__$1;
(statearr_29352_29413[(1)] = (13));

} else {
var statearr_29353_29414 = state_29281__$1;
(statearr_29353_29414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (18))){
var inst_29208 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29354_29415 = state_29281__$1;
(statearr_29354_29415[(2)] = inst_29208);

(statearr_29354_29415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (42))){
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29281__$1,(45),dchan);
} else {
if((state_val_29282 === (37))){
var inst_29250 = (state_29281[(22)]);
var inst_29151 = (state_29281[(12)]);
var inst_29241 = (state_29281[(23)]);
var inst_29250__$1 = cljs.core.first.call(null,inst_29241);
var inst_29251 = cljs.core.async.put_BANG_.call(null,inst_29250__$1,inst_29151,done);
var state_29281__$1 = (function (){var statearr_29355 = state_29281;
(statearr_29355[(22)] = inst_29250__$1);

return statearr_29355;
})();
if(cljs.core.truth_(inst_29251)){
var statearr_29356_29416 = state_29281__$1;
(statearr_29356_29416[(1)] = (39));

} else {
var statearr_29357_29417 = state_29281__$1;
(statearr_29357_29417[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (8))){
var inst_29162 = (state_29281[(15)]);
var inst_29163 = (state_29281[(17)]);
var inst_29165 = (inst_29163 < inst_29162);
var inst_29166 = inst_29165;
var state_29281__$1 = state_29281;
if(cljs.core.truth_(inst_29166)){
var statearr_29358_29418 = state_29281__$1;
(statearr_29358_29418[(1)] = (10));

} else {
var statearr_29359_29419 = state_29281__$1;
(statearr_29359_29419[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__28450__auto__ = null;
var cljs$core$async$mult_$_state_machine__28450__auto____0 = (function (){
var statearr_29360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29360[(0)] = cljs$core$async$mult_$_state_machine__28450__auto__);

(statearr_29360[(1)] = (1));

return statearr_29360;
});
var cljs$core$async$mult_$_state_machine__28450__auto____1 = (function (state_29281){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29361){var ex__28453__auto__ = e29361;
var statearr_29362_29420 = state_29281;
(statearr_29362_29420[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29281[(4)]))){
var statearr_29363_29421 = state_29281;
(statearr_29363_29421[(1)] = cljs.core.first.call(null,(state_29281[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29422 = state_29281;
state_29281 = G__29422;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28450__auto__ = function(state_29281){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28450__auto____1.call(this,state_29281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28450__auto____0;
cljs$core$async$mult_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28450__auto____1;
return cljs$core$async$mult_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29364 = f__28524__auto__.call(null);
(statearr_29364[(6)] = c__28523__auto___29365);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var G__29424 = arguments.length;
switch (G__29424) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_29426 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_29426.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_29427 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_29427.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_29428 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_29428.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_29429 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_29429.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_29430 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_29430.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5774__auto__ = [];
var len__5768__auto___29440 = arguments.length;
var i__5769__auto___29441 = (0);
while(true){
if((i__5769__auto___29441 < len__5768__auto___29440)){
args__5774__auto__.push((arguments[i__5769__auto___29441]));

var G__29442 = (i__5769__auto___29441 + (1));
i__5769__auto___29441 = G__29442;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29435){
var map__29436 = p__29435;
var map__29436__$1 = cljs.core.__destructure_map.call(null,map__29436);
var opts = map__29436__$1;
var statearr_29437_29443 = state;
(statearr_29437_29443[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_29438_29444 = state;
(statearr_29438_29444[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_29439_29445 = state;
(statearr_29439_29445[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29431){
var G__29432 = cljs.core.first.call(null,seq29431);
var seq29431__$1 = cljs.core.next.call(null,seq29431);
var G__29433 = cljs.core.first.call(null,seq29431__$1);
var seq29431__$2 = cljs.core.next.call(null,seq29431__$1);
var G__29434 = cljs.core.first.call(null,seq29431__$2);
var seq29431__$3 = cljs.core.next.call(null,seq29431__$2);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29432,G__29433,G__29434,seq29431__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29446 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29447){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29447 = meta29447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29448,meta29447__$1){
var self__ = this;
var _29448__$1 = this;
return (new cljs.core.async.t_cljs$core$async29446(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29447__$1));
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29448){
var self__ = this;
var _29448__$1 = this;
return self__.meta29447;
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async29446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29447","meta29447",-1063470986,null)], null);
}));

(cljs.core.async.t_cljs$core$async29446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29446");

(cljs.core.async.t_cljs$core$async29446.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async29446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29446.
 */
cljs.core.async.__GT_t_cljs$core$async29446 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29446(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29447){
return (new cljs.core.async.t_cljs$core$async29446(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29447));
});

}

return (new cljs.core.async.t_cljs$core$async29446(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28523__auto___29561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (7))){
var inst_29476 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29476)){
var statearr_29518_29562 = state_29516__$1;
(statearr_29518_29562[(1)] = (8));

} else {
var statearr_29519_29563 = state_29516__$1;
(statearr_29519_29563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (20))){
var inst_29469 = (state_29516[(7)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29516__$1,(23),out,inst_29469);
} else {
if((state_val_29517 === (1))){
var inst_29452 = calc_state.call(null);
var inst_29453 = cljs.core.__destructure_map.call(null,inst_29452);
var inst_29454 = cljs.core.get.call(null,inst_29453,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29455 = cljs.core.get.call(null,inst_29453,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29456 = cljs.core.get.call(null,inst_29453,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29457 = inst_29452;
var state_29516__$1 = (function (){var statearr_29520 = state_29516;
(statearr_29520[(8)] = inst_29454);

(statearr_29520[(9)] = inst_29455);

(statearr_29520[(10)] = inst_29457);

(statearr_29520[(11)] = inst_29456);

return statearr_29520;
})();
var statearr_29521_29564 = state_29516__$1;
(statearr_29521_29564[(2)] = null);

(statearr_29521_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (24))){
var inst_29460 = (state_29516[(12)]);
var inst_29457 = inst_29460;
var state_29516__$1 = (function (){var statearr_29522 = state_29516;
(statearr_29522[(10)] = inst_29457);

return statearr_29522;
})();
var statearr_29523_29565 = state_29516__$1;
(statearr_29523_29565[(2)] = null);

(statearr_29523_29565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (4))){
var inst_29469 = (state_29516[(7)]);
var inst_29471 = (state_29516[(13)]);
var inst_29468 = (state_29516[(2)]);
var inst_29469__$1 = cljs.core.nth.call(null,inst_29468,(0),null);
var inst_29470 = cljs.core.nth.call(null,inst_29468,(1),null);
var inst_29471__$1 = (inst_29469__$1 == null);
var state_29516__$1 = (function (){var statearr_29524 = state_29516;
(statearr_29524[(7)] = inst_29469__$1);

(statearr_29524[(14)] = inst_29470);

(statearr_29524[(13)] = inst_29471__$1);

return statearr_29524;
})();
if(cljs.core.truth_(inst_29471__$1)){
var statearr_29525_29566 = state_29516__$1;
(statearr_29525_29566[(1)] = (5));

} else {
var statearr_29526_29567 = state_29516__$1;
(statearr_29526_29567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (15))){
var inst_29461 = (state_29516[(15)]);
var inst_29490 = (state_29516[(16)]);
var inst_29490__$1 = cljs.core.empty_QMARK_.call(null,inst_29461);
var state_29516__$1 = (function (){var statearr_29527 = state_29516;
(statearr_29527[(16)] = inst_29490__$1);

return statearr_29527;
})();
if(inst_29490__$1){
var statearr_29528_29568 = state_29516__$1;
(statearr_29528_29568[(1)] = (17));

} else {
var statearr_29529_29569 = state_29516__$1;
(statearr_29529_29569[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (21))){
var inst_29460 = (state_29516[(12)]);
var inst_29457 = inst_29460;
var state_29516__$1 = (function (){var statearr_29530 = state_29516;
(statearr_29530[(10)] = inst_29457);

return statearr_29530;
})();
var statearr_29531_29570 = state_29516__$1;
(statearr_29531_29570[(2)] = null);

(statearr_29531_29570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (13))){
var inst_29483 = (state_29516[(2)]);
var inst_29484 = calc_state.call(null);
var inst_29457 = inst_29484;
var state_29516__$1 = (function (){var statearr_29532 = state_29516;
(statearr_29532[(10)] = inst_29457);

(statearr_29532[(17)] = inst_29483);

return statearr_29532;
})();
var statearr_29533_29571 = state_29516__$1;
(statearr_29533_29571[(2)] = null);

(statearr_29533_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (22))){
var inst_29510 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29534_29572 = state_29516__$1;
(statearr_29534_29572[(2)] = inst_29510);

(statearr_29534_29572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (6))){
var inst_29470 = (state_29516[(14)]);
var inst_29474 = cljs.core._EQ_.call(null,inst_29470,change);
var state_29516__$1 = state_29516;
var statearr_29535_29573 = state_29516__$1;
(statearr_29535_29573[(2)] = inst_29474);

(statearr_29535_29573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (25))){
var state_29516__$1 = state_29516;
var statearr_29536_29574 = state_29516__$1;
(statearr_29536_29574[(2)] = null);

(statearr_29536_29574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (17))){
var inst_29462 = (state_29516[(18)]);
var inst_29470 = (state_29516[(14)]);
var inst_29492 = inst_29462.call(null,inst_29470);
var inst_29493 = cljs.core.not.call(null,inst_29492);
var state_29516__$1 = state_29516;
var statearr_29537_29575 = state_29516__$1;
(statearr_29537_29575[(2)] = inst_29493);

(statearr_29537_29575[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (3))){
var inst_29514 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29516__$1,inst_29514);
} else {
if((state_val_29517 === (12))){
var state_29516__$1 = state_29516;
var statearr_29538_29576 = state_29516__$1;
(statearr_29538_29576[(2)] = null);

(statearr_29538_29576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (2))){
var inst_29457 = (state_29516[(10)]);
var inst_29460 = (state_29516[(12)]);
var inst_29460__$1 = cljs.core.__destructure_map.call(null,inst_29457);
var inst_29461 = cljs.core.get.call(null,inst_29460__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29462 = cljs.core.get.call(null,inst_29460__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29463 = cljs.core.get.call(null,inst_29460__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29516__$1 = (function (){var statearr_29539 = state_29516;
(statearr_29539[(15)] = inst_29461);

(statearr_29539[(18)] = inst_29462);

(statearr_29539[(12)] = inst_29460__$1);

return statearr_29539;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29516__$1,(4),inst_29463);
} else {
if((state_val_29517 === (23))){
var inst_29501 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29501)){
var statearr_29540_29577 = state_29516__$1;
(statearr_29540_29577[(1)] = (24));

} else {
var statearr_29541_29578 = state_29516__$1;
(statearr_29541_29578[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (19))){
var inst_29496 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29542_29579 = state_29516__$1;
(statearr_29542_29579[(2)] = inst_29496);

(statearr_29542_29579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (11))){
var inst_29470 = (state_29516[(14)]);
var inst_29480 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29470);
var state_29516__$1 = state_29516;
var statearr_29543_29580 = state_29516__$1;
(statearr_29543_29580[(2)] = inst_29480);

(statearr_29543_29580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (9))){
var inst_29487 = (state_29516[(19)]);
var inst_29461 = (state_29516[(15)]);
var inst_29470 = (state_29516[(14)]);
var inst_29487__$1 = inst_29461.call(null,inst_29470);
var state_29516__$1 = (function (){var statearr_29544 = state_29516;
(statearr_29544[(19)] = inst_29487__$1);

return statearr_29544;
})();
if(cljs.core.truth_(inst_29487__$1)){
var statearr_29545_29581 = state_29516__$1;
(statearr_29545_29581[(1)] = (14));

} else {
var statearr_29546_29582 = state_29516__$1;
(statearr_29546_29582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (5))){
var inst_29471 = (state_29516[(13)]);
var state_29516__$1 = state_29516;
var statearr_29547_29583 = state_29516__$1;
(statearr_29547_29583[(2)] = inst_29471);

(statearr_29547_29583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (14))){
var inst_29487 = (state_29516[(19)]);
var state_29516__$1 = state_29516;
var statearr_29548_29584 = state_29516__$1;
(statearr_29548_29584[(2)] = inst_29487);

(statearr_29548_29584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (26))){
var inst_29506 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29549_29585 = state_29516__$1;
(statearr_29549_29585[(2)] = inst_29506);

(statearr_29549_29585[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (16))){
var inst_29498 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29498)){
var statearr_29550_29586 = state_29516__$1;
(statearr_29550_29586[(1)] = (20));

} else {
var statearr_29551_29587 = state_29516__$1;
(statearr_29551_29587[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (10))){
var inst_29512 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29552_29588 = state_29516__$1;
(statearr_29552_29588[(2)] = inst_29512);

(statearr_29552_29588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (18))){
var inst_29490 = (state_29516[(16)]);
var state_29516__$1 = state_29516;
var statearr_29553_29589 = state_29516__$1;
(statearr_29553_29589[(2)] = inst_29490);

(statearr_29553_29589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (8))){
var inst_29469 = (state_29516[(7)]);
var inst_29478 = (inst_29469 == null);
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29478)){
var statearr_29554_29590 = state_29516__$1;
(statearr_29554_29590[(1)] = (11));

} else {
var statearr_29555_29591 = state_29516__$1;
(statearr_29555_29591[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__28450__auto__ = null;
var cljs$core$async$mix_$_state_machine__28450__auto____0 = (function (){
var statearr_29556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29556[(0)] = cljs$core$async$mix_$_state_machine__28450__auto__);

(statearr_29556[(1)] = (1));

return statearr_29556;
});
var cljs$core$async$mix_$_state_machine__28450__auto____1 = (function (state_29516){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29557){var ex__28453__auto__ = e29557;
var statearr_29558_29592 = state_29516;
(statearr_29558_29592[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29516[(4)]))){
var statearr_29559_29593 = state_29516;
(statearr_29559_29593[(1)] = cljs.core.first.call(null,(state_29516[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29594 = state_29516;
state_29516 = G__29594;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28450__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28450__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28450__auto____0;
cljs$core$async$mix_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28450__auto____1;
return cljs$core$async$mix_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29560 = f__28524__auto__.call(null);
(statearr_29560[(6)] = c__28523__auto___29561);

return statearr_29560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_29597 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_29597.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_29598 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_29598.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_29599 = (function() {
var G__29600 = null;
var G__29600__1 = (function (p){
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
var G__29600__2 = (function (p,v){
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
G__29600 = function(p,v){
switch(arguments.length){
case 1:
return G__29600__1.call(this,p);
case 2:
return G__29600__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29600.cljs$core$IFn$_invoke$arity$1 = G__29600__1;
G__29600.cljs$core$IFn$_invoke$arity$2 = G__29600__2;
return G__29600;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29596 = arguments.length;
switch (G__29596) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29599.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_29599.call(null,p,v);
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
var G__29604 = arguments.length;
switch (G__29604) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__29602_SHARP_){
if(cljs.core.truth_(p1__29602_SHARP_.call(null,topic))){
return p1__29602_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29605 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29606){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29606 = meta29606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29607,meta29606__$1){
var self__ = this;
var _29607__$1 = this;
return (new cljs.core.async.t_cljs$core$async29605(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29606__$1));
}));

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29607){
var self__ = this;
var _29607__$1 = this;
return self__.meta29606;
}));

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29605.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29606","meta29606",-1083433571,null)], null);
}));

(cljs.core.async.t_cljs$core$async29605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29605");

(cljs.core.async.t_cljs$core$async29605.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async29605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29605.
 */
cljs.core.async.__GT_t_cljs$core$async29605 = (function cljs$core$async$__GT_t_cljs$core$async29605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29606){
return (new cljs.core.async.t_cljs$core$async29605(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29606));
});

}

return (new cljs.core.async.t_cljs$core$async29605(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28523__auto___29726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29679){
var state_val_29680 = (state_29679[(1)]);
if((state_val_29680 === (7))){
var inst_29675 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29681_29727 = state_29679__$1;
(statearr_29681_29727[(2)] = inst_29675);

(statearr_29681_29727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (20))){
var state_29679__$1 = state_29679;
var statearr_29682_29728 = state_29679__$1;
(statearr_29682_29728[(2)] = null);

(statearr_29682_29728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (1))){
var state_29679__$1 = state_29679;
var statearr_29683_29729 = state_29679__$1;
(statearr_29683_29729[(2)] = null);

(statearr_29683_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (24))){
var inst_29658 = (state_29679[(7)]);
var inst_29667 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29658);
var state_29679__$1 = state_29679;
var statearr_29684_29730 = state_29679__$1;
(statearr_29684_29730[(2)] = inst_29667);

(statearr_29684_29730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (4))){
var inst_29610 = (state_29679[(8)]);
var inst_29610__$1 = (state_29679[(2)]);
var inst_29611 = (inst_29610__$1 == null);
var state_29679__$1 = (function (){var statearr_29685 = state_29679;
(statearr_29685[(8)] = inst_29610__$1);

return statearr_29685;
})();
if(cljs.core.truth_(inst_29611)){
var statearr_29686_29731 = state_29679__$1;
(statearr_29686_29731[(1)] = (5));

} else {
var statearr_29687_29732 = state_29679__$1;
(statearr_29687_29732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (15))){
var inst_29652 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29688_29733 = state_29679__$1;
(statearr_29688_29733[(2)] = inst_29652);

(statearr_29688_29733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (21))){
var inst_29672 = (state_29679[(2)]);
var state_29679__$1 = (function (){var statearr_29689 = state_29679;
(statearr_29689[(9)] = inst_29672);

return statearr_29689;
})();
var statearr_29690_29734 = state_29679__$1;
(statearr_29690_29734[(2)] = null);

(statearr_29690_29734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (13))){
var inst_29634 = (state_29679[(10)]);
var inst_29636 = cljs.core.chunked_seq_QMARK_.call(null,inst_29634);
var state_29679__$1 = state_29679;
if(inst_29636){
var statearr_29691_29735 = state_29679__$1;
(statearr_29691_29735[(1)] = (16));

} else {
var statearr_29692_29736 = state_29679__$1;
(statearr_29692_29736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (22))){
var inst_29664 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29664)){
var statearr_29693_29737 = state_29679__$1;
(statearr_29693_29737[(1)] = (23));

} else {
var statearr_29694_29738 = state_29679__$1;
(statearr_29694_29738[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (6))){
var inst_29660 = (state_29679[(11)]);
var inst_29658 = (state_29679[(7)]);
var inst_29610 = (state_29679[(8)]);
var inst_29658__$1 = topic_fn.call(null,inst_29610);
var inst_29659 = cljs.core.deref.call(null,mults);
var inst_29660__$1 = cljs.core.get.call(null,inst_29659,inst_29658__$1);
var state_29679__$1 = (function (){var statearr_29695 = state_29679;
(statearr_29695[(11)] = inst_29660__$1);

(statearr_29695[(7)] = inst_29658__$1);

return statearr_29695;
})();
if(cljs.core.truth_(inst_29660__$1)){
var statearr_29696_29739 = state_29679__$1;
(statearr_29696_29739[(1)] = (19));

} else {
var statearr_29697_29740 = state_29679__$1;
(statearr_29697_29740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (25))){
var inst_29669 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29698_29741 = state_29679__$1;
(statearr_29698_29741[(2)] = inst_29669);

(statearr_29698_29741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (17))){
var inst_29634 = (state_29679[(10)]);
var inst_29643 = cljs.core.first.call(null,inst_29634);
var inst_29644 = cljs.core.async.muxch_STAR_.call(null,inst_29643);
var inst_29645 = cljs.core.async.close_BANG_.call(null,inst_29644);
var inst_29646 = cljs.core.next.call(null,inst_29634);
var inst_29620 = inst_29646;
var inst_29621 = null;
var inst_29622 = (0);
var inst_29623 = (0);
var state_29679__$1 = (function (){var statearr_29699 = state_29679;
(statearr_29699[(12)] = inst_29623);

(statearr_29699[(13)] = inst_29620);

(statearr_29699[(14)] = inst_29645);

(statearr_29699[(15)] = inst_29622);

(statearr_29699[(16)] = inst_29621);

return statearr_29699;
})();
var statearr_29700_29742 = state_29679__$1;
(statearr_29700_29742[(2)] = null);

(statearr_29700_29742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (3))){
var inst_29677 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29679__$1,inst_29677);
} else {
if((state_val_29680 === (12))){
var inst_29654 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29701_29743 = state_29679__$1;
(statearr_29701_29743[(2)] = inst_29654);

(statearr_29701_29743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (2))){
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29679__$1,(4),ch);
} else {
if((state_val_29680 === (23))){
var state_29679__$1 = state_29679;
var statearr_29702_29744 = state_29679__$1;
(statearr_29702_29744[(2)] = null);

(statearr_29702_29744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (19))){
var inst_29660 = (state_29679[(11)]);
var inst_29610 = (state_29679[(8)]);
var inst_29662 = cljs.core.async.muxch_STAR_.call(null,inst_29660);
var state_29679__$1 = state_29679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29679__$1,(22),inst_29662,inst_29610);
} else {
if((state_val_29680 === (11))){
var inst_29620 = (state_29679[(13)]);
var inst_29634 = (state_29679[(10)]);
var inst_29634__$1 = cljs.core.seq.call(null,inst_29620);
var state_29679__$1 = (function (){var statearr_29703 = state_29679;
(statearr_29703[(10)] = inst_29634__$1);

return statearr_29703;
})();
if(inst_29634__$1){
var statearr_29704_29745 = state_29679__$1;
(statearr_29704_29745[(1)] = (13));

} else {
var statearr_29705_29746 = state_29679__$1;
(statearr_29705_29746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (9))){
var inst_29656 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29706_29747 = state_29679__$1;
(statearr_29706_29747[(2)] = inst_29656);

(statearr_29706_29747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (5))){
var inst_29617 = cljs.core.deref.call(null,mults);
var inst_29618 = cljs.core.vals.call(null,inst_29617);
var inst_29619 = cljs.core.seq.call(null,inst_29618);
var inst_29620 = inst_29619;
var inst_29621 = null;
var inst_29622 = (0);
var inst_29623 = (0);
var state_29679__$1 = (function (){var statearr_29707 = state_29679;
(statearr_29707[(12)] = inst_29623);

(statearr_29707[(13)] = inst_29620);

(statearr_29707[(15)] = inst_29622);

(statearr_29707[(16)] = inst_29621);

return statearr_29707;
})();
var statearr_29708_29748 = state_29679__$1;
(statearr_29708_29748[(2)] = null);

(statearr_29708_29748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (14))){
var state_29679__$1 = state_29679;
var statearr_29712_29749 = state_29679__$1;
(statearr_29712_29749[(2)] = null);

(statearr_29712_29749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (16))){
var inst_29634 = (state_29679[(10)]);
var inst_29638 = cljs.core.chunk_first.call(null,inst_29634);
var inst_29639 = cljs.core.chunk_rest.call(null,inst_29634);
var inst_29640 = cljs.core.count.call(null,inst_29638);
var inst_29620 = inst_29639;
var inst_29621 = inst_29638;
var inst_29622 = inst_29640;
var inst_29623 = (0);
var state_29679__$1 = (function (){var statearr_29713 = state_29679;
(statearr_29713[(12)] = inst_29623);

(statearr_29713[(13)] = inst_29620);

(statearr_29713[(15)] = inst_29622);

(statearr_29713[(16)] = inst_29621);

return statearr_29713;
})();
var statearr_29714_29750 = state_29679__$1;
(statearr_29714_29750[(2)] = null);

(statearr_29714_29750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (10))){
var inst_29623 = (state_29679[(12)]);
var inst_29620 = (state_29679[(13)]);
var inst_29622 = (state_29679[(15)]);
var inst_29621 = (state_29679[(16)]);
var inst_29628 = cljs.core._nth.call(null,inst_29621,inst_29623);
var inst_29629 = cljs.core.async.muxch_STAR_.call(null,inst_29628);
var inst_29630 = cljs.core.async.close_BANG_.call(null,inst_29629);
var inst_29631 = (inst_29623 + (1));
var tmp29709 = inst_29620;
var tmp29710 = inst_29622;
var tmp29711 = inst_29621;
var inst_29620__$1 = tmp29709;
var inst_29621__$1 = tmp29711;
var inst_29622__$1 = tmp29710;
var inst_29623__$1 = inst_29631;
var state_29679__$1 = (function (){var statearr_29715 = state_29679;
(statearr_29715[(17)] = inst_29630);

(statearr_29715[(12)] = inst_29623__$1);

(statearr_29715[(13)] = inst_29620__$1);

(statearr_29715[(15)] = inst_29622__$1);

(statearr_29715[(16)] = inst_29621__$1);

return statearr_29715;
})();
var statearr_29716_29751 = state_29679__$1;
(statearr_29716_29751[(2)] = null);

(statearr_29716_29751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (18))){
var inst_29649 = (state_29679[(2)]);
var state_29679__$1 = state_29679;
var statearr_29717_29752 = state_29679__$1;
(statearr_29717_29752[(2)] = inst_29649);

(statearr_29717_29752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29680 === (8))){
var inst_29623 = (state_29679[(12)]);
var inst_29622 = (state_29679[(15)]);
var inst_29625 = (inst_29623 < inst_29622);
var inst_29626 = inst_29625;
var state_29679__$1 = state_29679;
if(cljs.core.truth_(inst_29626)){
var statearr_29718_29753 = state_29679__$1;
(statearr_29718_29753[(1)] = (10));

} else {
var statearr_29719_29754 = state_29679__$1;
(statearr_29719_29754[(1)] = (11));

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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_29720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29720[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_29720[(1)] = (1));

return statearr_29720;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_29679){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29721){var ex__28453__auto__ = e29721;
var statearr_29722_29755 = state_29679;
(statearr_29722_29755[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29679[(4)]))){
var statearr_29723_29756 = state_29679;
(statearr_29723_29756[(1)] = cljs.core.first.call(null,(state_29679[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29757 = state_29679;
state_29679 = G__29757;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_29679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_29679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29724 = f__28524__auto__.call(null);
(statearr_29724[(6)] = c__28523__auto___29726);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var G__29759 = arguments.length;
switch (G__29759) {
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
var G__29762 = arguments.length;
switch (G__29762) {
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
var G__29765 = arguments.length;
switch (G__29765) {
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
var c__28523__auto___29843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (7))){
var state_29808__$1 = state_29808;
var statearr_29810_29844 = state_29808__$1;
(statearr_29810_29844[(2)] = null);

(statearr_29810_29844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (1))){
var state_29808__$1 = state_29808;
var statearr_29811_29845 = state_29808__$1;
(statearr_29811_29845[(2)] = null);

(statearr_29811_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (4))){
var inst_29769 = (state_29808[(7)]);
var inst_29768 = (state_29808[(8)]);
var inst_29771 = (inst_29769 < inst_29768);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29771)){
var statearr_29812_29846 = state_29808__$1;
(statearr_29812_29846[(1)] = (6));

} else {
var statearr_29813_29847 = state_29808__$1;
(statearr_29813_29847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (15))){
var inst_29794 = (state_29808[(9)]);
var inst_29799 = cljs.core.apply.call(null,f,inst_29794);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29808__$1,(17),out,inst_29799);
} else {
if((state_val_29809 === (13))){
var inst_29794 = (state_29808[(9)]);
var inst_29794__$1 = (state_29808[(2)]);
var inst_29795 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29794__$1);
var state_29808__$1 = (function (){var statearr_29814 = state_29808;
(statearr_29814[(9)] = inst_29794__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29795)){
var statearr_29815_29848 = state_29808__$1;
(statearr_29815_29848[(1)] = (14));

} else {
var statearr_29816_29849 = state_29808__$1;
(statearr_29816_29849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (6))){
var state_29808__$1 = state_29808;
var statearr_29817_29850 = state_29808__$1;
(statearr_29817_29850[(2)] = null);

(statearr_29817_29850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (17))){
var inst_29801 = (state_29808[(2)]);
var state_29808__$1 = (function (){var statearr_29819 = state_29808;
(statearr_29819[(10)] = inst_29801);

return statearr_29819;
})();
var statearr_29820_29851 = state_29808__$1;
(statearr_29820_29851[(2)] = null);

(statearr_29820_29851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (3))){
var inst_29806 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else {
if((state_val_29809 === (12))){
var _ = (function (){var statearr_29821 = state_29808;
(statearr_29821[(4)] = cljs.core.rest.call(null,(state_29808[(4)])));

return statearr_29821;
})();
var state_29808__$1 = state_29808;
var ex29818 = (state_29808__$1[(2)]);
var statearr_29822_29852 = state_29808__$1;
(statearr_29822_29852[(5)] = ex29818);


if((ex29818 instanceof Object)){
var statearr_29823_29853 = state_29808__$1;
(statearr_29823_29853[(1)] = (11));

(statearr_29823_29853[(5)] = null);

} else {
throw ex29818;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (2))){
var inst_29767 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29768 = cnt;
var inst_29769 = (0);
var state_29808__$1 = (function (){var statearr_29824 = state_29808;
(statearr_29824[(7)] = inst_29769);

(statearr_29824[(11)] = inst_29767);

(statearr_29824[(8)] = inst_29768);

return statearr_29824;
})();
var statearr_29825_29854 = state_29808__$1;
(statearr_29825_29854[(2)] = null);

(statearr_29825_29854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (11))){
var inst_29773 = (state_29808[(2)]);
var inst_29774 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29808__$1 = (function (){var statearr_29826 = state_29808;
(statearr_29826[(12)] = inst_29773);

return statearr_29826;
})();
var statearr_29827_29855 = state_29808__$1;
(statearr_29827_29855[(2)] = inst_29774);

(statearr_29827_29855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (9))){
var inst_29769 = (state_29808[(7)]);
var _ = (function (){var statearr_29828 = state_29808;
(statearr_29828[(4)] = cljs.core.cons.call(null,(12),(state_29808[(4)])));

return statearr_29828;
})();
var inst_29780 = chs__$1.call(null,inst_29769);
var inst_29781 = done.call(null,inst_29769);
var inst_29782 = cljs.core.async.take_BANG_.call(null,inst_29780,inst_29781);
var ___$1 = (function (){var statearr_29829 = state_29808;
(statearr_29829[(4)] = cljs.core.rest.call(null,(state_29808[(4)])));

return statearr_29829;
})();
var state_29808__$1 = state_29808;
var statearr_29830_29856 = state_29808__$1;
(statearr_29830_29856[(2)] = inst_29782);

(statearr_29830_29856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (5))){
var inst_29792 = (state_29808[(2)]);
var state_29808__$1 = (function (){var statearr_29831 = state_29808;
(statearr_29831[(13)] = inst_29792);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(13),dchan);
} else {
if((state_val_29809 === (14))){
var inst_29797 = cljs.core.async.close_BANG_.call(null,out);
var state_29808__$1 = state_29808;
var statearr_29832_29857 = state_29808__$1;
(statearr_29832_29857[(2)] = inst_29797);

(statearr_29832_29857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (16))){
var inst_29804 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29833_29858 = state_29808__$1;
(statearr_29833_29858[(2)] = inst_29804);

(statearr_29833_29858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (10))){
var inst_29769 = (state_29808[(7)]);
var inst_29785 = (state_29808[(2)]);
var inst_29786 = (inst_29769 + (1));
var inst_29769__$1 = inst_29786;
var state_29808__$1 = (function (){var statearr_29834 = state_29808;
(statearr_29834[(7)] = inst_29769__$1);

(statearr_29834[(14)] = inst_29785);

return statearr_29834;
})();
var statearr_29835_29859 = state_29808__$1;
(statearr_29835_29859[(2)] = null);

(statearr_29835_29859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (8))){
var inst_29790 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29836_29860 = state_29808__$1;
(statearr_29836_29860[(2)] = inst_29790);

(statearr_29836_29860[(1)] = (5));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_29837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29837[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_29837[(1)] = (1));

return statearr_29837;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_29808){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29838){var ex__28453__auto__ = e29838;
var statearr_29839_29861 = state_29808;
(statearr_29839_29861[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29808[(4)]))){
var statearr_29840_29862 = state_29808;
(statearr_29840_29862[(1)] = cljs.core.first.call(null,(state_29808[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29863 = state_29808;
state_29808 = G__29863;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29841 = f__28524__auto__.call(null);
(statearr_29841[(6)] = c__28523__auto___29843);

return statearr_29841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var G__29866 = arguments.length;
switch (G__29866) {
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
var c__28523__auto___29921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29898){
var state_val_29899 = (state_29898[(1)]);
if((state_val_29899 === (7))){
var inst_29878 = (state_29898[(7)]);
var inst_29877 = (state_29898[(8)]);
var inst_29877__$1 = (state_29898[(2)]);
var inst_29878__$1 = cljs.core.nth.call(null,inst_29877__$1,(0),null);
var inst_29879 = cljs.core.nth.call(null,inst_29877__$1,(1),null);
var inst_29880 = (inst_29878__$1 == null);
var state_29898__$1 = (function (){var statearr_29900 = state_29898;
(statearr_29900[(7)] = inst_29878__$1);

(statearr_29900[(9)] = inst_29879);

(statearr_29900[(8)] = inst_29877__$1);

return statearr_29900;
})();
if(cljs.core.truth_(inst_29880)){
var statearr_29901_29922 = state_29898__$1;
(statearr_29901_29922[(1)] = (8));

} else {
var statearr_29902_29923 = state_29898__$1;
(statearr_29902_29923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (1))){
var inst_29867 = cljs.core.vec.call(null,chs);
var inst_29868 = inst_29867;
var state_29898__$1 = (function (){var statearr_29903 = state_29898;
(statearr_29903[(10)] = inst_29868);

return statearr_29903;
})();
var statearr_29904_29924 = state_29898__$1;
(statearr_29904_29924[(2)] = null);

(statearr_29904_29924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (4))){
var inst_29868 = (state_29898[(10)]);
var state_29898__$1 = state_29898;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29898__$1,(7),inst_29868);
} else {
if((state_val_29899 === (6))){
var inst_29894 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29905_29925 = state_29898__$1;
(statearr_29905_29925[(2)] = inst_29894);

(statearr_29905_29925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (3))){
var inst_29896 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29898__$1,inst_29896);
} else {
if((state_val_29899 === (2))){
var inst_29868 = (state_29898[(10)]);
var inst_29870 = cljs.core.count.call(null,inst_29868);
var inst_29871 = (inst_29870 > (0));
var state_29898__$1 = state_29898;
if(cljs.core.truth_(inst_29871)){
var statearr_29907_29926 = state_29898__$1;
(statearr_29907_29926[(1)] = (4));

} else {
var statearr_29908_29927 = state_29898__$1;
(statearr_29908_29927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (11))){
var inst_29868 = (state_29898[(10)]);
var inst_29887 = (state_29898[(2)]);
var tmp29906 = inst_29868;
var inst_29868__$1 = tmp29906;
var state_29898__$1 = (function (){var statearr_29909 = state_29898;
(statearr_29909[(11)] = inst_29887);

(statearr_29909[(10)] = inst_29868__$1);

return statearr_29909;
})();
var statearr_29910_29928 = state_29898__$1;
(statearr_29910_29928[(2)] = null);

(statearr_29910_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (9))){
var inst_29878 = (state_29898[(7)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(11),out,inst_29878);
} else {
if((state_val_29899 === (5))){
var inst_29892 = cljs.core.async.close_BANG_.call(null,out);
var state_29898__$1 = state_29898;
var statearr_29911_29929 = state_29898__$1;
(statearr_29911_29929[(2)] = inst_29892);

(statearr_29911_29929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (10))){
var inst_29890 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29912_29930 = state_29898__$1;
(statearr_29912_29930[(2)] = inst_29890);

(statearr_29912_29930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (8))){
var inst_29878 = (state_29898[(7)]);
var inst_29879 = (state_29898[(9)]);
var inst_29877 = (state_29898[(8)]);
var inst_29868 = (state_29898[(10)]);
var inst_29882 = (function (){var cs = inst_29868;
var vec__29873 = inst_29877;
var v = inst_29878;
var c = inst_29879;
return (function (p1__29864_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29864_SHARP_);
});
})();
var inst_29883 = cljs.core.filterv.call(null,inst_29882,inst_29868);
var inst_29868__$1 = inst_29883;
var state_29898__$1 = (function (){var statearr_29913 = state_29898;
(statearr_29913[(10)] = inst_29868__$1);

return statearr_29913;
})();
var statearr_29914_29931 = state_29898__$1;
(statearr_29914_29931[(2)] = null);

(statearr_29914_29931[(1)] = (2));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29915[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_29898){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29916){var ex__28453__auto__ = e29916;
var statearr_29917_29932 = state_29898;
(statearr_29917_29932[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29898[(4)]))){
var statearr_29918_29933 = state_29898;
(statearr_29918_29933[(1)] = cljs.core.first.call(null,(state_29898[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29934 = state_29898;
state_29898 = G__29934;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_29898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_29898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29919 = f__28524__auto__.call(null);
(statearr_29919[(6)] = c__28523__auto___29921);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var G__29936 = arguments.length;
switch (G__29936) {
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
var c__28523__auto___29982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_29960){
var state_val_29961 = (state_29960[(1)]);
if((state_val_29961 === (7))){
var inst_29942 = (state_29960[(7)]);
var inst_29942__$1 = (state_29960[(2)]);
var inst_29943 = (inst_29942__$1 == null);
var inst_29944 = cljs.core.not.call(null,inst_29943);
var state_29960__$1 = (function (){var statearr_29962 = state_29960;
(statearr_29962[(7)] = inst_29942__$1);

return statearr_29962;
})();
if(inst_29944){
var statearr_29963_29983 = state_29960__$1;
(statearr_29963_29983[(1)] = (8));

} else {
var statearr_29964_29984 = state_29960__$1;
(statearr_29964_29984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (1))){
var inst_29937 = (0);
var state_29960__$1 = (function (){var statearr_29965 = state_29960;
(statearr_29965[(8)] = inst_29937);

return statearr_29965;
})();
var statearr_29966_29985 = state_29960__$1;
(statearr_29966_29985[(2)] = null);

(statearr_29966_29985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (4))){
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29960__$1,(7),ch);
} else {
if((state_val_29961 === (6))){
var inst_29955 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
var statearr_29967_29986 = state_29960__$1;
(statearr_29967_29986[(2)] = inst_29955);

(statearr_29967_29986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (3))){
var inst_29957 = (state_29960[(2)]);
var inst_29958 = cljs.core.async.close_BANG_.call(null,out);
var state_29960__$1 = (function (){var statearr_29968 = state_29960;
(statearr_29968[(9)] = inst_29957);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29960__$1,inst_29958);
} else {
if((state_val_29961 === (2))){
var inst_29937 = (state_29960[(8)]);
var inst_29939 = (inst_29937 < n);
var state_29960__$1 = state_29960;
if(cljs.core.truth_(inst_29939)){
var statearr_29969_29987 = state_29960__$1;
(statearr_29969_29987[(1)] = (4));

} else {
var statearr_29970_29988 = state_29960__$1;
(statearr_29970_29988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (11))){
var inst_29937 = (state_29960[(8)]);
var inst_29947 = (state_29960[(2)]);
var inst_29948 = (inst_29937 + (1));
var inst_29937__$1 = inst_29948;
var state_29960__$1 = (function (){var statearr_29971 = state_29960;
(statearr_29971[(10)] = inst_29947);

(statearr_29971[(8)] = inst_29937__$1);

return statearr_29971;
})();
var statearr_29972_29989 = state_29960__$1;
(statearr_29972_29989[(2)] = null);

(statearr_29972_29989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (9))){
var state_29960__$1 = state_29960;
var statearr_29973_29990 = state_29960__$1;
(statearr_29973_29990[(2)] = null);

(statearr_29973_29990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (5))){
var state_29960__$1 = state_29960;
var statearr_29974_29991 = state_29960__$1;
(statearr_29974_29991[(2)] = null);

(statearr_29974_29991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (10))){
var inst_29952 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
var statearr_29975_29992 = state_29960__$1;
(statearr_29975_29992[(2)] = inst_29952);

(statearr_29975_29992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (8))){
var inst_29942 = (state_29960[(7)]);
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29960__$1,(11),out,inst_29942);
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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_29976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29976[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_29976[(1)] = (1));

return statearr_29976;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_29960){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_29960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e29977){var ex__28453__auto__ = e29977;
var statearr_29978_29993 = state_29960;
(statearr_29978_29993[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_29960[(4)]))){
var statearr_29979_29994 = state_29960;
(statearr_29979_29994[(1)] = cljs.core.first.call(null,(state_29960[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29995 = state_29960;
state_29960 = G__29995;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_29960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_29960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_29980 = f__28524__auto__.call(null);
(statearr_29980[(6)] = c__28523__auto___29982);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29997 = (function (f,ch,meta29998){
this.f = f;
this.ch = ch;
this.meta29998 = meta29998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29999,meta29998__$1){
var self__ = this;
var _29999__$1 = this;
return (new cljs.core.async.t_cljs$core$async29997(self__.f,self__.ch,meta29998__$1));
}));

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29999){
var self__ = this;
var _29999__$1 = this;
return self__.meta29998;
}));

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30000 = (function (f,ch,meta29998,_,fn1,meta30001){
this.f = f;
this.ch = ch;
this.meta29998 = meta29998;
this._ = _;
this.fn1 = fn1;
this.meta30001 = meta30001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30002,meta30001__$1){
var self__ = this;
var _30002__$1 = this;
return (new cljs.core.async.t_cljs$core$async30000(self__.f,self__.ch,self__.meta29998,self__._,self__.fn1,meta30001__$1));
}));

(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30002){
var self__ = this;
var _30002__$1 = this;
return self__.meta30001;
}));

(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__29996_SHARP_){
return f1.call(null,(((p1__29996_SHARP_ == null))?null:self__.f.call(null,p1__29996_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async30000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29998","meta29998",1340468328,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29997","cljs.core.async/t_cljs$core$async29997",-998292018,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30001","meta30001",1287873564,null)], null);
}));

(cljs.core.async.t_cljs$core$async30000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30000");

(cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async30000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30000.
 */
cljs.core.async.__GT_t_cljs$core$async30000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30000(f__$1,ch__$1,meta29998__$1,___$2,fn1__$1,meta30001){
return (new cljs.core.async.t_cljs$core$async30000(f__$1,ch__$1,meta29998__$1,___$2,fn1__$1,meta30001));
});

}

return (new cljs.core.async.t_cljs$core$async30000(self__.f,self__.ch,self__.meta29998,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29998","meta29998",1340468328,null)], null);
}));

(cljs.core.async.t_cljs$core$async29997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29997");

(cljs.core.async.t_cljs$core$async29997.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async29997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29997.
 */
cljs.core.async.__GT_t_cljs$core$async29997 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29997(f__$1,ch__$1,meta29998){
return (new cljs.core.async.t_cljs$core$async29997(f__$1,ch__$1,meta29998));
});

}

return (new cljs.core.async.t_cljs$core$async29997(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30003 = (function (f,ch,meta30004){
this.f = f;
this.ch = ch;
this.meta30004 = meta30004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30005,meta30004__$1){
var self__ = this;
var _30005__$1 = this;
return (new cljs.core.async.t_cljs$core$async30003(self__.f,self__.ch,meta30004__$1));
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30005){
var self__ = this;
var _30005__$1 = this;
return self__.meta30004;
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async30003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30004","meta30004",712511372,null)], null);
}));

(cljs.core.async.t_cljs$core$async30003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30003");

(cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async30003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30003.
 */
cljs.core.async.__GT_t_cljs$core$async30003 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30003(f__$1,ch__$1,meta30004){
return (new cljs.core.async.t_cljs$core$async30003(f__$1,ch__$1,meta30004));
});

}

return (new cljs.core.async.t_cljs$core$async30003(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30006 = (function (p,ch,meta30007){
this.p = p;
this.ch = ch;
this.meta30007 = meta30007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30008,meta30007__$1){
var self__ = this;
var _30008__$1 = this;
return (new cljs.core.async.t_cljs$core$async30006(self__.p,self__.ch,meta30007__$1));
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30008){
var self__ = this;
var _30008__$1 = this;
return self__.meta30007;
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30007","meta30007",1815563805,null)], null);
}));

(cljs.core.async.t_cljs$core$async30006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30006");

(cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.core.async/t_cljs$core$async30006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30006.
 */
cljs.core.async.__GT_t_cljs$core$async30006 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30006(p__$1,ch__$1,meta30007){
return (new cljs.core.async.t_cljs$core$async30006(p__$1,ch__$1,meta30007));
});

}

return (new cljs.core.async.t_cljs$core$async30006(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30010 = arguments.length;
switch (G__30010) {
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
var c__28523__auto___30051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30031){
var state_val_30032 = (state_30031[(1)]);
if((state_val_30032 === (7))){
var inst_30027 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30033_30052 = state_30031__$1;
(statearr_30033_30052[(2)] = inst_30027);

(statearr_30033_30052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (1))){
var state_30031__$1 = state_30031;
var statearr_30034_30053 = state_30031__$1;
(statearr_30034_30053[(2)] = null);

(statearr_30034_30053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (4))){
var inst_30013 = (state_30031[(7)]);
var inst_30013__$1 = (state_30031[(2)]);
var inst_30014 = (inst_30013__$1 == null);
var state_30031__$1 = (function (){var statearr_30035 = state_30031;
(statearr_30035[(7)] = inst_30013__$1);

return statearr_30035;
})();
if(cljs.core.truth_(inst_30014)){
var statearr_30036_30054 = state_30031__$1;
(statearr_30036_30054[(1)] = (5));

} else {
var statearr_30037_30055 = state_30031__$1;
(statearr_30037_30055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (6))){
var inst_30013 = (state_30031[(7)]);
var inst_30018 = p.call(null,inst_30013);
var state_30031__$1 = state_30031;
if(cljs.core.truth_(inst_30018)){
var statearr_30038_30056 = state_30031__$1;
(statearr_30038_30056[(1)] = (8));

} else {
var statearr_30039_30057 = state_30031__$1;
(statearr_30039_30057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (3))){
var inst_30029 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30031__$1,inst_30029);
} else {
if((state_val_30032 === (2))){
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30031__$1,(4),ch);
} else {
if((state_val_30032 === (11))){
var inst_30021 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30040_30058 = state_30031__$1;
(statearr_30040_30058[(2)] = inst_30021);

(statearr_30040_30058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (9))){
var state_30031__$1 = state_30031;
var statearr_30041_30059 = state_30031__$1;
(statearr_30041_30059[(2)] = null);

(statearr_30041_30059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (5))){
var inst_30016 = cljs.core.async.close_BANG_.call(null,out);
var state_30031__$1 = state_30031;
var statearr_30042_30060 = state_30031__$1;
(statearr_30042_30060[(2)] = inst_30016);

(statearr_30042_30060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (10))){
var inst_30024 = (state_30031[(2)]);
var state_30031__$1 = (function (){var statearr_30043 = state_30031;
(statearr_30043[(8)] = inst_30024);

return statearr_30043;
})();
var statearr_30044_30061 = state_30031__$1;
(statearr_30044_30061[(2)] = null);

(statearr_30044_30061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (8))){
var inst_30013 = (state_30031[(7)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30031__$1,(11),out,inst_30013);
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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_30045 = [null,null,null,null,null,null,null,null,null];
(statearr_30045[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_30045[(1)] = (1));

return statearr_30045;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_30031){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30046){var ex__28453__auto__ = e30046;
var statearr_30047_30062 = state_30031;
(statearr_30047_30062[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30031[(4)]))){
var statearr_30048_30063 = state_30031;
(statearr_30048_30063[(1)] = cljs.core.first.call(null,(state_30031[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_30031;
state_30031 = G__30064;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_30031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_30031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30049 = f__28524__auto__.call(null);
(statearr_30049[(6)] = c__28523__auto___30051);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30066 = arguments.length;
switch (G__30066) {
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30131_30170 = state_30129__$1;
(statearr_30131_30170[(2)] = inst_30125);

(statearr_30131_30170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (20))){
var inst_30095 = (state_30129[(7)]);
var inst_30106 = (state_30129[(2)]);
var inst_30107 = cljs.core.next.call(null,inst_30095);
var inst_30081 = inst_30107;
var inst_30082 = null;
var inst_30083 = (0);
var inst_30084 = (0);
var state_30129__$1 = (function (){var statearr_30132 = state_30129;
(statearr_30132[(8)] = inst_30083);

(statearr_30132[(9)] = inst_30082);

(statearr_30132[(10)] = inst_30081);

(statearr_30132[(11)] = inst_30084);

(statearr_30132[(12)] = inst_30106);

return statearr_30132;
})();
var statearr_30133_30171 = state_30129__$1;
(statearr_30133_30171[(2)] = null);

(statearr_30133_30171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30134_30172 = state_30129__$1;
(statearr_30134_30172[(2)] = null);

(statearr_30134_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (4))){
var inst_30070 = (state_30129[(13)]);
var inst_30070__$1 = (state_30129[(2)]);
var inst_30071 = (inst_30070__$1 == null);
var state_30129__$1 = (function (){var statearr_30135 = state_30129;
(statearr_30135[(13)] = inst_30070__$1);

return statearr_30135;
})();
if(cljs.core.truth_(inst_30071)){
var statearr_30136_30173 = state_30129__$1;
(statearr_30136_30173[(1)] = (5));

} else {
var statearr_30137_30174 = state_30129__$1;
(statearr_30137_30174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (15))){
var state_30129__$1 = state_30129;
var statearr_30141_30175 = state_30129__$1;
(statearr_30141_30175[(2)] = null);

(statearr_30141_30175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (21))){
var state_30129__$1 = state_30129;
var statearr_30142_30176 = state_30129__$1;
(statearr_30142_30176[(2)] = null);

(statearr_30142_30176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (13))){
var inst_30083 = (state_30129[(8)]);
var inst_30082 = (state_30129[(9)]);
var inst_30081 = (state_30129[(10)]);
var inst_30084 = (state_30129[(11)]);
var inst_30091 = (state_30129[(2)]);
var inst_30092 = (inst_30084 + (1));
var tmp30138 = inst_30083;
var tmp30139 = inst_30082;
var tmp30140 = inst_30081;
var inst_30081__$1 = tmp30140;
var inst_30082__$1 = tmp30139;
var inst_30083__$1 = tmp30138;
var inst_30084__$1 = inst_30092;
var state_30129__$1 = (function (){var statearr_30143 = state_30129;
(statearr_30143[(8)] = inst_30083__$1);

(statearr_30143[(9)] = inst_30082__$1);

(statearr_30143[(10)] = inst_30081__$1);

(statearr_30143[(11)] = inst_30084__$1);

(statearr_30143[(14)] = inst_30091);

return statearr_30143;
})();
var statearr_30144_30177 = state_30129__$1;
(statearr_30144_30177[(2)] = null);

(statearr_30144_30177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (22))){
var state_30129__$1 = state_30129;
var statearr_30145_30178 = state_30129__$1;
(statearr_30145_30178[(2)] = null);

(statearr_30145_30178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (6))){
var inst_30070 = (state_30129[(13)]);
var inst_30079 = f.call(null,inst_30070);
var inst_30080 = cljs.core.seq.call(null,inst_30079);
var inst_30081 = inst_30080;
var inst_30082 = null;
var inst_30083 = (0);
var inst_30084 = (0);
var state_30129__$1 = (function (){var statearr_30146 = state_30129;
(statearr_30146[(8)] = inst_30083);

(statearr_30146[(9)] = inst_30082);

(statearr_30146[(10)] = inst_30081);

(statearr_30146[(11)] = inst_30084);

return statearr_30146;
})();
var statearr_30147_30179 = state_30129__$1;
(statearr_30147_30179[(2)] = null);

(statearr_30147_30179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (17))){
var inst_30095 = (state_30129[(7)]);
var inst_30099 = cljs.core.chunk_first.call(null,inst_30095);
var inst_30100 = cljs.core.chunk_rest.call(null,inst_30095);
var inst_30101 = cljs.core.count.call(null,inst_30099);
var inst_30081 = inst_30100;
var inst_30082 = inst_30099;
var inst_30083 = inst_30101;
var inst_30084 = (0);
var state_30129__$1 = (function (){var statearr_30148 = state_30129;
(statearr_30148[(8)] = inst_30083);

(statearr_30148[(9)] = inst_30082);

(statearr_30148[(10)] = inst_30081);

(statearr_30148[(11)] = inst_30084);

return statearr_30148;
})();
var statearr_30149_30180 = state_30129__$1;
(statearr_30149_30180[(2)] = null);

(statearr_30149_30180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (12))){
var inst_30115 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30150_30181 = state_30129__$1;
(statearr_30150_30181[(2)] = inst_30115);

(statearr_30150_30181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30129__$1,(4),in$);
} else {
if((state_val_30130 === (23))){
var inst_30123 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30151_30182 = state_30129__$1;
(statearr_30151_30182[(2)] = inst_30123);

(statearr_30151_30182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (19))){
var inst_30110 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30152_30183 = state_30129__$1;
(statearr_30152_30183[(2)] = inst_30110);

(statearr_30152_30183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (11))){
var inst_30095 = (state_30129[(7)]);
var inst_30081 = (state_30129[(10)]);
var inst_30095__$1 = cljs.core.seq.call(null,inst_30081);
var state_30129__$1 = (function (){var statearr_30153 = state_30129;
(statearr_30153[(7)] = inst_30095__$1);

return statearr_30153;
})();
if(inst_30095__$1){
var statearr_30154_30184 = state_30129__$1;
(statearr_30154_30184[(1)] = (14));

} else {
var statearr_30155_30185 = state_30129__$1;
(statearr_30155_30185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (9))){
var inst_30117 = (state_30129[(2)]);
var inst_30118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30129__$1 = (function (){var statearr_30156 = state_30129;
(statearr_30156[(15)] = inst_30117);

return statearr_30156;
})();
if(cljs.core.truth_(inst_30118)){
var statearr_30157_30186 = state_30129__$1;
(statearr_30157_30186[(1)] = (21));

} else {
var statearr_30158_30187 = state_30129__$1;
(statearr_30158_30187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (5))){
var inst_30073 = cljs.core.async.close_BANG_.call(null,out);
var state_30129__$1 = state_30129;
var statearr_30159_30188 = state_30129__$1;
(statearr_30159_30188[(2)] = inst_30073);

(statearr_30159_30188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (14))){
var inst_30095 = (state_30129[(7)]);
var inst_30097 = cljs.core.chunked_seq_QMARK_.call(null,inst_30095);
var state_30129__$1 = state_30129;
if(inst_30097){
var statearr_30160_30189 = state_30129__$1;
(statearr_30160_30189[(1)] = (17));

} else {
var statearr_30161_30190 = state_30129__$1;
(statearr_30161_30190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (16))){
var inst_30113 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30162_30191 = state_30129__$1;
(statearr_30162_30191[(2)] = inst_30113);

(statearr_30162_30191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (10))){
var inst_30082 = (state_30129[(9)]);
var inst_30084 = (state_30129[(11)]);
var inst_30089 = cljs.core._nth.call(null,inst_30082,inst_30084);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30129__$1,(13),out,inst_30089);
} else {
if((state_val_30130 === (18))){
var inst_30095 = (state_30129[(7)]);
var inst_30104 = cljs.core.first.call(null,inst_30095);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30129__$1,(20),out,inst_30104);
} else {
if((state_val_30130 === (8))){
var inst_30083 = (state_30129[(8)]);
var inst_30084 = (state_30129[(11)]);
var inst_30086 = (inst_30084 < inst_30083);
var inst_30087 = inst_30086;
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30087)){
var statearr_30163_30192 = state_30129__$1;
(statearr_30163_30192[(1)] = (10));

} else {
var statearr_30164_30193 = state_30129__$1;
(statearr_30164_30193[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____0 = (function (){
var statearr_30165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30165[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__);

(statearr_30165[(1)] = (1));

return statearr_30165;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____1 = (function (state_30129){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30166){var ex__28453__auto__ = e30166;
var statearr_30167_30194 = state_30129;
(statearr_30167_30194[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30129[(4)]))){
var statearr_30168_30195 = state_30129;
(statearr_30168_30195[(1)] = cljs.core.first.call(null,(state_30129[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30196 = state_30129;
state_30129 = G__30196;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28450__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30169 = f__28524__auto__.call(null);
(statearr_30169[(6)] = c__28523__auto__);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30198 = arguments.length;
switch (G__30198) {
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
var G__30201 = arguments.length;
switch (G__30201) {
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
var G__30204 = arguments.length;
switch (G__30204) {
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
var c__28523__auto___30252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (7))){
var inst_30223 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30230_30253 = state_30228__$1;
(statearr_30230_30253[(2)] = inst_30223);

(statearr_30230_30253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (1))){
var inst_30205 = null;
var state_30228__$1 = (function (){var statearr_30231 = state_30228;
(statearr_30231[(7)] = inst_30205);

return statearr_30231;
})();
var statearr_30232_30254 = state_30228__$1;
(statearr_30232_30254[(2)] = null);

(statearr_30232_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (4))){
var inst_30208 = (state_30228[(8)]);
var inst_30208__$1 = (state_30228[(2)]);
var inst_30209 = (inst_30208__$1 == null);
var inst_30210 = cljs.core.not.call(null,inst_30209);
var state_30228__$1 = (function (){var statearr_30233 = state_30228;
(statearr_30233[(8)] = inst_30208__$1);

return statearr_30233;
})();
if(inst_30210){
var statearr_30234_30255 = state_30228__$1;
(statearr_30234_30255[(1)] = (5));

} else {
var statearr_30235_30256 = state_30228__$1;
(statearr_30235_30256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (6))){
var state_30228__$1 = state_30228;
var statearr_30236_30257 = state_30228__$1;
(statearr_30236_30257[(2)] = null);

(statearr_30236_30257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (3))){
var inst_30225 = (state_30228[(2)]);
var inst_30226 = cljs.core.async.close_BANG_.call(null,out);
var state_30228__$1 = (function (){var statearr_30237 = state_30228;
(statearr_30237[(9)] = inst_30225);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30228__$1,inst_30226);
} else {
if((state_val_30229 === (2))){
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30228__$1,(4),ch);
} else {
if((state_val_30229 === (11))){
var inst_30208 = (state_30228[(8)]);
var inst_30217 = (state_30228[(2)]);
var inst_30205 = inst_30208;
var state_30228__$1 = (function (){var statearr_30238 = state_30228;
(statearr_30238[(7)] = inst_30205);

(statearr_30238[(10)] = inst_30217);

return statearr_30238;
})();
var statearr_30239_30258 = state_30228__$1;
(statearr_30239_30258[(2)] = null);

(statearr_30239_30258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (9))){
var inst_30208 = (state_30228[(8)]);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30228__$1,(11),out,inst_30208);
} else {
if((state_val_30229 === (5))){
var inst_30208 = (state_30228[(8)]);
var inst_30205 = (state_30228[(7)]);
var inst_30212 = cljs.core._EQ_.call(null,inst_30208,inst_30205);
var state_30228__$1 = state_30228;
if(inst_30212){
var statearr_30241_30259 = state_30228__$1;
(statearr_30241_30259[(1)] = (8));

} else {
var statearr_30242_30260 = state_30228__$1;
(statearr_30242_30260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (10))){
var inst_30220 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30243_30261 = state_30228__$1;
(statearr_30243_30261[(2)] = inst_30220);

(statearr_30243_30261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (8))){
var inst_30205 = (state_30228[(7)]);
var tmp30240 = inst_30205;
var inst_30205__$1 = tmp30240;
var state_30228__$1 = (function (){var statearr_30244 = state_30228;
(statearr_30244[(7)] = inst_30205__$1);

return statearr_30244;
})();
var statearr_30245_30262 = state_30228__$1;
(statearr_30245_30262[(2)] = null);

(statearr_30245_30262[(1)] = (2));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_30246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30246[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_30246[(1)] = (1));

return statearr_30246;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_30228){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30247){var ex__28453__auto__ = e30247;
var statearr_30248_30263 = state_30228;
(statearr_30248_30263[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30228[(4)]))){
var statearr_30249_30264 = state_30228;
(statearr_30249_30264[(1)] = cljs.core.first.call(null,(state_30228[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30265 = state_30228;
state_30228 = G__30265;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30250 = f__28524__auto__.call(null);
(statearr_30250[(6)] = c__28523__auto___30252);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30267 = arguments.length;
switch (G__30267) {
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
var c__28523__auto___30334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30305){
var state_val_30306 = (state_30305[(1)]);
if((state_val_30306 === (7))){
var inst_30301 = (state_30305[(2)]);
var state_30305__$1 = state_30305;
var statearr_30307_30335 = state_30305__$1;
(statearr_30307_30335[(2)] = inst_30301);

(statearr_30307_30335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (1))){
var inst_30268 = (new Array(n));
var inst_30269 = inst_30268;
var inst_30270 = (0);
var state_30305__$1 = (function (){var statearr_30308 = state_30305;
(statearr_30308[(7)] = inst_30269);

(statearr_30308[(8)] = inst_30270);

return statearr_30308;
})();
var statearr_30309_30336 = state_30305__$1;
(statearr_30309_30336[(2)] = null);

(statearr_30309_30336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (4))){
var inst_30273 = (state_30305[(9)]);
var inst_30273__$1 = (state_30305[(2)]);
var inst_30274 = (inst_30273__$1 == null);
var inst_30275 = cljs.core.not.call(null,inst_30274);
var state_30305__$1 = (function (){var statearr_30310 = state_30305;
(statearr_30310[(9)] = inst_30273__$1);

return statearr_30310;
})();
if(inst_30275){
var statearr_30311_30337 = state_30305__$1;
(statearr_30311_30337[(1)] = (5));

} else {
var statearr_30312_30338 = state_30305__$1;
(statearr_30312_30338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (15))){
var inst_30295 = (state_30305[(2)]);
var state_30305__$1 = state_30305;
var statearr_30313_30339 = state_30305__$1;
(statearr_30313_30339[(2)] = inst_30295);

(statearr_30313_30339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (13))){
var state_30305__$1 = state_30305;
var statearr_30314_30340 = state_30305__$1;
(statearr_30314_30340[(2)] = null);

(statearr_30314_30340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (6))){
var inst_30270 = (state_30305[(8)]);
var inst_30291 = (inst_30270 > (0));
var state_30305__$1 = state_30305;
if(cljs.core.truth_(inst_30291)){
var statearr_30315_30341 = state_30305__$1;
(statearr_30315_30341[(1)] = (12));

} else {
var statearr_30316_30342 = state_30305__$1;
(statearr_30316_30342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (3))){
var inst_30303 = (state_30305[(2)]);
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30305__$1,inst_30303);
} else {
if((state_val_30306 === (12))){
var inst_30269 = (state_30305[(7)]);
var inst_30293 = cljs.core.vec.call(null,inst_30269);
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30305__$1,(15),out,inst_30293);
} else {
if((state_val_30306 === (2))){
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30305__$1,(4),ch);
} else {
if((state_val_30306 === (11))){
var inst_30285 = (state_30305[(2)]);
var inst_30286 = (new Array(n));
var inst_30269 = inst_30286;
var inst_30270 = (0);
var state_30305__$1 = (function (){var statearr_30317 = state_30305;
(statearr_30317[(10)] = inst_30285);

(statearr_30317[(7)] = inst_30269);

(statearr_30317[(8)] = inst_30270);

return statearr_30317;
})();
var statearr_30318_30343 = state_30305__$1;
(statearr_30318_30343[(2)] = null);

(statearr_30318_30343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (9))){
var inst_30269 = (state_30305[(7)]);
var inst_30283 = cljs.core.vec.call(null,inst_30269);
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30305__$1,(11),out,inst_30283);
} else {
if((state_val_30306 === (5))){
var inst_30278 = (state_30305[(11)]);
var inst_30269 = (state_30305[(7)]);
var inst_30273 = (state_30305[(9)]);
var inst_30270 = (state_30305[(8)]);
var inst_30277 = (inst_30269[inst_30270] = inst_30273);
var inst_30278__$1 = (inst_30270 + (1));
var inst_30279 = (inst_30278__$1 < n);
var state_30305__$1 = (function (){var statearr_30319 = state_30305;
(statearr_30319[(11)] = inst_30278__$1);

(statearr_30319[(12)] = inst_30277);

return statearr_30319;
})();
if(cljs.core.truth_(inst_30279)){
var statearr_30320_30344 = state_30305__$1;
(statearr_30320_30344[(1)] = (8));

} else {
var statearr_30321_30345 = state_30305__$1;
(statearr_30321_30345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (14))){
var inst_30298 = (state_30305[(2)]);
var inst_30299 = cljs.core.async.close_BANG_.call(null,out);
var state_30305__$1 = (function (){var statearr_30323 = state_30305;
(statearr_30323[(13)] = inst_30298);

return statearr_30323;
})();
var statearr_30324_30346 = state_30305__$1;
(statearr_30324_30346[(2)] = inst_30299);

(statearr_30324_30346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (10))){
var inst_30289 = (state_30305[(2)]);
var state_30305__$1 = state_30305;
var statearr_30325_30347 = state_30305__$1;
(statearr_30325_30347[(2)] = inst_30289);

(statearr_30325_30347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30306 === (8))){
var inst_30278 = (state_30305[(11)]);
var inst_30269 = (state_30305[(7)]);
var tmp30322 = inst_30269;
var inst_30269__$1 = tmp30322;
var inst_30270 = inst_30278;
var state_30305__$1 = (function (){var statearr_30326 = state_30305;
(statearr_30326[(7)] = inst_30269__$1);

(statearr_30326[(8)] = inst_30270);

return statearr_30326;
})();
var statearr_30327_30348 = state_30305__$1;
(statearr_30327_30348[(2)] = null);

(statearr_30327_30348[(1)] = (2));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_30328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30328[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_30328[(1)] = (1));

return statearr_30328;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_30305){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30329){var ex__28453__auto__ = e30329;
var statearr_30330_30349 = state_30305;
(statearr_30330_30349[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30305[(4)]))){
var statearr_30331_30350 = state_30305;
(statearr_30331_30350[(1)] = cljs.core.first.call(null,(state_30305[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30351 = state_30305;
state_30305 = G__30351;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_30305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_30305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30332 = f__28524__auto__.call(null);
(statearr_30332[(6)] = c__28523__auto___30334);

return statearr_30332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30353 = arguments.length;
switch (G__30353) {
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
var c__28523__auto___30431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_30398){
var state_val_30399 = (state_30398[(1)]);
if((state_val_30399 === (7))){
var inst_30394 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30400_30432 = state_30398__$1;
(statearr_30400_30432[(2)] = inst_30394);

(statearr_30400_30432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (1))){
var inst_30354 = [];
var inst_30355 = inst_30354;
var inst_30356 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30398__$1 = (function (){var statearr_30401 = state_30398;
(statearr_30401[(7)] = inst_30356);

(statearr_30401[(8)] = inst_30355);

return statearr_30401;
})();
var statearr_30402_30433 = state_30398__$1;
(statearr_30402_30433[(2)] = null);

(statearr_30402_30433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (4))){
var inst_30359 = (state_30398[(9)]);
var inst_30359__$1 = (state_30398[(2)]);
var inst_30360 = (inst_30359__$1 == null);
var inst_30361 = cljs.core.not.call(null,inst_30360);
var state_30398__$1 = (function (){var statearr_30403 = state_30398;
(statearr_30403[(9)] = inst_30359__$1);

return statearr_30403;
})();
if(inst_30361){
var statearr_30404_30434 = state_30398__$1;
(statearr_30404_30434[(1)] = (5));

} else {
var statearr_30405_30435 = state_30398__$1;
(statearr_30405_30435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (15))){
var inst_30355 = (state_30398[(8)]);
var inst_30386 = cljs.core.vec.call(null,inst_30355);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30398__$1,(18),out,inst_30386);
} else {
if((state_val_30399 === (13))){
var inst_30381 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30406_30436 = state_30398__$1;
(statearr_30406_30436[(2)] = inst_30381);

(statearr_30406_30436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (6))){
var inst_30355 = (state_30398[(8)]);
var inst_30383 = inst_30355.length;
var inst_30384 = (inst_30383 > (0));
var state_30398__$1 = state_30398;
if(cljs.core.truth_(inst_30384)){
var statearr_30407_30437 = state_30398__$1;
(statearr_30407_30437[(1)] = (15));

} else {
var statearr_30408_30438 = state_30398__$1;
(statearr_30408_30438[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (17))){
var inst_30391 = (state_30398[(2)]);
var inst_30392 = cljs.core.async.close_BANG_.call(null,out);
var state_30398__$1 = (function (){var statearr_30409 = state_30398;
(statearr_30409[(10)] = inst_30391);

return statearr_30409;
})();
var statearr_30410_30439 = state_30398__$1;
(statearr_30410_30439[(2)] = inst_30392);

(statearr_30410_30439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (3))){
var inst_30396 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30398__$1,inst_30396);
} else {
if((state_val_30399 === (12))){
var inst_30355 = (state_30398[(8)]);
var inst_30374 = cljs.core.vec.call(null,inst_30355);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30398__$1,(14),out,inst_30374);
} else {
if((state_val_30399 === (2))){
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30398__$1,(4),ch);
} else {
if((state_val_30399 === (11))){
var inst_30359 = (state_30398[(9)]);
var inst_30355 = (state_30398[(8)]);
var inst_30363 = (state_30398[(11)]);
var inst_30371 = inst_30355.push(inst_30359);
var tmp30411 = inst_30355;
var inst_30355__$1 = tmp30411;
var inst_30356 = inst_30363;
var state_30398__$1 = (function (){var statearr_30412 = state_30398;
(statearr_30412[(7)] = inst_30356);

(statearr_30412[(8)] = inst_30355__$1);

(statearr_30412[(12)] = inst_30371);

return statearr_30412;
})();
var statearr_30413_30440 = state_30398__$1;
(statearr_30413_30440[(2)] = null);

(statearr_30413_30440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (9))){
var inst_30356 = (state_30398[(7)]);
var inst_30367 = cljs.core.keyword_identical_QMARK_.call(null,inst_30356,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30398__$1 = state_30398;
var statearr_30414_30441 = state_30398__$1;
(statearr_30414_30441[(2)] = inst_30367);

(statearr_30414_30441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (5))){
var inst_30356 = (state_30398[(7)]);
var inst_30359 = (state_30398[(9)]);
var inst_30363 = (state_30398[(11)]);
var inst_30364 = (state_30398[(13)]);
var inst_30363__$1 = f.call(null,inst_30359);
var inst_30364__$1 = cljs.core._EQ_.call(null,inst_30363__$1,inst_30356);
var state_30398__$1 = (function (){var statearr_30415 = state_30398;
(statearr_30415[(11)] = inst_30363__$1);

(statearr_30415[(13)] = inst_30364__$1);

return statearr_30415;
})();
if(inst_30364__$1){
var statearr_30416_30442 = state_30398__$1;
(statearr_30416_30442[(1)] = (8));

} else {
var statearr_30417_30443 = state_30398__$1;
(statearr_30417_30443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (14))){
var inst_30359 = (state_30398[(9)]);
var inst_30363 = (state_30398[(11)]);
var inst_30376 = (state_30398[(2)]);
var inst_30377 = [];
var inst_30378 = inst_30377.push(inst_30359);
var inst_30355 = inst_30377;
var inst_30356 = inst_30363;
var state_30398__$1 = (function (){var statearr_30418 = state_30398;
(statearr_30418[(7)] = inst_30356);

(statearr_30418[(14)] = inst_30378);

(statearr_30418[(15)] = inst_30376);

(statearr_30418[(8)] = inst_30355);

return statearr_30418;
})();
var statearr_30419_30444 = state_30398__$1;
(statearr_30419_30444[(2)] = null);

(statearr_30419_30444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (16))){
var state_30398__$1 = state_30398;
var statearr_30420_30445 = state_30398__$1;
(statearr_30420_30445[(2)] = null);

(statearr_30420_30445[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (10))){
var inst_30369 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
if(cljs.core.truth_(inst_30369)){
var statearr_30421_30446 = state_30398__$1;
(statearr_30421_30446[(1)] = (11));

} else {
var statearr_30422_30447 = state_30398__$1;
(statearr_30422_30447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (18))){
var inst_30388 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30423_30448 = state_30398__$1;
(statearr_30423_30448[(2)] = inst_30388);

(statearr_30423_30448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (8))){
var inst_30364 = (state_30398[(13)]);
var state_30398__$1 = state_30398;
var statearr_30424_30449 = state_30398__$1;
(statearr_30424_30449[(2)] = inst_30364);

(statearr_30424_30449[(1)] = (10));


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
var cljs$core$async$state_machine__28450__auto__ = null;
var cljs$core$async$state_machine__28450__auto____0 = (function (){
var statearr_30425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30425[(0)] = cljs$core$async$state_machine__28450__auto__);

(statearr_30425[(1)] = (1));

return statearr_30425;
});
var cljs$core$async$state_machine__28450__auto____1 = (function (state_30398){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_30398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e30426){var ex__28453__auto__ = e30426;
var statearr_30427_30450 = state_30398;
(statearr_30427_30450[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_30398[(4)]))){
var statearr_30428_30451 = state_30398;
(statearr_30428_30451[(1)] = cljs.core.first.call(null,(state_30398[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30452 = state_30398;
state_30398 = G__30452;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
cljs$core$async$state_machine__28450__auto__ = function(state_30398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28450__auto____1.call(this,state_30398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28450__auto____0;
cljs$core$async$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28450__auto____1;
return cljs$core$async$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_30429 = f__28524__auto__.call(null);
(statearr_30429[(6)] = c__28523__auto___30431);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1655379917434
