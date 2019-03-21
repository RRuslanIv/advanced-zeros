module.exports = function getZerosCount(number, base) {
  var n = 2;
  var arr = []
   while (n <= base) {
         if (base % n == 0) {
           arr.push(n)
           base = base / n;
         } else n++;
    return arr.reverse()
  }
  
  var count = 0
  var rez = []
  for ( let i = 0; i < arr.length; i++) {
    let del = arr[i]
    while (del <= number) {
      count += Math.floor(number / del)
      del *= arr[i]
    } 
    rez.push(count)
  }
  	return rez[0]
}