FROM node:8.15.1-alpine

ADD app.js app.js
ADD package.json package.json

RUN npm install

ENV PORT 80

CMD node app.js
