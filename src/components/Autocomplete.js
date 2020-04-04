import React, { useEffect, useState } from 'react';
import { Autocomplete as Auto } from 'react-materialize';

function Autocomplete({ updateSearched }) {
	const [countries, setCountries] = useState({});

	useEffect(() => {
		fetch('https://api.covid19api.com/countries')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const obj = {};

				for (const key of res) {
					if (key.Slug !== '') {
						obj[key.Slug.trim()] = null;
					}
				}

				setCountries(obj);
			});
	}, []);

	const onSubmit = (country) => {
		updateSearched(country);
	};

	return (
		<section className='center-align'>
			<Auto
				id='Autocomplete-1'
				options={{
					data: countries,
					limit: 10,
					onAutocomplete: onSubmit,
				}}
				name='autocomplete'
				placeholder='Enter a Country Name Here'
				style={{
					textTransform: 'lowercase',
				}}
			/>
		</section>
	);
}

export default Autocomplete;
