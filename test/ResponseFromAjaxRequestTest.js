
'use strict'

require('./../mock');
const { AsyncObject } = require('@cuties/cutie');
const { DeepEqualAssertion } = require('@cuties/assert');
const { ResponseFromAjaxRequest } = require('./../src/index');

new DeepEqualAssertion(
  new ResponseFromAjaxRequest(
    'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
  ),
  { 
    statusCode: 200,
    headers: { status: 'ok', message: 'ok' },
    body: 'mock response'
  }
).call();
