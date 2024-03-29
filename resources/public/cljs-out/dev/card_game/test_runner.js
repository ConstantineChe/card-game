// Compiled by ClojureScript 1.10.339 {}
goog.provide('card_game.test_runner');
goog.require('cljs.core');
goog.require('card_game.core_test');
goog.require('figwheel.main.testing');
card_game.test_runner._main = (function card_game$test_runner$_main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24439 = arguments.length;
var i__4532__auto___24440 = (0);
while(true){
if((i__4532__auto___24440 < len__4531__auto___24439)){
args__4534__auto__.push((arguments[i__4532__auto___24440]));

var G__24441 = (i__4532__auto___24440 + (1));
i__4532__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return card_game.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

card_game.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5492__auto___24442 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5492__auto___24442))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5492__auto___24442,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__5492__auto___24442){
return (function (m__5493__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5493__auto__);
});})(reporter__5492__auto___24442))
);
}

cljs.test.run_block.call(null,(function (){var env24437 = cljs.test.empty_env.call(null);
var summary24438 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24437,summary24438,reporter__5492__auto___24442){
return (function (){
cljs.test.set_env_BANG_.call(null,env24437);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"card-game.test-runner","card-game.test-runner",815470537,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10571__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10571__auto__,env24437,summary24438,reporter__5492__auto___24442){
return (function (){
if((env__10571__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10571__auto__,env24437,summary24438,reporter__5492__auto___24442))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10571__auto__,env24437,summary24438,reporter__5492__auto___24442){
return (function (){
if((env__10571__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10571__auto__,env24437,summary24438,reporter__5492__auto___24442))
], null));
})());
});})(env24437,summary24438,reporter__5492__auto___24442))
,((function (env24437,summary24438,reporter__5492__auto___24442){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"card-game.test-runner","card-game.test-runner",815470537,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24437,summary24438,reporter__5492__auto___24442))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24437,summary24438,reporter__5492__auto___24442){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24438,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24438),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24437,summary24438,reporter__5492__auto___24442))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24437,summary24438,reporter__5492__auto___24442){
return (function (){
cljs.test.set_env_BANG_.call(null,env24437);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary24438));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary24438),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env24437,summary24438,reporter__5492__auto___24442))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

card_game.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
card_game.test_runner._main.cljs$lang$applyTo = (function (seq24436){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24436));
});


//# sourceMappingURL=test_runner.js.map
