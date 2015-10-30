# nodemsg

Super simple message logger for Node.js.

## Usage

Install from npm repository:

    npm install --save nodemsg


Import **nodemsg** module:

    var logger = require('nodemsg'); // name it as you like
  

Logs whatever you want, with 5 different renderings:

    logger.log('Simple log message');
    logger.info('Info message');
    logger.success('Urrah!');
    logger.warn('Achtung!');
    logger.error('Oh, no!');

![nodemsg_default_use](https://cloud.githubusercontent.com/assets/1291271/10843816/82ecb34e-7efb-11e5-9bda-d25ce4869ec6.png)

The methods act like `console.log`, so you can pass as many parameters you want:

    logger.log('I', 'am', 'a', 'simple', 'logger');

![nodemsg_multiple_parameters](https://cloud.githubusercontent.com/assets/1291271/10843818/870648f0-7efb-11e5-8e12-78a57f72262c.png)

The methods are all chainable; so you can write the previous line as:

    logger.log('Simple log message')
          .info('Info message')
          .success('Urrah!')
          .warn('Achtung!')
          .error('Oh, no!');

![nodemsg_chained](https://cloud.githubusercontent.com/assets/1291271/10843812/78b28214-7efb-11e5-91ca-683c37d4d6cd.png)

## Contribution

In order to ensure consistency when edit/build/publish the module, there are some "tricks" which play under the hood:

* a `preinstall` npm script copies some `git-hooks` from the `hooks` directory and put them in the project's `.git/hooks` folder:
  - `pre-commit` - runs eslint before commit and stop it if the linter returns error;
  - `pre-push` - runs test before push and stop it if tests return error.
* a `pretest` npm script runs eslint before the tests;
* a `prepublish` npm script runs tests before publishing to npm repository.

Tests are made with fantastic, noiseless, [TAPE](https://github.com/substack/tape) module and rendered piping the stdout into [tape-spec](https://github.com/scottcorgan/tap-spec) module.

This project is developed using [Git flow](http://nvie.com/posts/a-successful-git-branching-model/) model.

Fork the project, edit or use it as you like, make some pull requests to enhance the module: it's nice to be "open".
