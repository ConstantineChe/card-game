// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24330){
var map__24331 = p__24330;
var map__24331__$1 = ((((!((map__24331 == null)))?(((((map__24331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);
var m = map__24331__$1;
var n = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24333_24355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24334_24356 = null;
var count__24335_24357 = (0);
var i__24336_24358 = (0);
while(true){
if((i__24336_24358 < count__24335_24357)){
var f_24359 = cljs.core._nth.call(null,chunk__24334_24356,i__24336_24358);
cljs.core.println.call(null,"  ",f_24359);


var G__24360 = seq__24333_24355;
var G__24361 = chunk__24334_24356;
var G__24362 = count__24335_24357;
var G__24363 = (i__24336_24358 + (1));
seq__24333_24355 = G__24360;
chunk__24334_24356 = G__24361;
count__24335_24357 = G__24362;
i__24336_24358 = G__24363;
continue;
} else {
var temp__5457__auto___24364 = cljs.core.seq.call(null,seq__24333_24355);
if(temp__5457__auto___24364){
var seq__24333_24365__$1 = temp__5457__auto___24364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24333_24365__$1)){
var c__4351__auto___24366 = cljs.core.chunk_first.call(null,seq__24333_24365__$1);
var G__24367 = cljs.core.chunk_rest.call(null,seq__24333_24365__$1);
var G__24368 = c__4351__auto___24366;
var G__24369 = cljs.core.count.call(null,c__4351__auto___24366);
var G__24370 = (0);
seq__24333_24355 = G__24367;
chunk__24334_24356 = G__24368;
count__24335_24357 = G__24369;
i__24336_24358 = G__24370;
continue;
} else {
var f_24371 = cljs.core.first.call(null,seq__24333_24365__$1);
cljs.core.println.call(null,"  ",f_24371);


var G__24372 = cljs.core.next.call(null,seq__24333_24365__$1);
var G__24373 = null;
var G__24374 = (0);
var G__24375 = (0);
seq__24333_24355 = G__24372;
chunk__24334_24356 = G__24373;
count__24335_24357 = G__24374;
i__24336_24358 = G__24375;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24376 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24376);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24376)))?cljs.core.second.call(null,arglists_24376):arglists_24376));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24337_24377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24338_24378 = null;
var count__24339_24379 = (0);
var i__24340_24380 = (0);
while(true){
if((i__24340_24380 < count__24339_24379)){
var vec__24341_24381 = cljs.core._nth.call(null,chunk__24338_24378,i__24340_24380);
var name_24382 = cljs.core.nth.call(null,vec__24341_24381,(0),null);
var map__24344_24383 = cljs.core.nth.call(null,vec__24341_24381,(1),null);
var map__24344_24384__$1 = ((((!((map__24344_24383 == null)))?(((((map__24344_24383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24344_24383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24344_24383):map__24344_24383);
var doc_24385 = cljs.core.get.call(null,map__24344_24384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24386 = cljs.core.get.call(null,map__24344_24384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24382);

cljs.core.println.call(null," ",arglists_24386);

if(cljs.core.truth_(doc_24385)){
cljs.core.println.call(null," ",doc_24385);
} else {
}


var G__24387 = seq__24337_24377;
var G__24388 = chunk__24338_24378;
var G__24389 = count__24339_24379;
var G__24390 = (i__24340_24380 + (1));
seq__24337_24377 = G__24387;
chunk__24338_24378 = G__24388;
count__24339_24379 = G__24389;
i__24340_24380 = G__24390;
continue;
} else {
var temp__5457__auto___24391 = cljs.core.seq.call(null,seq__24337_24377);
if(temp__5457__auto___24391){
var seq__24337_24392__$1 = temp__5457__auto___24391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24337_24392__$1)){
var c__4351__auto___24393 = cljs.core.chunk_first.call(null,seq__24337_24392__$1);
var G__24394 = cljs.core.chunk_rest.call(null,seq__24337_24392__$1);
var G__24395 = c__4351__auto___24393;
var G__24396 = cljs.core.count.call(null,c__4351__auto___24393);
var G__24397 = (0);
seq__24337_24377 = G__24394;
chunk__24338_24378 = G__24395;
count__24339_24379 = G__24396;
i__24340_24380 = G__24397;
continue;
} else {
var vec__24346_24398 = cljs.core.first.call(null,seq__24337_24392__$1);
var name_24399 = cljs.core.nth.call(null,vec__24346_24398,(0),null);
var map__24349_24400 = cljs.core.nth.call(null,vec__24346_24398,(1),null);
var map__24349_24401__$1 = ((((!((map__24349_24400 == null)))?(((((map__24349_24400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24349_24400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24349_24400):map__24349_24400);
var doc_24402 = cljs.core.get.call(null,map__24349_24401__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24403 = cljs.core.get.call(null,map__24349_24401__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24399);

cljs.core.println.call(null," ",arglists_24403);

if(cljs.core.truth_(doc_24402)){
cljs.core.println.call(null," ",doc_24402);
} else {
}


var G__24404 = cljs.core.next.call(null,seq__24337_24392__$1);
var G__24405 = null;
var G__24406 = (0);
var G__24407 = (0);
seq__24337_24377 = G__24404;
chunk__24338_24378 = G__24405;
count__24339_24379 = G__24406;
i__24340_24380 = G__24407;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__24351 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24352 = null;
var count__24353 = (0);
var i__24354 = (0);
while(true){
if((i__24354 < count__24353)){
var role = cljs.core._nth.call(null,chunk__24352,i__24354);
var temp__5457__auto___24408__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24408__$1)){
var spec_24409 = temp__5457__auto___24408__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24409));
} else {
}


var G__24410 = seq__24351;
var G__24411 = chunk__24352;
var G__24412 = count__24353;
var G__24413 = (i__24354 + (1));
seq__24351 = G__24410;
chunk__24352 = G__24411;
count__24353 = G__24412;
i__24354 = G__24413;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__24351);
if(temp__5457__auto____$1){
var seq__24351__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24351__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__24351__$1);
var G__24414 = cljs.core.chunk_rest.call(null,seq__24351__$1);
var G__24415 = c__4351__auto__;
var G__24416 = cljs.core.count.call(null,c__4351__auto__);
var G__24417 = (0);
seq__24351 = G__24414;
chunk__24352 = G__24415;
count__24353 = G__24416;
i__24354 = G__24417;
continue;
} else {
var role = cljs.core.first.call(null,seq__24351__$1);
var temp__5457__auto___24418__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24418__$2)){
var spec_24419 = temp__5457__auto___24418__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24419));
} else {
}


var G__24420 = cljs.core.next.call(null,seq__24351__$1);
var G__24421 = null;
var G__24422 = (0);
var G__24423 = (0);
seq__24351 = G__24420;
chunk__24352 = G__24421;
count__24353 = G__24422;
i__24354 = G__24423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
