FROM node:16.20.0 as dev-stage

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install
COPY . .

RUN yarn global add @vue/cli
