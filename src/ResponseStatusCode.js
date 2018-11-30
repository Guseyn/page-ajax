const { AsyncObject } = require('@page-libs/cutie');

class ResponseStatusCode extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.statusCode;
    }
  }

}

module.exports = ResponseStatusCode;
