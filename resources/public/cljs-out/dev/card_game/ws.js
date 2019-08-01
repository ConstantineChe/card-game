// Compiled by ClojureScript 1.10.339 {}
goog.provide('card_game.ws');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cognitect.transit');
if((typeof card_game !== 'undefined') && (typeof card_game.ws !== 'undefined') && (typeof card_game.ws.ws_chan !== 'undefined')){
} else {
card_game.ws.ws_chan = reagent.core.atom.call(null,null);
}
card_game.ws.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
card_game.ws.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
card_game.ws.receive_transit_msg_BANG_ = (function card_game$ws$receive_transit_msg_BANG_(update_fn){
return (function (msg){
return update_fn.call(null,cognitect.transit.read.call(null,card_game.ws.json_reader,msg.data));
});
});
card_game.ws.send_transit_msg_BANG_ = (function card_game$ws$send_transit_msg_BANG_(msg){
if(cljs.core.truth_(cljs.core.deref.call(null,card_game.ws.ws_chan))){
return cljs.core.deref.call(null,card_game.ws.ws_chan).send(cognitect.transit.write.call(null,card_game.ws.json_writer,msg));
} else {
throw (new Error("Websocket is not available!"));
}
});
card_game.ws.make_websocket_BANG_ = (function card_game$ws$make_websocket_BANG_(url,receive_handler){
cljs.core.println.call(null,"attempting to connect websocket");

var temp__5455__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5455__auto__)){
var chan = temp__5455__auto__;
chan.onmessage = card_game.ws.receive_transit_msg_BANG_.call(null,receive_handler);

cljs.core.reset_BANG_.call(null,card_game.ws.ws_chan,chan);

cljs.core.println.call(null,"Websocket connection established with: ",url);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056)], null));
} else {
throw (new Error("Websocket connection failed!"));
}
});

//# sourceMappingURL=ws.js.map
