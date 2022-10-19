export default function handleInsertion(array, setArray) {
	if (array.length === 0) return []
	for (let i = 1; i < array.length; i++) {
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
			let temp = array[i]
			let j
			for (j = i - 1; j >= 0 && array[j] > temp; j--) {
				array[j + 1] = array[j]
			}
			array[j + 1] = temp
			setArray([...array])
		}, 1000)
	}
}
