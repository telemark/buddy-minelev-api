'use strict'

var tap = require('tap')
var getTeacherGroups = require('../lib/getTeacherGroups')

tap.test('It requires a query.', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getTeacherGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a query.', function (test) {
  var options = {
    results: true,
    query: false,
    search: true,
    username: true
  }
  var expectedErrorMessage = 'Missing required input: options.query'
  getTeacherGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a query.', function (test) {
  var options = {
    results: true,
    query: true,
    search: false,
    username: true
  }
  var expectedErrorMessage = 'Missing required input: options.search'
  getTeacherGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a query.', function (test) {
  var options = {
    results: true,
    query: true,
    search: true,
    username: false
  }
  var expectedErrorMessage = 'Missing required input: options.username'
  getTeacherGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
