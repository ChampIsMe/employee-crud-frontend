import {useEffect, useState} from 'react';
import {emptyFunction} from '../helpers/AppUtil.js';

export const useAppTheme = () => {
  // Turn on dark mode when enabled by the underlying operating system
  const [isDarkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  //Handle change of app theme
  const changeTheme = () => setDarkMode(!isDarkMode)
  
  //Toggle tailwinds darkMode via class method configured in tailwind.config.js
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return emptyFunction
  }, [isDarkMode]);
  return { isDarkMode, changeTheme }
};

