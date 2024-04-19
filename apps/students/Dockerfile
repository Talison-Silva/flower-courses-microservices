FROM node:alpine

WORKDIR /usr/apps/students

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5050

CMD ["yarn","start"]
