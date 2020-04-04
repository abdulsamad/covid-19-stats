import React from 'react';
import { Footer as Foot } from 'react-materialize';

function Footer() {
	return (
		<Foot className='footer' copyrights='Created By Abdul Samad'>
			<h5 className='white-text'>Special Thanks to our Friends at -</h5>
			<ul>
				<li>
					<a
						className='grey-text text-lighten-3'
						href='http://indiacount.com/'
						rel='noreferrer noopener'>
						INDIA COVID-19 TRACKER
					</a>
				</li>
				<li>
					<a
						className='grey-text text-lighten-3'
						href='https://covid19api.com/'
						rel='noreferrer noopener'>
						Covid19api
					</a>
				</li>
			</ul>
		</Foot>
	);
}

export default Footer;
