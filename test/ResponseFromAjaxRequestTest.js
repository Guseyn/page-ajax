
'use strict'

require('./../mock')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { ResponseFromAjaxRequest } = require('./../src/index')

new DeepStrictEqualAssertion(
  new ResponseFromAjaxRequest({
    url: 'http://localhost:8000/',
    method: 'GET'
  }),
  {
    statusCode: 200,
    headers: { status: 'ok', message: 'ok' },
    body: 'mock response'
  }
).call()
