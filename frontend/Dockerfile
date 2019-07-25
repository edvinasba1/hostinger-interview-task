FROM node:8 as build-stage
WORKDIR /app
COPY package.json /app
RUN npm install yarn -g
COPY . /app
RUN yarn install
RUN yarn build
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
