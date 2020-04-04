import React from 'react';
import { Navbar } from 'react-materialize';

function Nav({ title }) {
	return (
		<header>
			<Navbar
				alignLinks='right'
				brand={
					<a className='brand-logo' href='#!'>
						{title}
					</a>
				}
				centerLogo
				id='nav'
				menuIcon={false}
				options={{
					draggable: true,
					edge: 'left',
					inDuration: 250,
					onCloseEnd: null,
					onCloseStart: null,
					onOpenEnd: null,
					onOpenStart: null,
					outDuration: 200,
					preventScrolling: true,
				}}></Navbar>
		</header>
	);
}

export default Nav;
