import React from 'react'
import './Navbar.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

export default function Navbar(props) {
	const { questionIndex, FirstQuestion, LastQuestion, onGoBack, onGoNext, points } = props

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
						Points: {points}
						{questionIndex + 1 === 10 && <span>/100</span>}
					</span>
				</div>
				<div className='nextPrevMenu'>
					<Button className='buttonBS' variant='primary' onClick={onGoBack} disabled={FirstQuestion}>
						Go Back
					</Button>
					<Button className='buttonBS ml-2' variant='primary' onClick={onGoNext} disabled={LastQuestion}>
						Go Next
					</Button>
				</div>
			</nav>
		</div>
	)
}
