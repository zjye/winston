'use strict';

/*
 * default-exceptions.js: A test fixture for logging exceptions with the default winston logger.
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENCE
 *
 */

const path = require('path');
const winston = require('../../../lib/winston');

winston.exitOnError = err => {
  process.stdout.write(err.message);
  return err.message !== 'Ignore this error';
};

winston.handleExceptions([
  new winston.transports.File({
    filename: path.join(__dirname, '..', 'logs', 'exit-on-error.log'),
    handleExceptions: true
  })
]);

setTimeout(() => {
  throw new Error('Ignore this error');
}, 100);
