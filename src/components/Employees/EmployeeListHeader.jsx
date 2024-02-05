import React from 'react';
import TextInput from '../FormComponents/TextInput.jsx';
import SelectInput from '../FormComponents/SelectInput.jsx';
import {IoAddCircle} from 'react-icons/io5';
import PrimaryButton from '../common/PrimaryButton.jsx';
import {makeSelectOptions} from '../../helpers/AppUtil.js';
import {useVisibilityToggle} from '../../hooks/useToggle.js';
import AppModal from '../common/AppModal.jsx';
import EmployeeForm from './Forms/EmployeeForm.jsx';

const EmployeeListHeader = () => {
  const { toggle, visible } = useVisibilityToggle()
  //todo: Make this responsive
  return (
    <div className={'w-[60%] flex flex-row items-center gap-4 mt-24'}>
      <AppModal toggle={toggle} visible={visible} title={'Add employee'} maskClosable={true} closable={false}>
        <EmployeeForm toggle={toggle}/>
      </AppModal>
      <div className={'flex flex-col'}>
      <p className={'font-bold text-gray-700 dark:text-white text-[24px]'}>Employees</p>
      <p className={'dark:text-white text-[12px]'}>There are 4 employees</p>
      </div>
      <TextInput rootClasses={'flex-grow'} placeHolder={'Search'}/>
      <SelectInput options={makeSelectOptions(['Filter by','first_name','last_name','contact_number'])}/>
      <PrimaryButton text={'New Employee'} onClick={toggle}
                     type={'submit'}
                     extraClasses={'mx-auto'}
                     icon={<IoAddCircle/>}/>
    </div>
  );
};

export default EmployeeListHeader;