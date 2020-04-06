import React, { useEffect, useState } from 'react';
import { Autocomplete as Auto } from 'react-materialize';

function Autocomplete({ updateSearched }) {
	const [countries, setCountries] = useState({});
	const [slugs, setSlugs] = useState({});

	useEffect(() => {
		fetch('https://api.covid19api.com/countries')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const obj = {};
				const slugs = {};

				for (const key of res) {
					if (key.Country !== '') {
						obj[key.Country.trim()] = null;
						slugs[key.Country.trim()] = key.Slug.trim();
					}
				}

				setSlugs(slugs);
				setCountries(obj);
			});
	}, []);

	const onAutoComplete = (country) => {
		updateSearched({
			name: country,
			slug: slugs[country],
		});
	};

	return (
		<section className='center-align'>
			<Auto
				id='Autocomplete-1'
				className='autocomplete-container'
				options={{
					data: countries,
					limit: 10,
					onAutocomplete: onAutoComplete,
				}}
				name='autocomplete'
				placeholder='Enter a Country Name Here'
			/>
		</section>
	);
}

export default Autocomplete;
