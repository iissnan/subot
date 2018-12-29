const { describe, it } = require('mocha');
const chalk = require('chalk');
const { expect } = require('chai');
const subot = require('../');

describe('Subot', function () {

  it('text()', () => {
    expect(subot.text('foo')).to.equal(`foo`);
    expect(subot.text('foo', 2)).to.equal(`  foo`);
  });

  it('log()', function () {
    expect(subot.log('foo')).to.equal(`[${chalk.gray('LOG')}] foo`);
    expect(subot.log('foo', 2)).to.equal(`  [${chalk.gray('LOG')}] foo`);
  });

  it('info()', function () {
    expect(subot.info('foo')).to.equal(`[${chalk.blue('INFO')}] foo`);
    expect(subot.info('foo', 3)).to.equal(`   [${chalk.blue('INFO')}] foo`);
  });

  it('warn()', function () {
    expect(subot.warn('foo')).to.equal(`[${chalk.yellow('WARN')}] foo`);
    expect(subot.warn('foo', 4)).to.equal(`    [${chalk.yellow('WARN')}] foo`);
  });

  it('error()', function () {
    expect(subot.error('foo')).to.equal(`[${chalk.red('ERROR')}] foo`);
    expect(subot.error('foo', 5)).to.equal(`     [${chalk.red('ERROR')}] foo`);
  });

  it('success()', function () {
    expect(subot.success('foo')).to.equal(`[${chalk.green('SUCCESS')}] foo`);
    expect(subot.success('foo', 6)).to.equal(`      [${chalk.green('SUCCESS')}] foo`);
  });

  it('ok()', function () {
    expect(subot.ok('foo')).to.equal(`[${chalk.green('OK')}] foo`);
    expect(subot.ok('foo', 7)).to.equal(`       [${chalk.green('OK')}] foo`);
  });

  it('done()', function () {
    expect(subot.done('foo')).to.equal(`[${chalk.green('DONE')}] foo`);
    expect(subot.done('foo', 8)).to.equal(`        [${chalk.green('DONE')}] foo`);
  });

});
