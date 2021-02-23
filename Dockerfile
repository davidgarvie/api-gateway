FROM mhart/alpine-node:12.21.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY index.js ./
COPY src ./src

ENV NODE_ENV="production"

EXPOSE 8080

CMD [ "node", "index.js" ]