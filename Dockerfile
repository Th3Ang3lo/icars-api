FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build && npm install -g prisma

EXPOSE 3333

CMD yarn start
