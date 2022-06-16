// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33127){if((e33127 instanceof Error)){
var e = e33127;
return "Error: Unable to stringify";
} else {
throw e33127;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33130 = arguments.length;
switch (G__33130) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33128_SHARP_){
if(typeof p1__33128_SHARP_ === 'string'){
return p1__33128_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33128_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33133 = arguments.length;
var i__5769__auto___33134 = (0);
while(true){
if((i__5769__auto___33134 < len__5768__auto___33133)){
args__5774__auto__.push((arguments[i__5769__auto___33134]));

var G__33135 = (i__5769__auto___33134 + (1));
i__5769__auto___33134 = G__33135;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33132){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33132));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33137 = arguments.length;
var i__5769__auto___33138 = (0);
while(true){
if((i__5769__auto___33138 < len__5768__auto___33137)){
args__5774__auto__.push((arguments[i__5769__auto___33138]));

var G__33139 = (i__5769__auto___33138 + (1));
i__5769__auto___33138 = G__33139;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33136){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33136));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33140){
var map__33141 = p__33140;
var map__33141__$1 = cljs.core.__destructure_map.call(null,map__33141);
var message = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5045__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5043__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5043__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5043__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27420__auto___33220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_33191){
var state_val_33192 = (state_33191[(1)]);
if((state_val_33192 === (7))){
var inst_33187 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33193_33221 = state_33191__$1;
(statearr_33193_33221[(2)] = inst_33187);

(statearr_33193_33221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (1))){
var state_33191__$1 = state_33191;
var statearr_33194_33222 = state_33191__$1;
(statearr_33194_33222[(2)] = null);

(statearr_33194_33222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (4))){
var inst_33144 = (state_33191[(7)]);
var inst_33144__$1 = (state_33191[(2)]);
var state_33191__$1 = (function (){var statearr_33195 = state_33191;
(statearr_33195[(7)] = inst_33144__$1);

return statearr_33195;
})();
if(cljs.core.truth_(inst_33144__$1)){
var statearr_33196_33223 = state_33191__$1;
(statearr_33196_33223[(1)] = (5));

} else {
var statearr_33197_33224 = state_33191__$1;
(statearr_33197_33224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (15))){
var inst_33151 = (state_33191[(8)]);
var inst_33166 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33151);
var inst_33167 = cljs.core.first.call(null,inst_33166);
var inst_33168 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33167);
var inst_33169 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33168)].join('');
var inst_33170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33169);
var state_33191__$1 = state_33191;
var statearr_33198_33225 = state_33191__$1;
(statearr_33198_33225[(2)] = inst_33170);

(statearr_33198_33225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (13))){
var inst_33175 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33199_33226 = state_33191__$1;
(statearr_33199_33226[(2)] = inst_33175);

(statearr_33199_33226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (6))){
var state_33191__$1 = state_33191;
var statearr_33200_33227 = state_33191__$1;
(statearr_33200_33227[(2)] = null);

(statearr_33200_33227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (17))){
var inst_33173 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33201_33228 = state_33191__$1;
(statearr_33201_33228[(2)] = inst_33173);

(statearr_33201_33228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (3))){
var inst_33189 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33191__$1,inst_33189);
} else {
if((state_val_33192 === (12))){
var inst_33150 = (state_33191[(9)]);
var inst_33164 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33150,opts);
var state_33191__$1 = state_33191;
if(inst_33164){
var statearr_33202_33229 = state_33191__$1;
(statearr_33202_33229[(1)] = (15));

} else {
var statearr_33203_33230 = state_33191__$1;
(statearr_33203_33230[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (2))){
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(4),ch);
} else {
if((state_val_33192 === (11))){
var inst_33151 = (state_33191[(8)]);
var inst_33156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33157 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33151);
var inst_33158 = cljs.core.async.timeout.call(null,(1000));
var inst_33159 = [inst_33157,inst_33158];
var inst_33160 = (new cljs.core.PersistentVector(null,2,(5),inst_33156,inst_33159,null));
var state_33191__$1 = state_33191;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33191__$1,(14),inst_33160);
} else {
if((state_val_33192 === (9))){
var inst_33151 = (state_33191[(8)]);
var inst_33177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33178 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33151);
var inst_33179 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33178);
var inst_33180 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33179)].join('');
var inst_33181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33180);
var state_33191__$1 = (function (){var statearr_33204 = state_33191;
(statearr_33204[(10)] = inst_33177);

return statearr_33204;
})();
var statearr_33205_33231 = state_33191__$1;
(statearr_33205_33231[(2)] = inst_33181);

(statearr_33205_33231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (5))){
var inst_33144 = (state_33191[(7)]);
var inst_33146 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33147 = (new cljs.core.PersistentArrayMap(null,2,inst_33146,null));
var inst_33148 = (new cljs.core.PersistentHashSet(null,inst_33147,null));
var inst_33149 = figwheel.client.focus_msgs.call(null,inst_33148,inst_33144);
var inst_33150 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33149);
var inst_33151 = cljs.core.first.call(null,inst_33149);
var inst_33152 = figwheel.client.autoload_QMARK_.call(null);
var state_33191__$1 = (function (){var statearr_33206 = state_33191;
(statearr_33206[(9)] = inst_33150);

(statearr_33206[(8)] = inst_33151);

return statearr_33206;
})();
if(cljs.core.truth_(inst_33152)){
var statearr_33207_33232 = state_33191__$1;
(statearr_33207_33232[(1)] = (8));

} else {
var statearr_33208_33233 = state_33191__$1;
(statearr_33208_33233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (14))){
var inst_33162 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33209_33234 = state_33191__$1;
(statearr_33209_33234[(2)] = inst_33162);

(statearr_33209_33234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (16))){
var state_33191__$1 = state_33191;
var statearr_33210_33235 = state_33191__$1;
(statearr_33210_33235[(2)] = null);

(statearr_33210_33235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (10))){
var inst_33183 = (state_33191[(2)]);
var state_33191__$1 = (function (){var statearr_33211 = state_33191;
(statearr_33211[(11)] = inst_33183);

return statearr_33211;
})();
var statearr_33212_33236 = state_33191__$1;
(statearr_33212_33236[(2)] = null);

(statearr_33212_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (8))){
var inst_33150 = (state_33191[(9)]);
var inst_33154 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33150,opts);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33154)){
var statearr_33213_33237 = state_33191__$1;
(statearr_33213_33237[(1)] = (11));

} else {
var statearr_33214_33238 = state_33191__$1;
(statearr_33214_33238[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____0 = (function (){
var statearr_33215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33215[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__);

(statearr_33215[(1)] = (1));

return statearr_33215;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____1 = (function (state_33191){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_33191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e33216){var ex__27350__auto__ = e33216;
var statearr_33217_33239 = state_33191;
(statearr_33217_33239[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_33191[(4)]))){
var statearr_33218_33240 = state_33191;
(statearr_33218_33240[(1)] = cljs.core.first.call(null,(state_33191[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33241 = state_33191;
state_33191 = G__33241;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__ = function(state_33191){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____1.call(this,state_33191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27347__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_33219 = f__27421__auto__.call(null);
(statearr_33219[(6)] = c__27420__auto___33220);

return statearr_33219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33242_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33242_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33248 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33245 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33246 = true;
var _STAR_print_fn_STAR__temp_val__33247 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33246);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33247);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33244);
}}catch (e33243){if((e33243 instanceof Error)){
var e = e33243;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33248], null));
} else {
var e = e33243;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33249){
var map__33250 = p__33249;
var map__33250__$1 = cljs.core.__destructure_map.call(null,map__33250);
var opts = map__33250__$1;
var build_id = cljs.core.get.call(null,map__33250__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__33251){
var vec__33252 = p__33251;
var seq__33253 = cljs.core.seq.call(null,vec__33252);
var first__33254 = cljs.core.first.call(null,seq__33253);
var seq__33253__$1 = cljs.core.next.call(null,seq__33253);
var map__33255 = first__33254;
var map__33255__$1 = cljs.core.__destructure_map.call(null,map__33255);
var msg = map__33255__$1;
var msg_name = cljs.core.get.call(null,map__33255__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33253__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33256){
var vec__33257 = p__33256;
var seq__33258 = cljs.core.seq.call(null,vec__33257);
var first__33259 = cljs.core.first.call(null,seq__33258);
var seq__33258__$1 = cljs.core.next.call(null,seq__33258);
var map__33260 = first__33259;
var map__33260__$1 = cljs.core.__destructure_map.call(null,map__33260);
var msg = map__33260__$1;
var msg_name = cljs.core.get.call(null,map__33260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33258__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33261){
var map__33262 = p__33261;
var map__33262__$1 = cljs.core.__destructure_map.call(null,map__33262);
var on_compile_warning = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33262__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__33263){
var vec__33264 = p__33263;
var seq__33265 = cljs.core.seq.call(null,vec__33264);
var first__33266 = cljs.core.first.call(null,seq__33265);
var seq__33265__$1 = cljs.core.next.call(null,seq__33265);
var map__33267 = first__33266;
var map__33267__$1 = cljs.core.__destructure_map.call(null,map__33267);
var msg = map__33267__$1;
var msg_name = cljs.core.get.call(null,map__33267__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33265__$1;
var pred__33268 = cljs.core._EQ_;
var expr__33269 = msg_name;
if(cljs.core.truth_(pred__33268.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33269))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33268.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33269))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_33358){
var state_val_33359 = (state_33358[(1)]);
if((state_val_33359 === (7))){
var inst_33278 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
if(cljs.core.truth_(inst_33278)){
var statearr_33360_33408 = state_33358__$1;
(statearr_33360_33408[(1)] = (8));

} else {
var statearr_33361_33409 = state_33358__$1;
(statearr_33361_33409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (20))){
var inst_33352 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33362_33410 = state_33358__$1;
(statearr_33362_33410[(2)] = inst_33352);

(statearr_33362_33410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (27))){
var inst_33348 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33363_33411 = state_33358__$1;
(statearr_33363_33411[(2)] = inst_33348);

(statearr_33363_33411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (1))){
var inst_33271 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33358__$1 = state_33358;
if(cljs.core.truth_(inst_33271)){
var statearr_33364_33412 = state_33358__$1;
(statearr_33364_33412[(1)] = (2));

} else {
var statearr_33365_33413 = state_33358__$1;
(statearr_33365_33413[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (24))){
var inst_33350 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33366_33414 = state_33358__$1;
(statearr_33366_33414[(2)] = inst_33350);

(statearr_33366_33414[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (4))){
var inst_33356 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33358__$1,inst_33356);
} else {
if((state_val_33359 === (15))){
var inst_33354 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33367_33415 = state_33358__$1;
(statearr_33367_33415[(2)] = inst_33354);

(statearr_33367_33415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (21))){
var inst_33307 = (state_33358[(2)]);
var inst_33308 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33309 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33308);
var state_33358__$1 = (function (){var statearr_33368 = state_33358;
(statearr_33368[(7)] = inst_33307);

return statearr_33368;
})();
var statearr_33369_33416 = state_33358__$1;
(statearr_33369_33416[(2)] = inst_33309);

(statearr_33369_33416[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (31))){
var inst_33337 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33337){
var statearr_33370_33417 = state_33358__$1;
(statearr_33370_33417[(1)] = (34));

} else {
var statearr_33371_33418 = state_33358__$1;
(statearr_33371_33418[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (32))){
var inst_33346 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33372_33419 = state_33358__$1;
(statearr_33372_33419[(2)] = inst_33346);

(statearr_33372_33419[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (33))){
var inst_33333 = (state_33358[(2)]);
var inst_33334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33335 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33334);
var state_33358__$1 = (function (){var statearr_33373 = state_33358;
(statearr_33373[(8)] = inst_33333);

return statearr_33373;
})();
var statearr_33374_33420 = state_33358__$1;
(statearr_33374_33420[(2)] = inst_33335);

(statearr_33374_33420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (13))){
var inst_33292 = figwheel.client.heads_up.clear.call(null);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(16),inst_33292);
} else {
if((state_val_33359 === (22))){
var inst_33313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33314 = figwheel.client.heads_up.append_warning_message.call(null,inst_33313);
var state_33358__$1 = state_33358;
var statearr_33375_33421 = state_33358__$1;
(statearr_33375_33421[(2)] = inst_33314);

(statearr_33375_33421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (36))){
var inst_33344 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33376_33422 = state_33358__$1;
(statearr_33376_33422[(2)] = inst_33344);

(statearr_33376_33422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (29))){
var inst_33324 = (state_33358[(2)]);
var inst_33325 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33326 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33325);
var state_33358__$1 = (function (){var statearr_33377 = state_33358;
(statearr_33377[(9)] = inst_33324);

return statearr_33377;
})();
var statearr_33378_33423 = state_33358__$1;
(statearr_33378_33423[(2)] = inst_33326);

(statearr_33378_33423[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (6))){
var inst_33273 = (state_33358[(10)]);
var state_33358__$1 = state_33358;
var statearr_33379_33424 = state_33358__$1;
(statearr_33379_33424[(2)] = inst_33273);

(statearr_33379_33424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (28))){
var inst_33320 = (state_33358[(2)]);
var inst_33321 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33322 = figwheel.client.heads_up.display_warning.call(null,inst_33321);
var state_33358__$1 = (function (){var statearr_33380 = state_33358;
(statearr_33380[(11)] = inst_33320);

return statearr_33380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(29),inst_33322);
} else {
if((state_val_33359 === (25))){
var inst_33318 = figwheel.client.heads_up.clear.call(null);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(28),inst_33318);
} else {
if((state_val_33359 === (34))){
var inst_33339 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(37),inst_33339);
} else {
if((state_val_33359 === (17))){
var inst_33298 = (state_33358[(2)]);
var inst_33299 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33300 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33299);
var state_33358__$1 = (function (){var statearr_33381 = state_33358;
(statearr_33381[(12)] = inst_33298);

return statearr_33381;
})();
var statearr_33382_33425 = state_33358__$1;
(statearr_33382_33425[(2)] = inst_33300);

(statearr_33382_33425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (3))){
var inst_33290 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33290){
var statearr_33383_33426 = state_33358__$1;
(statearr_33383_33426[(1)] = (13));

} else {
var statearr_33384_33427 = state_33358__$1;
(statearr_33384_33427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (12))){
var inst_33286 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33385_33428 = state_33358__$1;
(statearr_33385_33428[(2)] = inst_33286);

(statearr_33385_33428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (2))){
var inst_33273 = (state_33358[(10)]);
var inst_33273__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33358__$1 = (function (){var statearr_33386 = state_33358;
(statearr_33386[(10)] = inst_33273__$1);

return statearr_33386;
})();
if(cljs.core.truth_(inst_33273__$1)){
var statearr_33387_33429 = state_33358__$1;
(statearr_33387_33429[(1)] = (5));

} else {
var statearr_33388_33430 = state_33358__$1;
(statearr_33388_33430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (23))){
var inst_33316 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33316){
var statearr_33389_33431 = state_33358__$1;
(statearr_33389_33431[(1)] = (25));

} else {
var statearr_33390_33432 = state_33358__$1;
(statearr_33390_33432[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (35))){
var state_33358__$1 = state_33358;
var statearr_33391_33433 = state_33358__$1;
(statearr_33391_33433[(2)] = null);

(statearr_33391_33433[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (19))){
var inst_33311 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33311){
var statearr_33392_33434 = state_33358__$1;
(statearr_33392_33434[(1)] = (22));

} else {
var statearr_33393_33435 = state_33358__$1;
(statearr_33393_33435[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (11))){
var inst_33282 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33394_33436 = state_33358__$1;
(statearr_33394_33436[(2)] = inst_33282);

(statearr_33394_33436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (9))){
var inst_33284 = figwheel.client.heads_up.clear.call(null);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(12),inst_33284);
} else {
if((state_val_33359 === (5))){
var inst_33275 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33358__$1 = state_33358;
var statearr_33395_33437 = state_33358__$1;
(statearr_33395_33437[(2)] = inst_33275);

(statearr_33395_33437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (14))){
var inst_33302 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33302){
var statearr_33396_33438 = state_33358__$1;
(statearr_33396_33438[(1)] = (18));

} else {
var statearr_33397_33439 = state_33358__$1;
(statearr_33397_33439[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (26))){
var inst_33328 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33358__$1 = state_33358;
if(inst_33328){
var statearr_33398_33440 = state_33358__$1;
(statearr_33398_33440[(1)] = (30));

} else {
var statearr_33399_33441 = state_33358__$1;
(statearr_33399_33441[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (16))){
var inst_33294 = (state_33358[(2)]);
var inst_33295 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33296 = figwheel.client.heads_up.display_exception.call(null,inst_33295);
var state_33358__$1 = (function (){var statearr_33400 = state_33358;
(statearr_33400[(13)] = inst_33294);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(17),inst_33296);
} else {
if((state_val_33359 === (30))){
var inst_33330 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33331 = figwheel.client.heads_up.display_warning.call(null,inst_33330);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(33),inst_33331);
} else {
if((state_val_33359 === (10))){
var inst_33288 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33401_33442 = state_33358__$1;
(statearr_33401_33442[(2)] = inst_33288);

(statearr_33401_33442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (18))){
var inst_33304 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33305 = figwheel.client.heads_up.display_exception.call(null,inst_33304);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(21),inst_33305);
} else {
if((state_val_33359 === (37))){
var inst_33341 = (state_33358[(2)]);
var state_33358__$1 = state_33358;
var statearr_33402_33443 = state_33358__$1;
(statearr_33402_33443[(2)] = inst_33341);

(statearr_33402_33443[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33359 === (8))){
var inst_33280 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33358__$1 = state_33358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33358__$1,(11),inst_33280);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____0 = (function (){
var statearr_33403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33403[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__);

(statearr_33403[(1)] = (1));

return statearr_33403;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____1 = (function (state_33358){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_33358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e33404){var ex__27350__auto__ = e33404;
var statearr_33405_33444 = state_33358;
(statearr_33405_33444[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_33358[(4)]))){
var statearr_33406_33445 = state_33358;
(statearr_33406_33445[(1)] = cljs.core.first.call(null,(state_33358[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33446 = state_33358;
state_33358 = G__33446;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__ = function(state_33358){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____1.call(this,state_33358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_33407 = f__27421__auto__.call(null);
(statearr_33407[(6)] = c__27420__auto__);

return statearr_33407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27420__auto___33476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_33461){
var state_val_33462 = (state_33461[(1)]);
if((state_val_33462 === (1))){
var state_33461__$1 = state_33461;
var statearr_33463_33477 = state_33461__$1;
(statearr_33463_33477[(2)] = null);

(statearr_33463_33477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (2))){
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(4),ch);
} else {
if((state_val_33462 === (3))){
var inst_33459 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33461__$1,inst_33459);
} else {
if((state_val_33462 === (4))){
var inst_33449 = (state_33461[(7)]);
var inst_33449__$1 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33464 = state_33461;
(statearr_33464[(7)] = inst_33449__$1);

return statearr_33464;
})();
if(cljs.core.truth_(inst_33449__$1)){
var statearr_33465_33478 = state_33461__$1;
(statearr_33465_33478[(1)] = (5));

} else {
var statearr_33466_33479 = state_33461__$1;
(statearr_33466_33479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (5))){
var inst_33449 = (state_33461[(7)]);
var inst_33451 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33449);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(8),inst_33451);
} else {
if((state_val_33462 === (6))){
var state_33461__$1 = state_33461;
var statearr_33467_33480 = state_33461__$1;
(statearr_33467_33480[(2)] = null);

(statearr_33467_33480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (7))){
var inst_33457 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33468_33481 = state_33461__$1;
(statearr_33468_33481[(2)] = inst_33457);

(statearr_33468_33481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (8))){
var inst_33453 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33469 = state_33461;
(statearr_33469[(8)] = inst_33453);

return statearr_33469;
})();
var statearr_33470_33482 = state_33461__$1;
(statearr_33470_33482[(2)] = null);

(statearr_33470_33482[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27347__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27347__auto____0 = (function (){
var statearr_33471 = [null,null,null,null,null,null,null,null,null];
(statearr_33471[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27347__auto__);

(statearr_33471[(1)] = (1));

return statearr_33471;
});
var figwheel$client$heads_up_plugin_$_state_machine__27347__auto____1 = (function (state_33461){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_33461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e33472){var ex__27350__auto__ = e33472;
var statearr_33473_33483 = state_33461;
(statearr_33473_33483[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_33461[(4)]))){
var statearr_33474_33484 = state_33461;
(statearr_33474_33484[(1)] = cljs.core.first.call(null,(state_33461[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33485 = state_33461;
state_33461 = G__33485;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27347__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27347__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27347__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27347__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_33475 = f__27421__auto__.call(null);
(statearr_33475[(6)] = c__27420__auto___33476);

return statearr_33475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_33491){
var state_val_33492 = (state_33491[(1)]);
if((state_val_33492 === (1))){
var inst_33486 = cljs.core.async.timeout.call(null,(3000));
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33491__$1,(2),inst_33486);
} else {
if((state_val_33492 === (2))){
var inst_33488 = (state_33491[(2)]);
var inst_33489 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33491__$1 = (function (){var statearr_33493 = state_33491;
(statearr_33493[(7)] = inst_33488);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33491__$1,inst_33489);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____0 = (function (){
var statearr_33494 = [null,null,null,null,null,null,null,null];
(statearr_33494[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__);

(statearr_33494[(1)] = (1));

return statearr_33494;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____1 = (function (state_33491){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_33491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e33495){var ex__27350__auto__ = e33495;
var statearr_33496_33499 = state_33491;
(statearr_33496_33499[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_33491[(4)]))){
var statearr_33497_33500 = state_33491;
(statearr_33497_33500[(1)] = cljs.core.first.call(null,(state_33491[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33501 = state_33491;
state_33491 = G__33501;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__ = function(state_33491){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____1.call(this,state_33491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27347__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_33498 = f__27421__auto__.call(null);
(statearr_33498[(6)] = c__27420__auto__);

return statearr_33498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27421__auto__ = (function (){var switch__27346__auto__ = (function (state_33508){
var state_val_33509 = (state_33508[(1)]);
if((state_val_33509 === (1))){
var inst_33502 = cljs.core.async.timeout.call(null,(2000));
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(2),inst_33502);
} else {
if((state_val_33509 === (2))){
var inst_33504 = (state_33508[(2)]);
var inst_33505 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33506 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33505);
var state_33508__$1 = (function (){var statearr_33510 = state_33508;
(statearr_33510[(7)] = inst_33504);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33508__$1,inst_33506);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____0 = (function (){
var statearr_33511 = [null,null,null,null,null,null,null,null];
(statearr_33511[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__);

(statearr_33511[(1)] = (1));

return statearr_33511;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____1 = (function (state_33508){
while(true){
var ret_value__27348__auto__ = (function (){try{while(true){
var result__27349__auto__ = switch__27346__auto__.call(null,state_33508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27349__auto__;
}
break;
}
}catch (e33512){var ex__27350__auto__ = e33512;
var statearr_33513_33516 = state_33508;
(statearr_33513_33516[(2)] = ex__27350__auto__);


if(cljs.core.seq.call(null,(state_33508[(4)]))){
var statearr_33514_33517 = state_33508;
(statearr_33514_33517[(1)] = cljs.core.first.call(null,(state_33508[(4)])));

} else {
throw ex__27350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33518 = state_33508;
state_33508 = G__33518;
continue;
} else {
return ret_value__27348__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27347__auto__;
})()
})();
var state__27422__auto__ = (function (){var statearr_33515 = f__27421__auto__.call(null);
(statearr_33515[(6)] = c__27420__auto__);

return statearr_33515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27422__auto__);
}));

return c__27420__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33519){
var map__33520 = p__33519;
var map__33520__$1 = cljs.core.__destructure_map.call(null,map__33520);
var file = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33521 = "";
var G__33521__$1 = (cljs.core.truth_(file)?[G__33521,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33521);
var G__33521__$2 = (cljs.core.truth_(line)?[G__33521__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33521__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__33521__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33521__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33522){
var map__33523 = p__33522;
var map__33523__$1 = cljs.core.__destructure_map.call(null,map__33523);
var ed = map__33523__$1;
var exception_data = cljs.core.get.call(null,map__33523__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33523__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33525 = (function (){var G__33524 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33524)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33524;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33525);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33526){
var map__33527 = p__33526;
var map__33527__$1 = cljs.core.__destructure_map.call(null,map__33527);
var w = map__33527__$1;
var message = cljs.core.get.call(null,map__33527__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5043__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33528 = cljs.core.seq.call(null,plugins);
var chunk__33529 = null;
var count__33530 = (0);
var i__33531 = (0);
while(true){
if((i__33531 < count__33530)){
var vec__33538 = cljs.core._nth.call(null,chunk__33529,i__33531);
var k = cljs.core.nth.call(null,vec__33538,(0),null);
var plugin = cljs.core.nth.call(null,vec__33538,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33528,chunk__33529,count__33530,i__33531,pl_33544,vec__33538,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33544.call(null,msg_hist);
});})(seq__33528,chunk__33529,count__33530,i__33531,pl_33544,vec__33538,k,plugin))
);
} else {
}


var G__33545 = seq__33528;
var G__33546 = chunk__33529;
var G__33547 = count__33530;
var G__33548 = (i__33531 + (1));
seq__33528 = G__33545;
chunk__33529 = G__33546;
count__33530 = G__33547;
i__33531 = G__33548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33528);
if(temp__5735__auto__){
var seq__33528__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33528__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__33528__$1);
var G__33549 = cljs.core.chunk_rest.call(null,seq__33528__$1);
var G__33550 = c__5567__auto__;
var G__33551 = cljs.core.count.call(null,c__5567__auto__);
var G__33552 = (0);
seq__33528 = G__33549;
chunk__33529 = G__33550;
count__33530 = G__33551;
i__33531 = G__33552;
continue;
} else {
var vec__33541 = cljs.core.first.call(null,seq__33528__$1);
var k = cljs.core.nth.call(null,vec__33541,(0),null);
var plugin = cljs.core.nth.call(null,vec__33541,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33553 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33528,chunk__33529,count__33530,i__33531,pl_33553,vec__33541,k,plugin,seq__33528__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33553.call(null,msg_hist);
});})(seq__33528,chunk__33529,count__33530,i__33531,pl_33553,vec__33541,k,plugin,seq__33528__$1,temp__5735__auto__))
);
} else {
}


var G__33554 = cljs.core.next.call(null,seq__33528__$1);
var G__33555 = null;
var G__33556 = (0);
var G__33557 = (0);
seq__33528 = G__33554;
chunk__33529 = G__33555;
count__33530 = G__33556;
i__33531 = G__33557;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33559 = arguments.length;
switch (G__33559) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33560_33565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33561_33566 = null;
var count__33562_33567 = (0);
var i__33563_33568 = (0);
while(true){
if((i__33563_33568 < count__33562_33567)){
var msg_33569 = cljs.core._nth.call(null,chunk__33561_33566,i__33563_33568);
figwheel.client.socket.handle_incoming_message.call(null,msg_33569);


var G__33570 = seq__33560_33565;
var G__33571 = chunk__33561_33566;
var G__33572 = count__33562_33567;
var G__33573 = (i__33563_33568 + (1));
seq__33560_33565 = G__33570;
chunk__33561_33566 = G__33571;
count__33562_33567 = G__33572;
i__33563_33568 = G__33573;
continue;
} else {
var temp__5735__auto___33574 = cljs.core.seq.call(null,seq__33560_33565);
if(temp__5735__auto___33574){
var seq__33560_33575__$1 = temp__5735__auto___33574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33560_33575__$1)){
var c__5567__auto___33576 = cljs.core.chunk_first.call(null,seq__33560_33575__$1);
var G__33577 = cljs.core.chunk_rest.call(null,seq__33560_33575__$1);
var G__33578 = c__5567__auto___33576;
var G__33579 = cljs.core.count.call(null,c__5567__auto___33576);
var G__33580 = (0);
seq__33560_33565 = G__33577;
chunk__33561_33566 = G__33578;
count__33562_33567 = G__33579;
i__33563_33568 = G__33580;
continue;
} else {
var msg_33581 = cljs.core.first.call(null,seq__33560_33575__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33581);


var G__33582 = cljs.core.next.call(null,seq__33560_33575__$1);
var G__33583 = null;
var G__33584 = (0);
var G__33585 = (0);
seq__33560_33565 = G__33582;
chunk__33561_33566 = G__33583;
count__33562_33567 = G__33584;
i__33563_33568 = G__33585;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33589 = arguments.length;
var i__5769__auto___33590 = (0);
while(true){
if((i__5769__auto___33590 < len__5768__auto___33589)){
args__5774__auto__.push((arguments[i__5769__auto___33590]));

var G__33591 = (i__5769__auto___33590 + (1));
i__5769__auto___33590 = G__33591;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33587){
var map__33588 = p__33587;
var map__33588__$1 = cljs.core.__destructure_map.call(null,map__33588);
var opts = map__33588__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33586){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33586));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33592){if((e33592 instanceof Error)){
var e = e33592;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33592;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__33593){
var map__33594 = p__33593;
var map__33594__$1 = cljs.core.__destructure_map.call(null,map__33594);
var msg_name = cljs.core.get.call(null,map__33594__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1655292231382
