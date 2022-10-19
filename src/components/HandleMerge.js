export default function handleBubble(array, setArray) {
	function merge(array, lb, mid, ub) {
		let brr = []
		let i = lb
		let j = mid + 1
		let k = 0
		setTimeout(() => {
			for (let i = 0; i < 500; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 500; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			for (let i = 0; i < 500; i++) {
				console.log(i)
			}
		}, 1000)
		setTimeout(() => {
			while (i <= mid && j <= ub) {
				if (array[i] < array[j]) {
					brr[k] = array[i]
					i++
				} else {
					brr[k] = array[j]
					j++
				}
				k++
			}
			while (i <= mid) {
				brr[k] = array[i]
				k++
				i++
			}
			while (j <= ub) {
				brr[k] = array[j]
				k++
				j++
			}
			for (i = lb, j = 0; i <= ub; i++, j++) {
				array[i] = brr[j]
			}
			setArray([...array])
		}, 1000)
	}
	function mergeSort(array, lb, ub) {
		if (lb < ub) {
			let mid = Math.floor((lb + ub) / 2)
			mergeSort(array, lb, mid)
			mergeSort(array, mid + 1, ub)
			merge(array, lb, mid, ub, setArray)
		}
	}
	mergeSort(array, 0, array.length - 1)
}
