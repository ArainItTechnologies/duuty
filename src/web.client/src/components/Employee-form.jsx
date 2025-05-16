import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import GoogleIcon from "../assets/google-icon.svg";
import FbIcon from "../assets/fb-icon.svg";
import SelectRole from "./SelectRole";

const Login = () =>  {
  const [rememberMe, setRememberMe] = useState(false);
  const [showSelectRole, setShowSelectRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleOptions, setRoleOptions] = useState([
    { value: "chef", label: "Chef" },
    { value: "hotelOwner", label: "Hotel owner" },
    { value: "applyForJob", label: "Apply for job" },
    { value: "user", label: "User" },
  ]);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSelectRole(true);
  };

  const handleCloseSelectRole = () => {
    setShowSelectRole(false);
  };

  const handleRoleSelect = (role) => {
    console.log("Selected Role:", role);
    setSelectedRole(role);
    if (!roleOptions.some((option) => option.value === role)) {
      setRoleOptions([...roleOptions, { value: role, label: role }]);
    }
  };

  return (
    <>
      <div className="">
          <form action="#" method="POST" className="sm:space-y-6 space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Name <span class="text-red-500">*</span>
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
                Mobile Number <span class="text-red-500">*</span>
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
                Email Address <span class="text-red-500">*</span>
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
                Select Role <span class="text-red-500">*</span>
              </label>
              <div className="mt-2 select-wrapper relative">
                <select
                  className="appearance-none cursor-pointer block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                  value={selectedRole || ""}
                  onMouseDown={handleDropdownClick} 
                  onChange={(e) => setSelectedRole(e.target.value)} 
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedRole === "chef" && (
              <div>
                <label htmlFor="subRole" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Select Sub Role <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 select-wrapper relative">
                  <select
                    className="appearance-none cursor-pointer block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"Chef    >
                    <option value="">Biriyani Master</option>
                    <option value="">Chef de partie</option>
                    <option value="">Commis Chef</option>
                    <option value="">Sous Chef</option>
                    <option value="">Station Chef</option>
                    <option value="">Butcher Chef</option>
                    <option value="">Executive Chef</option>
                    <option value="">Head Chef</option>
                    <option value="">Sauce Chef</option>
                    <option value="">Pantry chef</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                  Password <span class="text-red-500">*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className="cursor-pointer h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="cursor-pointer ml-2 block text-[14px] text-(--primary-text-color) link-font-medium ">
                Remember me
              </label>
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
            New to duuty?{' '}
              <Link to="/register" className="font-semibold link-font-medium text-indigo-600 hover:text-indigo-500">
              Log in
              </Link>
            </p>

            <div className='my-[25px] text-(--secondary-text-color) text-[14px] text-center relative before:absolute before:w-full before:h-[1px] before:bg-[#E9EBF4] before:left-0 before:bottom-0 before:top-0 before:m-auto'><span class="relative bg-white px-[11px]">OR</span></div>

            <div className='sm:flex gap-[12px]'>
                <Link className='flex justify-center link-font-medium items-center p-[13px] border-1 border-[#ECEFFF] sm:w-1/2 p-[13px] rounded-[11px] sm:text-[15px] text-[13px]'>
                  <img class="size-{24px} mr-[10px]" src={GoogleIcon} alt="Google logo" />
                  Sign up with Google
                </Link>
                <Link className='flex mt-[15px] sm:mt-[0px] justify-center link-font-medium items-center p-[13px] border-1 border-[#ECEFFF] sm:w-1/2 p-[13px] rounded-[11px] sm:text-[15px] text-[13px]'>
                  <img class="size-{24px} mr-[10px]" src={FbIcon} alt="Facebook logo" />
                  Sign up with Facebook
                </Link>
            </div>
          </form>
        </div>

        {showSelectRole && (
          <SelectRole
            onClose={handleCloseSelectRole}
            onRoleSelect={handleRoleSelect}
            selectedRole={selectedRole}
          />
        )}
    </>
  )
}

export default Login;
