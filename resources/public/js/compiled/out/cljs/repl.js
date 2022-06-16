// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32798){
var map__32799 = p__32798;
var map__32799__$1 = cljs.core.__destructure_map.call(null,map__32799);
var m = map__32799__$1;
var n = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32800_32828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32801_32829 = null;
var count__32802_32830 = (0);
var i__32803_32831 = (0);
while(true){
if((i__32803_32831 < count__32802_32830)){
var f_32832 = cljs.core._nth.call(null,chunk__32801_32829,i__32803_32831);
cljs.core.println.call(null,"  ",f_32832);


var G__32833 = seq__32800_32828;
var G__32834 = chunk__32801_32829;
var G__32835 = count__32802_32830;
var G__32836 = (i__32803_32831 + (1));
seq__32800_32828 = G__32833;
chunk__32801_32829 = G__32834;
count__32802_32830 = G__32835;
i__32803_32831 = G__32836;
continue;
} else {
var temp__5735__auto___32837 = cljs.core.seq.call(null,seq__32800_32828);
if(temp__5735__auto___32837){
var seq__32800_32838__$1 = temp__5735__auto___32837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32800_32838__$1)){
var c__5567__auto___32839 = cljs.core.chunk_first.call(null,seq__32800_32838__$1);
var G__32840 = cljs.core.chunk_rest.call(null,seq__32800_32838__$1);
var G__32841 = c__5567__auto___32839;
var G__32842 = cljs.core.count.call(null,c__5567__auto___32839);
var G__32843 = (0);
seq__32800_32828 = G__32840;
chunk__32801_32829 = G__32841;
count__32802_32830 = G__32842;
i__32803_32831 = G__32843;
continue;
} else {
var f_32844 = cljs.core.first.call(null,seq__32800_32838__$1);
cljs.core.println.call(null,"  ",f_32844);


var G__32845 = cljs.core.next.call(null,seq__32800_32838__$1);
var G__32846 = null;
var G__32847 = (0);
var G__32848 = (0);
seq__32800_32828 = G__32845;
chunk__32801_32829 = G__32846;
count__32802_32830 = G__32847;
i__32803_32831 = G__32848;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32849 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32849);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32849)))?cljs.core.second.call(null,arglists_32849):arglists_32849));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32804_32850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32805_32851 = null;
var count__32806_32852 = (0);
var i__32807_32853 = (0);
while(true){
if((i__32807_32853 < count__32806_32852)){
var vec__32816_32854 = cljs.core._nth.call(null,chunk__32805_32851,i__32807_32853);
var name_32855 = cljs.core.nth.call(null,vec__32816_32854,(0),null);
var map__32819_32856 = cljs.core.nth.call(null,vec__32816_32854,(1),null);
var map__32819_32857__$1 = cljs.core.__destructure_map.call(null,map__32819_32856);
var doc_32858 = cljs.core.get.call(null,map__32819_32857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32859 = cljs.core.get.call(null,map__32819_32857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32855);

cljs.core.println.call(null," ",arglists_32859);

if(cljs.core.truth_(doc_32858)){
cljs.core.println.call(null," ",doc_32858);
} else {
}


var G__32860 = seq__32804_32850;
var G__32861 = chunk__32805_32851;
var G__32862 = count__32806_32852;
var G__32863 = (i__32807_32853 + (1));
seq__32804_32850 = G__32860;
chunk__32805_32851 = G__32861;
count__32806_32852 = G__32862;
i__32807_32853 = G__32863;
continue;
} else {
var temp__5735__auto___32864 = cljs.core.seq.call(null,seq__32804_32850);
if(temp__5735__auto___32864){
var seq__32804_32865__$1 = temp__5735__auto___32864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32804_32865__$1)){
var c__5567__auto___32866 = cljs.core.chunk_first.call(null,seq__32804_32865__$1);
var G__32867 = cljs.core.chunk_rest.call(null,seq__32804_32865__$1);
var G__32868 = c__5567__auto___32866;
var G__32869 = cljs.core.count.call(null,c__5567__auto___32866);
var G__32870 = (0);
seq__32804_32850 = G__32867;
chunk__32805_32851 = G__32868;
count__32806_32852 = G__32869;
i__32807_32853 = G__32870;
continue;
} else {
var vec__32820_32871 = cljs.core.first.call(null,seq__32804_32865__$1);
var name_32872 = cljs.core.nth.call(null,vec__32820_32871,(0),null);
var map__32823_32873 = cljs.core.nth.call(null,vec__32820_32871,(1),null);
var map__32823_32874__$1 = cljs.core.__destructure_map.call(null,map__32823_32873);
var doc_32875 = cljs.core.get.call(null,map__32823_32874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32876 = cljs.core.get.call(null,map__32823_32874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32872);

cljs.core.println.call(null," ",arglists_32876);

if(cljs.core.truth_(doc_32875)){
cljs.core.println.call(null," ",doc_32875);
} else {
}


var G__32877 = cljs.core.next.call(null,seq__32804_32865__$1);
var G__32878 = null;
var G__32879 = (0);
var G__32880 = (0);
seq__32804_32850 = G__32877;
chunk__32805_32851 = G__32878;
count__32806_32852 = G__32879;
i__32807_32853 = G__32880;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__32824 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32825 = null;
var count__32826 = (0);
var i__32827 = (0);
while(true){
if((i__32827 < count__32826)){
var role = cljs.core._nth.call(null,chunk__32825,i__32827);
var temp__5735__auto___32881__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32881__$1)){
var spec_32882 = temp__5735__auto___32881__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32882));
} else {
}


var G__32883 = seq__32824;
var G__32884 = chunk__32825;
var G__32885 = count__32826;
var G__32886 = (i__32827 + (1));
seq__32824 = G__32883;
chunk__32825 = G__32884;
count__32826 = G__32885;
i__32827 = G__32886;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__32824);
if(temp__5735__auto____$1){
var seq__32824__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32824__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32824__$1);
var G__32887 = cljs.core.chunk_rest.call(null,seq__32824__$1);
var G__32888 = c__5567__auto__;
var G__32889 = cljs.core.count.call(null,c__5567__auto__);
var G__32890 = (0);
seq__32824 = G__32887;
chunk__32825 = G__32888;
count__32826 = G__32889;
i__32827 = G__32890;
continue;
} else {
var role = cljs.core.first.call(null,seq__32824__$1);
var temp__5735__auto___32891__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32891__$2)){
var spec_32892 = temp__5735__auto___32891__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32892));
} else {
}


var G__32893 = cljs.core.next.call(null,seq__32824__$1);
var G__32894 = null;
var G__32895 = (0);
var G__32896 = (0);
seq__32824 = G__32893;
chunk__32825 = G__32894;
count__32826 = G__32895;
i__32827 = G__32896;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32897 = cljs.core.conj.call(null,via,t);
var G__32898 = cljs.core.ex_cause.call(null,t);
via = G__32897;
t = G__32898;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32901 = datafied_throwable;
var map__32901__$1 = cljs.core.__destructure_map.call(null,map__32901);
var via = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32902 = cljs.core.last.call(null,via);
var map__32902__$1 = cljs.core.__destructure_map.call(null,map__32902);
var type = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32903 = data;
var map__32903__$1 = cljs.core.__destructure_map.call(null,map__32903);
var problems = cljs.core.get.call(null,map__32903__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32903__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32903__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32904 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32904__$1 = cljs.core.__destructure_map.call(null,map__32904);
var top_data = map__32904__$1;
var source = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32905 = phase;
var G__32905__$1 = (((G__32905 instanceof cljs.core.Keyword))?G__32905.fqn:null);
switch (G__32905__$1) {
case "read-source":
var map__32906 = data;
var map__32906__$1 = cljs.core.__destructure_map.call(null,map__32906);
var line = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32906__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32907 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32907__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32907,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32907);
var G__32907__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32907__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32907__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32907__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32908 = top_data;
var G__32908__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32908,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32908);
var G__32908__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32908__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32908__$1);
var G__32908__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32908__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32908__$2);
var G__32908__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32908__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32908__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32908__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32908__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32909 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32909,(0),null);
var method = cljs.core.nth.call(null,vec__32909,(1),null);
var file = cljs.core.nth.call(null,vec__32909,(2),null);
var line = cljs.core.nth.call(null,vec__32909,(3),null);
var G__32912 = top_data;
var G__32912__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32912,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32912);
var G__32912__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32912__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32912__$1);
var G__32912__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__32912__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32912__$2);
var G__32912__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32912__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32912__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32912__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32912__$4;
}

break;
case "execution":
var vec__32913 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32913,(0),null);
var method = cljs.core.nth.call(null,vec__32913,(1),null);
var file = cljs.core.nth.call(null,vec__32913,(2),null);
var line = cljs.core.nth.call(null,vec__32913,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32900_SHARP_){
var or__5045__auto__ = (p1__32900_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32900_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__32916 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32916__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32916,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32916);
var G__32916__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32916__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32916__$1);
var G__32916__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32916__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32916__$2);
var G__32916__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32916__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32916__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32916__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32916__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32905__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32920){
var map__32921 = p__32920;
var map__32921__$1 = cljs.core.__destructure_map.call(null,map__32921);
var triage_data = map__32921__$1;
var phase = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32921__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32922 = phase;
var G__32922__$1 = (((G__32922 instanceof cljs.core.Keyword))?G__32922.fqn:null);
switch (G__32922__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32923_32932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32924_32933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32925_32934 = true;
var _STAR_print_fn_STAR__temp_val__32926_32935 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32925_32934);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32926_32935);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32918_SHARP_){
return cljs.core.dissoc.call(null,p1__32918_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32924_32933);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32923_32932);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32927_32936 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32928_32937 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32929_32938 = true;
var _STAR_print_fn_STAR__temp_val__32930_32939 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32929_32938);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32930_32939);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32919_SHARP_){
return cljs.core.dissoc.call(null,p1__32919_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32928_32937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32927_32936);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32922__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1655292230803
