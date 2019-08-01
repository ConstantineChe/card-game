// Compiled by ClojureScript 1.10.339 {}
goog.provide('card_game.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('card_game.ws');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"connected","connected",-169833045));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"send","send",-652151114),(function (msg){
return card_game.ws.send_transit_msg_BANG_.call(null,msg);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (p__16227,p__16228){
var map__16229 = p__16227;
var map__16229__$1 = ((((!((map__16229 == null)))?(((((map__16229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16229):map__16229);
var db = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16230 = p__16228;
var _ = cljs.core.nth.call(null,vec__16230,(0),null);
var msg = cljs.core.nth.call(null,vec__16230,(1),null);
cljs.core.prn.call(null,"got",msg);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(msg))], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-state","get-state",1572463657),(function (p__16234){
var map__16235 = p__16234;
var map__16235__$1 = ((((!((map__16235 == null)))?(((((map__16235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16235):map__16235);
var db = cljs.core.get.call(null,map__16235__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"input-name","input-name",323608185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.path.call(null,new cljs.core.Keyword(null,"inputs","inputs",865803858))], null),(function (db,p__16237){
var vec__16238 = p__16237;
var _ = cljs.core.nth.call(null,vec__16238,(0),null);
var name = cljs.core.nth.call(null,vec__16238,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),name);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"ready","ready",1086465795)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"submit-name","submit-name",-560653314),(function (p__16241,_){
var map__16242 = p__16241;
var map__16242__$1 = ((((!((map__16242 == null)))?(((((map__16242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16242):map__16242);
var db = cljs.core.get.call(null,map__16242__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.Keyword(null,"name","name",1843675177)], null))], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"play-card","play-card",-407536334),(function (p__16244,p__16245){
var map__16246 = p__16244;
var map__16246__$1 = ((((!((map__16246 == null)))?(((((map__16246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16246):map__16246);
var db = cljs.core.get.call(null,map__16246__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16247 = p__16245;
var _ = cljs.core.nth.call(null,vec__16247,(0),null);
var idx = cljs.core.nth.call(null,vec__16247,(1),null);
var as = cljs.core.nth.call(null,vec__16247,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"as","as",1148689641),as], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"place-card","place-card",698182794),(function (p__16251,p__16252){
var map__16253 = p__16251;
var map__16253__$1 = ((((!((map__16253 == null)))?(((((map__16253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16253):map__16253);
var db = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__16254 = p__16252;
var _ = cljs.core.nth.call(null,vec__16254,(0),null);
var path = cljs.core.nth.call(null,vec__16254,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"play-cards","play-cards",-88811607),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"on","on",173873944),path)], null)], null);
}));

//# sourceMappingURL=events.js.map
