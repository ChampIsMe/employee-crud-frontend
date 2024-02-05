import React from 'react';
import './App.css'
import {useAppTheme} from './hooks/useAppTheme.js';
import {Outlet} from 'react-router-dom';

const App = () => {
  const { isDarkMode, changeTheme } = useAppTheme();
  return (
    <div className={`h-screen dark:bg-black overflow-hidden`} id={'main'}>
      <Outlet/>
    </div>
  );
};

export default App;