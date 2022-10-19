export default function handleSelection(array, setArray) {
	const swap = (array, index1, index2) =>
		([array[index1], array[index2]] = [array[index2], array[index1]])

	if (array.length === 0) return []
	for (let i = 0; i < array.length; i++) {
		let min = i
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
			for (let j = i + 1; j < array.length; j++) {
				if (array[j] < array[min]) {
					min = j
				}
			}
		}, 1000)
		setTimeout(() => {
			if (i !== min) swap(array, i, min)
			setArray([...array])
		}, 1000)
	}
}
