import React from 'react';
import EmployeeListHeader from './EmployeeListHeader.jsx';
import EmployeeListItem from './EmployeeListItem.jsx';
import {useOutletContext} from 'react-router-dom';

const EmployeeList = () => {
  const { employees, isSuccess, isError, isLoading } = useOutletContext();
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4 w-full'}>
      <div className={'xs:w-full md:w-[85%] lg:w-[70%] overflow-y-auto overscroll-y-contain'}>
        <EmployeeListHeader empCount={employees.length}/>
        <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
          {employees?.map((employee, index) => <EmployeeListItem key={index} employee={employee}/>)}
        </div>
      </div>
    </div>
  )
};

export default EmployeeList