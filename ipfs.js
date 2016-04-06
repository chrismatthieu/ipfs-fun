// https://www.npmjs.com/package/ipfs-js

'use strict';

var ipfs = require('ipfs-js');
ipfs.setProvider(require('ipfs-api')('localhost', '5001'))

ipfs.add("module.exports = function(a, b) {return a + b;};", function(err, hash) {
	if (err) throw err; // If connection is closed
	console.log(hash); 	// "Qmc7CrwGJvRyCYZZU64aPawPj7CJ56vyBxdhxa38Dh1aKt"

  ipfs.cat(hash, function(err, buffer) {
  	if (err) throw err;
  	console.log(buffer.toString());
    var add = eval(buffer.toString());
    console.log(add(1, 2));
  });

});

// ipfs.cat("QmXctmnj6tEMSJsb433jKwcdGwuBy4uGMnqva5Nkvp5E7x", function(err, buffer) {
// 	if (err) throw err;
// 	console.log(buffer.toString());
//   var add = eval(buffer.toString());
//   console.log(add(1, 2));
// });
