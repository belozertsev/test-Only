import React from 'react'
import './App.css'

import data from './data'
import Block from './components/Block'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Block content={data} />
			{/* <Block content={data} /> */}
		</div>
	)
}

export default App
