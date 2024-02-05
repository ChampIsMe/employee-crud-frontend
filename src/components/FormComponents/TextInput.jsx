import React from 'react';

const TextInput = ({ type, id, label, placeHolder, required, register, inputClasses, rootClasses, defaultValue, formState }) => {
  return (
    <div className={`my-1 ${rootClasses ? rootClasses : ''}`}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type={type}
             defaultValue={defaultValue}
             id={id}
             {...(register && { ...register(id, { required }) })}
             autoComplete={'off'}
             className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary ${inputClasses ? inputClasses : ''}`}
             placeholder={placeHolder} required={required}/>
      {<p className={'text-red-700 w-full'}>{formState?.errors?.[id]?.message}</p>}
    </div>
  );
};

export default TextInput;