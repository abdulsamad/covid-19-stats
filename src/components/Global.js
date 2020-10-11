import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-materialize';
import Loader from './Loader';

function Global({ country }) {
	const [loading, setloading] = useState(true);
	const [count, setCount] = useState({});
	const [newCases, setNewCases] = useState({});
	const [lastUpdated, setLastUpdated] = useState('');

	useEffect(() => {
		if (country !== null) {
			fetch(`https://api.covid19api.com/summary`)
				.then((res) => res.json())
				.then((res) => {
					const countries = res.Countries;

					for (const key in countries) {
						const current = countries[key];
						if (current['Slug'] === country.slug) {
							const totalCount = {
								confirmed: current.TotalConfirmed,
								recovered: current.TotalRecovered,
								deaths: current.TotalDeaths,
							};

							const newCount = {
								confirmed: current.NewConfirmed,
								recovered: current.NewRecovered,
								deaths: current.NewDeaths,
							};

							setCount(totalCount);
							setNewCases(newCount);
							break;
						}
					}

					setLastUpdated(res.Date.slice(0, 10));

					/* Loading */
					setloading(false);
				});
		}
	}, [country]);

	const formatNumber = (num) => {
		if (num <= 0 || num === undefined) {
			return '-';
		} else {
			return new Intl.NumberFormat('en-IN', {
				maximumSignificantDigits: 8,
			}).format(num);
		}
	};

	if (!loading) {
		return (
			<div>
				<h4 className='center-align'>{country.name}</h4>
				<br />

				{/* Total Cases */}
				<h5 className='center-align'>Count</h5>
				<section className='section'>
					<Card>
						<Row className=''>
							<Col s={6} className='total-cases'>
								<h6 className='center-align'>Total</h6>
								<h5 className='center-align'>
									{formatNumber(count.confirmed)}
								</h5>
							</Col>
							<Col s={6} className='total-recovered'>
								<h6 className='center-align'>Recovered</h6>
								<h5 className='center-align'>
									{formatNumber(count.recovered)}
								</h5>
							</Col>
						</Row>
						<Row>
							<Col s={6} className='total-deaths'>
								<h6 className='center-align'>Deaths</h6>
								<h5 className='center-align'>{formatNumber(count.deaths)}</h5>
							</Col>
							<Col s={6}>
								<h6 className='center-align'>Last Updated</h6>
								<h5 className='center-align'>{lastUpdated}</h5>
							</Col>
						</Row>
						<div className='center-align'>
							<blockquote>Source: covid19api.com</blockquote>
						</div>
					</Card>
				</section>

				{/* New Cases */}
				<h5 className='center-align'>New Cases</h5>
				<section className='section'>
					<Card>
						<Row>
							<Col s={6} className='total-cases'>
								<h5 className='center-align'>New Cases</h5>
								<h5 className='center-align'>
									{formatNumber(newCases.confirmed)}
								</h5>
							</Col>
							<Col s={6} className='total-recovered'>
								<h5 className='center-align'>New Recovered</h5>
								<h5 className='center-align'>
									{formatNumber(newCases.recovered)}
								</h5>
							</Col>
						</Row>
						<Row>
							<Col s={6} className='total-deaths'>
								<h5 className='center-align'>New Deaths</h5>
								<h5 className='center-align'>
									{formatNumber(newCases.deaths)}
								</h5>
							</Col>
							<Col s={6}>
								<h5 className='center-align'>Last Updated</h5>
								<h5 className='center-align'>{lastUpdated}</h5>
							</Col>
						</Row>
						<div className='center-align'>
							<blockquote>Source: covid19api.com</blockquote>
						</div>
					</Card>
				</section>
			</div>
		);
	} else {
		return <Loader />;
	}
}

export default Global;
