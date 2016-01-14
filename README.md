# queoid [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/queoid.svg)](https://www.npmjs.com/package/queoid) [![Downloads](https://img.shields.io/npm/dt/queoid.svg)](https://www.npmjs.com/package/queoid) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A stupid simple and low-level queue library.

## Installation

```sh
$ npm i --save queoid
```

## Example

```js
// Require queoid
const Queoid = require("../lib");

// Create a new queue
var q = new Queoid();

// Push some functions
q.push(function (cb) {
    setTimeout(function () {
        cb(42);
    }, 100);
});

// Push a function with aditional arguments
q.push(function (bar, num, cb) {
    setTimeout(function () {
        cb("Foo " + bar + " " + num);
    }, 50);
}, ["bar", 42]);

// Start the execution
q.start(function (result) {
    console.log(result);
    // => [ { '0': 42 }, { '0': 'Foo bar 42' }, { '0': 'Baz' } ]
});

// Push another function after starting the execution
q.push(function (cb) {
    cb("Baz");
});
```

## Documentation

### `Queoid(fn)`
Creates a new function queue.

#### Params
- **Function** `fn`: The function to call when the queue is ended.

### `done()`
This function ends the queue. This is called internally (in most cases
you don't have to call it manually).

### `check()`
Checks the state of the queue and runs the next function.

### `push(fn, args)`
Adds a new function in the queue.

#### Params
- **Function** `fn`: The function to push in the queue.
- **Array** `args`: The arguments used to call the function.

### `start(fn)`
Start the function queue execution.

#### Params
- **Function** `fn`: The function to call when the queue is ended.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`tester`](https://github.com/IonicaBizau/tester#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md