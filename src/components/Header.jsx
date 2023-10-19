import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	margin: 56px calc(100vw / 24);
	display: flex;
	justify-content: center;
	align-items: center;
`

const Text = styled.h1`
	word-spacing: 0.2em;
	background-image: linear-gradient(90deg, #5D5FEF 50%, #EF5DA8 50%);
	-webkit-background-clip: text;
	color: transparent;
	font-size: 200px;
	font-weight: 700;
`

const Header = ({ children }) => {
	return (
		<Container>
			<Text>{children}</Text>
		</Container>
	)
}

export default Header
