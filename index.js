let matrix = [
  [1, 2, "#"],
  ["#", 16, 32],
  [64, "#", 256],
  [512, 1024, "#"],
  [4096, "#", 16384]
];

let power = 0;
for (let i = 0; i < matrix.length; i++) {
  for ( let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] == "#") {
      matrix[i][j] = 2 ** power;
    }
    power ++;
  }
}

console.log(matrix)