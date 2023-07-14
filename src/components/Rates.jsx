import React from "react";
import Table from "./Table";
const demoTH = ["SL", "Name", "Price", "Change ", "Trade"];

const Rates = () => {
  return (
    <div class="cus-sec-container">
      <h2 className="heading-2">Live Exchange Rates</h2>

      <Table tableTH={demoTH} />
    </div>
  );
};

export default Rates;
