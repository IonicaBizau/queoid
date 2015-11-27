"use strict";

class Queoid {

    /**
     * Queoid
     * Creates a new function queue.
     *
     * @name Queoid
     * @function
     * @param {Function} fn The function to call when the queue is ended.
     */
    constructor (fn) {

        this._q = [];
        this._start = null;
        this._ended = false;
        this._result = [];
        this._running = false;

        if (fn) {
            process.nextTick(this.start, fn);
        }
    }

    /**
     * done
     * This function ends the queue. This is called internally (in most cases
     * you don't have to call it manually).
     *
     * @name done
     * @function
     */
    done () {
        this._ended = true;
        this._start(this._result);
    }

    /**
     * check
     * Checks the state of the queue and runs the next function.
     *
     * @name check
     * @function
     */
    check () {

        if (this._running) { return; }

        var self = this
          , _fn = this._q.shift()
          ;

        if (!_fn) {
            return this.done();
        }

        self._running = true;
        var cb = function () {
                self._running = false;
                self._result.push(arguments);
                self.check();
            }
          , args = [_fn.fn].concat(_fn.args).concat([cb])
          ;

        process.nextTick.apply(this, args);
    }

    /**
     * push
     * Adds a new function in the queue.
     *
     * @name push
     * @function
     * @param {Function} fn The function to push in the queue.
     * @param {Array} args The arguments used to call the function.
     */
    push (fn, args) {

        if (this._ended) { return; }

        this._q.push({ fn: fn, args: args || [] });

        if (this._start) {
            this.check();
        }
    }

    /**
     * start
     * Start the function queue execution.
     *
     * @name start
     * @function
     * @param {Function} fn The function to call when the queue is ended.
     */
    start (fn) {
        this._start = fn;
        this.check();
    }
}

module.exports = Queoid;
