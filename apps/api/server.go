package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"
	"github.com/seriwb/nextjs-gqlgen-sample/graph"
	"github.com/seriwb/nextjs-gqlgen-sample/graph/generated"
)

const defaultPort = "8080"

func main() {
	_ = godotenv.Load()

	hostname := os.Getenv("HOST_NAME")
	if hostname == "" {
		hostname = "127.0.0.1"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://%s:%s/ for GraphQL playground", hostname, port)
	log.Fatal(http.ListenAndServe(hostname+":"+port, nil))
}
