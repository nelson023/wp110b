不會所以找網路

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib(10)
// 55
fib(6)
// 8

https://jimmyswebnote.com/javascript-fibonacci-numbers/
