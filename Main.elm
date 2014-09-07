
module Main where

import Touch (Touch, touches)
import WebSocket (connect)
import Window (dimensions)

showTouches : Touch -> Element
showTouches t = flow down
  [ asText <| "Touch:"
  , asText <| "X: " ++ show t.x
  , asText <| "Y: " ++ show t.y
  ]

display : (Int,Int) -> [Touch] -> String -> Element
display (w,h) ts rcv = 
  container w h middle <| 
  flow outward
    [ image w h "img/bear.jpg"
    , flow down <|
      asText "Hello, Elm Cordova" 
      :: asText ("Socket: " ++ rcv)
      :: map showTouches ts
    ]

sock : Signal String
sock = connect "ws://www.wecamtoplay.com:8080/echo" <| constant "PING"

main : Signal Element
main = display <~ dimensions ~ touches ~ sock

