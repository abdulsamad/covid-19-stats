import React, { useState } from 'react';
import './App.scss';
// eslint-disable-next-line
import M from 'materialize-css';
import Nav from './components/Nav';
import India from './components/India';
import Autocomplete from './components/Autocomplete';
import Global from './components/Global';
import Footer from './components/Footer';

function App() {
	const [country, setCountry] = useState({
		name: 'India',
		slug: 'india',
	});

	const updateSearched = (country) => {
		setCountry(country);
	};

	return (
		<div className='App'>
			<Nav title='Covid-19 Stats' />
			<Autocomplete updateSearched={updateSearched} />
			<div className='container'>
				{country.slug === 'india' ? <India /> : <Global country={country} />}
			</div>
			<Footer />
		</div>
	);
}

export default App;
