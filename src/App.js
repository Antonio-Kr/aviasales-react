import React from "react";

import FilterBox from "./components/FilterBox";
import TicketList from "./components/TicketList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="https://img.icons8.com/color/96/000000/around-the-globe.png" alt="" />
      <div className="grid">
        <FilterBox />
        <TicketList />
      </div>
    </div>
  );
}

export default App;
