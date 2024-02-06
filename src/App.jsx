import React from 'react';
import './App.css'
import {useAppTheme} from './hooks/useAppTheme.js';
import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isDarkMode, changeTheme } = useAppTheme();
  return (<div className={`h-screen dark:bg-black overflow-hidden w-full`}>
    <ToastContainer position="top-right"/>
    <Outlet/>
  </div>);
};

export default App;