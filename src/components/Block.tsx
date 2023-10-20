import React from 'react'
import styled from 'styled-components'

import { IContent } from '../types/content'

import { Logo } from './Logo'
import Header from './Header'
import Navigation from './Navigation'
import Slider from './Slider'
import { Buttons } from './Buttons'
import { Decoration } from './Decoration'

const Screen = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: var(--bg-color);
`

const Container = styled.div`
	position: relative;

	display: flex;
	justify-content: center;

	width: 100%;
	height: 100%;

	margin: 0 calc(100% * 2 / 24) 0 calc(100% * 4 / 24);


	
	
	@media (max-width: 1000px) {
		margin: 0;
		padding: 20px;
	}
`

const Main = styled.div`
	padding: calc(100% / 18);
	@media (max-width: 1000px) {
		padding: 0;
	}
`

const Block: React.FC<{ content: IContent }> = ({ content }) => {
	const [activeIndex, setActiveIndex] = React.useState<number>(0)

	const changeActiveIndex = (index: number) => {
		setActiveIndex(index)
	}

	return <>
		<Screen>
			<Container>
				<Decoration />

				<Main>
					<Logo>{content.blockName}</Logo>

					<Header>{content.periods[activeIndex].years}</Header>
					<Navigation
						active={activeIndex}
						total={content.periods.length}
						onChange={changeActiveIndex} />

					<Slider slides={content.periods[activeIndex].events} />
				</Main>

				<Buttons
					active={activeIndex}
					total={content.periods.length}
					label={content.periods[activeIndex].field}
					onChange={changeActiveIndex} />
			</Container>
		</Screen>
	</>
}

export default Block
