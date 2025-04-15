import React, { useEffect, useState } from "react";
import { useAppState, useUser } from "../hooks/Hooks";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const { isLoading, isError } = useAppState();
  const { user, dispatchUser } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      dispatchUser({ type: "LOADING" });
      try {
        const res = await fetch("http://localhost:5000/api/v1/users");

        const result = await res.json();

        if (res.ok) {
          setUsers(result.data);
        } else {
          throw new Error();
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        // setLoading(false)
        dispatchUser({ type: "ERROR" });
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="space-y-3 grid mt-20 px-10 max-w-2xl mx-auto">
      {users?.map((user) => {
        return (
          <Link
            to={`/users/${user.username}`}
            key={user._id}
            className="flex flex-col gap-2"
          >
            <h3 className="font-semibold text-lg">{user.username}</h3>
            <p>{user.email}</p>
          </Link>
        );
      })}
      {error && "Something went wrong"}
    </div>
  );
}

export default Users;
