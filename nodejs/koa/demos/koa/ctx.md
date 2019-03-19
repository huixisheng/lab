{
  "request": {
    "method": "GET",
    "url": "/",
    "header": {
      "host": "localhost:3000",
      "connection": "keep-alive",
      "cache-control": "max-age=0",
      "upgrade-insecure-requests": "1",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      "cookie": "Hm_lvt_b69a52ce3eea32178dcf7e16e46003ef=1536052624; Hm_lvt_a09d09de8d812e415fa53460063c4c02=1547795342; Hm_lvt_10068563a5518f89d31fadfaa7025b4d=1548139260"
    }
  },
  "response": {
    "status": 404,
    "message": "Not Found",
    "header": {}
  },
  "app": {
    "subdomainOffset": 2,
    "proxy": false,
    "env": "development"
  },
  "originalUrl": "/",
  "req": "<original node req>",
  "res": "<original node res>",
  "socket": "<original node socket>"
}

request: [
  "app",
  "req",
  "res",
  "ctx",
  "response",
  "originalUrl"
]

response: [
  "app",
  "req",
  "res",
  "ctx",
  "request"
]

app: [
  "_events",
  "_eventsCount",
  "_maxListeners",
  "proxy",
  "middleware",
  "subdomainOffset",
  "env",
  "context",
  "request",
  "response"
]

req: [
  "_readableState",
  "readable",
  "_events",
  "_eventsCount",
  "_maxListeners",
  "socket",
  "connection",
  "httpVersionMajor",
  "httpVersionMinor",
  "httpVersion",
  "complete",
  "headers",
  "rawHeaders",
  "trailers",
  "rawTrailers",
  "aborted",
  "upgrade",
  "url",
  "method",
  "statusCode",
  "statusMessage",
  "client",
  "_consuming",
  "_dumped"
]

res: [
  "_events",
  "_eventsCount",
  "_maxListeners",
  "output",
  "outputEncodings",
  "outputCallbacks",
  "outputSize",
  "writable",
  "_last",
  "chunkedEncoding",
  "shouldKeepAlive",
  "useChunkedEncodingByDefault",
  "sendDate",
  "_removedConnection",
  "_removedContLen",
  "_removedTE",
  "_contentLength",
  "_hasBody",
  "_trailer",
  "finished",
  "_headerSent",
  "socket",
  "connection",
  "_header",
  "_onPendingData",
  "_sent100",
  "_expect_continue",
  "statusCode",
  "__onFinished"
]

originalUrl: [
  "0",
  "length"
]

state: []