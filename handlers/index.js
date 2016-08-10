'use strict'

var qryGetStudentsAndGroups = require('../lib/getStudentsAndGroups')
var qryGetTeachersContactGroups = require('../lib/getTeachersContactGroups')
var qryGetStudentsInGroup = require('../lib/getStudentsInGroup')
var gryGetStudentContactTeachers = require('../lib/getStudentContactTeachers')
var config = require('../config')

/*!
 *
 * Public
 *
 */

function getPublicResponse (request, reply) {
  var message = {
    message: '(Nothing but) Flowers'
  }
  reply(message)
}

/*!
 *
 * Buddy
 *
 */

function getStudentsInGroup (request, reply) {
  var groupId = request.params.groupId
  var options = {
    groupId: groupId
  }
  qryGetStudentsInGroup(options, function (err, groups) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(groups)
    }
  })
}

function getStudentContactTeachers (request, reply) {
  var username = request.params.username
  var options = {
    username: username
  }
  gryGetStudentContactTeachers(options, function (err, groups) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(groups)
    }
  })
}

function getContactClasses (request, reply) {
  var username = request.params.username
  var options = {
    username: username
  }

  qryGetTeachersContactGroups(options, function (err, groups) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(groups)
    }
  })
}

function getStudents (request, reply) {
  var username = request.params.username
  var id = request.params.id
  var options = {
    appName: config.appName,
    username: username,
    search: id,
    type: 'getStudent'
  }

  qryGetStudentsAndGroups(options, function (err, students) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(students)
    }
  })
}

function searchStudents (request, reply) {
  var username = request.params.username
  var search = request.params.search
  var options = {
    appName: config.appName,
    username: username,
    search: search,
    type: 'getStudents'
  }

  qryGetStudentsAndGroups(options, function (err, students) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(students)
    }
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.getContactClasses = getContactClasses

module.exports.getStudentsInGroup = getStudentsInGroup

module.exports.getStudentContactTeachers = getStudentContactTeachers

module.exports.searchStudents = searchStudents

module.exports.getStudents = getStudents
