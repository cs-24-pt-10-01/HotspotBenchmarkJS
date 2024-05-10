const { workerData } = require("worker_threads");

// test method from Rosetta code
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

console.log("Fib workerdata: " + workerData);
fib(workerData);
