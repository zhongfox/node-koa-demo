let [a, b, c] = [1, 2, 3];
let d = [a, b, c].map(item => item + 1);

for (let x of d) {
  console.log(x);
}
