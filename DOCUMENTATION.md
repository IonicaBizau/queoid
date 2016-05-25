## Documentation

You can see below the API reference of this module.

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

