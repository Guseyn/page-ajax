
'use strict'

require('./../mock')
const { StrictEqualAssertion } = require('@cuties/assert')
const { ResponseFromAjaxRequest, ResponseStatusCode } = require('./../src/index')

new StrictEqualAssertion(
  new ResponseStatusCode(
    new ResponseFromAjaxRequest({
      url: 'http://localhost:8000/',
      method: 'GET'
    })
  ),
  200
).call()
