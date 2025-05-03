import React, { useEffect } from "react";
import { useUser, useAppState } from "../hooks/Hooks";
import Profile from "../components/Profile";

function Dashboard() {
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, [user]);

  if (user) {
    return (
      <div className="flex justify-center mt-20">
        <Profile
          username={user.username}
          email={user.email}
          password={user.password}
        />
      </div>
    );
  }
  return;
}

export default Dashboard;
