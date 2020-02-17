module.exports = function countCats(matrix) {
  const result = [];
  matrix.forEach(element => {
    element.forEach((el) => {
      if(el === '^^') {
        result.push(el);
      }
    })
  });
  return result.length;
};
