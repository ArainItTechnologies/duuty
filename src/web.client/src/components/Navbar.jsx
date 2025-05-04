import { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoSrc from '../assets/logo.svg';

const navigation = {
  categories: [
    {
      id: 'employer',
      name: 'Employer',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'employee',
      name: 'Employee',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ]
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(''); // State to track active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab
    const section = document.getElementById(tabName.toLowerCase().replace(' ', '-')); // Map tab name to section ID
    if (section) {
      const offsetTop = section.offsetTop - 60; // Calculate position with 20px offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

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

            {/* Links */}
            {/* <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </TabGroup> */}

            <div className="space-y-6 border-t border-gray-200 px-3 py-3">
              <div className="flow-root">
                <Link to="/login" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                  Sign in
                </Link>
                <Link to="/find-job" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
                Find a Job
                </Link>
                <Link to="/hire" className="mb-2 block p-2 px-3 font-medium bg-[#f5f5fc] text-gray-900 hover:bg-[#EDEBFF] hover:text-indigo-600 rounded-[6px]">
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

              {/* Flyout menus */}

              <div className="ml-auto hidden lg:flex lg:items-center lg:justify-end lg:space-x-4">
                {/* Desktop navigation buttons */}
                {/* <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-200" /> */}
                <div className="flex h-full space-x-8 mr-[40px]">
                  {/* <div className="flex">
                    <div className="relative flex">
                      <button
                        className={`cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                          activeTab === 'Overview'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800'
                        }`}
                        type="button"
                        onClick={() => handleTabClick('Overview')}
                      >
                        Overview
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        className={`cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                          activeTab === 'Benefits'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800'
                        }`}
                        type="button"
                        onClick={() => handleTabClick('Benefits')}
                      >
                        Benefits
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        className={`cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                          activeTab === 'Trusted Companies'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800'
                        }`}
                        type="button"
                        onClick={() => handleTabClick('Trusted Companies')}
                      >
                        Trusted Companies
                      </button>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="relative flex">
                      <button
                        className={`cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                          activeTab === 'Testimonials'
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-700 hover:text-gray-800'
                        }`}
                        type="button"
                        onClick={() => handleTabClick('Testimonials')}
                      >
                        Testimonials
                      </button>
                    </div>
                  </div> */}
                  {/* <div className="flex">
                    <div className="relative flex">
                      <Link to="/pricing" className="cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-gray-800">
                        Pricing
                      </Link>
                    </div>
                  </div> */}
                    <div className="relative flex">
                      <Link to="/pricing" className="cursor-pointer text-[16px] relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-indigo-600">
                        Pricing
                      </Link>
                    </div>
                </div>

                <Link to="/find-job" className="text-[15px] text-white font-medium inline-block rounded-[11px] bg-linear-(--gradient-bg) px-[25px] py-[10px] mr-[12px]">
                  Find a Job
                </Link>
                <Link to="/hire" className="hover:bg-[#ECEFFF] text-[15px] text-[#3B31FF] font-medium inline-block rounded-[11px] px-[25px] py-[10px] border-1 border-[#ECEFFF">
                  Hire Now
                </Link>
                {/* <Link to="/login" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary inline-block">
                  Sign in/Sign up
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
        
      </header>
    </div>
  )
}