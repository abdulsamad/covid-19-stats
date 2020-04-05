import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';

function SlideBanner() {
	return (
		<Slider
			fullscreen={false}
			options={{
				duration: 500,
				height: 100,
				indicators: false,
				interval: 1000,
			}}>
			<Slide>
				<Caption placement='center'>
					<h5 className='light grey-text text-lighten-3'>Here's our small slogan.</h5>
				</Caption>
			</Slide>
			<Slide>
				<Caption placement='left'>
					<h5 className='light grey-text text-lighten-3'>Here's our small slogan.</h5>
				</Caption>
			</Slide>
			<Slide>
				<Caption placement='right'>
					<h5 className='light grey-text text-lighten-3'>Here's our small slogan.</h5>
				</Caption>
			</Slide>
			<Slide>
				<Caption placement='center'>
					<h5 className='light grey-text text-lighten-3'>Here's our small slogan.</h5>
				</Caption>
			</Slide>
		</Slider>
	);
}

export default SlideBanner;
