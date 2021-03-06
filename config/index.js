'use strict'

const pkg = require('../package.json')

module.exports = {
  appName: pkg.name,
  appVersion: pkg.version,
  logger: {
    enabled: process.env.SLACK_ENABLED || false,
    webhookUrl: process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/xxx/xxx/xxx',
    channel: process.env.SLACK_CHANNEL || '#logging',
    username: process.env.SLACK_USERNAME || 'loggerBot'
  },
  extens: {
    atferd_group: process.env.ATFERD_GROUP || '/171ATF',
    orden_group: process.env.ORDEN_GROUP || '/171ORD',
    prove_group: process.env.PROVE_GROUP || '/171KP'
  },
  buddy: {
    user: process.env.BUDDY_USER || 'username', // Database username
    password: process.env.BUDDY_PASSWORD || 'password', // Database passord
    server: process.env.BUDDY_SERVER || 'server.domain.no', // You can use 'localhost\\instance' to connect to named instance
    database: process.env.BUDDY_DATABASE || 'dbMetakatalog', // Database name
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  },
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'NeverShareYourSecret',
  YAR_SECRET: process.env.JWT_SECRET || 'NeverShareYourSecret'
}
