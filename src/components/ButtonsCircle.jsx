import React, { useState } from 'react'
import styled, { css } from 'styled-components'

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
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;

	&:after, &:before {
		position: absolute;
		content: "";
		background: #42567A;
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

const Buttons = styled.div`
	position: absolute;
	top: calc(50vh - 530px / 2);
	left: calc(50% - 530px / 2);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 530px;
	height: 530px;
	border: 1px solid #42567A;
	border-radius: 50%;
	z-index: 999;
	transform: rotate(${(props) => props.angle}deg);
	transition: all 0.2s ease-in;
`

const Axis = styled.div`
	position: absolute;
	width: calc(100% + 50px);
	display: flex;
	justify-content: end;
	align-items: center;
	
	transform: rotate(${(props) => props.angle}deg);
`

const Button = styled.button`
	position: relative;
    --button-size: 50px;
	--collapsed-button-size: 6px;
	
	width: var(--collapsed-button-size);
	height: var(--collapsed-button-size);
	margin: calc((var(--button-size) - var(--collapsed-button-size)) / 2);
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
	
	background-color: #42567A;
	font-size: 0px;

	transform: rotate(-${(props) => props.angle}deg);
	transition: all 0.2s ease-in;

	${(props) => props.active && css`
		width: var(--button-size);
		height: var(--button-size);
		margin: 0;
		border: 1px solid #42567A;
		background-color: #F4F5F9;
		font-size: 1em;
		&:after {
			content: "${props => props.label}";
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
		border: 1px solid #42567A;
		background-color: #F4F5F9;
		font-size: 1em;
	}
`

const ButtonsCircle = ({ active, total, label, onChange }) => {
	let commonAngle = (-360 / total * active);

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
