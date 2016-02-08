'use strict'

var config = require('../config')
var winston = require('winston')
var SlackWebHook = require('winston-slack-webhook').SlackWebHook
var logger

if (config.logger.enabled) {
  logger = new winston.Logger({
    level: 'info',
    transports: [
      new (winston.transports.Console)(),
      new SlackWebHook({
        webhookUrl: config.logger.webhookUrl,
        channel: config.logger.channel,
        username: config.logger.username
      })
    ]
  })
} else {
  logger = winston
}

module.exports = logger
