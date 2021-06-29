// FIBONACCI SEQUENCE
// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
function fibo(num) {
  const arr = [0, 1];
  let a;
  let b;
  for (let i = 2; i < num; i++) {
    a = arr[i - 1];
    b = arr[i - 2];
    arr.push(a + b);
  }
  return arr;
}
console.log(fibo(3));
