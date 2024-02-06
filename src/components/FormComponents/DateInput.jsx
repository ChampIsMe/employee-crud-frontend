import React from 'react';
import './CustomDate.css'
import {useAppTheme} from '../../hooks/useAppTheme.js';

const DateInput = ({ type, id, label, placeHolder, required, register, inputClasses, rootClasses, formState: { errors }, }) => {
  const { isDarkMode } = useAppTheme();
  return (
    <div className={`my-1  ${rootClasses ? rootClasses : ''} ${isDarkMode ? 'CustomDate' : ''}`}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type={type}
             id={id}
             {...register(id, { required })}
             autoComplete={'off'}
             className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary outline-0 ${inputClasses ? inputClasses : ''}`}
             placeholder={placeHolder} required={required}/>
      {<p className={'text-red-700 w-full'}>{errors?.[id]?.message}</p>}
    </div>
  );
};

export default DateInput;