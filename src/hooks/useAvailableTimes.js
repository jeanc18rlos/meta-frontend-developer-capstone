import { useReducer } from "react";
import { fetchAPI } from "../utils/Api";

const initializeTimes = (date) => {
  return fetchAPI(new Date(date));
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(action.date);
    default:
      return state;
  }
};

export const useAvailableTimes = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    () => initializeTimes(new Date())
  );

  const updateTime = (date) => dispatch({ type: "UPDATE_TIMES", date });

  return { availableTimes, updateTime };
};
