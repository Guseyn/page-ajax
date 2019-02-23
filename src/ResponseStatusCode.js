const { AsyncObject } = require('@page-libs/cutie')

class ResponseStatusCode extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.statusCode
    }
  }
}

module.exports = ResponseStatusCode
