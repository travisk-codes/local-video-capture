import React from 'react'
import { Player } from 'video-react'
import './video-react.css'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Player startTime={0} playsInline src='test.webm' /> 
		</div>
	)
}

export default App
