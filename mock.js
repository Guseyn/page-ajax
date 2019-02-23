'use strict'

const { AsyncObject } = require('@cuties/cutie')
const PageAsyncObject = require('@page-libs/cutie').AsyncObject
const index = require('./src/index')

// mock globalXMLHttpRequest
global.XMLHttpRequest = class {
  constructor () {
    let req = {

      DONE: 4,

      headers: {},
      responseHeaders: {
        status: 'ok',
        message: 'ok'
      },

      open (method, url, isAsync, user, password) {
        req.method = method
        req.url = url
        req.isAsync = isAsync
        req.user = user
        req.password = password
      },

      overrideMimeType: (overrideMimeType) => {
        req.overrideMimeType = overrideMimeType
      },

      setRequestHeader: (name, value) => {
        req.headers[name] = value
      },

      getAllResponseHeaders: () => {
        let headersStr = ''
        for (let header in req.responseHeaders) {
          headersStr += `${header}: ${req.responseHeaders[header]}\n`
        }
        return headersStr
      },

      send (body) {
        try {
          if (body !== null) {
            JSON.parse(body)
          }
          req.readyState = req.DONE
          req.status = 200
          req.response = 'mock response'
        } catch (error) {
          req.readyState = 0
        }
        req.onreadystatechange()
      }

    }

    return req
  }
}
