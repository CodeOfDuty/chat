// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26098__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26099__i = 0, G__26099__a = new Array(arguments.length -  0);
while (G__26099__i < G__26099__a.length) {G__26099__a[G__26099__i] = arguments[G__26099__i + 0]; ++G__26099__i;}
  args = new cljs.core.IndexedSeq(G__26099__a,0,null);
} 
return G__26098__delegate.call(this,args);};
G__26098.cljs$lang$maxFixedArity = 0;
G__26098.cljs$lang$applyTo = (function (arglist__26100){
var args = cljs.core.seq(arglist__26100);
return G__26098__delegate(args);
});
G__26098.cljs$core$IFn$_invoke$arity$variadic = G__26098__delegate;
return G__26098;
})()
);

(o.error = (function() { 
var G__26101__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26102__i = 0, G__26102__a = new Array(arguments.length -  0);
while (G__26102__i < G__26102__a.length) {G__26102__a[G__26102__i] = arguments[G__26102__i + 0]; ++G__26102__i;}
  args = new cljs.core.IndexedSeq(G__26102__a,0,null);
} 
return G__26101__delegate.call(this,args);};
G__26101.cljs$lang$maxFixedArity = 0;
G__26101.cljs$lang$applyTo = (function (arglist__26103){
var args = cljs.core.seq(arglist__26103);
return G__26101__delegate(args);
});
G__26101.cljs$core$IFn$_invoke$arity$variadic = G__26101__delegate;
return G__26101;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1655379913242
