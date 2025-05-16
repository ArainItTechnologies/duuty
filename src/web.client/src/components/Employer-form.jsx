import { Link } from "react-router-dom";
import { useState } from "react";
import AddRestaurantModal from "../components/AddRestaurantModal";
import { registerUser } from "../services/auth";

const EmployerRegistration = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({
        phoneNumber: formData.phone,
        email: formData.email,
        confirmPassword: formData.confirmPassword,
        password: formData.password,
      });

      setSuccess(
        "Registration successful! Please check your email for confirmation."
      );
      setError("");
      setIsModalOpen(true);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const handleSaveRestaurant = (restaurantData) => {
    // Handle the saved restaurant data (e.g., API call, state update)
    console.log("Restaurant data:", restaurantData);
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-(--secondary-text-color)"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm/6 font-medium text-(--secondary-text-color)"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                onChange={handleChange}
                className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-(--secondary-text-color)"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-(--secondary-text-color)"
              >
                Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
                className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-(--secondary-text-color)"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                onChange={handleChange}
                className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <div>
            <button
              type="submit"
              className="cursor-pointer flex w-full justify-center rounded-xl sm:h-[50px] h-[40px] bg-linear-(--gradient-bg) sm:p-3 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-6 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold link-font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>

      <AddRestaurantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRestaurant}
      />
    </>
  );
};

export default EmployerRegistration;
