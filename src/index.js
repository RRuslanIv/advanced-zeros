module.exports = function getZerosCount(number, base) {
	let n = 2;
	let arr = []
	while (n <= base) {
		if (base % n === 0) {
			arr.unshift(n)
			base = Math.floor(base / n);
		} else n++;
	}
	let count = 0
	let rez = []
	for (let i = 0; i < arr.length; i++) {
		let del = arr[i]
		while (del <= number) {
			count += Math.floor(number / del)
			del *= arr[i]
		}
		rez.push(count)
	}

	var quant = 1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
			quant++
		} else break;
	}

	if (quant != 1) {
		return Math.floor(rez[0] / quant)
	} else {
		return rez[0]
	}

}
