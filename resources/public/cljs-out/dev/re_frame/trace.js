// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14621){
var map__14622 = p__14621;
var map__14622__$1 = ((((!((map__14622 == null)))?(((((map__14622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14622):map__14622);
var operation = cljs.core.get.call(null,map__14622__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__14622__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__14622__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__14622__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__14624_14636 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__14625_14637 = null;
var count__14626_14638 = (0);
var i__14627_14639 = (0);
while(true){
if((i__14627_14639 < count__14626_14638)){
var vec__14628_14640 = cljs.core._nth.call(null,chunk__14625_14637,i__14627_14639);
var k_14641 = cljs.core.nth.call(null,vec__14628_14640,(0),null);
var cb_14642 = cljs.core.nth.call(null,vec__14628_14640,(1),null);
try{cb_14642.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e14631){var e_14643 = e14631;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_14641,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_14643);
}

var G__14644 = seq__14624_14636;
var G__14645 = chunk__14625_14637;
var G__14646 = count__14626_14638;
var G__14647 = (i__14627_14639 + (1));
seq__14624_14636 = G__14644;
chunk__14625_14637 = G__14645;
count__14626_14638 = G__14646;
i__14627_14639 = G__14647;
continue;
} else {
var temp__5457__auto___14648 = cljs.core.seq.call(null,seq__14624_14636);
if(temp__5457__auto___14648){
var seq__14624_14649__$1 = temp__5457__auto___14648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14624_14649__$1)){
var c__4351__auto___14650 = cljs.core.chunk_first.call(null,seq__14624_14649__$1);
var G__14651 = cljs.core.chunk_rest.call(null,seq__14624_14649__$1);
var G__14652 = c__4351__auto___14650;
var G__14653 = cljs.core.count.call(null,c__4351__auto___14650);
var G__14654 = (0);
seq__14624_14636 = G__14651;
chunk__14625_14637 = G__14652;
count__14626_14638 = G__14653;
i__14627_14639 = G__14654;
continue;
} else {
var vec__14632_14655 = cljs.core.first.call(null,seq__14624_14649__$1);
var k_14656 = cljs.core.nth.call(null,vec__14632_14655,(0),null);
var cb_14657 = cljs.core.nth.call(null,vec__14632_14655,(1),null);
try{cb_14657.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e14635){var e_14658 = e14635;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_14656,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_14658);
}

var G__14659 = cljs.core.next.call(null,seq__14624_14649__$1);
var G__14660 = null;
var G__14661 = (0);
var G__14662 = (0);
seq__14624_14636 = G__14659;
chunk__14625_14637 = G__14660;
count__14626_14638 = G__14661;
i__14627_14639 = G__14662;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
