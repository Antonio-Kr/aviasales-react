import React from "react";

import "./TicketListItemDescr.css";

export default function TicketListItemDescr({ top, bottom }) {
  return (
    <div className="ticket-item-d-container">
      <div className="top">{top}</div>
      <div className="bottom">{bottom}</div>
    </div>
  );
}
