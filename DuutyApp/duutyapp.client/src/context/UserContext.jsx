import { createContext, useReducer, useContext } from "react";
import reducer, {initialState} from "../store/userReducer";



export const UserContext = createContext(null);

const { Provider } = UserContext;

function UserProvider({ children }) {
  const [state, dispatchUser] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatchUser }}>{children}</Provider>;
}

export default UserProvider;
