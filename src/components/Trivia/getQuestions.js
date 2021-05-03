export const getQuestions = async () => {
	const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
	const responseJson = response.json()

	return new Promise((resolve, reject) => {
		if (responseJson && response.status === 200) {
			resolve(responseJson)
		} else {
			reject()
		}
	})
}
