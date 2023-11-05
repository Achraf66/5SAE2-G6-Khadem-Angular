FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist/ ./

EXPOSE 4200

CMD [ "npm", "start" ]
