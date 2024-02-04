import './App.css'
import {useEffect, useState} from 'react';
import {emptyFunction} from './helpers/AppUtil.js';

function App() {
  // Turn on dark mode when enabled by the underlying operating system
  const [isDarkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  //Handle change of app theme
  const handleThemeChange = () => setDarkMode(!isDarkMode)
  
  //Toggle tailwinds darkMode via class method configured in tailwind.config.js
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return emptyFunction
  }, [isDarkMode]);
  return (
    <div className={`h-screen dark:bg-darkBackground overflow-hidden`}>
      <h1 className="text-3xl font-bold text-primary dark:text-white" onClick={handleThemeChange}>
        Add tailwinds to project and set up dark/light theme
      </h1>
    </div>
  )
}

export default App
