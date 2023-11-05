FROM node:14 

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/angular-app /usr/share/nginx/html

CMD ["npm", "start"]

