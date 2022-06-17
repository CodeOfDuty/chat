// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('chat.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
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

var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33380){
var state_val_33381 = (state_33380[(1)]);
if((state_val_33381 === (1))){
var state_33380__$1 = state_33380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33380__$1,(2),channel,message);
} else {
if((state_val_33381 === (2))){
var inst_33378 = (state_33380[(2)]);
var state_33380__$1 = state_33380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33380__$1,inst_33378);
} else {
return null;
}
}
});
return (function() {
var chat$core$send_message_$_state_machine__33234__auto__ = null;
var chat$core$send_message_$_state_machine__33234__auto____0 = (function (){
var statearr_33382 = [null,null,null,null,null,null,null];
(statearr_33382[(0)] = chat$core$send_message_$_state_machine__33234__auto__);

(statearr_33382[(1)] = (1));

return statearr_33382;
});
var chat$core$send_message_$_state_machine__33234__auto____1 = (function (state_33380){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33383){var ex__33237__auto__ = e33383;
var statearr_33384_33387 = state_33380;
(statearr_33384_33387[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33380[(4)]))){
var statearr_33385_33388 = state_33380;
(statearr_33385_33388[(1)] = cljs.core.first.call(null,(state_33380[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33389 = state_33380;
state_33380 = G__33389;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$send_message_$_state_machine__33234__auto__ = function(state_33380){
switch(arguments.length){
case 0:
return chat$core$send_message_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$send_message_$_state_machine__33234__auto____1.call(this,state_33380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$send_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$send_message_$_state_machine__33234__auto____0;
chat$core$send_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$send_message_$_state_machine__33234__auto____1;
return chat$core$send_message_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33386 = f__33257__auto__.call(null);
(statearr_33386[(6)] = c__33256__auto__);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.receive_message = (function chat$core$receive_message(channel){
var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33400){
var state_val_33401 = (state_33400[(1)]);
if((state_val_33401 === (1))){
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33400__$1,(2),channel);
} else {
if((state_val_33401 === (2))){
var inst_33392 = (state_33400[(7)]);
var inst_33391 = (state_33400[(2)]);
var inst_33392__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_33391);
var state_33400__$1 = (function (){var statearr_33402 = state_33400;
(statearr_33402[(7)] = inst_33392__$1);

return statearr_33402;
})();
if(cljs.core.truth_(inst_33392__$1)){
var statearr_33403_33412 = state_33400__$1;
(statearr_33403_33412[(1)] = (3));

} else {
var statearr_33404_33413 = state_33400__$1;
(statearr_33404_33413[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (3))){
var inst_33392 = (state_33400[(7)]);
var inst_33394 = cljs.core.println.call(null,inst_33392);
var state_33400__$1 = state_33400;
var statearr_33405_33414 = state_33400__$1;
(statearr_33405_33414[(2)] = inst_33394);

(statearr_33405_33414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (4))){
var inst_33396 = cljs.core.println.call(null,"Socket closed");
var state_33400__$1 = state_33400;
var statearr_33406_33415 = state_33400__$1;
(statearr_33406_33415[(2)] = inst_33396);

(statearr_33406_33415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (5))){
var inst_33398 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33400__$1,inst_33398);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chat$core$receive_message_$_state_machine__33234__auto__ = null;
var chat$core$receive_message_$_state_machine__33234__auto____0 = (function (){
var statearr_33407 = [null,null,null,null,null,null,null,null];
(statearr_33407[(0)] = chat$core$receive_message_$_state_machine__33234__auto__);

(statearr_33407[(1)] = (1));

return statearr_33407;
});
var chat$core$receive_message_$_state_machine__33234__auto____1 = (function (state_33400){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33408){var ex__33237__auto__ = e33408;
var statearr_33409_33416 = state_33400;
(statearr_33409_33416[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33400[(4)]))){
var statearr_33410_33417 = state_33400;
(statearr_33410_33417[(1)] = cljs.core.first.call(null,(state_33400[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33418 = state_33400;
state_33400 = G__33418;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$receive_message_$_state_machine__33234__auto__ = function(state_33400){
switch(arguments.length){
case 0:
return chat$core$receive_message_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$receive_message_$_state_machine__33234__auto____1.call(this,state_33400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$receive_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$receive_message_$_state_machine__33234__auto____0;
chat$core$receive_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$receive_message_$_state_machine__33234__auto____1;
return chat$core$receive_message_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33411 = f__33257__auto__.call(null);
(statearr_33411[(6)] = c__33256__auto__);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.connect = (function chat$core$connect(){
cljs.core.println.call(null,"in connect");

var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33437){
var state_val_33438 = (state_33437[(1)]);
if((state_val_33438 === (1))){
var inst_33419 = cljs.core.println.call(null,"gog go go");
var inst_33421 = chord.client.ws_ch.call(null,chat.core.ws_url);
var state_33437__$1 = (function (){var statearr_33439 = state_33437;
(statearr_33439[(7)] = inst_33419);

return statearr_33439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33437__$1,(2),inst_33421);
} else {
if((state_val_33438 === (2))){
var inst_33423 = (state_33437[(2)]);
var inst_33424 = cljs.core.__destructure_map.call(null,inst_33423);
var inst_33425 = cljs.core.get.call(null,inst_33424,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_33426 = cljs.core.get.call(null,inst_33424,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_33427 = cljs.core.println.call(null,"in go: let");
var state_33437__$1 = (function (){var statearr_33440 = state_33437;
(statearr_33440[(8)] = inst_33427);

(statearr_33440[(9)] = inst_33425);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33426)){
var statearr_33441_33451 = state_33437__$1;
(statearr_33441_33451[(1)] = (3));

} else {
var statearr_33442_33452 = state_33437__$1;
(statearr_33442_33452[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (3))){
var inst_33429 = cljs.core.println.call(null,"Something went wrong with the websocket");
var state_33437__$1 = state_33437;
var statearr_33443_33453 = state_33437__$1;
(statearr_33443_33453[(2)] = inst_33429);

(statearr_33443_33453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (4))){
var inst_33425 = (state_33437[(9)]);
var inst_33431 = cljs.core.println.call(null,"set-up sockets sending message");
var inst_33432 = chat.core.send_message.call(null,inst_33425,"hola des de client");
var inst_33433 = chat.core.receive_message.call(null,inst_33425);
var state_33437__$1 = (function (){var statearr_33444 = state_33437;
(statearr_33444[(10)] = inst_33432);

(statearr_33444[(11)] = inst_33431);

return statearr_33444;
})();
var statearr_33445_33454 = state_33437__$1;
(statearr_33445_33454[(2)] = inst_33433);

(statearr_33445_33454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (5))){
var inst_33435 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33437__$1,inst_33435);
} else {
return null;
}
}
}
}
}
});
return (function() {
var chat$core$connect_$_state_machine__33234__auto__ = null;
var chat$core$connect_$_state_machine__33234__auto____0 = (function (){
var statearr_33446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33446[(0)] = chat$core$connect_$_state_machine__33234__auto__);

(statearr_33446[(1)] = (1));

return statearr_33446;
});
var chat$core$connect_$_state_machine__33234__auto____1 = (function (state_33437){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33447){var ex__33237__auto__ = e33447;
var statearr_33448_33455 = state_33437;
(statearr_33448_33455[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33437[(4)]))){
var statearr_33449_33456 = state_33437;
(statearr_33449_33456[(1)] = cljs.core.first.call(null,(state_33437[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33457 = state_33437;
state_33437 = G__33457;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$connect_$_state_machine__33234__auto__ = function(state_33437){
switch(arguments.length){
case 0:
return chat$core$connect_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$connect_$_state_machine__33234__auto____1.call(this,state_33437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$connect_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$connect_$_state_machine__33234__auto____0;
chat$core$connect_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$connect_$_state_machine__33234__auto____1;
return chat$core$connect_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33450 = f__33257__auto__.call(null);
(statearr_33450[(6)] = c__33256__auto__);

return statearr_33450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.connect.call(null);
chat.core.app_container = (function chat$core$app_container(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Second title"], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"a paragraph"], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat.core.app_container], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1655480356818
