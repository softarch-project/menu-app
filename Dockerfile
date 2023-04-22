FROM node:16

WORKDIR /usr/src/app
# Bundle app source
COPY . .

RUN yarn install
RUN yarn build

ENV NODE_ENV=production
ENV PORT=80

EXPOSE 80
CMD [ "yarn", "start:prod" ]