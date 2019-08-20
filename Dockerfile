FROM node:10-alpine

COPY package.json /src/package.json
RUN cd /src; npm install --production
COPY src /src/
# CMD ["node", "src/app.js"]
