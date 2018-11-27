# Setting the base to nodejs 8.10.0
FROM node:8.13.0-alpine@sha256:383f12ee9a240151d62833be6b7387409a6867c9001328ea2dd5f10f090ac255

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
