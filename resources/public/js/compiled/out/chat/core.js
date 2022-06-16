// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('chat.core');
goog.require('cljs.core');
goog.require('chord.client');
goog.require('cljs.core.async');

/**
 * @define {string}
 */
chat.core.ws_url = goog.define("chat.core.ws_url","ws://localhost:3449/ws");
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hola",chat.core.ws_url);
cljs.core.println.call(null,"going to channel");
chat.core.send_message = (function chat$core$send_message(channel,message){
cljs.core.println.call(null,"going to send");

var c__33097__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33098__auto__ = (function (){var switch__33072__auto__ = (function (state_33355){
var state_val_33356 = (state_33355[(1)]);
if((state_val_33356 === (1))){
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33355__$1,(2),channel,message);
} else {
if((state_val_33356 === (2))){
var inst_33353 = (state_33355[(2)]);
var state_33355__$1 = state_33355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33355__$1,inst_33353);
} else {
return null;
}
}
});
return (function() {
var chat$core$send_message_$_state_machine__33073__auto__ = null;
var chat$core$send_message_$_state_machine__33073__auto____0 = (function (){
var statearr_33357 = [null,null,null,null,null,null,null];
(statearr_33357[(0)] = chat$core$send_message_$_state_machine__33073__auto__);

(statearr_33357[(1)] = (1));

return statearr_33357;
});
var chat$core$send_message_$_state_machine__33073__auto____1 = (function (state_33355){
while(true){
var ret_value__33074__auto__ = (function (){try{while(true){
var result__33075__auto__ = switch__33072__auto__.call(null,state_33355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33075__auto__;
}
break;
}
}catch (e33358){var ex__33076__auto__ = e33358;
var statearr_33359_33362 = state_33355;
(statearr_33359_33362[(2)] = ex__33076__auto__);


if(cljs.core.seq.call(null,(state_33355[(4)]))){
var statearr_33360_33363 = state_33355;
(statearr_33360_33363[(1)] = cljs.core.first.call(null,(state_33355[(4)])));

} else {
throw ex__33076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33364 = state_33355;
state_33355 = G__33364;
continue;
} else {
return ret_value__33074__auto__;
}
break;
}
});
chat$core$send_message_$_state_machine__33073__auto__ = function(state_33355){
switch(arguments.length){
case 0:
return chat$core$send_message_$_state_machine__33073__auto____0.call(this);
case 1:
return chat$core$send_message_$_state_machine__33073__auto____1.call(this,state_33355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$send_message_$_state_machine__33073__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$send_message_$_state_machine__33073__auto____0;
chat$core$send_message_$_state_machine__33073__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$send_message_$_state_machine__33073__auto____1;
return chat$core$send_message_$_state_machine__33073__auto__;
})()
})();
var state__33099__auto__ = (function (){var statearr_33361 = f__33098__auto__.call(null);
(statearr_33361[(6)] = c__33097__auto__);

return statearr_33361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33099__auto__);
}));

return c__33097__auto__;
});
chat.core.connect = (function chat$core$connect(){
cljs.core.println.call(null,"in connect");

var c__33097__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33098__auto__ = (function (){var switch__33072__auto__ = (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (1))){
var inst_33365 = cljs.core.println.call(null,"gog go go");
var inst_33367 = chord.client.ws_ch.call(null,chat.core.ws_url);
var state_33382__$1 = (function (){var statearr_33384 = state_33382;
(statearr_33384[(7)] = inst_33365);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33382__$1,(2),inst_33367);
} else {
if((state_val_33383 === (2))){
var inst_33369 = (state_33382[(2)]);
var inst_33370 = cljs.core.__destructure_map.call(null,inst_33369);
var inst_33371 = cljs.core.get.call(null,inst_33370,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_33372 = cljs.core.get.call(null,inst_33370,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_33373 = cljs.core.println.call(null,"in go: let");
var state_33382__$1 = (function (){var statearr_33385 = state_33382;
(statearr_33385[(8)] = inst_33371);

(statearr_33385[(9)] = inst_33373);

return statearr_33385;
})();
if(cljs.core.truth_(inst_33372)){
var statearr_33386_33396 = state_33382__$1;
(statearr_33386_33396[(1)] = (3));

} else {
var statearr_33387_33397 = state_33382__$1;
(statearr_33387_33397[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (3))){
var inst_33375 = cljs.core.println.call(null,"Something went wrong with the websocket");
var state_33382__$1 = state_33382;
var statearr_33388_33398 = state_33382__$1;
(statearr_33388_33398[(2)] = inst_33375);

(statearr_33388_33398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (4))){
var inst_33371 = (state_33382[(8)]);
var inst_33377 = cljs.core.println.call(null,"set-up sockets sending message");
var inst_33378 = chat.core.send_message.call(null,inst_33371,"hola des de client");
var state_33382__$1 = (function (){var statearr_33389 = state_33382;
(statearr_33389[(10)] = inst_33377);

return statearr_33389;
})();
var statearr_33390_33399 = state_33382__$1;
(statearr_33390_33399[(2)] = inst_33378);

(statearr_33390_33399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (5))){
var inst_33380 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33382__$1,inst_33380);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chat$core$connect_$_state_machine__33073__auto__ = null;
var chat$core$connect_$_state_machine__33073__auto____0 = (function (){
var statearr_33391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33391[(0)] = chat$core$connect_$_state_machine__33073__auto__);

(statearr_33391[(1)] = (1));

return statearr_33391;
});
var chat$core$connect_$_state_machine__33073__auto____1 = (function (state_33382){
while(true){
var ret_value__33074__auto__ = (function (){try{while(true){
var result__33075__auto__ = switch__33072__auto__.call(null,state_33382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33075__auto__;
}
break;
}
}catch (e33392){var ex__33076__auto__ = e33392;
var statearr_33393_33400 = state_33382;
(statearr_33393_33400[(2)] = ex__33076__auto__);


if(cljs.core.seq.call(null,(state_33382[(4)]))){
var statearr_33394_33401 = state_33382;
(statearr_33394_33401[(1)] = cljs.core.first.call(null,(state_33382[(4)])));

} else {
throw ex__33076__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33402 = state_33382;
state_33382 = G__33402;
continue;
} else {
return ret_value__33074__auto__;
}
break;
}
});
chat$core$connect_$_state_machine__33073__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return chat$core$connect_$_state_machine__33073__auto____0.call(this);
case 1:
return chat$core$connect_$_state_machine__33073__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$connect_$_state_machine__33073__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$connect_$_state_machine__33073__auto____0;
chat$core$connect_$_state_machine__33073__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$connect_$_state_machine__33073__auto____1;
return chat$core$connect_$_state_machine__33073__auto__;
})()
})();
var state__33099__auto__ = (function (){var statearr_33395 = f__33098__auto__.call(null);
(statearr_33395[(6)] = c__33097__auto__);

return statearr_33395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33099__auto__);
}));

return c__33097__auto__;
});
chat.core.connect.call(null);

//# sourceMappingURL=core.js.map?rel=1655362456025
