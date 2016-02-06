'use strict'

var config = {
  extens: {
    atferd_group: process.env.ATFERD_GROUP || '/151ATF',
    orden_group: process.env.ORDEN_GROUP || '/151ORD'
  },
  buddy: {
    user: process.env.BUDDY_USER || 'tfk-digital', // Database username
    password: process.env.BUDDY_PASSWORD || 'DigitalSjø42', // Database passord
    server: process.env.BUDDY_SERVER || 'btvhubfim03.login.top.no', // You can use 'localhost\\instance' to connect to named instance
    database: process.env.BUDDY_DATABASE || 'dbMetakatalog', // Database name
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  },
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'Fratres',
  YAR_SECRET: process.env.JWT_SECRET || 'Fratres'
}

module.exports = config

