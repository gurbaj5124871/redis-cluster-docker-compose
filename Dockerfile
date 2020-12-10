FROM node:12.18.4
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .