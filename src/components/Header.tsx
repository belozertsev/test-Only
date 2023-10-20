import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	left: 0; right: 0;
	top: calc(100% * 4 / 9 - 7vw);
	
	margin: 0;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1000px) {
		position: static;
		margin: 20% 0;
	}
`

const Text = styled.h1`
	word-spacing: 0.2em;
	background-image: linear-gradient(90deg, var(--accent-color1) 50%, var(--accent-color2) 50%);
	-webkit-background-clip: text;
	color: transparent;
	font-size: calc(10vw);
	font-weight: 700;

	@media (max-width: 1000px) {
		font-size: 56px;
	}
`

const Header: React.FC<{ children: string }> = ({ children }) => {
	return (
		<Container>
			<Text>{children}</Text>
		</Container>
	)
}

export default Header
