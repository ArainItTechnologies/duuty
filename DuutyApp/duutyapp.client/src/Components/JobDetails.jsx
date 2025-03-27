import React, { useState } from 'react';
import { 
  MapPinIcon, 
  ClockIcon, 
  BriefcaseIcon, 
  CurrencyRupeeIcon 
} from '@heroicons/react/24/outline';
import ApplyNow from './ApplyNow'; // We'll create this component next

const JobDetails = ({ job, onClose }) => {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleApplyNow = () => {
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Job Header */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
          
          <div className="flex flex-wrap items-center space-x-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-primary" />
              <span>{job.location}, {job.state}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-primary" />
              <span className="capitalize">{job.jobType}</span>
            </div>
            <div className="flex items-center">
              <CurrencyRupeeIcon className="h-5 w-5 mr-2 text-primary" />
              <span>{job.salary}</span>
            </div>
          </div>

          {/* Apply Now Button */}
          <button 
            onClick={handleApplyNow}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Apply Now
          </button>
        </div>

        {/* Job Details Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">{job.description}</p>

            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {job.requirements.split(',').map((req, index) => (
                <li key={index}>{req.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Experience</h3>
              <p className="text-gray-700">{job.experience}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.benefits.split(',').map((benefit, index) => (
                  <li key={index}>{benefit.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Apply Now Modal */}
        {showApplyModal && (
          <ApplyNow 
            job={job} 
            isOpen={showApplyModal} 
            onClose={handleCloseApplyModal} 
          />
        )}
      </div>
    </div>
  );
};

export default JobDetails;