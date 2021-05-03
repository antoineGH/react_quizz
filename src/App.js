import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Questions from './components/Questions/Questions'
import { getQuestions } from './components/Trivia/getQuestions'

function App() {
	const [hasError, setHasError] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [questions, setQuestions] = useState(0)
	const [questionIndex, setQuestionIndex] = useState(0)

	useEffect(() => {
		console.log('onmount useEffect')
		setHasError(false)
		setIsLoading(true)
		getQuestions()
			.then((response) => {
				setQuestions(response.results)
				setIsLoading(false)
			})
			.catch((error) => {
				setHasError(true)
				setIsLoading(false)
				console.log(error)
			})
	}, [])

	const goBack = () => {
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1)
	}

	const goNext = () => {
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1)
	}

	const onFirstQuestion = questionIndex === 0
	const onLastQuestion = questionIndex === questions.length - 1

	if (hasError) {
		return <div className='App'>hasError</div>
	}

	if (isLoading) {
		return <div className='App'>isLoading</div>
	}

	return (
		<div className='App'>
			<Navbar questionIndex={questionIndex} FirstQuestion={onFirstQuestion} LastQuestion={onLastQuestion} onGoBack={goBack} onGoNext={goNext} />
			<Questions questions={questions} questionIndex={questionIndex} />
		</div>
	)
}

export default App
