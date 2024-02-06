import React from 'react';

const EmployeeListItem = ({ employee, empId }) => {
  return (
    <div className={' p-4 my-2 w-full flex md:flex-row xs:flex-col md:items-center gap-4 md:justify-between xs:items-stretch dark:bg-gray-700 bg-opacity-15 rounded-lg'}>
      <div className={'dark:text-white aspect-square rounded-[50%] flex flex-row justify-center items-center w-8 h-8 border-primary border-2'}>
        <p className={'p-2 '}>{empId}</p></div>
      <p className={'dark:text-white md:flex-1'}>{employee.first_name}</p>
      <p className={'dark:text-white md:flex-1'}>{employee.last_name}</p>
      <p className={'dark:text-white md:flex-1'}>{employee.contact_number}</p>
    </div>
  );
};

export default EmployeeListItem;