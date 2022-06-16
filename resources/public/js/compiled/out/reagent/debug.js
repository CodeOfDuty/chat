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
var G__39458__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39459__i = 0, G__39459__a = new Array(arguments.length -  0);
while (G__39459__i < G__39459__a.length) {G__39459__a[G__39459__i] = arguments[G__39459__i + 0]; ++G__39459__i;}
  args = new cljs.core.IndexedSeq(G__39459__a,0,null);
} 
return G__39458__delegate.call(this,args);};
G__39458.cljs$lang$maxFixedArity = 0;
G__39458.cljs$lang$applyTo = (function (arglist__39460){
var args = cljs.core.seq(arglist__39460);
return G__39458__delegate(args);
});
G__39458.cljs$core$IFn$_invoke$arity$variadic = G__39458__delegate;
return G__39458;
})()
);

(o.error = (function() { 
var G__39461__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39462__i = 0, G__39462__a = new Array(arguments.length -  0);
while (G__39462__i < G__39462__a.length) {G__39462__a[G__39462__i] = arguments[G__39462__i + 0]; ++G__39462__i;}
  args = new cljs.core.IndexedSeq(G__39462__a,0,null);
} 
return G__39461__delegate.call(this,args);};
G__39461.cljs$lang$maxFixedArity = 0;
G__39461.cljs$lang$applyTo = (function (arglist__39463){
var args = cljs.core.seq(arglist__39463);
return G__39461__delegate(args);
});
G__39461.cljs$core$IFn$_invoke$arity$variadic = G__39461__delegate;
return G__39461;
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

//# sourceMappingURL=debug.js.map?rel=1655293556697
