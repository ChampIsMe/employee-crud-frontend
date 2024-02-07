import React, {useEffect} from 'react';
import EmptyEmployeeListHeader from './EmptyEmployeeListHeader.jsx';
import Icon from '../../assets/images/Icon.JPG?url';
import sampleList from './SampleEmployeeData.json';
import {useGetEmployeesQuery} from '../../ReduxImpl/Reducers/EployeeSlice.js';
import {useNavigate} from 'react-router-dom';

const EmptyEmployeeList = () => {
  const navigate = useNavigate()
  const { data: employees = sampleList, isSuccess, isError, isLoading } = useGetEmployeesQuery()
  useEffect(() => {
    //todo: replace && with || operator below. It's left as such to hello view the page when there is no integration
    if (isSuccess && employees[0]) {
      navigate('/app/employees', { replace: true })
    }
  }, [isSuccess]);
  return (
    <div className={'h-screen overflow-hidden flex flex-col items-center px-4 w-full'}>
      <div className={'xs:w-full md:w-[85%] lg:w-[70%] overflow-y-auto overscroll-y-contain'}>
        <EmptyEmployeeListHeader/>
        <div className={'mb-8 xs:px-4 flex flex-col md:items-center gap-4 md:justify-between xs:items-stretch'}>
          <img src={Icon}/>
          <div className={'flex flex-col xs:w-full sm:w-auto'}>
            <p className={'dark:text-white text-[18px] mb-4'}>There is nothing here</p>
            <p className={' text-gray-700 dark:text-white text-[18px]'}>Create a new employee by clicking the <br/><span className={'font-bold'}>New Employee</span> button to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyEmployeeList;