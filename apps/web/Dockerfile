FROM node:16-slim

EXPOSE 3000

RUN apt-get update \
  && apt-get install -y git build-essential \
  && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN npm install -g npm node-gyp

WORKDIR /web

COPY . .

RUN yarn
# RUN yarn build
