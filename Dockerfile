#######################################################################################
# build .next using all dependencies
#######################################################################################
FROM node:22.18-slim AS builder
WORKDIR /usr/app

COPY src/ src/
COPY package.json .
COPY package-lock.json .
COPY .eslintrc.json .
COPY .prettierrc .

RUN npm ci
RUN npm run build

#######################################################################################
# install prod dependencies only and copy built files
#######################################################################################
FROM node:22.18-alpine
RUN apk update && apk upgrade
WORKDIR /usr/app

COPY --from=builder /usr/app/.next .next/
COPY package.json .
COPY package-lock.json .

RUN npm ci

EXPOSE 3000
CMD [ "npm", "start" ]