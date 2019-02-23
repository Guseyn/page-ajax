
'use strict'

require('./../mock')
const { StrictEqualAssertion } = require('@cuties/assert')
const { ResponseFromAjaxRequest, ResponseBody } = require('./../src/index')

new StrictEqualAssertion(
  new ResponseBody(
    new ResponseFromAjaxRequest(
      {
        url: 'http://localhost:8000/',
        method: 'GET',
        overrideMimeType: 'someType',
        headers: {
          name: 'value'
        }
      },
      JSON.stringify({ key: 'value' })
    )
  ),
  'mock response'
).call()

new StrictEqualAssertion(
  new ResponseBody(
    new ResponseFromAjaxRequest(
      {
        url: 'http://localhost:8000/',
        method: 'GET',
        overrideMimeType: 'someType',
        headers: {
          name: 'value'
        }
      },
      '"'
    )
  ),
  'mock response'
).call()
