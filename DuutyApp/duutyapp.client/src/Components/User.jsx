import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppState, useUser } from "../hooks/Hooks";

function User() {
  const { username } = useParams();

  const { user, dispatchUser } = useUser();
  const [otherUser, setOtherUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      dispatchUser({ type: "LOADING" });
      try {
        const res = await fetch(
          `http://localhost:5000/api/v1/users/${username}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        const result = await res.json();

        if (res.status === 404) {
          window.location.href = "/404";
        } else if (!result.success) {
          throw new Error(result.error);
        } else if (user.username === result.data.username) {
          window.location.href = "/profile";
        } else {
          setOtherUser(result.data);
        }
      } catch (error) {
        setError(true);
        console.log("Error getting single user", error);
      } finally {
        dispatchUser({ type: "ERROR" });
      }
    };
    // dispatchUser({ type: "LOADING" });
    fetchUser();
  }, []);

  const handleFollow = async () => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/users/${username}/follow`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();
      console.log(result);

      if (res.ok) {
        setOtherUser((prevState) => ({
          ...prevState,
          followers: [...prevState.followers, user?.id],
        }));
        console.log(user?.id);
      } else {
        throw new Error("Couldn't perform action");
      }
    } catch (errror) {
      console.log(error);
    }
  };

  const handleUnfollow = async () => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/users/${username}/follow`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        setOtherUser((prevState) => ({
          ...prevState,
          followers: prevState.followers.filter(
            (follower) => follower !== user.id
          ),
        }));
      } else {
        throw new Error("Couldn't perform actionr");
      }
    } catch (errror) {
      console.log(error);
    }
  };

  return error ? (
    <p className="mt-20 text-center">Something went wrong. Try again later.</p>
  ) : (
    user && (
      <div className="space-y-3 mt-20">
        <div className="h-20 w-20 rounded-full bg-gray-500 mx-auto"></div>
        <div className="flex justify-center gap-2 items-center">
          <p className="text-center font-semibold text-xl">
            {otherUser?.username}
          </p>{" "}
          {otherUser?.followers.includes(user.id) ? (
            <button
              onClick={handleUnfollow}
              className="p-2 bg-gray-300 rounded-lg"
            >
              Following
            </button>
          ) : (
            <button
              onClick={handleFollow}
              className="p-2 bg-gray-300 rounded-lg"
            >
              Follow
            </button>
          )}
        </div>
        <div className="flex gap-3 justify-center font-semibold text-xl">
          <div className="flex flex-col gap-2 items-center">
            <span>{otherUser?.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span>{otherUser?.following.length}</span>
            <span>Following</span>
          </div>
        </div>
      </div>
    )
  );
}

export default User;
