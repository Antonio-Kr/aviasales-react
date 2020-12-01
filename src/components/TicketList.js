import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TicketList.css";
import TicketListItem from "./TicketListItem";
import SimpleFilter from "./SimpleFilter";
import { fetchTickets } from "../redux/actions";

export default function TicketList() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(fetchTickets()), 500);
  }, []);

  let { tickets } = useSelector((state) => state.tickets.tickets);
  const { isCheep, filters } = useSelector((state) => state.tickets);
  if (!tickets) return <div>LOADING</div>;
  tickets = isCheep
    ? tickets.sort((a, b) => a.price - b.price)
    : tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);

  if (filters.length) {
    tickets = tickets.filter((ticket) => {
      for (const f of filters) if (ticket.segments[0].stops.length === f) return true;
      return false;
    });
  }

  return (
    <div className="ticket-container">
      <SimpleFilter />
      {tickets.slice(0, 5).map((ticket, i) => (
        <TicketListItem ticket={ticket} key={i} />
      ))}
    </div>
  );
}
