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
var G__31234 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__31234 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31234,"requires");
}
}):(function (path){
var G__31235 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__31235 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__31235);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31236_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31236_SHARP_)));
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
var G__31237 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__31237__$1 = (((G__31237 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31237,"provides"));
if((G__31237__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__31237__$1);
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
var seq__31238 = cljs.core.seq.call(null,provides);
var chunk__31239 = null;
var count__31240 = (0);
var i__31241 = (0);
while(true){
if((i__31241 < count__31240)){
var prov = cljs.core._nth.call(null,chunk__31239,i__31241);
var seq__31250_31262 = cljs.core.seq.call(null,requires);
var chunk__31251_31263 = null;
var count__31252_31264 = (0);
var i__31253_31265 = (0);
while(true){
if((i__31253_31265 < count__31252_31264)){
var req_31266 = cljs.core._nth.call(null,chunk__31251_31263,i__31253_31265);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31266,prov);


var G__31267 = seq__31250_31262;
var G__31268 = chunk__31251_31263;
var G__31269 = count__31252_31264;
var G__31270 = (i__31253_31265 + (1));
seq__31250_31262 = G__31267;
chunk__31251_31263 = G__31268;
count__31252_31264 = G__31269;
i__31253_31265 = G__31270;
continue;
} else {
var temp__5735__auto___31271 = cljs.core.seq.call(null,seq__31250_31262);
if(temp__5735__auto___31271){
var seq__31250_31272__$1 = temp__5735__auto___31271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31250_31272__$1)){
var c__5567__auto___31273 = cljs.core.chunk_first.call(null,seq__31250_31272__$1);
var G__31274 = cljs.core.chunk_rest.call(null,seq__31250_31272__$1);
var G__31275 = c__5567__auto___31273;
var G__31276 = cljs.core.count.call(null,c__5567__auto___31273);
var G__31277 = (0);
seq__31250_31262 = G__31274;
chunk__31251_31263 = G__31275;
count__31252_31264 = G__31276;
i__31253_31265 = G__31277;
continue;
} else {
var req_31278 = cljs.core.first.call(null,seq__31250_31272__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31278,prov);


var G__31279 = cljs.core.next.call(null,seq__31250_31272__$1);
var G__31280 = null;
var G__31281 = (0);
var G__31282 = (0);
seq__31250_31262 = G__31279;
chunk__31251_31263 = G__31280;
count__31252_31264 = G__31281;
i__31253_31265 = G__31282;
continue;
}
} else {
}
}
break;
}


var G__31283 = seq__31238;
var G__31284 = chunk__31239;
var G__31285 = count__31240;
var G__31286 = (i__31241 + (1));
seq__31238 = G__31283;
chunk__31239 = G__31284;
count__31240 = G__31285;
i__31241 = G__31286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31238);
if(temp__5735__auto__){
var seq__31238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31238__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31238__$1);
var G__31287 = cljs.core.chunk_rest.call(null,seq__31238__$1);
var G__31288 = c__5567__auto__;
var G__31289 = cljs.core.count.call(null,c__5567__auto__);
var G__31290 = (0);
seq__31238 = G__31287;
chunk__31239 = G__31288;
count__31240 = G__31289;
i__31241 = G__31290;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31238__$1);
var seq__31254_31291 = cljs.core.seq.call(null,requires);
var chunk__31255_31292 = null;
var count__31256_31293 = (0);
var i__31257_31294 = (0);
while(true){
if((i__31257_31294 < count__31256_31293)){
var req_31295 = cljs.core._nth.call(null,chunk__31255_31292,i__31257_31294);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31295,prov);


var G__31296 = seq__31254_31291;
var G__31297 = chunk__31255_31292;
var G__31298 = count__31256_31293;
var G__31299 = (i__31257_31294 + (1));
seq__31254_31291 = G__31296;
chunk__31255_31292 = G__31297;
count__31256_31293 = G__31298;
i__31257_31294 = G__31299;
continue;
} else {
var temp__5735__auto___31300__$1 = cljs.core.seq.call(null,seq__31254_31291);
if(temp__5735__auto___31300__$1){
var seq__31254_31301__$1 = temp__5735__auto___31300__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31254_31301__$1)){
var c__5567__auto___31302 = cljs.core.chunk_first.call(null,seq__31254_31301__$1);
var G__31303 = cljs.core.chunk_rest.call(null,seq__31254_31301__$1);
var G__31304 = c__5567__auto___31302;
var G__31305 = cljs.core.count.call(null,c__5567__auto___31302);
var G__31306 = (0);
seq__31254_31291 = G__31303;
chunk__31255_31292 = G__31304;
count__31256_31293 = G__31305;
i__31257_31294 = G__31306;
continue;
} else {
var req_31307 = cljs.core.first.call(null,seq__31254_31301__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31307,prov);


var G__31308 = cljs.core.next.call(null,seq__31254_31301__$1);
var G__31309 = null;
var G__31310 = (0);
var G__31311 = (0);
seq__31254_31291 = G__31308;
chunk__31255_31292 = G__31309;
count__31256_31293 = G__31310;
i__31257_31294 = G__31311;
continue;
}
} else {
}
}
break;
}


var G__31312 = cljs.core.next.call(null,seq__31238__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31238 = G__31312;
chunk__31239 = G__31313;
count__31240 = G__31314;
i__31241 = G__31315;
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
var seq__31258 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__31259 = null;
var count__31260 = (0);
var i__31261 = (0);
while(true){
if((i__31261 < count__31260)){
var prov = cljs.core._nth.call(null,chunk__31259,i__31261);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31258,chunk__31259,count__31260,i__31261,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31258,chunk__31259,count__31260,i__31261,prov,requires))
);


var G__31316 = seq__31258;
var G__31317 = chunk__31259;
var G__31318 = count__31260;
var G__31319 = (i__31261 + (1));
seq__31258 = G__31316;
chunk__31259 = G__31317;
count__31260 = G__31318;
i__31261 = G__31319;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31258);
if(temp__5735__auto__){
var seq__31258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31258__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31258__$1);
var G__31320 = cljs.core.chunk_rest.call(null,seq__31258__$1);
var G__31321 = c__5567__auto__;
var G__31322 = cljs.core.count.call(null,c__5567__auto__);
var G__31323 = (0);
seq__31258 = G__31320;
chunk__31259 = G__31321;
count__31260 = G__31322;
i__31261 = G__31323;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31258__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31258,chunk__31259,count__31260,i__31261,prov,seq__31258__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31258,chunk__31259,count__31260,i__31261,prov,seq__31258__$1,temp__5735__auto__,requires))
);


var G__31324 = cljs.core.next.call(null,seq__31258__$1);
var G__31325 = null;
var G__31326 = (0);
var G__31327 = (0);
seq__31258 = G__31324;
chunk__31259 = G__31325;
count__31260 = G__31326;
i__31261 = G__31327;
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
return cljs.core.some.call(null,(function (p__31328){
var vec__31329 = p__31328;
var _ = cljs.core.nth.call(null,vec__31329,(0),null);
var v = cljs.core.nth.call(null,vec__31329,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__31332){
var vec__31333 = p__31332;
var k = cljs.core.nth.call(null,vec__31333,(0),null);
var v = cljs.core.nth.call(null,vec__31333,(1),null);
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

var seq__31345_31353 = cljs.core.seq.call(null,deps);
var chunk__31346_31354 = null;
var count__31347_31355 = (0);
var i__31348_31356 = (0);
while(true){
if((i__31348_31356 < count__31347_31355)){
var dep_31357 = cljs.core._nth.call(null,chunk__31346_31354,i__31348_31356);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_31357;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31357));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31357,(depth + (1)),state);
} else {
}


var G__31358 = seq__31345_31353;
var G__31359 = chunk__31346_31354;
var G__31360 = count__31347_31355;
var G__31361 = (i__31348_31356 + (1));
seq__31345_31353 = G__31358;
chunk__31346_31354 = G__31359;
count__31347_31355 = G__31360;
i__31348_31356 = G__31361;
continue;
} else {
var temp__5735__auto___31362 = cljs.core.seq.call(null,seq__31345_31353);
if(temp__5735__auto___31362){
var seq__31345_31363__$1 = temp__5735__auto___31362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31345_31363__$1)){
var c__5567__auto___31364 = cljs.core.chunk_first.call(null,seq__31345_31363__$1);
var G__31365 = cljs.core.chunk_rest.call(null,seq__31345_31363__$1);
var G__31366 = c__5567__auto___31364;
var G__31367 = cljs.core.count.call(null,c__5567__auto___31364);
var G__31368 = (0);
seq__31345_31353 = G__31365;
chunk__31346_31354 = G__31366;
count__31347_31355 = G__31367;
i__31348_31356 = G__31368;
continue;
} else {
var dep_31369 = cljs.core.first.call(null,seq__31345_31363__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_31369;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31369));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31369,(depth + (1)),state);
} else {
}


var G__31370 = cljs.core.next.call(null,seq__31345_31363__$1);
var G__31371 = null;
var G__31372 = (0);
var G__31373 = (0);
seq__31345_31353 = G__31370;
chunk__31346_31354 = G__31371;
count__31347_31355 = G__31372;
i__31348_31356 = G__31373;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31349){
var vec__31350 = p__31349;
var seq__31351 = cljs.core.seq.call(null,vec__31350);
var first__31352 = cljs.core.first.call(null,seq__31351);
var seq__31351__$1 = cljs.core.next.call(null,seq__31351);
var x = first__31352;
var xs = seq__31351__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__31336_SHARP_){
return clojure.set.difference.call(null,p1__31336_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__31374_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__31374_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31375 = cljs.core.seq.call(null,provides);
var chunk__31376 = null;
var count__31377 = (0);
var i__31378 = (0);
while(true){
if((i__31378 < count__31377)){
var prov = cljs.core._nth.call(null,chunk__31376,i__31378);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31387_31395 = cljs.core.seq.call(null,requires);
var chunk__31388_31396 = null;
var count__31389_31397 = (0);
var i__31390_31398 = (0);
while(true){
if((i__31390_31398 < count__31389_31397)){
var req_31399 = cljs.core._nth.call(null,chunk__31388_31396,i__31390_31398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31399,prov);


var G__31400 = seq__31387_31395;
var G__31401 = chunk__31388_31396;
var G__31402 = count__31389_31397;
var G__31403 = (i__31390_31398 + (1));
seq__31387_31395 = G__31400;
chunk__31388_31396 = G__31401;
count__31389_31397 = G__31402;
i__31390_31398 = G__31403;
continue;
} else {
var temp__5735__auto___31404 = cljs.core.seq.call(null,seq__31387_31395);
if(temp__5735__auto___31404){
var seq__31387_31405__$1 = temp__5735__auto___31404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31387_31405__$1)){
var c__5567__auto___31406 = cljs.core.chunk_first.call(null,seq__31387_31405__$1);
var G__31407 = cljs.core.chunk_rest.call(null,seq__31387_31405__$1);
var G__31408 = c__5567__auto___31406;
var G__31409 = cljs.core.count.call(null,c__5567__auto___31406);
var G__31410 = (0);
seq__31387_31395 = G__31407;
chunk__31388_31396 = G__31408;
count__31389_31397 = G__31409;
i__31390_31398 = G__31410;
continue;
} else {
var req_31411 = cljs.core.first.call(null,seq__31387_31405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31411,prov);


var G__31412 = cljs.core.next.call(null,seq__31387_31405__$1);
var G__31413 = null;
var G__31414 = (0);
var G__31415 = (0);
seq__31387_31395 = G__31412;
chunk__31388_31396 = G__31413;
count__31389_31397 = G__31414;
i__31390_31398 = G__31415;
continue;
}
} else {
}
}
break;
}


var G__31416 = seq__31375;
var G__31417 = chunk__31376;
var G__31418 = count__31377;
var G__31419 = (i__31378 + (1));
seq__31375 = G__31416;
chunk__31376 = G__31417;
count__31377 = G__31418;
i__31378 = G__31419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31375);
if(temp__5735__auto__){
var seq__31375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31375__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31375__$1);
var G__31420 = cljs.core.chunk_rest.call(null,seq__31375__$1);
var G__31421 = c__5567__auto__;
var G__31422 = cljs.core.count.call(null,c__5567__auto__);
var G__31423 = (0);
seq__31375 = G__31420;
chunk__31376 = G__31421;
count__31377 = G__31422;
i__31378 = G__31423;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31375__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31391_31424 = cljs.core.seq.call(null,requires);
var chunk__31392_31425 = null;
var count__31393_31426 = (0);
var i__31394_31427 = (0);
while(true){
if((i__31394_31427 < count__31393_31426)){
var req_31428 = cljs.core._nth.call(null,chunk__31392_31425,i__31394_31427);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31428,prov);


var G__31429 = seq__31391_31424;
var G__31430 = chunk__31392_31425;
var G__31431 = count__31393_31426;
var G__31432 = (i__31394_31427 + (1));
seq__31391_31424 = G__31429;
chunk__31392_31425 = G__31430;
count__31393_31426 = G__31431;
i__31394_31427 = G__31432;
continue;
} else {
var temp__5735__auto___31433__$1 = cljs.core.seq.call(null,seq__31391_31424);
if(temp__5735__auto___31433__$1){
var seq__31391_31434__$1 = temp__5735__auto___31433__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31391_31434__$1)){
var c__5567__auto___31435 = cljs.core.chunk_first.call(null,seq__31391_31434__$1);
var G__31436 = cljs.core.chunk_rest.call(null,seq__31391_31434__$1);
var G__31437 = c__5567__auto___31435;
var G__31438 = cljs.core.count.call(null,c__5567__auto___31435);
var G__31439 = (0);
seq__31391_31424 = G__31436;
chunk__31392_31425 = G__31437;
count__31393_31426 = G__31438;
i__31394_31427 = G__31439;
continue;
} else {
var req_31440 = cljs.core.first.call(null,seq__31391_31434__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31440,prov);


var G__31441 = cljs.core.next.call(null,seq__31391_31434__$1);
var G__31442 = null;
var G__31443 = (0);
var G__31444 = (0);
seq__31391_31424 = G__31441;
chunk__31392_31425 = G__31442;
count__31393_31426 = G__31443;
i__31394_31427 = G__31444;
continue;
}
} else {
}
}
break;
}


var G__31445 = cljs.core.next.call(null,seq__31375__$1);
var G__31446 = null;
var G__31447 = (0);
var G__31448 = (0);
seq__31375 = G__31445;
chunk__31376 = G__31446;
count__31377 = G__31447;
i__31378 = G__31448;
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
var seq__31449_31453 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31450_31454 = null;
var count__31451_31455 = (0);
var i__31452_31456 = (0);
while(true){
if((i__31452_31456 < count__31451_31455)){
var ns_31457 = cljs.core._nth.call(null,chunk__31450_31454,i__31452_31456);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31457);


var G__31458 = seq__31449_31453;
var G__31459 = chunk__31450_31454;
var G__31460 = count__31451_31455;
var G__31461 = (i__31452_31456 + (1));
seq__31449_31453 = G__31458;
chunk__31450_31454 = G__31459;
count__31451_31455 = G__31460;
i__31452_31456 = G__31461;
continue;
} else {
var temp__5735__auto___31462 = cljs.core.seq.call(null,seq__31449_31453);
if(temp__5735__auto___31462){
var seq__31449_31463__$1 = temp__5735__auto___31462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31449_31463__$1)){
var c__5567__auto___31464 = cljs.core.chunk_first.call(null,seq__31449_31463__$1);
var G__31465 = cljs.core.chunk_rest.call(null,seq__31449_31463__$1);
var G__31466 = c__5567__auto___31464;
var G__31467 = cljs.core.count.call(null,c__5567__auto___31464);
var G__31468 = (0);
seq__31449_31453 = G__31465;
chunk__31450_31454 = G__31466;
count__31451_31455 = G__31467;
i__31452_31456 = G__31468;
continue;
} else {
var ns_31469 = cljs.core.first.call(null,seq__31449_31463__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31469);


var G__31470 = cljs.core.next.call(null,seq__31449_31463__$1);
var G__31471 = null;
var G__31472 = (0);
var G__31473 = (0);
seq__31449_31453 = G__31470;
chunk__31450_31454 = G__31471;
count__31451_31455 = G__31472;
i__31452_31456 = G__31473;
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
var G__31474__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31475__i = 0, G__31475__a = new Array(arguments.length -  0);
while (G__31475__i < G__31475__a.length) {G__31475__a[G__31475__i] = arguments[G__31475__i + 0]; ++G__31475__i;}
  args = new cljs.core.IndexedSeq(G__31475__a,0,null);
} 
return G__31474__delegate.call(this,args);};
G__31474.cljs$lang$maxFixedArity = 0;
G__31474.cljs$lang$applyTo = (function (arglist__31476){
var args = cljs.core.seq(arglist__31476);
return G__31474__delegate(args);
});
G__31474.cljs$core$IFn$_invoke$arity$variadic = G__31474__delegate;
return G__31474;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31477_SHARP_,p2__31478_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31477_SHARP_)),p2__31478_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31479_SHARP_,p2__31480_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31479_SHARP_),p2__31480_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31481 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31481.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31481.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31481;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31482){if((e31482 instanceof Error)){
var e = e31482;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31482;

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
}catch (e31483){if((e31483 instanceof Error)){
var e = e31483;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31483;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31484 = cljs.core._EQ_;
var expr__31485 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31484.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31485))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31484.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31485))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31484.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31485))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31487,callback){
var map__31488 = p__31487;
var map__31488__$1 = cljs.core.__destructure_map.call(null,map__31488);
var file_msg = map__31488__$1;
var request_url = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_31525){
var state_val_31526 = (state_31525[(1)]);
if((state_val_31526 === (7))){
var inst_31521 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31527_31554 = state_31525__$1;
(statearr_31527_31554[(2)] = inst_31521);

(statearr_31527_31554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (1))){
var state_31525__$1 = state_31525;
var statearr_31528_31555 = state_31525__$1;
(statearr_31528_31555[(2)] = null);

(statearr_31528_31555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (4))){
var inst_31491 = (state_31525[(7)]);
var inst_31491__$1 = (state_31525[(2)]);
var state_31525__$1 = (function (){var statearr_31529 = state_31525;
(statearr_31529[(7)] = inst_31491__$1);

return statearr_31529;
})();
if(cljs.core.truth_(inst_31491__$1)){
var statearr_31530_31556 = state_31525__$1;
(statearr_31530_31556[(1)] = (5));

} else {
var statearr_31531_31557 = state_31525__$1;
(statearr_31531_31557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (15))){
var inst_31506 = (state_31525[(8)]);
var inst_31504 = (state_31525[(9)]);
var inst_31508 = inst_31506.call(null,inst_31504);
var state_31525__$1 = state_31525;
var statearr_31532_31558 = state_31525__$1;
(statearr_31532_31558[(2)] = inst_31508);

(statearr_31532_31558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (13))){
var inst_31515 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31533_31559 = state_31525__$1;
(statearr_31533_31559[(2)] = inst_31515);

(statearr_31533_31559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (6))){
var state_31525__$1 = state_31525;
var statearr_31534_31560 = state_31525__$1;
(statearr_31534_31560[(2)] = null);

(statearr_31534_31560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (17))){
var inst_31512 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31535_31561 = state_31525__$1;
(statearr_31535_31561[(2)] = inst_31512);

(statearr_31535_31561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31523 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31525__$1,inst_31523);
} else {
if((state_val_31526 === (12))){
var state_31525__$1 = state_31525;
var statearr_31536_31562 = state_31525__$1;
(statearr_31536_31562[(2)] = null);

(statearr_31536_31562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (2))){
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31525__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31526 === (11))){
var inst_31496 = (state_31525[(10)]);
var inst_31502 = figwheel.client.file_reloading.blocking_load.call(null,inst_31496);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31525__$1,(14),inst_31502);
} else {
if((state_val_31526 === (9))){
var inst_31496 = (state_31525[(10)]);
var state_31525__$1 = state_31525;
if(cljs.core.truth_(inst_31496)){
var statearr_31537_31563 = state_31525__$1;
(statearr_31537_31563[(1)] = (11));

} else {
var statearr_31538_31564 = state_31525__$1;
(statearr_31538_31564[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (5))){
var inst_31491 = (state_31525[(7)]);
var inst_31497 = (state_31525[(11)]);
var inst_31496 = cljs.core.nth.call(null,inst_31491,(0),null);
var inst_31497__$1 = cljs.core.nth.call(null,inst_31491,(1),null);
var state_31525__$1 = (function (){var statearr_31539 = state_31525;
(statearr_31539[(10)] = inst_31496);

(statearr_31539[(11)] = inst_31497__$1);

return statearr_31539;
})();
if(cljs.core.truth_(inst_31497__$1)){
var statearr_31540_31565 = state_31525__$1;
(statearr_31540_31565[(1)] = (8));

} else {
var statearr_31541_31566 = state_31525__$1;
(statearr_31541_31566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (14))){
var inst_31496 = (state_31525[(10)]);
var inst_31506 = (state_31525[(8)]);
var inst_31504 = (state_31525[(2)]);
var inst_31505 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31506__$1 = cljs.core.get.call(null,inst_31505,inst_31496);
var state_31525__$1 = (function (){var statearr_31542 = state_31525;
(statearr_31542[(8)] = inst_31506__$1);

(statearr_31542[(9)] = inst_31504);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31506__$1)){
var statearr_31543_31567 = state_31525__$1;
(statearr_31543_31567[(1)] = (15));

} else {
var statearr_31544_31568 = state_31525__$1;
(statearr_31544_31568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (16))){
var inst_31504 = (state_31525[(9)]);
var inst_31510 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31504);
var state_31525__$1 = state_31525;
var statearr_31545_31569 = state_31525__$1;
(statearr_31545_31569[(2)] = inst_31510);

(statearr_31545_31569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (10))){
var inst_31517 = (state_31525[(2)]);
var state_31525__$1 = (function (){var statearr_31546 = state_31525;
(statearr_31546[(12)] = inst_31517);

return statearr_31546;
})();
var statearr_31547_31570 = state_31525__$1;
(statearr_31547_31570[(2)] = null);

(statearr_31547_31570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (8))){
var inst_31497 = (state_31525[(11)]);
var inst_31499 = eval(inst_31497);
var state_31525__$1 = state_31525;
var statearr_31548_31571 = state_31525__$1;
(statearr_31548_31571[(2)] = inst_31499);

(statearr_31548_31571[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27340__auto__ = null;
var figwheel$client$file_reloading$state_machine__27340__auto____0 = (function (){
var statearr_31549 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31549[(0)] = figwheel$client$file_reloading$state_machine__27340__auto__);

(statearr_31549[(1)] = (1));

return statearr_31549;
});
var figwheel$client$file_reloading$state_machine__27340__auto____1 = (function (state_31525){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_31525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e31550){var ex__27343__auto__ = e31550;
var statearr_31551_31572 = state_31525;
(statearr_31551_31572[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_31525[(4)]))){
var statearr_31552_31573 = state_31525;
(statearr_31552_31573[(1)] = cljs.core.first.call(null,(state_31525[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31574 = state_31525;
state_31525 = G__31574;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27340__auto__ = function(state_31525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27340__auto____1.call(this,state_31525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27340__auto____0;
figwheel$client$file_reloading$state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27340__auto____1;
return figwheel$client$file_reloading$state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_31553 = f__27414__auto__.call(null);
(statearr_31553[(6)] = c__27413__auto__);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31576 = arguments.length;
switch (G__31576) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31578,callback){
var map__31579 = p__31578;
var map__31579__$1 = cljs.core.__destructure_map.call(null,map__31579);
var file_msg = map__31579__$1;
var namespace = cljs.core.get.call(null,map__31579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31580){
var map__31581 = p__31580;
var map__31581__$1 = cljs.core.__destructure_map.call(null,map__31581);
var file_msg = map__31581__$1;
var namespace = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31582){
var map__31583 = p__31582;
var map__31583__$1 = cljs.core.__destructure_map.call(null,map__31583);
var file_msg = map__31583__$1;
var namespace = cljs.core.get.call(null,map__31583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31584,callback){
var map__31585 = p__31584;
var map__31585__$1 = cljs.core.__destructure_map.call(null,map__31585);
var file_msg = map__31585__$1;
var request_url = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27413__auto___31636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (1))){
var inst_31593 = files;
var inst_31594 = cljs.core.seq.call(null,inst_31593);
var inst_31595 = cljs.core.first.call(null,inst_31594);
var inst_31596 = cljs.core.next.call(null,inst_31594);
var inst_31597 = inst_31593;
var state_31620__$1 = (function (){var statearr_31622 = state_31620;
(statearr_31622[(7)] = inst_31595);

(statearr_31622[(8)] = inst_31597);

(statearr_31622[(9)] = inst_31596);

return statearr_31622;
})();
var statearr_31623_31637 = state_31620__$1;
(statearr_31623_31637[(2)] = null);

(statearr_31623_31637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (2))){
var inst_31597 = (state_31620[(8)]);
var inst_31603 = (state_31620[(10)]);
var inst_31602 = cljs.core.seq.call(null,inst_31597);
var inst_31603__$1 = cljs.core.first.call(null,inst_31602);
var inst_31604 = cljs.core.next.call(null,inst_31602);
var inst_31605 = (inst_31603__$1 == null);
var inst_31606 = cljs.core.not.call(null,inst_31605);
var state_31620__$1 = (function (){var statearr_31624 = state_31620;
(statearr_31624[(10)] = inst_31603__$1);

(statearr_31624[(11)] = inst_31604);

return statearr_31624;
})();
if(inst_31606){
var statearr_31625_31638 = state_31620__$1;
(statearr_31625_31638[(1)] = (4));

} else {
var statearr_31626_31639 = state_31620__$1;
(statearr_31626_31639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (3))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (4))){
var inst_31603 = (state_31620[(10)]);
var inst_31608 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31603);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31620__$1,(7),inst_31608);
} else {
if((state_val_31621 === (5))){
var inst_31614 = cljs.core.async.close_BANG_.call(null,out);
var state_31620__$1 = state_31620;
var statearr_31627_31640 = state_31620__$1;
(statearr_31627_31640[(2)] = inst_31614);

(statearr_31627_31640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31616 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31628_31641 = state_31620__$1;
(statearr_31628_31641[(2)] = inst_31616);

(statearr_31628_31641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (7))){
var inst_31604 = (state_31620[(11)]);
var inst_31610 = (state_31620[(2)]);
var inst_31611 = cljs.core.async.put_BANG_.call(null,out,inst_31610);
var inst_31597 = inst_31604;
var state_31620__$1 = (function (){var statearr_31629 = state_31620;
(statearr_31629[(8)] = inst_31597);

(statearr_31629[(12)] = inst_31611);

return statearr_31629;
})();
var statearr_31630_31642 = state_31620__$1;
(statearr_31630_31642[(2)] = null);

(statearr_31630_31642[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____0 = (function (){
var statearr_31631 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31631[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__);

(statearr_31631[(1)] = (1));

return statearr_31631;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____1 = (function (state_31620){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_31620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e31632){var ex__27343__auto__ = e31632;
var statearr_31633_31643 = state_31620;
(statearr_31633_31643[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_31620[(4)]))){
var statearr_31634_31644 = state_31620;
(statearr_31634_31644[(1)] = cljs.core.first.call(null,(state_31620[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31645 = state_31620;
state_31620 = G__31645;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_31635 = f__27414__auto__.call(null);
(statearr_31635[(6)] = c__27413__auto___31636);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31646,opts){
var map__31647 = p__31646;
var map__31647__$1 = cljs.core.__destructure_map.call(null,map__31647);
var eval_body = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31647__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31648){var e = e31648;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31649_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31649_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31650){
var vec__31651 = p__31650;
var k = cljs.core.nth.call(null,vec__31651,(0),null);
var v = cljs.core.nth.call(null,vec__31651,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31654){
var vec__31655 = p__31654;
var k = cljs.core.nth.call(null,vec__31655,(0),null);
var v = cljs.core.nth.call(null,vec__31655,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31661,p__31662){
var map__31663 = p__31661;
var map__31663__$1 = cljs.core.__destructure_map.call(null,map__31663);
var opts = map__31663__$1;
var before_jsload = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31664 = p__31662;
var map__31664__$1 = cljs.core.__destructure_map.call(null,map__31664);
var msg = map__31664__$1;
var files = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31664__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27414__auto__ = (function (){var switch__27339__auto__ = (function (state_31797){
var state_val_31798 = (state_31797[(1)]);
if((state_val_31798 === (7))){
var inst_31679 = (state_31797[(7)]);
var inst_31678 = (state_31797[(8)]);
var inst_31677 = (state_31797[(9)]);
var inst_31676 = (state_31797[(10)]);
var inst_31684 = cljs.core._nth.call(null,inst_31677,inst_31679);
var inst_31685 = figwheel.client.file_reloading.eval_body.call(null,inst_31684,opts);
var inst_31686 = (inst_31679 + (1));
var tmp31799 = inst_31678;
var tmp31800 = inst_31677;
var tmp31801 = inst_31676;
var inst_31676__$1 = tmp31801;
var inst_31677__$1 = tmp31800;
var inst_31678__$1 = tmp31799;
var inst_31679__$1 = inst_31686;
var state_31797__$1 = (function (){var statearr_31802 = state_31797;
(statearr_31802[(7)] = inst_31679__$1);

(statearr_31802[(8)] = inst_31678__$1);

(statearr_31802[(9)] = inst_31677__$1);

(statearr_31802[(10)] = inst_31676__$1);

(statearr_31802[(11)] = inst_31685);

return statearr_31802;
})();
var statearr_31803_31871 = state_31797__$1;
(statearr_31803_31871[(2)] = null);

(statearr_31803_31871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (20))){
var inst_31719 = (state_31797[(12)]);
var inst_31728 = figwheel.client.file_reloading.sort_files.call(null,inst_31719);
var state_31797__$1 = state_31797;
var statearr_31804_31872 = state_31797__$1;
(statearr_31804_31872[(2)] = inst_31728);

(statearr_31804_31872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (27))){
var state_31797__$1 = state_31797;
var statearr_31805_31873 = state_31797__$1;
(statearr_31805_31873[(2)] = null);

(statearr_31805_31873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (1))){
var inst_31668 = (state_31797[(13)]);
var inst_31665 = before_jsload.call(null,files);
var inst_31666 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31667 = (function (){return (function (p1__31658_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31658_SHARP_);
});
})();
var inst_31668__$1 = cljs.core.filter.call(null,inst_31667,files);
var inst_31669 = cljs.core.not_empty.call(null,inst_31668__$1);
var state_31797__$1 = (function (){var statearr_31806 = state_31797;
(statearr_31806[(13)] = inst_31668__$1);

(statearr_31806[(14)] = inst_31665);

(statearr_31806[(15)] = inst_31666);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31669)){
var statearr_31807_31874 = state_31797__$1;
(statearr_31807_31874[(1)] = (2));

} else {
var statearr_31808_31875 = state_31797__$1;
(statearr_31808_31875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (24))){
var state_31797__$1 = state_31797;
var statearr_31809_31876 = state_31797__$1;
(statearr_31809_31876[(2)] = null);

(statearr_31809_31876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (4))){
var inst_31720 = (state_31797[(16)]);
var inst_31713 = (state_31797[(2)]);
var inst_31714 = cljs.core.List.EMPTY;
var inst_31715 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31714);
var inst_31716 = (function (){return (function (p1__31659_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31659_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31659_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31659_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_31717 = cljs.core.filter.call(null,inst_31716,files);
var inst_31718 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31719 = cljs.core.concat.call(null,inst_31717,inst_31718);
var inst_31720__$1 = reload_dependents;
var state_31797__$1 = (function (){var statearr_31810 = state_31797;
(statearr_31810[(16)] = inst_31720__$1);

(statearr_31810[(17)] = inst_31715);

(statearr_31810[(18)] = inst_31713);

(statearr_31810[(12)] = inst_31719);

return statearr_31810;
})();
if(cljs.core.truth_(inst_31720__$1)){
var statearr_31811_31877 = state_31797__$1;
(statearr_31811_31877[(1)] = (16));

} else {
var statearr_31812_31878 = state_31797__$1;
(statearr_31812_31878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (15))){
var inst_31703 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31813_31879 = state_31797__$1;
(statearr_31813_31879[(2)] = inst_31703);

(statearr_31813_31879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (21))){
var inst_31730 = (state_31797[(19)]);
var inst_31730__$1 = (state_31797[(2)]);
var inst_31731 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31730__$1);
var state_31797__$1 = (function (){var statearr_31814 = state_31797;
(statearr_31814[(19)] = inst_31730__$1);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31797__$1,(22),inst_31731);
} else {
if((state_val_31798 === (31))){
var inst_31795 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31797__$1,inst_31795);
} else {
if((state_val_31798 === (32))){
var inst_31772 = (state_31797[(20)]);
var inst_31776 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31777 = cljs.core.map.call(null,inst_31776,inst_31772);
var inst_31778 = cljs.core.pr_str.call(null,inst_31777);
var inst_31779 = ["figwheel-no-load meta-data: ",inst_31778].join('');
var inst_31780 = figwheel.client.utils.log.call(null,inst_31779);
var state_31797__$1 = state_31797;
var statearr_31815_31880 = state_31797__$1;
(statearr_31815_31880[(2)] = inst_31780);

(statearr_31815_31880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (33))){
var state_31797__$1 = state_31797;
var statearr_31816_31881 = state_31797__$1;
(statearr_31816_31881[(2)] = null);

(statearr_31816_31881[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (13))){
var inst_31689 = (state_31797[(21)]);
var inst_31693 = cljs.core.chunk_first.call(null,inst_31689);
var inst_31694 = cljs.core.chunk_rest.call(null,inst_31689);
var inst_31695 = cljs.core.count.call(null,inst_31693);
var inst_31676 = inst_31694;
var inst_31677 = inst_31693;
var inst_31678 = inst_31695;
var inst_31679 = (0);
var state_31797__$1 = (function (){var statearr_31817 = state_31797;
(statearr_31817[(7)] = inst_31679);

(statearr_31817[(8)] = inst_31678);

(statearr_31817[(9)] = inst_31677);

(statearr_31817[(10)] = inst_31676);

return statearr_31817;
})();
var statearr_31818_31882 = state_31797__$1;
(statearr_31818_31882[(2)] = null);

(statearr_31818_31882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (22))){
var inst_31733 = (state_31797[(22)]);
var inst_31734 = (state_31797[(23)]);
var inst_31738 = (state_31797[(24)]);
var inst_31730 = (state_31797[(19)]);
var inst_31733__$1 = (state_31797[(2)]);
var inst_31734__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31733__$1);
var inst_31735 = (function (){var all_files = inst_31730;
var res_SINGLEQUOTE_ = inst_31733__$1;
var res = inst_31734__$1;
return (function (p1__31660_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31660_SHARP_));
});
})();
var inst_31736 = cljs.core.filter.call(null,inst_31735,inst_31733__$1);
var inst_31737 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31738__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31737);
var inst_31739 = cljs.core.not_empty.call(null,inst_31738__$1);
var state_31797__$1 = (function (){var statearr_31819 = state_31797;
(statearr_31819[(22)] = inst_31733__$1);

(statearr_31819[(23)] = inst_31734__$1);

(statearr_31819[(25)] = inst_31736);

(statearr_31819[(24)] = inst_31738__$1);

return statearr_31819;
})();
if(cljs.core.truth_(inst_31739)){
var statearr_31820_31883 = state_31797__$1;
(statearr_31820_31883[(1)] = (23));

} else {
var statearr_31821_31884 = state_31797__$1;
(statearr_31821_31884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (36))){
var state_31797__$1 = state_31797;
var statearr_31822_31885 = state_31797__$1;
(statearr_31822_31885[(2)] = null);

(statearr_31822_31885[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (29))){
var inst_31733 = (state_31797[(22)]);
var inst_31734 = (state_31797[(23)]);
var inst_31736 = (state_31797[(25)]);
var inst_31738 = (state_31797[(24)]);
var inst_31772 = (state_31797[(20)]);
var inst_31730 = (state_31797[(19)]);
var inst_31766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31769 = (function (){var all_files = inst_31730;
var res_SINGLEQUOTE_ = inst_31733;
var res = inst_31734;
var files_not_loaded = inst_31736;
var dependencies_that_loaded = inst_31738;
return (function (p__31768){
var map__31823 = p__31768;
var map__31823__$1 = cljs.core.__destructure_map.call(null,map__31823);
var namespace = cljs.core.get.call(null,map__31823__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_31770 = cljs.core.group_by.call(null,inst_31769,inst_31736);
var inst_31771 = cljs.core.__destructure_map.call(null,inst_31770);
var inst_31772__$1 = cljs.core.get.call(null,inst_31771,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31773 = cljs.core.get.call(null,inst_31771,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31774 = cljs.core.not_empty.call(null,inst_31772__$1);
var state_31797__$1 = (function (){var statearr_31824 = state_31797;
(statearr_31824[(26)] = inst_31773);

(statearr_31824[(27)] = inst_31766);

(statearr_31824[(20)] = inst_31772__$1);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31774)){
var statearr_31825_31886 = state_31797__$1;
(statearr_31825_31886[(1)] = (32));

} else {
var statearr_31826_31887 = state_31797__$1;
(statearr_31826_31887[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (6))){
var inst_31710 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31827_31888 = state_31797__$1;
(statearr_31827_31888[(2)] = inst_31710);

(statearr_31827_31888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (28))){
var inst_31736 = (state_31797[(25)]);
var inst_31763 = (state_31797[(2)]);
var inst_31764 = cljs.core.not_empty.call(null,inst_31736);
var state_31797__$1 = (function (){var statearr_31828 = state_31797;
(statearr_31828[(28)] = inst_31763);

return statearr_31828;
})();
if(cljs.core.truth_(inst_31764)){
var statearr_31829_31889 = state_31797__$1;
(statearr_31829_31889[(1)] = (29));

} else {
var statearr_31830_31890 = state_31797__$1;
(statearr_31830_31890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (25))){
var inst_31734 = (state_31797[(23)]);
var inst_31750 = (state_31797[(2)]);
var inst_31751 = cljs.core.not_empty.call(null,inst_31734);
var state_31797__$1 = (function (){var statearr_31831 = state_31797;
(statearr_31831[(29)] = inst_31750);

return statearr_31831;
})();
if(cljs.core.truth_(inst_31751)){
var statearr_31832_31891 = state_31797__$1;
(statearr_31832_31891[(1)] = (26));

} else {
var statearr_31833_31892 = state_31797__$1;
(statearr_31833_31892[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (34))){
var inst_31773 = (state_31797[(26)]);
var inst_31783 = (state_31797[(2)]);
var inst_31784 = cljs.core.not_empty.call(null,inst_31773);
var state_31797__$1 = (function (){var statearr_31834 = state_31797;
(statearr_31834[(30)] = inst_31783);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31784)){
var statearr_31835_31893 = state_31797__$1;
(statearr_31835_31893[(1)] = (35));

} else {
var statearr_31836_31894 = state_31797__$1;
(statearr_31836_31894[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (17))){
var state_31797__$1 = state_31797;
var statearr_31837_31895 = state_31797__$1;
(statearr_31837_31895[(2)] = recompile_dependents);

(statearr_31837_31895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (3))){
var state_31797__$1 = state_31797;
var statearr_31838_31896 = state_31797__$1;
(statearr_31838_31896[(2)] = null);

(statearr_31838_31896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (12))){
var inst_31706 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31839_31897 = state_31797__$1;
(statearr_31839_31897[(2)] = inst_31706);

(statearr_31839_31897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (2))){
var inst_31668 = (state_31797[(13)]);
var inst_31675 = cljs.core.seq.call(null,inst_31668);
var inst_31676 = inst_31675;
var inst_31677 = null;
var inst_31678 = (0);
var inst_31679 = (0);
var state_31797__$1 = (function (){var statearr_31840 = state_31797;
(statearr_31840[(7)] = inst_31679);

(statearr_31840[(8)] = inst_31678);

(statearr_31840[(9)] = inst_31677);

(statearr_31840[(10)] = inst_31676);

return statearr_31840;
})();
var statearr_31841_31898 = state_31797__$1;
(statearr_31841_31898[(2)] = null);

(statearr_31841_31898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (23))){
var inst_31733 = (state_31797[(22)]);
var inst_31734 = (state_31797[(23)]);
var inst_31736 = (state_31797[(25)]);
var inst_31738 = (state_31797[(24)]);
var inst_31730 = (state_31797[(19)]);
var inst_31741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31743 = (function (){var all_files = inst_31730;
var res_SINGLEQUOTE_ = inst_31733;
var res = inst_31734;
var files_not_loaded = inst_31736;
var dependencies_that_loaded = inst_31738;
return (function (p__31742){
var map__31842 = p__31742;
var map__31842__$1 = cljs.core.__destructure_map.call(null,map__31842);
var request_url = cljs.core.get.call(null,map__31842__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31744 = cljs.core.reverse.call(null,inst_31738);
var inst_31745 = cljs.core.map.call(null,inst_31743,inst_31744);
var inst_31746 = cljs.core.pr_str.call(null,inst_31745);
var inst_31747 = figwheel.client.utils.log.call(null,inst_31746);
var state_31797__$1 = (function (){var statearr_31843 = state_31797;
(statearr_31843[(31)] = inst_31741);

return statearr_31843;
})();
var statearr_31844_31899 = state_31797__$1;
(statearr_31844_31899[(2)] = inst_31747);

(statearr_31844_31899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (35))){
var inst_31773 = (state_31797[(26)]);
var inst_31786 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31773);
var inst_31787 = cljs.core.pr_str.call(null,inst_31786);
var inst_31788 = ["not required: ",inst_31787].join('');
var inst_31789 = figwheel.client.utils.log.call(null,inst_31788);
var state_31797__$1 = state_31797;
var statearr_31845_31900 = state_31797__$1;
(statearr_31845_31900[(2)] = inst_31789);

(statearr_31845_31900[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (19))){
var inst_31719 = (state_31797[(12)]);
var inst_31726 = figwheel.client.file_reloading.expand_files.call(null,inst_31719);
var state_31797__$1 = state_31797;
var statearr_31846_31901 = state_31797__$1;
(statearr_31846_31901[(2)] = inst_31726);

(statearr_31846_31901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (11))){
var state_31797__$1 = state_31797;
var statearr_31847_31902 = state_31797__$1;
(statearr_31847_31902[(2)] = null);

(statearr_31847_31902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (9))){
var inst_31708 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31848_31903 = state_31797__$1;
(statearr_31848_31903[(2)] = inst_31708);

(statearr_31848_31903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (5))){
var inst_31679 = (state_31797[(7)]);
var inst_31678 = (state_31797[(8)]);
var inst_31681 = (inst_31679 < inst_31678);
var inst_31682 = inst_31681;
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31682)){
var statearr_31849_31904 = state_31797__$1;
(statearr_31849_31904[(1)] = (7));

} else {
var statearr_31850_31905 = state_31797__$1;
(statearr_31850_31905[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (14))){
var inst_31689 = (state_31797[(21)]);
var inst_31698 = cljs.core.first.call(null,inst_31689);
var inst_31699 = figwheel.client.file_reloading.eval_body.call(null,inst_31698,opts);
var inst_31700 = cljs.core.next.call(null,inst_31689);
var inst_31676 = inst_31700;
var inst_31677 = null;
var inst_31678 = (0);
var inst_31679 = (0);
var state_31797__$1 = (function (){var statearr_31851 = state_31797;
(statearr_31851[(7)] = inst_31679);

(statearr_31851[(32)] = inst_31699);

(statearr_31851[(8)] = inst_31678);

(statearr_31851[(9)] = inst_31677);

(statearr_31851[(10)] = inst_31676);

return statearr_31851;
})();
var statearr_31852_31906 = state_31797__$1;
(statearr_31852_31906[(2)] = null);

(statearr_31852_31906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (26))){
var inst_31733 = (state_31797[(22)]);
var inst_31734 = (state_31797[(23)]);
var inst_31736 = (state_31797[(25)]);
var inst_31738 = (state_31797[(24)]);
var inst_31730 = (state_31797[(19)]);
var inst_31753 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31755 = (function (){var all_files = inst_31730;
var res_SINGLEQUOTE_ = inst_31733;
var res = inst_31734;
var files_not_loaded = inst_31736;
var dependencies_that_loaded = inst_31738;
return (function (p__31754){
var map__31853 = p__31754;
var map__31853__$1 = cljs.core.__destructure_map.call(null,map__31853);
var namespace = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31756 = cljs.core.map.call(null,inst_31755,inst_31734);
var inst_31757 = cljs.core.pr_str.call(null,inst_31756);
var inst_31758 = figwheel.client.utils.log.call(null,inst_31757);
var inst_31759 = (function (){var all_files = inst_31730;
var res_SINGLEQUOTE_ = inst_31733;
var res = inst_31734;
var files_not_loaded = inst_31736;
var dependencies_that_loaded = inst_31738;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31760 = setTimeout(inst_31759,(10));
var state_31797__$1 = (function (){var statearr_31854 = state_31797;
(statearr_31854[(33)] = inst_31758);

(statearr_31854[(34)] = inst_31753);

return statearr_31854;
})();
var statearr_31855_31907 = state_31797__$1;
(statearr_31855_31907[(2)] = inst_31760);

(statearr_31855_31907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (16))){
var inst_31720 = (state_31797[(16)]);
var state_31797__$1 = state_31797;
var statearr_31856_31908 = state_31797__$1;
(statearr_31856_31908[(2)] = inst_31720);

(statearr_31856_31908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (30))){
var state_31797__$1 = state_31797;
var statearr_31857_31909 = state_31797__$1;
(statearr_31857_31909[(2)] = null);

(statearr_31857_31909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (10))){
var inst_31689 = (state_31797[(21)]);
var inst_31691 = cljs.core.chunked_seq_QMARK_.call(null,inst_31689);
var state_31797__$1 = state_31797;
if(inst_31691){
var statearr_31858_31910 = state_31797__$1;
(statearr_31858_31910[(1)] = (13));

} else {
var statearr_31859_31911 = state_31797__$1;
(statearr_31859_31911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (18))){
var inst_31724 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
if(cljs.core.truth_(inst_31724)){
var statearr_31860_31912 = state_31797__$1;
(statearr_31860_31912[(1)] = (19));

} else {
var statearr_31861_31913 = state_31797__$1;
(statearr_31861_31913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (37))){
var inst_31792 = (state_31797[(2)]);
var state_31797__$1 = state_31797;
var statearr_31862_31914 = state_31797__$1;
(statearr_31862_31914[(2)] = inst_31792);

(statearr_31862_31914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31798 === (8))){
var inst_31689 = (state_31797[(21)]);
var inst_31676 = (state_31797[(10)]);
var inst_31689__$1 = cljs.core.seq.call(null,inst_31676);
var state_31797__$1 = (function (){var statearr_31863 = state_31797;
(statearr_31863[(21)] = inst_31689__$1);

return statearr_31863;
})();
if(inst_31689__$1){
var statearr_31864_31915 = state_31797__$1;
(statearr_31864_31915[(1)] = (10));

} else {
var statearr_31865_31916 = state_31797__$1;
(statearr_31865_31916[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____0 = (function (){
var statearr_31866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31866[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__);

(statearr_31866[(1)] = (1));

return statearr_31866;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____1 = (function (state_31797){
while(true){
var ret_value__27341__auto__ = (function (){try{while(true){
var result__27342__auto__ = switch__27339__auto__.call(null,state_31797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27342__auto__;
}
break;
}
}catch (e31867){var ex__27343__auto__ = e31867;
var statearr_31868_31917 = state_31797;
(statearr_31868_31917[(2)] = ex__27343__auto__);


if(cljs.core.seq.call(null,(state_31797[(4)]))){
var statearr_31869_31918 = state_31797;
(statearr_31869_31918[(1)] = cljs.core.first.call(null,(state_31797[(4)])));

} else {
throw ex__27343__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31919 = state_31797;
state_31797 = G__31919;
continue;
} else {
return ret_value__27341__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__ = function(state_31797){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____1.call(this,state_31797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27340__auto__;
})()
})();
var state__27415__auto__ = (function (){var statearr_31870 = f__27414__auto__.call(null);
(statearr_31870[(6)] = c__27413__auto__);

return statearr_31870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27415__auto__);
}));

return c__27413__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31922,link){
var map__31923 = p__31922;
var map__31923__$1 = cljs.core.__destructure_map.call(null,map__31923);
var file = cljs.core.get.call(null,map__31923__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31920_SHARP_,p2__31921_SHARP_){
if(cljs.core._EQ_.call(null,p1__31920_SHARP_,p2__31921_SHARP_)){
return p1__31920_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31925){
var map__31926 = p__31925;
var map__31926__$1 = cljs.core.__destructure_map.call(null,map__31926);
var match_length = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31926__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31924_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31924_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31927_SHARP_,p2__31928_SHARP_){
return cljs.core.assoc.call(null,p1__31927_SHARP_,cljs.core.get.call(null,p2__31928_SHARP_,key),p2__31928_SHARP_);
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
var loaded_f_datas_31929 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31929);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31929);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31930,p__31931){
var map__31932 = p__31930;
var map__31932__$1 = cljs.core.__destructure_map.call(null,map__31932);
var on_cssload = cljs.core.get.call(null,map__31932__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31933 = p__31931;
var map__31933__$1 = cljs.core.__destructure_map.call(null,map__31933);
var files_msg = map__31933__$1;
var files = cljs.core.get.call(null,map__31933__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1655118088999
