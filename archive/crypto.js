const crypto =require('crypto');

const hash = crypto.createHash('sha256');
hash.update('mahdi');
console.log(hash.digest('hex'));
