import React from "react";
import { Footer as Foot } from "react-materialize";

function Footer() {
  return (
    <Foot className="footer" copyrights="Created By Abdul Samad">
      <h6 className="white-text">Special Thanks to</h6>
      <ul>
        <li>
          <a
            className="grey-text text-lighten-3"
            href="https://github.com/covid19india/"
            target="_blank"
            rel="noreferrer noopener"
          >
            COVID-19INDIA
          </a>
        </li>
        <li>
          <a
            className="grey-text text-lighten-3"
            target="_blank"
            href="https://covid19api.com/"
            rel="noreferrer noopener"
          >
            KYLE REDELINGHUYS
          </a>
        </li>
      </ul>
      <h6>for the API.</h6>
    </Foot>
  );
}

export default Footer;
