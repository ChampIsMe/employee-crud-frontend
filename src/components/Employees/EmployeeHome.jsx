import React, {useEffect} from 'react';
import '../../App.css'
import {useAppTheme} from '../../hooks/useAppTheme.js';
import {Outlet, useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sampleList from './SampleEmployeeData.json';
import {useGetEmployeesQuery} from '../../ReduxImpl/Reducers/EmployeeSlice.js';

const EmployeeHome = () => {
  const { isDarkMode, changeTheme } = useAppTheme();
  const navigate = useNavigate()
  // Uncomment the code below if you want to test without API data
  const { data: employees /*= sampleList*/, isSuccess, isError, isLoading } = useGetEmployeesQuery()
  useEffect(() => {
    if (!employees[0]) {
      navigate('/app/employees/empty', { replace: true })
    }
  }, [isSuccess]);
  return (<div className={`h-screen dark:bg-black overflow-hidden w-full`}>
    <ToastContainer position="top-right"/>
    <Outlet context={{ employees, isSuccess, isError, isLoading }}/>
  </div>);
};

export default EmployeeHome;