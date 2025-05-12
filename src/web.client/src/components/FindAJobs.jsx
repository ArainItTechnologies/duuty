import React, { useState } from "react";
import {
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
import Biryani from "../assets/Briyani.png";
import Chinese from "../assets/Chinese.png";
import American from "../assets/American.png";
import Indian from "../assets/Indian-food-master.png";
import Sounthindian from "../assets/South-indian.png";
import Thaichef from "../assets/Thai-chef.png";
// Mocked job data
const jobsData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechInnovate Solutions",
    location: "Bangalore",
    state: "Karnataka",
    jobType: "full-time",
    experience: "5-7 years",
    salary: "₹12,00,000 - ₹15,00,000 per annum",
    description:
      "We are seeking a talented Senior Software Engineer to join our cutting-edge product development team.",
    requirements:
      "Bachelor's degree in Computer Science, Expertise in React, Node.js, and microservices architecture",
    benefits: "Health insurance, 401k matching, remote work options",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataDrive Analytics",
    location: "Hyderabad",
    state: "Telangana",
    jobType: "full-time",
    experience: "3-5 years",
    salary: "₹9,00,000 - ₹12,00,000 per annum",
    description:
      "Looking for a data wizard to transform complex datasets into actionable insights.",
    requirements:
      "Master's in Statistics or related field, proficiency in Python, R, and machine learning algorithms",
    benefits:
      "Flexible working hours, learning stipend, annual conference budget",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "CreativeBrand Studio",
    location: "Mumbai",
    state: "Maharashtra",
    jobType: "part-time",
    experience: "2-4 years",
    salary: "₹6,00,000 - ₹8,00,000 per annum",
    description:
      "We need a creative designer to craft intuitive and engaging user experiences.",
    requirements:
      "Strong portfolio, proficiency in Figma, Adobe XD, and design thinking",
    benefits: "Flexible schedule, creative workshops",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudNative Systems",
    location: "Pune",
    state: "Maharashtra",
    jobType: "contract",
    experience: "4-6 years",
    salary: "₹10,00,000 - ₹13,00,000 per annum",
    description:
      "Seeking an experienced DevOps professional to streamline our cloud infrastructure.",
    requirements: "Expertise in Kubernetes, Docker, AWS, and CI/CD pipelines",
    benefits: "Performance bonuses, cutting-edge tech stack",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "StartupX",
    location: "Delhi",
    state: "Delhi NCR",
    jobType: "full-time",
    experience: "3-5 years",
    salary: "₹8,00,000 - ₹11,00,000 per annum",
    description:
      "Join our dynamic team and drive product strategy from conception to launch.",
    requirements:
      "Strong analytical skills, experience in product lifecycle management",
    benefits: "ESOPs, startup culture, growth opportunities",
  },
  {
    id: 6,
    title: "Machine Learning Engineer",
    company: "AI Innovations",
    location: "Chennai",
    state: "Tamil Nadu",
    jobType: "full-time",
    experience: "2-4 years",
    salary: "₹7,50,000 - ₹10,50,000 per annum",
    description:
      "Build next-generation AI solutions that transform industries.",
    requirements: "Strong background in machine learning, TensorFlow, PyTorch",
    benefits: "Research budget, cutting-edge projects",
  },
  {
    id: 7,
    title: "Frontend React Developer",
    company: "WebCraft Technologies",
    location: "Bengaluru",
    state: "Karnataka",
    jobType: "full-time",
    experience: "3-5 years",
    salary: "₹8,00,000 - ₹12,00,000 per annum",
    description:
      "Create responsive and performant web applications using modern React ecosystem.",
    requirements: "Expert in React, Redux, TypeScript, responsive design",
    benefits: "Remote work, learning opportunities",
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureNet Solutions",
    location: "Gurgaon",
    state: "Haryana",
    jobType: "full-time",
    experience: "4-6 years",
    salary: "₹11,00,000 - ₹14,00,000 per annum",
    description:
      "Protect our digital assets and develop robust security strategies.",
    requirements:
      "CISSP certification, experience in threat detection and mitigation",
    benefits: "Training programs, comprehensive security tools",
  },
  {
    id: 9,
    title: "Sales Manager",
    company: "GlobalTrade Enterprises",
    location: "Kolkata",
    state: "West Bengal",
    jobType: "full-time",
    experience: "5-7 years",
    salary: "₹9,00,000 - ₹13,00,000 per annum",
    description: "Lead and grow our sales team across multiple regions.",
    requirements: "Proven track record in B2B sales, strong leadership skills",
    benefits: "Performance bonuses, company car",
  },
  {
    id: 10,
    title: "Content Marketing Specialist",
    company: "DigitalGrow Media",
    location: "Noida",
    state: "Uttar Pradesh",
    jobType: "part-time",
    experience: "2-3 years",
    salary: "₹5,00,000 - ₹7,00,000 per annum",
    description:
      "Create compelling content that drives engagement and conversions.",
    requirements:
      "Strong writing skills, SEO knowledge, content strategy experience",
    benefits: "Flexible hours, creative freedom",
  },
];

const FindAJob = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJobType, setFilterJobType] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter jobs based on search term and job type
  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterJobType === "" || job.jobType === filterJobType)
  );

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Dream Job</h1>

    //   {/* Search and Filter Section */}
    //   <div className="mb-6 flex flex-col sm:flex-row gap-4">
    //     <input
    //       type="text"
    //       placeholder="Search jobs..."
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    //     />

    //     <select
    //       value={filterJobType}
    //       onChange={(e) => setFilterJobType(e.target.value)}
    //       className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    //     >
    //       <option value="">All Job Types</option>
    //       <option value="full-time">Full-time</option>
    //       <option value="part-time">Part-time</option>
    //       <option value="contract">Contract</option>
    //     </select>
    //   </div>

    //   {/* Job Listings */}
    //   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {filteredJobs.map((job) => (
    //       <div
    //         key={job.id}
    //         className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    //       >
    //         <div className="flex justify-between items-start mb-4">
    //           <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
    //         </div>

    //         <div className="space-y-2 mb-4">
    //           <div className="flex items-center text-gray-600">
    //             <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
    //             <span>{job.location}, {job.state}</span>
    //           </div>

    //           <div className="flex items-center text-gray-600">
    //             <ClockIcon className="h-5 w-5 mr-2 text-primary" />
    //             <span className="capitalize">{job.jobType}</span>
    //           </div>

    //           <div className="flex items-center text-gray-600">
    //             <CurrencyRupeeIcon className="h-5 w-5 mr-2 text-primary" />
    //             <span>{job.salary}</span>
    //           </div>
    //         </div>

    //         <div className="mb-4">
    //           <p className="text-sm text-gray-700 line-clamp-3">{job.description}</p>
    //         </div>

    //         <div className="flex justify-end items-center">
    //           <button
    //             onClick={() => handleViewDetails(job)}
    //             className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
    //           >
    //             View Details
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* No Results Message */}
    //   {filteredJobs.length === 0 && (
    //     <div className="text-center py-12 text-gray-500">
    //       No jobs found matching your search criteria.
    //     </div>
    //   )}

    //   {/* Job Details Modal */}
    //   {selectedJob && (
    //     <JobDetails
    //       job={selectedJob}
    //       onClose={handleCloseJobDetails}
    //     />
    //   )}
    // </div>
    <div className="bg-[#f5f3ff]">
      <div className="container-wrapper min-h-screen py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-semibold w-full sm:w-auto">
            Find your Dream Job!
          </h1>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search Jobs..."
              className="focus:outline-2 focus:-outline-offset-2 focus:!outline-indigo-600 bg-white w-full sm:w-[250px] px-4 py-2 rounded-[10px] border border-gray-300"
            />
            <select className="focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 bg-white w-full sm:w-[180px] h-[42px] px-4 py-2 rounded-[10px] border border-gray-300 cursor-pointer">
              <option>All Job Types</option>
              <option>All Job Types</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={Chinese}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition cursor-pointer">
              Apply Job
            </button>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={Thaichef}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white cursor-pointer mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition">
              Apply Job
            </button>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={Indian}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white cursor-pointer mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition">
              Apply Job
            </button>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={American}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white cursor-pointer mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition">
              Apply Job
            </button>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={Biryani}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white cursor-pointer mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition">
              Apply Job
            </button>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300">
            <img
              src={Sounthindian}
              alt="Chinese Food Master"
              className="rounded-[20px] mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-lg font-medium mb-2">
              Chinese Food Master
              <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                Full Time
              </span>
            </h2>
            <p className="text-xl font-bold">$1,20,000 to $1,50,000</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-5 w-5 mr-1 text-gray-500" />
              Bangalore
            </p>
            <button className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white cursor-pointer mt-4 w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition">
              Apply Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAJob;
