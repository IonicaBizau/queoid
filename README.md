
# queoid

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/queoid.svg)](https://www.npmjs.com/package/queoid) [![Downloads](https://img.shields.io/npm/dt/queoid.svg)](https://www.npmjs.com/package/queoid)

> A stupid simple and low-level queue library.

## :cloud: Installation

```sh
$ npm i --save queoid
```


## :clipboard: Example



```js
// Require ../lib
const Queoid = require("queoid");

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`tester`](https://github.com/IonicaBizau/tester#readme)—Unit testing made simple and fun: flat colors and emoji in your tests.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
