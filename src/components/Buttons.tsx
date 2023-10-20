import React from 'react'
import styled from 'styled-components'

import { IButtonCircle } from '../types/components'

const Button = styled.button<{
	angle: number;
	label: string;
	active: Boolean;
	onClick: Function
}>`
	--button-size: 50px;
	--collapsed-button-size: 6px;
	z-index: 999;

	position: absolute;
	top: calc(100vh * 4 / 9 - var(--collapsed-button-size) / 2);

	width: var(--collapsed-button-size);
	height: var(--collapsed-button-size);

	border: 0;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: var(--base-color);
	font-size: 0px;

	transform: rotate(${(props) => props.angle}deg) translate(calc(var(--decaration-diameter) / 2), 0) rotate(-${(props) => props.angle}deg);
	transition: all 0.3s ease-in;

	${(props) => props.active && `
		top: calc(100vh * 4 / 9 - var(--button-size) / 2);
		width: var(--button-size);
		height: var(--button-size);
		

		margin: 0;
		border: 1px solid var(--base-color);

		background-color: var(--bg-color);
		font-size: 1em;

		&:after {
			content: "${props.label}";
			position: absolute;
			left: calc(var(--button-size) + 20px);

			font-weight: 700;
			line-height: 30px;
			text-align: left;
		}
	`}

	&:hover {
		top: calc(100vh * 4 / 9 - var(--button-size) / 2);
		width: var(--button-size);
		height: var(--button-size);

		margin: 0;
		border: 1px solid var(--base-color);
		
		background-color: var(--bg-color);
		font-size: 1em;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`

const Buttons: React.FC<IButtonCircle> = ({ active, total, label, onChange }) => {
	let commonAngle: number = (-360 / total * active)

	return (
		<>
			{
				Array.from({ length: total }).map((_, index) => {
					const axisAngle = 360 * index / total + 300
					// 

					return (
						<Button
							active={index === active}
							angle={axisAngle + commonAngle}
							label={label}
							onClick={() => onChange(index)}
						>
							{index + 1}
						</Button>
					)
				})
			}
		</>
	)
}

export { Buttons }
