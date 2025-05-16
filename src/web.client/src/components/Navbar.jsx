import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  IdentificationIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import LogoSrc from '../assets/logo.svg';
import { useUser } from "../hooks/Hooks";

export default function Navbar() {
  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="bg-[#F4F3FF] sticky top-0 z-5">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex justify-end">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
          >
            <div className="flex px-4 pt-3 pb-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-auto cursor-pointer"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-3 py-3">
              <div className="flow-root">
                <Link to="/login" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                  Sign in
                </Link>
                <Link to="/find-job" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                Find a Job
                </Link>
                <Link to="/job-listing" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                  Hire Now
                </Link>
                <Link to="/pricing" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                  Pricing
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        {/* <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          India's first job portal for kitchen staff recruitment
        </p> */}

        <nav aria-label="Top" className="mx-auto px-0 bg-[#F4F3FF]">
          <div className="container-wrapper">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Duuty Logo"
                    src={LogoSrc}
                    className="h-8 w-[102px]"
                  />
                </Link>
              </div>

              {/* Mobile nav buttons */}
              <div className="flex items-center space-x-2 lg:hidden">
                <Link to="/find-job" className="text-[12px] text-white font-medium inline-block rounded-[11px] bg-linear-(--gradient-bg) py-2 px-4 mr-[12px]">
                  Find a Job
                </Link>
                <Link to="/hire" className="text-[12px] text-[#3B31FF] font-medium inline-block rounded-[11px] py-2 px-4 border-1 border-[#3B31FF]">
                  Hire Now
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-[11px] h-[36px] p-2 border-1 border-[#3B31FF] text-gray-400 flex items-center"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6 text-[#3B31FF]" />
                </button>
              </div>

              <div className="ml-auto hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
                {/* Desktop navigation buttons */}
                <div className="flex h-full space-x-8 mr-[40px]">
                    <div className="relative flex">
                      <Link to="/pricing" className="cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-indigo-600">
                        Pricing
                      </Link>
                    </div>
                </div>

                <Link to="/find-job" className="text-[15px] text-white font-medium inline-block rounded-[11px] bg-linear-(--gradient-bg) px-[25px] py-[10px] mr-[12px]">
                  Find a Job
                </Link>
                <Link to="/job-listing" className="hover:bg-[#ECEFFF] text-[15px] text-[#3B31FF] font-medium inline-block rounded-[11px] px-[25px] py-[10px] border-1 border-[#ECEFFF">
                  Hire Now
                </Link>
               {/* Conditionally show based on user */}
               {user == null ? (
                  <Link
                    to="/login"
                    className="text-[15px] text-white font-medium inline-block rounded-[11px] bg-linear-(--gradient-bg) px-[25px] py-[10px] mr-[12px]">
                    Sign in / Sign up
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      <UserCircleIcon className="h-8 w-8 text-primary" />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg z-50">
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-gray-100"
                        >
                          <IdentificationIcon className="h-5 w-5" />
                          Profile
                        </Link>
                        <Link
                          to="/change-password"
                          className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-gray-100"
                        >
                          <Cog6ToothIcon className="h-5 w-5" />
                          Change Password
                        </Link>
                        <hr className="my-1 border-gray-200" />
                        <button
                          onClick={() => {
                            setUser(null);
                            navigate("/login"); // or use navigate if inside react-router
                          }}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left text-primary hover:bg-gray-100"
                        >
                          <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  )
}