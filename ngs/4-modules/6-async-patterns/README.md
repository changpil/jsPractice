# JavaScript Runtime: Event Loop, Task Queue, and Microtask Queue

## Runtime Components

```text
 ┌─────────────────────┐
 │      Call Stack     │
 │  (runs JS right now)│
 └─────────┬───────────┘
           │
           ▼
 ┌─────────────────────┐
 │     Event Loop      │
 │ decides what runs   │
 │       next          │
 └───────┬─────┬───────┘
         │     │
         ▼     ▼
 ┌─────────────┐   ┌─────────────┐
 │ Microtask   │   │ Task Queue  │
 │   Queue     │   │(Macrotasks) │
 └─────────────┘   └─────────────┘
```

## 1. Call Stack

The **Call Stack** runs JavaScript **right now**.

- Synchronous code runs immediately.
- Function calls are pushed onto the stack.
- When a function returns, it leaves the stack.

Example:

```js
console.log("A")
console.log("B")
```

---

## 2. Scheduling Future Work

While current code runs, JavaScript may schedule future work.

### A. Microtasks

A **microtask** is a higher-priority deferred job that runs **before the next task** after the current code finishes.

Common sources:

- `Promise.then`
- `Promise.catch`
- `Promise.finally`
- `queueMicrotask`
- `MutationObserver` (browser)
- `process.nextTick` (Node, special case with even higher priority)

Example:

```js
Promise.resolve().then(() => console.log("promise"))
```

That callback is added to the **microtask queue**.

### B. Tasks / Macrotasks / Event Loop Callbacks

A **task** is a unit of work scheduled to run later in the event loop.

Common sources:

- `setTimeout`
- `setInterval`
- `setImmediate`
- I/O callbacks
- socket/network callbacks
- DOM event callbacks
- UI events (browser)

Example:

```js
setTimeout(() => console.log("timer"), 0)
```

That callback is registered for later.

---

## 3. Task Queue

The **task queue** stores tasks waiting to run.

Also commonly called:

- Task Queue
- Macrotask Queue
- Callback Queue
- Event Queue

Notes:

- It contains asynchronous tasks.
- In browsers, people often model this as one task queue.
- In Node.js, this is a simplification because Node internally uses event loop phases.

---

## 4. Microtask Queue

The **microtask queue** stores pending microtasks.

Common contents:

- `Promise.then`
- `Promise.catch`
- `Promise.finally`
- `queueMicrotask`
- `MutationObserver` (browser)
- `process.nextTick` (Node special case, usually treated separately)

Key rule:

> Microtasks run before the next task.

More precisely:

> After the currently running code finishes, JavaScript drains all microtasks before moving to the next task.

---

## 5. Node.js Runtime: Short Memory Version

```text
1. Run current code on the call stack.
2. While running, schedule:
   - microtasks
   - future callbacks/tasks/events
3. When current code finishes, drain all microtasks.
4. Pick one next callback/task from the runtime.
5. Run it to completion.
6. Drain all microtasks created by it.
7. Repeat while runtime still has work.
8. Exit when no work/active handles remain.
```

---

## 6. JavaScript / Node.js Runtime: Holistic Version

```text
1. Start running code on the call stack.

2. While current code runs:
   - synchronous code executes immediately
   - Promise handlers are queued in the microtask queue
   - timers, I/O, and event callbacks are scheduled in the runtime for later

3. When the current call stack becomes empty:
   - drain all microtasks
   - if those microtasks schedule more microtasks, keep draining

4. After microtasks are empty:
   - the event loop selects the next available callback/task/event-phase callback
   - run that one callback to completion on the call stack

5. When that callback finishes:
   - drain all microtasks again

6. Repeat:
   - next callback/task
   - then all microtasks
   - next callback/task
   - then all microtasks

7. Continue while the runtime still has work to do:
   - scheduled timers
   - I/O
   - open handles
   - events
   - queued callbacks

8. Exit when no more work/active handles remain.
```

---

## 7. Example

```js
console.log("start")
setTimeout(() => console.log("timeout"))
Promise.resolve().then(() => console.log("promise"))
process.nextTick(() => console.log("nextTick"))
console.log("end")
```

### Execution Order

1. Synchronous code on the call stack:

```text
start
end
```

2. Node-specific high-priority queue:

```text
nextTick
```

3. Promise microtasks:

```text
promise
```

4. Task queue / timer callback:

```text
timeout
```

### Final Output

```text
start
end
nextTick
promise
timeout
```

---

## 8. Final Mental Model

```text
Run current code
→ drain all microtasks
→ run one next task/callback
→ drain all microtasks
→ repeat while runtime has work
```

---

## 9. Important Notes

- **Synchronous code always runs first.**
- **Microtasks run before the next task.**
- **Microtasks are drained completely.**
- **Only one task/callback is run at a time, then microtasks are drained again.**
- In **Node.js**, `process.nextTick` runs before Promise microtasks.
- A **pending Promise alone does not keep Node alive**.
- Node exits when there are no active handles, timers, I/O operations, or other scheduled work remaining.

---

# JavaScript async/await Cheat Sheet

## 1. What `async` Does

When a function is declared with `async`, it **always returns a Promise**.

### Example

```js
async function getData() {
  return "hello"
}

const p = getData()
console.log(p)
```

Output:

```
Promise { "hello" }
```

Even though `"hello"` is returned, JavaScript automatically wraps it in a Promise.

### Equivalent Promise Version

```js
function getData() {
  return Promise.resolve("hello")
}
```

---

# 2. What `await` Does

`await` pauses the execution of an **async function** until the Promise settles (resolved or rejected).

Conceptually:

```
await promise
↓
pause function execution
↓
resume when promise resolves
```

Example:

```js
const user = await getUser()
```

This is conceptually similar to:

```js
getUser().then((user) => {
  // continue execution
})
```

---

# 3. Promise Chain vs async/await

### Promise Chaining

```js
getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => getTotal(orders))
  .then((total) => console.log(total))
  .catch((err) => console.error(err))
```

### async/await Version

```js
async function run() {
  try {
    const user = await getUser()
    const orders = await getOrders(user.id)
    const total = await getTotal(orders)

    console.log(total)
  } catch (err) {
    console.error(err)
  }
}
```

Advantages of `async/await`:

- Reads like synchronous code
- Easier error handling with `try/catch`
- Less nested callbacks

---

# 4. Parallel Execution Difference

Using `await` sequentially can cause operations to run **one after another**.

### Sequential Execution

```js
const user = await fetchUser()
const orders = await fetchOrders()
const products = await fetchProducts()
```

This waits for each operation before starting the next.

### Parallel Execution (Promise)

```js
Promise.all([fetchUser(), fetchOrders(), fetchProducts()]).then(
  ([user, orders, products]) => {
    console.log(user, orders, products)
  },
)
```

### Parallel Execution with async/await

```js
const [user, orders, products] = await Promise.all([
  fetchUser(),
  fetchOrders(),
  fetchProducts(),
])
```

This runs all requests at the **same time** and waits for them together.

---

# 5. When You Must Use Promises

Even with `async/await`, some Promise utilities are still necessary.

Common Promise APIs:

```
Promise.all()
Promise.race()
Promise.allSettled()
Promise.any()
```

Examples:

```js
Promise.race([promise1, promise2])
Promise.allSettled([promise1, promise2])
```

These patterns cannot be replaced by `await` alone.

---

# 6. Key Takeaway

```
Promise = the underlying async mechanism
async/await = syntax sugar built on Promises
```

`async/await` makes asynchronous code easier to read, but **Promises are still the core model behind it**.
