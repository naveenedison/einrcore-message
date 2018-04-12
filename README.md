<img src="http://bitcore.io/css/images/module-message.png" alt="einrcore message" height="35">
# einrcoin Message Verification and Signing for einrcore


[![NPM Package](https://img.shields.io/npm/v/einrcore-message.svg?style=flat-square)](https://www.npmjs.org/package/einrcore-message)
[![Build Status](https://img.shields.io/travis/naveenedison/einrcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/naveenedison/einrcore-message)
[![Coverage Status](https://img.shields.io/coveralls/naveenedison/einrcore-message.svg?style=flat-square)](https://coveralls.io/r/naveenedison/einrcore-message?branch=master)

einrcore-message adds support for verifying and signing einrcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main einrcore repo](https://github.com/naveenedison/einrcore) for more information.

## Getting Started

```sh
npm install einrcore-message
```

```sh
bower install einrcore-message
```

To sign a message:

```javascript
var einrcore = require('einrcore-lib');
var Message = require('einrcore-message');

var privateKey = einrcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/naveenedison/einrcore/blob/master/CONTRIBUTING.md) on the main einrcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/naveenedison/einrcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The einrcoin Core Developers

