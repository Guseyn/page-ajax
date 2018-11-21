const { AsyncObject } = require('@page-libs/cutie');
const responseFromAjaxRequest = require('./custom-calls/responseFromAjaxRequest');

// Represented result is {statusCode, headers, body}
class ResponseFromAjaxRequest extends AsyncObject {

  constructor(options, requestBody) {
    super(options, requestBody);
  }

  definedAsyncCall() {
    return responseFromAjaxRequest;
  }

}

module.exports = ResponseFromAjaxRequest;
