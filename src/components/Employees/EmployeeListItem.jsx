import React from 'react';

const EmployeeListItem = ({ employee }) => {
  return (
    <div>
      <h1>List item</h1>
      <h1>{employee.name}</h1>
    </div>
  );
};

export default EmployeeListItem;