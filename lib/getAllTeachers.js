'use strict'

var buddyQuery = require('./buddyQuery')

function getStudentContactTeachers (options, callback) {
  var qry = require('./sql/getAllTeachers.sql')
  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    return callback(null, res[0])
  })
}

module.exports = getStudentContactTeachers
