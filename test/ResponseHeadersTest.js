
'use strict'

require('./../mock')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { ResponseFromAjaxRequest, ResponseHeaders } = require('./../src/index')

new DeepStrictEqualAssertion(
  new ResponseHeaders(
    new ResponseFromAjaxRequest({
      url: 'http://localhost:8000/',
      method: 'GET',
      headers: {
        name: 'value'
      }
    })
  ),
  { status: 'ok', message: 'ok' }
).call()
