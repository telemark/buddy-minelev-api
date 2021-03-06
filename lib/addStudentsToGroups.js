'use strict'

var logger = require('./logger')

function addStudentsToGroups (options, callback) {
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

  var result = options.result
  var students = result['students']
  var groups = result['groups']

  var list = []
  var tmp = {}

  if (!students[0]) {
    var noStudentsMessage = {
      statusCode: 404,
      error: 'No students found',
      message: 'Ingen elever funnet'
    }
    logger.info('[APPNAME: %s] [USERNAME: %s] [TYPE: %s] [SEARCH: %s] [MESSAGE: %s]', options.appName, options.username, options.type, options.search, noStudentsMessage.error)
    return callback(noStudentsMessage)
  }
  students.forEach(function (arr, index) {
    arr.forEach(function (student) {
      var key = student.personalIdNumber
      if (!tmp[key]) {
        tmp[key] = student
        tmp[key].contactTeacher = false
        tmp[key].unitId = groups[index].unitId
        tmp[key].unitName = groups[index].unitName
        tmp[key].organizationNumber = groups[index].organizationNumber
        tmp[key].mainGroupName = groups[index].id.replace(/\/(.*)/, '')
        tmp[key].groups = [groups[index]]
        if (groups[index].contactTeacher === true) {
          tmp[key].contactTeacher = true
        }
      } else {
        if (groups[index].contactTeacher === true) {
          tmp[key].contactTeacher = true
        }
        // Hvis gruppe er klassegruppe skal ikke denne taes med i gruppelistevisning
        if (groups[index].groupType !== 'Klassegruppe') {
          tmp[key].groups.push(groups[index])
        }
      }
    })
  })

  // Populates the new list
  Object.keys(tmp).forEach(function (thisKey) {
    var item = tmp[thisKey]
    list.push(item)
  })
  callback(null, list)
}

module.exports = addStudentsToGroups
