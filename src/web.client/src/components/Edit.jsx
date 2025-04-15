import React, { useState } from "react";
import { useAlert } from "../hooks/Hooks";

function Edit() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatchAlert } = useAlert();

  const handleSubmit = async (e) => {
    const token = JSON.parse(localStorage.getItem("user")).token

    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/users/${username}/edit`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      console.log(result);

      // if (res.ok) {
      //   dispatchAlert({
      //     type: "SHOW",
      //     message: "Details updated successfully",
      //     variant: "Success",
      //   });
      //   window.location.href = "/profile";
      // } else {
      //   setError(true);
      //   throw new Error("Failed to update details");
      // }
    } catch (error) {
      console.log(error.message);
      dispatchAlert({
        type: "SHOW",
        message: error.message,
        variant: "Danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="flex justify-center mx-auto mt-20 p-10 max-w-2xl">
      <div>
        <h2 className="font-semibold text-xl mt-5">Edit your details</h2>
        <p>{error && "Something went wrong"}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="block mb-2 mt-4">
            Username{" "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="p-2 border rounded-md block"
            placeholder="Enter new username"
            onChange={handleChange}
          />
          <label htmlFor="password" className="block mb-2 mt-4">
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="p-2 border rounded-md block mb-4"
            placeholder="Enter new password"
            onChange={handleChange}
          />
          <button
            onClick={() => alert("Hehe")}
            className=" right-10 bg-red-700 text-white font-medium text-lg px-5 h-10 w-28 rounded-3xl"
            type="submit"
          >
            {isLoading ? "Saving" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
