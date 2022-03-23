FROM node:17.7.2-alpine

RUN mkdir /home/user/app/frontend/ -p
WORKDIR /home/user/app/frontend/

ADD ./frontend/package.json /home/user/app/frontend/package.json
RUN npm install
ADD ./frontend/ /home/user/app/frontend/

ENV NODE_ENV=development
EXPOSE 3000/tcp

CMD npm run serve
