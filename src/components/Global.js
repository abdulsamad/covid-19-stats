import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-materialize';

function Global({ country }) {
	const [totalConfirmed, setTotalConfirmed] = useState(0);
	const [totalRecovered, setTotalRecovered] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	const [newConfirmed, setNewConfirmed] = useState(0);
	const [newRecovered, setNewRecovered] = useState(0);
	const [newDeaths, setNewDeaths] = useState(0);
	const [lastUpdated, setLastUpdated] = useState('');

	useEffect(() => {
		if (country !== '') {
			fetch(`https://api.covid19api.com/summary`)
				.then((res) => res.json())
				.then((res) => {
					const countries = res.Countries;
					for (const key in countries) {
						const current = countries[key];
						if (current['Slug'] === country) {
							setTotalConfirmed(current.TotalConfirmed);
							setTotalRecovered(current.TotalRecovered);
							setTotalDeaths(current.TotalDeaths);
							setNewConfirmed(current.NewConfirmed);
							setNewRecovered(current.NewRecovered);
							setNewDeaths(current.NewDeaths);
							break;
						}
					}
					setLastUpdated(res.Date.slice(0, 10));
				});
		}
	}, [country]);

	const formatNumber = (num) => {
		return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(parseInt(num));
	};

	return (
		<div>
			<h4 className='center-align'>{country.toUpperCase()}</h4>
			<br />
			<h5 className='center-align'>Total</h5>
			<section className='section'>
				<Card>
					<Row>
						<Col s={6} className='total-cases'>
							<h6 className='center-align'>Total Cases</h6>
							<h5 className='center-align'>{formatNumber(totalConfirmed)}</h5>
						</Col>
						<Col s={6} className='total-recovered'>
							<h6 className='center-align'>Total Recovered</h6>
							<h5 className='center-align'>{formatNumber(totalRecovered)}</h5>
						</Col>
					</Row>
					<Row>
						<Col s={6} className='total-deaths'>
							<h6 className='center-align'>Total Deaths</h6>
							<h5 className='center-align'>{formatNumber(totalDeaths)}</h5>
						</Col>
						<Col s={6}>
							<h6 className='center-align'>Last Updated On</h6>
							<h5 className='center-align'>{lastUpdated}</h5>
						</Col>
					</Row>
				</Card>
			</section>

			<h5 className='center-align'>New Cases</h5>
			<section className='section'>
				<Card>
					<Row>
						<Col s={6} className='total-cases'>
							<h6 className='center-align'>New Cases</h6>
							<h5 className='center-align'>{formatNumber(newConfirmed)}</h5>
						</Col>
						<Col s={6} className='total-recovered'>
							<h6 className='center-align'>New Recovered</h6>
							<h5 className='center-align'>{formatNumber(newRecovered)}</h5>
						</Col>
					</Row>
					<Row>
						<Col s={6} className='total-deaths'>
							<h6 className='center-align'>New Deaths</h6>
							<h5 className='center-align'>{formatNumber(newDeaths)}</h5>
						</Col>
						<Col s={6}>
							<h6 className='center-align'>Last Updated On</h6>
							<h5 className='center-align'>{lastUpdated}</h5>
						</Col>
					</Row>
				</Card>
			</section>
		</div>
	);
}

export default Global;
