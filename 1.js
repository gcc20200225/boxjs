let obj = JSON.parse($response.body);

obj.subscription = [{
  "code" : 0,
  "message" : "",
  "data" : {

  },
  "now" : 1692428496207
}
],

$done({body: JSON.stringify(obj)});
