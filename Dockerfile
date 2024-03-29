FROM node:18.0.0 as dev-stage

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
