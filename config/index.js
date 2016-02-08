'use strict'

var config = {
  extens: {
    atferd_group: process.env.ATFERD_GROUP || '/151ATF',
    orden_group: process.env.ORDEN_GROUP || '/151ORD',
    prove_group: process.env.PROVE_GROUP || '/151KP'
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

module.exports = config

