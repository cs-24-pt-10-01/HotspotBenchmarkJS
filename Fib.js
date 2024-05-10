// test method from Rosetta code
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

self.addEventListener('message', function (e) {
  // Extract the value of 'n' from the message sent by the main thread
  var n = e.data;

  // Call the 'fib' function from the main thread code and send back the result
  var result = fib(n);
  self.postMessage(result);
}, false);

module.exports.fib = fib;