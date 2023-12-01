## stage 1
FROM node:latest AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### Stage 2
FROM nginx:latest
#RUN addgroup app && adduser -S -G app app
#USER app
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g" , "daemon off;" ]
