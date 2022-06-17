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
}catch (e34133){if((e34133 instanceof Error)){
var e = e34133;
return "Error: Unable to stringify";
} else {
throw e34133;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34136 = arguments.length;
switch (G__34136) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34134_SHARP_){
if(typeof p1__34134_SHARP_ === 'string'){
return p1__34134_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34134_SHARP_);
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
var len__5768__auto___34139 = arguments.length;
var i__5769__auto___34140 = (0);
while(true){
if((i__5769__auto___34140 < len__5768__auto___34139)){
args__5774__auto__.push((arguments[i__5769__auto___34140]));

var G__34141 = (i__5769__auto___34140 + (1));
i__5769__auto___34140 = G__34141;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34138){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34138));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5774__auto__ = [];
var len__5768__auto___34143 = arguments.length;
var i__5769__auto___34144 = (0);
while(true){
if((i__5769__auto___34144 < len__5768__auto___34143)){
args__5774__auto__.push((arguments[i__5769__auto___34144]));

var G__34145 = (i__5769__auto___34144 + (1));
i__5769__auto___34144 = G__34145;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34142){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34142));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34146){
var map__34147 = p__34146;
var map__34147__$1 = cljs.core.__destructure_map.call(null,map__34147);
var message = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28523__auto___34226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34197){
var state_val_34198 = (state_34197[(1)]);
if((state_val_34198 === (7))){
var inst_34193 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
var statearr_34199_34227 = state_34197__$1;
(statearr_34199_34227[(2)] = inst_34193);

(statearr_34199_34227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (1))){
var state_34197__$1 = state_34197;
var statearr_34200_34228 = state_34197__$1;
(statearr_34200_34228[(2)] = null);

(statearr_34200_34228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (4))){
var inst_34150 = (state_34197[(7)]);
var inst_34150__$1 = (state_34197[(2)]);
var state_34197__$1 = (function (){var statearr_34201 = state_34197;
(statearr_34201[(7)] = inst_34150__$1);

return statearr_34201;
})();
if(cljs.core.truth_(inst_34150__$1)){
var statearr_34202_34229 = state_34197__$1;
(statearr_34202_34229[(1)] = (5));

} else {
var statearr_34203_34230 = state_34197__$1;
(statearr_34203_34230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (15))){
var inst_34157 = (state_34197[(8)]);
var inst_34172 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34157);
var inst_34173 = cljs.core.first.call(null,inst_34172);
var inst_34174 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34173);
var inst_34175 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34174)].join('');
var inst_34176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34175);
var state_34197__$1 = state_34197;
var statearr_34204_34231 = state_34197__$1;
(statearr_34204_34231[(2)] = inst_34176);

(statearr_34204_34231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (13))){
var inst_34181 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
var statearr_34205_34232 = state_34197__$1;
(statearr_34205_34232[(2)] = inst_34181);

(statearr_34205_34232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (6))){
var state_34197__$1 = state_34197;
var statearr_34206_34233 = state_34197__$1;
(statearr_34206_34233[(2)] = null);

(statearr_34206_34233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (17))){
var inst_34179 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
var statearr_34207_34234 = state_34197__$1;
(statearr_34207_34234[(2)] = inst_34179);

(statearr_34207_34234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (3))){
var inst_34195 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34197__$1,inst_34195);
} else {
if((state_val_34198 === (12))){
var inst_34156 = (state_34197[(9)]);
var inst_34170 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34156,opts);
var state_34197__$1 = state_34197;
if(inst_34170){
var statearr_34208_34235 = state_34197__$1;
(statearr_34208_34235[(1)] = (15));

} else {
var statearr_34209_34236 = state_34197__$1;
(statearr_34209_34236[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (2))){
var state_34197__$1 = state_34197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34197__$1,(4),ch);
} else {
if((state_val_34198 === (11))){
var inst_34157 = (state_34197[(8)]);
var inst_34162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34163 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34157);
var inst_34164 = cljs.core.async.timeout.call(null,(1000));
var inst_34165 = [inst_34163,inst_34164];
var inst_34166 = (new cljs.core.PersistentVector(null,2,(5),inst_34162,inst_34165,null));
var state_34197__$1 = state_34197;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34197__$1,(14),inst_34166);
} else {
if((state_val_34198 === (9))){
var inst_34157 = (state_34197[(8)]);
var inst_34183 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34184 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34157);
var inst_34185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34184);
var inst_34186 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34185)].join('');
var inst_34187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34186);
var state_34197__$1 = (function (){var statearr_34210 = state_34197;
(statearr_34210[(10)] = inst_34183);

return statearr_34210;
})();
var statearr_34211_34237 = state_34197__$1;
(statearr_34211_34237[(2)] = inst_34187);

(statearr_34211_34237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (5))){
var inst_34150 = (state_34197[(7)]);
var inst_34152 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34153 = (new cljs.core.PersistentArrayMap(null,2,inst_34152,null));
var inst_34154 = (new cljs.core.PersistentHashSet(null,inst_34153,null));
var inst_34155 = figwheel.client.focus_msgs.call(null,inst_34154,inst_34150);
var inst_34156 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34155);
var inst_34157 = cljs.core.first.call(null,inst_34155);
var inst_34158 = figwheel.client.autoload_QMARK_.call(null);
var state_34197__$1 = (function (){var statearr_34212 = state_34197;
(statearr_34212[(9)] = inst_34156);

(statearr_34212[(8)] = inst_34157);

return statearr_34212;
})();
if(cljs.core.truth_(inst_34158)){
var statearr_34213_34238 = state_34197__$1;
(statearr_34213_34238[(1)] = (8));

} else {
var statearr_34214_34239 = state_34197__$1;
(statearr_34214_34239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (14))){
var inst_34168 = (state_34197[(2)]);
var state_34197__$1 = state_34197;
var statearr_34215_34240 = state_34197__$1;
(statearr_34215_34240[(2)] = inst_34168);

(statearr_34215_34240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (16))){
var state_34197__$1 = state_34197;
var statearr_34216_34241 = state_34197__$1;
(statearr_34216_34241[(2)] = null);

(statearr_34216_34241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (10))){
var inst_34189 = (state_34197[(2)]);
var state_34197__$1 = (function (){var statearr_34217 = state_34197;
(statearr_34217[(11)] = inst_34189);

return statearr_34217;
})();
var statearr_34218_34242 = state_34197__$1;
(statearr_34218_34242[(2)] = null);

(statearr_34218_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34198 === (8))){
var inst_34156 = (state_34197[(9)]);
var inst_34160 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34156,opts);
var state_34197__$1 = state_34197;
if(cljs.core.truth_(inst_34160)){
var statearr_34219_34243 = state_34197__$1;
(statearr_34219_34243[(1)] = (11));

} else {
var statearr_34220_34244 = state_34197__$1;
(statearr_34220_34244[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____0 = (function (){
var statearr_34221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34221[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__);

(statearr_34221[(1)] = (1));

return statearr_34221;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____1 = (function (state_34197){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34222){var ex__28453__auto__ = e34222;
var statearr_34223_34245 = state_34197;
(statearr_34223_34245[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34197[(4)]))){
var statearr_34224_34246 = state_34197;
(statearr_34224_34246[(1)] = cljs.core.first.call(null,(state_34197[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34247 = state_34197;
state_34197 = G__34247;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__ = function(state_34197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____1.call(this,state_34197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28450__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34225 = f__28524__auto__.call(null);
(statearr_34225[(6)] = c__28523__auto___34226);

return statearr_34225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34248_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34248_SHARP_));
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
var base_path_34254 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34252 = true;
var _STAR_print_fn_STAR__temp_val__34253 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34252);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34253);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34251);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34250);
}}catch (e34249){if((e34249 instanceof Error)){
var e = e34249;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34254], null));
} else {
var e = e34249;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34255){
var map__34256 = p__34255;
var map__34256__$1 = cljs.core.__destructure_map.call(null,map__34256);
var opts = map__34256__$1;
var build_id = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__34257){
var vec__34258 = p__34257;
var seq__34259 = cljs.core.seq.call(null,vec__34258);
var first__34260 = cljs.core.first.call(null,seq__34259);
var seq__34259__$1 = cljs.core.next.call(null,seq__34259);
var map__34261 = first__34260;
var map__34261__$1 = cljs.core.__destructure_map.call(null,map__34261);
var msg = map__34261__$1;
var msg_name = cljs.core.get.call(null,map__34261__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34259__$1;
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
return (function (p__34262){
var vec__34263 = p__34262;
var seq__34264 = cljs.core.seq.call(null,vec__34263);
var first__34265 = cljs.core.first.call(null,seq__34264);
var seq__34264__$1 = cljs.core.next.call(null,seq__34264);
var map__34266 = first__34265;
var map__34266__$1 = cljs.core.__destructure_map.call(null,map__34266);
var msg = map__34266__$1;
var msg_name = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34264__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34267){
var map__34268 = p__34267;
var map__34268__$1 = cljs.core.__destructure_map.call(null,map__34268);
var on_compile_warning = cljs.core.get.call(null,map__34268__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34268__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__34269){
var vec__34270 = p__34269;
var seq__34271 = cljs.core.seq.call(null,vec__34270);
var first__34272 = cljs.core.first.call(null,seq__34271);
var seq__34271__$1 = cljs.core.next.call(null,seq__34271);
var map__34273 = first__34272;
var map__34273__$1 = cljs.core.__destructure_map.call(null,map__34273);
var msg = map__34273__$1;
var msg_name = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34271__$1;
var pred__34274 = cljs.core._EQ_;
var expr__34275 = msg_name;
if(cljs.core.truth_(pred__34274.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34275))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34274.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34275))){
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (7))){
var inst_34284 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34284)){
var statearr_34366_34414 = state_34364__$1;
(statearr_34366_34414[(1)] = (8));

} else {
var statearr_34367_34415 = state_34364__$1;
(statearr_34367_34415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (20))){
var inst_34358 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34368_34416 = state_34364__$1;
(statearr_34368_34416[(2)] = inst_34358);

(statearr_34368_34416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (27))){
var inst_34354 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34369_34417 = state_34364__$1;
(statearr_34369_34417[(2)] = inst_34354);

(statearr_34369_34417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (1))){
var inst_34277 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34364__$1 = state_34364;
if(cljs.core.truth_(inst_34277)){
var statearr_34370_34418 = state_34364__$1;
(statearr_34370_34418[(1)] = (2));

} else {
var statearr_34371_34419 = state_34364__$1;
(statearr_34371_34419[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (24))){
var inst_34356 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34372_34420 = state_34364__$1;
(statearr_34372_34420[(2)] = inst_34356);

(statearr_34372_34420[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (4))){
var inst_34362 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34364__$1,inst_34362);
} else {
if((state_val_34365 === (15))){
var inst_34360 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34373_34421 = state_34364__$1;
(statearr_34373_34421[(2)] = inst_34360);

(statearr_34373_34421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (21))){
var inst_34313 = (state_34364[(2)]);
var inst_34314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34314);
var state_34364__$1 = (function (){var statearr_34374 = state_34364;
(statearr_34374[(7)] = inst_34313);

return statearr_34374;
})();
var statearr_34375_34422 = state_34364__$1;
(statearr_34375_34422[(2)] = inst_34315);

(statearr_34375_34422[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (31))){
var inst_34343 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34343){
var statearr_34376_34423 = state_34364__$1;
(statearr_34376_34423[(1)] = (34));

} else {
var statearr_34377_34424 = state_34364__$1;
(statearr_34377_34424[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (32))){
var inst_34352 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34378_34425 = state_34364__$1;
(statearr_34378_34425[(2)] = inst_34352);

(statearr_34378_34425[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (33))){
var inst_34339 = (state_34364[(2)]);
var inst_34340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34340);
var state_34364__$1 = (function (){var statearr_34379 = state_34364;
(statearr_34379[(8)] = inst_34339);

return statearr_34379;
})();
var statearr_34380_34426 = state_34364__$1;
(statearr_34380_34426[(2)] = inst_34341);

(statearr_34380_34426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (13))){
var inst_34298 = figwheel.client.heads_up.clear.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(16),inst_34298);
} else {
if((state_val_34365 === (22))){
var inst_34319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34320 = figwheel.client.heads_up.append_warning_message.call(null,inst_34319);
var state_34364__$1 = state_34364;
var statearr_34381_34427 = state_34364__$1;
(statearr_34381_34427[(2)] = inst_34320);

(statearr_34381_34427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (36))){
var inst_34350 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34382_34428 = state_34364__$1;
(statearr_34382_34428[(2)] = inst_34350);

(statearr_34382_34428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (29))){
var inst_34330 = (state_34364[(2)]);
var inst_34331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34332 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34331);
var state_34364__$1 = (function (){var statearr_34383 = state_34364;
(statearr_34383[(9)] = inst_34330);

return statearr_34383;
})();
var statearr_34384_34429 = state_34364__$1;
(statearr_34384_34429[(2)] = inst_34332);

(statearr_34384_34429[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (6))){
var inst_34279 = (state_34364[(10)]);
var state_34364__$1 = state_34364;
var statearr_34385_34430 = state_34364__$1;
(statearr_34385_34430[(2)] = inst_34279);

(statearr_34385_34430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (28))){
var inst_34326 = (state_34364[(2)]);
var inst_34327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34328 = figwheel.client.heads_up.display_warning.call(null,inst_34327);
var state_34364__$1 = (function (){var statearr_34386 = state_34364;
(statearr_34386[(11)] = inst_34326);

return statearr_34386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(29),inst_34328);
} else {
if((state_val_34365 === (25))){
var inst_34324 = figwheel.client.heads_up.clear.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(28),inst_34324);
} else {
if((state_val_34365 === (34))){
var inst_34345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(37),inst_34345);
} else {
if((state_val_34365 === (17))){
var inst_34304 = (state_34364[(2)]);
var inst_34305 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34305);
var state_34364__$1 = (function (){var statearr_34387 = state_34364;
(statearr_34387[(12)] = inst_34304);

return statearr_34387;
})();
var statearr_34388_34431 = state_34364__$1;
(statearr_34388_34431[(2)] = inst_34306);

(statearr_34388_34431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (3))){
var inst_34296 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34296){
var statearr_34389_34432 = state_34364__$1;
(statearr_34389_34432[(1)] = (13));

} else {
var statearr_34390_34433 = state_34364__$1;
(statearr_34390_34433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (12))){
var inst_34292 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34391_34434 = state_34364__$1;
(statearr_34391_34434[(2)] = inst_34292);

(statearr_34391_34434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (2))){
var inst_34279 = (state_34364[(10)]);
var inst_34279__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34364__$1 = (function (){var statearr_34392 = state_34364;
(statearr_34392[(10)] = inst_34279__$1);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34279__$1)){
var statearr_34393_34435 = state_34364__$1;
(statearr_34393_34435[(1)] = (5));

} else {
var statearr_34394_34436 = state_34364__$1;
(statearr_34394_34436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (23))){
var inst_34322 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34322){
var statearr_34395_34437 = state_34364__$1;
(statearr_34395_34437[(1)] = (25));

} else {
var statearr_34396_34438 = state_34364__$1;
(statearr_34396_34438[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (35))){
var state_34364__$1 = state_34364;
var statearr_34397_34439 = state_34364__$1;
(statearr_34397_34439[(2)] = null);

(statearr_34397_34439[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (19))){
var inst_34317 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34317){
var statearr_34398_34440 = state_34364__$1;
(statearr_34398_34440[(1)] = (22));

} else {
var statearr_34399_34441 = state_34364__$1;
(statearr_34399_34441[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (11))){
var inst_34288 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34400_34442 = state_34364__$1;
(statearr_34400_34442[(2)] = inst_34288);

(statearr_34400_34442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (9))){
var inst_34290 = figwheel.client.heads_up.clear.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(12),inst_34290);
} else {
if((state_val_34365 === (5))){
var inst_34281 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34364__$1 = state_34364;
var statearr_34401_34443 = state_34364__$1;
(statearr_34401_34443[(2)] = inst_34281);

(statearr_34401_34443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (14))){
var inst_34308 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34308){
var statearr_34402_34444 = state_34364__$1;
(statearr_34402_34444[(1)] = (18));

} else {
var statearr_34403_34445 = state_34364__$1;
(statearr_34403_34445[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (26))){
var inst_34334 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34364__$1 = state_34364;
if(inst_34334){
var statearr_34404_34446 = state_34364__$1;
(statearr_34404_34446[(1)] = (30));

} else {
var statearr_34405_34447 = state_34364__$1;
(statearr_34405_34447[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (16))){
var inst_34300 = (state_34364[(2)]);
var inst_34301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34302 = figwheel.client.heads_up.display_exception.call(null,inst_34301);
var state_34364__$1 = (function (){var statearr_34406 = state_34364;
(statearr_34406[(13)] = inst_34300);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(17),inst_34302);
} else {
if((state_val_34365 === (30))){
var inst_34336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34337 = figwheel.client.heads_up.display_warning.call(null,inst_34336);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(33),inst_34337);
} else {
if((state_val_34365 === (10))){
var inst_34294 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34407_34448 = state_34364__$1;
(statearr_34407_34448[(2)] = inst_34294);

(statearr_34407_34448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (18))){
var inst_34310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34311 = figwheel.client.heads_up.display_exception.call(null,inst_34310);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(21),inst_34311);
} else {
if((state_val_34365 === (37))){
var inst_34347 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
var statearr_34408_34449 = state_34364__$1;
(statearr_34408_34449[(2)] = inst_34347);

(statearr_34408_34449[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34365 === (8))){
var inst_34286 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(11),inst_34286);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____0 = (function (){
var statearr_34409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34409[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__);

(statearr_34409[(1)] = (1));

return statearr_34409;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____1 = (function (state_34364){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34410){var ex__28453__auto__ = e34410;
var statearr_34411_34450 = state_34364;
(statearr_34411_34450[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34364[(4)]))){
var statearr_34412_34451 = state_34364;
(statearr_34412_34451[(1)] = cljs.core.first.call(null,(state_34364[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34452 = state_34364;
state_34364 = G__34452;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34413 = f__28524__auto__.call(null);
(statearr_34413[(6)] = c__28523__auto__);

return statearr_34413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28523__auto___34482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (1))){
var state_34467__$1 = state_34467;
var statearr_34469_34483 = state_34467__$1;
(statearr_34469_34483[(2)] = null);

(statearr_34469_34483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (2))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34467__$1,(4),ch);
} else {
if((state_val_34468 === (3))){
var inst_34465 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34467__$1,inst_34465);
} else {
if((state_val_34468 === (4))){
var inst_34455 = (state_34467[(7)]);
var inst_34455__$1 = (state_34467[(2)]);
var state_34467__$1 = (function (){var statearr_34470 = state_34467;
(statearr_34470[(7)] = inst_34455__$1);

return statearr_34470;
})();
if(cljs.core.truth_(inst_34455__$1)){
var statearr_34471_34484 = state_34467__$1;
(statearr_34471_34484[(1)] = (5));

} else {
var statearr_34472_34485 = state_34467__$1;
(statearr_34472_34485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (5))){
var inst_34455 = (state_34467[(7)]);
var inst_34457 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34455);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34467__$1,(8),inst_34457);
} else {
if((state_val_34468 === (6))){
var state_34467__$1 = state_34467;
var statearr_34473_34486 = state_34467__$1;
(statearr_34473_34486[(2)] = null);

(statearr_34473_34486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (7))){
var inst_34463 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34474_34487 = state_34467__$1;
(statearr_34474_34487[(2)] = inst_34463);

(statearr_34474_34487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (8))){
var inst_34459 = (state_34467[(2)]);
var state_34467__$1 = (function (){var statearr_34475 = state_34467;
(statearr_34475[(8)] = inst_34459);

return statearr_34475;
})();
var statearr_34476_34488 = state_34467__$1;
(statearr_34476_34488[(2)] = null);

(statearr_34476_34488[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__28450__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28450__auto____0 = (function (){
var statearr_34477 = [null,null,null,null,null,null,null,null,null];
(statearr_34477[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28450__auto__);

(statearr_34477[(1)] = (1));

return statearr_34477;
});
var figwheel$client$heads_up_plugin_$_state_machine__28450__auto____1 = (function (state_34467){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34478){var ex__28453__auto__ = e34478;
var statearr_34479_34489 = state_34467;
(statearr_34479_34489[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34467[(4)]))){
var statearr_34480_34490 = state_34467;
(statearr_34480_34490[(1)] = cljs.core.first.call(null,(state_34467[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_34467;
state_34467 = G__34491;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28450__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28450__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28450__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28450__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34481 = f__28524__auto__.call(null);
(statearr_34481[(6)] = c__28523__auto___34482);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34497){
var state_val_34498 = (state_34497[(1)]);
if((state_val_34498 === (1))){
var inst_34492 = cljs.core.async.timeout.call(null,(3000));
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34497__$1,(2),inst_34492);
} else {
if((state_val_34498 === (2))){
var inst_34494 = (state_34497[(2)]);
var inst_34495 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34497__$1 = (function (){var statearr_34499 = state_34497;
(statearr_34499[(7)] = inst_34494);

return statearr_34499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34497__$1,inst_34495);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null,null];
(statearr_34500[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____1 = (function (state_34497){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34501){var ex__28453__auto__ = e34501;
var statearr_34502_34505 = state_34497;
(statearr_34502_34505[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34497[(4)]))){
var statearr_34503_34506 = state_34497;
(statearr_34503_34506[(1)] = cljs.core.first.call(null,(state_34497[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34507 = state_34497;
state_34497 = G__34507;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__ = function(state_34497){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____1.call(this,state_34497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28450__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34504 = f__28524__auto__.call(null);
(statearr_34504[(6)] = c__28523__auto__);

return statearr_34504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
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
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34514){
var state_val_34515 = (state_34514[(1)]);
if((state_val_34515 === (1))){
var inst_34508 = cljs.core.async.timeout.call(null,(2000));
var state_34514__$1 = state_34514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34514__$1,(2),inst_34508);
} else {
if((state_val_34515 === (2))){
var inst_34510 = (state_34514[(2)]);
var inst_34511 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34512 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34511);
var state_34514__$1 = (function (){var statearr_34516 = state_34514;
(statearr_34516[(7)] = inst_34510);

return statearr_34516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34514__$1,inst_34512);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____0 = (function (){
var statearr_34517 = [null,null,null,null,null,null,null,null];
(statearr_34517[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__);

(statearr_34517[(1)] = (1));

return statearr_34517;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____1 = (function (state_34514){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34518){var ex__28453__auto__ = e34518;
var statearr_34519_34522 = state_34514;
(statearr_34519_34522[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34514[(4)]))){
var statearr_34520_34523 = state_34514;
(statearr_34520_34523[(1)] = cljs.core.first.call(null,(state_34514[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34524 = state_34514;
state_34514 = G__34524;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__ = function(state_34514){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____1.call(this,state_34514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34521 = f__28524__auto__.call(null);
(statearr_34521[(6)] = c__28523__auto__);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34525){
var map__34526 = p__34525;
var map__34526__$1 = cljs.core.__destructure_map.call(null,map__34526);
var file = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34527 = "";
var G__34527__$1 = (cljs.core.truth_(file)?[G__34527,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34527);
var G__34527__$2 = (cljs.core.truth_(line)?[G__34527__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34527__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__34527__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34527__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34528){
var map__34529 = p__34528;
var map__34529__$1 = cljs.core.__destructure_map.call(null,map__34529);
var ed = map__34529__$1;
var exception_data = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34529__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34531 = (function (){var G__34530 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34530)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__34530;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34531);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34532){
var map__34533 = p__34532;
var map__34533__$1 = cljs.core.__destructure_map.call(null,map__34533);
var w = map__34533__$1;
var message = cljs.core.get.call(null,map__34533__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34534 = cljs.core.seq.call(null,plugins);
var chunk__34535 = null;
var count__34536 = (0);
var i__34537 = (0);
while(true){
if((i__34537 < count__34536)){
var vec__34544 = cljs.core._nth.call(null,chunk__34535,i__34537);
var k = cljs.core.nth.call(null,vec__34544,(0),null);
var plugin = cljs.core.nth.call(null,vec__34544,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34550 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34534,chunk__34535,count__34536,i__34537,pl_34550,vec__34544,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34550.call(null,msg_hist);
});})(seq__34534,chunk__34535,count__34536,i__34537,pl_34550,vec__34544,k,plugin))
);
} else {
}


var G__34551 = seq__34534;
var G__34552 = chunk__34535;
var G__34553 = count__34536;
var G__34554 = (i__34537 + (1));
seq__34534 = G__34551;
chunk__34535 = G__34552;
count__34536 = G__34553;
i__34537 = G__34554;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34534);
if(temp__5735__auto__){
var seq__34534__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34534__$1)){
var c__5567__auto__ = cljs.core.chunk_first.call(null,seq__34534__$1);
var G__34555 = cljs.core.chunk_rest.call(null,seq__34534__$1);
var G__34556 = c__5567__auto__;
var G__34557 = cljs.core.count.call(null,c__5567__auto__);
var G__34558 = (0);
seq__34534 = G__34555;
chunk__34535 = G__34556;
count__34536 = G__34557;
i__34537 = G__34558;
continue;
} else {
var vec__34547 = cljs.core.first.call(null,seq__34534__$1);
var k = cljs.core.nth.call(null,vec__34547,(0),null);
var plugin = cljs.core.nth.call(null,vec__34547,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34559 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34534,chunk__34535,count__34536,i__34537,pl_34559,vec__34547,k,plugin,seq__34534__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34559.call(null,msg_hist);
});})(seq__34534,chunk__34535,count__34536,i__34537,pl_34559,vec__34547,k,plugin,seq__34534__$1,temp__5735__auto__))
);
} else {
}


var G__34560 = cljs.core.next.call(null,seq__34534__$1);
var G__34561 = null;
var G__34562 = (0);
var G__34563 = (0);
seq__34534 = G__34560;
chunk__34535 = G__34561;
count__34536 = G__34562;
i__34537 = G__34563;
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
var G__34565 = arguments.length;
switch (G__34565) {
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

var seq__34566_34571 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34567_34572 = null;
var count__34568_34573 = (0);
var i__34569_34574 = (0);
while(true){
if((i__34569_34574 < count__34568_34573)){
var msg_34575 = cljs.core._nth.call(null,chunk__34567_34572,i__34569_34574);
figwheel.client.socket.handle_incoming_message.call(null,msg_34575);


var G__34576 = seq__34566_34571;
var G__34577 = chunk__34567_34572;
var G__34578 = count__34568_34573;
var G__34579 = (i__34569_34574 + (1));
seq__34566_34571 = G__34576;
chunk__34567_34572 = G__34577;
count__34568_34573 = G__34578;
i__34569_34574 = G__34579;
continue;
} else {
var temp__5735__auto___34580 = cljs.core.seq.call(null,seq__34566_34571);
if(temp__5735__auto___34580){
var seq__34566_34581__$1 = temp__5735__auto___34580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34566_34581__$1)){
var c__5567__auto___34582 = cljs.core.chunk_first.call(null,seq__34566_34581__$1);
var G__34583 = cljs.core.chunk_rest.call(null,seq__34566_34581__$1);
var G__34584 = c__5567__auto___34582;
var G__34585 = cljs.core.count.call(null,c__5567__auto___34582);
var G__34586 = (0);
seq__34566_34571 = G__34583;
chunk__34567_34572 = G__34584;
count__34568_34573 = G__34585;
i__34569_34574 = G__34586;
continue;
} else {
var msg_34587 = cljs.core.first.call(null,seq__34566_34581__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34587);


var G__34588 = cljs.core.next.call(null,seq__34566_34581__$1);
var G__34589 = null;
var G__34590 = (0);
var G__34591 = (0);
seq__34566_34571 = G__34588;
chunk__34567_34572 = G__34589;
count__34568_34573 = G__34590;
i__34569_34574 = G__34591;
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
var len__5768__auto___34595 = arguments.length;
var i__5769__auto___34596 = (0);
while(true){
if((i__5769__auto___34596 < len__5768__auto___34595)){
args__5774__auto__.push((arguments[i__5769__auto___34596]));

var G__34597 = (i__5769__auto___34596 + (1));
i__5769__auto___34596 = G__34597;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((0) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5775__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34593){
var map__34594 = p__34593;
var map__34594__$1 = cljs.core.__destructure_map.call(null,map__34594);
var opts = map__34594__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34592){
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34592));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34598){if((e34598 instanceof Error)){
var e = e34598;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34598;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__34599){
var map__34600 = p__34599;
var map__34600__$1 = cljs.core.__destructure_map.call(null,map__34600);
var msg_name = cljs.core.get.call(null,map__34600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1655379922259
