## How to build
# docker build -f Dockerfile -t chaitanya/meteorsandbox:8.9.4 .
## How to run
# docker container run -it -v /home/chaitanya/dockerDir/db:/data/db --rm --name mongoMeteor --net ethereum  mongo:3.4-jessie
# docker container run -it -p 3000:3000 -e MONGO_URL=mongodb://mongoMeteor:27017/meteor -v `pwd`:/home/node/app -v /etc/localtime:/etc/localtime:ro --rm --name meteorSandBox --net ethereum chaitanya/meteorsandbox:8.9.4 bash

ARG NODE_VERSION=8.9.4
FROM node:${NODE_VERSION}

RUN curl --progress-bar https://install.meteor.com/ | sh

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

RUN meteor create test

CMD ["npm", "start"]

RUN rm -rf /home/node/app/test

EXPOSE 3000