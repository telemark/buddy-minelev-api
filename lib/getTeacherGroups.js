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
  qry = qry.replace('@atferdGroup', config.extens.atferd_group)
  qry = qry.replace('@ordenGroup', config.extens.orden_group)
  qry = qry.replace('@proveGroup', config.extens.prove_group)

  buddyQuery(qry, function (err, res) {
    if (err) {
      return callback(err)
    }
    var results = []
    if (typeof res[0] !== 'undefined' && res[0].length > 0) {
      results['contactGroups'] = res[0]
    } else {
      console.log(options.username + ': No contact groups')
      results['contactGroups'] = 0
    }
    if (typeof res[1] !== 'undefined' && res[1].length > 0) {
      results['groups'] = res[1]
      options.results = results
      return callback(null, options)
    }
    return callback(options.username + ': has no groups')
  })
}

module.exports = getTeacherGroups
