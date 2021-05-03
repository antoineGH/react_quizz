import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
	const { questionIndex, FirstQuestion, LastQuestion, onGoBack, onGoNext } = props

	return (
		<div className='navbar'>
			<nav>
				<span>Question #{questionIndex + 1}</span>
				<div>
					<button onClick={onGoBack} disabled={FirstQuestion}>
						Go Back
					</button>
					<button onClick={onGoNext} disabled={LastQuestion}>
						Go Next
					</button>
				</div>
			</nav>
		</div>
	)
}
