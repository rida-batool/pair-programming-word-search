const transpose = require('./transpose');

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log(horizontalJoin);
  if (horizontalJoin.includes(word)) {
    return true;
  }
  else {
    const trans = transpose(letters);
    const verticalJoin = trans.map(ls => ls.join(''));
    if (verticalJoin.includes(word)) {
      return true;
    }
    return false;
  }
};


module.exports = wordSearch;