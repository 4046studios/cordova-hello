
module Main where

import Window (dimensions)
import Touch (taps)

display : (Int,Int) -> { x:Int, y:Int } -> Element
display (w,h) {x,y} = 
  container w h middle <| 
  flow down 
    [ asText "Hello, Elm Cordova"
    , asText <| "xPos: " ++ show x
    , asText <| "yPos: " ++ show y
    ]

main : Signal Element
main = display <~ dimensions ~ taps

