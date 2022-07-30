.PHONY: dev
dev:
	air

.PHONY: test
target =
test:
	go test -cover `go list ./${target}... | grep -ve test -ve cmd`

.PHONY: testv
target =
testv:
	go test -cover -v `go list ./${target}... | grep -ve test -ve cmd`

.PHONY: cover
cover:
	go test -covermode=atomic -coverprofile=coverage.out `go list ./... | grep -ve test -ve cmd`

.PHONY: cleantest
target =
cleantest:
	go clean -testcache
	make test ${target}
