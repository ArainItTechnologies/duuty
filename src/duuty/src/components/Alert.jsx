import React, { useContext, useEffect } from "react";
import { AlertContext } from "../context/AlertContext";

function Alert() {
  const {
    alertState: { show, message, variant },
    dispatchAlert,
  } = useContext(AlertContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (show) {
        dispatchAlert({ type: "HIDE" });
      }
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  const color =
    variant === "Warning"
      ? "yellow"
      : variant === "Danger"
      ? "red"
      : variant === "Success"
      ? "green"
      : "";

  return (
    show && (
      <div
        className={`fixed h-20 w-80 flex justify-between items-center inset-10  p-5 rounded-2xl  bg-${color}-500 text-black`}
      >
        <div>
          <h4 className="font-semibold">{variant}</h4>
          <p>{message}</p>
        </div>
        <button onClick={() => dispatchAlert({ type: "HIDE" })}>x</button>
      </div>
    )
  );
}

export default Alert;
