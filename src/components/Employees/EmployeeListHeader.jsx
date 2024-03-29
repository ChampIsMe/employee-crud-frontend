import React from 'react';
import TextInput from '../FormComponents/TextInput.jsx';
import SelectInput from '../FormComponents/SelectInput.jsx';
import {IoAddCircle} from 'react-icons/io5';
import PrimaryButton from '../common/PrimaryButton.jsx';
import {useVisibilityToggle} from '../../hooks/useToggle.js';
import FormModal from '../common/FormModal.jsx';
import EmployeeForm from './Forms/EmployeeForm.jsx';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string} from 'yup';
import {useOutletContext} from 'react-router-dom';

const SearchSchema = object().shape({
  searchText: string().min(2).max(30).required('Field is required')
});
const EmployeeListHeader = ({ empCount }) => {
  const { toggle, visible } = useVisibilityToggle();
  const { queryParams, setQueryParams } = useOutletContext();
  const filterOptions = [
    { label: 'Filter by', value: 'none' },
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
    { label: "Email Address", value: 'email' }]
  const { register, handleSubmit, formState, watch } = useForm({ resolver: yupResolver(SearchSchema), defaultValues: queryParams })
  watch(async (value) => {
    const params = { [value.selectedQueryParam]: value.searchText }
    //todo: debounce these search triggers
    if (value.selectedQueryParam !== 'none' && value.searchText) {
      await setQueryParams(params)
    } else {
      //reset
      await setQueryParams()
    }
  })
  
  return (
    <div className={'w-full mb-8 xs:px-4  flex md:flex-row xs:flex-col md:items-center gap-4 mt-24 md:justify-between xs:items-stretch'}>
      <FormModal toggle={toggle} visible={visible} title={'Add employee'} maskClosable={true} closable={false}>
        <EmployeeForm toggle={toggle}/>
      </FormModal>
      <div className={'flex flex-col xs:w-full md:w-auto'}>
        <p className={'font-bold text-gray-700 dark:text-white text-[24px]'}>Employees</p>
        <p className={'dark:text-white text-[12px]'}>There are {empCount} employees</p>
      </div>
      <div className={'flex-grow'}>
        <form onSubmit={handleSubmit(() => {
          // console.log({ values1 })
        })} className={'flex flex-row'}>
          <TextInput
            id={'searchText'}
            formState={formState}
            type={'text'}
            register={register}
            required={true}
            rootClasses={'flex-grow'}
            placeHolder={'Search'}
            inputClasses={'dark:bg-transparent  outline-0'}/>
          <SelectInput
            id={'selectedQueryParam'}
            formState={formState}
            register={register}
            required={true}
            options={filterOptions}
            inputClasses={'dark:bg-transparent border-0 dark:border-0 outline-0'}/>
        </form>
      </div>
      <PrimaryButton text={'New Employee'} onClick={toggle}
                     type={'submit'}
                     icon={<IoAddCircle/>}/>
    </div>
  );
};

export default EmployeeListHeader;