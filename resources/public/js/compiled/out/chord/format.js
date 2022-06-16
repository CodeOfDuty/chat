// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

var chord$format$ChordFormatter$freeze$dyn_39905 = (function (_,obj){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (chord.format.freeze[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,_,obj);
} else {
var m__5391__auto__ = (chord.format.freeze["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
});
chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
return chord$format$ChordFormatter$freeze$dyn_39905.call(null,_,obj);
}
});

var chord$format$ChordFormatter$thaw$dyn_39906 = (function (_,s){
var x__5392__auto__ = (((_ == null))?null:_);
var m__5393__auto__ = (chord.format.thaw[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,_,s);
} else {
var m__5391__auto__ = (chord.format.thaw["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
});
chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
return chord$format$ChordFormatter$thaw$dyn_39906.call(null,_,s);
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format39907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format39907 = (function (_,meta39908){
this._ = _;
this.meta39908 = meta39908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format39907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39909,meta39908__$1){
var self__ = this;
var _39909__$1 = this;
return (new chord.format.t_chord$format39907(self__._,meta39908__$1));
}));

(chord.format.t_chord$format39907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39909){
var self__ = this;
var _39909__$1 = this;
return self__.meta39908;
}));

(chord.format.t_chord$format39907.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format39907.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
}));

(chord.format.t_chord$format39907.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
}));

(chord.format.t_chord$format39907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta39908","meta39908",-1318827287,null)], null);
}));

(chord.format.t_chord$format39907.cljs$lang$type = true);

(chord.format.t_chord$format39907.cljs$lang$ctorStr = "chord.format/t_chord$format39907");

(chord.format.t_chord$format39907.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format39907");
}));

/**
 * Positional factory function for chord.format/t_chord$format39907.
 */
chord.format.__GT_t_chord$format39907 = (function chord$format$__GT_t_chord$format39907(___$1,meta39908){
return (new chord.format.t_chord$format39907(___$1,meta39908));
});

}

return (new chord.format.t_chord$format39907(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format39910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format39910 = (function (_,meta39911){
this._ = _;
this.meta39911 = meta39911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format39910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39912,meta39911__$1){
var self__ = this;
var _39912__$1 = this;
return (new chord.format.t_chord$format39910(self__._,meta39911__$1));
}));

(chord.format.t_chord$format39910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39912){
var self__ = this;
var _39912__$1 = this;
return self__.meta39911;
}));

(chord.format.t_chord$format39910.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format39910.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
}));

(chord.format.t_chord$format39910.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
}));

(chord.format.t_chord$format39910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta39911","meta39911",-1491740048,null)], null);
}));

(chord.format.t_chord$format39910.cljs$lang$type = true);

(chord.format.t_chord$format39910.cljs$lang$ctorStr = "chord.format/t_chord$format39910");

(chord.format.t_chord$format39910.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format39910");
}));

/**
 * Positional factory function for chord.format/t_chord$format39910.
 */
chord.format.__GT_t_chord$format39910 = (function chord$format$__GT_t_chord$format39910(___$1,meta39911){
return (new chord.format.t_chord$format39910(___$1,meta39911));
});

}

return (new chord.format.t_chord$format39910(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format39913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format39913 = (function (opts,json_formatter,meta39914){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta39914 = meta39914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format39913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39915,meta39914__$1){
var self__ = this;
var _39915__$1 = this;
return (new chord.format.t_chord$format39913(self__.opts,self__.json_formatter,meta39914__$1));
}));

(chord.format.t_chord$format39913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39915){
var self__ = this;
var _39915__$1 = this;
return self__.meta39914;
}));

(chord.format.t_chord$format39913.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format39913.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
}));

(chord.format.t_chord$format39913.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
}));

(chord.format.t_chord$format39913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta39914","meta39914",-672859784,null)], null);
}));

(chord.format.t_chord$format39913.cljs$lang$type = true);

(chord.format.t_chord$format39913.cljs$lang$ctorStr = "chord.format/t_chord$format39913");

(chord.format.t_chord$format39913.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format39913");
}));

/**
 * Positional factory function for chord.format/t_chord$format39913.
 */
chord.format.__GT_t_chord$format39913 = (function chord$format$__GT_t_chord$format39913(opts__$1,json_formatter__$1,meta39914){
return (new chord.format.t_chord$format39913(opts__$1,json_formatter__$1,meta39914));
});

}

return (new chord.format.t_chord$format39913(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format39916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format39916 = (function (_,meta39917){
this._ = _;
this.meta39917 = meta39917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format39916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39918,meta39917__$1){
var self__ = this;
var _39918__$1 = this;
return (new chord.format.t_chord$format39916(self__._,meta39917__$1));
}));

(chord.format.t_chord$format39916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39918){
var self__ = this;
var _39918__$1 = this;
return self__.meta39917;
}));

(chord.format.t_chord$format39916.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format39916.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format39916.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format39916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta39917","meta39917",-1295497023,null)], null);
}));

(chord.format.t_chord$format39916.cljs$lang$type = true);

(chord.format.t_chord$format39916.cljs$lang$ctorStr = "chord.format/t_chord$format39916");

(chord.format.t_chord$format39916.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format39916");
}));

/**
 * Positional factory function for chord.format/t_chord$format39916.
 */
chord.format.__GT_t_chord$format39916 = (function chord$format$__GT_t_chord$format39916(___$1,meta39917){
return (new chord.format.t_chord$format39916(___$1,meta39917));
});

}

return (new chord.format.t_chord$format39916(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format39919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format39919 = (function (_,meta39920){
this._ = _;
this.meta39920 = meta39920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format39919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39921,meta39920__$1){
var self__ = this;
var _39921__$1 = this;
return (new chord.format.t_chord$format39919(self__._,meta39920__$1));
}));

(chord.format.t_chord$format39919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39921){
var self__ = this;
var _39921__$1 = this;
return self__.meta39920;
}));

(chord.format.t_chord$format39919.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format39919.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format39919.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format39919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta39920","meta39920",1662941432,null)], null);
}));

(chord.format.t_chord$format39919.cljs$lang$type = true);

(chord.format.t_chord$format39919.cljs$lang$ctorStr = "chord.format/t_chord$format39919");

(chord.format.t_chord$format39919.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format39919");
}));

/**
 * Positional factory function for chord.format/t_chord$format39919.
 */
chord.format.__GT_t_chord$format39919 = (function chord$format$__GT_t_chord$format39919(___$1,meta39920){
return (new chord.format.t_chord$format39919(___$1,meta39920));
});

}

return (new chord.format.t_chord$format39919(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__39923,p__39924){
var map__39925 = p__39923;
var map__39925__$1 = cljs.core.__destructure_map.call(null,map__39925);
var read_ch = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__39925__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__39926 = p__39924;
var map__39926__$1 = cljs.core.__destructure_map.call(null,map__39926);
var opts = map__39926__$1;
var format = cljs.core.get.call(null,map__39926__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,(function (p__39927){
var map__39928 = p__39927;
var map__39928__$1 = cljs.core.__destructure_map.call(null,map__39928);
var message = cljs.core.get.call(null,map__39928__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e39929){if((e39929 instanceof Error)){
var e = e39929;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e39929;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,(function (p1__39922_SHARP_){
if(cljs.core.truth_(p1__39922_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__39922_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1655293794736
