import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Questions from './components/Questions/Questions'
import { getQuestions } from './components/Trivia/getQuestions'

function App() {
	const [hasError, setHasError] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [questions, setQuestions] = useState(0)
	const [questionsPoints, setQuestionsPoints] = useState([])
	const [questionIndex, setQuestionIndex] = useState(0)
	const [hasAnswered, setHasAnswered] = useState(false)

	useEffect(() => {
		setHasError(false)
		setIsLoading(true)
		getQuestions()
			.then((response) => {
				setQuestions(response.results)
				setTimeout(() => {
					setIsLoading(false)
				}, 2000)
				setQuestionsPoints(new Array(response.results.length).fill({ answered: false, point: 0 }))
			})
			.catch((error) => {
				setHasError(true)
				setIsLoading(false)
				console.log(error)
			})
	}, [])

	const toggleHasAnswerer = () => {
		setHasAnswered((prevHasAnswererd) => !prevHasAnswererd)
	}

	const goBack = () => {
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1)
		setHasAnswered(false)
		calculatePoints()
	}

	const goNext = () => {
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1)
		setHasAnswered(false)
		calculatePoints()
	}

	const onStartAgain = () => {
		setHasError(false)
		setIsLoading(true)
		setHasAnswered(false)
		setQuestionIndex(0)
		getQuestions()
			.then((response) => {
				setQuestions(response.results)
				setIsLoading(false)
				setQuestionsPoints(new Array(response.results.length).fill({ answered: false, point: 0 }))
			})
			.catch((error) => {
				setHasError(true)
				setIsLoading(false)
				console.log(error)
			})
	}

	const calculatePoints = () => {
		let count = 0
		questionsPoints.forEach((question) => {
			if (question.answered === true) {
				count += question.point
			}
		})
		return count
	}

	const answeredRight = (indexQuestion) => {
		let copyQuestionPoints = [...questionsPoints]
		copyQuestionPoints[indexQuestion] = { answered: true, point: 10 }
		setQuestionsPoints(copyQuestionPoints)
	}

	const answeredWrong = (indexQuestion) => {
		let copyQuestionPoints = [...questionsPoints]
		copyQuestionPoints[indexQuestion] = { answered: true, point: 0 }
		setQuestionsPoints(copyQuestionPoints)
	}

	const totalAnswered = () => {
		let count = 0
		questionsPoints.forEach((question) => {
			if (question.answered === true) {
				count++
			}
		})
		return `/${count * 10}`
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
			<Navbar
				questionIndex={questionIndex}
				FirstQuestion={onFirstQuestion}
				LastQuestion={onLastQuestion}
				onGoBack={goBack}
				onGoNext={goNext}
				onStartAgain={onStartAgain}
				calculatePoints={calculatePoints}
				totalAnswered={totalAnswered}
			/>
			<Questions
				toggleHasAnswerer={toggleHasAnswerer}
				hasAnswered={hasAnswered}
				questions={questions}
				questionIndex={questionIndex}
				questionsPoints={questionsPoints}
				answeredRight={answeredRight}
				answeredWrong={answeredWrong}
			/>
		</div>
	)
}

export default App
