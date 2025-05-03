import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import GoogleIcon from "../assets/google-icon.svg";
import FbIcon from "../assets/fb-icon.svg";
import SelectRole from "./SelectRole";

const Login = () =>  {
  const [rememberMe, setRememberMe] = useState(false);
  const [showSelectRole, setShowSelectRole] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

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
              <div className="mt-2 select-wrapper relative" onClick={handleDropdownClick}>
                <select
                  className="appearance-none cursor-pointer block w-full rounded-xl sm:h-[50px] h-[40px] bg-white sm:p-3 px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-[16px] text-[14px]"
                  onClick={(e) => e.preventDefault()} // Prevent default dropdown behavior
                >
                  <option value="">Chef</option>
                  <option value="">Hotel owner</option>
                  <option value="">Apply for job</option>
                  <option value="">User</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm/6 font-medium text-(--secondary-text-color)">
                Select Sub Role <span class="text-red-500">*</span>
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
            </div>

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

        {showSelectRole && <SelectRole onClose={handleCloseSelectRole} />}
    </>
  )
}

export default Login;
