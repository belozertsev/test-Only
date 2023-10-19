import React from 'react'
import './App.css'

import data from './data'
import Block from './components/Block'

function App() {
	return (
		<div className='App'>
			<Block content={data} />
			{/* <Block content={data} /> */}
		</div>
	)
}

export default App
