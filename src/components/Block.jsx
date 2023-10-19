import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Header from './Header'
import Navigation from './Navigation'
import Slider from './Slider'
import ButtonsCircle from './ButtonsCircle'

const Screen = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #F4F5F9;
`

const Container = styled.div`
	position: relative;

	width: calc(100vw * 18 / 24);
	height: 100%;

	margin: 0 calc(100vw * 2 / 24) 0 calc(100vw * 4 / 24);
	border-left: 1px solid #42567A;
	border-right: 1px solid #42567A;
`

const Block = ({ content }) => {
	const [activeIndex, setActiveIndex] = React.useState(0)

	const changeActiveIndex = (index) => {
		setActiveIndex(index)
	}

	return (
		<Screen>
			<Container>
				<ButtonsCircle
					active={activeIndex}
					total={content.periods.length}
					label={content.periods[activeIndex].field}
					onChange={changeActiveIndex} />

				<Logo>{content.blockName}</Logo>
				<Header>{content.periods[activeIndex].years}</Header>
				<Navigation
					active={activeIndex}
					total={content.periods.length}
					onChange={changeActiveIndex} />
				<Slider slides={content.periods[activeIndex].events} />
			</Container>
		</Screen >
	)
}

export default Block
