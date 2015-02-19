/*
 * subot
 * http://github.com/iissnan/subot
 *
 * Copyright (c) 2014 iissnan
 * Licensed under the MIT license.
 */

var util = require('util');
var chalk = require('chalk');
var type = require('type.is');
var subot = {};


module.exports = subot;

function write(level, message) {
  switch (level.toLowerCase()) {
    case 'log':
      level = chalk.gray(level);
      break;
    case 'info':
      level = chalk.blue(level);
      break;
    case 'warn':
      level = chalk.yellow(level);
      break;
    case 'error':
      level = chalk.red(level);
      break;
    default:
      level = chalk.gray(level);
  }

  message = util.format('[%s] %s', level, message);

  console.log(message);

  return message;
}

['log', 'info', 'warn', 'error'].forEach(function (level) {
  subot[level] = function () {
    var args = [].slice.call(arguments);
    args.map(function (arg) {
      return type(arg).is.object || type(arg).is.array ?
        util.inspect(arg) :
        arg;
    });
    var message = args.join(' ');

    return write(level.toUpperCase(), message);
  };
});
