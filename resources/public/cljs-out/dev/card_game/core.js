// Compiled by ClojureScript 1.10.339 {}
goog.provide('card_game.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('card_game.ws');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('card_game.subs');
goog.require('card_game.events');
card_game.core.get_app_element = (function card_game$core$get_app_element(){
return goog.dom.getElement("app");
});
card_game.core.status = (function card_game$core$status(){
var status = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),((cljs.core.not.call(null,status))?"Connecting":"Connected")], null);
});
card_game.core.game_started_QMARK_ = (function card_game$core$game_started_QMARK_(){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"clone-clones","clone-clones",1264759715),null,new cljs.core.Keyword(null,"play-cards","play-cards",-88811607),null,new cljs.core.Keyword(null,"clone-imps","clone-imps",-1464245554),null,new cljs.core.Keyword(null,"discard-cards","discard-cards",804900829),null,new cljs.core.Keyword(null,"draw-cards","draw-cards",466307069),null], null), null),new cljs.core.Keyword(null,"game-phase","game-phase",456680589).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)))));
});
card_game.core.your_turn_QMARK_ = (function card_game$core$your_turn_QMARK_(){
return new cljs.core.Keyword(null,"your-turn","your-turn",1606246393).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"you?","you?",1709490002),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)))))));
});
card_game.core.game_phase_QMARK_ = (function card_game$core$game_phase_QMARK_(phase){
return cljs.core._EQ_.call(null,phase,new cljs.core.Keyword(null,"game-phase","game-phase",456680589).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)))));
});
card_game.core.card = (function card_game$core$card(){
var card = reagent.core.props.call(null,reagent.core.current_component.call(null));
var selected = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,card),(cljs.core.truth_(card_game.core.your_turn_QMARK_.call(null))?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(card)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"selected as ",new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(selected),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"imp","imp",-1661098259)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-card","play-card",-407536334),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"clone","clone",711747572)], null));
});})(card,selected))
], null),"play as clone"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-card","play-card",-407536334),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"imp","imp",-1661098259)], null));
});})(card,selected))
], null),"play as imp"], null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-card","play-card",-407536334),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"imp","imp",-1661098259)], null));
});})(card,selected))
], null),"play as imp"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-card","play-card",-407536334),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"clone","clone",711747572)], null));
});})(card,selected))
], null),"play as clone"], null)], null)):null)], null);
});
card_game.core.hand = (function card_game$core$hand(cards){
cljs.core.prn.call(null,"cards",cards);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hand","div.hand",-1136636228),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Hand:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"selected:",cljs.core.pr_str.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cards","div.cards",-1166114667),cljs.core.map_indexed.call(null,(function (i,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.card,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"key","key",-1516042587),i)], null);
}),cards)], null)], null);
});
card_game.core.opponent = (function card_game$core$opponent(opp){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Opponent:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"cards in hand: ",cljs.core.count.call(null,new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(opp))], null)], null);
});
card_game.core.discard = (function card_game$core$discard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"discard"], null);
});
card_game.core.clone_view = (function card_game$core$clone_view(p__16262){
var map__16263 = p__16262;
var map__16263__$1 = ((((!((map__16263 == null)))?(((((map__16263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16263):map__16263);
var data = map__16263__$1;
var imps = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"imps","imps",-1985112239));
var your_QMARK_ = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"your?","your?",-152750859));
var key = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clone","div.clone",341633340),cljs.core.pr_str.call(null,data)], null);

if(cljs.core.truth_((function (){var and__3938__auto__ = your_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = card_game.core.your_turn_QMARK_.call(null);
if(cljs.core.truth_(and__3938__auto____$1)){
var G__16265 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
var G__16265__$1 = (((G__16265 == null))?null:new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(G__16265));
if((G__16265__$1 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__16265__$1,new cljs.core.Keyword(null,"imp","imp",-1661098259));
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16263,map__16263__$1,data,imps,your_QMARK_,key){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"place-card","place-card",698182794),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),key,new cljs.core.Keyword(null,"imps","imps",-1985112239)], null)], null));
});})(map__16263,map__16263__$1,data,imps,your_QMARK_,key))
], null)], null);
} else {
return null;
}
});
card_game.core.table_view = (function card_game$core$table_view(p__16266){
var map__16267 = p__16266;
var map__16267__$1 = ((((!((map__16267 == null)))?(((((map__16267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16267):map__16267);
var you = cljs.core.get.call(null,map__16267__$1,new cljs.core.Keyword(null,"you","you",-541661311));
var opponent = cljs.core.get.call(null,map__16267__$1,new cljs.core.Keyword(null,"opponent","opponent",-373061632));
var table = cljs.core.get.call(null,map__16267__$1,new cljs.core.Keyword(null,"table","table",-564943036));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table","div.table",-33744051),"table",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opponent","div.opponent",308052069),"opponent cards",cljs.core.map_indexed.call(null,((function (map__16267,map__16267__$1,you,opponent,table){
return (function (idx,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.clone_view,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"key","key",-1516042587),idx)], null);
});})(map__16267,map__16267__$1,you,opponent,table))
,cljs.core.get.call(null,table,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opponent)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.you","div.you",1210270728),"your cards",cljs.core.map_indexed.call(null,((function (map__16267,map__16267__$1,you,opponent,table){
return (function (idx,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.clone_view,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"your?","your?",-152750859),true)], null);
});})(map__16267,map__16267__$1,you,opponent,table))
,cljs.core.get.call(null,table,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(you))),(cljs.core.truth_((function (){var and__3938__auto__ = card_game.core.your_turn_QMARK_.call(null);
if(cljs.core.truth_(and__3938__auto__)){
var G__16269 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null)));
var G__16269__$1 = (((G__16269 == null))?null:new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(G__16269));
if((G__16269__$1 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__16269__$1,new cljs.core.Keyword(null,"clone","clone",711747572));
}
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16267,map__16267__$1,you,opponent,table){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"place-card","place-card",698182794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null)], null));
});})(map__16267,map__16267__$1,you,opponent,table))
], null),"place here"], null):null)], null)], null);
});
card_game.core.game = (function card_game$core$game(){
var map__16270 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)));
var map__16270__$1 = ((((!((map__16270 == null)))?(((((map__16270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16270):map__16270);
var players = cljs.core.get.call(null,map__16270__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var table = cljs.core.get.call(null,map__16270__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var game_phase = cljs.core.get.call(null,map__16270__$1,new cljs.core.Keyword(null,"game-phase","game-phase",456680589));
var you = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"you?","you?",1709490002),players));
var opponent_data = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"you?","you?",1709490002)),players));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Game phase: ",cljs.core.name.call(null,game_phase)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.opponent,opponent_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.table_view,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"you","you",-541661311),you,new cljs.core.Keyword(null,"opponent","opponent",-373061632),opponent_data,new cljs.core.Keyword(null,"table","table",-564943036),table], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.hand,new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(you)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.discard], null),(cljs.core.truth_(new cljs.core.Keyword(null,"your-turn","your-turn",1606246393).cljs$core$IFn$_invoke$arity$1(you))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16270,map__16270__$1,players,table,game_phase,you,opponent_data){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993)], null));
});})(map__16270,map__16270__$1,players,table,game_phase,you,opponent_data))
], null),"Pass"], null):null)], null);
});
card_game.core.game_info = (function card_game$core$game_info(){
var map__16273 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858)], null)));
var map__16273__$1 = ((((!((map__16273 == null)))?(((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16273):map__16273);
var name = cljs.core.get.call(null,map__16273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16273,map__16273__$1,name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-state","get-state",1572463657)], null));
});})(map__16273,map__16273__$1,name))
], null),"refresh state"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"tell me your name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__16273,map__16273__$1,name){
return (function (p1__16272_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-name","input-name",323608185),p1__16272_SHARP_.target.value], null));
});})(map__16273,map__16273__$1,name))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16273,map__16273__$1,name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit-name","submit-name",-560653314)], null));
});})(map__16273,map__16273__$1,name))
], null),"submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16273,map__16273__$1,name){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ready","ready",1086465795)], null));
});})(map__16273,map__16273__$1,name))
], null),"ready"], null)], null),(cljs.core.truth_(card_game.core.game_started_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.game], null):null)], null);
});
card_game.core.main = (function card_game$core$main(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"\u041A\u043B\u043E\u043D\u044B \u0431\u0435\u0441\u043E\u0432 \u0432 \u043A\u043B\u043E\u043D\u0430\u0445"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.game_info], null)], null);
});
card_game.core.mount = (function card_game$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card_game.core.main], null),el);
});
card_game.core.mount_app_element = (function card_game$core$mount_app_element(){
var temp__5457__auto__ = card_game.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return card_game.core.mount.call(null,el);
} else {
return null;
}
});
card_game.core.mount_app_element.call(null);
card_game.ws.make_websocket_BANG_.call(null,"ws://localhost:5000/game/",(function (p1__16275_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),p1__16275_SHARP_], null));
}));
card_game.core.on_reload = (function card_game$core$on_reload(){
card_game.core.mount_app_element.call(null);

return card_game.ws.make_websocket_BANG_.call(null,"ws://localhost:5000/game/",(function (p1__16276_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-message","on-message",1662987808),p1__16276_SHARP_], null));
}));
});

//# sourceMappingURL=core.js.map
