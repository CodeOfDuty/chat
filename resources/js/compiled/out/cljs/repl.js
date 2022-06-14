// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32791){
var map__32792 = p__32791;
var map__32792__$1 = cljs.core.__destructure_map.call(null,map__32792);
var m = map__32792__$1;
var n = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32793_32821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32794_32822 = null;
var count__32795_32823 = (0);
var i__32796_32824 = (0);
while(true){
if((i__32796_32824 < count__32795_32823)){
var f_32825 = cljs.core._nth.call(null,chunk__32794_32822,i__32796_32824);
cljs.core.println.call(null,"  ",f_32825);


var G__32826 = seq__32793_32821;
var G__32827 = chunk__32794_32822;
var G__32828 = count__32795_32823;
var G__32829 = (i__32796_32824 + (1));
seq__32793_32821 = G__32826;
chunk__32794_32822 = G__32827;
count__32795_32823 = G__32828;
i__32796_32824 = G__32829;
continue;
} else {
var temp__5735__auto___32830 = cljs.core.seq.call(null,seq__32793_32821);
if(temp__5735__auto___32830){
var seq__32793_32831__$1 = temp__5735__auto___32830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32793_32831__$1)){
var c__5567__auto___32832 = cljs.core.chunk_first.call(null,seq__32793_32831__$1);
var G__32833 = cljs.core.chunk_rest.call(null,seq__32793_32831__$1);
var G__32834 = c__5567__auto___32832;
var G__32835 = cljs.core.count.call(null,c__5567__auto___32832);
var G__32836 = (0);
seq__32793_32821 = G__32833;
chunk__32794_32822 = G__32834;
count__32795_32823 = G__32835;
i__32796_32824 = G__32836;
continue;
} else {
var f_32837 = cljs.core.first.call(null,seq__32793_32831__$1);
cljs.core.println.call(null,"  ",f_32837);


var G__32838 = cljs.core.next.call(null,seq__32793_32831__$1);
var G__32839 = null;
var G__32840 = (0);
var G__32841 = (0);
seq__32793_32821 = G__32838;
chunk__32794_32822 = G__32839;
count__32795_32823 = G__32840;
i__32796_32824 = G__32841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32842 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32842);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32842)))?cljs.core.second.call(null,arglists_32842):arglists_32842));
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
var seq__32797_32843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32798_32844 = null;
var count__32799_32845 = (0);
var i__32800_32846 = (0);
while(true){
if((i__32800_32846 < count__32799_32845)){
var vec__32809_32847 = cljs.core._nth.call(null,chunk__32798_32844,i__32800_32846);
var name_32848 = cljs.core.nth.call(null,vec__32809_32847,(0),null);
var map__32812_32849 = cljs.core.nth.call(null,vec__32809_32847,(1),null);
var map__32812_32850__$1 = cljs.core.__destructure_map.call(null,map__32812_32849);
var doc_32851 = cljs.core.get.call(null,map__32812_32850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32852 = cljs.core.get.call(null,map__32812_32850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32848);

cljs.core.println.call(null," ",arglists_32852);

if(cljs.core.truth_(doc_32851)){
cljs.core.println.call(null," ",doc_32851);
} else {
}


var G__32853 = seq__32797_32843;
var G__32854 = chunk__32798_32844;
var G__32855 = count__32799_32845;
var G__32856 = (i__32800_32846 + (1));
seq__32797_32843 = G__32853;
chunk__32798_32844 = G__32854;
count__32799_32845 = G__32855;
i__32800_32846 = G__32856;
continue;
} else {
var temp__5735__auto___32857 = cljs.core.seq.call(null,seq__32797_32843);
if(temp__5735__auto___32857){
var seq__32797_32858__$1 = temp__5735__auto___32857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32797_32858__$1)){
var c__5567__auto___32859 = cljs.core.chunk_first.call(null,seq__32797_32858__$1);
var G__32860 = cljs.core.chunk_rest.call(null,seq__32797_32858__$1);
var G__32861 = c__5567__auto___32859;
var G__32862 = cljs.core.count.call(null,c__5567__auto___32859);
var G__32863 = (0);
seq__32797_32843 = G__32860;
chunk__32798_32844 = G__32861;
count__32799_32845 = G__32862;
i__32800_32846 = G__32863;
continue;
} else {
var vec__32813_32864 = cljs.core.first.call(null,seq__32797_32858__$1);
var name_32865 = cljs.core.nth.call(null,vec__32813_32864,(0),null);
var map__32816_32866 = cljs.core.nth.call(null,vec__32813_32864,(1),null);
var map__32816_32867__$1 = cljs.core.__destructure_map.call(null,map__32816_32866);
var doc_32868 = cljs.core.get.call(null,map__32816_32867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32869 = cljs.core.get.call(null,map__32816_32867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32865);

cljs.core.println.call(null," ",arglists_32869);

if(cljs.core.truth_(doc_32868)){
cljs.core.println.call(null," ",doc_32868);
} else {
}


var G__32870 = cljs.core.next.call(null,seq__32797_32858__$1);
var G__32871 = null;
var G__32872 = (0);
var G__32873 = (0);
seq__32797_32843 = G__32870;
chunk__32798_32844 = G__32871;
count__32799_32845 = G__32872;
i__32800_32846 = G__32873;
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

var seq__32817 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32818 = null;
var count__32819 = (0);
var i__32820 = (0);
while(true){
if((i__32820 < count__32819)){
var role = cljs.core._nth.call(null,chunk__32818,i__32820);
var temp__5735__auto___32874__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32874__$1)){
var spec_32875 = temp__5735__auto___32874__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32875));
} else {
}


var G__32876 = seq__32817;
var G__32877 = chunk__32818;
var G__32878 = count__32819;
var G__32879 = (i__32820 + (1));
seq__32817 = G__32876;
chunk__32818 = G__32877;
count__32819 = G__32878;
i__32820 = G__32879;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__32817);
if(temp__5735__auto____$1){
var seq__32817__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32817__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__32817__$1);
var G__32880 = cljs.core.chunk_rest.call(null,seq__32817__$1);
var G__32881 = c__5567__auto__;
var G__32882 = cljs.core.count.call(null,c__5567__auto__);
var G__32883 = (0);
seq__32817 = G__32880;
chunk__32818 = G__32881;
count__32819 = G__32882;
i__32820 = G__32883;
continue;
} else {
var role = cljs.core.first.call(null,seq__32817__$1);
var temp__5735__auto___32884__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32884__$2)){
var spec_32885 = temp__5735__auto___32884__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32885));
} else {
}


var G__32886 = cljs.core.next.call(null,seq__32817__$1);
var G__32887 = null;
var G__32888 = (0);
var G__32889 = (0);
seq__32817 = G__32886;
chunk__32818 = G__32887;
count__32819 = G__32888;
i__32820 = G__32889;
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
var G__32890 = cljs.core.conj.call(null,via,t);
var G__32891 = cljs.core.ex_cause.call(null,t);
via = G__32890;
t = G__32891;
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
var map__32894 = datafied_throwable;
var map__32894__$1 = cljs.core.__destructure_map.call(null,map__32894);
var via = cljs.core.get.call(null,map__32894__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32894__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32894__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32895 = cljs.core.last.call(null,via);
var map__32895__$1 = cljs.core.__destructure_map.call(null,map__32895);
var type = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32896 = data;
var map__32896__$1 = cljs.core.__destructure_map.call(null,map__32896);
var problems = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32897 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32897__$1 = cljs.core.__destructure_map.call(null,map__32897);
var top_data = map__32897__$1;
var source = cljs.core.get.call(null,map__32897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32898 = phase;
var G__32898__$1 = (((G__32898 instanceof cljs.core.Keyword))?G__32898.fqn:null);
switch (G__32898__$1) {
case "read-source":
var map__32899 = data;
var map__32899__$1 = cljs.core.__destructure_map.call(null,map__32899);
var line = cljs.core.get.call(null,map__32899__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32899__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32900 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32900__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32900,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32900);
var G__32900__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32900__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32900__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32900__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32901 = top_data;
var G__32901__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32901,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32901);
var G__32901__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32901__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32901__$1);
var G__32901__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32901__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32901__$2);
var G__32901__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32901__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32901__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32901__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32901__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32902 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32902,(0),null);
var method = cljs.core.nth.call(null,vec__32902,(1),null);
var file = cljs.core.nth.call(null,vec__32902,(2),null);
var line = cljs.core.nth.call(null,vec__32902,(3),null);
var G__32905 = top_data;
var G__32905__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32905,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32905);
var G__32905__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32905__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32905__$1);
var G__32905__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__32905__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32905__$2);
var G__32905__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32905__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32905__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32905__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32905__$4;
}

break;
case "execution":
var vec__32906 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32906,(0),null);
var method = cljs.core.nth.call(null,vec__32906,(1),null);
var file = cljs.core.nth.call(null,vec__32906,(2),null);
var line = cljs.core.nth.call(null,vec__32906,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32893_SHARP_){
var or__5045__auto__ = (p1__32893_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32893_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__32909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32909__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32909);
var G__32909__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32909__$1);
var G__32909__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__32909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32909__$2);
var G__32909__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32909__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32909__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32909__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32909__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32898__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32913){
var map__32914 = p__32913;
var map__32914__$1 = cljs.core.__destructure_map.call(null,map__32914);
var triage_data = map__32914__$1;
var phase = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32914__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__32915 = phase;
var G__32915__$1 = (((G__32915 instanceof cljs.core.Keyword))?G__32915.fqn:null);
switch (G__32915__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32916_32925 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32917_32926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32918_32927 = true;
var _STAR_print_fn_STAR__temp_val__32919_32928 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32918_32927);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32919_32928);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32911_SHARP_){
return cljs.core.dissoc.call(null,p1__32911_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32917_32926);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32916_32925);
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
var _STAR_print_newline_STAR__orig_val__32920_32929 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32921_32930 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32922_32931 = true;
var _STAR_print_fn_STAR__temp_val__32923_32932 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32922_32931);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32923_32932);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32912_SHARP_){
return cljs.core.dissoc.call(null,p1__32912_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32921_32930);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32920_32929);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32915__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1655118090474
