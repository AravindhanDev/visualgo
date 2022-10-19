export default function handleBubble(array, setArray, setFinished) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			setTimeout(() => {
				if (array[j] > array[j + 1]) {
					;[array[j], array[j + 1]] = [array[j + 1], array[j]]
				}
				setArray([...array])
			}, 1000)
		}
	}
}
