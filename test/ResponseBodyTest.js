
'use strict'

require('./../mock');
const { AsyncObject } = require('@cuties/cutie');
const { StrictEqualAssertion } = require('@cuties/assert');
const { ResponseFromAjaxRequest, ResponseBody } = require('./../src/index');

new StrictEqualAssertion(
  new ResponseBody(
    new ResponseFromAjaxRequest(
      'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
    )
  ),
  'mock response'
).call();
