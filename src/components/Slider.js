import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';

function SlideBanner() {
	return (
		<Slider
			fullscreen={false}
			options={{
				duration: 500,
				height: 140,
				indicators: false,
				interval: 3000,
			}}>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>STAY home</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>KEEP a safe distance</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>Do Physical Distancing But, Show Social Solidarity</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>WASH hands often</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>COVER your cough</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>
						SICK? Call the helpline.Check Details{' '}
						<a rel='noreferrer noopener' target='_blank' href='https://www.mygov.in/covid-19/'>
							<span role='img' aria-label='Link'>
								🔗
							</span>{' '}
							Here
						</a>
					</h5>
				</Caption>
			</Slide>
			<Slide image={false}>
				<Caption placement='center'>
					<h5 className='blue-text'>
						Check More Details{' '}
						<a rel='noreferrer noopener' target='_blank' href='https://who.int'>
							WHO Official Website
						</a>
					</h5>
				</Caption>
			</Slide>
		</Slider>
	);
}

export default SlideBanner;
