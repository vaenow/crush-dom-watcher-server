FROM node:18.18.2

ADD package.json /app/

WORKDIR /app

RUN npm install

ADD . /app

CMD ["npm", "start"]