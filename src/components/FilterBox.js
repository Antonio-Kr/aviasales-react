import React from "react";
import CheckBoxItem from "./CheckBoxItem";

import "./FilterBox.css";

export default function FilterBox() {
  const filters = [ "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];

  return (
    <div className="filter-container">
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      {filters.map((v, i) => (
        <CheckBoxItem cb_lable={v} count={i} key={i} />
      ))}
    </div>
  );
}
