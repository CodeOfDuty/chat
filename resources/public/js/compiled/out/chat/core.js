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
if((typeof chat !== 'undefined') && (typeof chat.core !== 'undefined') && (typeof chat.core.received !== 'undefined')){
} else {
chat.core.received = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hola",chat.core.ws_url);
cljs.core.println.call(null,"going to channel");
chat.core.send_message = (function chat$core$send_message(channel,message){
cljs.core.println.call(null,"going to send");

var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33819){
var state_val_33820 = (state_33819[(1)]);
if((state_val_33820 === (1))){
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33819__$1,(2),channel,message);
} else {
if((state_val_33820 === (2))){
var inst_33817 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33819__$1,inst_33817);
} else {
return null;
}
}
});
return (function() {
var chat$core$send_message_$_state_machine__33234__auto__ = null;
var chat$core$send_message_$_state_machine__33234__auto____0 = (function (){
var statearr_33821 = [null,null,null,null,null,null,null];
(statearr_33821[(0)] = chat$core$send_message_$_state_machine__33234__auto__);

(statearr_33821[(1)] = (1));

return statearr_33821;
});
var chat$core$send_message_$_state_machine__33234__auto____1 = (function (state_33819){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33822){var ex__33237__auto__ = e33822;
var statearr_33823_33826 = state_33819;
(statearr_33823_33826[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33819[(4)]))){
var statearr_33824_33827 = state_33819;
(statearr_33824_33827[(1)] = cljs.core.first.call(null,(state_33819[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33828 = state_33819;
state_33819 = G__33828;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$send_message_$_state_machine__33234__auto__ = function(state_33819){
switch(arguments.length){
case 0:
return chat$core$send_message_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$send_message_$_state_machine__33234__auto____1.call(this,state_33819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$send_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$send_message_$_state_machine__33234__auto____0;
chat$core$send_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$send_message_$_state_machine__33234__auto____1;
return chat$core$send_message_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33825 = f__33257__auto__.call(null);
(statearr_33825[(6)] = c__33256__auto__);

return statearr_33825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.receive_message = (function chat$core$receive_message(channel){
var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33841){
var state_val_33842 = (state_33841[(1)]);
if((state_val_33842 === (1))){
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33841__$1,(2),channel);
} else {
if((state_val_33842 === (2))){
var inst_33831 = (state_33841[(7)]);
var inst_33830 = (state_33841[(2)]);
var inst_33831__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_33830);
var state_33841__$1 = (function (){var statearr_33843 = state_33841;
(statearr_33843[(7)] = inst_33831__$1);

return statearr_33843;
})();
if(cljs.core.truth_(inst_33831__$1)){
var statearr_33844_33854 = state_33841__$1;
(statearr_33844_33854[(1)] = (3));

} else {
var statearr_33845_33855 = state_33841__$1;
(statearr_33845_33855[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (3))){
var inst_33831 = (state_33841[(7)]);
var inst_33833 = cljs.core.println.call(null,"Server says:",inst_33831);
var inst_33834 = cljs.core.swap_BANG_.call(null,chat.core.received,cljs.core.conj,inst_33831);
var inst_33835 = cljs.core.println.call(null,"Received: ",chat.core.received);
var state_33841__$1 = (function (){var statearr_33846 = state_33841;
(statearr_33846[(8)] = inst_33834);

(statearr_33846[(9)] = inst_33833);

return statearr_33846;
})();
var statearr_33847_33856 = state_33841__$1;
(statearr_33847_33856[(2)] = inst_33835);

(statearr_33847_33856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (4))){
var inst_33837 = cljs.core.println.call(null,"Socket closed");
var state_33841__$1 = state_33841;
var statearr_33848_33857 = state_33841__$1;
(statearr_33848_33857[(2)] = inst_33837);

(statearr_33848_33857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (5))){
var inst_33839 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33841__$1,inst_33839);
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
var statearr_33849 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33849[(0)] = chat$core$receive_message_$_state_machine__33234__auto__);

(statearr_33849[(1)] = (1));

return statearr_33849;
});
var chat$core$receive_message_$_state_machine__33234__auto____1 = (function (state_33841){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33850){var ex__33237__auto__ = e33850;
var statearr_33851_33858 = state_33841;
(statearr_33851_33858[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33841[(4)]))){
var statearr_33852_33859 = state_33841;
(statearr_33852_33859[(1)] = cljs.core.first.call(null,(state_33841[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33860 = state_33841;
state_33841 = G__33860;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$receive_message_$_state_machine__33234__auto__ = function(state_33841){
switch(arguments.length){
case 0:
return chat$core$receive_message_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$receive_message_$_state_machine__33234__auto____1.call(this,state_33841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$receive_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$receive_message_$_state_machine__33234__auto____0;
chat$core$receive_message_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$receive_message_$_state_machine__33234__auto____1;
return chat$core$receive_message_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33853 = f__33257__auto__.call(null);
(statearr_33853[(6)] = c__33256__auto__);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.connect = (function chat$core$connect(){
cljs.core.println.call(null,"in connect");

var c__33256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__33257__auto__ = (function (){var switch__33233__auto__ = (function (state_33879){
var state_val_33880 = (state_33879[(1)]);
if((state_val_33880 === (1))){
var inst_33861 = cljs.core.println.call(null,"gog go go");
var inst_33863 = chord.client.ws_ch.call(null,chat.core.ws_url);
var state_33879__$1 = (function (){var statearr_33881 = state_33879;
(statearr_33881[(7)] = inst_33861);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33879__$1,(2),inst_33863);
} else {
if((state_val_33880 === (2))){
var inst_33865 = (state_33879[(2)]);
var inst_33866 = cljs.core.__destructure_map.call(null,inst_33865);
var inst_33867 = cljs.core.get.call(null,inst_33866,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_33868 = cljs.core.get.call(null,inst_33866,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_33869 = cljs.core.println.call(null,"in go: let");
var state_33879__$1 = (function (){var statearr_33882 = state_33879;
(statearr_33882[(8)] = inst_33869);

(statearr_33882[(9)] = inst_33867);

return statearr_33882;
})();
if(cljs.core.truth_(inst_33868)){
var statearr_33883_33893 = state_33879__$1;
(statearr_33883_33893[(1)] = (3));

} else {
var statearr_33884_33894 = state_33879__$1;
(statearr_33884_33894[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33880 === (3))){
var inst_33871 = cljs.core.println.call(null,"Something went wrong with the websocket");
var state_33879__$1 = state_33879;
var statearr_33885_33895 = state_33879__$1;
(statearr_33885_33895[(2)] = inst_33871);

(statearr_33885_33895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33880 === (4))){
var inst_33867 = (state_33879[(9)]);
var inst_33873 = cljs.core.println.call(null,"set-up sockets sending message");
var inst_33874 = chat.core.send_message.call(null,inst_33867,"hola des de client");
var inst_33875 = chat.core.receive_message.call(null,inst_33867);
var state_33879__$1 = (function (){var statearr_33886 = state_33879;
(statearr_33886[(10)] = inst_33873);

(statearr_33886[(11)] = inst_33874);

return statearr_33886;
})();
var statearr_33887_33896 = state_33879__$1;
(statearr_33887_33896[(2)] = inst_33875);

(statearr_33887_33896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33880 === (5))){
var inst_33877 = (state_33879[(2)]);
var state_33879__$1 = state_33879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33879__$1,inst_33877);
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
var statearr_33888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = chat$core$connect_$_state_machine__33234__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var chat$core$connect_$_state_machine__33234__auto____1 = (function (state_33879){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_33879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e33889){var ex__33237__auto__ = e33889;
var statearr_33890_33897 = state_33879;
(statearr_33890_33897[(2)] = ex__33237__auto__);


if(cljs.core.seq.call(null,(state_33879[(4)]))){
var statearr_33891_33898 = state_33879;
(statearr_33891_33898[(1)] = cljs.core.first.call(null,(state_33879[(4)])));

} else {
throw ex__33237__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33899 = state_33879;
state_33879 = G__33899;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
chat$core$connect_$_state_machine__33234__auto__ = function(state_33879){
switch(arguments.length){
case 0:
return chat$core$connect_$_state_machine__33234__auto____0.call(this);
case 1:
return chat$core$connect_$_state_machine__33234__auto____1.call(this,state_33879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chat$core$connect_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = chat$core$connect_$_state_machine__33234__auto____0;
chat$core$connect_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = chat$core$connect_$_state_machine__33234__auto____1;
return chat$core$connect_$_state_machine__33234__auto__;
})()
})();
var state__33258__auto__ = (function (){var statearr_33892 = f__33257__auto__.call(null);
(statearr_33892[(6)] = c__33256__auto__);

return statearr_33892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33258__auto__);
}));

return c__33256__auto__;
});
chat.core.connect.call(null);
chat.core.app_container = (function chat$core$app_container(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Second title"], null);

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"a paragraph"], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Server message : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chat.core.received))].join('')], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat.core.app_container], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1655482422645
