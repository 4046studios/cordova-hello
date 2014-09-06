
module Main where

import Window (dimensions)
import Touch (Touch, touches)

showTouches : Touch -> Element
showTouches t = flow down
  [ asText <| "Touch:"
  , asText <| "X: " ++ show t.x
  , asText <| "Y: " ++ show t.y
  ]

display : (Int,Int) -> [Touch] -> Element
display (w,h) ts = 
  container w h middle <| 
  flow down <|
  asText "Hello, Elm Cordova" :: map showTouches ts

main : Signal Element
main = display <~ dimensions ~ touches

