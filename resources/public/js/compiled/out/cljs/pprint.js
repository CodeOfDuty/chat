// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31007 = arguments.length;
var i__5769__auto___31008 = (0);
while(true){
if((i__5769__auto___31008 < len__5768__auto___31007)){
args__5774__auto__.push((arguments[i__5769__auto___31008]));

var G__31009 = (i__5769__auto___31008 + (1));
i__5769__auto___31008 = G__31009;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq31006){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31006));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31011 = arguments.length;
var i__5769__auto___31012 = (0);
while(true){
if((i__5769__auto___31012 < len__5768__auto___31011)){
args__5774__auto__.push((arguments[i__5769__auto___31012]));

var G__31013 = (i__5769__auto___31012 + (1));
i__5769__auto___31012 = G__31013;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq31010){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31010));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__31014 = cljs.core._EQ_;
var expr__31015 = c;
if(cljs.core.truth_(pred__31014.call(null,"\b",expr__31015))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__31014.call(null," ",expr__31015))){
return "\\space";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\t",expr__31015))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\n",expr__31015))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\f",expr__31015))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\r",expr__31015))){
return "\\return";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\"",expr__31015))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__31014.call(null,"\\",expr__31015))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31018 = arguments.length;
var i__5769__auto___31019 = (0);
while(true){
if((i__5769__auto___31019 < len__5768__auto___31018)){
args__5774__auto__.push((arguments[i__5769__auto___31019]));

var G__31020 = (i__5769__auto___31019 + (1));
i__5769__auto___31019 = G__31020;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq31017){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31017));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31022 = arguments.length;
var i__5769__auto___31023 = (0);
while(true){
if((i__5769__auto___31023 < len__5768__auto___31022)){
args__5774__auto__.push((arguments[i__5769__auto___31023]));

var G__31024 = (i__5769__auto___31023 + (1));
i__5769__auto___31023 = G__31024;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq31021){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31021));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((((!(isNaN(n)))) && ((((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__31028 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__31028,(0),null);
var new_context = cljs.core.nth.call(null,vec__31028,(1),null);
var G__31031 = new_context;
var G__31032 = remainder;
var G__31033 = cljs.core.conj.call(null,acc,result);
context = G__31031;
lis__$1 = G__31032;
acc = G__31033;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__31037 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__31037,(0),null);
var new_context = cljs.core.nth.call(null,vec__31037,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__31040 = new_context;
var G__31041 = cljs.core.conj.call(null,acc,result);
context = G__31040;
acc = G__31041;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__31045 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__31045,(0),null);
var continue$ = cljs.core.nth.call(null,vec__31045,(1),null);
var new_context = cljs.core.nth.call(null,vec__31045,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__31048 = new_context;
var G__31049 = cljs.core.conj.call(null,acc,result);
context = G__31048;
acc = G__31049;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5522__auto__ = (function cljs$pprint$unzip_map_$_iter__31050(s__31051){
return (new cljs.core.LazySeq(null,(function (){
var s__31051__$1 = s__31051;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31051__$1);
if(temp__5735__auto__){
var s__31051__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31051__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__31051__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__31053 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__31052 = (0);
while(true){
if((i__31052 < size__5521__auto__)){
var vec__31054 = cljs.core._nth.call(null,c__5520__auto__,i__31052);
var k = cljs.core.nth.call(null,vec__31054,(0),null);
var vec__31057 = cljs.core.nth.call(null,vec__31054,(1),null);
var v1 = cljs.core.nth.call(null,vec__31057,(0),null);
var v2 = cljs.core.nth.call(null,vec__31057,(1),null);
cljs.core.chunk_append.call(null,b__31053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__31082 = (i__31052 + (1));
i__31052 = G__31082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31053),cljs$pprint$unzip_map_$_iter__31050.call(null,cljs.core.chunk_rest.call(null,s__31051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31053),null);
}
} else {
var vec__31060 = cljs.core.first.call(null,s__31051__$2);
var k = cljs.core.nth.call(null,vec__31060,(0),null);
var vec__31063 = cljs.core.nth.call(null,vec__31060,(1),null);
var v1 = cljs.core.nth.call(null,vec__31063,(0),null);
var v2 = cljs.core.nth.call(null,vec__31063,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__31050.call(null,cljs.core.rest.call(null,s__31051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5522__auto__ = (function cljs$pprint$unzip_map_$_iter__31066(s__31067){
return (new cljs.core.LazySeq(null,(function (){
var s__31067__$1 = s__31067;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31067__$1);
if(temp__5735__auto__){
var s__31067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31067__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__31067__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__31069 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__31068 = (0);
while(true){
if((i__31068 < size__5521__auto__)){
var vec__31070 = cljs.core._nth.call(null,c__5520__auto__,i__31068);
var k = cljs.core.nth.call(null,vec__31070,(0),null);
var vec__31073 = cljs.core.nth.call(null,vec__31070,(1),null);
var v1 = cljs.core.nth.call(null,vec__31073,(0),null);
var v2 = cljs.core.nth.call(null,vec__31073,(1),null);
cljs.core.chunk_append.call(null,b__31069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__31083 = (i__31068 + (1));
i__31068 = G__31083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31069),cljs$pprint$unzip_map_$_iter__31066.call(null,cljs.core.chunk_rest.call(null,s__31067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31069),null);
}
} else {
var vec__31076 = cljs.core.first.call(null,s__31067__$2);
var k = cljs.core.nth.call(null,vec__31076,(0),null);
var vec__31079 = cljs.core.nth.call(null,vec__31076,(1),null);
var v1 = cljs.core.nth.call(null,vec__31079,(0),null);
var v2 = cljs.core.nth.call(null,vec__31079,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__31066.call(null,cljs.core.rest.call(null,s__31067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5522__auto__ = (function cljs$pprint$tuple_map_$_iter__31084(s__31085){
return (new cljs.core.LazySeq(null,(function (){
var s__31085__$1 = s__31085;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31085__$1);
if(temp__5735__auto__){
var s__31085__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31085__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__31085__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__31087 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__31086 = (0);
while(true){
if((i__31086 < size__5521__auto__)){
var vec__31088 = cljs.core._nth.call(null,c__5520__auto__,i__31086);
var k = cljs.core.nth.call(null,vec__31088,(0),null);
var v = cljs.core.nth.call(null,vec__31088,(1),null);
cljs.core.chunk_append.call(null,b__31087,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__31094 = (i__31086 + (1));
i__31086 = G__31094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31087),cljs$pprint$tuple_map_$_iter__31084.call(null,cljs.core.chunk_rest.call(null,s__31085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31087),null);
}
} else {
var vec__31091 = cljs.core.first.call(null,s__31085__$2);
var k = cljs.core.nth.call(null,vec__31091,(0),null);
var v = cljs.core.nth.call(null,vec__31091,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__31084.call(null,cljs.core.rest.call(null,s__31085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__31095 = (n - (1));
n = G__31095;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__31096 = (n + (1));
n = G__31096;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__31097 = (pos + (1));
pos = G__31097;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_31098 = (function (pp){
var x__5392__auto__ = (((pp == null))?null:pp);
var m__5393__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__5392__auto__)]);
if((!((m__5393__auto__ == null)))){
return m__5393__auto__.call(null,pp);
} else {
var m__5391__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_31098.call(null,pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__31101 = arguments.length;
switch (G__31101) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31102 = (function (writer,max_columns,fields,meta31103){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta31103 = meta31103;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31104,meta31103__$1){
var self__ = this;
var _31104__$1 = this;
return (new cljs.pprint.t_cljs$pprint31102(self__.writer,self__.max_columns,self__.fields,meta31103__$1));
}));

(cljs.pprint.t_cljs$pprint31102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31104){
var self__ = this;
var _31104__$1 = this;
return self__.meta31103;
}));

(cljs.pprint.t_cljs$pprint31102.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint31102.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

(cljs.pprint.t_cljs$pprint31102.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31105 = cljs.core._EQ_;
var expr__31106 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31105.call(null,String,expr__31106))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__31099_SHARP_){
return cljs.core._EQ_.call(null,p1__31099_SHARP_,"\n");
}),s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__31105.call(null,Number,expr__31106))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31106)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta31103","meta31103",1541326561,null)], null);
}));

(cljs.pprint.t_cljs$pprint31102.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31102.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31102");

(cljs.pprint.t_cljs$pprint31102.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31102");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31102.
 */
cljs.pprint.__GT_t_cljs$pprint31102 = (function cljs$pprint$__GT_t_cljs$pprint31102(writer__$1,max_columns__$1,fields__$1,meta31103){
return (new cljs.pprint.t_cljs$pprint31102(writer__$1,max_columns__$1,fields__$1,meta31103));
});

}

return (new cljs.pprint.t_cljs$pprint31102(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31110,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31114 = k31110;
var G__31114__$1 = (((G__31114 instanceof cljs.core.Keyword))?G__31114.fqn:null);
switch (G__31114__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31110,else__5345__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31115){
var vec__31116 = p__31115;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31116,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31116,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.logical-block{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31109){
var self__ = this;
var G__31109__$1 = this;
return (new cljs.core.RecordIter((0),G__31109__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31111,other31112){
var self__ = this;
var this31111__$1 = this;
return (((!((other31112 == null)))) && ((((this31111__$1.constructor === other31112.constructor)) && (((cljs.core._EQ_.call(null,this31111__$1.parent,other31112.parent)) && (((cljs.core._EQ_.call(null,this31111__$1.section,other31112.section)) && (((cljs.core._EQ_.call(null,this31111__$1.start_col,other31112.start_col)) && (((cljs.core._EQ_.call(null,this31111__$1.indent,other31112.indent)) && (((cljs.core._EQ_.call(null,this31111__$1.done_nl,other31112.done_nl)) && (((cljs.core._EQ_.call(null,this31111__$1.intra_block_nl,other31112.intra_block_nl)) && (((cljs.core._EQ_.call(null,this31111__$1.prefix,other31112.prefix)) && (((cljs.core._EQ_.call(null,this31111__$1.per_line_prefix,other31112.per_line_prefix)) && (((cljs.core._EQ_.call(null,this31111__$1.suffix,other31112.suffix)) && (((cljs.core._EQ_.call(null,this31111__$1.logical_block_callback,other31112.logical_block_callback)) && (cljs.core._EQ_.call(null,this31111__$1.__extmap,other31112.__extmap)))))))))))))))))))))))));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31110){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31119 = k31110;
var G__31119__$1 = (((G__31119 instanceof cljs.core.Keyword))?G__31119.fqn:null);
switch (G__31119__$1) {
case "parent":
case "section":
case "start-col":
case "indent":
case "done-nl":
case "intra-block-nl":
case "prefix":
case "per-line-prefix":
case "suffix":
case "logical-block-callback":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31110);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31109){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31120 = cljs.core.keyword_identical_QMARK_;
var expr__31121 = k__5351__auto__;
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__31121))){
return (new cljs.pprint.logical_block(G__31109,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,G__31109,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__31109,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__31109,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__31109,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__31109,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__31109,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__31109,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__31109,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31120.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__31121))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__31109,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31109),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31109){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__31109,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__31113){
var extmap__5384__auto__ = (function (){var G__31123 = cljs.core.dissoc.call(null,G__31113,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__31113)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31123);
} else {
return G__31123;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__31113),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__31113),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__31126 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__31126;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31128,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31132 = k31128;
var G__31132__$1 = (((G__31132 instanceof cljs.core.Keyword))?G__31132.fqn:null);
switch (G__31132__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31128,else__5345__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31133){
var vec__31134 = p__31133;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31134,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31134,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31127){
var self__ = this;
var G__31127__$1 = this;
return (new cljs.core.RecordIter((0),G__31127__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31129,other31130){
var self__ = this;
var this31129__$1 = this;
return (((!((other31130 == null)))) && ((((this31129__$1.constructor === other31130.constructor)) && (((cljs.core._EQ_.call(null,this31129__$1.type_tag,other31130.type_tag)) && (((cljs.core._EQ_.call(null,this31129__$1.data,other31130.data)) && (((cljs.core._EQ_.call(null,this31129__$1.trailing_white_space,other31130.trailing_white_space)) && (((cljs.core._EQ_.call(null,this31129__$1.start_pos,other31130.start_pos)) && (((cljs.core._EQ_.call(null,this31129__$1.end_pos,other31130.end_pos)) && (cljs.core._EQ_.call(null,this31129__$1.__extmap,other31130.__extmap)))))))))))))));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31128){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31137 = k31128;
var G__31137__$1 = (((G__31137 instanceof cljs.core.Keyword))?G__31137.fqn:null);
switch (G__31137__$1) {
case "type-tag":
case "data":
case "trailing-white-space":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31128);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31127){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31138 = cljs.core.keyword_identical_QMARK_;
var expr__31139 = k__5351__auto__;
if(cljs.core.truth_(pred__31138.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__31139))){
return (new cljs.pprint.buffer_blob(G__31127,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31138.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__31139))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__31127,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31138.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__31139))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__31127,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31138.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__31139))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__31127,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31138.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__31139))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__31127,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31127),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31127){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__31127,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__31131){
var extmap__5384__auto__ = (function (){var G__31141 = cljs.core.dissoc.call(null,G__31131,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__31131)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31141);
} else {
return G__31141;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__31131),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__31131),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__31131),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__31131),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__31131),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__30937__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30937__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31145,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31149 = k31145;
var G__31149__$1 = (((G__31149 instanceof cljs.core.Keyword))?G__31149.fqn:null);
switch (G__31149__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31145,else__5345__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31150){
var vec__31151 = p__31150;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31151,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31151,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.nl-t{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31144){
var self__ = this;
var G__31144__$1 = this;
return (new cljs.core.RecordIter((0),G__31144__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31146,other31147){
var self__ = this;
var this31146__$1 = this;
return (((!((other31147 == null)))) && ((((this31146__$1.constructor === other31147.constructor)) && (((cljs.core._EQ_.call(null,this31146__$1.type_tag,other31147.type_tag)) && (((cljs.core._EQ_.call(null,this31146__$1.type,other31147.type)) && (((cljs.core._EQ_.call(null,this31146__$1.logical_block,other31147.logical_block)) && (((cljs.core._EQ_.call(null,this31146__$1.start_pos,other31147.start_pos)) && (((cljs.core._EQ_.call(null,this31146__$1.end_pos,other31147.end_pos)) && (cljs.core._EQ_.call(null,this31146__$1.__extmap,other31147.__extmap)))))))))))))));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31145){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31154 = k31145;
var G__31154__$1 = (((G__31154 instanceof cljs.core.Keyword))?G__31154.fqn:null);
switch (G__31154__$1) {
case "type-tag":
case "type":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31145);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31144){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31155 = cljs.core.keyword_identical_QMARK_;
var expr__31156 = k__5351__auto__;
if(cljs.core.truth_(pred__31155.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__31156))){
return (new cljs.pprint.nl_t(G__31144,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31155.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__31156))){
return (new cljs.pprint.nl_t(self__.type_tag,G__31144,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31155.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__31156))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__31144,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31155.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__31156))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__31144,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31155.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__31156))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__31144,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31144),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31144){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__31144,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__31148){
var extmap__5384__auto__ = (function (){var G__31158 = cljs.core.dissoc.call(null,G__31148,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__31148)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31158);
} else {
return G__31158;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__31148),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__31148),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__31148),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__31148),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__31148),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__30937__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30937__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31162,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31166 = k31162;
var G__31166__$1 = (((G__31166 instanceof cljs.core.Keyword))?G__31166.fqn:null);
switch (G__31166__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31162,else__5345__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31167){
var vec__31168 = p__31167;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31168,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31168,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31161){
var self__ = this;
var G__31161__$1 = this;
return (new cljs.core.RecordIter((0),G__31161__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31163,other31164){
var self__ = this;
var this31163__$1 = this;
return (((!((other31164 == null)))) && ((((this31163__$1.constructor === other31164.constructor)) && (((cljs.core._EQ_.call(null,this31163__$1.type_tag,other31164.type_tag)) && (((cljs.core._EQ_.call(null,this31163__$1.logical_block,other31164.logical_block)) && (((cljs.core._EQ_.call(null,this31163__$1.start_pos,other31164.start_pos)) && (((cljs.core._EQ_.call(null,this31163__$1.end_pos,other31164.end_pos)) && (cljs.core._EQ_.call(null,this31163__$1.__extmap,other31164.__extmap)))))))))))));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31162){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31171 = k31162;
var G__31171__$1 = (((G__31171 instanceof cljs.core.Keyword))?G__31171.fqn:null);
switch (G__31171__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31162);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31161){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31172 = cljs.core.keyword_identical_QMARK_;
var expr__31173 = k__5351__auto__;
if(cljs.core.truth_(pred__31172.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__31173))){
return (new cljs.pprint.start_block_t(G__31161,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31172.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__31173))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__31161,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31172.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__31173))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__31161,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31172.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__31173))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__31161,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31161),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31161){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__31161,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__31165){
var extmap__5384__auto__ = (function (){var G__31175 = cljs.core.dissoc.call(null,G__31165,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__31165)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31175);
} else {
return G__31175;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__31165),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__31165),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__31165),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__31165),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__30937__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30937__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31179,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31183 = k31179;
var G__31183__$1 = (((G__31183 instanceof cljs.core.Keyword))?G__31183.fqn:null);
switch (G__31183__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31179,else__5345__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31184){
var vec__31185 = p__31184;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31185,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31185,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31178){
var self__ = this;
var G__31178__$1 = this;
return (new cljs.core.RecordIter((0),G__31178__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31180,other31181){
var self__ = this;
var this31180__$1 = this;
return (((!((other31181 == null)))) && ((((this31180__$1.constructor === other31181.constructor)) && (((cljs.core._EQ_.call(null,this31180__$1.type_tag,other31181.type_tag)) && (((cljs.core._EQ_.call(null,this31180__$1.logical_block,other31181.logical_block)) && (((cljs.core._EQ_.call(null,this31180__$1.start_pos,other31181.start_pos)) && (((cljs.core._EQ_.call(null,this31180__$1.end_pos,other31181.end_pos)) && (cljs.core._EQ_.call(null,this31180__$1.__extmap,other31181.__extmap)))))))))))));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31179){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31188 = k31179;
var G__31188__$1 = (((G__31188 instanceof cljs.core.Keyword))?G__31188.fqn:null);
switch (G__31188__$1) {
case "type-tag":
case "logical-block":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31179);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31178){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31189 = cljs.core.keyword_identical_QMARK_;
var expr__31190 = k__5351__auto__;
if(cljs.core.truth_(pred__31189.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__31190))){
return (new cljs.pprint.end_block_t(G__31178,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31189.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__31190))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__31178,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31189.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__31190))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__31178,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31189.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__31190))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__31178,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31178),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31178){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__31178,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__31182){
var extmap__5384__auto__ = (function (){var G__31192 = cljs.core.dissoc.call(null,G__31182,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__31182)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31192);
} else {
return G__31192;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__31182),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__31182),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__31182),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__31182),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__30937__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30937__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31196,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31200 = k31196;
var G__31200__$1 = (((G__31200 instanceof cljs.core.Keyword))?G__31200.fqn:null);
switch (G__31200__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31196,else__5345__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31201){
var vec__31202 = p__31201;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31202,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31202,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.indent-t{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31195){
var self__ = this;
var G__31195__$1 = this;
return (new cljs.core.RecordIter((0),G__31195__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31197,other31198){
var self__ = this;
var this31197__$1 = this;
return (((!((other31198 == null)))) && ((((this31197__$1.constructor === other31198.constructor)) && (((cljs.core._EQ_.call(null,this31197__$1.type_tag,other31198.type_tag)) && (((cljs.core._EQ_.call(null,this31197__$1.logical_block,other31198.logical_block)) && (((cljs.core._EQ_.call(null,this31197__$1.relative_to,other31198.relative_to)) && (((cljs.core._EQ_.call(null,this31197__$1.offset,other31198.offset)) && (((cljs.core._EQ_.call(null,this31197__$1.start_pos,other31198.start_pos)) && (((cljs.core._EQ_.call(null,this31197__$1.end_pos,other31198.end_pos)) && (cljs.core._EQ_.call(null,this31197__$1.__extmap,other31198.__extmap)))))))))))))))));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31196){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31205 = k31196;
var G__31205__$1 = (((G__31205 instanceof cljs.core.Keyword))?G__31205.fqn:null);
switch (G__31205__$1) {
case "type-tag":
case "logical-block":
case "relative-to":
case "offset":
case "start-pos":
case "end-pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31196);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31195){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31206 = cljs.core.keyword_identical_QMARK_;
var expr__31207 = k__5351__auto__;
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__31207))){
return (new cljs.pprint.indent_t(G__31195,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__31207))){
return (new cljs.pprint.indent_t(self__.type_tag,G__31195,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__31207))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__31195,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__31207))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__31195,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__31207))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__31195,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31206.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__31207))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__31195,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31195),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31195){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__31195,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__31199){
var extmap__5384__auto__ = (function (){var G__31209 = cljs.core.dissoc.call(null,G__31199,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__31199)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31209);
} else {
return G__31209;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__31199),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__31199),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__31199),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__31199),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__31199),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__31199),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__30937__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__30937__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),(function (p1__31213_SHARP_,p2__31212_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__31212_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5735__auto___31214 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5735__auto___31214)){
var cb_31215 = temp__5735__auto___31214;
cb_31215.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5735__auto___31216 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5735__auto___31216)){
var prefix_31217 = temp__5735__auto___31216;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_31217);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5735__auto___31218 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5735__auto___31218)){
var cb_31219 = temp__5735__auto___31218;
cb_31219.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5735__auto__)){
var suffix = temp__5735__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__31220 = cljs.core._EQ_;
var expr__31221 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__31220.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__31221))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__31220.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__31221))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31221)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = (!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))));
if(and__5043__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__5043__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5733__auto___31223 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5733__auto___31223)){
var tws_31224 = temp__5733__auto___31223;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_31224);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__31225 = cljs.core.seq.call(null,tokens);
var chunk__31226 = null;
var count__31227 = (0);
var i__31228 = (0);
while(true){
if((i__31228 < count__31227)){
var token = cljs.core._nth.call(null,chunk__31226,i__31228);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___31229 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5733__auto___31229)){
var tws_31230 = temp__5733__auto___31229;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_31230);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31231 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__5043__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__5043__auto__)){
return tws_31231;
} else {
return and__5043__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_31231);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31232 = seq__31225;
var G__31233 = chunk__31226;
var G__31234 = count__31227;
var G__31235 = (i__31228 + (1));
seq__31225 = G__31232;
chunk__31226 = G__31233;
count__31227 = G__31234;
i__31228 = G__31235;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31225);
if(temp__5735__auto__){
var seq__31225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31225__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__31225__$1);
var G__31236 = cljs.core.chunk_rest.call(null,seq__31225__$1);
var G__31237 = c__5567__auto__;
var G__31238 = cljs.core.count.call(null,c__5567__auto__);
var G__31239 = (0);
seq__31225 = G__31236;
chunk__31226 = G__31237;
count__31227 = G__31238;
i__31228 = G__31239;
continue;
} else {
var token = cljs.core.first.call(null,seq__31225__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___31240 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5733__auto___31240)){
var tws_31241 = temp__5733__auto___31240;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_31241);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_31242 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__5043__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__5043__auto__)){
return tws_31242;
} else {
return and__5043__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_31242);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__31243 = cljs.core.next.call(null,seq__31225__$1);
var G__31244 = null;
var G__31245 = (0);
var G__31246 = (0);
seq__31225 = G__31243;
chunk__31226 = G__31244;
count__31227 = G__31245;
i__31228 = G__31246;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__5045__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__5043__auto__ = miser_width;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = maxcol;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__5043__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__5045__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__31247_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__31247_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__31247_SHARP_),lb)))));
}),cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__31248_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__31248_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__31248_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
}),cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__31249 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__31249;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_31250 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_31250);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__31251_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__31251_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__31252 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__31252,(0),null);
var b = cljs.core.nth.call(null,vec__31252,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__31255 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__31255,(0),null);
var remainder = cljs.core.nth.call(null,vec__31255,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
var G__31258 = new_buffer;
buffer = G__31258;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5733__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var buf = temp__5733__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5735__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5735__auto__)){
var tws = temp__5735__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_31263 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_31264 = (oldpos_31263 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31264);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_31263,newpos_31264));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__31259_31265 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__31260_31266 = null;
var count__31261_31267 = (0);
var i__31262_31268 = (0);
while(true){
if((i__31262_31268 < count__31261_31267)){
var l_31269__$1 = cljs.core._nth.call(null,chunk__31260_31266,i__31262_31268);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_31269__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__31270 = seq__31259_31265;
var G__31271 = chunk__31260_31266;
var G__31272 = count__31261_31267;
var G__31273 = (i__31262_31268 + (1));
seq__31259_31265 = G__31270;
chunk__31260_31266 = G__31271;
count__31261_31267 = G__31272;
i__31262_31268 = G__31273;
continue;
} else {
var temp__5735__auto___31274 = cljs.core.seq.call(null,seq__31259_31265);
if(temp__5735__auto___31274){
var seq__31259_31275__$1 = temp__5735__auto___31274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31259_31275__$1)){
var c__5567__auto___31276 = cljs.core.chunk_first.call(null,seq__31259_31275__$1);
var G__31277 = cljs.core.chunk_rest.call(null,seq__31259_31275__$1);
var G__31278 = c__5567__auto___31276;
var G__31279 = cljs.core.count.call(null,c__5567__auto___31276);
var G__31280 = (0);
seq__31259_31265 = G__31277;
chunk__31260_31266 = G__31278;
count__31261_31267 = G__31279;
i__31262_31268 = G__31280;
continue;
} else {
var l_31281__$1 = cljs.core.first.call(null,seq__31259_31275__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_31281__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__31282 = cljs.core.next.call(null,seq__31259_31275__$1);
var G__31283 = null;
var G__31284 = (0);
var G__31285 = (0);
seq__31259_31265 = G__31282;
chunk__31260_31266 = G__31283;
count__31261_31267 = G__31284;
i__31262_31268 = G__31285;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31286 = (function (writer,max_columns,miser_width,lb,fields,meta31287){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta31287 = meta31287;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31288,meta31287__$1){
var self__ = this;
var _31288__$1 = this;
return (new cljs.pprint.t_cljs$pprint31286(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta31287__$1));
}));

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31288){
var self__ = this;
var _31288__$1 = this;
return self__.meta31287;
}));

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31289 = cljs.core._EQ_;
var expr__31290 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31289.call(null,String,expr__31290))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__31289.call(null,Number,expr__31290))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31290)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
}));

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint31286.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint31286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta31287","meta31287",-482560313,null)], null);
}));

(cljs.pprint.t_cljs$pprint31286.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31286.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31286");

(cljs.pprint.t_cljs$pprint31286.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31286");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31286.
 */
cljs.pprint.__GT_t_cljs$pprint31286 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint31286(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta31287){
return (new cljs.pprint.t_cljs$pprint31286(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta31287));
});

}

return (new cljs.pprint.t_cljs$pprint31286(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5735__auto___31292 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5735__auto___31292)){
var cb_31293 = temp__5735__auto___31292;
cb_31293.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,lb.start_col,col);

return cljs.core.reset_BANG_.call(null,lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5735__auto___31294 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5735__auto___31294)){
var cb_31295 = temp__5735__auto___31294;
cb_31295.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_31296 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_31297 = (oldpos_31296 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_31297);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_31296,newpos_31297));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__31298 = cljs.core._EQ_;
var expr__31299 = relative_to;
if(cljs.core.truth_(pred__31298.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__31299))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__31298.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__31299))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31299)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__31301_SHARP_){
var temp__5735__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__31301_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__31301_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__5043__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__5043__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__5043__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__5043__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31333 = arguments.length;
var i__5769__auto___31334 = (0);
while(true){
if((i__5769__auto___31334 < len__5768__auto___31333)){
args__5774__auto__.push((arguments[i__5769__auto___31334]));

var G__31335 = (i__5769__auto___31334 + (1));
i__5769__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR__orig_val__31305 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__31306 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__31307 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__31308 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__31309 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__31310 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__31311 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__31312 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__31313 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__31314 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__31315 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__31316 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__31317 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__31318 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__31319 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__31320 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__31321 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__31322 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__31323 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__31324 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__31325 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__31326 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__31327 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__31328 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__31317);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__31318);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31319);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__31320);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__31321);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__31322);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__31323);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__31324);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__31325);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__31326);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__31327);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__31328);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__30920__auto___31336 = base_writer;
var new_writer__30921__auto___31337 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__30920__auto___31336));
var _STAR_out_STAR__orig_val__31329_31338 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31330_31339 = ((new_writer__30921__auto___31337)?cljs.pprint.make_pretty_writer.call(null,base_writer__30920__auto___31336,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__30920__auto___31336);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31330_31339);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31329_31338);
}} else {
var _STAR_out_STAR__orig_val__31331_31340 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31332_31341 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31332_31341);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31331_31340);
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__31316);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__31315);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__31314);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__31313);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__31312);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__31311);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__31310);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__31309);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__31308);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31307);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__31306);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__31305);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq31303){
var G__31304 = cljs.core.first.call(null,seq31303);
var seq31303__$1 = cljs.core.next.call(null,seq31303);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31304,seq31303__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__31343 = arguments.length;
switch (G__31343) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__31344 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31345 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31345);

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31344);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__30920__auto__ = writer;
var new_writer__30921__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__30920__auto__));
var _STAR_out_STAR__orig_val__31346 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31347 = ((new_writer__30921__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__30920__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__30920__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31347);

try{var _STAR_print_pretty_STAR__orig_val__31348_31351 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__31349_31352 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__31349_31352);

try{cljs.pprint.write_out.call(null,object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__31348_31351);
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31346);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__5043__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__5043__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__5774__auto__ = [];
var len__5768__auto___31356 = arguments.length;
var i__5769__auto___31357 = (0);
while(true){
if((i__5769__auto___31357 < len__5768__auto___31356)){
args__5774__auto__.push((arguments[i__5769__auto___31357]));

var G__31358 = (i__5769__auto___31357 + (1));
i__5769__auto___31357 = G__31358;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator__$1 = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator__$1);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq31353){
var G__31354 = cljs.core.first.call(null,seq31353);
var seq31353__$1 = cljs.core.next.call(null,seq31353);
var G__31355 = cljs.core.first.call(null,seq31353__$1);
var seq31353__$2 = cljs.core.next.call(null,seq31353__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31354,G__31355,seq31353__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31360,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31364 = k31360;
var G__31364__$1 = (((G__31364 instanceof cljs.core.Keyword))?G__31364.fqn:null);
switch (G__31364__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31360,else__5345__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31365){
var vec__31366 = p__31365;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31366,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31366,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31359){
var self__ = this;
var G__31359__$1 = this;
return (new cljs.core.RecordIter((0),G__31359__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31361,other31362){
var self__ = this;
var this31361__$1 = this;
return (((!((other31362 == null)))) && ((((this31361__$1.constructor === other31362.constructor)) && (((cljs.core._EQ_.call(null,this31361__$1.seq,other31362.seq)) && (((cljs.core._EQ_.call(null,this31361__$1.rest,other31362.rest)) && (((cljs.core._EQ_.call(null,this31361__$1.pos,other31362.pos)) && (cljs.core._EQ_.call(null,this31361__$1.__extmap,other31362.__extmap)))))))))));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31360){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31369 = k31360;
var G__31369__$1 = (((G__31369 instanceof cljs.core.Keyword))?G__31369.fqn:null);
switch (G__31369__$1) {
case "seq":
case "rest":
case "pos":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31360);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31359){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31370 = cljs.core.keyword_identical_QMARK_;
var expr__31371 = k__5351__auto__;
if(cljs.core.truth_(pred__31370.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__31371))){
return (new cljs.pprint.arg_navigator(G__31359,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31370.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__31371))){
return (new cljs.pprint.arg_navigator(self__.seq,G__31359,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31370.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__31371))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__31359,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31359),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31359){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__31359,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__31363){
var extmap__5384__auto__ = (function (){var G__31373 = cljs.core.dissoc.call(null,G__31363,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__31363)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31373);
} else {
return G__31373;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__31363),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__31363),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__31363),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__31376 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__31376,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31376,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5342__auto__,k__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
return this__5342__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5343__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5344__auto__,k31380,else__5345__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
var G__31384 = k31380;
var G__31384__$1 = (((G__31384 instanceof cljs.core.Keyword))?G__31384.fqn:null);
switch (G__31384__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31380,else__5345__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5362__auto__,f__5363__auto__,init__5364__auto__){
var self__ = this;
var this__5362__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5365__auto__,p__31385){
var vec__31386 = p__31385;
var k__5366__auto__ = cljs.core.nth.call(null,vec__31386,(0),null);
var v__5367__auto__ = cljs.core.nth.call(null,vec__31386,(1),null);
return f__5363__auto__.call(null,ret__5365__auto__,k__5366__auto__,v__5367__auto__);
}),init__5364__auto__,this__5362__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5357__auto__,writer__5358__auto__,opts__5359__auto__){
var self__ = this;
var this__5357__auto____$1 = this;
var pr_pair__5360__auto__ = (function (keyval__5361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,cljs.core.pr_writer,""," ","",opts__5359__auto__,keyval__5361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5358__auto__,pr_pair__5360__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__5359__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31379){
var self__ = this;
var G__31379__$1 = this;
return (new cljs.core.RecordIter((0),G__31379__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5340__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5337__auto__){
var self__ = this;
var this__5337__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5346__auto__){
var self__ = this;
var this__5346__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5339__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__5339__auto__));
}).call(null,this__5338__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31381,other31382){
var self__ = this;
var this31381__$1 = this;
return (((!((other31382 == null)))) && ((((this31381__$1.constructor === other31382.constructor)) && (((cljs.core._EQ_.call(null,this31381__$1.func,other31382.func)) && (((cljs.core._EQ_.call(null,this31381__$1.def,other31382.def)) && (((cljs.core._EQ_.call(null,this31381__$1.params,other31382.params)) && (((cljs.core._EQ_.call(null,this31381__$1.offset,other31382.offset)) && (cljs.core._EQ_.call(null,this31381__$1.__extmap,other31382.__extmap)))))))))))));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5352__auto__,k__5353__auto__){
var self__ = this;
var this__5352__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__5353__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5352__auto____$1),self__.__meta),k__5353__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5353__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5349__auto__,k31380){
var self__ = this;
var this__5349__auto____$1 = this;
var G__31389 = k31380;
var G__31389__$1 = (((G__31389 instanceof cljs.core.Keyword))?G__31389.fqn:null);
switch (G__31389__$1) {
case "func":
case "def":
case "params":
case "offset":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31380);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5350__auto__,k__5351__auto__,G__31379){
var self__ = this;
var this__5350__auto____$1 = this;
var pred__31390 = cljs.core.keyword_identical_QMARK_;
var expr__31391 = k__5351__auto__;
if(cljs.core.truth_(pred__31390.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__31391))){
return (new cljs.pprint.compiled_directive(G__31379,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31390.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__31391))){
return (new cljs.pprint.compiled_directive(self__.func,G__31379,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31390.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__31391))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__31379,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31390.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__31391))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__31379,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5351__auto__,G__31379),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5355__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5341__auto__,G__31379){
var self__ = this;
var this__5341__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__31379,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5347__auto__,entry__5348__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5348__auto__)){
return this__5347__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5348__auto__,(0)),cljs.core._nth.call(null,entry__5348__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5347__auto____$1,entry__5348__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__5388__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__5388__auto__,writer__5389__auto__){
return cljs.core._write.call(null,writer__5389__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__31383){
var extmap__5384__auto__ = (function (){var G__31393 = cljs.core.dissoc.call(null,G__31383,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__31383)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31393);
} else {
return G__31393;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__31383),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__31383),null,cljs.core.not_empty.call(null,extmap__5384__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__31396,navigator){
var vec__31397 = p__31396;
var param = cljs.core.nth.call(null,vec__31397,(0),null);
var vec__31400 = cljs.core.nth.call(null,vec__31397,(1),null);
var raw_val = cljs.core.nth.call(null,vec__31400,(0),null);
var offset = cljs.core.nth.call(null,vec__31400,(1),null);
var vec__31403 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__31403,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__31403,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__31406 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__31406,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__31406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__5045__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__31409 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__31409,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__31409,(1),null);
var base_output = (function (){var or__5045__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__31412_SHARP_){
if((p1__31412_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__31412_SHARP_,base),cljs.core.quot.call(null,p1__31412_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__31413_SHARP_){
if((p1__31413_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__31413_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__31413_SHARP_ - (10))));
}
}),cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__31415 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__31415,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__31415,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_31418 = (arg < (0));
var pos_arg_31419 = ((neg_31418)?(- arg):arg);
var raw_str_31420 = cljs.pprint.opt_base_str.call(null,base,pos_arg_31419);
var group_str_31421 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,(function (p1__31414_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__31414_SHARP_);
}),cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_31420));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_31420);
var signed_str_31422 = ((neg_31418)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31421)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_31421)].join(''):group_str_31421
));
var padded_str_31423 = (((signed_str_31422.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_31422.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_31422)].join(''):signed_str_31422);
cljs.pprint.print.call(null,padded_str_31423);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__31424 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__31425 = (pos - (1));
var G__31426 = cljs.core.first.call(null,remainder);
var G__31427 = cljs.core.next.call(null,remainder);
acc = G__31424;
pos = G__31425;
this$ = G__31426;
remainder = G__31427;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__31428 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31428,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31428,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_31431 = (((arg < (0)))?(- arg):arg);
var parts_31432 = cljs.pprint.remainders.call(null,(1000),abs_arg_31431);
if((cljs.core.count.call(null,parts_31432) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_31433 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_31432);
var full_str_31434 = cljs.pprint.add_english_scales.call(null,parts_strs_31433,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_31434].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__31435 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31435,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31435,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_31438 = (((arg < (0)))?(- arg):arg);
var parts_31439 = cljs.pprint.remainders.call(null,(1000),abs_arg_31438);
if((cljs.core.count.call(null,parts_31439) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_31440 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_31439));
var head_str_31441 = cljs.pprint.add_english_scales.call(null,parts_strs_31440,(1));
var tail_str_31442 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_31439));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_31441)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_31442))))))?[head_str_31441,", ",tail_str_31442].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_31441))))?[head_str_31441,"th"].join(''):tail_str_31442
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_31443 = cljs.core.rem.call(null,arg,(100));
var not_teens_31444 = ((((11) < low_two_digits_31443)) || (((19) > low_two_digits_31443)));
var low_digit_31445 = cljs.core.rem.call(null,low_two_digits_31443,(10));
cljs.pprint.print.call(null,(((((low_digit_31445 === (1))) && (not_teens_31444)))?"st":(((((low_digit_31445 === (2))) && (not_teens_31444)))?"nd":(((((low_digit_31445 === (3))) && (not_teens_31444)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__31446 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31446,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31446,(1),null);
if(((typeof arg === 'number') && ((((arg > (0))) && ((arg < (4000))))))){
var digits_31449 = cljs.pprint.remainders.call(null,(10),arg);
var acc_31450 = cljs.core.PersistentVector.EMPTY;
var pos_31451 = (cljs.core.count.call(null,digits_31449) - (1));
var digits_31452__$1 = digits_31449;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_31452__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_31450));
} else {
var digit_31453 = cljs.core.first.call(null,digits_31452__$1);
var G__31454 = ((cljs.core._EQ_.call(null,(0),digit_31453))?acc_31450:cljs.core.conj.call(null,acc_31450,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_31451),(digit_31453 - (1)))));
var G__31455 = (pos_31451 - (1));
var G__31456 = cljs.core.next.call(null,digits_31452__$1);
acc_31450 = G__31454;
pos_31451 = G__31455;
digits_31452__$1 = G__31456;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__31457 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__31457,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31457,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__31460 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__31460,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31460,(1),null);
var pred__31463_31466 = cljs.core._EQ_;
var expr__31464_31467 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__31463_31466.call(null,"o",expr__31464_31467))){
cljs.pprint.cl_format.call(null,true,"\\o~3,'0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__31463_31466.call(null,"u",expr__31464_31467))){
cljs.pprint.cl_format.call(null,true,"\\u~4,'0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__31463_31466.call(null,null,expr__31464_31467))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31464_31467)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__31468 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__31468,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31468,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__31471 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__31471,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__31471,(1),null);
var vec__31474 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__31474,(0),null);
var offsets = cljs.core.nth.call(null,vec__31474,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s,(0),dotloc),cljs.core.subs.call(null,s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s,(0),(1)),cljs.core.subs.call(null,s,(2),exploc)].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__31477 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__31477,(0),null);
var e = cljs.core.nth.call(null,vec__31477,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__31480 = (i - (1));
i = G__31480;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__5045__auto__ = d;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__5130__auto__ = (2);
var y__5131__auto__ = w;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__5130__auto__ = (e + (1));
var y__5131__auto__ = (w__$1 - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():(w__$1 + e)
));
var vec__31481 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__31481,(0),null);
var e1 = cljs.core.nth.call(null,vec__31481,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__31481,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__31481,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__31484 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__31484,(0),null);
var e1 = cljs.core.nth.call(null,vec__31484,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.call(null,m,(0),loc),".",cljs.core.subs.call(null,m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.call(null,m,(0),k),".",cljs.core.subs.call(null,m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__31487 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31487,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31487,(1),null);
var vec__31490 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__31490,(0),null);
var abs = cljs.core.nth.call(null,vec__31490,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__31493 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__31493,(0),null);
var exp = cljs.core.nth.call(null,vec__31493,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__31496 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__31496,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__31496,(1),null);
var expanded = cljs.core.nth.call(null,vec__31496,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = w;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = d;
if(cljs.core.truth_(and__5043__auto____$1)){
return (((d >= (1))) && (((cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (((cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_31499 = ((fixed_repr__$1).length);
var signed_len_31500 = (cljs.core.truth_(add_sign)?(len_31499 + (1)):len_31499);
var prepend_zero_31501__$1 = ((prepend_zero) && ((!((signed_len_31500 >= w)))));
var append_zero_31502__$1 = ((append_zero) && ((!((signed_len_31500 >= w)))));
var full_len_31503 = ((((prepend_zero_31501__$1) || (append_zero_31502__$1)))?(signed_len_31500 + (1)):signed_len_31500);
if(cljs.core.truth_((function (){var and__5043__auto__ = (full_len_31503 > w);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5043__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_31503),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_31501__$1)?"0":null),fixed_repr__$1,((append_zero_31502__$1)?"0":null)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__31504 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31504,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31504,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__31510_31520 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__31511_31521 = G__31510_31520;
var mantissa_31522 = cljs.core.nth.call(null,vec__31511_31521,(0),null);
var exp_31523 = cljs.core.nth.call(null,vec__31511_31521,(1),null);
var G__31510_31524__$1 = G__31510_31520;
while(true){
var vec__31514_31525 = G__31510_31524__$1;
var mantissa_31526__$1 = cljs.core.nth.call(null,vec__31514_31525,(0),null);
var exp_31527__$1 = cljs.core.nth.call(null,vec__31514_31525,(1),null);
var w_31528 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_31529 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_31530 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_31531 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_31532 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "E";
}
})();
var add_sign_31533 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_31534 = (k_31531 <= (0));
var scaled_exp_31535 = (exp_31527__$1 - (k_31531 - (1)));
var scaled_exp_str_31536 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_31535));
var scaled_exp_str_31537__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_31532),(((scaled_exp_31535 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_31530)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_31530 - ((scaled_exp_str_31536).length)),"0")):null)),scaled_exp_str_31536].join('');
var exp_width_31538 = ((scaled_exp_str_31537__$1).length);
var base_mantissa_width_31539 = cljs.core.count.call(null,mantissa_31526__$1);
var scaled_mantissa_31540 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_31531),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_31526__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_31529)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_31529 - (base_mantissa_width_31539 - (1))) - (((k_31531 < (0)))?(- k_31531):(0))),"0")):null))].join('');
var w_mantissa_31541 = (cljs.core.truth_(w_31528)?(w_31528 - exp_width_31538):null);
var vec__31517_31542 = cljs.pprint.round_str.call(null,scaled_mantissa_31540,(0),((cljs.core._EQ_.call(null,k_31531,(0)))?(d_31529 - (1)):(((k_31531 > (0)))?d_31529:(((k_31531 < (0)))?(d_31529 - (1)):null))),(cljs.core.truth_(w_mantissa_31541)?(w_mantissa_31541 - (cljs.core.truth_(add_sign_31533)?(1):(0))):null));
var rounded_mantissa_31543 = cljs.core.nth.call(null,vec__31517_31542,(0),null);
var __31544 = cljs.core.nth.call(null,vec__31517_31542,(1),null);
var incr_exp_31545 = cljs.core.nth.call(null,vec__31517_31542,(2),null);
var full_mantissa_31546 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_31543,k_31531);
var append_zero_31547 = ((cljs.core._EQ_.call(null,k_31531,cljs.core.count.call(null,rounded_mantissa_31543))) && ((d_31529 == null)));
if(cljs.core.not.call(null,incr_exp_31545)){
if(cljs.core.truth_(w_31528)){
var len_31548 = (((full_mantissa_31546).length) + exp_width_31538);
var signed_len_31549 = (cljs.core.truth_(add_sign_31533)?(len_31548 + (1)):len_31548);
var prepend_zero_31550__$1 = ((prepend_zero_31534) && ((!(cljs.core._EQ_.call(null,signed_len_31549,w_31528)))));
var full_len_31551 = ((prepend_zero_31550__$1)?(signed_len_31549 + (1)):signed_len_31549);
var append_zero_31552__$1 = ((append_zero_31547) && ((full_len_31551 < w_31528)));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = (full_len_31551 > w_31528);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = e_31530;
if(cljs.core.truth_(and__5043__auto__)){
return ((exp_width_31538 - (2)) > e_31530);
} else {
return and__5043__auto__;
}
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5043__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_31528,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_31528 - full_len_31551) - ((append_zero_31552__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_31533)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_31550__$1)?"0":null),full_mantissa_31546,((append_zero_31552__$1)?"0":null),scaled_exp_str_31537__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_31533)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_31534)?"0":null),full_mantissa_31546,((append_zero_31547)?"0":null),scaled_exp_str_31537__$1].join(''));
}
} else {
var G__31553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_31543,(exp_31527__$1 + (1))], null);
G__31510_31524__$1 = G__31553;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__31554 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31554,(0),null);
var _ = cljs.core.nth.call(null,vec__31554,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__31557 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__31557,(0),null);
var exp = cljs.core.nth.call(null,vec__31557,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__5130__auto__ = cljs.core.count.call(null,mantissa);
var y__5131__auto__ = (function (){var x__5133__auto__ = n;
var y__5134__auto__ = (7);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__31560 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31560,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31560,(1),null);
var vec__31563 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__31563,(0),null);
var exp = cljs.core.nth.call(null,vec__31563,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (arg < (0));
}
})();
var vec__31566 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__31566,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__31566,(1),null);
var expanded = cljs.core.nth.call(null,vec__31566,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5043__auto__)){
return add_sign;
} else {
return and__5043__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__5043__auto__){
return add_sign;
} else {
return and__5043__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__31569 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__31569,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31569,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator__$1;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__31572 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__31572,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31572,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator__$1;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__31575 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__31575,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31575,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator__$1;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__31578 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__31578,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31578,(1),null);
var vec__31581 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__31581,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__31581,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = max_count;
if(cljs.core.truth_(and__5043__auto__)){
return (count >= max_count);
} else {
return and__5043__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__31584 = (count + (1));
var G__31585 = iter_result;
var G__31586 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__31584;
args__$1 = G__31585;
last_pos = G__31586;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__31587 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__31587,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31587,(1),null);
var vec__31590 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__31590,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__31590,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = max_count;
if(cljs.core.truth_(and__5043__auto__)){
return (count >= max_count);
} else {
return and__5043__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__31593 = (count + (1));
var G__31594 = cljs.core.next.call(null,arg_list__$1);
count = G__31593;
arg_list__$1 = G__31594;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__31595 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__31595,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31595,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = max_count;
if(cljs.core.truth_(and__5043__auto__)){
return (count >= max_count);
} else {
return and__5043__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__31598 = (count + (1));
var G__31599 = iter_result;
var G__31600 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__31598;
navigator__$2 = G__31599;
last_pos = G__31600;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__31601 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__31601,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31601,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = max_count;
if(cljs.core.truth_(and__5043__auto__)){
return (count >= max_count);
} else {
return and__5043__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__31607 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__31607,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__31607,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__31610 = (count + (1));
var G__31611 = navigator__$3;
count = G__31610;
navigator__$2 = G__31611;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__31617 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__31620 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31621 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31621);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31620);
}})();
var iter_result = cljs.core.nth.call(null,vec__31617,(0),null);
var result_str = cljs.core.nth.call(null,vec__31617,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__31622 = cljs.core.next.call(null,clauses__$1);
var G__31623 = cljs.core.conj.call(null,acc,result_str);
var G__31624 = iter_result;
clauses__$1 = G__31622;
acc = G__31623;
navigator__$1 = G__31624;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__31625 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var else$ = temp__5735__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__31628 = cljs.core.nth.call(null,vec__31625,(0),null);
var eol_str = cljs.core.nth.call(null,vec__31628,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__31625,(1),null);
var navigator__$1 = (function (){var or__5045__auto__ = new_navigator;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return navigator;
}
})();
var vec__31631 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var p = temp__5735__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__31631,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__31631,(1),null);
var navigator__$2 = (function (){var or__5045__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__5045__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__5045__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__31634 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__31634,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__31634,(1),null);
var slots = (function (){var x__5130__auto__ = (1);
var y__5131__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__5130__auto__ = minpad;
var y__5131__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__5043__auto__ = eol_str;
if(cljs.core.truth_(and__5043__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__5043__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_31637__$1 = slots;
var extra_pad_31638__$1 = extra_pad;
var strs_31639__$1 = strs;
var pad_only_31640 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_31639__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_31639__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_31640))?cljs.core.first.call(null,strs_31639__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__5045__auto__ = pad_only_31640;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.next.call(null,strs_31639__$1);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_31638__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__31641 = (slots_31637__$1 - (1));
var G__31642 = (extra_pad_31638__$1 - (1));
var G__31643 = (cljs.core.truth_(pad_only_31640)?strs_31639__$1:cljs.core.next.call(null,strs_31639__$1));
var G__31644 = false;
slots_31637__$1 = G__31641;
extra_pad_31638__$1 = G__31642;
strs_31639__$1 = G__31643;
pad_only_31640 = G__31644;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31645 = (function (writer,meta31646){
this.writer = writer;
this.meta31646 = meta31646;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31647,meta31646__$1){
var self__ = this;
var _31647__$1 = this;
return (new cljs.pprint.t_cljs$pprint31645(self__.writer,meta31646__$1));
}));

(cljs.pprint.t_cljs$pprint31645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31647){
var self__ = this;
var _31647__$1 = this;
return self__.meta31646;
}));

(cljs.pprint.t_cljs$pprint31645.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

(cljs.pprint.t_cljs$pprint31645.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31648 = cljs.core._EQ_;
var expr__31649 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31648.call(null,String,expr__31649))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__31648.call(null,Number,expr__31649))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31649)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta31646","meta31646",1330620182,null)], null);
}));

(cljs.pprint.t_cljs$pprint31645.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31645.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31645");

(cljs.pprint.t_cljs$pprint31645.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31645");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31645.
 */
cljs.pprint.__GT_t_cljs$pprint31645 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint31645(writer__$1,meta31646){
return (new cljs.pprint.t_cljs$pprint31645(writer__$1,meta31646));
});

}

return (new cljs.pprint.t_cljs$pprint31645(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31651 = (function (writer,meta31652){
this.writer = writer;
this.meta31652 = meta31652;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31653,meta31652__$1){
var self__ = this;
var _31653__$1 = this;
return (new cljs.pprint.t_cljs$pprint31651(self__.writer,meta31652__$1));
}));

(cljs.pprint.t_cljs$pprint31651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31653){
var self__ = this;
var _31653__$1 = this;
return self__.meta31652;
}));

(cljs.pprint.t_cljs$pprint31651.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

(cljs.pprint.t_cljs$pprint31651.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31654 = cljs.core._EQ_;
var expr__31655 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31654.call(null,String,expr__31655))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__31654.call(null,Number,expr__31655))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31655)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta31652","meta31652",-1419003371,null)], null);
}));

(cljs.pprint.t_cljs$pprint31651.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31651.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31651");

(cljs.pprint.t_cljs$pprint31651.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31651");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31651.
 */
cljs.pprint.__GT_t_cljs$pprint31651 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint31651(writer__$1,meta31652){
return (new cljs.pprint.t_cljs$pprint31651(writer__$1,meta31652));
});

}

return (new cljs.pprint.t_cljs$pprint31651(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = first_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = f;
if(cljs.core.truth_(and__5043__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?[clojure.string.upper_case.call(null,f),cljs.core.subs.call(null,s,(1))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__5043__auto__ = m;
if(cljs.core.truth_(and__5043__auto__)){
return (m.index + (1));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s__$2,(0),offset),clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31657 = (function (writer,last_was_whitespace_QMARK_,meta31658){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta31658 = meta31658;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31659,meta31658__$1){
var self__ = this;
var _31659__$1 = this;
return (new cljs.pprint.t_cljs$pprint31657(self__.writer,self__.last_was_whitespace_QMARK_,meta31658__$1));
}));

(cljs.pprint.t_cljs$pprint31657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31659){
var self__ = this;
var _31659__$1 = this;
return self__.meta31658;
}));

(cljs.pprint.t_cljs$pprint31657.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

(cljs.pprint.t_cljs$pprint31657.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31660 = cljs.core._EQ_;
var expr__31661 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31660.call(null,String,expr__31661))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__31660.call(null,Number,expr__31661))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31661)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta31658","meta31658",1321359800,null)], null);
}));

(cljs.pprint.t_cljs$pprint31657.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31657.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31657");

(cljs.pprint.t_cljs$pprint31657.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31657");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31657.
 */
cljs.pprint.__GT_t_cljs$pprint31657 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint31657(writer__$1,last_was_whitespace_QMARK___$1,meta31658){
return (new cljs.pprint.t_cljs$pprint31657(writer__$1,last_was_whitespace_QMARK___$1,meta31658));
});

}

return (new cljs.pprint.t_cljs$pprint31657(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint31663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint31663 = (function (writer,capped,meta31664){
this.writer = writer;
this.capped = capped;
this.meta31664 = meta31664;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint31663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31665,meta31664__$1){
var self__ = this;
var _31665__$1 = this;
return (new cljs.pprint.t_cljs$pprint31663(self__.writer,self__.capped,meta31664__$1));
}));

(cljs.pprint.t_cljs$pprint31663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31665){
var self__ = this;
var _31665__$1 = this;
return self__.meta31664;
}));

(cljs.pprint.t_cljs$pprint31663.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

(cljs.pprint.t_cljs$pprint31663.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__31666 = cljs.core._EQ_;
var expr__31667 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__31666.call(null,String,expr__31667))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__5043__auto__ = m;
if(cljs.core.truth_(and__5043__auto__)){
return m.index;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.subs.call(null,s,(0),offset),clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__31666.call(null,Number,expr__31667))){
var c = cljs.core.char$.call(null,x);
if(((cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))) && (goog.string.isUnicodeChar(c)))){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31667)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint31663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta31664","meta31664",-509655261,null)], null);
}));

(cljs.pprint.t_cljs$pprint31663.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint31663.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint31663");

(cljs.pprint.t_cljs$pprint31663.cljs$lang$ctorPrWriter = (function (this__5329__auto__,writer__5330__auto__,opt__5331__auto__){
return cljs.core._write.call(null,writer__5330__auto__,"cljs.pprint/t_cljs$pprint31663");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint31663.
 */
cljs.pprint.__GT_t_cljs$pprint31663 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint31663(writer__$1,capped__$1,meta31664){
return (new cljs.pprint.t_cljs$pprint31663(writer__$1,capped__$1,meta31664));
});

}

return (new cljs.pprint.t_cljs$pprint31663(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__31669 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31670 = make_writer.call(null,cljs.core._STAR_out_STAR_);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31670);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31669);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_31672 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_31673 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_31674 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_31675 = (((current_31674 < colnum_31672))?(colnum_31672 - current_31674):((cljs.core._EQ_.call(null,colinc_31673,(0)))?(0):(colinc_31673 - cljs.core.rem.call(null,(current_31674 - colnum_31672),colinc_31673))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_31675," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_31676 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_31677 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_31678 = (colrel_31676 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_31679 = (((colinc_31677 > (0)))?cljs.core.rem.call(null,start_col_31678,colinc_31677):(0));
var space_count_31680 = (colrel_31676 + ((cljs.core._EQ_.call(null,(0),offset_31679))?(0):(colinc_31677 - offset_31679)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_31680," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__31681 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31681,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31681,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31684_31688 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31685_31689 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31686_31690 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31687_31691 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31686_31690);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31687_31691);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31685_31689);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31684_31688);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31692_SHARP_,p2__31693_SHARP_,p3__31694_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__31692_SHARP_,p2__31693_SHARP_,p3__31694_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31695_SHARP_,p2__31696_SHARP_,p3__31697_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__31695_SHARP_,p2__31696_SHARP_,p3__31697_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31698_SHARP_,p2__31699_SHARP_,p3__31700_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__31698_SHARP_,p2__31699_SHARP_,p3__31700_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31701_SHARP_,p2__31702_SHARP_,p3__31703_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__31701_SHARP_,p2__31702_SHARP_,p3__31703_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31704_SHARP_,p2__31705_SHARP_,p3__31706_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__31704_SHARP_,p2__31705_SHARP_,p3__31706_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__31707_SHARP_,p2__31708_SHARP_,p3__31709_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__31707_SHARP_,p2__31708_SHARP_,p3__31709_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__31710_SHARP_,p2__31711_SHARP_,p3__31712_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__31710_SHARP_),p1__31710_SHARP_,p2__31711_SHARP_,p3__31712_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5043__auto__;
}
})())){
return (function (p1__31713_SHARP_,p2__31714_SHARP_,p3__31715_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__31713_SHARP_,p2__31714_SHARP_,p3__31715_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__31716_SHARP_,p2__31717_SHARP_,p3__31718_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__31716_SHARP_,p2__31717_SHARP_,p3__31718_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__31719_SHARP_,p2__31720_SHARP_,p3__31721_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__31719_SHARP_,p2__31720_SHARP_,p3__31721_SHARP_);
});
} else {
return (function (p1__31722_SHARP_,p2__31723_SHARP_,p3__31724_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__31722_SHARP_,p2__31723_SHARP_,p3__31724_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__31734 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__31734,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__31734,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5635__auto___31752 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_31753 = (0);
while(true){
if((i_31753 < n__5635__auto___31752)){
cljs.pprint.prn.call(null);

var G__31754 = (i_31753 + (1));
i_31753 = G__31754;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_31755 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_31755 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__5635__auto___31756 = (cnt_31755 - (1));
var i_31757 = (0);
while(true){
if((i_31757 < n__5635__auto___31756)){
cljs.pprint.prn.call(null);

var G__31758 = (i_31757 + (1));
i_31757 = G__31758;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5635__auto___31759 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_31760 = (0);
while(true){
if((i_31760 < n__5635__auto___31759)){
cljs.pprint.print.call(null,"\f");

var G__31761 = (i_31760 + (1));
i_31760 = G__31761;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__31725_SHARP_,p2__31726_SHARP_,p3__31727_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__31725_SHARP_,p2__31726_SHARP_,p3__31727_SHARP_);
});
} else {
return (function (p1__31728_SHARP_,p2__31729_SHARP_,p3__31730_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__31728_SHARP_,p2__31729_SHARP_,p3__31730_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__31737 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__31737,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31737,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__31740 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__31740,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31740,(1),null);
var vec__31743 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__31743,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__31743,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5043__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__31731_SHARP_,p2__31732_SHARP_,p3__31733_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__31731_SHARP_,p2__31732_SHARP_,p3__31733_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__5043__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__5043__auto__ = arg1;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = arg2;
if(cljs.core.truth_(and__5043__auto____$1)){
return arg3;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = arg1;
if(cljs.core.truth_(and__5043__auto__)){
return arg2;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__31746 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31746,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31746,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__31749 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__31749,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__31749,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__31762){
var vec__31763 = p__31762;
var s = cljs.core.nth.call(null,vec__31763,(0),null);
var offset = cljs.core.nth.call(null,vec__31763,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__31763,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__31766){
var vec__31767 = p__31766;
var p = cljs.core.nth.call(null,vec__31767,(0),null);
var offset = cljs.core.nth.call(null,vec__31767,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__31770){
var vec__31771 = p__31770;
var s__$1 = cljs.core.nth.call(null,vec__31771,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__31771,(1),null);
var flags = cljs.core.nth.call(null,vec__31771,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5043__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5043__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5043__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5043__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__5133__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__5134__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__31774_SHARP_,p2__31775_SHARP_){
var val = cljs.core.first.call(null,p1__31774_SHARP_);
if((!((((val == null)) || (((cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__31775_SHARP_)),cljs.core.type.call(null,val))))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__31775_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__31774_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__5522__auto__ = (function cljs$pprint$map_params_$_iter__31779(s__31780){
return (new cljs.core.LazySeq(null,(function (){
var s__31780__$1 = s__31780;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31780__$1);
if(temp__5735__auto__){
var s__31780__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31780__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__31780__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__31782 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__31781 = (0);
while(true){
if((i__31781 < size__5521__auto__)){
var vec__31783 = cljs.core._nth.call(null,c__5520__auto__,i__31781);
var name = cljs.core.nth.call(null,vec__31783,(0),null);
var vec__31786 = cljs.core.nth.call(null,vec__31783,(1),null);
var default$ = cljs.core.nth.call(null,vec__31786,(0),null);
cljs.core.chunk_append.call(null,b__31782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__31795 = (i__31781 + (1));
i__31781 = G__31795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31782),cljs$pprint$map_params_$_iter__31779.call(null,cljs.core.chunk_rest.call(null,s__31780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31782),null);
}
} else {
var vec__31789 = cljs.core.first.call(null,s__31780__$2);
var name = cljs.core.nth.call(null,vec__31789,(0),null);
var vec__31792 = cljs.core.nth.call(null,vec__31789,(1),null);
var default$ = cljs.core.nth.call(null,vec__31792,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__31779.call(null,cljs.core.rest.call(null,s__31780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__31776_SHARP_,p2__31777_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__31776_SHARP_,p2__31777_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__31778_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__31778_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__31796 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__31796,(0),null);
var vec__31799 = cljs.core.nth.call(null,vec__31796,(1),null);
var rest = cljs.core.nth.call(null,vec__31799,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__31799,(1),null);
var vec__31802 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__31802,(0),null);
var vec__31805 = cljs.core.nth.call(null,vec__31802,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__31805,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__31805,(1),null);
var flags = cljs.core.nth.call(null,vec__31805,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__5043__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__5043__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__31808 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__31808,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__31808,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__31811){
var vec__31812 = p__31811;
var clause_map = cljs.core.nth.call(null,vec__31812,(0),null);
var saw_else = cljs.core.nth.call(null,vec__31812,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__31812,(2),null);
var vec__31815 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__31815,(0),null);
var vec__31818 = cljs.core.nth.call(null,vec__31815,(1),null);
var type = cljs.core.nth.call(null,vec__31818,(0),null);
var right_params = cljs.core.nth.call(null,vec__31818,(1),null);
var else_params = cljs.core.nth.call(null,vec__31818,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__31818,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__31821 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__31822 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__31822);

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p__31823){
var vec__31824 = p__31823;
var s = cljs.core.nth.call(null,vec__31824,(0),null);
var offset = cljs.core.nth.call(null,vec__31824,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__31821);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__31827 = cljs.core.next.call(null,format__$1);
format__$1 = G__31827;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR__orig_val__31830 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__31831 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__31831);

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__31830);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__31832 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__31832,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__31832,(1),null);
var vec__31835 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__31835,(0),null);
var offsets = cljs.core.nth.call(null,vec__31835,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__5043__auto__ = macro_char;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__5043__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31839_31844 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31840_31845 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31841_31846 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31842_31847 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31841_31846);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31842_31847);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count31843_31848 = (0);
var alis_31849__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count31843_31848 < cljs.core._STAR_print_length_STAR_)))){
if(alis_31849__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_31849__$1));

if(cljs.core.next.call(null,alis_31849__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31850 = (length_count31843_31848 + (1));
var G__31851 = cljs.core.next.call(null,alis_31849__$1);
length_count31843_31848 = G__31850;
alis_31849__$1 = G__31851;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31840_31845);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31839_31844);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31852_31857 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31853_31858 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31854_31859 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31855_31860 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31854_31859);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31855_31860);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count31856_31861 = (0);
var aseq_31862 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count31856_31861 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_31862){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_31862));

if(cljs.core.next.call(null,aseq_31862)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31863 = (length_count31856_31861 + (1));
var G__31864 = cljs.core.next.call(null,aseq_31862);
length_count31856_31861 = G__31863;
aseq_31862 = G__31864;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31853_31858);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31852_31857);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__30985__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31865__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31865 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31866__i = 0, G__31866__a = new Array(arguments.length -  0);
while (G__31866__i < G__31866__a.length) {G__31866__a[G__31866__i] = arguments[G__31866__i + 0]; ++G__31866__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31866__a,0,null);
} 
return G__31865__delegate.call(this,args__30987__auto__);};
G__31865.cljs$lang$maxFixedArity = 0;
G__31865.cljs$lang$applyTo = (function (arglist__31867){
var args__30987__auto__ = cljs.core.seq(arglist__31867);
return G__31865__delegate(args__30987__auto__);
});
G__31865.cljs$core$IFn$_invoke$arity$variadic = G__31865__delegate;
return G__31865;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__31868 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10543),(10543),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__31868,(0),null);
var lift_map = cljs.core.nth.call(null,vec__31868,(1),null);
var amap__$1 = (function (){var or__5045__auto__ = lift_map;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31871_31880 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31872_31881 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31873_31882 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31874_31883 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31873_31882);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31874_31883);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count31875_31884 = (0);
var aseq_31885 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count31875_31884 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_31885){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31876_31886 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31877_31887 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31878_31888 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31879_31889 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31878_31888);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31879_31889);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_31885));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_31885)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31877_31887);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31876_31886);
}}


if(cljs.core.next.call(null,aseq_31885)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31890 = (length_count31875_31884 + (1));
var G__31891 = cljs.core.next.call(null,aseq_31885);
length_count31875_31884 = G__31890;
aseq_31885 = G__31891;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31872_31881);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31871_31880);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__30985__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31892__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31892 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31893__i = 0, G__31893__a = new Array(arguments.length -  0);
while (G__31893__i < G__31893__a.length) {G__31893__a[G__31893__i] = arguments[G__31893__i + 0]; ++G__31893__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31893__a,0,null);
} 
return G__31892__delegate.call(this,args__30987__auto__);};
G__31892.cljs$lang$maxFixedArity = 0;
G__31892.cljs$lang$applyTo = (function (arglist__31894){
var args__30987__auto__ = cljs.core.seq(arglist__31894);
return G__31892__delegate(args__30987__auto__);
});
G__31892.cljs$core$IFn$_invoke$arity$variadic = G__31892__delegate;
return G__31892;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__5045__auto__ = (function (){var temp__5735__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31895_31900 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31896_31901 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31897_31902 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31898_31903 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31897_31902);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31898_31903);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__5043__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__5043__auto__){
return (!(cljs.core._realized_QMARK_.call(null,o)));
} else {
return and__5043__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31896_31901);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31895_31900);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__30985__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31904__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31904 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31905__i = 0, G__31905__a = new Array(arguments.length -  0);
while (G__31905__i < G__31905__a.length) {G__31905__a[G__31905__i] = arguments[G__31905__i + 0]; ++G__31905__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31905__a,0,null);
} 
return G__31904__delegate.call(this,args__30987__auto__);};
G__31904.cljs$lang$maxFixedArity = 0;
G__31904.cljs$lang$applyTo = (function (arglist__31906){
var args__30987__auto__ = cljs.core.seq(arglist__31906);
return G__31904__delegate(args__30987__auto__);
});
G__31904.cljs$core$IFn$_invoke$arity$variadic = G__31904__delegate;
return G__31904;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__31908 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__31908,(0),null);
var end = cljs.core.nth.call(null,vec__31908,(1),null);
var vec__31911 = reference;
var seq__31912 = cljs.core.seq.call(null,vec__31911);
var first__31913 = cljs.core.first.call(null,seq__31912);
var seq__31912__$1 = cljs.core.next.call(null,seq__31912);
var keyw = first__31913;
var args = seq__31912__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31914_31928 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31915_31929 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31916_31930 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31917_31931 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31916_31930);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31917_31931);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__30985__auto__ = "~w~:i";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31932__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31932 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31933__i = 0, G__31933__a = new Array(arguments.length -  0);
while (G__31933__i < G__31933__a.length) {G__31933__a[G__31933__i] = arguments[G__31933__i + 0]; ++G__31933__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31933__a,0,null);
} 
return G__31932__delegate.call(this,args__30987__auto__);};
G__31932.cljs$lang$maxFixedArity = 0;
G__31932.cljs$lang$applyTo = (function (arglist__31934){
var args__30987__auto__ = cljs.core.seq(arglist__31934);
return G__31932__delegate(args__30987__auto__);
});
G__31932.cljs$core$IFn$_invoke$arity$variadic = G__31932__delegate;
return G__31932;
})()
;
})().call(null,keyw);

var args_31935__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_31935__$1)){
(function (){var format_in__30985__auto__ = " ";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31936__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31936 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31937__i = 0, G__31937__a = new Array(arguments.length -  0);
while (G__31937__i < G__31937__a.length) {G__31937__a[G__31937__i] = arguments[G__31937__i + 0]; ++G__31937__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31937__a,0,null);
} 
return G__31936__delegate.call(this,args__30987__auto__);};
G__31936.cljs$lang$maxFixedArity = 0;
G__31936.cljs$lang$applyTo = (function (arglist__31938){
var args__30987__auto__ = cljs.core.seq(arglist__31938);
return G__31936__delegate(args__30987__auto__);
});
G__31936.cljs$core$IFn$_invoke$arity$variadic = G__31936__delegate;
return G__31936;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})().call(null);

var arg_31939 = cljs.core.first.call(null,args_31935__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_31939)){
var vec__31918_31940 = cljs.pprint.brackets.call(null,arg_31939);
var start_31941__$1 = cljs.core.nth.call(null,vec__31918_31940,(0),null);
var end_31942__$1 = cljs.core.nth.call(null,vec__31918_31940,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31921_31943 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31922_31944 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31923_31945 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31924_31946 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31923_31945);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31924_31946);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_31941__$1,null,end_31942__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_31939),(3))) && ((cljs.core.second.call(null,arg_31939) instanceof cljs.core.Keyword)))){
var vec__31925_31947 = arg_31939;
var ns_31948 = cljs.core.nth.call(null,vec__31925_31947,(0),null);
var kw_31949 = cljs.core.nth.call(null,vec__31925_31947,(1),null);
var lis_31950 = cljs.core.nth.call(null,vec__31925_31947,(2),null);
(function (){var format_in__30985__auto__ = "~w ~w ";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31925_31947,ns_31948,kw_31949,lis_31950,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31951__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31951 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31952__i = 0, G__31952__a = new Array(arguments.length -  0);
while (G__31952__i < G__31952__a.length) {G__31952__a[G__31952__i] = arguments[G__31952__i + 0]; ++G__31952__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31952__a,0,null);
} 
return G__31951__delegate.call(this,args__30987__auto__);};
G__31951.cljs$lang$maxFixedArity = 0;
G__31951.cljs$lang$applyTo = (function (arglist__31953){
var args__30987__auto__ = cljs.core.seq(arglist__31953);
return G__31951__delegate(args__30987__auto__);
});
G__31951.cljs$core$IFn$_invoke$arity$variadic = G__31951__delegate;
return G__31951;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31925_31947,ns_31948,kw_31949,lis_31950,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})().call(null,ns_31948,kw_31949);

if(cljs.core.sequential_QMARK_.call(null,lis_31950)){
(function (){var format_in__30985__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_31950))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31925_31947,ns_31948,kw_31949,lis_31950,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31954__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31954 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31955__i = 0, G__31955__a = new Array(arguments.length -  0);
while (G__31955__i < G__31955__a.length) {G__31955__a[G__31955__i] = arguments[G__31955__i + 0]; ++G__31955__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31955__a,0,null);
} 
return G__31954__delegate.call(this,args__30987__auto__);};
G__31954.cljs$lang$maxFixedArity = 0;
G__31954.cljs$lang$applyTo = (function (arglist__31956){
var args__30987__auto__ = cljs.core.seq(arglist__31956);
return G__31954__delegate(args__30987__auto__);
});
G__31954.cljs$core$IFn$_invoke$arity$variadic = G__31954__delegate;
return G__31954;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31925_31947,ns_31948,kw_31949,lis_31950,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})().call(null,lis_31950);
} else {
cljs.pprint.write_out.call(null,lis_31950);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__30985__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31957__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31957 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31958__i = 0, G__31958__a = new Array(arguments.length -  0);
while (G__31958__i < G__31958__a.length) {G__31958__a[G__31958__i] = arguments[G__31958__i + 0]; ++G__31958__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31958__a,0,null);
} 
return G__31957__delegate.call(this,args__30987__auto__);};
G__31957.cljs$lang$maxFixedArity = 0;
G__31957.cljs$lang$applyTo = (function (arglist__31959){
var args__30987__auto__ = cljs.core.seq(arglist__31959);
return G__31957__delegate(args__30987__auto__);
});
G__31957.cljs$core$IFn$_invoke$arity$variadic = G__31957__delegate;
return G__31957;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,_STAR_current_level_STAR__orig_val__31921_31943,_STAR_current_length_STAR__orig_val__31922_31944,_STAR_current_level_STAR__temp_val__31923_31945,_STAR_current_length_STAR__temp_val__31924_31946,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})(),arg_31939);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31922_31944);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31921_31943);
}}


if(cljs.core.next.call(null,args_31935__$1)){
(function (){var format_in__30985__auto__ = "~_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31960__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31960 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31961__i = 0, G__31961__a = new Array(arguments.length -  0);
while (G__31961__i < G__31961__a.length) {G__31961__a[G__31961__i] = arguments[G__31961__i + 0]; ++G__31961__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31961__a,0,null);
} 
return G__31960__delegate.call(this,args__30987__auto__);};
G__31960.cljs$lang$maxFixedArity = 0;
G__31960.cljs$lang$applyTo = (function (arglist__31962){
var args__30987__auto__ = cljs.core.seq(arglist__31962);
return G__31960__delegate(args__30987__auto__);
});
G__31960.cljs$core$IFn$_invoke$arity$variadic = G__31960__delegate;
return G__31960;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,vec__31918_31940,start_31941__$1,end_31942__$1,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_31939);

if(cljs.core.next.call(null,args_31935__$1)){
(function (){var format_in__30985__auto__ = "~:_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return ((function (args_31935__$1,format_in__30985__auto__,cf__30986__auto__,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args){
return (function() { 
var G__31963__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31963 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31964__i = 0, G__31964__a = new Array(arguments.length -  0);
while (G__31964__i < G__31964__a.length) {G__31964__a[G__31964__i] = arguments[G__31964__i + 0]; ++G__31964__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31964__a,0,null);
} 
return G__31963__delegate.call(this,args__30987__auto__);};
G__31963.cljs$lang$maxFixedArity = 0;
G__31963.cljs$lang$applyTo = (function (arglist__31965){
var args__30987__auto__ = cljs.core.seq(arglist__31965);
return G__31963__delegate(args__30987__auto__);
});
G__31963.cljs$core$IFn$_invoke$arity$variadic = G__31963__delegate;
return G__31963;
})()
;
;})(args_31935__$1,format_in__30985__auto__,cf__30986__auto__,arg_31939,_STAR_current_level_STAR__orig_val__31914_31928,_STAR_current_length_STAR__orig_val__31915_31929,_STAR_current_level_STAR__temp_val__31916_31930,_STAR_current_length_STAR__temp_val__31917_31931,vec__31908,start,end,vec__31911,seq__31912,first__31913,seq__31912__$1,keyw,args))
})().call(null);
} else {
}
}

var G__31966 = cljs.core.next.call(null,args_31935__$1);
args_31935__$1 = G__31966;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31915_31929);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31914_31928);
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__31967 = alis;
var seq__31968 = cljs.core.seq.call(null,vec__31967);
var first__31969 = cljs.core.first.call(null,seq__31968);
var seq__31968__$1 = cljs.core.next.call(null,seq__31968);
var ns_sym = first__31969;
var first__31969__$1 = cljs.core.first.call(null,seq__31968__$1);
var seq__31968__$2 = cljs.core.next.call(null,seq__31968__$1);
var ns_name = first__31969__$1;
var stuff = seq__31968__$2;
var vec__31970 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__31970,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__31970,(1),null);
var vec__31973 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__31973,(0),null);
var references = cljs.core.nth.call(null,vec__31973,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__31976_31980 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__31977_31981 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__31978_31982 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__31979_31983 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__31978_31982);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__31979_31983);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__30985__auto__ = "~w ~1I~@_~w";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31984__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31984 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31985__i = 0, G__31985__a = new Array(arguments.length -  0);
while (G__31985__i < G__31985__a.length) {G__31985__a[G__31985__i] = arguments[G__31985__i + 0]; ++G__31985__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31985__a,0,null);
} 
return G__31984__delegate.call(this,args__30987__auto__);};
G__31984.cljs$lang$maxFixedArity = 0;
G__31984.cljs$lang$applyTo = (function (arglist__31986){
var args__30987__auto__ = cljs.core.seq(arglist__31986);
return G__31984__delegate(args__30987__auto__);
});
G__31984.cljs$core$IFn$_invoke$arity$variadic = G__31984__delegate;
return G__31984;
})()
;
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__5045__auto__ = doc_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = attr_map;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__30985__auto__ = "~@:_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31987__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31987 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31988__i = 0, G__31988__a = new Array(arguments.length -  0);
while (G__31988__i < G__31988__a.length) {G__31988__a[G__31988__i] = arguments[G__31988__i + 0]; ++G__31988__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31988__a,0,null);
} 
return G__31987__delegate.call(this,args__30987__auto__);};
G__31987.cljs$lang$maxFixedArity = 0;
G__31987.cljs$lang$applyTo = (function (arglist__31989){
var args__30987__auto__ = cljs.core.seq(arglist__31989);
return G__31987__delegate(args__30987__auto__);
});
G__31987.cljs$core$IFn$_invoke$arity$variadic = G__31987__delegate;
return G__31987;
})()
;
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__5045__auto__ = attr_map;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__30985__auto__ = "~w~:[~;~:@_~]";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31990__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31990 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31991__i = 0, G__31991__a = new Array(arguments.length -  0);
while (G__31991__i < G__31991__a.length) {G__31991__a[G__31991__i] = arguments[G__31991__i + 0]; ++G__31991__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31991__a,0,null);
} 
return G__31990__delegate.call(this,args__30987__auto__);};
G__31990.cljs$lang$maxFixedArity = 0;
G__31990.cljs$lang$applyTo = (function (arglist__31992){
var args__30987__auto__ = cljs.core.seq(arglist__31992);
return G__31990__delegate(args__30987__auto__);
});
G__31990.cljs$core$IFn$_invoke$arity$variadic = G__31990__delegate;
return G__31990;
})()
;
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_31993__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_31993__$1));

var temp__5735__auto___31994 = cljs.core.next.call(null,references_31993__$1);
if(temp__5735__auto___31994){
var references_31995__$2 = temp__5735__auto___31994;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31996 = references_31995__$2;
references_31993__$1 = G__31996;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__31977_31981);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__31976_31980);
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__30985__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__31997__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__31997 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__31998__i = 0, G__31998__a = new Array(arguments.length -  0);
while (G__31998__i < G__31998__a.length) {G__31998__a[G__31998__i] = arguments[G__31998__i + 0]; ++G__31998__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__31998__a,0,null);
} 
return G__31997__delegate.call(this,args__30987__auto__);};
G__31997.cljs$lang$maxFixedArity = 0;
G__31997.cljs$lang$applyTo = (function (arglist__31999){
var args__30987__auto__ = cljs.core.seq(arglist__31999);
return G__31997__delegate(args__30987__auto__);
});
G__31997.cljs$core$IFn$_invoke$arity$variadic = G__31997__delegate;
return G__31997;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__30985__auto__ = " ~_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32000__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32000 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32001__i = 0, G__32001__a = new Array(arguments.length -  0);
while (G__32001__i < G__32001__a.length) {G__32001__a[G__32001__i] = arguments[G__32001__i + 0]; ++G__32001__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32001__a,0,null);
} 
return G__32000__delegate.call(this,args__30987__auto__);};
G__32000.cljs$lang$maxFixedArity = 0;
G__32000.cljs$lang$applyTo = (function (arglist__32002){
var args__30987__auto__ = cljs.core.seq(arglist__32002);
return G__32000__delegate(args__30987__auto__);
});
G__32000.cljs$core$IFn$_invoke$arity$variadic = G__32000__delegate;
return G__32000;
})()
;
})().call(null);
} else {
(function (){var format_in__30985__auto__ = " ~@_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32003__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32003 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32004__i = 0, G__32004__a = new Array(arguments.length -  0);
while (G__32004__i < G__32004__a.length) {G__32004__a[G__32004__i] = arguments[G__32004__i + 0]; ++G__32004__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32004__a,0,null);
} 
return G__32003__delegate.call(this,args__30987__auto__);};
G__32003.cljs$lang$maxFixedArity = 0;
G__32003.cljs$lang$applyTo = (function (arglist__32005){
var args__30987__auto__ = cljs.core.seq(arglist__32005);
return G__32003__delegate(args__30987__auto__);
});
G__32003.cljs$core$IFn$_invoke$arity$variadic = G__32003__delegate;
return G__32003;
})()
;
})().call(null);
}

return (function (){var format_in__30985__auto__ = "~{~w~^ ~_~}";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32006__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32006 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32007__i = 0, G__32007__a = new Array(arguments.length -  0);
while (G__32007__i < G__32007__a.length) {G__32007__a[G__32007__i] = arguments[G__32007__i + 0]; ++G__32007__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32007__a,0,null);
} 
return G__32006__delegate.call(this,args__30987__auto__);};
G__32006.cljs$lang$maxFixedArity = 0;
G__32006.cljs$lang$applyTo = (function (arglist__32008){
var args__30987__auto__ = cljs.core.seq(arglist__32008);
return G__32006__delegate(args__30987__auto__);
});
G__32006.cljs$core$IFn$_invoke$arity$variadic = G__32006__delegate;
return G__32006;
})()
;
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__30985__auto__ = " ~_~{~w~^ ~_~}";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32009__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32009 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32010__i = 0, G__32010__a = new Array(arguments.length -  0);
while (G__32010__i < G__32010__a.length) {G__32010__a[G__32010__i] = arguments[G__32010__i + 0]; ++G__32010__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32010__a,0,null);
} 
return G__32009__delegate.call(this,args__30987__auto__);};
G__32009.cljs$lang$maxFixedArity = 0;
G__32009.cljs$lang$applyTo = (function (arglist__32011){
var args__30987__auto__ = cljs.core.seq(arglist__32011);
return G__32009__delegate(args__30987__auto__);
});
G__32009.cljs$core$IFn$_invoke$arity$variadic = G__32009__delegate;
return G__32009;
})()
;
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__32012 = alis;
var seq__32013 = cljs.core.seq.call(null,vec__32012);
var first__32014 = cljs.core.first.call(null,seq__32013);
var seq__32013__$1 = cljs.core.next.call(null,seq__32013);
var defn_sym = first__32014;
var first__32014__$1 = cljs.core.first.call(null,seq__32013__$1);
var seq__32013__$2 = cljs.core.next.call(null,seq__32013__$1);
var defn_name = first__32014__$1;
var stuff = seq__32013__$2;
var vec__32015 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__32015,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__32015,(1),null);
var vec__32018 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__32018,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__32018,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32021_32025 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32022_32026 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32023_32027 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32024_32028 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32023_32027);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32024_32028);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__30985__auto__ = "~w ~1I~@_~w";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32029__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32029 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32030__i = 0, G__32030__a = new Array(arguments.length -  0);
while (G__32030__i < G__32030__a.length) {G__32030__a[G__32030__i] = arguments[G__32030__i + 0]; ++G__32030__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32030__a,0,null);
} 
return G__32029__delegate.call(this,args__30987__auto__);};
G__32029.cljs$lang$maxFixedArity = 0;
G__32029.cljs$lang$applyTo = (function (arglist__32031){
var args__30987__auto__ = cljs.core.seq(arglist__32031);
return G__32029__delegate(args__30987__auto__);
});
G__32029.cljs$core$IFn$_invoke$arity$variadic = G__32029__delegate;
return G__32029;
})()
;
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__30985__auto__ = " ~_~w";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32032__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32032 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32033__i = 0, G__32033__a = new Array(arguments.length -  0);
while (G__32033__i < G__32033__a.length) {G__32033__a[G__32033__i] = arguments[G__32033__i + 0]; ++G__32033__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32033__a,0,null);
} 
return G__32032__delegate.call(this,args__30987__auto__);};
G__32032.cljs$lang$maxFixedArity = 0;
G__32032.cljs$lang$applyTo = (function (arglist__32034){
var args__30987__auto__ = cljs.core.seq(arglist__32034);
return G__32032__delegate(args__30987__auto__);
});
G__32032.cljs$core$IFn$_invoke$arity$variadic = G__32032__delegate;
return G__32032;
})()
;
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__30985__auto__ = " ~_~w";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32035__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32035 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32036__i = 0, G__32036__a = new Array(arguments.length -  0);
while (G__32036__i < G__32036__a.length) {G__32036__a[G__32036__i] = arguments[G__32036__i + 0]; ++G__32036__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32036__a,0,null);
} 
return G__32035__delegate.call(this,args__30987__auto__);};
G__32035.cljs$lang$maxFixedArity = 0;
G__32035.cljs$lang$applyTo = (function (arglist__32037){
var args__30987__auto__ = cljs.core.seq(arglist__32037);
return G__32035__delegate(args__30987__auto__);
});
G__32035.cljs$core$IFn$_invoke$arity$variadic = G__32035__delegate;
return G__32035;
})()
;
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__5045__auto__ = doc_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__5045__auto__ = doc_str;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32022_32026);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32021_32025);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32038_32047 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32039_32048 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32040_32049 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32041_32050 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32040_32049);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32041_32050);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count32042_32051 = (0);
var binding_32052 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count32042_32051 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_32052)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32043_32053 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32044_32054 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32045_32055 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32046_32056 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32045_32055);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32046_32056);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_32052));

if(cljs.core.next.call(null,binding_32052)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_32052));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32044_32054);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32043_32053);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_32052))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32057 = (length_count32042_32051 + (1));
var G__32058 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_32052));
length_count32042_32051 = G__32057;
binding_32052 = G__32058;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32039_32048);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32038_32047);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32059_32063 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32060_32064 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32061_32065 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32062_32066 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32061_32065);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32062_32066);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__30985__auto__ = "~w ~1I~@_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32067__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32067 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32068__i = 0, G__32068__a = new Array(arguments.length -  0);
while (G__32068__i < G__32068__a.length) {G__32068__a[G__32068__i] = arguments[G__32068__i + 0]; ++G__32068__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32068__a,0,null);
} 
return G__32067__delegate.call(this,args__30987__auto__);};
G__32067.cljs$lang$maxFixedArity = 0;
G__32067.cljs$lang$applyTo = (function (arglist__32069){
var args__30987__auto__ = cljs.core.seq(arglist__32069);
return G__32067__delegate(args__30987__auto__);
});
G__32067.cljs$core$IFn$_invoke$arity$variadic = G__32067__delegate;
return G__32067;
})()
;
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__30985__auto__ = " ~_~{~w~^ ~_~}";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32070__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32070 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32071__i = 0, G__32071__a = new Array(arguments.length -  0);
while (G__32071__i < G__32071__a.length) {G__32071__a[G__32071__i] = arguments[G__32071__i + 0]; ++G__32071__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32071__a,0,null);
} 
return G__32070__delegate.call(this,args__30987__auto__);};
G__32070.cljs$lang$maxFixedArity = 0;
G__32070.cljs$lang$applyTo = (function (arglist__32072){
var args__30987__auto__ = cljs.core.seq(arglist__32072);
return G__32070__delegate(args__30987__auto__);
});
G__32070.cljs$core$IFn$_invoke$arity$variadic = G__32070__delegate;
return G__32070;
})()
;
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32060_32064);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32059_32063);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__30985__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32073__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32073 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32074__i = 0, G__32074__a = new Array(arguments.length -  0);
while (G__32074__i < G__32074__a.length) {G__32074__a[G__32074__i] = arguments[G__32074__i + 0]; ++G__32074__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32074__a,0,null);
} 
return G__32073__delegate.call(this,args__30987__auto__);};
G__32073.cljs$lang$maxFixedArity = 0;
G__32073.cljs$lang$applyTo = (function (arglist__32075){
var args__30987__auto__ = cljs.core.seq(arglist__32075);
return G__32073__delegate(args__30987__auto__);
});
G__32073.cljs$core$IFn$_invoke$arity$variadic = G__32073__delegate;
return G__32073;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32076_32085 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32077_32086 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32078_32087 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32079_32088 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32078_32087);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32079_32088);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count32080_32089 = (0);
var alis_32090__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count32080_32089 < cljs.core._STAR_print_length_STAR_)))){
if(alis_32090__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32081_32091 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32082_32092 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32083_32093 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32084_32094 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32083_32093);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32084_32094);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_32090__$1));

if(cljs.core.next.call(null,alis_32090__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_32090__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32082_32092);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32081_32091);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_32090__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32095 = (length_count32080_32089 + (1));
var G__32096 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_32090__$1));
length_count32080_32089 = G__32095;
alis_32090__$1 = G__32096;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32077_32086);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32076_32085);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32097_32106 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32098_32107 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32099_32108 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32100_32109 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32099_32108);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32100_32109);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__30985__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32110__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32110 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32111__i = 0, G__32111__a = new Array(arguments.length -  0);
while (G__32111__i < G__32111__a.length) {G__32111__a[G__32111__i] = arguments[G__32111__i + 0]; ++G__32111__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32111__a,0,null);
} 
return G__32110__delegate.call(this,args__30987__auto__);};
G__32110.cljs$lang$maxFixedArity = 0;
G__32110.cljs$lang$applyTo = (function (arglist__32112){
var args__30987__auto__ = cljs.core.seq(arglist__32112);
return G__32110__delegate(args__30987__auto__);
});
G__32110.cljs$core$IFn$_invoke$arity$variadic = G__32110__delegate;
return G__32110;
})()
;
})(),alis);

var length_count32101_32113 = (0);
var alis_32114__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count32101_32113 < cljs.core._STAR_print_length_STAR_)))){
if(alis_32114__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32102_32115 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32103_32116 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32104_32117 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32105_32118 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32104_32117);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32105_32118);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_32114__$1));

if(cljs.core.next.call(null,alis_32114__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_32114__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32103_32116);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32102_32115);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_32114__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32119 = (length_count32101_32113 + (1));
var G__32120 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_32114__$1));
length_count32101_32113 = G__32119;
alis_32114__$1 = G__32120;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32098_32107);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32097_32106);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR__orig_val__32123 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__32124 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__32121_SHARP_,p2__32122_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__32121_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32122_SHARP_)].join('')],null));
}),args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__32124);

try{return (function (){var format_in__30985__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__30986__auto__ = ((typeof format_in__30985__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__30985__auto__):format_in__30985__auto__);
return (function() { 
var G__32125__delegate = function (args__30987__auto__){
var navigator__30988__auto__ = cljs.pprint.init_navigator.call(null,args__30987__auto__);
return cljs.pprint.execute_format.call(null,cf__30986__auto__,navigator__30988__auto__);
};
var G__32125 = function (var_args){
var args__30987__auto__ = null;
if (arguments.length > 0) {
var G__32126__i = 0, G__32126__a = new Array(arguments.length -  0);
while (G__32126__i < G__32126__a.length) {G__32126__a[G__32126__i] = arguments[G__32126__i + 0]; ++G__32126__i;}
  args__30987__auto__ = new cljs.core.IndexedSeq(G__32126__a,0,null);
} 
return G__32125__delegate.call(this,args__30987__auto__);};
G__32125.cljs$lang$maxFixedArity = 0;
G__32125.cljs$lang$applyTo = (function (arglist__32127){
var args__30987__auto__ = cljs.core.seq(arglist__32127);
return G__32125__delegate(args__30987__auto__);
});
G__32125.cljs$core$IFn$_invoke$arity$variadic = G__32125__delegate;
return G__32125;
})()
;
})().call(null,nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__32123);
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__32128_32133 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__32129_32134 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__32130_32135 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__32131_32136 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__32130_32135);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__32131_32136);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count32132_32137 = (0);
var alis_32138__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count32132_32137 < cljs.core._STAR_print_length_STAR_)))){
if(alis_32138__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_32138__$1));

if(cljs.core.next.call(null,alis_32138__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__32139 = (length_count32132_32137 + (1));
var G__32140 = cljs.core.next.call(null,alis_32138__$1);
length_count32132_32137 = G__32139;
alis_32138__$1 = G__32140;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__32129_32134);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__32128_32133);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__5522__auto__ = (function cljs$pprint$two_forms_$_iter__32141(s__32142){
return (new cljs.core.LazySeq(null,(function (){
var s__32142__$1 = s__32142;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__32142__$1);
if(temp__5735__auto__){
var s__32142__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32142__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__32142__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__32144 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__32143 = (0);
while(true){
if((i__32143 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__32143);
cljs.core.chunk_append.call(null,b__32144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__32145 = (i__32143 + (1));
i__32143 = G__32145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32144),cljs$pprint$two_forms_$_iter__32141.call(null,cljs.core.chunk_rest.call(null,s__32142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32144),null);
}
} else {
var x = cljs.core.first.call(null,s__32142__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__32141.call(null,cljs.core.rest.call(null,s__32142__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__32146_SHARP_){
var vec__32147 = p1__32146_SHARP_;
var s = cljs.core.nth.call(null,vec__32147,(0),null);
var f = cljs.core.nth.call(null,vec__32147,(1),null);
if(cljs.core.not.call(null,(function (){var or__5045__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__32146_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5733__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5733__auto__)){
var special_form = temp__5733__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5733__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5733__auto__)){
var arg_num = temp__5733__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (width - cljs.core.count.call(null,s));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__32154 = arguments.length;
switch (G__32154) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
return cljs.core.apply.call(null,cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.call(null,(function (p1__32150_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__32150_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,(function (p1__32151_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__32151_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__5522__auto__ = (function cljs$pprint$iter__32165(s__32166){
return (new cljs.core.LazySeq(null,(function (){
var s__32166__$1 = s__32166;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__32166__$1);
if(temp__5735__auto__){
var s__32166__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32166__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__32166__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__32168 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__32167 = (0);
while(true){
if((i__32167 < size__5521__auto__)){
var vec__32169 = cljs.core._nth.call(null,c__5520__auto__,i__32167);
var col = cljs.core.nth.call(null,vec__32169,(0),null);
var width = cljs.core.nth.call(null,vec__32169,(1),null);
cljs.core.chunk_append.call(null,b__32168,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__32180 = (i__32167 + (1));
i__32167 = G__32180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),cljs$pprint$iter__32165.call(null,cljs.core.chunk_rest.call(null,s__32166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),null);
}
} else {
var vec__32172 = cljs.core.first.call(null,s__32166__$2);
var col = cljs.core.nth.call(null,vec__32172,(0),null);
var width = cljs.core.nth.call(null,vec__32172,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__32165.call(null,cljs.core.rest.call(null,s__32166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__32152_SHARP_){
return cljs.core.get.call(null,row,p1__32152_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__32175 = cljs.core.seq.call(null,rows);
var chunk__32176 = null;
var count__32177 = (0);
var i__32178 = (0);
while(true){
if((i__32178 < count__32177)){
var row = cljs.core._nth.call(null,chunk__32176,i__32178);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__32181 = seq__32175;
var G__32182 = chunk__32176;
var G__32183 = count__32177;
var G__32184 = (i__32178 + (1));
seq__32175 = G__32181;
chunk__32176 = G__32182;
count__32177 = G__32183;
i__32178 = G__32184;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32175);
if(temp__5735__auto__){
var seq__32175__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32175__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32175__$1);
var G__32185 = cljs.core.chunk_rest.call(null,seq__32175__$1);
var G__32186 = c__5567__auto__;
var G__32187 = cljs.core.count.call(null,c__5567__auto__);
var G__32188 = (0);
seq__32175 = G__32185;
chunk__32176 = G__32186;
count__32177 = G__32187;
i__32178 = G__32188;
continue;
} else {
var row = cljs.core.first.call(null,seq__32175__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__32189 = cljs.core.next.call(null,seq__32175__$1);
var G__32190 = null;
var G__32191 = (0);
var G__32192 = (0);
seq__32175 = G__32189;
chunk__32176 = G__32190;
count__32177 = G__32191;
i__32178 = G__32192;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=pprint.js.map?rel=1655379919561
