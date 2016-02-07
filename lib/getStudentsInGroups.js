'use strict'

var buddyQuery = require('./buddyQuery')

function getStudentsInGroups (options, callback) {
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

  var groups = options.results
  var i = 0
  var studentList = []
  var groupList = []
  groups.forEach(function (group) {
    var qry = options.query.studentsInGroup.replace('@id', group.id)
    qry = qry.replace('@search', options.search)
    buddyQuery(qry, function (err, students) {
      if (err) {
        return callback(err)
      }
      // Checks if students in group is returned
      if (students[0][0]) {
        // Add group to list
        groupList.push(group)
        // Add students to list
        Array.prototype.push.apply(studentList, students)
      }
      i++
      if (i === groups.length) {
        var result = {
          students: studentList,
          groups: groupList
        }
        options.result = result
        return callback(null, options)
      }
    })
  })
}

module.exports = getStudentsInGroups
