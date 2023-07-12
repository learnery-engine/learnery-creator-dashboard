import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi';

const ModifyButtons = () => {
  return (
    <div className="flex items-start gap-12 mt-2">
      <button className="flex justify-center items-center h-28 w-28 rounded-full bg-white border border-gray-300 p-0 text-gray-500">
        <FiRefreshCcw className="w-10 h-10 text-gray-500" />
      </button>
      <button className="flex justify-center items-center h-28 w-28 rounded-full bg-white border border-gray-300 p-0 text-gray-500">
        <PiPencilSimpleLineThin className="w-10 h-10 text-gray-500" />
      </button>
      <button className="flex justify-center items-center h-28 w-28 rounded-full bg-white border border-gray-300 p-0 text-gray-500">
        <PiTrashLight className="w-10 h-10 text-gray-500" />
      </button>
    </div>
  );
};

export default ModifyButtons;
