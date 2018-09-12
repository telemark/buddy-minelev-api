# Setting the base to nodejs 8.10.0
FROM node:8.12.0-alpine@sha256:c2ea45a3953fd73f85e19b2993ed063261951f628628c3ad6fc11e96df86f5bc

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js
