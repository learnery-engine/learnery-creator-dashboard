import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { PiPencilSimpleLineThin, PiTrashLight } from 'react-icons/pi';
import ModifyButtons from './ModifyButtons';

type SimpleTitleTextContainerProps = {
  title: string;
  text: string;
};

const SimpleTitleTextContainer: React.FC<SimpleTitleTextContainerProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col p-5 space-y-3 bg-white border border-gray-300 rounded-md shadow-sm transition duration-300 hover:border-green-500 hover:shadow-green-100">
      <h6 className="text-lg font-medium">{title}</h6>
      <p className="text-sm text-gray-600">{text}</p>
      <ModifyButtons />
    </div>
  );
};

export default SimpleTitleTextContainer;
