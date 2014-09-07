package main

import (
	"github.com/hoisie/web"
)

func check(err error) {
	if err != nil {
		panic(err.Error())
	}
}

func main() {
	server    :=    web.NewServer()
	server.Get("/echo", chatServer())
	server.Run(":8080")
}

