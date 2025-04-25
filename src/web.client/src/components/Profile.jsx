import React, { useState } from "react";
import { useUser } from "../hooks/Hooks";

const Profile = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email,
    username: user.username,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // TODO: Add API call to save profile data
    console.log("Saving:", formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 mt-5 max-w-md mx-auto">
      <div className="h-20 w-20 rounded-full bg-gray-500 mx-auto"></div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Profile</h2>
        <button
          className="px-4 py-1 bg-gray-300 rounded-lg"
          onClick={() => setIsEditing(prev => !prev)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Username</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Roles</label>
          <ul className="list-disc list-inside">
            {user.roles?.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        {isEditing && (
          <button
            onClick={handleSave}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
