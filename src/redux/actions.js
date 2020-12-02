import { ADD_FILTER, FETCH_TICKETS, REMOVE_FILTER, SET_IS_CHEEP_FILTER } from "./types";

export function fetchTickets() {
  return async (dispatch) => {
    const tickets = await fetch(
      `https://e7i301syc4.execute-api.eu-central-1.amazonaws.com/dev/tickets`
    );
    dispatch({ type: FETCH_TICKETS, payload: await tickets.json() });
  };
}

export function addFilter(count) {
  return { type: ADD_FILTER, payload: count };
}

export function removeFilter(count) {
  return { type: REMOVE_FILTER, payload: count };
}

export function setIsCheep(isCheep) {
  return { type: SET_IS_CHEEP_FILTER, payload: isCheep };
}
