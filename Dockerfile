# ref: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# ref: https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
# ref: https://stackoverflow.com/questions/54007569/how-to-config-nginx-for-vue-router-on-docker
#
# Usage: docker build . -t maple-leaf/web


# build stage
FROM node:lts as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# Bundle app source
COPY . .

# build app for production with minification
RUN npm run build


# production stage
FROM nginx:stable-alpine as production-stage

# Add nginx config
COPY .docker/nginx/prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
