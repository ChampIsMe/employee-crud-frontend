import React from 'react';
import TextInput from '../FormComponents/TextInput.jsx';
import SelectInput from '../FormComponents/SelectInput.jsx';
import {IoAddCircle} from 'react-icons/io5';
import PrimaryButton from '../common/PrimaryButton.jsx';
import {makeSelectOptions} from '../../helpers/AppUtil.js';
import {useVisibilityToggle} from '../../hooks/useToggle.js';
import FormModal from '../common/FormModal.jsx';
import EmployeeForm from './Forms/EmployeeForm.jsx';

const EmptyEmployeeListHeader = () => {
  const { toggle, visible } = useVisibilityToggle()
  return (
    <div className={'w-full mb-8 xs:px-4 flex sm:flex-row xs:flex-col sm:items-center gap-4 mt-24 sm:justify-between xs:items-stretch'}>
      <FormModal toggle={toggle} visible={visible} title={'Add employee'} maskClosable={true} closable={false}>
        <EmployeeForm toggle={toggle}/>
      </FormModal>
      <div className={'flex flex-col xs:w-full sm:w-auto'}>
        <p className={'font-bold text-gray-700 dark:text-white text-[36px]'}>Employees</p>
        <p className={'dark:text-white text-[16px]'}>No employees</p>
      </div>
      
      <PrimaryButton text={'New Employee'} onClick={toggle}
                     type={'submit'}
                     extraClasses={'text-[24px]'}
                     icon={<IoAddCircle size={42}/>}/>
    </div>
  );
};

export default EmptyEmployeeListHeader;