'use strict'

var tap = require('tap')
var getStudentsAndGroups = require('../lib/getStudentsAndGroups')

tap.test('It requires a query.', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getStudentsAndGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a query.', function (test) {
  var options = {
    search: false
  }
  var expectedErrorMessage = 'Missing required input: options.search'
  getStudentsAndGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
