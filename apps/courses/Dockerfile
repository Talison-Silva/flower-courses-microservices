FROM node:alpine

WORKDIR /usr/apps/courses

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4040

CMD ["yarn","start"]
