import { Link } from 'react-router-dom';
import { useState } from "react";
import SelectRole from "./SelectRole";

const EmployeeRegistration = () =>  {
  const [selectedRole, setSelectedRole] = useState("");
  const [showSelectRole, setShowSelectRole] = useState(false);


  const handleDropdownClick = () => {
    setShowSelectRole(true);
  };

  const handleCloseSelectRole = () => {
    setShowSelectRole(false);
  };

  return (
    <>
      <div className="">
          <form action="#" method="POST" className="sm:space-y-6 space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                  />
                </div>
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                Select Role <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 select-wrapper relative" onClick={handleDropdownClick}>
                <select
                  className="appearance-none cursor-pointer block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                  onClick={(e) => e.preventDefault()} // Prevent default dropdown behavior
                >
                <option value="">Select Role</option>
                </select>
              </div>
            </div>

            {selectedRole === "chef" && <div>
              <label htmlFor="role" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                Select Sub Role <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 select-wrapper relative">
                <select
                  className="appearance-none cursor-pointer block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                  >
                  <option value="">Chef</option>
                  <option value="">Hotel owner</option>
                  <option value="">Apply for job</option>
                  <option value="">User</option>
                </select>
              </div>
            </div>}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Password <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="cursor-pointer flex w-full justify-center rounded-xl sm:h-[50px] h-[40px] bg-linear-(--gradient-bg) sm:p-3 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-6 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
              <Link to="/login" className="font-semibold link-font-medium text-indigo-600 hover:text-indigo-500">
              Log in
              </Link>
            </p>
          </form>
        </div>

        {showSelectRole && <SelectRole onClose={handleCloseSelectRole} setSelectedRole={setSelectedRole}/>}
    </>
  )
}

export default EmployeeRegistration;
