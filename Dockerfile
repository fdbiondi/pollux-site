FROM node:latest as dev-stage

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install
COPY . .

RUN yarn global add @vue/cli
