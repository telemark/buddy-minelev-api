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
 * User
 *
 */

function getStudents (request, reply) {
  reply('yeah')
}

function searchStudents (request, reply) {
  var username = request.params.username
  var search = request.params.search
  var options = {
    username: username,
    search: search
  }

  getStudentsAndGroups(options, function (err, students) {
    if (err) {
      reply(err)
    }
    reply(students)
  })
}

module.exports.getPublicResponse = getPublicResponse

module.exports.searchStudents = searchStudents

module.exports.getStudents = getStudents
