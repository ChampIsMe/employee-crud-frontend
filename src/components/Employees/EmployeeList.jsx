import React, {useEffect} from 'react';
import EmployeeListHeader from './EmployeeListHeader.jsx';
import EmployeeListItem from './EmployeeListItem.jsx';
import {useGetEmployeesQuery} from '../../ReduxImpl/Reducers/EployeeSlice.js';
import sampleList from './SampleEmployeeData.json'
import {useNavigate} from 'react-router-dom';

const EmployeeList = () => {
  const navigate = useNavigate()
  //Use sample list before API is integrated
  const { data: employees = sampleList, isSuccess, isError, isLoading } = useGetEmployeesQuery()
  useEffect(() => {
    if (isSuccess && !employees[0]) {
      navigate('/app/employees/empty', { replace: true })
    }
  }, [isSuccess]);
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4 w-full'}>
      <div className={'xs:w-full md:w-[85%] lg:w-[70%] overflow-y-auto overscroll-y-contain'}>
        <EmployeeListHeader empCount={employees.length}/>
        <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
          {employees?.map((employee, index) => <EmployeeListItem key={index} employee={employee} empId={index + 1}/>)}
        </div>
      </div>
    </div>
  )
};

export default EmployeeList