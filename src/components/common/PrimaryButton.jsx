import React from 'react';

const PrimaryButton = ({ text, type, extraClasses, icon, onClick }) => {
  return (
    <button onClick={onClick}
            className={`bg-primary hover:bg-primaryDark text-white font-bold py-2 px-4 rounded-full flex flex-row items-center justify-center gap-1 whitespace-nowrap ${extraClasses ? extraClasses : ''}`}
            type={type}>
      {icon}
      <span>{text}</span>
    </button>);
};

export default PrimaryButton;