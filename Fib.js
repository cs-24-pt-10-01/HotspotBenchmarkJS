// test method from Rosetta code
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

fib(47);
