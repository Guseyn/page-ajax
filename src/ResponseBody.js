const { AsyncObject } = require('@page-libs/cutie')

class ResponseBody extends AsyncObject {
  constructor (response) {
    super(response)
  }

  syncCall () {
    return (response) => {
      return response.body
    }
  }
}

module.exports = ResponseBody
