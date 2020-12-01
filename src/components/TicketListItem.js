import React from "react";
import moment from "moment";

import "./TicketListItem.css";
import TicketListItemDescr from "./TicketListItemDescr";

export default function TicketListItem({ ticket }) {
  const stops_0 = ticket.segments[0].stops;
  const duration_0 = ticket.segments[0].duration;
  const origin_destination_0 = `${ticket.segments[0].origin} - ${ticket.segments[0].destination}`;
  const date_0 = moment(ticket.segments[0].date);
  const timing_0 = `${date_0.format("hh:mm")} - ${date_0.add(duration_0, "m").format("hh:mm")}`;

  const stops_1 = ticket.segments[1].stops;
  const duration_1 = ticket.segments[1].duration;
  const origin_destination_1 = `${ticket.segments[1].origin} - ${ticket.segments[1].destination}`;
  const date_1 = moment(ticket.segments[1].date);
  const timing_1 = `${date_1.format("hh:mm")} - ${date_1.add(duration_1, "m").format("hh:mm")}`;

  return (
    <div className="ticket-item-container">
      <div className="price">{`${ticket.price} ₽`}</div>
      <div>{/*empty cell*/}</div>
      <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />

      <TicketListItemDescr top={origin_destination_0} bottom={timing_0} />
      <TicketListItemDescr
        top="в пути"
        bottom={`${parseInt(duration_0 / 60)}ч ${duration_0 % 60}м`}
      />
      <TicketListItemDescr top={`пересадки: ${stops_0.length}`} bottom={stops_0.join()} />

      <TicketListItemDescr top={origin_destination_1} bottom={timing_1} />
      <TicketListItemDescr
        top="в пути"
        bottom={`${parseInt(duration_1 / 60)}ч ${duration_1 % 60}м`}
      />
      <TicketListItemDescr
        top={`пересадки: ${stops_1.length}`}
        bottom={stops_1.join()}
      />
    </div>
  );
}
