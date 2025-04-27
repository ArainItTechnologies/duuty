import { createContext, useReducer } from "react";
import reducer, { initialState } from "../store/alertReducer";

export const AlertContext = createContext(null);

const { Provider } = AlertContext;

const AlertProvider = ({ children }) => {
  const [alertState, dispatchAlert] = useReducer(reducer, initialState);

  return <Provider value={{alertState, dispatchAlert}}>{children}</Provider>;
};

export default AlertProvider;
