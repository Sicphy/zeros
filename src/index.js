module.exports = function getZerosCount(number) {
  // your implementation
    var count = 0;
    while(number > 1) {
        number /=5;
        number = parseInt(number);
        count  += number;
    }
    return count;
}
