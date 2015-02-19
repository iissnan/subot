/* globals describe: true, it: true */
/* exported should */

var chalk = require('chalk');
var should = require('chai').should();
var sinon = require('sinon');

var subot = require('../lib/subot');

describe('log', function () {

  it('#log()', function () {
    sinon.stub(console, 'log', function () {});

    subot.log('foo').should.equal(
      '[' + chalk.gray('LOG') + '] foo'
    );

    console.log.restore();
  });

  it('#info()', function () {
    sinon.stub(console, 'log', function () {});

    subot.info('foo').should.equal(
      '[' + chalk.blue('INFO') + '] foo'
    );

    console.log.restore();
  });

  it('#warn()', function () {
    sinon.stub(console, 'log', function () {});

    subot.warn('foo').should.equal(
      '[' + chalk.yellow('WARN') + '] foo'
    );

    console.log.restore();
  });

  it('#error()', function () {
    sinon.stub(console, 'log', function () {});

    subot.error('foo').should.equal(
      '[' + chalk.red('ERROR') + '] foo'
    );

    console.log.restore();
  });

});
