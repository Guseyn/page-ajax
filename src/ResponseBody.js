const { AsyncObject } = require('@page-libs/cutie');

class ResponseBody extends AsyncObject {

  constructor(response) {
    super(response);
  }

  definedSyncCall() {
    return (response) => {
      return response.body;
    }
  }

}

module.exports = ResponseBody;
