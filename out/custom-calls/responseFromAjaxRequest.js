"use strict";

// custom call
// err, {statusCode, headers, body} in callback
// options: {url, method, headers, body, mimeType, withCredentials, user, password, timeout}
var responseFromAjaxRequest = function responseFromAjaxRequest(options, requestBody, callback) {
  var resObj = {};
  var req = new XMLHttpRequest();
  req.open(options.method, options.url, true, options.user || null, options.password || null);
  req.withCredentials = options.withCredentials || false;
  req.timeout = options.timeout || 0;

  if (options.overrideMimeType) {
    req.overrideMimeType(options.overrideMimeType);
  }

  var headers = options.headers || [];

  for (var header in headers) {
    req.setRequestHeader(header, headers[header]);
  }

  req.onreadystatechange = function () {
    if (req.readyState === req.DONE) {
      resObj.statusCode = req.status;
      var allHeadersStr = req.getAllResponseHeaders().trim();
      var headerMap = {};

      if (allHeadersStr.length !== 0) {
        var _headers = allHeadersStr.split(/[\r\n]+/);

        _headers.forEach(function (line) {
          var parts = line.split(/\:\s*/);
          var header = parts.shift();
          var value = parts.join(': ');
          headerMap[header] = value;
        });
      }

      resObj.headers = headerMap;

      if (req.status === 200) {
        resObj.body = req.response;
      } else {
        resObj.body = null;
      }

      callback(null, resObj);
    }
  };

  req.send(options.body || null);
};

module.exports = responseFromAjaxRequest;
