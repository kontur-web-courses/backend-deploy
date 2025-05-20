FROM node:latest
LABEL authors="wswfws"
COPY deploy-app /app
WORKDIR /app
RUN npm i

ENTRYPOINT [ "npm", "start" ]