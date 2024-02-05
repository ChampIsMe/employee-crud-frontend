import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className={' h-screen'}>
      <h1 className={'dark:text-white'}>Employee details</h1>
      <p>{employee?.name}</p>
    </div>
  );
};

export default EmployeeDetails;