import { ADD_FILTER, FETCH_TICKETS, REMOVE_FILTER, SET_IS_CHEEP_FILTER } from "./types";

export function fetchTickets() {
  return async (dispatch) => {
    const response = await fetch("https://front-test.beta.aviasales.ru/search");
    const { searchId } = await response.json();
    const tickets = await fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
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
