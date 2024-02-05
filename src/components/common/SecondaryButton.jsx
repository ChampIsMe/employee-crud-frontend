import React from 'react';

const SecondaryButton = ({ text, type, extraClasses, icon, onClick }) => {
  return (
    <button onClick={onClick}
            className={`bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg  flex flex-row items-center justify-center gap-1 ${extraClasses ? extraClasses : ''}`}
            type={type}>
      {icon}
      <span>{text}</span>
    </button>);
};

export default SecondaryButton;