FROM node:12.18.4
RUN apt-get update && apt-get install -y default-jre && apt-get clean
RUN mkdir -p /usr/src/app
COPY . /usr/src/app/
WORKDIR /usr/src/app/
RUN npm ci
RUN npm run test