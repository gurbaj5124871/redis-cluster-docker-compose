FROM node:12.18.4
RUN apt-get update && apt-get install -y default-jre && apt-get clean

RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app/

ARG REDIS_HOST_TEST
ARG REDIS_PORT_TEST
ENV REDIS_HOST_TEST $REDIS_HOST_TEST
ENV REDIS_PORT_TEST $REDIS_PORT_TEST

RUN npm ci
# RUN REDIS_HOST_TEST=$REDIS_HOST_TEST REDIS_PORT_TEST=$REDIS_PORT_TEST node index.js
# RUN REDIS_HOST_TEST=$REDIS_HOST_TEST REDIS_PORT_TEST=$REDIS_PORT_TEST npm run test
RUN node index.js
RUN npm run test