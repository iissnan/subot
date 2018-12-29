Simple wrapper of console.log with formatted style for Node.js. 

![Build Status](https://travis-ci.com/iissnan/subot.svg?branch=master)

```bash
npm install subot
```


```js
const subot = require('subot');

subot.text(message: string, indent?: number);

subot.text('Hello');
// Hello

subot.text('Hello', 2);
//   Hello

subot.log('Hello');
// [LOG] Hello

subot.info('Hello');
// [INFO] Hello

subot.warn('Hello');
// [WARN] Hello

subot.error('Hello');
// [ERROR] Hello

subot.success('Hello');
// [SUCCESS] Hello

subot.ok('Hello');
// [OK] Hello

subot.done('Hello');
// [DONE] Hello
```
