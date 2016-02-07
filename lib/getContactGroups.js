'use strict'

var buddyQuery = require('./buddyQuery')
var config = require('../config')

function getContactGroups (options, callback) {
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

  if (!options.results['contactGroups']) {
    return callback(null, options)
  }
  var results = options.results
  var contactGroups = results['contactGroups']
  var i = 0
  var list = []
  contactGroups.forEach(function (item) {
    var search = item
    var qry = options.query.contactTeacherGroups.replace('@contactGroups', search)
    qry = qry.replace('@atferdGroup', config.extens.atferd_group)
    qry = qry.replace('@ordenGroup', config.extens.orden_group)
    buddyQuery(qry, function (err, groups) {
      if (err) {
        return callback(err)
      }
      Array.prototype.push.apply(list, groups[0])
      i++
      if (i === contactGroups.length) {
        options.results['contactGroups'] = list
        return callback(null, options)
      }
    })
  })
}

module.exports = getContactGroups
