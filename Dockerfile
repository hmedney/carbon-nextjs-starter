#######################################################################################
# build .next using all dependencies
#######################################################################################
FROM node:16-slim as builder
WORKDIR /usr/app

COPY src/ src/
COPY package.json .
COPY .eslintrc.json .
COPY .prettierrc .
COPY yarn.lock .

RUN yarn install
RUN yarn build

#######################################################################################
# install prod dependencies only and copy built files
#######################################################################################
FROM node:16-alpine
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY --from=builder /usr/app/.next .next/
COPY package.json .
COPY yarn.lock .

RUN yarn install --production
RUN yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start" ]