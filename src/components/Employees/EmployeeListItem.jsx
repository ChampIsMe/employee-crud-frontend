import React from 'react';
import {useNavigate} from 'react-router-dom';

const EmployeeListItem = ({ employee }) => {
  const navigate = useNavigate()
  return (
    <div className={' p-4 my-2 w-full flex md:flex-row xs:flex-col md:items-center gap-4 md:justify-between xs:items-stretch dark:bg-gray-700 bg-opacity-15 rounded-lg'}
         onClick={(event) => {
           navigate(`/app/employees/${employee.id}`, { state: { employee } })
         }}>
      <div className={'dark:text-white aspect-square rounded-[50%] flex flex-row justify-center items-center w-8 h-8 border-primary border-2'}>
        <p className={'p-2 '}>{employee.id}</p></div>
      <p className={'dark:text-white md:flex-1'}>{employee.firstName}</p>
      <p className={'dark:text-white md:flex-1'}>{employee.lastName}</p>
      <p className={'dark:text-white md:flex-1'}>{employee.contactNumber}</p>
    </div>
  );
};

export default EmployeeListItem;