// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14761 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14763 = null;
var count__14764 = (0);
var i__14765 = (0);
while(true){
if((i__14765 < count__14764)){
var vec__14766 = cljs.core._nth.call(null,chunk__14763,i__14765);
var effect_key = cljs.core.nth.call(null,vec__14766,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14766,(1),null);
var temp__5455__auto___14782 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14782)){
var effect_fn_14783 = temp__5455__auto___14782;
effect_fn_14783.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14784 = seq__14762;
var G__14785 = chunk__14763;
var G__14786 = count__14764;
var G__14787 = (i__14765 + (1));
seq__14762 = G__14784;
chunk__14763 = G__14785;
count__14764 = G__14786;
i__14765 = G__14787;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14762);
if(temp__5457__auto__){
var seq__14762__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14762__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14762__$1);
var G__14788 = cljs.core.chunk_rest.call(null,seq__14762__$1);
var G__14789 = c__4351__auto__;
var G__14790 = cljs.core.count.call(null,c__4351__auto__);
var G__14791 = (0);
seq__14762 = G__14788;
chunk__14763 = G__14789;
count__14764 = G__14790;
i__14765 = G__14791;
continue;
} else {
var vec__14769 = cljs.core.first.call(null,seq__14762__$1);
var effect_key = cljs.core.nth.call(null,vec__14769,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14769,(1),null);
var temp__5455__auto___14792 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14792)){
var effect_fn_14793 = temp__5455__auto___14792;
effect_fn_14793.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14794 = cljs.core.next.call(null,seq__14762__$1);
var G__14795 = null;
var G__14796 = (0);
var G__14797 = (0);
seq__14762 = G__14794;
chunk__14763 = G__14795;
count__14764 = G__14796;
i__14765 = G__14797;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14599__auto___14798 = re_frame.interop.now.call(null);
var duration__14600__auto___14799 = (end__14599__auto___14798 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14600__auto___14799,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14599__auto___14798);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14761;
}} else {
var seq__14772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14773 = null;
var count__14774 = (0);
var i__14775 = (0);
while(true){
if((i__14775 < count__14774)){
var vec__14776 = cljs.core._nth.call(null,chunk__14773,i__14775);
var effect_key = cljs.core.nth.call(null,vec__14776,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14776,(1),null);
var temp__5455__auto___14800 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14800)){
var effect_fn_14801 = temp__5455__auto___14800;
effect_fn_14801.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14802 = seq__14772;
var G__14803 = chunk__14773;
var G__14804 = count__14774;
var G__14805 = (i__14775 + (1));
seq__14772 = G__14802;
chunk__14773 = G__14803;
count__14774 = G__14804;
i__14775 = G__14805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14772);
if(temp__5457__auto__){
var seq__14772__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14772__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14772__$1);
var G__14806 = cljs.core.chunk_rest.call(null,seq__14772__$1);
var G__14807 = c__4351__auto__;
var G__14808 = cljs.core.count.call(null,c__4351__auto__);
var G__14809 = (0);
seq__14772 = G__14806;
chunk__14773 = G__14807;
count__14774 = G__14808;
i__14775 = G__14809;
continue;
} else {
var vec__14779 = cljs.core.first.call(null,seq__14772__$1);
var effect_key = cljs.core.nth.call(null,vec__14779,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14779,(1),null);
var temp__5455__auto___14810 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14810)){
var effect_fn_14811 = temp__5455__auto___14810;
effect_fn_14811.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14812 = cljs.core.next.call(null,seq__14772__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14772 = G__14812;
chunk__14773 = G__14813;
count__14774 = G__14814;
i__14775 = G__14815;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__14816 = cljs.core.seq.call(null,value);
var chunk__14817 = null;
var count__14818 = (0);
var i__14819 = (0);
while(true){
if((i__14819 < count__14818)){
var map__14820 = cljs.core._nth.call(null,chunk__14817,i__14819);
var map__14820__$1 = ((((!((map__14820 == null)))?(((((map__14820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14820):map__14820);
var effect = map__14820__$1;
var ms = cljs.core.get.call(null,map__14820__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14820__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14816,chunk__14817,count__14818,i__14819,map__14820,map__14820__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14816,chunk__14817,count__14818,i__14819,map__14820,map__14820__$1,effect,ms,dispatch))
,ms);
}


var G__14824 = seq__14816;
var G__14825 = chunk__14817;
var G__14826 = count__14818;
var G__14827 = (i__14819 + (1));
seq__14816 = G__14824;
chunk__14817 = G__14825;
count__14818 = G__14826;
i__14819 = G__14827;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14816);
if(temp__5457__auto__){
var seq__14816__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14816__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14816__$1);
var G__14828 = cljs.core.chunk_rest.call(null,seq__14816__$1);
var G__14829 = c__4351__auto__;
var G__14830 = cljs.core.count.call(null,c__4351__auto__);
var G__14831 = (0);
seq__14816 = G__14828;
chunk__14817 = G__14829;
count__14818 = G__14830;
i__14819 = G__14831;
continue;
} else {
var map__14822 = cljs.core.first.call(null,seq__14816__$1);
var map__14822__$1 = ((((!((map__14822 == null)))?(((((map__14822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14822):map__14822);
var effect = map__14822__$1;
var ms = cljs.core.get.call(null,map__14822__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14822__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14816,chunk__14817,count__14818,i__14819,map__14822,map__14822__$1,effect,ms,dispatch,seq__14816__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14816,chunk__14817,count__14818,i__14819,map__14822,map__14822__$1,effect,ms,dispatch,seq__14816__$1,temp__5457__auto__))
,ms);
}


var G__14832 = cljs.core.next.call(null,seq__14816__$1);
var G__14833 = null;
var G__14834 = (0);
var G__14835 = (0);
seq__14816 = G__14832;
chunk__14817 = G__14833;
count__14818 = G__14834;
i__14819 = G__14835;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__14836 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14837 = null;
var count__14838 = (0);
var i__14839 = (0);
while(true){
if((i__14839 < count__14838)){
var event = cljs.core._nth.call(null,chunk__14837,i__14839);
re_frame.router.dispatch.call(null,event);


var G__14840 = seq__14836;
var G__14841 = chunk__14837;
var G__14842 = count__14838;
var G__14843 = (i__14839 + (1));
seq__14836 = G__14840;
chunk__14837 = G__14841;
count__14838 = G__14842;
i__14839 = G__14843;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14836);
if(temp__5457__auto__){
var seq__14836__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14836__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14836__$1);
var G__14844 = cljs.core.chunk_rest.call(null,seq__14836__$1);
var G__14845 = c__4351__auto__;
var G__14846 = cljs.core.count.call(null,c__4351__auto__);
var G__14847 = (0);
seq__14836 = G__14844;
chunk__14837 = G__14845;
count__14838 = G__14846;
i__14839 = G__14847;
continue;
} else {
var event = cljs.core.first.call(null,seq__14836__$1);
re_frame.router.dispatch.call(null,event);


var G__14848 = cljs.core.next.call(null,seq__14836__$1);
var G__14849 = null;
var G__14850 = (0);
var G__14851 = (0);
seq__14836 = G__14848;
chunk__14837 = G__14849;
count__14838 = G__14850;
i__14839 = G__14851;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14852 = cljs.core.seq.call(null,value);
var chunk__14853 = null;
var count__14854 = (0);
var i__14855 = (0);
while(true){
if((i__14855 < count__14854)){
var event = cljs.core._nth.call(null,chunk__14853,i__14855);
clear_event.call(null,event);


var G__14856 = seq__14852;
var G__14857 = chunk__14853;
var G__14858 = count__14854;
var G__14859 = (i__14855 + (1));
seq__14852 = G__14856;
chunk__14853 = G__14857;
count__14854 = G__14858;
i__14855 = G__14859;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14852);
if(temp__5457__auto__){
var seq__14852__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14852__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14852__$1);
var G__14860 = cljs.core.chunk_rest.call(null,seq__14852__$1);
var G__14861 = c__4351__auto__;
var G__14862 = cljs.core.count.call(null,c__4351__auto__);
var G__14863 = (0);
seq__14852 = G__14860;
chunk__14853 = G__14861;
count__14854 = G__14862;
i__14855 = G__14863;
continue;
} else {
var event = cljs.core.first.call(null,seq__14852__$1);
clear_event.call(null,event);


var G__14864 = cljs.core.next.call(null,seq__14852__$1);
var G__14865 = null;
var G__14866 = (0);
var G__14867 = (0);
seq__14852 = G__14864;
chunk__14853 = G__14865;
count__14854 = G__14866;
i__14855 = G__14867;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
