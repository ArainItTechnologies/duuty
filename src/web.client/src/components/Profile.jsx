import React from "react";
import { useAlert, useUser } from "../hooks/Hooks";
import { Link } from "react-router-dom";

function Profile({ username, email, password }) {
  const { dispatchAlert } = useAlert();
  const { dispatchUser } = useUser();

  const handleLogout = () => {
    dispatchUser({ type: "LOG_OUT" });
    dispatchAlert({
      type: "SHOW",
      payload: "Log out",
      variant: "Danger",
    });
  };

  return (
    <div className="space-y-3 mt-5">
      
      <div className="h-20 w-20 rounded-full bg-gray-500 mx-auto"></div>
      <div className="flex justify-center gap-2 items-center">
        <p className="text-center font-semibold text-xl">{username}</p>{" "}
        <Link to="/profile/edit" className="p-2 bg-gray-300 rounded-lg">Edit</Link>
      </div>
      <p>Email: {email}</p>
      {password}
      <p className="h-96"></p>
    </div>
  );
}

export default Profile;
