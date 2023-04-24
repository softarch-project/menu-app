FROM node:16

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/clientside
RUN yarn install
RUN yarn build

WORKDIR /usr/src/app
RUN yarn install
RUN yarn build

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80
CMD [ "yarn", "start:prod" ]