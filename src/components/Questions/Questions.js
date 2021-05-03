import React, { useState } from 'react'
import './Questions.css'
import Button from 'react-bootstrap/Button'

export default function Questions(props) {
	const { questions, questionIndex, toggleHasAnswerer, hasAnswered, handleAddPoints } = props
	const [selectedAnswer, setSelectedAnswer] = useState()

	const goodAnswers = ['Correct', 'Yay', 'Great', 'Super', 'Keep Going', 'Absolutely Right']
	const wrongAnswers = ['Nope', 'Ooops', 'Esh', 'Oh No', 'Not Even Close', 'Try Again']

	const handleClick = (e) => {
		setSelectedAnswer(e.target.value)
		if (e.target.value === questions[questionIndex].correct_answer) {
			handleAddPoints(10)
		}
		toggleHasAnswerer()
	}

	const selectRandomAnswerIndex = () => {
		return Math.floor(Math.random() * goodAnswers.length)
	}

	return (
		<div className='questions'>
			<div className='headerQuestion'>
				<div className='categoryQuestion'>{questions[questionIndex].category}</div>
				<div className='difficultyQuestion'>Difficulty: {questions[questionIndex].difficulty}</div>
			</div>
			<div className='mainTitleQuestion'>True Or False ?</div>
			<div className='mainQuestion'>
				<div dangerouslySetInnerHTML={{ __html: questions[questionIndex].question }} />
			</div>
			<div className='Answer'>
				<Button variant='success' value='True' onClick={handleClick} disabled={hasAnswered}>
					True
				</Button>
				<Button className='ml-2' variant='danger' value='False' onClick={handleClick} disabled={hasAnswered}>
					False
				</Button>
			</div>
			{hasAnswered && (
				<div className='Result'>
					{selectedAnswer === questions[questionIndex].correct_answer ? (
						<div className='green'>{goodAnswers[selectRandomAnswerIndex()]}</div>
					) : (
						<div className='red'>{wrongAnswers[selectRandomAnswerIndex()]}</div>
					)}
				</div>
			)}
		</div>
	)
}
