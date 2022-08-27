target =
BINARY_DIR=build
COVERAGE_FILE=coverage.out

dev:
	air

update:
	go get -u
	go mod tidy

build:
	go build -o ${BINARY_DIR}/main .

start:
	${BINARY_DIR}/main

test:
	go test -cover `go list ./${target}... | grep -ve test -ve cmd`

testv:
	go test -cover -v `go list ./${target}... | grep -ve test -ve cmd`

cover:
	go test -covermode=atomic -coverprofile=${COVERAGE_FILE} `go list ./... | grep -ve test -ve cmd`

clean:
	if [ -d ${BINARY_DIR} ] ; then rm -rf ${BINARY_DIR} ; fi
	if [ -d tmp ] ; then rm -rf tmp ; fi
	if [ -f ${COVERAGE_FILE} ] ; then rm -f ${COVERAGE_FILE} ; fi

cleantest:
	go clean -testcache
	make test ${target}

.PHONY: dev update build start test testv cover clean cleantest
