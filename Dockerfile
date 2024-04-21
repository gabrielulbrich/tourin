FROM node:20
RUN ln -sf /bin/bash /bin/sh
WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
COPY ./migrations/ /app/migrations/

RUN yarn install
COPY . .
RUN yarn run build 
CMD [ "yarn", "start:dev" ]
