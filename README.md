# Next.js + gqlgen sample



## Components
- Next.js(Typescript)
- SWR + graphql-request
- gqlgen(Go)
- air
- [VSCode](https://code.visualstudio.com/docs/editor/multi-root-workspaces)
- GitHub Actions
- Dagger

# start application

```
docker-compose up -d
```


# entrypoint

- http://localhost:3000
- http://localhost:8080


# initialize

```
cd apps
npx create-next-app@latest --typescript web

mkdir api && cd api
go mod init github.com/seriwb/nextjs-gqlgen-sample

touch tools.go
  package tools

  import (
    _ "github.com/99designs/gqlgen"
  )

go mod tidy
go run github.com/99designs/gqlgen init
```


## requires
go install github.com/cosmtrek/air@latest
