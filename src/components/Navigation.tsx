import React from 'react'
import styled, { css } from 'styled-components'

import { INavigation } from '../types/components'

const Container = styled.div`
	position: relative;

	margin: 56px calc(100vw / 24);

	display: flex;
	justify-content: start;
`

const NavArea = styled.div`
	width: min-content;

	display: flex;
	flex-direction: column;
`

const Counter = styled.div`
	width: min-content;
	margin-bottom: 20px;

	font-size: 14px;
	line-height: 18px;
	text-align: left;
`

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`

const Button = styled.button`
	width: 50px;
	height: 50px;

	border-radius: 50%;
	border: 1px solid var(--stroke-color);

	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: var(--bg-color);

	&:hover {
		border: 1px solid var(--base-color);
	}
`

const Arrow = styled.div<{ direction: 'left' | 'right' }>`
	position: relative;
	
	padding: 4px;
	border: solid #42567A;
	border-width: 0 2px 2px 0;

	display: inline-block;

	${props => {
		if (props.direction === 'left') {
			return css`
					margin-left: 2px;
					transform: rotate(135deg);
				`
		}
		if (props.direction === 'right') {
			return css`
					margin-right: 2px;
					transform: rotate(-45deg);
				`
		}
	}}
`

const Navigation: React.FC<INavigation> = ({ active, total, onChange }) => {
	return (
		<Container>
			<NavArea>
				<Counter>
					{(active + 1).toString().padStart(2, '0')}/{total.toString().padStart(2, '0')}
				</Counter>
				<Buttons>
					<Button onClick={() => onChange((total + active - 1) % total)}><Arrow direction='left' /></Button>
					<Button onClick={() => onChange((active + 1) % total)}><Arrow direction='right' /></Button>
				</Buttons>
			</NavArea>
		</Container>
	)
}

export default Navigation
