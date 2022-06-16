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
var G__31241 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__31241 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31241,"requires");
}
}):(function (path){
var G__31242 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__31242 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__31242);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31243_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31243_SHARP_)));
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
var G__31244 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__31244__$1 = (((G__31244 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__31244,"provides"));
if((G__31244__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__31244__$1);
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
var seq__31245 = cljs.core.seq.call(null,provides);
var chunk__31246 = null;
var count__31247 = (0);
var i__31248 = (0);
while(true){
if((i__31248 < count__31247)){
var prov = cljs.core._nth.call(null,chunk__31246,i__31248);
var seq__31257_31269 = cljs.core.seq.call(null,requires);
var chunk__31258_31270 = null;
var count__31259_31271 = (0);
var i__31260_31272 = (0);
while(true){
if((i__31260_31272 < count__31259_31271)){
var req_31273 = cljs.core._nth.call(null,chunk__31258_31270,i__31260_31272);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31273,prov);


var G__31274 = seq__31257_31269;
var G__31275 = chunk__31258_31270;
var G__31276 = count__31259_31271;
var G__31277 = (i__31260_31272 + (1));
seq__31257_31269 = G__31274;
chunk__31258_31270 = G__31275;
count__31259_31271 = G__31276;
i__31260_31272 = G__31277;
continue;
} else {
var temp__5735__auto___31278 = cljs.core.seq.call(null,seq__31257_31269);
if(temp__5735__auto___31278){
var seq__31257_31279__$1 = temp__5735__auto___31278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31257_31279__$1)){
var c__5567__auto___31280 = cljs.core.chunk_first.call(null,seq__31257_31279__$1);
var G__31281 = cljs.core.chunk_rest.call(null,seq__31257_31279__$1);
var G__31282 = c__5567__auto___31280;
var G__31283 = cljs.core.count.call(null,c__5567__auto___31280);
var G__31284 = (0);
seq__31257_31269 = G__31281;
chunk__31258_31270 = G__31282;
count__31259_31271 = G__31283;
i__31260_31272 = G__31284;
continue;
} else {
var req_31285 = cljs.core.first.call(null,seq__31257_31279__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31285,prov);


var G__31286 = cljs.core.next.call(null,seq__31257_31279__$1);
var G__31287 = null;
var G__31288 = (0);
var G__31289 = (0);
seq__31257_31269 = G__31286;
chunk__31258_31270 = G__31287;
count__31259_31271 = G__31288;
i__31260_31272 = G__31289;
continue;
}
} else {
}
}
break;
}


var G__31290 = seq__31245;
var G__31291 = chunk__31246;
var G__31292 = count__31247;
var G__31293 = (i__31248 + (1));
seq__31245 = G__31290;
chunk__31246 = G__31291;
count__31247 = G__31292;
i__31248 = G__31293;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31245);
if(temp__5735__auto__){
var seq__31245__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31245__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31245__$1);
var G__31294 = cljs.core.chunk_rest.call(null,seq__31245__$1);
var G__31295 = c__5567__auto__;
var G__31296 = cljs.core.count.call(null,c__5567__auto__);
var G__31297 = (0);
seq__31245 = G__31294;
chunk__31246 = G__31295;
count__31247 = G__31296;
i__31248 = G__31297;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31245__$1);
var seq__31261_31298 = cljs.core.seq.call(null,requires);
var chunk__31262_31299 = null;
var count__31263_31300 = (0);
var i__31264_31301 = (0);
while(true){
if((i__31264_31301 < count__31263_31300)){
var req_31302 = cljs.core._nth.call(null,chunk__31262_31299,i__31264_31301);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31302,prov);


var G__31303 = seq__31261_31298;
var G__31304 = chunk__31262_31299;
var G__31305 = count__31263_31300;
var G__31306 = (i__31264_31301 + (1));
seq__31261_31298 = G__31303;
chunk__31262_31299 = G__31304;
count__31263_31300 = G__31305;
i__31264_31301 = G__31306;
continue;
} else {
var temp__5735__auto___31307__$1 = cljs.core.seq.call(null,seq__31261_31298);
if(temp__5735__auto___31307__$1){
var seq__31261_31308__$1 = temp__5735__auto___31307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31261_31308__$1)){
var c__5567__auto___31309 = cljs.core.chunk_first.call(null,seq__31261_31308__$1);
var G__31310 = cljs.core.chunk_rest.call(null,seq__31261_31308__$1);
var G__31311 = c__5567__auto___31309;
var G__31312 = cljs.core.count.call(null,c__5567__auto___31309);
var G__31313 = (0);
seq__31261_31298 = G__31310;
chunk__31262_31299 = G__31311;
count__31263_31300 = G__31312;
i__31264_31301 = G__31313;
continue;
} else {
var req_31314 = cljs.core.first.call(null,seq__31261_31308__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31314,prov);


var G__31315 = cljs.core.next.call(null,seq__31261_31308__$1);
var G__31316 = null;
var G__31317 = (0);
var G__31318 = (0);
seq__31261_31298 = G__31315;
chunk__31262_31299 = G__31316;
count__31263_31300 = G__31317;
i__31264_31301 = G__31318;
continue;
}
} else {
}
}
break;
}


var G__31319 = cljs.core.next.call(null,seq__31245__$1);
var G__31320 = null;
var G__31321 = (0);
var G__31322 = (0);
seq__31245 = G__31319;
chunk__31246 = G__31320;
count__31247 = G__31321;
i__31248 = G__31322;
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
var seq__31265 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__31266 = null;
var count__31267 = (0);
var i__31268 = (0);
while(true){
if((i__31268 < count__31267)){
var prov = cljs.core._nth.call(null,chunk__31266,i__31268);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31265,chunk__31266,count__31267,i__31268,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31265,chunk__31266,count__31267,i__31268,prov,requires))
);


var G__31323 = seq__31265;
var G__31324 = chunk__31266;
var G__31325 = count__31267;
var G__31326 = (i__31268 + (1));
seq__31265 = G__31323;
chunk__31266 = G__31324;
count__31267 = G__31325;
i__31268 = G__31326;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31265);
if(temp__5735__auto__){
var seq__31265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31265__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31265__$1);
var G__31327 = cljs.core.chunk_rest.call(null,seq__31265__$1);
var G__31328 = c__5567__auto__;
var G__31329 = cljs.core.count.call(null,c__5567__auto__);
var G__31330 = (0);
seq__31265 = G__31327;
chunk__31266 = G__31328;
count__31267 = G__31329;
i__31268 = G__31330;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31265__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__31265,chunk__31266,count__31267,i__31268,prov,seq__31265__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__31265,chunk__31266,count__31267,i__31268,prov,seq__31265__$1,temp__5735__auto__,requires))
);


var G__31331 = cljs.core.next.call(null,seq__31265__$1);
var G__31332 = null;
var G__31333 = (0);
var G__31334 = (0);
seq__31265 = G__31331;
chunk__31266 = G__31332;
count__31267 = G__31333;
i__31268 = G__31334;
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
return cljs.core.some.call(null,(function (p__31335){
var vec__31336 = p__31335;
var _ = cljs.core.nth.call(null,vec__31336,(0),null);
var v = cljs.core.nth.call(null,vec__31336,(1),null);
var and__5043__auto__ = v;
if(cljs.core.truth_(and__5043__auto__)){
return v.call(null,dep);
} else {
return and__5043__auto__;
}
}),cljs.core.filter.call(null,(function (p__31339){
var vec__31340 = p__31339;
var k = cljs.core.nth.call(null,vec__31340,(0),null);
var v = cljs.core.nth.call(null,vec__31340,(1),null);
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

var seq__31352_31360 = cljs.core.seq.call(null,deps);
var chunk__31353_31361 = null;
var count__31354_31362 = (0);
var i__31355_31363 = (0);
while(true){
if((i__31355_31363 < count__31354_31362)){
var dep_31364 = cljs.core._nth.call(null,chunk__31353_31361,i__31355_31363);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_31364;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31364));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31364,(depth + (1)),state);
} else {
}


var G__31365 = seq__31352_31360;
var G__31366 = chunk__31353_31361;
var G__31367 = count__31354_31362;
var G__31368 = (i__31355_31363 + (1));
seq__31352_31360 = G__31365;
chunk__31353_31361 = G__31366;
count__31354_31362 = G__31367;
i__31355_31363 = G__31368;
continue;
} else {
var temp__5735__auto___31369 = cljs.core.seq.call(null,seq__31352_31360);
if(temp__5735__auto___31369){
var seq__31352_31370__$1 = temp__5735__auto___31369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31352_31370__$1)){
var c__5567__auto___31371 = cljs.core.chunk_first.call(null,seq__31352_31370__$1);
var G__31372 = cljs.core.chunk_rest.call(null,seq__31352_31370__$1);
var G__31373 = c__5567__auto___31371;
var G__31374 = cljs.core.count.call(null,c__5567__auto___31371);
var G__31375 = (0);
seq__31352_31360 = G__31372;
chunk__31353_31361 = G__31373;
count__31354_31362 = G__31374;
i__31355_31363 = G__31375;
continue;
} else {
var dep_31376 = cljs.core.first.call(null,seq__31352_31370__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = dep_31376;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31376));
} else {
return and__5043__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31376,(depth + (1)),state);
} else {
}


var G__31377 = cljs.core.next.call(null,seq__31352_31370__$1);
var G__31378 = null;
var G__31379 = (0);
var G__31380 = (0);
seq__31352_31360 = G__31377;
chunk__31353_31361 = G__31378;
count__31354_31362 = G__31379;
i__31355_31363 = G__31380;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31356){
var vec__31357 = p__31356;
var seq__31358 = cljs.core.seq.call(null,vec__31357);
var first__31359 = cljs.core.first.call(null,seq__31358);
var seq__31358__$1 = cljs.core.next.call(null,seq__31358);
var x = first__31359;
var xs = seq__31358__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__31343_SHARP_){
return clojure.set.difference.call(null,p1__31343_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__31381_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__31381_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31382 = cljs.core.seq.call(null,provides);
var chunk__31383 = null;
var count__31384 = (0);
var i__31385 = (0);
while(true){
if((i__31385 < count__31384)){
var prov = cljs.core._nth.call(null,chunk__31383,i__31385);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31394_31402 = cljs.core.seq.call(null,requires);
var chunk__31395_31403 = null;
var count__31396_31404 = (0);
var i__31397_31405 = (0);
while(true){
if((i__31397_31405 < count__31396_31404)){
var req_31406 = cljs.core._nth.call(null,chunk__31395_31403,i__31397_31405);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31406,prov);


var G__31407 = seq__31394_31402;
var G__31408 = chunk__31395_31403;
var G__31409 = count__31396_31404;
var G__31410 = (i__31397_31405 + (1));
seq__31394_31402 = G__31407;
chunk__31395_31403 = G__31408;
count__31396_31404 = G__31409;
i__31397_31405 = G__31410;
continue;
} else {
var temp__5735__auto___31411 = cljs.core.seq.call(null,seq__31394_31402);
if(temp__5735__auto___31411){
var seq__31394_31412__$1 = temp__5735__auto___31411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31394_31412__$1)){
var c__5567__auto___31413 = cljs.core.chunk_first.call(null,seq__31394_31412__$1);
var G__31414 = cljs.core.chunk_rest.call(null,seq__31394_31412__$1);
var G__31415 = c__5567__auto___31413;
var G__31416 = cljs.core.count.call(null,c__5567__auto___31413);
var G__31417 = (0);
seq__31394_31402 = G__31414;
chunk__31395_31403 = G__31415;
count__31396_31404 = G__31416;
i__31397_31405 = G__31417;
continue;
} else {
var req_31418 = cljs.core.first.call(null,seq__31394_31412__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31418,prov);


var G__31419 = cljs.core.next.call(null,seq__31394_31412__$1);
var G__31420 = null;
var G__31421 = (0);
var G__31422 = (0);
seq__31394_31402 = G__31419;
chunk__31395_31403 = G__31420;
count__31396_31404 = G__31421;
i__31397_31405 = G__31422;
continue;
}
} else {
}
}
break;
}


var G__31423 = seq__31382;
var G__31424 = chunk__31383;
var G__31425 = count__31384;
var G__31426 = (i__31385 + (1));
seq__31382 = G__31423;
chunk__31383 = G__31424;
count__31384 = G__31425;
i__31385 = G__31426;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31382);
if(temp__5735__auto__){
var seq__31382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31382__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31382__$1);
var G__31427 = cljs.core.chunk_rest.call(null,seq__31382__$1);
var G__31428 = c__5567__auto__;
var G__31429 = cljs.core.count.call(null,c__5567__auto__);
var G__31430 = (0);
seq__31382 = G__31427;
chunk__31383 = G__31428;
count__31384 = G__31429;
i__31385 = G__31430;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31382__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31398_31431 = cljs.core.seq.call(null,requires);
var chunk__31399_31432 = null;
var count__31400_31433 = (0);
var i__31401_31434 = (0);
while(true){
if((i__31401_31434 < count__31400_31433)){
var req_31435 = cljs.core._nth.call(null,chunk__31399_31432,i__31401_31434);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31435,prov);


var G__31436 = seq__31398_31431;
var G__31437 = chunk__31399_31432;
var G__31438 = count__31400_31433;
var G__31439 = (i__31401_31434 + (1));
seq__31398_31431 = G__31436;
chunk__31399_31432 = G__31437;
count__31400_31433 = G__31438;
i__31401_31434 = G__31439;
continue;
} else {
var temp__5735__auto___31440__$1 = cljs.core.seq.call(null,seq__31398_31431);
if(temp__5735__auto___31440__$1){
var seq__31398_31441__$1 = temp__5735__auto___31440__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31398_31441__$1)){
var c__5567__auto___31442 = cljs.core.chunk_first.call(null,seq__31398_31441__$1);
var G__31443 = cljs.core.chunk_rest.call(null,seq__31398_31441__$1);
var G__31444 = c__5567__auto___31442;
var G__31445 = cljs.core.count.call(null,c__5567__auto___31442);
var G__31446 = (0);
seq__31398_31431 = G__31443;
chunk__31399_31432 = G__31444;
count__31400_31433 = G__31445;
i__31401_31434 = G__31446;
continue;
} else {
var req_31447 = cljs.core.first.call(null,seq__31398_31441__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31447,prov);


var G__31448 = cljs.core.next.call(null,seq__31398_31441__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31398_31431 = G__31448;
chunk__31399_31432 = G__31449;
count__31400_31433 = G__31450;
i__31401_31434 = G__31451;
continue;
}
} else {
}
}
break;
}


var G__31452 = cljs.core.next.call(null,seq__31382__$1);
var G__31453 = null;
var G__31454 = (0);
var G__31455 = (0);
seq__31382 = G__31452;
chunk__31383 = G__31453;
count__31384 = G__31454;
i__31385 = G__31455;
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
var seq__31456_31460 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31457_31461 = null;
var count__31458_31462 = (0);
var i__31459_31463 = (0);
while(true){
if((i__31459_31463 < count__31458_31462)){
var ns_31464 = cljs.core._nth.call(null,chunk__31457_31461,i__31459_31463);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31464);


var G__31465 = seq__31456_31460;
var G__31466 = chunk__31457_31461;
var G__31467 = count__31458_31462;
var G__31468 = (i__31459_31463 + (1));
seq__31456_31460 = G__31465;
chunk__31457_31461 = G__31466;
count__31458_31462 = G__31467;
i__31459_31463 = G__31468;
continue;
} else {
var temp__5735__auto___31469 = cljs.core.seq.call(null,seq__31456_31460);
if(temp__5735__auto___31469){
var seq__31456_31470__$1 = temp__5735__auto___31469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31456_31470__$1)){
var c__5567__auto___31471 = cljs.core.chunk_first.call(null,seq__31456_31470__$1);
var G__31472 = cljs.core.chunk_rest.call(null,seq__31456_31470__$1);
var G__31473 = c__5567__auto___31471;
var G__31474 = cljs.core.count.call(null,c__5567__auto___31471);
var G__31475 = (0);
seq__31456_31460 = G__31472;
chunk__31457_31461 = G__31473;
count__31458_31462 = G__31474;
i__31459_31463 = G__31475;
continue;
} else {
var ns_31476 = cljs.core.first.call(null,seq__31456_31470__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31476);


var G__31477 = cljs.core.next.call(null,seq__31456_31470__$1);
var G__31478 = null;
var G__31479 = (0);
var G__31480 = (0);
seq__31456_31460 = G__31477;
chunk__31457_31461 = G__31478;
count__31458_31462 = G__31479;
i__31459_31463 = G__31480;
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
var G__31481__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31482__i = 0, G__31482__a = new Array(arguments.length -  0);
while (G__31482__i < G__31482__a.length) {G__31482__a[G__31482__i] = arguments[G__31482__i + 0]; ++G__31482__i;}
  args = new cljs.core.IndexedSeq(G__31482__a,0,null);
} 
return G__31481__delegate.call(this,args);};
G__31481.cljs$lang$maxFixedArity = 0;
G__31481.cljs$lang$applyTo = (function (arglist__31483){
var args = cljs.core.seq(arglist__31483);
return G__31481__delegate(args);
});
G__31481.cljs$core$IFn$_invoke$arity$variadic = G__31481__delegate;
return G__31481;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31484_SHARP_,p2__31485_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31484_SHARP_)),p2__31485_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31486_SHARP_,p2__31487_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31486_SHARP_),p2__31487_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31488 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31488.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__31488.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__31488;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31489){if((e31489 instanceof Error)){
var e = e31489;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31489;

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
}catch (e31490){if((e31490 instanceof Error)){
var e = e31490;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31490;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31491 = cljs.core._EQ_;
var expr__31492 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31491.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31492))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31491.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31492))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31491.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31492))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31494,callback){
var map__31495 = p__31494;
var map__31495__$1 = cljs.core.__destructure_map.call(null,map__31495);
var file_msg = map__31495__$1;
var request_url = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_31532){
var state_val_31533 = (state_31532[(1)]);
if((state_val_31533 === (7))){
var inst_31528 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
var statearr_31534_31561 = state_31532__$1;
(statearr_31534_31561[(2)] = inst_31528);

(statearr_31534_31561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (1))){
var state_31532__$1 = state_31532;
var statearr_31535_31562 = state_31532__$1;
(statearr_31535_31562[(2)] = null);

(statearr_31535_31562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (4))){
var inst_31498 = (state_31532[(7)]);
var inst_31498__$1 = (state_31532[(2)]);
var state_31532__$1 = (function (){var statearr_31536 = state_31532;
(statearr_31536[(7)] = inst_31498__$1);

return statearr_31536;
})();
if(cljs.core.truth_(inst_31498__$1)){
var statearr_31537_31563 = state_31532__$1;
(statearr_31537_31563[(1)] = (5));

} else {
var statearr_31538_31564 = state_31532__$1;
(statearr_31538_31564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (15))){
var inst_31513 = (state_31532[(8)]);
var inst_31511 = (state_31532[(9)]);
var inst_31515 = inst_31513.call(null,inst_31511);
var state_31532__$1 = state_31532;
var statearr_31539_31565 = state_31532__$1;
(statearr_31539_31565[(2)] = inst_31515);

(statearr_31539_31565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (13))){
var inst_31522 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
var statearr_31540_31566 = state_31532__$1;
(statearr_31540_31566[(2)] = inst_31522);

(statearr_31540_31566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (6))){
var state_31532__$1 = state_31532;
var statearr_31541_31567 = state_31532__$1;
(statearr_31541_31567[(2)] = null);

(statearr_31541_31567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (17))){
var inst_31519 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
var statearr_31542_31568 = state_31532__$1;
(statearr_31542_31568[(2)] = inst_31519);

(statearr_31542_31568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (3))){
var inst_31530 = (state_31532[(2)]);
var state_31532__$1 = state_31532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31532__$1,inst_31530);
} else {
if((state_val_31533 === (12))){
var state_31532__$1 = state_31532;
var statearr_31543_31569 = state_31532__$1;
(statearr_31543_31569[(2)] = null);

(statearr_31543_31569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (2))){
var state_31532__$1 = state_31532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31532__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31533 === (11))){
var inst_31503 = (state_31532[(10)]);
var inst_31509 = figwheel.client.file_reloading.blocking_load.call(null,inst_31503);
var state_31532__$1 = state_31532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31532__$1,(14),inst_31509);
} else {
if((state_val_31533 === (9))){
var inst_31503 = (state_31532[(10)]);
var state_31532__$1 = state_31532;
if(cljs.core.truth_(inst_31503)){
var statearr_31544_31570 = state_31532__$1;
(statearr_31544_31570[(1)] = (11));

} else {
var statearr_31545_31571 = state_31532__$1;
(statearr_31545_31571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (5))){
var inst_31504 = (state_31532[(11)]);
var inst_31498 = (state_31532[(7)]);
var inst_31503 = cljs.core.nth.call(null,inst_31498,(0),null);
var inst_31504__$1 = cljs.core.nth.call(null,inst_31498,(1),null);
var state_31532__$1 = (function (){var statearr_31546 = state_31532;
(statearr_31546[(11)] = inst_31504__$1);

(statearr_31546[(10)] = inst_31503);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31504__$1)){
var statearr_31547_31572 = state_31532__$1;
(statearr_31547_31572[(1)] = (8));

} else {
var statearr_31548_31573 = state_31532__$1;
(statearr_31548_31573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (14))){
var inst_31513 = (state_31532[(8)]);
var inst_31503 = (state_31532[(10)]);
var inst_31511 = (state_31532[(2)]);
var inst_31512 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31513__$1 = cljs.core.get.call(null,inst_31512,inst_31503);
var state_31532__$1 = (function (){var statearr_31549 = state_31532;
(statearr_31549[(8)] = inst_31513__$1);

(statearr_31549[(9)] = inst_31511);

return statearr_31549;
})();
if(cljs.core.truth_(inst_31513__$1)){
var statearr_31550_31574 = state_31532__$1;
(statearr_31550_31574[(1)] = (15));

} else {
var statearr_31551_31575 = state_31532__$1;
(statearr_31551_31575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (16))){
var inst_31511 = (state_31532[(9)]);
var inst_31517 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31511);
var state_31532__$1 = state_31532;
var statearr_31552_31576 = state_31532__$1;
(statearr_31552_31576[(2)] = inst_31517);

(statearr_31552_31576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (10))){
var inst_31524 = (state_31532[(2)]);
var state_31532__$1 = (function (){var statearr_31553 = state_31532;
(statearr_31553[(12)] = inst_31524);

return statearr_31553;
})();
var statearr_31554_31577 = state_31532__$1;
(statearr_31554_31577[(2)] = null);

(statearr_31554_31577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31533 === (8))){
var inst_31504 = (state_31532[(11)]);
var inst_31506 = eval(inst_31504);
var state_31532__$1 = state_31532;
var statearr_31555_31578 = state_31532__$1;
(statearr_31555_31578[(2)] = inst_31506);

(statearr_31555_31578[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__27347__auto__ = null;
var figwheel$client$file_reloading$state_machine__27347__auto____0 = (function (){
var statearr_31556 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31556[(0)] = figwheel$client$file_reloading$state_machine__27347__auto__);

(statearr_31556[(1)] = (1));

return statearr_31556;
});
var figwheel$client$file_reloading$state_machine__27347__auto____1 = (function (state_31532){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_31532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e31557){var ex__27350__auto__ = e31557;
var statearr_31558_31579 = state_31532;
(statearr_31558_31579[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_31532[(4)]))){
var statearr_31559_31580 = state_31532;
(statearr_31559_31580[(1)] = cljs.core.first.call(null,(state_31532[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31581 = state_31532;
state_31532 = G__31581;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27347__auto__ = function(state_31532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27347__auto____1.call(this,state_31532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27347__auto____0;
figwheel$client$file_reloading$state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27347__auto____1;
return figwheel$client$file_reloading$state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_31560 = f__27421__auto__.call(null);
(statearr_31560[(6)] = c__27420__auto__);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31583 = arguments.length;
switch (G__31583) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31585,callback){
var map__31586 = p__31585;
var map__31586__$1 = cljs.core.__destructure_map.call(null,map__31586);
var file_msg = map__31586__$1;
var namespace = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31587){
var map__31588 = p__31587;
var map__31588__$1 = cljs.core.__destructure_map.call(null,map__31588);
var file_msg = map__31588__$1;
var namespace = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31589){
var map__31590 = p__31589;
var map__31590__$1 = cljs.core.__destructure_map.call(null,map__31590);
var file_msg = map__31590__$1;
var namespace = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31591,callback){
var map__31592 = p__31591;
var map__31592__$1 = cljs.core.__destructure_map.call(null,map__31592);
var file_msg = map__31592__$1;
var request_url = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27420__auto___31643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_31627){
var state_val_31628 = (state_31627[(1)]);
if((state_val_31628 === (1))){
var inst_31600 = files;
var inst_31601 = cljs.core.seq.call(null,inst_31600);
var inst_31602 = cljs.core.first.call(null,inst_31601);
var inst_31603 = cljs.core.next.call(null,inst_31601);
var inst_31604 = inst_31600;
var state_31627__$1 = (function (){var statearr_31629 = state_31627;
(statearr_31629[(7)] = inst_31602);

(statearr_31629[(8)] = inst_31603);

(statearr_31629[(9)] = inst_31604);

return statearr_31629;
})();
var statearr_31630_31644 = state_31627__$1;
(statearr_31630_31644[(2)] = null);

(statearr_31630_31644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (2))){
var inst_31610 = (state_31627[(10)]);
var inst_31604 = (state_31627[(9)]);
var inst_31609 = cljs.core.seq.call(null,inst_31604);
var inst_31610__$1 = cljs.core.first.call(null,inst_31609);
var inst_31611 = cljs.core.next.call(null,inst_31609);
var inst_31612 = (inst_31610__$1 == null);
var inst_31613 = cljs.core.not.call(null,inst_31612);
var state_31627__$1 = (function (){var statearr_31631 = state_31627;
(statearr_31631[(10)] = inst_31610__$1);

(statearr_31631[(11)] = inst_31611);

return statearr_31631;
})();
if(inst_31613){
var statearr_31632_31645 = state_31627__$1;
(statearr_31632_31645[(1)] = (4));

} else {
var statearr_31633_31646 = state_31627__$1;
(statearr_31633_31646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (3))){
var inst_31625 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31627__$1,inst_31625);
} else {
if((state_val_31628 === (4))){
var inst_31610 = (state_31627[(10)]);
var inst_31615 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31610);
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31627__$1,(7),inst_31615);
} else {
if((state_val_31628 === (5))){
var inst_31621 = cljs.core.async.close_BANG_.call(null,out);
var state_31627__$1 = state_31627;
var statearr_31634_31647 = state_31627__$1;
(statearr_31634_31647[(2)] = inst_31621);

(statearr_31634_31647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (6))){
var inst_31623 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31635_31648 = state_31627__$1;
(statearr_31635_31648[(2)] = inst_31623);

(statearr_31635_31648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (7))){
var inst_31611 = (state_31627[(11)]);
var inst_31617 = (state_31627[(2)]);
var inst_31618 = cljs.core.async.put_BANG_.call(null,out,inst_31617);
var inst_31604 = inst_31611;
var state_31627__$1 = (function (){var statearr_31636 = state_31627;
(statearr_31636[(12)] = inst_31618);

(statearr_31636[(9)] = inst_31604);

return statearr_31636;
})();
var statearr_31637_31649 = state_31627__$1;
(statearr_31637_31649[(2)] = null);

(statearr_31637_31649[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____0 = (function (){
var statearr_31638 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31638[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__);

(statearr_31638[(1)] = (1));

return statearr_31638;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____1 = (function (state_31627){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_31627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e31639){var ex__27350__auto__ = e31639;
var statearr_31640_31650 = state_31627;
(statearr_31640_31650[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_31627[(4)]))){
var statearr_31641_31651 = state_31627;
(statearr_31641_31651[(1)] = cljs.core.first.call(null,(state_31627[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31652 = state_31627;
state_31627 = G__31652;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__ = function(state_31627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____1.call(this,state_31627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_31642 = f__27421__auto__.call(null);
(statearr_31642[(6)] = c__27420__auto___31643);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31653,opts){
var map__31654 = p__31653;
var map__31654__$1 = cljs.core.__destructure_map.call(null,map__31654);
var eval_body = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31655){var e = e31655;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31656_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31656_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31657){
var vec__31658 = p__31657;
var k = cljs.core.nth.call(null,vec__31658,(0),null);
var v = cljs.core.nth.call(null,vec__31658,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31661){
var vec__31662 = p__31661;
var k = cljs.core.nth.call(null,vec__31662,(0),null);
var v = cljs.core.nth.call(null,vec__31662,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31668,p__31669){
var map__31670 = p__31668;
var map__31670__$1 = cljs.core.__destructure_map.call(null,map__31670);
var opts = map__31670__$1;
var before_jsload = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31671 = p__31669;
var map__31671__$1 = cljs.core.__destructure_map.call(null,map__31671);
var msg = map__31671__$1;
var files = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_31804){
var state_val_31805 = (state_31804[(1)]);
if((state_val_31805 === (7))){
var inst_31685 = (state_31804[(7)]);
var inst_31684 = (state_31804[(8)]);
var inst_31686 = (state_31804[(9)]);
var inst_31683 = (state_31804[(10)]);
var inst_31691 = cljs.core._nth.call(null,inst_31684,inst_31686);
var inst_31692 = figwheel.client.file_reloading.eval_body.call(null,inst_31691,opts);
var inst_31693 = (inst_31686 + (1));
var tmp31806 = inst_31685;
var tmp31807 = inst_31684;
var tmp31808 = inst_31683;
var inst_31683__$1 = tmp31808;
var inst_31684__$1 = tmp31807;
var inst_31685__$1 = tmp31806;
var inst_31686__$1 = inst_31693;
var state_31804__$1 = (function (){var statearr_31809 = state_31804;
(statearr_31809[(7)] = inst_31685__$1);

(statearr_31809[(11)] = inst_31692);

(statearr_31809[(8)] = inst_31684__$1);

(statearr_31809[(9)] = inst_31686__$1);

(statearr_31809[(10)] = inst_31683__$1);

return statearr_31809;
})();
var statearr_31810_31878 = state_31804__$1;
(statearr_31810_31878[(2)] = null);

(statearr_31810_31878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (20))){
var inst_31726 = (state_31804[(12)]);
var inst_31735 = figwheel.client.file_reloading.sort_files.call(null,inst_31726);
var state_31804__$1 = state_31804;
var statearr_31811_31879 = state_31804__$1;
(statearr_31811_31879[(2)] = inst_31735);

(statearr_31811_31879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (27))){
var state_31804__$1 = state_31804;
var statearr_31812_31880 = state_31804__$1;
(statearr_31812_31880[(2)] = null);

(statearr_31812_31880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (1))){
var inst_31675 = (state_31804[(13)]);
var inst_31672 = before_jsload.call(null,files);
var inst_31673 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31674 = (function (){return (function (p1__31665_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31665_SHARP_);
});
})();
var inst_31675__$1 = cljs.core.filter.call(null,inst_31674,files);
var inst_31676 = cljs.core.not_empty.call(null,inst_31675__$1);
var state_31804__$1 = (function (){var statearr_31813 = state_31804;
(statearr_31813[(14)] = inst_31672);

(statearr_31813[(13)] = inst_31675__$1);

(statearr_31813[(15)] = inst_31673);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31814_31881 = state_31804__$1;
(statearr_31814_31881[(1)] = (2));

} else {
var statearr_31815_31882 = state_31804__$1;
(statearr_31815_31882[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (24))){
var state_31804__$1 = state_31804;
var statearr_31816_31883 = state_31804__$1;
(statearr_31816_31883[(2)] = null);

(statearr_31816_31883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (4))){
var inst_31727 = (state_31804[(16)]);
var inst_31720 = (state_31804[(2)]);
var inst_31721 = cljs.core.List.EMPTY;
var inst_31722 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31721);
var inst_31723 = (function (){return (function (p1__31666_SHARP_){
var and__5043__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31666_SHARP_);
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31666_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31666_SHARP_))));
} else {
return and__5043__auto__;
}
});
})();
var inst_31724 = cljs.core.filter.call(null,inst_31723,files);
var inst_31725 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31726 = cljs.core.concat.call(null,inst_31724,inst_31725);
var inst_31727__$1 = reload_dependents;
var state_31804__$1 = (function (){var statearr_31817 = state_31804;
(statearr_31817[(17)] = inst_31720);

(statearr_31817[(18)] = inst_31722);

(statearr_31817[(16)] = inst_31727__$1);

(statearr_31817[(12)] = inst_31726);

return statearr_31817;
})();
if(cljs.core.truth_(inst_31727__$1)){
var statearr_31818_31884 = state_31804__$1;
(statearr_31818_31884[(1)] = (16));

} else {
var statearr_31819_31885 = state_31804__$1;
(statearr_31819_31885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (15))){
var inst_31710 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31820_31886 = state_31804__$1;
(statearr_31820_31886[(2)] = inst_31710);

(statearr_31820_31886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (21))){
var inst_31737 = (state_31804[(19)]);
var inst_31737__$1 = (state_31804[(2)]);
var inst_31738 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31737__$1);
var state_31804__$1 = (function (){var statearr_31821 = state_31804;
(statearr_31821[(19)] = inst_31737__$1);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31804__$1,(22),inst_31738);
} else {
if((state_val_31805 === (31))){
var inst_31802 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31804__$1,inst_31802);
} else {
if((state_val_31805 === (32))){
var inst_31779 = (state_31804[(20)]);
var inst_31783 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31784 = cljs.core.map.call(null,inst_31783,inst_31779);
var inst_31785 = cljs.core.pr_str.call(null,inst_31784);
var inst_31786 = ["figwheel-no-load meta-data: ",inst_31785].join('');
var inst_31787 = figwheel.client.utils.log.call(null,inst_31786);
var state_31804__$1 = state_31804;
var statearr_31822_31887 = state_31804__$1;
(statearr_31822_31887[(2)] = inst_31787);

(statearr_31822_31887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (33))){
var state_31804__$1 = state_31804;
var statearr_31823_31888 = state_31804__$1;
(statearr_31823_31888[(2)] = null);

(statearr_31823_31888[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (13))){
var inst_31696 = (state_31804[(21)]);
var inst_31700 = cljs.core.chunk_first.call(null,inst_31696);
var inst_31701 = cljs.core.chunk_rest.call(null,inst_31696);
var inst_31702 = cljs.core.count.call(null,inst_31700);
var inst_31683 = inst_31701;
var inst_31684 = inst_31700;
var inst_31685 = inst_31702;
var inst_31686 = (0);
var state_31804__$1 = (function (){var statearr_31824 = state_31804;
(statearr_31824[(7)] = inst_31685);

(statearr_31824[(8)] = inst_31684);

(statearr_31824[(9)] = inst_31686);

(statearr_31824[(10)] = inst_31683);

return statearr_31824;
})();
var statearr_31825_31889 = state_31804__$1;
(statearr_31825_31889[(2)] = null);

(statearr_31825_31889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (22))){
var inst_31737 = (state_31804[(19)]);
var inst_31741 = (state_31804[(22)]);
var inst_31745 = (state_31804[(23)]);
var inst_31740 = (state_31804[(24)]);
var inst_31740__$1 = (state_31804[(2)]);
var inst_31741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31740__$1);
var inst_31742 = (function (){var all_files = inst_31737;
var res_SINGLEQUOTE_ = inst_31740__$1;
var res = inst_31741__$1;
return (function (p1__31667_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31667_SHARP_));
});
})();
var inst_31743 = cljs.core.filter.call(null,inst_31742,inst_31740__$1);
var inst_31744 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31745__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31744);
var inst_31746 = cljs.core.not_empty.call(null,inst_31745__$1);
var state_31804__$1 = (function (){var statearr_31826 = state_31804;
(statearr_31826[(22)] = inst_31741__$1);

(statearr_31826[(23)] = inst_31745__$1);

(statearr_31826[(25)] = inst_31743);

(statearr_31826[(24)] = inst_31740__$1);

return statearr_31826;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31827_31890 = state_31804__$1;
(statearr_31827_31890[(1)] = (23));

} else {
var statearr_31828_31891 = state_31804__$1;
(statearr_31828_31891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (36))){
var state_31804__$1 = state_31804;
var statearr_31829_31892 = state_31804__$1;
(statearr_31829_31892[(2)] = null);

(statearr_31829_31892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (29))){
var inst_31779 = (state_31804[(20)]);
var inst_31737 = (state_31804[(19)]);
var inst_31741 = (state_31804[(22)]);
var inst_31745 = (state_31804[(23)]);
var inst_31743 = (state_31804[(25)]);
var inst_31740 = (state_31804[(24)]);
var inst_31773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31776 = (function (){var all_files = inst_31737;
var res_SINGLEQUOTE_ = inst_31740;
var res = inst_31741;
var files_not_loaded = inst_31743;
var dependencies_that_loaded = inst_31745;
return (function (p__31775){
var map__31830 = p__31775;
var map__31830__$1 = cljs.core.__destructure_map.call(null,map__31830);
var namespace = cljs.core.get.call(null,map__31830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_31777 = cljs.core.group_by.call(null,inst_31776,inst_31743);
var inst_31778 = cljs.core.__destructure_map.call(null,inst_31777);
var inst_31779__$1 = cljs.core.get.call(null,inst_31778,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31780 = cljs.core.get.call(null,inst_31778,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31781 = cljs.core.not_empty.call(null,inst_31779__$1);
var state_31804__$1 = (function (){var statearr_31831 = state_31804;
(statearr_31831[(20)] = inst_31779__$1);

(statearr_31831[(26)] = inst_31773);

(statearr_31831[(27)] = inst_31780);

return statearr_31831;
})();
if(cljs.core.truth_(inst_31781)){
var statearr_31832_31893 = state_31804__$1;
(statearr_31832_31893[(1)] = (32));

} else {
var statearr_31833_31894 = state_31804__$1;
(statearr_31833_31894[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (6))){
var inst_31717 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31834_31895 = state_31804__$1;
(statearr_31834_31895[(2)] = inst_31717);

(statearr_31834_31895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (28))){
var inst_31743 = (state_31804[(25)]);
var inst_31770 = (state_31804[(2)]);
var inst_31771 = cljs.core.not_empty.call(null,inst_31743);
var state_31804__$1 = (function (){var statearr_31835 = state_31804;
(statearr_31835[(28)] = inst_31770);

return statearr_31835;
})();
if(cljs.core.truth_(inst_31771)){
var statearr_31836_31896 = state_31804__$1;
(statearr_31836_31896[(1)] = (29));

} else {
var statearr_31837_31897 = state_31804__$1;
(statearr_31837_31897[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (25))){
var inst_31741 = (state_31804[(22)]);
var inst_31757 = (state_31804[(2)]);
var inst_31758 = cljs.core.not_empty.call(null,inst_31741);
var state_31804__$1 = (function (){var statearr_31838 = state_31804;
(statearr_31838[(29)] = inst_31757);

return statearr_31838;
})();
if(cljs.core.truth_(inst_31758)){
var statearr_31839_31898 = state_31804__$1;
(statearr_31839_31898[(1)] = (26));

} else {
var statearr_31840_31899 = state_31804__$1;
(statearr_31840_31899[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (34))){
var inst_31780 = (state_31804[(27)]);
var inst_31790 = (state_31804[(2)]);
var inst_31791 = cljs.core.not_empty.call(null,inst_31780);
var state_31804__$1 = (function (){var statearr_31841 = state_31804;
(statearr_31841[(30)] = inst_31790);

return statearr_31841;
})();
if(cljs.core.truth_(inst_31791)){
var statearr_31842_31900 = state_31804__$1;
(statearr_31842_31900[(1)] = (35));

} else {
var statearr_31843_31901 = state_31804__$1;
(statearr_31843_31901[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (17))){
var state_31804__$1 = state_31804;
var statearr_31844_31902 = state_31804__$1;
(statearr_31844_31902[(2)] = recompile_dependents);

(statearr_31844_31902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (3))){
var state_31804__$1 = state_31804;
var statearr_31845_31903 = state_31804__$1;
(statearr_31845_31903[(2)] = null);

(statearr_31845_31903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (12))){
var inst_31713 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31846_31904 = state_31804__$1;
(statearr_31846_31904[(2)] = inst_31713);

(statearr_31846_31904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (2))){
var inst_31675 = (state_31804[(13)]);
var inst_31682 = cljs.core.seq.call(null,inst_31675);
var inst_31683 = inst_31682;
var inst_31684 = null;
var inst_31685 = (0);
var inst_31686 = (0);
var state_31804__$1 = (function (){var statearr_31847 = state_31804;
(statearr_31847[(7)] = inst_31685);

(statearr_31847[(8)] = inst_31684);

(statearr_31847[(9)] = inst_31686);

(statearr_31847[(10)] = inst_31683);

return statearr_31847;
})();
var statearr_31848_31905 = state_31804__$1;
(statearr_31848_31905[(2)] = null);

(statearr_31848_31905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (23))){
var inst_31737 = (state_31804[(19)]);
var inst_31741 = (state_31804[(22)]);
var inst_31745 = (state_31804[(23)]);
var inst_31743 = (state_31804[(25)]);
var inst_31740 = (state_31804[(24)]);
var inst_31748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31750 = (function (){var all_files = inst_31737;
var res_SINGLEQUOTE_ = inst_31740;
var res = inst_31741;
var files_not_loaded = inst_31743;
var dependencies_that_loaded = inst_31745;
return (function (p__31749){
var map__31849 = p__31749;
var map__31849__$1 = cljs.core.__destructure_map.call(null,map__31849);
var request_url = cljs.core.get.call(null,map__31849__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_31751 = cljs.core.reverse.call(null,inst_31745);
var inst_31752 = cljs.core.map.call(null,inst_31750,inst_31751);
var inst_31753 = cljs.core.pr_str.call(null,inst_31752);
var inst_31754 = figwheel.client.utils.log.call(null,inst_31753);
var state_31804__$1 = (function (){var statearr_31850 = state_31804;
(statearr_31850[(31)] = inst_31748);

return statearr_31850;
})();
var statearr_31851_31906 = state_31804__$1;
(statearr_31851_31906[(2)] = inst_31754);

(statearr_31851_31906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (35))){
var inst_31780 = (state_31804[(27)]);
var inst_31793 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31780);
var inst_31794 = cljs.core.pr_str.call(null,inst_31793);
var inst_31795 = ["not required: ",inst_31794].join('');
var inst_31796 = figwheel.client.utils.log.call(null,inst_31795);
var state_31804__$1 = state_31804;
var statearr_31852_31907 = state_31804__$1;
(statearr_31852_31907[(2)] = inst_31796);

(statearr_31852_31907[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (19))){
var inst_31726 = (state_31804[(12)]);
var inst_31733 = figwheel.client.file_reloading.expand_files.call(null,inst_31726);
var state_31804__$1 = state_31804;
var statearr_31853_31908 = state_31804__$1;
(statearr_31853_31908[(2)] = inst_31733);

(statearr_31853_31908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (11))){
var state_31804__$1 = state_31804;
var statearr_31854_31909 = state_31804__$1;
(statearr_31854_31909[(2)] = null);

(statearr_31854_31909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (9))){
var inst_31715 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31855_31910 = state_31804__$1;
(statearr_31855_31910[(2)] = inst_31715);

(statearr_31855_31910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (5))){
var inst_31685 = (state_31804[(7)]);
var inst_31686 = (state_31804[(9)]);
var inst_31688 = (inst_31686 < inst_31685);
var inst_31689 = inst_31688;
var state_31804__$1 = state_31804;
if(cljs.core.truth_(inst_31689)){
var statearr_31856_31911 = state_31804__$1;
(statearr_31856_31911[(1)] = (7));

} else {
var statearr_31857_31912 = state_31804__$1;
(statearr_31857_31912[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (14))){
var inst_31696 = (state_31804[(21)]);
var inst_31705 = cljs.core.first.call(null,inst_31696);
var inst_31706 = figwheel.client.file_reloading.eval_body.call(null,inst_31705,opts);
var inst_31707 = cljs.core.next.call(null,inst_31696);
var inst_31683 = inst_31707;
var inst_31684 = null;
var inst_31685 = (0);
var inst_31686 = (0);
var state_31804__$1 = (function (){var statearr_31858 = state_31804;
(statearr_31858[(7)] = inst_31685);

(statearr_31858[(8)] = inst_31684);

(statearr_31858[(9)] = inst_31686);

(statearr_31858[(10)] = inst_31683);

(statearr_31858[(32)] = inst_31706);

return statearr_31858;
})();
var statearr_31859_31913 = state_31804__$1;
(statearr_31859_31913[(2)] = null);

(statearr_31859_31913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (26))){
var inst_31737 = (state_31804[(19)]);
var inst_31741 = (state_31804[(22)]);
var inst_31745 = (state_31804[(23)]);
var inst_31743 = (state_31804[(25)]);
var inst_31740 = (state_31804[(24)]);
var inst_31760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31762 = (function (){var all_files = inst_31737;
var res_SINGLEQUOTE_ = inst_31740;
var res = inst_31741;
var files_not_loaded = inst_31743;
var dependencies_that_loaded = inst_31745;
return (function (p__31761){
var map__31860 = p__31761;
var map__31860__$1 = cljs.core.__destructure_map.call(null,map__31860);
var namespace = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_31763 = cljs.core.map.call(null,inst_31762,inst_31741);
var inst_31764 = cljs.core.pr_str.call(null,inst_31763);
var inst_31765 = figwheel.client.utils.log.call(null,inst_31764);
var inst_31766 = (function (){var all_files = inst_31737;
var res_SINGLEQUOTE_ = inst_31740;
var res = inst_31741;
var files_not_loaded = inst_31743;
var dependencies_that_loaded = inst_31745;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_31767 = setTimeout(inst_31766,(10));
var state_31804__$1 = (function (){var statearr_31861 = state_31804;
(statearr_31861[(33)] = inst_31760);

(statearr_31861[(34)] = inst_31765);

return statearr_31861;
})();
var statearr_31862_31914 = state_31804__$1;
(statearr_31862_31914[(2)] = inst_31767);

(statearr_31862_31914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (16))){
var inst_31727 = (state_31804[(16)]);
var state_31804__$1 = state_31804;
var statearr_31863_31915 = state_31804__$1;
(statearr_31863_31915[(2)] = inst_31727);

(statearr_31863_31915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (30))){
var state_31804__$1 = state_31804;
var statearr_31864_31916 = state_31804__$1;
(statearr_31864_31916[(2)] = null);

(statearr_31864_31916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (10))){
var inst_31696 = (state_31804[(21)]);
var inst_31698 = cljs.core.chunked_seq_QMARK_.call(null,inst_31696);
var state_31804__$1 = state_31804;
if(inst_31698){
var statearr_31865_31917 = state_31804__$1;
(statearr_31865_31917[(1)] = (13));

} else {
var statearr_31866_31918 = state_31804__$1;
(statearr_31866_31918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (18))){
var inst_31731 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
if(cljs.core.truth_(inst_31731)){
var statearr_31867_31919 = state_31804__$1;
(statearr_31867_31919[(1)] = (19));

} else {
var statearr_31868_31920 = state_31804__$1;
(statearr_31868_31920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (37))){
var inst_31799 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31869_31921 = state_31804__$1;
(statearr_31869_31921[(2)] = inst_31799);

(statearr_31869_31921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (8))){
var inst_31696 = (state_31804[(21)]);
var inst_31683 = (state_31804[(10)]);
var inst_31696__$1 = cljs.core.seq.call(null,inst_31683);
var state_31804__$1 = (function (){var statearr_31870 = state_31804;
(statearr_31870[(21)] = inst_31696__$1);

return statearr_31870;
})();
if(inst_31696__$1){
var statearr_31871_31922 = state_31804__$1;
(statearr_31871_31922[(1)] = (10));

} else {
var statearr_31872_31923 = state_31804__$1;
(statearr_31872_31923[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____0 = (function (){
var statearr_31873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31873[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__);

(statearr_31873[(1)] = (1));

return statearr_31873;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____1 = (function (state_31804){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_31804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e31874){var ex__27350__auto__ = e31874;
var statearr_31875_31924 = state_31804;
(statearr_31875_31924[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_31804[(4)]))){
var statearr_31876_31925 = state_31804;
(statearr_31876_31925[(1)] = cljs.core.first.call(null,(state_31804[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31926 = state_31804;
state_31804 = G__31926;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__ = function(state_31804){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____1.call(this,state_31804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_31877 = f__27421__auto__.call(null);
(statearr_31877[(6)] = c__27420__auto__);

return statearr_31877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31929,link){
var map__31930 = p__31929;
var map__31930__$1 = cljs.core.__destructure_map.call(null,map__31930);
var file = cljs.core.get.call(null,map__31930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__31927_SHARP_,p2__31928_SHARP_){
if(cljs.core._EQ_.call(null,p1__31927_SHARP_,p2__31928_SHARP_)){
return p1__31927_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31932){
var map__31933 = p__31932;
var map__31933__$1 = cljs.core.__destructure_map.call(null,map__31933);
var match_length = cljs.core.get.call(null,map__31933__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31933__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31931_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31931_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31934_SHARP_,p2__31935_SHARP_){
return cljs.core.assoc.call(null,p1__31934_SHARP_,cljs.core.get.call(null,p2__31935_SHARP_,key),p2__31935_SHARP_);
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
var loaded_f_datas_31936 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31936);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31936);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31937,p__31938){
var map__31939 = p__31937;
var map__31939__$1 = cljs.core.__destructure_map.call(null,map__31939);
var on_cssload = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31940 = p__31938;
var map__31940__$1 = cljs.core.__destructure_map.call(null,map__31940);
var files_msg = map__31940__$1;
var files = cljs.core.get.call(null,map__31940__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1655292229328
