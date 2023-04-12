const transpose = function(matrix) {
  let trans = [];

  for (let column = 0; column < matrix[0].length; column++) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][column]);
    }
    trans.push(newRow);

  }
  return trans;

};

module.exports = transpose;