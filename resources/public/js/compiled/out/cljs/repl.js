// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33804){
var map__33805 = p__33804;
var map__33805__$1 = cljs.core.__destructure_map.call(null,map__33805);
var m = map__33805__$1;
var n = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33806_33834 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33807_33835 = null;
var count__33808_33836 = (0);
var i__33809_33837 = (0);
while(true){
if((i__33809_33837 < count__33808_33836)){
var f_33838 = cljs.core._nth.call(null,chunk__33807_33835,i__33809_33837);
cljs.core.println.call(null,"  ",f_33838);


var G__33839 = seq__33806_33834;
var G__33840 = chunk__33807_33835;
var G__33841 = count__33808_33836;
var G__33842 = (i__33809_33837 + (1));
seq__33806_33834 = G__33839;
chunk__33807_33835 = G__33840;
count__33808_33836 = G__33841;
i__33809_33837 = G__33842;
continue;
} else {
var temp__5735__auto___33843 = cljs.core.seq.call(null,seq__33806_33834);
if(temp__5735__auto___33843){
var seq__33806_33844__$1 = temp__5735__auto___33843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33806_33844__$1)){
var c__5567__auto___33845 = cljs.core.chunk_first.call(null,seq__33806_33844__$1);
var G__33846 = cljs.core.chunk_rest.call(null,seq__33806_33844__$1);
var G__33847 = c__5567__auto___33845;
var G__33848 = cljs.core.count.call(null,c__5567__auto___33845);
var G__33849 = (0);
seq__33806_33834 = G__33846;
chunk__33807_33835 = G__33847;
count__33808_33836 = G__33848;
i__33809_33837 = G__33849;
continue;
} else {
var f_33850 = cljs.core.first.call(null,seq__33806_33844__$1);
cljs.core.println.call(null,"  ",f_33850);


var G__33851 = cljs.core.next.call(null,seq__33806_33844__$1);
var G__33852 = null;
var G__33853 = (0);
var G__33854 = (0);
seq__33806_33834 = G__33851;
chunk__33807_33835 = G__33852;
count__33808_33836 = G__33853;
i__33809_33837 = G__33854;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33855 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33855);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33855)))?cljs.core.second.call(null,arglists_33855):arglists_33855));
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
var seq__33810_33856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33811_33857 = null;
var count__33812_33858 = (0);
var i__33813_33859 = (0);
while(true){
if((i__33813_33859 < count__33812_33858)){
var vec__33822_33860 = cljs.core._nth.call(null,chunk__33811_33857,i__33813_33859);
var name_33861 = cljs.core.nth.call(null,vec__33822_33860,(0),null);
var map__33825_33862 = cljs.core.nth.call(null,vec__33822_33860,(1),null);
var map__33825_33863__$1 = cljs.core.__destructure_map.call(null,map__33825_33862);
var doc_33864 = cljs.core.get.call(null,map__33825_33863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33865 = cljs.core.get.call(null,map__33825_33863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33861);

cljs.core.println.call(null," ",arglists_33865);

if(cljs.core.truth_(doc_33864)){
cljs.core.println.call(null," ",doc_33864);
} else {
}


var G__33866 = seq__33810_33856;
var G__33867 = chunk__33811_33857;
var G__33868 = count__33812_33858;
var G__33869 = (i__33813_33859 + (1));
seq__33810_33856 = G__33866;
chunk__33811_33857 = G__33867;
count__33812_33858 = G__33868;
i__33813_33859 = G__33869;
continue;
} else {
var temp__5735__auto___33870 = cljs.core.seq.call(null,seq__33810_33856);
if(temp__5735__auto___33870){
var seq__33810_33871__$1 = temp__5735__auto___33870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33810_33871__$1)){
var c__5567__auto___33872 = cljs.core.chunk_first.call(null,seq__33810_33871__$1);
var G__33873 = cljs.core.chunk_rest.call(null,seq__33810_33871__$1);
var G__33874 = c__5567__auto___33872;
var G__33875 = cljs.core.count.call(null,c__5567__auto___33872);
var G__33876 = (0);
seq__33810_33856 = G__33873;
chunk__33811_33857 = G__33874;
count__33812_33858 = G__33875;
i__33813_33859 = G__33876;
continue;
} else {
var vec__33826_33877 = cljs.core.first.call(null,seq__33810_33871__$1);
var name_33878 = cljs.core.nth.call(null,vec__33826_33877,(0),null);
var map__33829_33879 = cljs.core.nth.call(null,vec__33826_33877,(1),null);
var map__33829_33880__$1 = cljs.core.__destructure_map.call(null,map__33829_33879);
var doc_33881 = cljs.core.get.call(null,map__33829_33880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33882 = cljs.core.get.call(null,map__33829_33880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33878);

cljs.core.println.call(null," ",arglists_33882);

if(cljs.core.truth_(doc_33881)){
cljs.core.println.call(null," ",doc_33881);
} else {
}


var G__33883 = cljs.core.next.call(null,seq__33810_33871__$1);
var G__33884 = null;
var G__33885 = (0);
var G__33886 = (0);
seq__33810_33856 = G__33883;
chunk__33811_33857 = G__33884;
count__33812_33858 = G__33885;
i__33813_33859 = G__33886;
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

var seq__33830 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33831 = null;
var count__33832 = (0);
var i__33833 = (0);
while(true){
if((i__33833 < count__33832)){
var role = cljs.core._nth.call(null,chunk__33831,i__33833);
var temp__5735__auto___33887__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33887__$1)){
var spec_33888 = temp__5735__auto___33887__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33888));
} else {
}


var G__33889 = seq__33830;
var G__33890 = chunk__33831;
var G__33891 = count__33832;
var G__33892 = (i__33833 + (1));
seq__33830 = G__33889;
chunk__33831 = G__33890;
count__33832 = G__33891;
i__33833 = G__33892;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__33830);
if(temp__5735__auto____$1){
var seq__33830__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33830__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__33830__$1);
var G__33893 = cljs.core.chunk_rest.call(null,seq__33830__$1);
var G__33894 = c__5567__auto__;
var G__33895 = cljs.core.count.call(null,c__5567__auto__);
var G__33896 = (0);
seq__33830 = G__33893;
chunk__33831 = G__33894;
count__33832 = G__33895;
i__33833 = G__33896;
continue;
} else {
var role = cljs.core.first.call(null,seq__33830__$1);
var temp__5735__auto___33897__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___33897__$2)){
var spec_33898 = temp__5735__auto___33897__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33898));
} else {
}


var G__33899 = cljs.core.next.call(null,seq__33830__$1);
var G__33900 = null;
var G__33901 = (0);
var G__33902 = (0);
seq__33830 = G__33899;
chunk__33831 = G__33900;
count__33832 = G__33901;
i__33833 = G__33902;
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
var G__33903 = cljs.core.conj.call(null,via,t);
var G__33904 = cljs.core.ex_cause.call(null,t);
via = G__33903;
t = G__33904;
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
var map__33907 = datafied_throwable;
var map__33907__$1 = cljs.core.__destructure_map.call(null,map__33907);
var via = cljs.core.get.call(null,map__33907__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33907__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33907__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33908 = cljs.core.last.call(null,via);
var map__33908__$1 = cljs.core.__destructure_map.call(null,map__33908);
var type = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33909 = data;
var map__33909__$1 = cljs.core.__destructure_map.call(null,map__33909);
var problems = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33909__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33910 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33910__$1 = cljs.core.__destructure_map.call(null,map__33910);
var top_data = map__33910__$1;
var source = cljs.core.get.call(null,map__33910__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33911 = phase;
var G__33911__$1 = (((G__33911 instanceof cljs.core.Keyword))?G__33911.fqn:null);
switch (G__33911__$1) {
case "read-source":
var map__33912 = data;
var map__33912__$1 = cljs.core.__destructure_map.call(null,map__33912);
var line = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33913 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33913__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33913,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33913);
var G__33913__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33913__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33913__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33913__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33913__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33914 = top_data;
var G__33914__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33914,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33914);
var G__33914__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33914__$1);
var G__33914__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33914__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33914__$2);
var G__33914__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33914__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33914__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33914__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33914__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33915 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33915,(0),null);
var method = cljs.core.nth.call(null,vec__33915,(1),null);
var file = cljs.core.nth.call(null,vec__33915,(2),null);
var line = cljs.core.nth.call(null,vec__33915,(3),null);
var G__33918 = top_data;
var G__33918__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33918,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33918);
var G__33918__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33918__$1);
var G__33918__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__33918__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33918__$2);
var G__33918__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33918__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33918__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33918__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33918__$4;
}

break;
case "execution":
var vec__33919 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33919,(0),null);
var method = cljs.core.nth.call(null,vec__33919,(1),null);
var file = cljs.core.nth.call(null,vec__33919,(2),null);
var line = cljs.core.nth.call(null,vec__33919,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__33906_SHARP_){
var or__5045__auto__ = (p1__33906_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33906_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__33922 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33922__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33922,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33922);
var G__33922__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33922__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33922__$1);
var G__33922__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__33922__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33922__$2);
var G__33922__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33922__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33922__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33922__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33922__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33911__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33926){
var map__33927 = p__33926;
var map__33927__$1 = cljs.core.__destructure_map.call(null,map__33927);
var triage_data = map__33927__$1;
var phase = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__33928 = phase;
var G__33928__$1 = (((G__33928 instanceof cljs.core.Keyword))?G__33928.fqn:null);
switch (G__33928__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5689__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33929_33938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33930_33939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33931_33940 = true;
var _STAR_print_fn_STAR__temp_val__33932_33941 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33931_33940);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33932_33941);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33924_SHARP_){
return cljs.core.dissoc.call(null,p1__33924_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33930_33939);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33929_33938);
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
var _STAR_print_newline_STAR__orig_val__33933_33942 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33934_33943 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33935_33944 = true;
var _STAR_print_fn_STAR__temp_val__33936_33945 = (function (x__5690__auto__){
return sb__5689__auto__.append(x__5690__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33935_33944);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33936_33945);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__33925_SHARP_){
return cljs.core.dissoc.call(null,p1__33925_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33934_33943);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33933_33942);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5689__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33928__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1655379921691
