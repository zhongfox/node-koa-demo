FROM node:latest
MAINTAINER zhongfox

ADD . /projects/node-koa-demo
WORKDIR /projects/node-koa-demo
RUN npm install

EXPOSE 3000


ENTRYPOINT [ "npm", "start" ]
