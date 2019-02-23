const { AsyncObject } = require('@page-libs/cutie')

class ResponseHeaders extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.headers
    }
  }
}

module.exports = ResponseHeaders
