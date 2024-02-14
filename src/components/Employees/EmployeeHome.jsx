import React, {useEffect, useState} from 'react';
import '../../App.css'
import {useAppTheme} from '../../hooks/useAppTheme.js';
import {Outlet, useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGetEmployeesQuery} from '../../ReduxImpl/Reducers/EmployeeSlice.js';

const EmployeeHome = () => {
  useAppTheme();
  const navigate = useNavigate()
  const [queryParams, setQueryParams] = useState()
  // Uncomment the code below if you want to test without API data
  const { data: employees /*= sampleList*/, isSuccess, isError, isLoading } = useGetEmployeesQuery(queryParams)
  useEffect(() => {
    //Only navigate when employee is not empty due to empty filter result
    if (!employees[0] && queryParams && Object.keys(queryParams).length === 0) {
      navigate('/app/employees/empty', { replace: true })
    }
  }, [isSuccess]);
  return (<div className={`h-screen dark:bg-black overflow-hidden w-full`}>
    <ToastContainer position="top-right"/>
    <Outlet context={{ employees, isSuccess, isError, isLoading, queryParams, setQueryParams }}/>
  </div>);
};

export default EmployeeHome;