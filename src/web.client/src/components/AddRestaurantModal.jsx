import React, { useState } from 'react';

const AddRestaurantModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postCode: '',
    telephone: '',
    website: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    address: false,
    postCode: false,
    telephone: false,
    website: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      address: !formData.address.trim(),
      postCode: !formData.postCode.trim(),
      telephone: !formData.telephone.trim(),
      website: formData.website.trim() ? !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website) : false
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSave(formData);
      onClose();
      // Reset form after submission
      setFormData({
        name: '',
        address: '',
        postCode: '',
        telephone: '',
        website: ''
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Modal Header */}
        <div className="bg-linear-(--gradient-bg) text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-xl font-semibold">Add Restaurant</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="px-6 py-4">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Restaurant Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter restaurant name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">Restaurant name is required</p>}
            </div>
            

            

            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                Website URL
              </label>
              <input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter website URL"
              />
              {errors.website && <p className="text-red-500 text-xs mt-1">Please enter a valid URL</p>}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                Telephone Number *
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.telephone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter telephone number"
              />
              {errors.telephone && <p className="text-red-500 text-xs mt-1">Telephone number is required</p>}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter restaurant address"
                rows="2"
              ></textarea>
              {errors.address && <p className="text-red-500 text-xs mt-1">Address is required</p>}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postCode">
                Post Code *
              </label>
              <input
                id="postCode"
                name="postCode"
                type="text"
                value={formData.postCode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.postCode ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter post code"
              />
              {errors.postCode && <p className="text-red-500 text-xs mt-1">Post code is required</p>}
            </div>
            
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-between">
        <button
            onClick={onClose}
            className="cursor-pointer text-[15px] text-gray-700 font-medium inline-block rounded-[11px] border-2 border-gray-300 px-[25px] py-[10px] hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="cursor-pointer text-[15px] text-white font-medium inline-block rounded-[11px] bg-linear-(--gradient-bg) px-[25px] py-[10px] mr-[12px]"
          >
            Save Restaurant
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantModal;