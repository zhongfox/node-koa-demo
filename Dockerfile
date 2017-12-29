FROM centos:7
MAINTAINER zhongfox

# Install perl and wget
RUN yum -y update && \
    yum -y install git perl wget which curl && \
    yum clean all

RUN wget https://npm.taobao.org/mirrors/node/latest-v8.x/node-v8.9.3-linux-x64.tar.gz && \
    tar -C /usr/local --strip-components 1 -xzf node-v8.9.3-linux-x64.tar.gz && \
    rm node-v8.9.3-linux-x64.tar.gz

ADD . /projects/node-koa-demo
WORKDIR /projects/node-koa-demo
RUN npm install

EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
