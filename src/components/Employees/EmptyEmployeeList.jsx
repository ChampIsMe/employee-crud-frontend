import React from 'react';
import EmptyEmployeeListHeader from './EmptyEmployeeListHeader.jsx';

const EmptyEmployeeList = () => {
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4 w-full'}>
      <div className={'xs:w-full md:w-[85%] lg:w-[70%] overflow-y-auto overscroll-y-contain'}>
        <EmptyEmployeeListHeader/>
        <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
        
        </div>
      </div>
    </div>
  );
};

export default EmptyEmployeeList;