FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install yarn -g
COPY . /app
CMD yarn run compile-ts-run-prod-server
EXPOSE 8080
