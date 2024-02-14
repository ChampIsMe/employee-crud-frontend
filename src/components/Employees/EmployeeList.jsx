import React from 'react';
import EmployeeListHeader from './EmployeeListHeader.jsx';
import EmployeeListItem from './EmployeeListItem.jsx';
import {useOutletContext} from 'react-router-dom';
import Icon from '../../assets/images/Icon.JPG?url';

const EmployeeList = () => {
  const { employees } = useOutletContext();
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4 w-full'}>
      <div className={'xs:w-full md:w-[85%] lg:w-[70%] overflow-y-auto overscroll-y-contain'}>
        <EmployeeListHeader empCount={employees.length} />
        {employees?.[0] ? <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
          {employees?.map((employee, index) => <EmployeeListItem key={index} employee={employee}/>)}
        </div> : <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
          <img src={Icon}/>
          <div className={'flex flex-col xs:w-full sm:w-auto'}>
            <p className={'dark:text-white text-[18px] mb-4'}>There is no employee for the search criteria given.</p>
          </div>
        </div>}
      </div>
    </div>
  )
};

export default EmployeeList