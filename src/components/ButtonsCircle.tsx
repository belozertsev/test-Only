import React from 'react'
import styled from 'styled-components'

import { IButtonCircle } from '../types/components'

const Container = styled.div`
	position: absolute;
	top: 0;

	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: var(--main-color);
`

const Cross = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	
	width: 100%;
	height: 100%;

	&:after, &:before {
		content: "";
		position: absolute;
		background: var(--stroke-color);
	}
	&:after {
		top: 50%;
		left: 0;
		right: 0;
		height: 1px;
	}
	&:before {
		left: 50%;
		top: 0;
		bottom: 0;
		width: 1px; 
	}
`

const Buttons = styled.div<{ angle: number }>`
	position: absolute;
	top: calc(50vh - 530px / 2);
	left: calc(50% - 530px / 2);
	
	width: 530px;
	height: 530px;
	
	border: 1px solid var(--stroke-color);
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	
	z-index: 999;
	transform: rotate(${(props) => props.angle}deg);
	transition: all 0.2s ease-in;
`

const Axis = styled.div<{ angle: number, key: number }>`
	position: absolute;
	
	width: calc(50% + 25px);
	margin-left: calc(50% + 25px);

	display: flex;
	justify-content: end;
	align-items: center;
	
	transform: rotate(${(props) => props.angle}deg);
	transform-origin: 0;
`

const Button = styled.button<{
	angle: number;
	label: string;
	active: Boolean;
	onClick: Function
}>`
	position: relative;

    --button-size: 50px;
	--collapsed-button-size: 6px;
	width: var(--collapsed-button-size);
	height: var(--collapsed-button-size);

	margin: calc((var(--button-size) - var(--collapsed-button-size)) / 2);
	border: 0;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: var(--base-color);
	font-size: 0px;

	transform: rotate(-${(props) => props.angle}deg);
	transition: all 0.2s ease-in;

	${(props) => props.active && `
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
		width: var(--button-size);
		height: var(--button-size);

		margin: 0;
		border: 1px solid var(--base-color);
		
		background-color: var(--bg-color);
		font-size: 1em;
	}
`

const ButtonsCircle: React.FC<IButtonCircle> = ({ active, total, label, onChange }) => {
	let commonAngle: number = (-360 / total * active);

	return (
		<>
			<Container>
				<Cross></Cross>
			</Container>
			<Buttons angle={commonAngle}>{
				Array.from({ length: total }).map((_, index) => {
					const axisAngle = 360 / total * index + 300
					const buttonAngle = commonAngle + axisAngle

					return (
						<Axis
							key={index}
							angle={axisAngle} >
							<Button
								active={index === active}
								angle={buttonAngle}
								label={label}
								onClick={() => onChange(index)}
							>
								{index + 1}
							</Button>
						</Axis>
					)
				})
			}</Buttons>
		</>
	)
}

export default ButtonsCircle
