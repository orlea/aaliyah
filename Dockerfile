FROM node:10-alpine

COPY package.json /src/package.json
RUN npm install --production
COPY src /src/
# CMD ["node", "src/app.js"]
