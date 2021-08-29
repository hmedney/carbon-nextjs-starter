#######################################################################################
# Pull and prepare base image for subsequent stages
#######################################################################################
FROM node:16-alpine as base
RUN apk update && apk upgrade
WORKDIR /usr/app

#######################################################################################
# build .next using all dependencies
#######################################################################################
FROM base as builder

COPY src/ src/
COPY next.config.js .
COPY package.json .
COPY .eslintrc.json .
COPY .prettierrc .
COPY yarn.lock .

RUN yarn install
RUN yarn build

#######################################################################################
# install prod dependencies only and copy built files
#######################################################################################
FROM base as run

COPY --from=builder /usr/app/.next .next/
COPY next.config.js .
COPY package.json .
COPY yarn.lock .

RUN yarn install --production
RUN yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start" ]