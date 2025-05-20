FROM node:latest
COPY deploy-app /app
WORKDIR /app
RUN npm i

ENTRYPOINT [ "npm", "start" ]