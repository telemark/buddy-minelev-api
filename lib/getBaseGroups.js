'use strict'

function getBaseGroups (options, callback) {
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

  if (!results['contactGroups']) {
    return callback(null, results)
  }

  var contactGroups = results['contactGroups']
  var list = []
  contactGroups.forEach(function (item) {
    var contactGroup = item.groupId.replace(/\/(.*)/, '')
    list.push(contactGroup)
  })
  options.results['contactGroups'] = list
  return callback(null, options)
}

module.exports = getBaseGroups
