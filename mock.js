'use strict'

const { AsyncObject } = require('@cuties/cutie');
const PageAsyncObject = require('@page-libs/cutie').AsyncObject;
const index = require('./src/index');

// mock globalXMLHttpRequest

global.XMLHttpRequest = class {

  constructor() {
    let req = {

      headers: {},
      responseHeaders: {
        status: 'ok',
        message: 'ok'
      },

      open(method, url, isAsync, user, password) {
        req.method = method;
        req.url = url;
        req.isAsync = isAsync;
        req.user = user;
        req.password = password;
      },

      overrideMimeType: (overrideMimeType) => {
        req.overrideMimeType = overrideMimeType;
      },

      setRequestHeader: (name, value) => {
        req.header[name] = value;
      },

      getAllResponseHeaders: () => {
        let headersStr = '';
        for (let header in  req.responseHeaders) {
          headersStr += `${header}: ${req.responseHeaders[header]}\n`;
        }
        return headersStr;
      },

      send(body) {
        req.status = 200;
        req.response = "mock response";
        req.onreadystatechange();
      }

    }

    return req;
  }

}

// transform all async objects from @page-libs/cutie to @cuties/cutie for testing

for (let key in index) {
  if (index[key].prototype instanceof PageAsyncObject) {
    Object.setPrototypeOf(index[key].prototype, AsyncObject.prototype);
    Object.setPrototypeOf(index[key], AsyncObject);
  }
}
