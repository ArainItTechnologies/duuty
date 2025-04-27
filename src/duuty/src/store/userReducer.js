export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      };

    case "LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false, // Reset error flag when loading starts
      };

    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "LOG_OUT":
      localStorage.removeItem("user");
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: null,
      };

    default:
      // If the action type is not recognized, return the unchanged state
      return state;
  }
};

export default reducer;
