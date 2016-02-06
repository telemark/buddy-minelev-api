'use strict'

var tap = require('tap')
var getStudentsInGroups = require('../lib/getStudentsInGroups')

tap.test('It requires a query.', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  getStudentsInGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It requires a query.', function (test) {
  var options = {
    results: false,
    query: true,
    search: true,
    username: true
  }
  var expectedErrorMessage = 'Missing required input: options.results'
  getStudentsInGroups(options, function (error, data) {
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
  getStudentsInGroups(options, function (error, data) {
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
  getStudentsInGroups(options, function (error, data) {
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
  getStudentsInGroups(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
