FROM node:16

WORKDIR /usr/src/app
# Bundle app source
COPY . .

RUN yarn install
RUN yarn build

ENV NODE_ENV=production

EXPOSE 8080
CMD [ "yarn", "start:prod" ]