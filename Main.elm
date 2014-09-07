
module Main where

import Graphics.Input (Input, input, button)
import Touch (Touch, touches)
import WebSocket (connect)
import Window (dimensions)

showTouches : Touch -> Element
showTouches t = flow down
  [ asText <| "Touch:"
  , asText <| "X: " ++ show t.x
  , asText <| "Y: " ++ show t.y
  ]

msgInput : Input String
msgInput = input "initial"

display : (Int,Int) -> [Touch] -> String -> Element
display (w,h) ts rcv = 
  container w h middle <| 
  flow outward
    [ image w h "img/bear.jpg"
    , flow down
        [ asText "Hello, Dan Cordova" 
        , button msgInput.handle "Foo" "Foo"
        , button msgInput.handle "Bar" "Bar"
        , asText ("Socket: " ++ rcv)
        , flow down <| map showTouches ts
        ]
    ]

sock : Signal String
sock = connect "ws://www.wecamtoplay.com:8080/echo" msgInput.signal

main : Signal Element
--main = display <~ dimensions ~ touches ~ sock
main = display <~ dimensions ~ (constant []) ~ sock

