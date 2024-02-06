import React from 'react';

const FormModal = ({ visible, toggle, children, title, maskClosable, closable }) => {
  return visible ? (
    <div id={'modalwrapper'}
         className={'fixed inset-0 bg-black dark:bg-black bg-opacity-25 dark:bg-opacity-60 backdrop-blur-sm dark:backdrop-blur-0 flex justify-center items-center w-full overflow-y-auto'}
         onClick={(event) => {
           //Prevent toggling except for the overlay
           if (event.target?.id === 'modalwrapper' && maskClosable) {
             toggle()
           }
         }}
    >
      <div className={'md:w-[60%] lg:w-[45%] sm:w-4/5 lg: xl:w-[35%] 2xl:w-[30%] my-4'}>
        <div className={'w-full bg-white dark:bg-darkBackground px-4 rounded-3xl flex flex-col'}>
          <div className={'flex flex-row justify-between w-full my-4'}>
            <p className={'dark:text-white font-bold'}>{title}</p>
            {closable && <button onClick={toggle}>Close</button>}
          </div>
          <div className={'flex flex-row justify-between w-full'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FormModal;