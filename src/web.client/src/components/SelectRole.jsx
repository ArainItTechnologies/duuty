import { useState } from "react";
import chef from "../assets/chef.jpeg";
import chettinad from "../assets/chettinad-master.jpeg";
import chat from "../assets/chat-master.jpeg";
import tandoor from "../assets/tandoori-master.jpeg";
import biryani from "../assets/biryani.jpeg";
import barota from "../assets/dosa.jpeg";
import chinese from "../assets/chinese.jpeg";
import teamaster from "../assets/tea-master.jpeg";
import northindian from "../assets/north-indian.jpeg";
import southindian from "../assets/south-indian.jpeg";
import bakery from "../assets/bakery.jpeg";
import kitchen from "../assets/kitcher-helpers.jpeg";
import juice from "../assets/juice-master.jpeg";
import bajji from "../assets/bajji-master.jpeg";

const SelectRole = ({ onClose, onRoleSelect, selectedRole }) => {
    const [activeRole, setActiveRole] = useState(selectedRole || null);
    const handleCardClick = (role) => {
        setActiveRole(role);
        if (onRoleSelect) {
            onRoleSelect(role);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 bg-opacity-40 z-40 flex items-center justify-center px-4">
            <div className="bg-white rounded-[20px] shadow-xl max-w-4xl w-full max-h-[90vh] p-8 z-50 relative flex flex-col">
                <button
                    className="text-gray-500 hover:text-gray-700 absolute top-5 right-5 cursor-pointer"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 8.586L15.95 2.636a1 1 0 011.414 1.414L11.414 10l5.95 5.95a1 1 0 01-1.414 1.414L10 11.414l-5.95 5.95a1 1 0 01-1.414-1.414L8.586 10 2.636 4.05a1 1 0 011.414-1.414L10 8.586z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className="sticky top-0 z-10">
                    <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-1">Select your Role</h2>
                    <p className="text-gray-500 text-sm mb-6">
                        {/* Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer */}
                    </p>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 sm:justify-center sm:max-w-[400px] sm:m-auto lg:max-w-[100%] lg:grid-cols-4 lg:justify-start gap-4">
                        {[
                            { id: "chef", label: "Chef", image: chef },
                            { id: "Shawarma Master", label: "Shawarma Master", image: chinese },
                            { id: "Chat Master", label: "Chat Master", image: chat },
                            { id: "Tandoor Master", label: "Tandoor Master", image: tandoor },
                            { id: "Chettinad Master", label: "Chettinad Master", image: chettinad },
                            { id: "Kitchen Helpers", label: "Kitchen Helpers", image: kitchen },
                            { id: "Bakery Masters", label: "Bakery Masters", image: bakery },
                            { id: "Biriyani Master", label: "Biriyani Master", image: biryani },
                            { id: "Tea Master", label: "Tea Master", image: teamaster },
                            { id: "Parotta Master", label: "Dosa Master", image: barota },
                            { id: "South Indian Master", label: "South Indian Master", image: southindian },
                            { id: "North Indian Master", label: "North Indian Master", image: northindian },
                            { id: "Chinese Master", label: "Chinese Master", image: chinese },
                            { id: "Juice Master", label: "Juice Master", image: juice },
                            { id: "Bajji Master", label: "Bajji Master", image: bajji }
                        ].map((role) => (
                            <div
                                key={role.id}
                                className={`w-full sm:w-[150px] md:w-[190px] rounded-[10px] overflow-hidden border-[2px] ${activeRole === role.id ? "border-indigo-600 shadow-md" : "border-gray-300 shadow-sm"
                                    } text-center cursor-pointer hover:shadow-md transition`}
                                onClick={() => handleCardClick(role.id)}
                            >
                                <img
                                    src={role.image}
                                    alt={role.label}
                                    className="w-full h-[120px] sm:h-[150px] md:h-[180px] object-cover"
                                />
                                <div className="p-2 font-medium">{role.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectRole;