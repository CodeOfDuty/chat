// Compiled by ClojureScript 1.11.57 {:optimizations :none}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.heads_up.goog$module$goog$object = goog.module.get('goog.object');
});

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__5774__auto__ = [];
var len__5768__auto___33964 = arguments.length;
var i__5769__auto___33965 = (0);
while(true){
if((i__5769__auto___33965 < len__5768__auto___33964)){
args__5774__auto__.push((arguments[i__5769__auto___33965]));

var G__33966 = (i__5769__auto___33965 + (1));
i__5769__auto___33965 = G__33966;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args__5774__auto__.length))?(new cljs.core.IndexedSeq(args__5774__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33956_33967 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33957_33968 = null;
var count__33958_33969 = (0);
var i__33959_33970 = (0);
while(true){
if((i__33959_33970 < count__33958_33969)){
var k_33971 = cljs.core._nth.call(null,chunk__33957_33968,i__33959_33970);
e.setAttribute(cljs.core.name.call(null,k_33971),cljs.core.get.call(null,attrs,k_33971));


var G__33972 = seq__33956_33967;
var G__33973 = chunk__33957_33968;
var G__33974 = count__33958_33969;
var G__33975 = (i__33959_33970 + (1));
seq__33956_33967 = G__33972;
chunk__33957_33968 = G__33973;
count__33958_33969 = G__33974;
i__33959_33970 = G__33975;
continue;
} else {
var temp__5735__auto___33976 = cljs.core.seq.call(null,seq__33956_33967);
if(temp__5735__auto___33976){
var seq__33956_33977__$1 = temp__5735__auto___33976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33956_33977__$1)){
var c__5567__auto___33978 = cljs.core.chunk_first.call(null,seq__33956_33977__$1);
var G__33979 = cljs.core.chunk_rest.call(null,seq__33956_33977__$1);
var G__33980 = c__5567__auto___33978;
var G__33981 = cljs.core.count.call(null,c__5567__auto___33978);
var G__33982 = (0);
seq__33956_33967 = G__33979;
chunk__33957_33968 = G__33980;
count__33958_33969 = G__33981;
i__33959_33970 = G__33982;
continue;
} else {
var k_33983 = cljs.core.first.call(null,seq__33956_33977__$1);
e.setAttribute(cljs.core.name.call(null,k_33983),cljs.core.get.call(null,attrs,k_33983));


var G__33984 = cljs.core.next.call(null,seq__33956_33977__$1);
var G__33985 = null;
var G__33986 = (0);
var G__33987 = (0);
seq__33956_33967 = G__33984;
chunk__33957_33968 = G__33985;
count__33958_33969 = G__33986;
i__33959_33970 = G__33987;
continue;
}
} else {
}
}
break;
}

var seq__33960_33988 = cljs.core.seq.call(null,children);
var chunk__33961_33989 = null;
var count__33962_33990 = (0);
var i__33963_33991 = (0);
while(true){
if((i__33963_33991 < count__33962_33990)){
var ch_33992 = cljs.core._nth.call(null,chunk__33961_33989,i__33963_33991);
e.appendChild(ch_33992);


var G__33993 = seq__33960_33988;
var G__33994 = chunk__33961_33989;
var G__33995 = count__33962_33990;
var G__33996 = (i__33963_33991 + (1));
seq__33960_33988 = G__33993;
chunk__33961_33989 = G__33994;
count__33962_33990 = G__33995;
i__33963_33991 = G__33996;
continue;
} else {
var temp__5735__auto___33997 = cljs.core.seq.call(null,seq__33960_33988);
if(temp__5735__auto___33997){
var seq__33960_33998__$1 = temp__5735__auto___33997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33960_33998__$1)){
var c__5567__auto___33999 = cljs.core.chunk_first.call(null,seq__33960_33998__$1);
var G__34000 = cljs.core.chunk_rest.call(null,seq__33960_33998__$1);
var G__34001 = c__5567__auto___33999;
var G__34002 = cljs.core.count.call(null,c__5567__auto___33999);
var G__34003 = (0);
seq__33960_33988 = G__34000;
chunk__33961_33989 = G__34001;
count__33962_33990 = G__34002;
i__33963_33991 = G__34003;
continue;
} else {
var ch_34004 = cljs.core.first.call(null,seq__33960_33998__$1);
e.appendChild(ch_34004);


var G__34005 = cljs.core.next.call(null,seq__33960_33998__$1);
var G__34006 = null;
var G__34007 = (0);
var G__34008 = (0);
seq__33960_33988 = G__34005;
chunk__33961_33989 = G__34006;
count__33962_33990 = G__34007;
i__33963_33991 = G__34008;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33953){
var G__33954 = cljs.core.first.call(null,seq33953);
var seq33953__$1 = cljs.core.next.call(null,seq33953);
var G__33955 = cljs.core.first.call(null,seq33953__$1);
var seq33953__$2 = cljs.core.next.call(null,seq33953__$1);
var self__5753__auto__ = this;
return self__5753__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33954,G__33955,seq33953__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5645__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5645__auto__,method_table__5641__auto__,prefer_table__5642__auto__,method_cache__5643__auto__,cached_hierarchy__5644__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_34009 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_34009.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_34009.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_34009.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34009);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34010,st_map){
var map__34011 = p__34010;
var map__34011__$1 = cljs.core.__destructure_map.call(null,map__34011);
var container_el = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__34012){
var vec__34013 = p__34012;
var k = cljs.core.nth.call(null,vec__34013,(0),null);
var v = cljs.core.nth.call(null,vec__34013,(1),null);
return figwheel.client.heads_up.goog$module$goog$object.set.call(null,container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34016,dom_str){
var map__34017 = p__34016;
var map__34017__$1 = cljs.core.__destructure_map.call(null,map__34017);
var c = map__34017__$1;
var content_area_el = cljs.core.get.call(null,map__34017__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34018){
var map__34019 = p__34018;
var map__34019__$1 = cljs.core.__destructure_map.call(null,map__34019);
var content_area_el = cljs.core.get.call(null,map__34019__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34035){
var state_val_34036 = (state_34035[(1)]);
if((state_val_34036 === (1))){
var inst_34020 = (state_34035[(7)]);
var inst_34020__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34021 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34022 = ["10px","10px","100%","68px","1.0"];
var inst_34023 = cljs.core.PersistentHashMap.fromArrays(inst_34021,inst_34022);
var inst_34024 = cljs.core.merge.call(null,inst_34023,style);
var inst_34025 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34020__$1,inst_34024);
var inst_34026 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34020__$1,msg);
var inst_34027 = cljs.core.async.timeout.call(null,(300));
var state_34035__$1 = (function (){var statearr_34037 = state_34035;
(statearr_34037[(7)] = inst_34020__$1);

(statearr_34037[(8)] = inst_34025);

(statearr_34037[(9)] = inst_34026);

return statearr_34037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34035__$1,(2),inst_34027);
} else {
if((state_val_34036 === (2))){
var inst_34020 = (state_34035[(7)]);
var inst_34029 = (state_34035[(2)]);
var inst_34030 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34031 = ["auto"];
var inst_34032 = cljs.core.PersistentHashMap.fromArrays(inst_34030,inst_34031);
var inst_34033 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34020,inst_34032);
var state_34035__$1 = (function (){var statearr_34038 = state_34035;
(statearr_34038[(10)] = inst_34029);

return statearr_34038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34035__$1,inst_34033);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____0 = (function (){
var statearr_34039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34039[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__);

(statearr_34039[(1)] = (1));

return statearr_34039;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____1 = (function (state_34035){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34040){var ex__28453__auto__ = e34040;
var statearr_34041_34044 = state_34035;
(statearr_34041_34044[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34035[(4)]))){
var statearr_34042_34045 = state_34035;
(statearr_34042_34045[(1)] = cljs.core.first.call(null,(state_34035[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34046 = state_34035;
state_34035 = G__34046;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__ = function(state_34035){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____1.call(this,state_34035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34043 = f__28524__auto__.call(null);
(statearr_34043[(6)] = c__28523__auto__);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__34048 = arguments.length;
switch (G__34048) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__34050){
var map__34051 = p__34050;
var map__34051__$1 = cljs.core.__destructure_map.call(null,map__34051);
var file = cljs.core.get.call(null,map__34051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34051__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34051__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__5045__auto__ = file;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__34052){
var vec__34053 = p__34052;
var typ = cljs.core.nth.call(null,vec__34053,(0),null);
var line_number = cljs.core.nth.call(null,vec__34053,(1),null);
var line = cljs.core.nth.call(null,vec__34053,(2),null);
var pred__34056 = cljs.core._EQ_;
var expr__34057 = typ;
if(cljs.core.truth_(pred__34056.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__34057))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__34056.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__34057))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__34056.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__34057))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__34059_SHARP_){
return cljs.core.update_in.call(null,p1__34059_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__34060_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__34060_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__34063){
var map__34064 = p__34063;
var map__34064__$1 = cljs.core.__destructure_map.call(null,map__34064);
var exception = map__34064__$1;
var message = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__34064__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__5043__auto__ = file;
if(cljs.core.truth_(and__5043__auto__)){
return line;
} else {
return and__5043__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__34061_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34061_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__34062_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__34062_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__34062_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__34065){
var map__34066 = p__34065;
var map__34066__$1 = cljs.core.__destructure_map.call(null,map__34066);
var file = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__34068 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__34068__$1 = cljs.core.__destructure_map.call(null,map__34068);
var head = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__34070){
var map__34071 = p__34070;
var map__34071__$1 = cljs.core.__destructure_map.call(null,map__34071);
var warning_data = map__34071__$1;
var file = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__34071__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__5043__auto__ = file;
if(cljs.core.truth_(and__5043__auto__)){
return line;
} else {
return and__5043__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__34069_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34069_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__34072 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__34072__$1 = cljs.core.__destructure_map.call(null,map__34072);
var head = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34072__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__34073){
var map__34074 = p__34073;
var map__34074__$1 = cljs.core.__destructure_map.call(null,map__34074);
var warning_data = map__34074__$1;
var message = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34075 = message;
var G__34075__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34075)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34075);
var G__34075__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34075__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__34075__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34075__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__34075__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__34076){
var map__34077 = p__34076;
var map__34077__$1 = cljs.core.__destructure_map.call(null,map__34077);
var warning_data = map__34077__$1;
var message = cljs.core.get.call(null,map__34077__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34077__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34077__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__34078 = figwheel.client.heads_up.ensure_container.call(null);
var map__34078__$1 = cljs.core.__destructure_map.call(null,map__34078);
var content_area_el = cljs.core.get.call(null,map__34078__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5735__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5735__auto__)){
var last_child = temp__5735__auto__;
var temp__5733__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5733__auto__)){
var message_count = temp__5733__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34096){
var state_val_34097 = (state_34096[(1)]);
if((state_val_34097 === (1))){
var inst_34079 = (state_34096[(7)]);
var inst_34079__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34080 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34081 = ["0.0"];
var inst_34082 = cljs.core.PersistentHashMap.fromArrays(inst_34080,inst_34081);
var inst_34083 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34079__$1,inst_34082);
var inst_34084 = cljs.core.async.timeout.call(null,(300));
var state_34096__$1 = (function (){var statearr_34098 = state_34096;
(statearr_34098[(8)] = inst_34083);

(statearr_34098[(7)] = inst_34079__$1);

return statearr_34098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34096__$1,(2),inst_34084);
} else {
if((state_val_34097 === (2))){
var inst_34079 = (state_34096[(7)]);
var inst_34086 = (state_34096[(2)]);
var inst_34087 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34088 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34089 = cljs.core.PersistentHashMap.fromArrays(inst_34087,inst_34088);
var inst_34090 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34079,inst_34089);
var inst_34091 = cljs.core.async.timeout.call(null,(200));
var state_34096__$1 = (function (){var statearr_34099 = state_34096;
(statearr_34099[(9)] = inst_34086);

(statearr_34099[(10)] = inst_34090);

return statearr_34099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34096__$1,(3),inst_34091);
} else {
if((state_val_34097 === (3))){
var inst_34079 = (state_34096[(7)]);
var inst_34093 = (state_34096[(2)]);
var inst_34094 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34079,"");
var state_34096__$1 = (function (){var statearr_34100 = state_34096;
(statearr_34100[(11)] = inst_34093);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34096__$1,inst_34094);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28450__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28450__auto____0 = (function (){
var statearr_34101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34101[(0)] = figwheel$client$heads_up$clear_$_state_machine__28450__auto__);

(statearr_34101[(1)] = (1));

return statearr_34101;
});
var figwheel$client$heads_up$clear_$_state_machine__28450__auto____1 = (function (state_34096){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34102){var ex__28453__auto__ = e34102;
var statearr_34103_34106 = state_34096;
(statearr_34103_34106[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34096[(4)]))){
var statearr_34104_34107 = state_34096;
(statearr_34104_34107[(1)] = cljs.core.first.call(null,(state_34096[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34108 = state_34096;
state_34096 = G__34108;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28450__auto__ = function(state_34096){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28450__auto____1.call(this,state_34096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28450__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28450__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34105 = f__28524__auto__.call(null);
(statearr_34105[(6)] = c__28523__auto__);

return statearr_34105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28524__auto__ = (function (){var switch__28449__auto__ = (function (state_34119){
var state_val_34120 = (state_34119[(1)]);
if((state_val_34120 === (1))){
var inst_34109 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34119__$1 = state_34119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,(2),inst_34109);
} else {
if((state_val_34120 === (2))){
var inst_34111 = (state_34119[(2)]);
var inst_34112 = cljs.core.async.timeout.call(null,(400));
var state_34119__$1 = (function (){var statearr_34121 = state_34119;
(statearr_34121[(7)] = inst_34111);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,(3),inst_34112);
} else {
if((state_val_34120 === (3))){
var inst_34114 = (state_34119[(2)]);
var inst_34115 = figwheel.client.heads_up.clear.call(null);
var state_34119__$1 = (function (){var statearr_34122 = state_34119;
(statearr_34122[(8)] = inst_34114);

return statearr_34122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,(4),inst_34115);
} else {
if((state_val_34120 === (4))){
var inst_34117 = (state_34119[(2)]);
var state_34119__$1 = state_34119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34119__$1,inst_34117);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____0 = (function (){
var statearr_34123 = [null,null,null,null,null,null,null,null,null];
(statearr_34123[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__);

(statearr_34123[(1)] = (1));

return statearr_34123;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____1 = (function (state_34119){
while(true){
var ret_value__28451__auto__ = (function (){try{while(true){
var result__28452__auto__ = switch__28449__auto__.call(null,state_34119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28452__auto__;
}
break;
}
}catch (e34124){var ex__28453__auto__ = e34124;
var statearr_34125_34128 = state_34119;
(statearr_34125_34128[(2)] = ex__28453__auto__);


if(cljs.core.seq.call(null,(state_34119[(4)]))){
var statearr_34126_34129 = state_34119;
(statearr_34126_34129[(1)] = cljs.core.first.call(null,(state_34119[(4)])));

} else {
throw ex__28453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_34119;
state_34119 = G__34130;
continue;
} else {
return ret_value__28451__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__ = function(state_34119){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____1.call(this,state_34119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28450__auto__;
})()
})();
var state__28525__auto__ = (function (){var statearr_34127 = f__28524__auto__.call(null);
(statearr_34127[(6)] = c__28523__auto__);

return statearr_34127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28525__auto__);
}));

return c__28523__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5735__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1655379921929
