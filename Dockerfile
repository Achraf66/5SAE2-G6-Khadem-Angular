FROM node:14

WORKDIR /app

COPY . .

RUN npm install

COPY dist/ ./

EXPOSE 4200

CMD ["npm", "start"]

