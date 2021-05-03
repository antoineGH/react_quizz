import React, { useState } from 'react'
import './Questions.css'

export default function Questions(props) {
	const { questions, questionIndex } = props
	const [selectedAnswer, setSelectedAnswer] = useState()
	const [hasAnswered, setHasAnswered] = useState(false)

	const handleClick = (e) => {
		console.log('hasbeenClicked')
		setSelectedAnswer(e.target.value)
		setHasAnswered(true)
	}

	return (
		<div className='questions'>
			<div className='headerQuestion'>
				<div className='categoryQuestion'>{questions[questionIndex].category}</div>
				<div className='difficultyQuestion'>Difficulty: {questions[questionIndex].difficulty}</div>
			</div>
			<div className='mainTitleQuestion'>True Or False ?</div>
			<div className='mainQuestion'>
				<div>{questions[questionIndex].question}</div>
			</div>
			<div className='Answer'>
				<button value='True' onClick={handleClick} disabled={hasAnswered}>
					True
				</button>
				<button value='False' onClick={handleClick} disabled={hasAnswered}>
					False
				</button>
			</div>
			<div className='Result'>
				<div>{questions[questionIndex].correct_answer}</div>
			</div>
		</div>
	)
}
