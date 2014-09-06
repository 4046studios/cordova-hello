
module Main where

import Window (dimensions)

display : (Int,Int) -> Element
display (w,h) = container w h middle (asText "Hello, Elm Cordova")

main : Signal Element
main = display <~ dimensions

