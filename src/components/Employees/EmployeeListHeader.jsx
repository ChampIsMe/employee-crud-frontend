import React from 'react';
import TextInput from '../FormComponents/TextInput.jsx';
import SelectInput from '../FormComponents/SelectInput.jsx';
import {IoAddCircle} from 'react-icons/io5';
import PrimaryButton from '../common/PrimaryButton.jsx';
import {makeSelectOptions} from '../../helpers/AppUtil.js';
import {useVisibilityToggle} from '../../hooks/useToggle.js';
import FormModal from '../common/FormModal.jsx';
import EmployeeForm from './Forms/EmployeeForm.jsx';

const EmployeeListHeader = ({empCount}) => {
  const { toggle, visible } = useVisibilityToggle();
  return (
    <div className={'w-full mb-8 xs:px-4  flex md:flex-row xs:flex-col md:items-center gap-4 mt-24 md:justify-between xs:items-stretch'}>
      <FormModal toggle={toggle} visible={visible} title={'Add employee'} maskClosable={true} closable={false}>
        <EmployeeForm toggle={toggle}/>
      </FormModal>
      <div className={'flex flex-col xs:w-full md:w-auto'}>
        <p className={'font-bold text-gray-700 dark:text-white text-[24px]'}>Employees</p>
        <p className={'dark:text-white text-[12px]'}>There are {empCount} employees</p>
      </div>
      <TextInput rootClasses={'flex-grow'}
                 placeHolder={'Search'}
                 inputClasses={'dark:bg-transparent  outline-0'}/>
      <SelectInput options={makeSelectOptions(['Filter by', 'first_name', 'last_name', 'contact_number'])}
                   inputClasses={'dark:bg-transparent border-0 dark:border-0 outline-0'}/>
      <PrimaryButton text={'New Employee'} onClick={toggle}
                     type={'submit'}
                     icon={<IoAddCircle/>}/>
    </div>
  );
};

export default EmployeeListHeader;