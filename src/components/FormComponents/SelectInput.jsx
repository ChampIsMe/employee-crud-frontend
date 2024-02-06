import React from 'react';

const SelectInput = ({ id, label, required, register, inputClasses, rootClasses, onChange, options, defaultValue }) => {
  return (
    <div className={`my-1 ${rootClasses ? rootClasses : ''}`}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select required={required}
              defaultValue={defaultValue}
              id={id}
              {...(register && { ...register(id, { required }) })}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary outline-0 ${inputClasses ? inputClasses : ''}`}
              name={id}
              onChange={onChange}>
        {options?.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
      </select>
    </div>
  );
};

export default SelectInput;