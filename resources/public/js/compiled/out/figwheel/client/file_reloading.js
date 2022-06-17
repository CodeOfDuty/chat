// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__5045__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__32257 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__32257 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32257,"requires");
}
}):(function (path){
var G__32258 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__32258 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__32258);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32259_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32259_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__32260 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__32260__$1 = (((G__32260 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32260,"provides"));
if((G__32260__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__32260__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__32261 = cljs.core.seq.call(null,provides);
var chunk__32262 = null;
var count__32263 = (0);
var i__32264 = (0);
while(true){
if((i__32264 < count__32263)){
var prov = cljs.core._nth.call(null,chunk__32262,i__32264);
var seq__32273_32285 = cljs.core.seq.call(null,requires);
var chunk__32274_32286 = null;
var count__32275_32287 = (0);
var i__32276_32288 = (0);
while(true){
if((i__32276_32288 < count__32275_32287)){
var req_32289 = cljs.core._nth.call(null,chunk__32274_32286,i__32276_32288);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32289,prov);


var G__32290 = seq__32273_32285;
var G__32291 = chunk__32274_32286;
var G__32292 = count__32275_32287;
var G__32293 = (i__32276_32288 + (1));
seq__32273_32285 = G__32290;
chunk__32274_32286 = G__32291;
count__32275_32287 = G__32292;
i__32276_32288 = G__32293;
continue;
} else {
var temp__5735__auto___32294 = cljs.core.seq.call(null,seq__32273_32285);
if(temp__5735__auto___32294){
var seq__32273_32295__$1 = temp__5735__auto___32294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32273_32295__$1)){
var c__5567__auto___32296 = cljs.core.chunk_first.call(null,seq__32273_32295__$1);
var G__32297 = cljs.core.chunk_rest.call(null,seq__32273_32295__$1);
var G__32298 = c__5567__auto___32296;
var G__32299 = cljs.core.count.call(null,c__5567__auto___32296);
var G__32300 = (0);
seq__32273_32285 = G__32297;
chunk__32274_32286 = G__32298;
count__32275_32287 = G__32299;
i__32276_32288 = G__32300;
continue;
} else {
var req_32301 = cljs.core.first.call(null,seq__32273_32295__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32301,prov);


var G__32302 = cljs.core.next.call(null,seq__32273_32295__$1);
var G__32303 = null;
var G__32304 = (0);
var G__32305 = (0);
seq__32273_32285 = G__32302;
chunk__32274_32286 = G__32303;
count__32275_32287 = G__32304;
i__32276_32288 = G__32305;
continue;
}
} else {
}
}
break;
}


var G__32306 = seq__32261;
var G__32307 = chunk__32262;
var G__32308 = count__32263;
var G__32309 = (i__32264 + (1));
seq__32261 = G__32306;
chunk__32262 = G__32307;
count__32263 = G__32308;
i__32264 = G__32309;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32261);
if(temp__5735__auto__){
var seq__32261__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32261__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32261__$1);
var G__32310 = cljs.core.chunk_rest.call(null,seq__32261__$1);
var G__32311 = c__5567__auto__;
var G__32312 = cljs.core.count.call(null,c__5567__auto__);
var G__32313 = (0);
seq__32261 = G__32310;
chunk__32262 = G__32311;
count__32263 = G__32312;
i__32264 = G__32313;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32261__$1);
var seq__32277_32314 = cljs.core.seq.call(null,requires);
var chunk__32278_32315 = null;
var count__32279_32316 = (0);
var i__32280_32317 = (0);
while(true){
if((i__32280_32317 < count__32279_32316)){
var req_32318 = cljs.core._nth.call(null,chunk__32278_32315,i__32280_32317);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32318,prov);


var G__32319 = seq__32277_32314;
var G__32320 = chunk__32278_32315;
var G__32321 = count__32279_32316;
var G__32322 = (i__32280_32317 + (1));
seq__32277_32314 = G__32319;
chunk__32278_32315 = G__32320;
count__32279_32316 = G__32321;
i__32280_32317 = G__32322;
continue;
} else {
var temp__5735__auto___32323__$1 = cljs.core.seq.call(null,seq__32277_32314);
if(temp__5735__auto___32323__$1){
var seq__32277_32324__$1 = temp__5735__auto___32323__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32277_32324__$1)){
var c__5567__auto___32325 = cljs.core.chunk_first.call(null,seq__32277_32324__$1);
var G__32326 = cljs.core.chunk_rest.call(null,seq__32277_32324__$1);
var G__32327 = c__5567__auto___32325;
var G__32328 = cljs.core.count.call(null,c__5567__auto___32325);
var G__32329 = (0);
seq__32277_32314 = G__32326;
chunk__32278_32315 = G__32327;
count__32279_32316 = G__32328;
i__32280_32317 = G__32329;
continue;
} else {
var req_32330 = cljs.core.first.call(null,seq__32277_32324__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32330,prov);


var G__32331 = cljs.core.next.call(null,seq__32277_32324__$1);
var G__32332 = null;
var G__32333 = (0);
var G__32334 = (0);
seq__32277_32314 = G__32331;
chunk__32278_32315 = G__32332;
count__32279_32316 = G__32333;
i__32280_32317 = G__32334;
continue;
}
} else {
}
}
break;
}


var G__32335 = cljs.core.next.call(null,seq__32261__$1);
var G__32336 = null;
var G__32337 = (0);
var G__32338 = (0);
seq__32261 = G__32335;
chunk__32262 = G__32336;
count__32263 = G__32337;
i__32264 = G__32338;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__32281 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__32282 = null;
var count__32283 = (0);
var i__32284 = (0);
while(true){
if((i__32284 < count__32283)){
var prov = cljs.core._nth.call(null,chunk__32282,i__32284);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32281,chunk__32282,count__32283,i__32284,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32281,chunk__32282,count__32283,i__32284,prov,requires))
);


var G__32339 = seq__32281;
var G__32340 = chunk__32282;
var G__32341 = count__32283;
var G__32342 = (i__32284 + (1));
seq__32281 = G__32339;
chunk__32282 = G__32340;
count__32283 = G__32341;
i__32284 = G__32342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32281);
if(temp__5735__auto__){
var seq__32281__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32281__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32281__$1);
var G__32343 = cljs.core.chunk_rest.call(null,seq__32281__$1);
var G__32344 = c__5567__auto__;
var G__32345 = cljs.core.count.call(null,c__5567__auto__);
var G__32346 = (0);
seq__32281 = G__32343;
chunk__32282 = G__32344;
count__32283 = G__32345;
i__32284 = G__32346;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32281__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32281,chunk__32282,count__32283,i__32284,prov,seq__32281__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32281,chunk__32282,count__32283,i__32284,prov,seq__32281__$1,temp__5735__auto__,requires))
);


var G__32347 = cljs.core.next.call(null,seq__32281__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__32281 = G__32347;
chunk__32282 = G__32348;
count__32283 = G__32349;
i__32284 = G__32350;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32351){
var vec__32352 = p__32351;
var _ = cljs.core.nth.call(null,vec__32352,(0),null);
var v = cljs.core.nth.call(null,vec__32352,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__32355){
var vec__32356 = p__32355;
var k = cljs.core.nth.call(null,vec__32356,(0),null);
var v = cljs.core.nth.call(null,vec__32356,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32368_32376 = cljs.core.seq.call(null,deps);
var chunk__32369_32377 = null;
var count__32370_32378 = (0);
var i__32371_32379 = (0);
while(true){
if((i__32371_32379 < count__32370_32378)){
var dep_32380 = cljs.core._nth.call(null,chunk__32369_32377,i__32371_32379);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_32380;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32380));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32380,(depth + (1)),state);
} else {
}


var G__32381 = seq__32368_32376;
var G__32382 = chunk__32369_32377;
var G__32383 = count__32370_32378;
var G__32384 = (i__32371_32379 + (1));
seq__32368_32376 = G__32381;
chunk__32369_32377 = G__32382;
count__32370_32378 = G__32383;
i__32371_32379 = G__32384;
continue;
} else {
var temp__5735__auto___32385 = cljs.core.seq.call(null,seq__32368_32376);
if(temp__5735__auto___32385){
var seq__32368_32386__$1 = temp__5735__auto___32385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32368_32386__$1)){
var c__5567__auto___32387 = cljs.core.chunk_first.call(null,seq__32368_32386__$1);
var G__32388 = cljs.core.chunk_rest.call(null,seq__32368_32386__$1);
var G__32389 = c__5567__auto___32387;
var G__32390 = cljs.core.count.call(null,c__5567__auto___32387);
var G__32391 = (0);
seq__32368_32376 = G__32388;
chunk__32369_32377 = G__32389;
count__32370_32378 = G__32390;
i__32371_32379 = G__32391;
continue;
} else {
var dep_32392 = cljs.core.first.call(null,seq__32368_32386__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_32392;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32392));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32392,(depth + (1)),state);
} else {
}


var G__32393 = cljs.core.next.call(null,seq__32368_32386__$1);
var G__32394 = null;
var G__32395 = (0);
var G__32396 = (0);
seq__32368_32376 = G__32393;
chunk__32369_32377 = G__32394;
count__32370_32378 = G__32395;
i__32371_32379 = G__32396;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32372){
var vec__32373 = p__32372;
var seq__32374 = cljs.core.seq.call(null,vec__32373);
var first__32375 = cljs.core.first.call(null,seq__32374);
var seq__32374__$1 = cljs.core.next.call(null,seq__32374);
var x = first__32375;
var xs = seq__32374__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__32359_SHARP_){
return clojure.set.difference.call(null,p1__32359_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__32397_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__32397_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32398 = cljs.core.seq.call(null,provides);
var chunk__32399 = null;
var count__32400 = (0);
var i__32401 = (0);
while(true){
if((i__32401 < count__32400)){
var prov = cljs.core._nth.call(null,chunk__32399,i__32401);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32410_32418 = cljs.core.seq.call(null,requires);
var chunk__32411_32419 = null;
var count__32412_32420 = (0);
var i__32413_32421 = (0);
while(true){
if((i__32413_32421 < count__32412_32420)){
var req_32422 = cljs.core._nth.call(null,chunk__32411_32419,i__32413_32421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32422,prov);


var G__32423 = seq__32410_32418;
var G__32424 = chunk__32411_32419;
var G__32425 = count__32412_32420;
var G__32426 = (i__32413_32421 + (1));
seq__32410_32418 = G__32423;
chunk__32411_32419 = G__32424;
count__32412_32420 = G__32425;
i__32413_32421 = G__32426;
continue;
} else {
var temp__5735__auto___32427 = cljs.core.seq.call(null,seq__32410_32418);
if(temp__5735__auto___32427){
var seq__32410_32428__$1 = temp__5735__auto___32427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32410_32428__$1)){
var c__5567__auto___32429 = cljs.core.chunk_first.call(null,seq__32410_32428__$1);
var G__32430 = cljs.core.chunk_rest.call(null,seq__32410_32428__$1);
var G__32431 = c__5567__auto___32429;
var G__32432 = cljs.core.count.call(null,c__5567__auto___32429);
var G__32433 = (0);
seq__32410_32418 = G__32430;
chunk__32411_32419 = G__32431;
count__32412_32420 = G__32432;
i__32413_32421 = G__32433;
continue;
} else {
var req_32434 = cljs.core.first.call(null,seq__32410_32428__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32434,prov);


var G__32435 = cljs.core.next.call(null,seq__32410_32428__$1);
var G__32436 = null;
var G__32437 = (0);
var G__32438 = (0);
seq__32410_32418 = G__32435;
chunk__32411_32419 = G__32436;
count__32412_32420 = G__32437;
i__32413_32421 = G__32438;
continue;
}
} else {
}
}
break;
}


var G__32439 = seq__32398;
var G__32440 = chunk__32399;
var G__32441 = count__32400;
var G__32442 = (i__32401 + (1));
seq__32398 = G__32439;
chunk__32399 = G__32440;
count__32400 = G__32441;
i__32401 = G__32442;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32398);
if(temp__5735__auto__){
var seq__32398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32398__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32398__$1);
var G__32443 = cljs.core.chunk_rest.call(null,seq__32398__$1);
var G__32444 = c__5567__auto__;
var G__32445 = cljs.core.count.call(null,c__5567__auto__);
var G__32446 = (0);
seq__32398 = G__32443;
chunk__32399 = G__32444;
count__32400 = G__32445;
i__32401 = G__32446;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32398__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32414_32447 = cljs.core.seq.call(null,requires);
var chunk__32415_32448 = null;
var count__32416_32449 = (0);
var i__32417_32450 = (0);
while(true){
if((i__32417_32450 < count__32416_32449)){
var req_32451 = cljs.core._nth.call(null,chunk__32415_32448,i__32417_32450);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32451,prov);


var G__32452 = seq__32414_32447;
var G__32453 = chunk__32415_32448;
var G__32454 = count__32416_32449;
var G__32455 = (i__32417_32450 + (1));
seq__32414_32447 = G__32452;
chunk__32415_32448 = G__32453;
count__32416_32449 = G__32454;
i__32417_32450 = G__32455;
continue;
} else {
var temp__5735__auto___32456__$1 = cljs.core.seq.call(null,seq__32414_32447);
if(temp__5735__auto___32456__$1){
var seq__32414_32457__$1 = temp__5735__auto___32456__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32414_32457__$1)){
var c__5567__auto___32458 = cljs.core.chunk_first.call(null,seq__32414_32457__$1);
var G__32459 = cljs.core.chunk_rest.call(null,seq__32414_32457__$1);
var G__32460 = c__5567__auto___32458;
var G__32461 = cljs.core.count.call(null,c__5567__auto___32458);
var G__32462 = (0);
seq__32414_32447 = G__32459;
chunk__32415_32448 = G__32460;
count__32416_32449 = G__32461;
i__32417_32450 = G__32462;
continue;
} else {
var req_32463 = cljs.core.first.call(null,seq__32414_32457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32463,prov);


var G__32464 = cljs.core.next.call(null,seq__32414_32457__$1);
var G__32465 = null;
var G__32466 = (0);
var G__32467 = (0);
seq__32414_32447 = G__32464;
chunk__32415_32448 = G__32465;
count__32416_32449 = G__32466;
i__32417_32450 = G__32467;
continue;
}
} else {
}
}
break;
}


var G__32468 = cljs.core.next.call(null,seq__32398__$1);
var G__32469 = null;
var G__32470 = (0);
var G__32471 = (0);
seq__32398 = G__32468;
chunk__32399 = G__32469;
count__32400 = G__32470;
i__32401 = G__32471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32472_32476 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32473_32477 = null;
var count__32474_32478 = (0);
var i__32475_32479 = (0);
while(true){
if((i__32475_32479 < count__32474_32478)){
var ns_32480 = cljs.core._nth.call(null,chunk__32473_32477,i__32475_32479);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32480);


var G__32481 = seq__32472_32476;
var G__32482 = chunk__32473_32477;
var G__32483 = count__32474_32478;
var G__32484 = (i__32475_32479 + (1));
seq__32472_32476 = G__32481;
chunk__32473_32477 = G__32482;
count__32474_32478 = G__32483;
i__32475_32479 = G__32484;
continue;
} else {
var temp__5735__auto___32485 = cljs.core.seq.call(null,seq__32472_32476);
if(temp__5735__auto___32485){
var seq__32472_32486__$1 = temp__5735__auto___32485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32472_32486__$1)){
var c__5567__auto___32487 = cljs.core.chunk_first.call(null,seq__32472_32486__$1);
var G__32488 = cljs.core.chunk_rest.call(null,seq__32472_32486__$1);
var G__32489 = c__5567__auto___32487;
var G__32490 = cljs.core.count.call(null,c__5567__auto___32487);
var G__32491 = (0);
seq__32472_32476 = G__32488;
chunk__32473_32477 = G__32489;
count__32474_32478 = G__32490;
i__32475_32479 = G__32491;
continue;
} else {
var ns_32492 = cljs.core.first.call(null,seq__32472_32486__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32492);


var G__32493 = cljs.core.next.call(null,seq__32472_32486__$1);
var G__32494 = null;
var G__32495 = (0);
var G__32496 = (0);
seq__32472_32476 = G__32493;
chunk__32473_32477 = G__32494;
count__32474_32478 = G__32495;
i__32475_32479 = G__32496;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__5045__auto__ = goog.require__;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__32497__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32498__i = 0, G__32498__a = new Array(arguments.length -  0);
while (G__32498__i < G__32498__a.length) {G__32498__a[G__32498__i] = arguments[G__32498__i + 0]; ++G__32498__i;}
  args = new cljs.core.IndexedSeq(G__32498__a,0,null);
} 
return G__32497__delegate.call(this,args);};
G__32497.cljs$lang$maxFixedArity = 0;
G__32497.cljs$lang$applyTo = (function (arglist__32499){
var args = cljs.core.seq(arglist__32499);
return G__32497__delegate(args);
});
G__32497.cljs$core$IFn$_invoke$arity$variadic = G__32497__delegate;
return G__32497;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32500_SHARP_,p2__32501_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32500_SHARP_)),p2__32501_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32502_SHARP_,p2__32503_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32502_SHARP_),p2__32503_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32504 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32504.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__32504.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__32504;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32505){if((e32505 instanceof Error)){
var e = e32505;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32505;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32506){if((e32506 instanceof Error)){
var e = e32506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32506;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32507 = cljs.core._EQ_;
var expr__32508 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32508))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32508))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32507.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32508))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32510,callback){
var map__32511 = p__32510;
var map__32511__$1 = cljs.core.__destructure_map.call(null,map__32511);
var file_msg = map__32511__$1;
var request_url = cljs.core.get.call(null,map__32511__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5045__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_32548){
var state_val_32549 = (state_32548[(1)]);
if((state_val_32549 === (7))){
var inst_32544 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32550_32577 = state_32548__$1;
(statearr_32550_32577[(2)] = inst_32544);

(statearr_32550_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (1))){
var state_32548__$1 = state_32548;
var statearr_32551_32578 = state_32548__$1;
(statearr_32551_32578[(2)] = null);

(statearr_32551_32578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (4))){
var inst_32514 = (state_32548[(7)]);
var inst_32514__$1 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32552 = state_32548;
(statearr_32552[(7)] = inst_32514__$1);

return statearr_32552;
})();
if(cljs.core.truth_(inst_32514__$1)){
var statearr_32553_32579 = state_32548__$1;
(statearr_32553_32579[(1)] = (5));

} else {
var statearr_32554_32580 = state_32548__$1;
(statearr_32554_32580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (15))){
var inst_32527 = (state_32548[(8)]);
var inst_32529 = (state_32548[(9)]);
var inst_32531 = inst_32529.call(null,inst_32527);
var state_32548__$1 = state_32548;
var statearr_32555_32581 = state_32548__$1;
(statearr_32555_32581[(2)] = inst_32531);

(statearr_32555_32581[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (13))){
var inst_32538 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32556_32582 = state_32548__$1;
(statearr_32556_32582[(2)] = inst_32538);

(statearr_32556_32582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (6))){
var state_32548__$1 = state_32548;
var statearr_32557_32583 = state_32548__$1;
(statearr_32557_32583[(2)] = null);

(statearr_32557_32583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (17))){
var inst_32535 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32558_32584 = state_32548__$1;
(statearr_32558_32584[(2)] = inst_32535);

(statearr_32558_32584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (3))){
var inst_32546 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32548__$1,inst_32546);
} else {
if((state_val_32549 === (12))){
var state_32548__$1 = state_32548;
var statearr_32559_32585 = state_32548__$1;
(statearr_32559_32585[(2)] = null);

(statearr_32559_32585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (2))){
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32548__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32549 === (11))){
var inst_32519 = (state_32548[(10)]);
var inst_32525 = figwheel.client.file_reloading.blocking_load.call(null,inst_32519);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32548__$1,(14),inst_32525);
} else {
if((state_val_32549 === (9))){
var inst_32519 = (state_32548[(10)]);
var state_32548__$1 = state_32548;
if(cljs.core.truth_(inst_32519)){
var statearr_32560_32586 = state_32548__$1;
(statearr_32560_32586[(1)] = (11));

} else {
var statearr_32561_32587 = state_32548__$1;
(statearr_32561_32587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (5))){
var inst_32514 = (state_32548[(7)]);
var inst_32520 = (state_32548[(11)]);
var inst_32519 = cljs.core.nth.call(null,inst_32514,(0),null);
var inst_32520__$1 = cljs.core.nth.call(null,inst_32514,(1),null);
var state_32548__$1 = (function (){var statearr_32562 = state_32548;
(statearr_32562[(10)] = inst_32519);

(statearr_32562[(11)] = inst_32520__$1);

return statearr_32562;
})();
if(cljs.core.truth_(inst_32520__$1)){
var statearr_32563_32588 = state_32548__$1;
(statearr_32563_32588[(1)] = (8));

} else {
var statearr_32564_32589 = state_32548__$1;
(statearr_32564_32589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (14))){
var inst_32519 = (state_32548[(10)]);
var inst_32529 = (state_32548[(9)]);
var inst_32527 = (state_32548[(2)]);
var inst_32528 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32529__$1 = cljs.core.get.call(null,inst_32528,inst_32519);
var state_32548__$1 = (function (){var statearr_32565 = state_32548;
(statearr_32565[(8)] = inst_32527);

(statearr_32565[(9)] = inst_32529__$1);

return statearr_32565;
})();
if(cljs.core.truth_(inst_32529__$1)){
var statearr_32566_32590 = state_32548__$1;
(statearr_32566_32590[(1)] = (15));

} else {
var statearr_32567_32591 = state_32548__$1;
(statearr_32567_32591[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (16))){
var inst_32527 = (state_32548[(8)]);
var inst_32533 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32527);
var state_32548__$1 = state_32548;
var statearr_32568_32592 = state_32548__$1;
(statearr_32568_32592[(2)] = inst_32533);

(statearr_32568_32592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (10))){
var inst_32540 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32569 = state_32548;
(statearr_32569[(12)] = inst_32540);

return statearr_32569;
})();
var statearr_32570_32593 = state_32548__$1;
(statearr_32570_32593[(2)] = null);

(statearr_32570_32593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (8))){
var inst_32520 = (state_32548[(11)]);
var inst_32522 = eval(inst_32520);
var state_32548__$1 = state_32548;
var statearr_32571_32594 = state_32548__$1;
(statearr_32571_32594[(2)] = inst_32522);

(statearr_32571_32594[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__28450__auto__ = null;
var figwheel$client$file_reloading$state_machine__28450__auto____0 = (function (){
var statearr_32572 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32572[(0)] = figwheel$client$file_reloading$state_machine__28450__auto__);

(statearr_32572[(1)] = (1));

return statearr_32572;
});
var figwheel$client$file_reloading$state_machine__28450__auto____1 = (function (state_32548){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_32548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e32573){var ex__28453__auto__ = e32573;
var statearr_32574_32595 = state_32548;
(statearr_32574_32595[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_32548[(4)]))){
var statearr_32575_32596 = state_32548;
(statearr_32575_32596[(1)] = cljs.core.first.call(null,(state_32548[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32597 = state_32548;
state_32548 = G__32597;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28450__auto__ = function(state_32548){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28450__auto____1.call(this,state_32548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28450__auto____0;
figwheel$client$file_reloading$state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28450__auto____1;
return figwheel$client$file_reloading$state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_32576 = f__28524__auto__.call(null);
(statearr_32576[(6)] = c__28523__auto__);

return statearr_32576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32599 = arguments.length;
switch (G__32599) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32601,callback){
var map__32602 = p__32601;
var map__32602__$1 = cljs.core.__destructure_map.call(null,map__32602);
var file_msg = map__32602__$1;
var namespace = cljs.core.get.call(null,map__32602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32603){
var map__32604 = p__32603;
var map__32604__$1 = cljs.core.__destructure_map.call(null,map__32604);
var file_msg = map__32604__$1;
var namespace = cljs.core.get.call(null,map__32604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32605){
var map__32606 = p__32605;
var map__32606__$1 = cljs.core.__destructure_map.call(null,map__32606);
var file_msg = map__32606__$1;
var namespace = cljs.core.get.call(null,map__32606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5043__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5043__auto__){
var or__5045__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5043__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32607,callback){
var map__32608 = p__32607;
var map__32608__$1 = cljs.core.__destructure_map.call(null,map__32608);
var file_msg = map__32608__$1;
var request_url = cljs.core.get.call(null,map__32608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32608__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28523__auto___32659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_32643){
var state_val_32644 = (state_32643[(1)]);
if((state_val_32644 === (1))){
var inst_32616 = files;
var inst_32617 = cljs.core.seq.call(null,inst_32616);
var inst_32618 = cljs.core.first.call(null,inst_32617);
var inst_32619 = cljs.core.next.call(null,inst_32617);
var inst_32620 = inst_32616;
var state_32643__$1 = (function (){var statearr_32645 = state_32643;
(statearr_32645[(7)] = inst_32620);

(statearr_32645[(8)] = inst_32619);

(statearr_32645[(9)] = inst_32618);

return statearr_32645;
})();
var statearr_32646_32660 = state_32643__$1;
(statearr_32646_32660[(2)] = null);

(statearr_32646_32660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (2))){
var inst_32620 = (state_32643[(7)]);
var inst_32626 = (state_32643[(10)]);
var inst_32625 = cljs.core.seq.call(null,inst_32620);
var inst_32626__$1 = cljs.core.first.call(null,inst_32625);
var inst_32627 = cljs.core.next.call(null,inst_32625);
var inst_32628 = (inst_32626__$1 == null);
var inst_32629 = cljs.core.not.call(null,inst_32628);
var state_32643__$1 = (function (){var statearr_32647 = state_32643;
(statearr_32647[(11)] = inst_32627);

(statearr_32647[(10)] = inst_32626__$1);

return statearr_32647;
})();
if(inst_32629){
var statearr_32648_32661 = state_32643__$1;
(statearr_32648_32661[(1)] = (4));

} else {
var statearr_32649_32662 = state_32643__$1;
(statearr_32649_32662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (3))){
var inst_32641 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32643__$1,inst_32641);
} else {
if((state_val_32644 === (4))){
var inst_32626 = (state_32643[(10)]);
var inst_32631 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32626);
var state_32643__$1 = state_32643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32643__$1,(7),inst_32631);
} else {
if((state_val_32644 === (5))){
var inst_32637 = cljs.core.async.close_BANG_.call(null,out);
var state_32643__$1 = state_32643;
var statearr_32650_32663 = state_32643__$1;
(statearr_32650_32663[(2)] = inst_32637);

(statearr_32650_32663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (6))){
var inst_32639 = (state_32643[(2)]);
var state_32643__$1 = state_32643;
var statearr_32651_32664 = state_32643__$1;
(statearr_32651_32664[(2)] = inst_32639);

(statearr_32651_32664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32644 === (7))){
var inst_32627 = (state_32643[(11)]);
var inst_32633 = (state_32643[(2)]);
var inst_32634 = cljs.core.async.put_BANG_.call(null,out,inst_32633);
var inst_32620 = inst_32627;
var state_32643__$1 = (function (){var statearr_32652 = state_32643;
(statearr_32652[(7)] = inst_32620);

(statearr_32652[(12)] = inst_32634);

return statearr_32652;
})();
var statearr_32653_32665 = state_32643__$1;
(statearr_32653_32665[(2)] = null);

(statearr_32653_32665[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32654[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____1 = (function (state_32643){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_32643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e32655){var ex__28453__auto__ = e32655;
var statearr_32656_32666 = state_32643;
(statearr_32656_32666[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_32643[(4)]))){
var statearr_32657_32667 = state_32643;
(statearr_32657_32667[(1)] = cljs.core.first.call(null,(state_32643[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32668 = state_32643;
state_32643 = G__32668;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__ = function(state_32643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____1.call(this,state_32643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_32658 = f__28524__auto__.call(null);
(statearr_32658[(6)] = c__28523__auto___32659);

return statearr_32658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32669,opts){
var map__32670 = p__32669;
var map__32670__$1 = cljs.core.__destructure_map.call(null,map__32670);
var eval_body = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5043__auto__ = eval_body;
if(cljs.core.truth_(and__5043__auto__)){
return typeof eval_body === 'string';
} else {
return and__5043__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32671){var e = e32671;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32672_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32672_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32673){
var vec__32674 = p__32673;
var k = cljs.core.nth.call(null,vec__32674,(0),null);
var v = cljs.core.nth.call(null,vec__32674,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32677){
var vec__32678 = p__32677;
var k = cljs.core.nth.call(null,vec__32678,(0),null);
var v = cljs.core.nth.call(null,vec__32678,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32684,p__32685){
var map__32686 = p__32684;
var map__32686__$1 = cljs.core.__destructure_map.call(null,map__32686);
var opts = map__32686__$1;
var before_jsload = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32687 = p__32685;
var map__32687__$1 = cljs.core.__destructure_map.call(null,map__32687);
var msg = map__32687__$1;
var files = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_32820){
var state_val_32821 = (state_32820[(1)]);
if((state_val_32821 === (7))){
var inst_32702 = (state_32820[(7)]);
var inst_32701 = (state_32820[(8)]);
var inst_32700 = (state_32820[(9)]);
var inst_32699 = (state_32820[(10)]);
var inst_32707 = cljs.core._nth.call(null,inst_32700,inst_32702);
var inst_32708 = figwheel.client.file_reloading.eval_body.call(null,inst_32707,opts);
var inst_32709 = (inst_32702 + (1));
var tmp32822 = inst_32701;
var tmp32823 = inst_32700;
var tmp32824 = inst_32699;
var inst_32699__$1 = tmp32824;
var inst_32700__$1 = tmp32823;
var inst_32701__$1 = tmp32822;
var inst_32702__$1 = inst_32709;
var state_32820__$1 = (function (){var statearr_32825 = state_32820;
(statearr_32825[(11)] = inst_32708);

(statearr_32825[(7)] = inst_32702__$1);

(statearr_32825[(8)] = inst_32701__$1);

(statearr_32825[(9)] = inst_32700__$1);

(statearr_32825[(10)] = inst_32699__$1);

return statearr_32825;
})();
var statearr_32826_32894 = state_32820__$1;
(statearr_32826_32894[(2)] = null);

(statearr_32826_32894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (20))){
var inst_32742 = (state_32820[(12)]);
var inst_32751 = figwheel.client.file_reloading.sort_files.call(null,inst_32742);
var state_32820__$1 = state_32820;
var statearr_32827_32895 = state_32820__$1;
(statearr_32827_32895[(2)] = inst_32751);

(statearr_32827_32895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (27))){
var state_32820__$1 = state_32820;
var statearr_32828_32896 = state_32820__$1;
(statearr_32828_32896[(2)] = null);

(statearr_32828_32896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (1))){
var inst_32691 = (state_32820[(13)]);
var inst_32688 = before_jsload.call(null,files);
var inst_32689 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32690 = (function (){return (function (p1__32681_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32681_SHARP_);
});
})();
var inst_32691__$1 = cljs.core.filter.call(null,inst_32690,files);
var inst_32692 = cljs.core.not_empty.call(null,inst_32691__$1);
var state_32820__$1 = (function (){var statearr_32829 = state_32820;
(statearr_32829[(13)] = inst_32691__$1);

(statearr_32829[(14)] = inst_32688);

(statearr_32829[(15)] = inst_32689);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32692)){
var statearr_32830_32897 = state_32820__$1;
(statearr_32830_32897[(1)] = (2));

} else {
var statearr_32831_32898 = state_32820__$1;
(statearr_32831_32898[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (24))){
var state_32820__$1 = state_32820;
var statearr_32832_32899 = state_32820__$1;
(statearr_32832_32899[(2)] = null);

(statearr_32832_32899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (4))){
var inst_32743 = (state_32820[(16)]);
var inst_32736 = (state_32820[(2)]);
var inst_32737 = cljs.core.List.EMPTY;
var inst_32738 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32737);
var inst_32739 = (function (){return (function (p1__32682_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32682_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32682_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32682_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_32740 = cljs.core.filter.call(null,inst_32739,files);
var inst_32741 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32742 = cljs.core.concat.call(null,inst_32740,inst_32741);
var inst_32743__$1 = reload_dependents;
var state_32820__$1 = (function (){var statearr_32833 = state_32820;
(statearr_32833[(12)] = inst_32742);

(statearr_32833[(16)] = inst_32743__$1);

(statearr_32833[(17)] = inst_32738);

(statearr_32833[(18)] = inst_32736);

return statearr_32833;
})();
if(cljs.core.truth_(inst_32743__$1)){
var statearr_32834_32900 = state_32820__$1;
(statearr_32834_32900[(1)] = (16));

} else {
var statearr_32835_32901 = state_32820__$1;
(statearr_32835_32901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (15))){
var inst_32726 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32836_32902 = state_32820__$1;
(statearr_32836_32902[(2)] = inst_32726);

(statearr_32836_32902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (21))){
var inst_32753 = (state_32820[(19)]);
var inst_32753__$1 = (state_32820[(2)]);
var inst_32754 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32753__$1);
var state_32820__$1 = (function (){var statearr_32837 = state_32820;
(statearr_32837[(19)] = inst_32753__$1);

return statearr_32837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32820__$1,(22),inst_32754);
} else {
if((state_val_32821 === (31))){
var inst_32818 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32820__$1,inst_32818);
} else {
if((state_val_32821 === (32))){
var inst_32795 = (state_32820[(20)]);
var inst_32799 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32800 = cljs.core.map.call(null,inst_32799,inst_32795);
var inst_32801 = cljs.core.pr_str.call(null,inst_32800);
var inst_32802 = ["figwheel-no-load meta-data: ",inst_32801].join('');
var inst_32803 = figwheel.client.utils.log.call(null,inst_32802);
var state_32820__$1 = state_32820;
var statearr_32838_32903 = state_32820__$1;
(statearr_32838_32903[(2)] = inst_32803);

(statearr_32838_32903[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (33))){
var state_32820__$1 = state_32820;
var statearr_32839_32904 = state_32820__$1;
(statearr_32839_32904[(2)] = null);

(statearr_32839_32904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (13))){
var inst_32712 = (state_32820[(21)]);
var inst_32716 = cljs.core.chunk_first.call(null,inst_32712);
var inst_32717 = cljs.core.chunk_rest.call(null,inst_32712);
var inst_32718 = cljs.core.count.call(null,inst_32716);
var inst_32699 = inst_32717;
var inst_32700 = inst_32716;
var inst_32701 = inst_32718;
var inst_32702 = (0);
var state_32820__$1 = (function (){var statearr_32840 = state_32820;
(statearr_32840[(7)] = inst_32702);

(statearr_32840[(8)] = inst_32701);

(statearr_32840[(9)] = inst_32700);

(statearr_32840[(10)] = inst_32699);

return statearr_32840;
})();
var statearr_32841_32905 = state_32820__$1;
(statearr_32841_32905[(2)] = null);

(statearr_32841_32905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (22))){
var inst_32761 = (state_32820[(22)]);
var inst_32756 = (state_32820[(23)]);
var inst_32757 = (state_32820[(24)]);
var inst_32753 = (state_32820[(19)]);
var inst_32756__$1 = (state_32820[(2)]);
var inst_32757__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32756__$1);
var inst_32758 = (function (){var all_files = inst_32753;
var res_SINGLEQUOTE_ = inst_32756__$1;
var res = inst_32757__$1;
return (function (p1__32683_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32683_SHARP_));
});
})();
var inst_32759 = cljs.core.filter.call(null,inst_32758,inst_32756__$1);
var inst_32760 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32761__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32760);
var inst_32762 = cljs.core.not_empty.call(null,inst_32761__$1);
var state_32820__$1 = (function (){var statearr_32842 = state_32820;
(statearr_32842[(22)] = inst_32761__$1);

(statearr_32842[(25)] = inst_32759);

(statearr_32842[(23)] = inst_32756__$1);

(statearr_32842[(24)] = inst_32757__$1);

return statearr_32842;
})();
if(cljs.core.truth_(inst_32762)){
var statearr_32843_32906 = state_32820__$1;
(statearr_32843_32906[(1)] = (23));

} else {
var statearr_32844_32907 = state_32820__$1;
(statearr_32844_32907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (36))){
var state_32820__$1 = state_32820;
var statearr_32845_32908 = state_32820__$1;
(statearr_32845_32908[(2)] = null);

(statearr_32845_32908[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (29))){
var inst_32761 = (state_32820[(22)]);
var inst_32759 = (state_32820[(25)]);
var inst_32756 = (state_32820[(23)]);
var inst_32757 = (state_32820[(24)]);
var inst_32753 = (state_32820[(19)]);
var inst_32795 = (state_32820[(20)]);
var inst_32789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32792 = (function (){var all_files = inst_32753;
var res_SINGLEQUOTE_ = inst_32756;
var res = inst_32757;
var files_not_loaded = inst_32759;
var dependencies_that_loaded = inst_32761;
return (function (p__32791){
var map__32846 = p__32791;
var map__32846__$1 = cljs.core.__destructure_map.call(null,map__32846);
var namespace = cljs.core.get.call(null,map__32846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_32793 = cljs.core.group_by.call(null,inst_32792,inst_32759);
var inst_32794 = cljs.core.__destructure_map.call(null,inst_32793);
var inst_32795__$1 = cljs.core.get.call(null,inst_32794,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32796 = cljs.core.get.call(null,inst_32794,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32797 = cljs.core.not_empty.call(null,inst_32795__$1);
var state_32820__$1 = (function (){var statearr_32847 = state_32820;
(statearr_32847[(20)] = inst_32795__$1);

(statearr_32847[(26)] = inst_32796);

(statearr_32847[(27)] = inst_32789);

return statearr_32847;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32848_32909 = state_32820__$1;
(statearr_32848_32909[(1)] = (32));

} else {
var statearr_32849_32910 = state_32820__$1;
(statearr_32849_32910[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (6))){
var inst_32733 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32850_32911 = state_32820__$1;
(statearr_32850_32911[(2)] = inst_32733);

(statearr_32850_32911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (28))){
var inst_32759 = (state_32820[(25)]);
var inst_32786 = (state_32820[(2)]);
var inst_32787 = cljs.core.not_empty.call(null,inst_32759);
var state_32820__$1 = (function (){var statearr_32851 = state_32820;
(statearr_32851[(28)] = inst_32786);

return statearr_32851;
})();
if(cljs.core.truth_(inst_32787)){
var statearr_32852_32912 = state_32820__$1;
(statearr_32852_32912[(1)] = (29));

} else {
var statearr_32853_32913 = state_32820__$1;
(statearr_32853_32913[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (25))){
var inst_32757 = (state_32820[(24)]);
var inst_32773 = (state_32820[(2)]);
var inst_32774 = cljs.core.not_empty.call(null,inst_32757);
var state_32820__$1 = (function (){var statearr_32854 = state_32820;
(statearr_32854[(29)] = inst_32773);

return statearr_32854;
})();
if(cljs.core.truth_(inst_32774)){
var statearr_32855_32914 = state_32820__$1;
(statearr_32855_32914[(1)] = (26));

} else {
var statearr_32856_32915 = state_32820__$1;
(statearr_32856_32915[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (34))){
var inst_32796 = (state_32820[(26)]);
var inst_32806 = (state_32820[(2)]);
var inst_32807 = cljs.core.not_empty.call(null,inst_32796);
var state_32820__$1 = (function (){var statearr_32857 = state_32820;
(statearr_32857[(30)] = inst_32806);

return statearr_32857;
})();
if(cljs.core.truth_(inst_32807)){
var statearr_32858_32916 = state_32820__$1;
(statearr_32858_32916[(1)] = (35));

} else {
var statearr_32859_32917 = state_32820__$1;
(statearr_32859_32917[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (17))){
var state_32820__$1 = state_32820;
var statearr_32860_32918 = state_32820__$1;
(statearr_32860_32918[(2)] = recompile_dependents);

(statearr_32860_32918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (3))){
var state_32820__$1 = state_32820;
var statearr_32861_32919 = state_32820__$1;
(statearr_32861_32919[(2)] = null);

(statearr_32861_32919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (12))){
var inst_32729 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32862_32920 = state_32820__$1;
(statearr_32862_32920[(2)] = inst_32729);

(statearr_32862_32920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (2))){
var inst_32691 = (state_32820[(13)]);
var inst_32698 = cljs.core.seq.call(null,inst_32691);
var inst_32699 = inst_32698;
var inst_32700 = null;
var inst_32701 = (0);
var inst_32702 = (0);
var state_32820__$1 = (function (){var statearr_32863 = state_32820;
(statearr_32863[(7)] = inst_32702);

(statearr_32863[(8)] = inst_32701);

(statearr_32863[(9)] = inst_32700);

(statearr_32863[(10)] = inst_32699);

return statearr_32863;
})();
var statearr_32864_32921 = state_32820__$1;
(statearr_32864_32921[(2)] = null);

(statearr_32864_32921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (23))){
var inst_32761 = (state_32820[(22)]);
var inst_32759 = (state_32820[(25)]);
var inst_32756 = (state_32820[(23)]);
var inst_32757 = (state_32820[(24)]);
var inst_32753 = (state_32820[(19)]);
var inst_32764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32766 = (function (){var all_files = inst_32753;
var res_SINGLEQUOTE_ = inst_32756;
var res = inst_32757;
var files_not_loaded = inst_32759;
var dependencies_that_loaded = inst_32761;
return (function (p__32765){
var map__32865 = p__32765;
var map__32865__$1 = cljs.core.__destructure_map.call(null,map__32865);
var request_url = cljs.core.get.call(null,map__32865__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_32767 = cljs.core.reverse.call(null,inst_32761);
var inst_32768 = cljs.core.map.call(null,inst_32766,inst_32767);
var inst_32769 = cljs.core.pr_str.call(null,inst_32768);
var inst_32770 = figwheel.client.utils.log.call(null,inst_32769);
var state_32820__$1 = (function (){var statearr_32866 = state_32820;
(statearr_32866[(31)] = inst_32764);

return statearr_32866;
})();
var statearr_32867_32922 = state_32820__$1;
(statearr_32867_32922[(2)] = inst_32770);

(statearr_32867_32922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (35))){
var inst_32796 = (state_32820[(26)]);
var inst_32809 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32796);
var inst_32810 = cljs.core.pr_str.call(null,inst_32809);
var inst_32811 = ["not required: ",inst_32810].join('');
var inst_32812 = figwheel.client.utils.log.call(null,inst_32811);
var state_32820__$1 = state_32820;
var statearr_32868_32923 = state_32820__$1;
(statearr_32868_32923[(2)] = inst_32812);

(statearr_32868_32923[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (19))){
var inst_32742 = (state_32820[(12)]);
var inst_32749 = figwheel.client.file_reloading.expand_files.call(null,inst_32742);
var state_32820__$1 = state_32820;
var statearr_32869_32924 = state_32820__$1;
(statearr_32869_32924[(2)] = inst_32749);

(statearr_32869_32924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (11))){
var state_32820__$1 = state_32820;
var statearr_32870_32925 = state_32820__$1;
(statearr_32870_32925[(2)] = null);

(statearr_32870_32925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (9))){
var inst_32731 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32871_32926 = state_32820__$1;
(statearr_32871_32926[(2)] = inst_32731);

(statearr_32871_32926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (5))){
var inst_32702 = (state_32820[(7)]);
var inst_32701 = (state_32820[(8)]);
var inst_32704 = (inst_32702 < inst_32701);
var inst_32705 = inst_32704;
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32705)){
var statearr_32872_32927 = state_32820__$1;
(statearr_32872_32927[(1)] = (7));

} else {
var statearr_32873_32928 = state_32820__$1;
(statearr_32873_32928[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (14))){
var inst_32712 = (state_32820[(21)]);
var inst_32721 = cljs.core.first.call(null,inst_32712);
var inst_32722 = figwheel.client.file_reloading.eval_body.call(null,inst_32721,opts);
var inst_32723 = cljs.core.next.call(null,inst_32712);
var inst_32699 = inst_32723;
var inst_32700 = null;
var inst_32701 = (0);
var inst_32702 = (0);
var state_32820__$1 = (function (){var statearr_32874 = state_32820;
(statearr_32874[(7)] = inst_32702);

(statearr_32874[(8)] = inst_32701);

(statearr_32874[(32)] = inst_32722);

(statearr_32874[(9)] = inst_32700);

(statearr_32874[(10)] = inst_32699);

return statearr_32874;
})();
var statearr_32875_32929 = state_32820__$1;
(statearr_32875_32929[(2)] = null);

(statearr_32875_32929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (26))){
var inst_32761 = (state_32820[(22)]);
var inst_32759 = (state_32820[(25)]);
var inst_32756 = (state_32820[(23)]);
var inst_32757 = (state_32820[(24)]);
var inst_32753 = (state_32820[(19)]);
var inst_32776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32778 = (function (){var all_files = inst_32753;
var res_SINGLEQUOTE_ = inst_32756;
var res = inst_32757;
var files_not_loaded = inst_32759;
var dependencies_that_loaded = inst_32761;
return (function (p__32777){
var map__32876 = p__32777;
var map__32876__$1 = cljs.core.__destructure_map.call(null,map__32876);
var namespace = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32876__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_32779 = cljs.core.map.call(null,inst_32778,inst_32757);
var inst_32780 = cljs.core.pr_str.call(null,inst_32779);
var inst_32781 = figwheel.client.utils.log.call(null,inst_32780);
var inst_32782 = (function (){var all_files = inst_32753;
var res_SINGLEQUOTE_ = inst_32756;
var res = inst_32757;
var files_not_loaded = inst_32759;
var dependencies_that_loaded = inst_32761;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_32783 = setTimeout(inst_32782,(10));
var state_32820__$1 = (function (){var statearr_32877 = state_32820;
(statearr_32877[(33)] = inst_32776);

(statearr_32877[(34)] = inst_32781);

return statearr_32877;
})();
var statearr_32878_32930 = state_32820__$1;
(statearr_32878_32930[(2)] = inst_32783);

(statearr_32878_32930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (16))){
var inst_32743 = (state_32820[(16)]);
var state_32820__$1 = state_32820;
var statearr_32879_32931 = state_32820__$1;
(statearr_32879_32931[(2)] = inst_32743);

(statearr_32879_32931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (30))){
var state_32820__$1 = state_32820;
var statearr_32880_32932 = state_32820__$1;
(statearr_32880_32932[(2)] = null);

(statearr_32880_32932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (10))){
var inst_32712 = (state_32820[(21)]);
var inst_32714 = cljs.core.chunked_seq_QMARK_.call(null,inst_32712);
var state_32820__$1 = state_32820;
if(inst_32714){
var statearr_32881_32933 = state_32820__$1;
(statearr_32881_32933[(1)] = (13));

} else {
var statearr_32882_32934 = state_32820__$1;
(statearr_32882_32934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (18))){
var inst_32747 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32747)){
var statearr_32883_32935 = state_32820__$1;
(statearr_32883_32935[(1)] = (19));

} else {
var statearr_32884_32936 = state_32820__$1;
(statearr_32884_32936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (37))){
var inst_32815 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32885_32937 = state_32820__$1;
(statearr_32885_32937[(2)] = inst_32815);

(statearr_32885_32937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (8))){
var inst_32699 = (state_32820[(10)]);
var inst_32712 = (state_32820[(21)]);
var inst_32712__$1 = cljs.core.seq.call(null,inst_32699);
var state_32820__$1 = (function (){var statearr_32886 = state_32820;
(statearr_32886[(21)] = inst_32712__$1);

return statearr_32886;
})();
if(inst_32712__$1){
var statearr_32887_32938 = state_32820__$1;
(statearr_32887_32938[(1)] = (10));

} else {
var statearr_32888_32939 = state_32820__$1;
(statearr_32888_32939[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____0 = (function (){
var statearr_32889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32889[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__);

(statearr_32889[(1)] = (1));

return statearr_32889;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____1 = (function (state_32820){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_32820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e32890){var ex__28453__auto__ = e32890;
var statearr_32891_32940 = state_32820;
(statearr_32891_32940[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_32820[(4)]))){
var statearr_32892_32941 = state_32820;
(statearr_32892_32941[(1)] = cljs.core.first.call(null,(state_32820[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32942 = state_32820;
state_32820 = G__32942;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__ = function(state_32820){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____1.call(this,state_32820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_32893 = f__28524__auto__.call(null);
(statearr_32893[(6)] = c__28523__auto__);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32945,link){
var map__32946 = p__32945;
var map__32946__$1 = cljs.core.__destructure_map.call(null,map__32946);
var file = cljs.core.get.call(null,map__32946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__32943_SHARP_,p2__32944_SHARP_){
if(cljs.core._EQ_.call(null,p1__32943_SHARP_,p2__32944_SHARP_)){
return p1__32943_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32948){
var map__32949 = p__32948;
var map__32949__$1 = cljs.core.__destructure_map.call(null,map__32949);
var match_length = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32947_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32947_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32950_SHARP_,p2__32951_SHARP_){
return cljs.core.assoc.call(null,p1__32950_SHARP_,cljs.core.get.call(null,p2__32951_SHARP_,key),p2__32951_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32952 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32952);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32952);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32953,p__32954){
var map__32955 = p__32953;
var map__32955__$1 = cljs.core.__destructure_map.call(null,map__32955);
var on_cssload = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32956 = p__32954;
var map__32956__$1 = cljs.core.__destructure_map.call(null,map__32956);
var files_msg = map__32956__$1;
var files = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1655379920288
