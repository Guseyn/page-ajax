
'use strict'

require('./../mock');
const { AsyncObject } = require('@cuties/cutie');
const { DeepEqualAssertion } = require('@cuties/assert');
const { ResponseFromAjaxRequest, ResponseHeaders } = require('./../src/index');

new DeepEqualAssertion(
  new ResponseHeaders(
    new ResponseFromAjaxRequest(
      'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
    )
  ),
  { status: 'ok', message: 'ok' }
).call();
