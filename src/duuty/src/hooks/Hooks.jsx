import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

export const useUser = () => useContext(UserContext);

export const useAppState = () => {

  return { };
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
