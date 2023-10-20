import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { IEvent } from '../types/content'

const Container = styled.div`
	position: sticky;
	top: calc(100% * 14 / 18 );

	@media (max-width: 1000px) {
		position: absolute;
		top: 50%;
	}
`

const Header = styled.h1`
	font-family: 'Bebas Neue', sans-serif;
	font-size: 25px;
	font-weight: 400;
	line-height: 30px;
	text-align: left;
	color: #3877EE;

	@media (max-width: 1000px) {
		font-size: 16px;
	}
`

const Paragraph = styled.p`
	margin-top: 15px;
	
	font-size: 20px;
	font-weight: 400;
	line-height: 30px;
	text-align: left;

	@media (max-width: 1000px) {
		font-size: 14px;
		line-height: 20px;

	}
`

const Slider: React.FC<{ slides: IEvent[] }> = ({ slides }) => {
	return (
		<Container>
			<Swiper
				style={{width: 'calc(100vw * 16/24)'}}
				modules={[Navigation]}
				navigation={true}
				spaceBetween={80}
				slidesPerView={3.25}
			>
				{
					slides.map((event, index) => (
						<SwiperSlide key={index} >
							<Header>{event.year}</Header>
							<Paragraph>{event.description}</Paragraph>
						</SwiperSlide>
					))
				}
			</Swiper >
		</Container>
	)
}

export default Slider
