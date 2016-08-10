'use strict'

require.extensions['.sql'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

var buddyQuery = require('./buddyQuery')
var fs = require('fs')

function getStudentsInGroup (options, callback) {
  var qry = require('./sql/getStudentsInGroup.sql')
  qry = qry.replace('@id', options.groupId)
  qry = qry.replace('@search', '')
  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    return callback(null, res[0])
  })
}

module.exports = getStudentsInGroup
