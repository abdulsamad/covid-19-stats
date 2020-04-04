import React, { useEffect, useState, Fragment } from 'react';
import indiaFlag from '../assets/indiaFlag.png';
import { Row, Col, Card, Icon, Collapsible, CollapsibleItem, Table } from 'react-materialize';

function India() {
	const [lastUpdateTime, setLastUpdateTime] = useState('');
	/* Count */
	const [totalCases, setTotalCases] = useState(0);
	const [totalActive, setTotalActive] = useState(0);
	const [totalRecovered, setTotalRecovered] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	/* Testing */
	const [totalTested, setTotalTested] = useState(0);
	const [totalTestByPrivateLabs, setTotalTestByPrivateLabs] = useState(0);
	const [testUpdatedTime, setTestUpdatedTime] = useState('');
	const [testSource, setTestSource] = useState('');
	/* State */
	const [states, setStates] = useState([]);
	/* State-District */
	const [stateDistrict, setStateDistrict] = useState([]);

	useEffect(() => {
		fetch('https://api.covid19india.org/data.json')
			.then((res) => res.json())
			.then((res) => {
				const tested = res.tested.pop();
				const count = res.statewise[0];
				const stateArr = res.statewise.slice(1);

				setLastUpdateTime(count.lastupdatedtime);

				/* Count */
				setTotalCases(count.confirmed);
				setTotalActive(count.active);
				setTotalDeaths(count.deaths);
				setTotalRecovered(count.recovered);

				/* Tested */
				setTotalTested(tested.totalsamplestested);
				setTotalTestByPrivateLabs(tested.testsconductedbyprivatelabs);
				setTestSource(tested.source);
				setTestUpdatedTime(tested.updatetimestamp);

				/* State */
				setStates(stateArr);
			});
		fetch('https://api.covid19india.org/v2/state_district_wise.json')
			.then((res) => res.json())
			.then((res) => {
				setStateDistrict(res);
			});
	}, []);

	const formatNumber = (num) => {
		return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(parseInt(num));
	};

	return (
		<div>
			<section className='center-align'>
				<h4>INDIA</h4>
				<img src={indiaFlag} alt='Indian Flag' height='120px' width='200px' />
				<blockquote>Last Updated On: {lastUpdateTime}</blockquote>
			</section>

			{/* Count */}
			<section className='section'>
				<h5 className='center-align'>Count</h5>
				<Card closeIcon={<Icon>close</Icon>} className='count' revealIcon={<Icon>more_vert</Icon>}>
					<Row>
						{totalCases && (
							<Col s={6} className='total-cases'>
								<h5 className='center-align'>Total Cases</h5>
								<h5 className='center-align'>{formatNumber(totalCases)}</h5>
							</Col>
						)}
						{totalCases && (
							<Col s={6} className='total-active'>
								<h5 className='center-align'>Active</h5>
								<h5 className='center-align'>{formatNumber(totalActive)}</h5>
							</Col>
						)}
					</Row>
					<Row>
						{totalCases && (
							<Col s={6} className='total-recovered'>
								<h5 className='center-align'>Recovered</h5>
								<h5 className='center-align'>{formatNumber(totalRecovered)}</h5>
							</Col>
						)}
						{totalCases && (
							<Col s={6} className='total-deaths'>
								<h5 className='center-align'>Deaths</h5>
								<h5 className='center-align'>{formatNumber(totalDeaths)}</h5>
							</Col>
						)}
					</Row>
					<div className='center-align'>
						<blockquote>Source: covid19india.org</blockquote>
					</div>
				</Card>
			</section>

			{/* Testing */}
			<section className='section'>
				<h5 className='center-align'>Testing</h5>
				<Card className='testing'>
					<Row>
						{totalTested && (
							<Col s={6}>
								<h5 className='center-align'>Total Tested</h5>
								<h5 className='center-align'>{formatNumber(totalTested)}</h5>
							</Col>
						)}
						{testUpdatedTime && (
							<Col s={6}>
								<h5 className='center-align'>Last Updated</h5>
								<h5 className='center-align'>{testUpdatedTime}</h5>
							</Col>
						)}
					</Row>
					{totalTestByPrivateLabs && (
						<Row>
							<Col s={6}>
								<h5 className='center-align'>Tested by Private labs</h5>
								<h5 className='center-align'>{formatNumber(totalTestByPrivateLabs)}</h5>
							</Col>
						</Row>
					)}
					<div className='center-align'>
						<blockquote>Source: {testSource}</blockquote>
					</div>
				</Card>
			</section>

			{/* State Wise */}
			<section className='section'>
				<h5 className='center-align'>State Wise</h5>
				<Table centered={true} hoverable={true} responsive={true} striped={true}>
					<thead className='red lighten-2 white-text'>
						<tr>
							<th data-field='id'>State</th>
							<th data-field='name'>Total Cases</th>
							<th>Active</th>
							<th>Recovered</th>
							<th>Deaths</th>
						</tr>
					</thead>
					<tbody>
						{states.map((state) => (
							<tr key={state.state}>
								<td>{state.state}</td>
								<td>
									{state.confirmed} <sub>(+{state.delta.confirmed})</sub>
								</td>
								<td>{state.active}</td>
								<td>{state.recovered}</td>
								<td>{state.deaths}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<br />
				<div className='center-align '>
					<span className='hide-on-med-and-up'>
						Scroll horizontally on table to view more states.
					</span>
					<blockquote>Source: covid19india.org</blockquote>
				</div>
			</section>

			{/* State District Wise */}
			<section className='section'>
				<h5 className='center-align'>State-District Wise</h5>
				<Collapsible className='state-district' accordion={false}>
					{stateDistrict.map((stateVal) => (
						<CollapsibleItem
							key={stateVal.state}
							expanded={false}
							header={
								<Fragment>
									{stateVal.state} <i className='material-icons state-icon'>arrow_drop_down</i>
								</Fragment>
							}
							icon={<Icon>location_on</Icon>}
							node='div'>
							{
								<Table centered>
									<thead>
										<tr>
											<th data-field='id'>District</th>
											<th data-field='name'>Cases</th>
										</tr>
									</thead>
									<tbody>
										{stateVal.districtData.map((distVal) => (
											<tr key={distVal.district}>
												<td>{distVal.district}</td>
												<td>{distVal.confirmed}</td>
											</tr>
										))}
									</tbody>
								</Table>
							}
						</CollapsibleItem>
					))}
				</Collapsible>
				<div className='center-align'>
					<blockquote>Source: covid19india.org</blockquote>
				</div>
			</section>
		</div>
	);
}

export default India;
