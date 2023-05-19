FROM node:18

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm ci
COPY ./ ./

ENTRYPOINT ["npm"]