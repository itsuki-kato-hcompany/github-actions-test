# Base image
FROM node:21-bookworm-slim

RUN apt-get update && \
    apt-get install -y locales curl procps

RUN locale-gen ja_JP.UTF-8

RUN localedef -f UTF-8 -i ja_JP ja_JP

ENV LANG=ja_JP.UTF-8

ENV TZ=Asia/Tokyo

ENV NODE_ENV development

USER node

# Create app directory
WORKDIR /usr/src/app

USER root
RUN mkdir /usr/src/app/node_modules && chown -R node:node /usr/src/app/node_modules

USER node

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npx prisma generate

RUN npm run build

USER node

EXPOSE 3100

# CMD ["npm", "run", "start:dev"]