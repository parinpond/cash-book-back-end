FROM node:16
WORKDIR /back-end
COPY package.json .
RUN yarn global add nodemon
RUN npm install
COPY . .
CMD npm start