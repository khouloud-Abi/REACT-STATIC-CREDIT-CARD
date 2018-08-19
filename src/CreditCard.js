import React from "react";
import "./CreditCard.css";

const CreditCard = () => (
  <div className="credit-card">
    <h1 className="company-name">CREDIT CARD</h1>
    <img
      className="chip-icon"
      src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
    />
    <h3 className="card-number">1238 6745 0284 5974</h3>
    <div className="card-valid">
      <p>5522</p>
      <p>
        Month/Year <br />11/50
      </p>

      <img
        className="master-icon"
        src="https://www.lowestrates.ca/sites/default/files/creditcardlogos.jpg"
      />
    </div>
    <h4 className="card-holder">ABIDI KHOULOUD</h4>
  </div>
);

export default CreditCard;
