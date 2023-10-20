import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	
	margin: 170px calc(100vw / 24) 0 calc(100vw / 24);
	
	display: flex;
	justify-content: start;
	align-items: flex-start;
`

const Header = styled.h1`
	position: relative;
	
	width: min-content;
	
	line-height: 120%;
	word-spacing: 100vw;
	font-weight: 700;
	font-size: 56px;

	&:before {
		content: '';
		
		position: absolute;
		left: calc(-2px + 100vw / -24);

		width: 5px;
		height: 100%;
		
		background: linear-gradient(180deg, var(--accent-color1) -5%, var(--accent-color2) 85%);
	}
`

const Logo: React.FC<{ children: string }> = ({ children }) => {
	return (
		<Container>
			<Header>{children}</Header>
		</Container>
	)
}

export default Logo
