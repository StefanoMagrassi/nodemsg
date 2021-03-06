# nodemsg

Super simple message logger for Node.js.

[![Build Status](https://travis-ci.org/StefanoMagrassi/nodemsg.svg)](https://travis-ci.org/StefanoMagrassi/nodemsg)

## Usage

Install from npm repository:

    npm install --save nodemsg


Import **nodemsg** module:

```javascript
var logger = require('nodemsg'); // name it as you like
```

Logs whatever you want, with 5 different renderings:

```javascript
logger.log('Simple log message');
logger.info('Info message');
logger.success('Urrah!');
logger.warn('Achtung!');
logger.error('Oh, no!');
```

![default-use](https://cloud.githubusercontent.com/assets/1291271/12547287/d1c05622-c34f-11e5-88a7-a1b0eeda834f.png)

The methods act like `console.log`, so you can pass as many parameters you want:

```javascript
logger.log('I', 'am', 'a', 'simple', 'logger');
```
![multiple-params](https://cloud.githubusercontent.com/assets/1291271/12547292/d5f014d0-c34f-11e5-8444-2a3a051a1e95.png)

The methods are all chainable; so you can write the previous line as:

```javascript
logger.log('Simple log message')
      .info('Info message')
      .success('Urrah!')
      .warn('Achtung!')
      .error('Oh, no!');
```

![chained](https://cloud.githubusercontent.com/assets/1291271/12547291/d3fea97a-c34f-11e5-9f51-99655f54790b.png)

### Configuration

You can override defaults configuration passing a configuration object to `config()` method before using the module:

```javascript
var logger = require('nodemsg');
logger.config({ ... }); // Your configuration here

...

logger.log('Log stuff with your configuration');
logger.info('Configuration also apply on this message');
```

The `config()` method is a kind of getter/setter factory: if you pass an object as parameter, this will be merged with default; otherwise, if you call the method without parameter it will get the current configuration.

#### Defaults

- **`silent`** (default: **false**): when `true` it doesn't log anything in the console;
- **`before`** (default: **'>'**): string prepended before logged messages;
- **`after`** (default: **''**): string appended after logged messages.

## Contribution

In order to ensure consistency when edit/build/publish the module, there are some "tricks" which play under the hood:

* a `pretest` npm script runs eslint before the tests;
* a `prepublish` npm script runs tests before publishing to npm repository.

Tests are made with fantastic, noiseless, [TAPE](https://github.com/substack/tape) module and rendered piping the stdout into [tape-spec](https://github.com/scottcorgan/tap-spec) module.

This project is developed using [Git flow](http://nvie.com/posts/a-successful-git-branching-model/) model.

There also is an integration with [Travis CI](https://travis-ci.org/StefanoMagrassi/nodemsg).

Fork the project, edit or use it as you like, make some pull requests to enhance the module: it's nice to be "open".
