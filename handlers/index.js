'use strict'

var getStudentsAndGroups = require('../lib/getStudentsAndGroups')

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

function getStudents (request, reply) {
  var username = request.params.username
  var id = request.params.id
  var options = {
    username: username,
    search: id,
    type: 'getStudent'
  }

  getStudentsAndGroups(options, function (err, students) {
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
    username: username,
    search: search,
    type: 'getStudents'
  }

  getStudentsAndGroups(options, function (err, students) {
    if (err) {
      var code = err.statusCode || 520
      reply(err).code(code)
    } else {
      reply(students)
    }
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.searchStudents = searchStudents

module.exports.getStudents = getStudents
