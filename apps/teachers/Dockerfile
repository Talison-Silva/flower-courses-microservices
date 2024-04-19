FROM node:alpine

WORKDIR /usr/apps/teachers

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 6060

CMD ["yarn","start"]
