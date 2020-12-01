import React from "react";
import { connect } from "react-redux";

import { setIsCheep } from "../redux/actions";
import "./SimpleFilter.css";

function SimpleFilter({ isCheep, setIsCheep }) {
  const toggle = () => setIsCheep(!isCheep);

  return (
    <div className="sf-container" onClick={toggle}>
      <div className={isCheep ? "selected" : ""}>самый дешевый</div>
      <div className={!isCheep ? "selected" : ""}>самый быстрый</div>
    </div>
  );
}

const mapStateToProps = (state) => ({ isCheep: state.tickets.isCheep });
const mapDispatchToProps = { setIsCheep };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleFilter);
