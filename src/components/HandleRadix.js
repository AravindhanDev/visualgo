function handleRadix(array, setArray) {
	const countSort = (array, n, pos) => {
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 2000; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			let count = Array.from({ length: 10 }, () => 0)
			let brr = new Array(10)
			for (let i = 0; i < n; i++) ++count[Math.floor(array[i] / pos) % 10]
			for (let i = 1; i < n; i++) count[i] = count[i] + count[i - 1]
			for (let i = n - 1; i >= 0; i--)
				brr[--count[Math.floor(array[i] / pos) % 10]] = array[i]
			for (let i = 0; i < n; i++) array[i] = brr[i]
			setArray([...array])
		}, 1000)
	}

	const getMax = (array) => array.reduce((a, b) => Math.max(a, b))

	const radixSort = (array, n) => {
		let max = getMax(array)
		for (let pos = 1; Math.floor(max / pos) > 0; pos *= 10) {
			countSort(array, n, pos)
		}
		return array
	}
	radixSort(array, array.length)
}

export default handleRadix
