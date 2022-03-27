FROM node:17.7.2-alpine

RUN mkdir /home/user/app/frontend/ -p
WORKDIR /home/user/app/frontend/

ADD ./frontend/package.json /home/user/app/frontend/package.json
RUN npm install && \
    npm install webpack -g && \
    npm install webpack-cli -g && \
    npm install webpack-dev-server -g
ADD ./frontend/ /home/user/app/frontend/

ENV NODE_ENV=development
EXPOSE 3000/tcp

CMD npm run serve
