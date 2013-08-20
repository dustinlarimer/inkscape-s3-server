// simple test
var fs = require('fs')
var request = require('request')

base64 = fs.readFileSync('./exampleBase64.txt')
request.post({
  url: "http://localhost:4444",
  form: {
    id: "testing.png",
    source: base64.toString()
  }
}, function(err, response, body) {
  console.log("RESPONSE", body)
})
