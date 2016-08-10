'use strict'

require.extensions['.sql'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

var config = require('../config')
var buddyQuery = require('./buddyQuery')
var fs = require('fs')

function getStudentContactTeachers (options, callback) {
  var qry = require('./sql/getStudentContactTeachers.sql')
  qry = qry.replace('@atferdGroup', config.extens.atferd_group)
  qry = qry.replace('@username', options.username)
  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    return callback(null, res[0])
  })
}

module.exports = getStudentContactTeachers
