import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ApplyNow = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));

    // Clear any existing errors for the field
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.resume) newErrors.resume = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success state
      setApplicationSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    } catch (error) {
      console.error('Application submission error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal closes
  const handleClose = () => {
    setApplicationSuccess(false);
    setErrors({});
    onClose();
  };

  if (applicationSuccess) {
    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg transform rounded-xl bg-white p-8 shadow-2xl transition-all 
            data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300
            md:w-[600px] lg:w-[700px]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Application Submitted!
              </h3>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex items-center bg-green-50 p-4 rounded-lg mb-6">
              <CheckCircleIcon className="h-8 w-8 text-green-500 mr-4" />
              <p className="text-base text-gray-700">
                Your application for {job.title} has been successfully submitted! 
                We'll review your application and get back to you soon.
              </p>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark 
                transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />
      
      <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-lg transform rounded-xl bg-white p-8 shadow-2xl 
          transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300
          md:w-[600px] lg:w-[700px]"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Apply for {job.title}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-base 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  ${errors.name ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-base 
                    focus:outline-none focus:ring-2 focus:ring-primary 
                    ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-base 
                    focus:outline-none focus:ring-2 focus:ring-primary 
                    ${errors.phone ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="resume" className="block text-base font-medium text-gray-700 mb-2">
                Upload Resume*
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 text-base 
                  file:mr-4 file:rounded-lg file:border-0 file:bg-primary/10 
                  file:px-4 file:py-2 file:text-sm file:font-semibold 
                  focus:outline-none focus:ring-2 focus:ring-primary 
                  ${errors.resume ? 'border-red-500 ring-red-500' : 'border-gray-300'}`}
              />
              {errors.resume && <p className="mt-2 text-sm text-red-600">{errors.resume}</p>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold 
                text-white hover:bg-primary-dark transition-colors 
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ApplyNow;