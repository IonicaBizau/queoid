// Require ../lib
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
