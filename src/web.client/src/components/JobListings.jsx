import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Biryani from "../assets/Briyani.png";
import Chinese from "../assets/Chinese.png";
import American from "../assets/American.png";
import Indian from "../assets/Indian-food-master.png";
import Sounthindian from "../assets/South-indian.png";
import Thaichef from "../assets/Thai-chef.png";

const images = [Chinese, Thaichef, Indian, American, Biryani, Sounthindian,Chinese, Thaichef, Indian, American, Biryani, Sounthindian,Chinese, Thaichef, Indian, American, Biryani, Sounthindian,Chinese, Thaichef, Indian, American, Biryani, Sounthindian];

// Sample job data
const initialJobs = [
  { id: 1, title: "Shawarma Master", type: "Full Time", imageIndex: 0 },
  { id: 2, title: "Biriyani Master", type: "Full Time", imageIndex: 1 },
  { id: 3, title: "Parotta / Dosa Master", type: "Full Time", imageIndex: 2 },
  { id: 4, title: "Chinese Master", type: "Full Time", imageIndex: 3 },
  { id: 5, title: "Tandoori / Grill Master", type: "Full Time", imageIndex: 4 },
  { id: 6, title: "South Indian Thali Master", type: "Full Time", imageIndex: 5 },
  { id: 7, title: "Chettinad Master", type: "Full Time", imageIndex: 6 },
  { id: 8, title: "North Indian Thali Master", type: "Full Time", imageIndex: 7 },
  { id: 9, title: "Chaat Master", type: "Full Time", imageIndex: 8 },
  { id: 10, title: "Juice Master", type: "Full Time", imageIndex: 9 },
  { id: 11, title: "Tea Master", type: "Full Time", imageIndex: 10 },
  { id: 12, title: "Baji/Bonda Master", type: "Full Time", imageIndex: 11 },
  { id: 13, title: "Kitchen Helpers", type: "Full Time", imageIndex: 12 },
  { id: 14, title: "Bakery Masters", type: "Full Time", imageIndex: 13 },
  { id: 15, title: "Pastry Chef", type: "Full Time", imageIndex: 14 },
  { id: 16, title: "Chef de partie", type: "Full Time", imageIndex: 15 },
  { id: 17, title: "Commis Chef", type: "Full Time", imageIndex: 16 },
  { id: 18, title: "Sous Chef", type: "Full Time", imageIndex: 17 },
  { id: 19, title: "Executive Chef", type: "Full Time", imageIndex: 18 },
  { id: 20, title: "Station Chef", type: "Full Time", imageIndex: 19 },
  { id: 21, title: "Butcher Chef", type: "Full Time", imageIndex: 20 },
  { id: 22, title: "Head Chef", type: "Full Time", imageIndex: 21 },
  { id: 23, title: "Sauce Chef", type: "Full Time", imageIndex: 22 },
  { id: 24, title: "Pantry Chef", type: "Full Time", imageIndex: 23 },
];


const JobListing = () =>{

  const navigate = useNavigate();

  const handleJobRole = (title) => {
    navigate("/hire", { state: { title } });
  };
  const [searchQuery, setSearchQuery] = useState("");


  const filteredJobs = initialJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:outline-2 focus:-outline-offset-2 focus:!outline-indigo-600 bg-white w-full sm:w-[250px] px-4 py-2 rounded-[10px] border border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-[20px] shadow-md p-4 hover:shadow-lg transition duration-300 relative"
            >
              <img
                src={images[job.imageIndex]}
                alt={job.title}
                className="rounded-[20px] mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-lg font-medium mb-2">
                {job.title}
                <span className="ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                  {job.type}
                </span>
              </h2>

              <div className="mt-4 flex justify-between items-center gap-2">
                <button 
                onClick={() => handleJobRole(job.title)}
                className="hover:bg-[linear-gradient(var(--gradient-bg))] hover:text-white w-full text-purple-600 border border-purple-400 hover:bg-purple-100 font-medium py-2 rounded-[10px] transition cursor-pointer">
                  Hire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobListing;
