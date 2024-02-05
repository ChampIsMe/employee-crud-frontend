import React from 'react';

const IconButton = ({ extraClasses, icon, onClick }) => {
  return (
    <button onClick={onClick}
            className={`m-2 w-[36px] aspect-square text-white grid place-items-center rounded-[50%] ${extraClasses ? extraClasses : ''}`}
            type={'button'}>
      {icon}
    </button>);
};

export default IconButton;