import React from 'react'
import styled from 'styled-components'

import { IContent } from '../types/content'

const Strokes = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-left: 1px solid var(--stroke-color);
	border-right: 1px solid var(--stroke-color);

	&:after, &:before {
		content: "";
		position: absolute;
		background: var(--stroke-color);
	}
	&:after {
		top: calc(100% * 4 / 9); left: 0; right: 0;
		height: 1px;
		
	}
	&:before {
		left: 50%; top: 0; bottom: 0;
		width: 1px; 

		@media (max-width: 1000px) {
			display: none;
		}
	}
`

const Circle = styled.div`
	position: absolute;
	top: calc(100% * 4 / 9 - var(--decaration-diameter) / 2);
	left: calc(50% - var(--decaration-diameter) / 2);

	width: var(--decaration-diameter);
	height: var(--decaration-diameter);

	border-radius: 50%;
	border: 1px solid var(--stroke-color);

	@media (max-width: 1000px) {
		display: none;
	}
`

const Decoration: React.FC = () =>
	<>
		<Strokes />
		<Circle />
	</>

export { Decoration }
