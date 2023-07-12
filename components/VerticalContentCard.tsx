import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import SimpleTitleTextContainer from './SimpleTitleTextContainer';

const VerticalContentCard: React.FC = () => {
  const title = 'Title'; // Replace with your actual title
  const text = 'Text'; // Replace with your actual text

  return (
    <div className="flex flex-col w-full gap-1 bg-white">
      <div className="flex justify-between items-center font-inter text-base font-medium leading-20">
        <p className="text-gray-600">Select a title to continue</p>
        <button className="flex items-center justify-center h-23 w-23 rounded-full bg-white border border-gray-400 p-0 text-gray-600">
          <FiRefreshCcw className="w-10 h-10" />
        </button>
      </div>
      <input
        className="w-full h-64 px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-base font-medium leading-20 text-left"
        placeholder="    Enter your custom title"
      />
      <hr className="border-gray-200" />
      <p className="font-inter text-base font-medium leading-20 text-gray-600">Suggested by AI</p>
      <div className="flex flex-col w-full gap-20 bg-white">
        {/* Insert SimpleTitleTextContainer here */}
        <SimpleTitleTextContainer title={title} text={text} />
      </div>
    </div>
  );
};

export default VerticalContentCard;
