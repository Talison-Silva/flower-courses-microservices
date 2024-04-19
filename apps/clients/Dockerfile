FROM node:alpine

WORKDIR /usr/apps/clients

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3030

CMD ["yarn","start"]
