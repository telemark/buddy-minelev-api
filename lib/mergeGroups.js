'use strict'

var concat = require('unique-concat')

function mergeGroups (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.results) {
    return callback(new Error('Missing required input: options.results'), null)
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

  var results = options.results
  var identity = function (obj) { return obj.id }
  var res = concat(results['groups'], results['contactGroups'], identity)

  res.forEach(function (item) {
    if (item.contactTeacher === 'true') {
      item.contactTeacher = true
    } else {
      item.contactTeacher = false
    }
  })
  options.results = res
  callback(null, options)
}

module.exports = mergeGroups
