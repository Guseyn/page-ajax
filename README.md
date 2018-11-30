# page-ajax
Ajax plugin for [Page](https://github.com/Guseyn/page/) framework. 

[![NPM Version][npm-image]][npm-url]

It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## install

`npm install @page-libs/ajax`

## build

`npm run build`

Package is already built. So, for using in Page you just need to install it.

## test

`npm test`

# Examples

```js
new ResponseFromAjaxRequest({
  url: 'http://localhost:8000/',
  method: 'GET' 
}).call();

```

# Usage

```js
const {
  // Here needed async objects from the table below
} = require('@page-libs/ajax');
```

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ResponseBody` | `response.body, response = {statusCode, headers, body}` | `response({statusCode, headers, body})` | [body](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response#Value) |
| `ResponseFromAjaxRequest` | [responseFromAjaxRequest](https://github.com/Guseyn/page-ajax/blob/master/src/custom-calls/responseFromAjaxRequest.js) | `options[, requestBody] (options = {url, method, headers, body, mimeType, withCredentials, user, password, timeout},` [requestBody](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send#Parameters)`)` | `response({statusCode, headers, body})` |
| `ResponseHeaders` | `response.headers, response = {statusCode, headers, body}` | `response({statusCode, headers, body})` | `object` |
| `ResponseStatusCode` | `response.statusCode, response = {statusCode, headers, body}` | `response({statusCode, headers, body})` | `number` |

[npm-image]: https://img.shields.io/npm/v/@page-libs/ajax.svg
[npm-url]: https://npmjs.org/package/@page-libs/ajax
