import React from 'react';
import EmployeeListHeader from './EmployeeListHeader.jsx';
import EmployeeListItem from './EmployeeListItem.jsx';

const EmployeeList = ({ employees }) => {
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4'}>
      <EmployeeListHeader/>
      {employees?.map(employee => <EmployeeListItem employee={employee}/>)}
    </div>
  );
};

export default EmployeeList;