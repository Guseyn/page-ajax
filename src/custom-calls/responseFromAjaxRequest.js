// custom call
// err, {statusCode, headers, body} in callback
// options: {url, method, headers, body, mimeType, withCredentials, user, password, timeout}
const responseFromAjaxRequest = (options, requestBody, callback) => {
  let resObj = {};
  const req = new XMLHttpRequest();
  req.open(options.method, options.url, true, options.user || null, options.password || null);
  req.withCredentials = options.withCredentials || false;
  req.timeout = options.timeout || 0;
  if (options.overrideMimeType) {
    req.overrideMimeType(options.overrideMimeType);
  }
  let headers = options.headers || [];
  for (let header in headers) {
    req.setRequestHeader(header, headers[header]);
  }
  req.onreadystatechange = function () {
    if (req.readyState === req.DONE) {
      resObj.statusCode = req.status;
      let allHeadersStr = req.getAllResponseHeaders().trim();
      let headerMap = {};
      if (allHeadersStr.length !== 0) {
        let headers = allHeadersStr.split(/[\r\n]+/);
        headers.forEach(line => {
          let parts = line.split(/\:\s*/);
          let header = parts.shift();
          let value = parts.join(': ');
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
}

module.exports = responseFromAjaxRequest;
