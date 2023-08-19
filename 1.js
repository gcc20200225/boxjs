let obj = JSON.parse($response.body);

obj.subscription = [{
  "code" : 0,
  "message" : "",
  "data" : {
    "errormsg" : "成功",
    "data" : {
      "stockid" : "17854775",
      "couponid" : "48697321629",
      "openid" : "oP_Ic0UbYmljV40YbLLUivM7sYRI"
    },
    "issuccess" : true
  },
  "now" : 1692417661000
}],

$done({body: JSON.stringify(obj)});
