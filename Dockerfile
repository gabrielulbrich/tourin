FROM node:20
RUN ln -sf /bin/bash /bin/sh
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn run build 
CMD [ "yarn", "start:dev" ]
