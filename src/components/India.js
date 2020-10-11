import React, { useEffect, useState, Fragment } from "react";
import indiaFlag from "../assets/indiaFlag.png";
import {
  Row,
  Col,
  Card,
  Icon,
  Collapsible,
  CollapsibleItem,
  Table,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
import Loader from "./Loader";

function India() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState({});
  const [tests, setTests] = useState({});
  const [states, setStates] = useState([]);
  const [stateDistrict, setStateDistrict] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((res) => {
        setCount(res.statewise[0]);
        setTests(res.tested.pop());
        setStates(res.statewise.slice(1));
      });
    fetch("https://api.covid19india.org/v2/state_district_wise.json")
      .then((res) => res.json())
      .then((res) => {
        setStateDistrict(res);

        /* Loading */
        setLoading(false);
      });
  }, []);

  const formatNumber = (num) => {
    const numStr = num.toString();
    if (numStr.includes(",")) {
      return num;
    } else {
      return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 8,
      }).format(num);
    }
  };

  if (!loading) {
    return (
      <div>
        <section className="center-align">
          <h4>INDIA</h4>
          <img src={indiaFlag} alt="Indian Flag" height="120px" width="200px" />
          <div className="center-align mtb-1">
            Last Updated On: {count.lastupdatedtime}
          </div>
        </section>

        {/* Count */}
        <section className="section">
          <h5 className="center-align">Count</h5>
          <Card className="count">
            <Row>
              {count.confirmed && (
                <Col s={6} className="total-cases">
                  <h5 className="center-align">Total</h5>
                  <h5 className="center-align">
                    {formatNumber(count.confirmed)}
                  </h5>
                </Col>
              )}
              {count.active && (
                <Col s={6} className="total-active">
                  <h5 className="center-align">Active</h5>
                  <h5 className="center-align">{formatNumber(count.active)}</h5>
                </Col>
              )}
            </Row>
            <Row>
              {count.recovered && (
                <Col s={6} className="total-recovered">
                  <h5 className="center-align">Recovered</h5>
                  <h5 className="center-align">
                    {formatNumber(count.recovered)}
                  </h5>
                </Col>
              )}
              {count.deaths && (
                <Col s={6} className="total-deaths">
                  <h5 className="center-align">Deaths</h5>
                  <h5 className="center-align">{formatNumber(count.deaths)}</h5>
                </Col>
              )}
            </Row>
            <div className="center-align">
              <blockquote>Source: covid19india.org</blockquote>
            </div>
          </Card>
        </section>

        {/* Testing */}
        <section className="section">
          <h5 className="center-align">Testing</h5>
          <Card className="testing">
            <Row>
              {tests.totalsamplestested && (
                <Col s={6}>
                  <h5 className="center-align">Sample Tested</h5>
                  <h5 className="center-align">
                    {formatNumber(tests.totalsamplestested)}
                  </h5>
                </Col>
              )}
              {tests.updatetimestamp && (
                <Col s={6}>
                  <h5 className="center-align">Last Updated</h5>
                  <h5 className="center-align">{tests.updatetimestamp}</h5>
                </Col>
              )}
            </Row>
            {tests.testsconductedbyprivatelabs && (
              <Row>
                <Col s={6}>
                  <h5 className="center-align">Tested by Private labs</h5>
                  <h5 className="center-align">
                    {formatNumber(tests.testsconductedbyprivatelabs)}
                  </h5>
                </Col>
              </Row>
            )}
            <div className="center-align">
              <blockquote>Source: {tests.source}</blockquote>
            </div>
          </Card>
        </section>

        {/* Slider */}
        <Slider
          className="z-depth-1"
          fullscreen={false}
          options={{
            duration: 500,
            height: 140,
            indicators: false,
            interval: 3000,
          }}
        >
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">STAY home</h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">KEEP a safe distance</h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">
                Do Physical Distancing But, Show Social Solidarity
              </h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">WASH hands often</h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">COVER your cough</h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">
                SICK? Call the helpline.Check Details{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.mygov.in/covid-19/"
                >
                  <span role="img" aria-label="Link">
                    🔗
                  </span>{" "}
                  Here
                </a>
              </h5>
            </Caption>
          </Slide>
          <Slide image={false}>
            <Caption placement="center">
              <h5 className="blue-text">
                Check More Details{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://who.int"
                >
                  WHO Official Website
                </a>
              </h5>
            </Caption>
          </Slide>
        </Slider>

        {/* State Wise */}
        <section className="section">
          <h5 className="center-align">State Wise</h5>
          <Table
            centered={true}
            hoverable={true}
            responsive={true}
            striped={true}
          >
            <thead className="red lighten-2 white-text">
              <tr>
                <th data-field="id">State</th>
                <th data-field="name">Total Cases</th>
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
                    {state.confirmed}{" "}
                    {state.delta && <sub>(+{state.delta.confirmed})</sub>}
                  </td>
                  <td>{state.active}</td>
                  <td>{state.recovered}</td>
                  <td>{state.deaths}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <div className="center-align ">
            <span className="hide-on-med-and-up">
              Scroll horizontally on table to view more states.
            </span>
            <blockquote>Source: covid19india.org</blockquote>
          </div>
        </section>

        {/* State District Wise */}
        <section className="section">
          <h5 className="center-align">State-District Wise</h5>
          <Collapsible className="state-district" accordion={false}>
            {stateDistrict.map((stateVal) => (
              <CollapsibleItem
                key={stateVal.state}
                expanded={false}
                header={
                  <Fragment>
                    {stateVal.state}{" "}
                    <i className="material-icons state-icon">arrow_drop_down</i>
                  </Fragment>
                }
                icon={<Icon>location_on</Icon>}
                node="div"
              >
                {
                  <Table centered>
                    <thead>
                      <tr>
                        <th data-field="id">District</th>
                        <th data-field="name">Cases</th>
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
          <div className="center-align">
            <blockquote>Source: covid19india.org</blockquote>
          </div>
        </section>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default India;
