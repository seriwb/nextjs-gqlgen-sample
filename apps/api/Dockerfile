FROM golang:1.23 AS go-builder

RUN apt-get update && \
  apt-get install -y git unzip build-essential && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /api
COPY . .
RUN make build


FROM alpine AS go-app

EXPOSE 8080

WORKDIR /api
COPY --from=go-builder /api/build/ .
# COPY --from=go-builder /api/configs ./configs
CMD ["./main"]