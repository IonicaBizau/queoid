const Queoid = require("../lib");

var q = new Queoid();


q.push(function (cb) {
    setTimeout(function () {
        cb(42);
    }, 100);
});

    debugger
q.push(function (cb) {
    setTimeout(function () {
        cb("Foo");
    }, 50);
});

q.push(function (cb) {
    cb("Bar");
});

q.start(function (result) {
    console.log(result);
});

q.push(function (cb) {
    cb("Baz");
});
