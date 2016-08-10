'use strict'

require.extensions['.sql'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

var buddyQuery = require('./buddyQuery')
var fs = require('fs')
var config = require('../config')

function getTeachersContactGroups (options, callback) {
  var qry = require('./sql/getTeachersContactGroups.sql')
  qry = qry.replace('@username', options.username)
  qry = qry.replace('@atferdGroup', config.extens.atferd_group)
  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    return callback(null, res[0])
  })
}

module.exports = getTeachersContactGroups
