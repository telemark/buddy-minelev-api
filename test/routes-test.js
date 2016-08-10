'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 6, 'There are 6 different routes')
