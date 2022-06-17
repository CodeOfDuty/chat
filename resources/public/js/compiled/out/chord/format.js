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

var chord$format$ChordFormatter$freeze$dyn_30634 = (function (_,obj){
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
return chord$format$ChordFormatter$freeze$dyn_30634.call(null,_,obj);
}
});

var chord$format$ChordFormatter$thaw$dyn_30635 = (function (_,s){
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
return chord$format$ChordFormatter$thaw$dyn_30635.call(null,_,s);
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
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30636 = (function (_,meta30637){
this._ = _;
this.meta30637 = meta30637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format30636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30638,meta30637__$1){
var self__ = this;
var _30638__$1 = this;
return (new chord.format.t_chord$format30636(self__._,meta30637__$1));
}));

(chord.format.t_chord$format30636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30638){
var self__ = this;
var _30638__$1 = this;
return self__.meta30637;
}));

(chord.format.t_chord$format30636.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format30636.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
}));

(chord.format.t_chord$format30636.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
}));

(chord.format.t_chord$format30636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30637","meta30637",-2049858785,null)], null);
}));

(chord.format.t_chord$format30636.cljs$lang$type = true);

(chord.format.t_chord$format30636.cljs$lang$ctorStr = "chord.format/t_chord$format30636");

(chord.format.t_chord$format30636.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format30636");
}));

/**
 * Positional factory function for chord.format/t_chord$format30636.
 */
chord.format.__GT_t_chord$format30636 = (function chord$format$__GT_t_chord$format30636(___$1,meta30637){
return (new chord.format.t_chord$format30636(___$1,meta30637));
});

}

return (new chord.format.t_chord$format30636(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30639 = (function (_,meta30640){
this._ = _;
this.meta30640 = meta30640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format30639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30641,meta30640__$1){
var self__ = this;
var _30641__$1 = this;
return (new chord.format.t_chord$format30639(self__._,meta30640__$1));
}));

(chord.format.t_chord$format30639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30641){
var self__ = this;
var _30641__$1 = this;
return self__.meta30640;
}));

(chord.format.t_chord$format30639.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format30639.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
}));

(chord.format.t_chord$format30639.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
}));

(chord.format.t_chord$format30639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30640","meta30640",-1647552450,null)], null);
}));

(chord.format.t_chord$format30639.cljs$lang$type = true);

(chord.format.t_chord$format30639.cljs$lang$ctorStr = "chord.format/t_chord$format30639");

(chord.format.t_chord$format30639.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format30639");
}));

/**
 * Positional factory function for chord.format/t_chord$format30639.
 */
chord.format.__GT_t_chord$format30639 = (function chord$format$__GT_t_chord$format30639(___$1,meta30640){
return (new chord.format.t_chord$format30639(___$1,meta30640));
});

}

return (new chord.format.t_chord$format30639(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30642 = (function (opts,json_formatter,meta30643){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta30643 = meta30643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format30642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30644,meta30643__$1){
var self__ = this;
var _30644__$1 = this;
return (new chord.format.t_chord$format30642(self__.opts,self__.json_formatter,meta30643__$1));
}));

(chord.format.t_chord$format30642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30644){
var self__ = this;
var _30644__$1 = this;
return self__.meta30643;
}));

(chord.format.t_chord$format30642.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format30642.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
}));

(chord.format.t_chord$format30642.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
}));

(chord.format.t_chord$format30642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta30643","meta30643",-2123759051,null)], null);
}));

(chord.format.t_chord$format30642.cljs$lang$type = true);

(chord.format.t_chord$format30642.cljs$lang$ctorStr = "chord.format/t_chord$format30642");

(chord.format.t_chord$format30642.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format30642");
}));

/**
 * Positional factory function for chord.format/t_chord$format30642.
 */
chord.format.__GT_t_chord$format30642 = (function chord$format$__GT_t_chord$format30642(opts__$1,json_formatter__$1,meta30643){
return (new chord.format.t_chord$format30642(opts__$1,json_formatter__$1,meta30643));
});

}

return (new chord.format.t_chord$format30642(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30645 = (function (_,meta30646){
this._ = _;
this.meta30646 = meta30646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format30645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30647,meta30646__$1){
var self__ = this;
var _30647__$1 = this;
return (new chord.format.t_chord$format30645(self__._,meta30646__$1));
}));

(chord.format.t_chord$format30645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30647){
var self__ = this;
var _30647__$1 = this;
return self__.meta30646;
}));

(chord.format.t_chord$format30645.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format30645.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format30645.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format30645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30646","meta30646",1221693894,null)], null);
}));

(chord.format.t_chord$format30645.cljs$lang$type = true);

(chord.format.t_chord$format30645.cljs$lang$ctorStr = "chord.format/t_chord$format30645");

(chord.format.t_chord$format30645.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format30645");
}));

/**
 * Positional factory function for chord.format/t_chord$format30645.
 */
chord.format.__GT_t_chord$format30645 = (function chord$format$__GT_t_chord$format30645(___$1,meta30646){
return (new chord.format.t_chord$format30645(___$1,meta30646));
});

}

return (new chord.format.t_chord$format30645(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format30648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format30648 = (function (_,meta30649){
this._ = _;
this.meta30649 = meta30649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format30648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30650,meta30649__$1){
var self__ = this;
var _30650__$1 = this;
return (new chord.format.t_chord$format30648(self__._,meta30649__$1));
}));

(chord.format.t_chord$format30648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30650){
var self__ = this;
var _30650__$1 = this;
return self__.meta30649;
}));

(chord.format.t_chord$format30648.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format30648.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format30648.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format30648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta30649","meta30649",979189451,null)], null);
}));

(chord.format.t_chord$format30648.cljs$lang$type = true);

(chord.format.t_chord$format30648.cljs$lang$ctorStr = "chord.format/t_chord$format30648");

(chord.format.t_chord$format30648.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"chord.format/t_chord$format30648");
}));

/**
 * Positional factory function for chord.format/t_chord$format30648.
 */
chord.format.__GT_t_chord$format30648 = (function chord$format$__GT_t_chord$format30648(___$1,meta30649){
return (new chord.format.t_chord$format30648(___$1,meta30649));
});

}

return (new chord.format.t_chord$format30648(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__30652,p__30653){
var map__30654 = p__30652;
var map__30654__$1 = cljs.core.__destructure_map.call(null,map__30654);
var read_ch = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__30655 = p__30653;
var map__30655__$1 = cljs.core.__destructure_map.call(null,map__30655);
var opts = map__30655__$1;
var format = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,(function (p__30656){
var map__30657 = p__30656;
var map__30657__$1 = cljs.core.__destructure_map.call(null,map__30657);
var message = cljs.core.get.call(null,map__30657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e30658){if((e30658 instanceof Error)){
var e = e30658;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e30658;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,(function (p1__30651_SHARP_){
if(cljs.core.truth_(p1__30651_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__30651_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1655379917855
