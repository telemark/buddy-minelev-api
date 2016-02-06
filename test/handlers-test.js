'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 3, 'There are 3 different handlers')

tap.ok(handlers.searchStudents, 'Handler has method searchStudents')

tap.ok(handlers.getStudents, 'Handler has method getStudents')

tap.ok(handlers.getPublicResponse, 'Handler has method getPublicResponse')
