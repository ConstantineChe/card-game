// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11279__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11280__i = 0, G__11280__a = new Array(arguments.length -  0);
while (G__11280__i < G__11280__a.length) {G__11280__a[G__11280__i] = arguments[G__11280__i + 0]; ++G__11280__i;}
  args = new cljs.core.IndexedSeq(G__11280__a,0,null);
} 
return G__11279__delegate.call(this,args);};
G__11279.cljs$lang$maxFixedArity = 0;
G__11279.cljs$lang$applyTo = (function (arglist__11281){
var args = cljs.core.seq(arglist__11281);
return G__11279__delegate(args);
});
G__11279.cljs$core$IFn$_invoke$arity$variadic = G__11279__delegate;
return G__11279;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11282__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11283__i = 0, G__11283__a = new Array(arguments.length -  0);
while (G__11283__i < G__11283__a.length) {G__11283__a[G__11283__i] = arguments[G__11283__i + 0]; ++G__11283__i;}
  args = new cljs.core.IndexedSeq(G__11283__a,0,null);
} 
return G__11282__delegate.call(this,args);};
G__11282.cljs$lang$maxFixedArity = 0;
G__11282.cljs$lang$applyTo = (function (arglist__11284){
var args = cljs.core.seq(arglist__11284);
return G__11282__delegate(args);
});
G__11282.cljs$core$IFn$_invoke$arity$variadic = G__11282__delegate;
return G__11282;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
