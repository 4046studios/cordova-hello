Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Main";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Input = Elm.Graphics.Input.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var Touch = Elm.Touch.make(_elm);
   var WebSocket = Elm.WebSocket.make(_elm);
   var Window = Elm.Window.make(_elm);
   var _op = {};
   var msgInput = Graphics.Input.input("initial");
   var sock = A2(WebSocket.connect,
   "ws://www.wecamtoplay.com:8080/echo",
   msgInput.signal);
   var showTouches = function (t) {
      return A2(Graphics.Element.flow,
      Graphics.Element.down,
      _L.fromArray([Text.asText("Touch:")
                   ,Text.asText(_L.append("X: ",
                   String.show(t.x)))
                   ,Text.asText(_L.append("Y: ",
                   String.show(t.y)))]));
   };
   var display = F3(function (_v0,
   ts,
   rcv) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return A3(Graphics.Element.container,
              _v0._0,
              _v0._1,
              Graphics.Element.middle)(A2(Graphics.Element.flow,
              Graphics.Element.outward,
              _L.fromArray([A3(Graphics.Element.image,
                           _v0._0,
                           _v0._1,
                           "img/bear.jpg")
                           ,A2(Graphics.Element.flow,
                           Graphics.Element.down,
                           _L.fromArray([Text.asText("Hello, Dan Cordova")
                                        ,A3(Graphics.Input.button,
                                        msgInput.handle,
                                        "Foo",
                                        "Foo")
                                        ,A3(Graphics.Input.button,
                                        msgInput.handle,
                                        "Bar",
                                        "Bar")
                                        ,Text.asText(_L.append("Socket: ",
                                        rcv))
                                        ,Graphics.Element.flow(Graphics.Element.down)(A2(List.map,
                                        showTouches,
                                        ts))]))])));}
         _E.Case($moduleName,
         "between lines 21 and 31");
      }();
   });
   var main = A2(Signal._op["~"],
   A2(Signal._op["~"],
   A2(Signal._op["<~"],
   display,
   Window.dimensions),
   Signal.constant(_L.fromArray([]))),
   sock);
   _elm.Main.values = {_op: _op
                      ,showTouches: showTouches
                      ,msgInput: msgInput
                      ,display: display
                      ,sock: sock
                      ,main: main};
   return _elm.Main.values;
};