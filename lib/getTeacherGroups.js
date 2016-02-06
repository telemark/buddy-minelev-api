'use strict'

var buddyQuery = require('./buddyQuery')

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

  buddyQuery(options.query.teacherGroups, function (err, res) {
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
