import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex w-full justify-between items-center text-left focus:outline-none"
                onClick={toggleOpen}
            >
                <h3 className="text-lg font-bold text-gray-900">{question}</h3>
                <span className="ml-6 flex-shrink-0 text-gray-500">
                    {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                </span>
            </button>
            {isOpen && (
                <div className="mt-3 pr-12">
                    <p className="text-base text-gray-500">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;