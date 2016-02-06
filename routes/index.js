'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse,
    config: {
      auth: false,
      cors: false
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/search/{search}',
    handler: handlers.searchStudents,
    config: {
      description: 'Return students in classes',
      validate: {
        params: {
          username: Joi.string().min(3).max(40).required(),
          search: Joi.string().min(1).max(40).required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/students/{id}',
    handler: handlers.getStudents,
    config: {
      description: 'Return student groups',
      validate: {
        params: {
          username: Joi.string().min(3).max(40).required(),
          id: Joi.string().min(3).max(40).required()
        }
      }
    }
  }
]

module.exports = routes
