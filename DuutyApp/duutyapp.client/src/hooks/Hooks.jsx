import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

export const useUser = () => {
  const {
    state: { user },
    dispatchUser,
  } = useContext(UserContext);

  return { user, dispatchUser };
};

export const useAppState = () => {
  const {
    state: { isLoading, isError },
  } = useContext(UserContext);
  return { isLoading, isError };
};

export const useAlert = () => {
  const { alertState, dispatchAlert } = useContext(AlertContext);

  return {
    alertState,
    dispatchAlert,
  };
};

export default function Hook() {
  return;
}
