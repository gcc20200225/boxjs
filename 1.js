let obj = JSON.parse($response.body);

obj.subscription = [{
    "openid": "oP_Ic0UbYmljV40YbLLUivM7sYRI",
    "assemblyid": "64dc89fefc8b470006421fb8",
    "assemblykey": "paymentchannelcoupon"
  }],

$done({body: JSON.stringify(obj)});
