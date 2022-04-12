FROM node:16
WORKDIR /back-end
COPY package.json .
RUN npm install
COPY . .
CMD npm start