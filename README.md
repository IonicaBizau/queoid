# queoid [![Support this project][donate-now]][paypal-donations]

A stupid simple and low-level queue library.

## Installation

```sh
$ npm i queoid
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

## License

MIT © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
