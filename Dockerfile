###########################################################
#
# Dockerfile for buddy-minelev-api
#
###########################################################

# Setting the base to nodejs 4.3.0
FROM mhart/alpine-node:4.3.0

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Env variables
ENV SERVER_PORT 3000
ENV JWT_SECRET NeverShareYourSecret
ENV YAR_SECRET NeverShareYourSecret

# Slack logger
#ENV SLACK_ENABLED true # Uncomment to enable
ENV SLACK_WEBHOOK_URL "https://hooks.slack.com/services/xxx/xxx/xxx"
ENV SLACK_CHANNEL logging
ENV SLACK_USERNAME loggerBot

# Buddy
ENV BUDDY_USERNAME username
ENV BUDDY_PASSWORD password
ENV BUDDY_SERVER hostmain.domain.no
ENV BUDDY_DATABASE dbMetakatalog

# Extens
ENV ATFERD_GROUP "/151ATF"
ENV ORDEN_GROUP "/151ORD"
ENV PROVE_GROUP "/151KP"

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js

