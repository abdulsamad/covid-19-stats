import React from 'react';
import { Preloader } from 'react-materialize';

function Loader() {
	return (
		<section className='section center-align'>
			<Preloader active color='red' flashing={false} size='big' />
		</section>
	);
}

export default Loader;
