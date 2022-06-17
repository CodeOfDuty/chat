// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
goog.scope(function(){
cognitect.transit.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(cognitect.transit.goog$module$goog$math$Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25867_25871 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25868_25872 = null;
var count__25869_25873 = (0);
var i__25870_25874 = (0);
while(true){
if((i__25870_25874 < count__25869_25873)){
var k_25875 = cljs.core._nth.call(null,chunk__25868_25872,i__25870_25874);
var v_25876 = (b[k_25875]);
(a[k_25875] = v_25876);


var G__25877 = seq__25867_25871;
var G__25878 = chunk__25868_25872;
var G__25879 = count__25869_25873;
var G__25880 = (i__25870_25874 + (1));
seq__25867_25871 = G__25877;
chunk__25868_25872 = G__25878;
count__25869_25873 = G__25879;
i__25870_25874 = G__25880;
continue;
} else {
var temp__5735__auto___25881 = cljs.core.seq.call(null,seq__25867_25871);
if(temp__5735__auto___25881){
var seq__25867_25882__$1 = temp__5735__auto___25881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25867_25882__$1)){
var c__5567__auto___25883 = cljs.core.chunk_first.call(null,seq__25867_25882__$1);
var G__25884 = cljs.core.chunk_rest.call(null,seq__25867_25882__$1);
var G__25885 = c__5567__auto___25883;
var G__25886 = cljs.core.count.call(null,c__5567__auto___25883);
var G__25887 = (0);
seq__25867_25871 = G__25884;
chunk__25868_25872 = G__25885;
count__25869_25873 = G__25886;
i__25870_25874 = G__25887;
continue;
} else {
var k_25888 = cljs.core.first.call(null,seq__25867_25882__$1);
var v_25889 = (b[k_25888]);
(a[k_25888] = v_25889);


var G__25890 = cljs.core.next.call(null,seq__25867_25882__$1);
var G__25891 = null;
var G__25892 = (0);
var G__25893 = (0);
seq__25867_25871 = G__25890;
chunk__25868_25872 = G__25891;
count__25869_25873 = G__25892;
i__25870_25874 = G__25893;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__25895 = arguments.length;
switch (G__25895) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25897 = (i + (2));
var G__25898 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25897;
ret = G__25898;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25899_25903 = cljs.core.seq.call(null,v);
var chunk__25900_25904 = null;
var count__25901_25905 = (0);
var i__25902_25906 = (0);
while(true){
if((i__25902_25906 < count__25901_25905)){
var x_25907 = cljs.core._nth.call(null,chunk__25900_25904,i__25902_25906);
ret.push(x_25907);


var G__25908 = seq__25899_25903;
var G__25909 = chunk__25900_25904;
var G__25910 = count__25901_25905;
var G__25911 = (i__25902_25906 + (1));
seq__25899_25903 = G__25908;
chunk__25900_25904 = G__25909;
count__25901_25905 = G__25910;
i__25902_25906 = G__25911;
continue;
} else {
var temp__5735__auto___25912 = cljs.core.seq.call(null,seq__25899_25903);
if(temp__5735__auto___25912){
var seq__25899_25913__$1 = temp__5735__auto___25912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25899_25913__$1)){
var c__5567__auto___25914 = cljs.core.chunk_first.call(null,seq__25899_25913__$1);
var G__25915 = cljs.core.chunk_rest.call(null,seq__25899_25913__$1);
var G__25916 = c__5567__auto___25914;
var G__25917 = cljs.core.count.call(null,c__5567__auto___25914);
var G__25918 = (0);
seq__25899_25903 = G__25915;
chunk__25900_25904 = G__25916;
count__25901_25905 = G__25917;
i__25902_25906 = G__25918;
continue;
} else {
var x_25919 = cljs.core.first.call(null,seq__25899_25913__$1);
ret.push(x_25919);


var G__25920 = cljs.core.next.call(null,seq__25899_25913__$1);
var G__25921 = null;
var G__25922 = (0);
var G__25923 = (0);
seq__25899_25903 = G__25920;
chunk__25900_25904 = G__25921;
count__25901_25905 = G__25922;
i__25902_25906 = G__25923;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25924_25928 = cljs.core.seq.call(null,v);
var chunk__25925_25929 = null;
var count__25926_25930 = (0);
var i__25927_25931 = (0);
while(true){
if((i__25927_25931 < count__25926_25930)){
var x_25932 = cljs.core._nth.call(null,chunk__25925_25929,i__25927_25931);
ret.push(x_25932);


var G__25933 = seq__25924_25928;
var G__25934 = chunk__25925_25929;
var G__25935 = count__25926_25930;
var G__25936 = (i__25927_25931 + (1));
seq__25924_25928 = G__25933;
chunk__25925_25929 = G__25934;
count__25926_25930 = G__25935;
i__25927_25931 = G__25936;
continue;
} else {
var temp__5735__auto___25937 = cljs.core.seq.call(null,seq__25924_25928);
if(temp__5735__auto___25937){
var seq__25924_25938__$1 = temp__5735__auto___25937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25924_25938__$1)){
var c__5567__auto___25939 = cljs.core.chunk_first.call(null,seq__25924_25938__$1);
var G__25940 = cljs.core.chunk_rest.call(null,seq__25924_25938__$1);
var G__25941 = c__5567__auto___25939;
var G__25942 = cljs.core.count.call(null,c__5567__auto___25939);
var G__25943 = (0);
seq__25924_25928 = G__25940;
chunk__25925_25929 = G__25941;
count__25926_25930 = G__25942;
i__25927_25931 = G__25943;
continue;
} else {
var x_25944 = cljs.core.first.call(null,seq__25924_25938__$1);
ret.push(x_25944);


var G__25945 = cljs.core.next.call(null,seq__25924_25938__$1);
var G__25946 = null;
var G__25947 = (0);
var G__25948 = (0);
seq__25924_25928 = G__25945;
chunk__25925_25929 = G__25946;
count__25926_25930 = G__25947;
i__25927_25931 = G__25948;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25949_25953 = cljs.core.seq.call(null,v);
var chunk__25950_25954 = null;
var count__25951_25955 = (0);
var i__25952_25956 = (0);
while(true){
if((i__25952_25956 < count__25951_25955)){
var x_25957 = cljs.core._nth.call(null,chunk__25950_25954,i__25952_25956);
ret.push(x_25957);


var G__25958 = seq__25949_25953;
var G__25959 = chunk__25950_25954;
var G__25960 = count__25951_25955;
var G__25961 = (i__25952_25956 + (1));
seq__25949_25953 = G__25958;
chunk__25950_25954 = G__25959;
count__25951_25955 = G__25960;
i__25952_25956 = G__25961;
continue;
} else {
var temp__5735__auto___25962 = cljs.core.seq.call(null,seq__25949_25953);
if(temp__5735__auto___25962){
var seq__25949_25963__$1 = temp__5735__auto___25962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25949_25963__$1)){
var c__5567__auto___25964 = cljs.core.chunk_first.call(null,seq__25949_25963__$1);
var G__25965 = cljs.core.chunk_rest.call(null,seq__25949_25963__$1);
var G__25966 = c__5567__auto___25964;
var G__25967 = cljs.core.count.call(null,c__5567__auto___25964);
var G__25968 = (0);
seq__25949_25953 = G__25965;
chunk__25950_25954 = G__25966;
count__25951_25955 = G__25967;
i__25952_25956 = G__25968;
continue;
} else {
var x_25969 = cljs.core.first.call(null,seq__25949_25963__$1);
ret.push(x_25969);


var G__25970 = cljs.core.next.call(null,seq__25949_25963__$1);
var G__25971 = null;
var G__25972 = (0);
var G__25973 = (0);
seq__25949_25953 = G__25970;
chunk__25950_25954 = G__25971;
count__25951_25955 = G__25972;
i__25952_25956 = G__25973;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__25975 = arguments.length;
switch (G__25975) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,(function (obj,k,v){
var G__25976 = obj;
G__25976.push(kfn.call(null,k),vfn.call(null,v));

return G__25976;
}),["^ "],m);
}), "handlers": (function (){var x25977 = cljs.core.clone.call(null,handlers);
(x25977.forEach = (function (f){
var coll = this;
var seq__25978 = cljs.core.seq.call(null,coll);
var chunk__25979 = null;
var count__25980 = (0);
var i__25981 = (0);
while(true){
if((i__25981 < count__25980)){
var vec__25988 = cljs.core._nth.call(null,chunk__25979,i__25981);
var k = cljs.core.nth.call(null,vec__25988,(0),null);
var v = cljs.core.nth.call(null,vec__25988,(1),null);
f.call(null,v,k);


var G__25995 = seq__25978;
var G__25996 = chunk__25979;
var G__25997 = count__25980;
var G__25998 = (i__25981 + (1));
seq__25978 = G__25995;
chunk__25979 = G__25996;
count__25980 = G__25997;
i__25981 = G__25998;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25978);
if(temp__5735__auto__){
var seq__25978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25978__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__25978__$1);
var G__25999 = cljs.core.chunk_rest.call(null,seq__25978__$1);
var G__26000 = c__5567__auto__;
var G__26001 = cljs.core.count.call(null,c__5567__auto__);
var G__26002 = (0);
seq__25978 = G__25999;
chunk__25979 = G__26000;
count__25980 = G__26001;
i__25981 = G__26002;
continue;
} else {
var vec__25991 = cljs.core.first.call(null,seq__25978__$1);
var k = cljs.core.nth.call(null,vec__25991,(0),null);
var v = cljs.core.nth.call(null,vec__25991,(1),null);
f.call(null,v,k);


var G__26003 = cljs.core.next.call(null,seq__25978__$1);
var G__26004 = null;
var G__26005 = (0);
var G__26006 = (0);
seq__25978 = G__26003;
chunk__25979 = G__26004;
count__25980 = G__26005;
i__25981 = G__26006;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x25977;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__26008 = arguments.length;
switch (G__26008) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit26009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit26009 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta26010){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta26010 = meta26010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit26009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26011,meta26010__$1){
var self__ = this;
var _26011__$1 = this;
return (new cognitect.transit.t_cognitect$transit26009(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta26010__$1));
}));

(cognitect.transit.t_cognitect$transit26009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26011){
var self__ = this;
var _26011__$1 = this;
return self__.meta26010;
}));

(cognitect.transit.t_cognitect$transit26009.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit26009.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit26009.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit26009.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit26009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta26010","meta26010",-458004437,null)], null);
}));

(cognitect.transit.t_cognitect$transit26009.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit26009.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit26009");

(cognitect.transit.t_cognitect$transit26009.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cognitect.transit/t_cognitect$transit26009");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit26009.
 */
cognitect.transit.__GT_t_cognitect$transit26009 = (function cognitect$transit$__GT_t_cognitect$transit26009(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26010){
return (new cognitect.transit.t_cognitect$transit26009(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26010));
});

}

return (new cognitect.transit.t_cognitect$transit26009(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID(x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map?rel=1655379913102
