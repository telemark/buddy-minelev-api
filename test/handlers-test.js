'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 7, 'There are 7 different handlers')

tap.ok(handlers.searchStudents, 'Handler has method searchStudents')

tap.ok(handlers.getStudents, 'Handler has method getStudents')

tap.ok(handlers.getPublicResponse, 'Handler has method getPublicResponse')

tap.ok(handlers.getContactClasses, 'Handler has method getContactClasses')

tap.ok(handlers.getStudentsInGroup, 'Handler has method getStudentsInGroup')

tap.ok(handlers.getStudentContactTeachers, 'Handler has method getStudentContactTeachers')

tap.ok(handlers.getStudentContactTeachers, 'Handler has method getAllTeachers')

