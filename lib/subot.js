const util = require('util');
const chalk = require('chalk');
const type = require('type.is');

module.exports = {
  text: register('text'),
  log: register('log'),
  info: register('info'),
  warn: register('warn'),
  error: register('error'),
  success: register('success'),
  ok: register('ok'),
  done: register('done'),
};

function write(level, message, indent) {
  const formatters = {
    log: chalk.gray,
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
    success: chalk.green,
    ok: chalk.green,
    done: chalk.green,
  };
  const formatter = formatters[level];
  const padding = ' '.repeat(indent);

  if (type(formatter).is.func) {
    level = formatter(level.toUpperCase());
    message = util.format('%s[%s] %s', padding, level, message);
  } else {
    message = util.format('%s%s', padding, message);
  }

  console.log(message);

  return message;
}

function register(level) {
  return (message, indent) => {
    const needInspect = type(message).is.object || type(message).is.array;

    return write(level, needInspect ? util.inspect(message) : message, indent);
  };
}
