'use strict'

require.extensions['.sql'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

// External requirements
var async = require('async')
var fs = require('fs')
var logger = require('./logger')

// Local requirements
var getTeacherGroups = require('./getTeacherGroups')
var getBaseGroups = require('./getBaseGroups')
var getContactGroups = require('./getContactGroups')
var mergeGroups = require('./mergeGroups')
var getStudentsInGroups = require('./getStudentsInGroups')
var addStudentsToGroups = require('./addStudentsToGroups')

// SQL-queries
var qryTeacherGroups = require('./sql/getTeacherGroups.sql')
var qryContactTeacherGroups = require('./sql/getTeacherContactGroups.sql')
var qryStudentsInGroup = require('./sql/getStudentsInGroup.sql')
var qryStudentInGroup = require('./sql/getStudentInGroup.sql')

function giveMe (results, callback) {
  // console.log(JSON.stringify(results, null, 2))
  // logger.info('[APPNAME: %s] [USERNAME: %s] [TYPE: %s] [SEARCH: %s] [MESSAGE: %s]', options.appName, options.username, options.type, options.search, results)
  return callback(null, results)
}

function setOptions (options, callback) {
  options.query = {
    teacherGroups: qryTeacherGroups.replace('@username', options.username),
    contactTeacherGroups: qryContactTeacherGroups,
    studentsInGroup: qryStudentsInGroup
  }
  if (options.type === 'getStudent') {
    options.query.studentsInGroup = qryStudentInGroup
  }
  logger.info('[APPNAME: %s] [USERNAME: %s] [TYPE: %s] [SEARCH: %s]', options.appName, options.username, options.type, options.search)
  callback(null, options)
}

function getStudentsAndGroups (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.search) {
    return callback(new Error('Missing required input: options.search'), null)
  }
  if (!options.username) {
    return callback(new Error('Missing required input: options.username'), null)
  }

  async.waterfall([
    function (callback) {
      callback(null, options)
    },
    setOptions,
    getTeacherGroups,
    getBaseGroups,
    getContactGroups,
    mergeGroups,
    getStudentsInGroups,
    addStudentsToGroups,
    giveMe
  ], function (err, results) {
    if (err) {
      console.log(err)
      return callback(err)
    } else {
      return callback(null, results)
    }
  })
}

module.exports = getStudentsAndGroups
