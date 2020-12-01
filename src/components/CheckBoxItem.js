import React, { useState } from "react";
import { connect } from "react-redux";

import { addFilter, removeFilter } from "../redux/actions";
import "./CheckBoxItem.css";

function CheckBoxItem(props) {
  const [checked, setChecked] = useState(false);
  const { cb_lable, count } = props;
  const toggle = () => {
    !checked ? props.addFilter(count) : props.removeFilter(count);
    setChecked(!checked);
  };
  return (
    <div className={`checkbox ${checked ? "checked" : ""}`} onClick={toggle}>
      {cb_lable}
    </div>
  );
}

const mapDispatchToProps = { addFilter, removeFilter };

export default connect(null, mapDispatchToProps)(CheckBoxItem);
