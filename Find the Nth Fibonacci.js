/*Formular to find the nth: F(n) = F(n-1) + F(n-2), where F(1) = 0 and F(2) = 1;
*Optimal Space & Time Complexity
O(n) time | O(1) - where n is the input number*/

// Solution 1
// O(2^n) time | O(n) space
function getNthFib(n) {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

// Solution 2
// O(n) time | O(n) space
function getNthFib(n, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}

// Solution 3
// O(n) time | O(1) space
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

exports.getNthFib = getNthFib;