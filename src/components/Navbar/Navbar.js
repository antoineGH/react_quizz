import React from 'react'
import './Navbar.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

export default function Navbar(props) {
	const { questionIndex, FirstQuestion, LastQuestion, onGoBack, onGoNext, onStartAgain, calculatePoints, totalAnswered } = props

	const calculatePercentageQuestion = (questionIndex) => {
		return (questionIndex + 1) * 10
	}

	return (
		<div className='navbar'>
			<nav className='navMenu'>
				<ProgressBar className='myProgressBar' now={calculatePercentageQuestion(questionIndex)} />
				<div className='questionPoints'>
					<span className='questionSpan'>Question #{questionIndex + 1}</span>
					<span className='pointsSpan'>
						Points: {calculatePoints()}
						{totalAnswered()}
					</span>
				</div>
				<div className='nextPrevMenu'>
					<Button className='buttonBS buttonGoBack' variant='primary' onClick={onGoBack} disabled={FirstQuestion}>
						Go Back
					</Button>
					<Button className='buttonBS buttonGoNext ml-2' variant='primary' onClick={onGoNext} disabled={LastQuestion}>
						Go Next
					</Button>
					<Button variant='primary buttonStartAgain' onClick={onStartAgain}>
						Start Again
					</Button>
				</div>
			</nav>
		</div>
	)
}
