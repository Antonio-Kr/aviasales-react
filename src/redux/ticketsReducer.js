import { ADD_FILTER, FETCH_TICKETS, REMOVE_FILTER, SET_IS_CHEEP_FILTER } from "./types";

const initState = {
  tickets: [],
  filters: [],
  isCheep: true,
};

export const ticketsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return { ...state, tickets: action.payload };
    case ADD_FILTER:
      return { ...state, filters: [...state.filters, action.payload] };
    case REMOVE_FILTER:
      return { ...state, filters: state.filters.filter((v) => v !== action.payload) };
    case SET_IS_CHEEP_FILTER:
      return { ...state, isCheep: action.payload };
    default:
      return state;
  }
};
