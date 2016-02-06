'use strict'

var buddyQuery = require('./buddyQuery')
var config = require('../config')

function getTeacherGroups (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.query) {
    return callback(new Error('Missing required input: options.query'), null)
  }
  if (!options.search) {
    return callback(new Error('Missing required input: options.search'), null)
  }
  if (!options.username) {
    return callback(new Error('Missing required input: options.username'), null)
  }

  var qry = options.query.teacherGroups
  qry = qry.replace('@atferdGroup', config.extens.atferds_group)
  qry = qry.replace('@ordenGroup', config.extens.orden_group)

  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    var results = []
    results['contactGroups'] = res[0]
    results['groups'] = res[1]
    options.results = results
    return callback(null, options)
  })
}

module.exports = getTeacherGroups
