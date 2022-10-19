function handleQuick(array, setArray) {
	const pivot = (array, start = 0, end = array.length + 1) => {
		const swap = (list, a, b) => {
			;[list[a], list[b]] = [list[b], list[a]]
		}

		let pivot = array[start],
			pointer = start

		for (let i = start; i < array.length; i++) {
			if (array[i] < pivot) {
				pointer++
				swap(array, pointer, i)
			}
		}
		swap(array, start, pointer)
		return pointer
	}

	const quickSort = (array, start = 0, end = array.length) => {
		setTimeout(() => {
			let pivotIndex = pivot(array, start, end)
			if (start >= end) {
				return
			}
			quickSort(array, start, pivotIndex)
			quickSort(array, pivotIndex + 1, end)
		}, 500)
		setTimeout(() => {
			setArray([...array])
		}, 500)
	}
	quickSort(array)
}

export default handleQuick
