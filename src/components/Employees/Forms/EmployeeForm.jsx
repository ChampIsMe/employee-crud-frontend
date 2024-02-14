import React from 'react';
import TextInput from '../../FormComponents/TextInput.jsx';
import {useFieldArray, useForm} from "react-hook-form"
import * as yup from "yup";
import {array, date, object, string} from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import DateInput from '../../FormComponents/DateInput.jsx';
import SecondaryButton from '../../common/SecondaryButton.jsx';
import PrimaryButton from '../../common/PrimaryButton.jsx';
import {BiPlus} from 'react-icons/bi';
import {IoAddCircle} from 'react-icons/io5';
import SelectInput from '../../FormComponents/SelectInput.jsx';
import {makeSelectOptions} from '../../../helpers/AppUtil.js';
import IconButton from '../../common/IconButton.jsx';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {v4 as uuidV4} from 'uuid';
import {useCreateEmployeeMutation} from '../../../ReduxImpl/Reducers/EmployeeSlice.js';
import {errMsg, getToastId, updateToast} from '../../../ReduxImpl/Reducers/reducerUtils.js';

const EmployeeSchema = object().shape({
  firstName: string().min(2).max(30).required('Field is required'),
  lastName: string().min(2).max(30).required('Field is required'),
  contactNumber: string().max(12).matches(/^[+][0-9]/, { message: 'Invalid postal code' }).required(),
  email: string().max(100).email('Please enter a valid email address').required(),
  dob: date().max(new Date()).required('Field is required'),
  address: string().max(200).required('Field is required'),
  city: string().max(100).required('Field is required'),
  postalCode: string().trim().matches(/^[0-9]/, { message: 'Invalid postal code' }).required('Field is required'),
  country: string().max(100).required('Field is required'),
  skills: array().of(yup.object({
    skill: string().required('Field is required'),
    yrs: string().min(1).max(3).required('Field is required'),
    seniority: string().required('Field is required')
  })).min(1, 'At least one skill is required').max(5, 'Max of 5 skills are required').required('At least one skill is required')
});
const EmployeeForm = ({ toggle, employee }) => {
  const [createEmployee] = useCreateEmployeeMutation()
  const { control, register, handleSubmit, formState } = useForm({
    resolver: yupResolver(EmployeeSchema),
    defaultValues: {
      skills: employee ? employee.employeeExperiences.map(item => ({ skill: item.skill.name, yrs: item.yrs, seniority: item.seniority, id: item.skill.id })) :
        [{ skill: '', yrs: '', seniority: '', id: uuidV4() }],
      ...employee
    }
  })
  const { fields, append, remove } = useFieldArray({
    name: "skills",
    rules: { minLength: 1, maxLength: 5 },
    control
  });
  const onSubmit = async (data) => {
    const toastId = getToastId('Creating employee')
    try {
      await createEmployee({
        ...data, skills: data.skills.map(item => ({ skill: item.skill, yrs: item.yrs, seniority: item.seniority }))
      })
      toggle()
      updateToast(toastId, 'Employee created successfully', true)
    } catch (e) {
      console.error(e)
      updateToast(errMsg(e, false, employee), 'Unable to create employee', false)
    }
  };
  return (
    <div className={'w-full py-4'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={'text-primary font-semibold'}>Basic Info</p>
        <div className={'flex lg:flex-row gap-4 xs:flex-col'}>
          <TextInput id={'firstName'} rootClasses={'lg:w-1/3 xs:w-full'}
                     type={'text'}
                     formState={formState}
                     required={true}
                     label={'First Name'}
                     placeHolder={'John'}
                     register={register}/>
          <TextInput id={'lastName'}
                     formState={formState}
                     type={'text'}
                     required={true}
                     label={'Last Name'}
                     placeHolder={'Doe'}
                     register={register}
                     rootClasses={'flex-1'}/>
        </div>
        <TextInput id={'contactNumber'}
                   formState={formState}
                   type={'text'}
                   required={true}
                   label={'Contact Number'}
                   placeHolder={'+254702345622'}
                   register={register}/>
        <TextInput id={'email'}
                   formState={formState}
                   type={'email'}
                   required={true}
                   label={'Email Address'}
                   placeHolder={'johndoe@example.com'}
                   register={register}/>
        <DateInput rootClasses={'lg:w-1/3 xs:w-full'}
                   id={'dob'} type={'date'}
                   required={true}
                   label={'Date of Birth'}
                   placeHolder={'DD/MM/YYYY'}
                   register={register}
                   formState={formState}/>
        <p className={'text-primary font-semibold my-2'}>Address Info</p>
        <TextInput id={'address'}
                   formState={formState}
                   type={'text'}
                   required={true}
                   label={'Street Address'}
                   placeHolder={'Long Street, Apartment 101'}
                   register={register}/>
        <div className={'flex lg:flex-row gap-4 xs:flex-col w-full'}>
          <TextInput id={'city'}
                     formState={formState}
                     rootClasses={'lg:flex-1 xs:w-full'}
                     type={'text'}
                     required={true}
                     label={'City'}
                     placeHolder={'Cape Town'}
                     register={register}/>
          <TextInput id={'postalCode'}
                     formState={formState}
                     rootClasses={'lg:flex-1 xs:w-full'}
                     type={'text'}
                     required={true}
                     label={'Postal code'}
                     placeHolder={'00100'}
                     register={register}/>
          <TextInput id={'country'}
                     formState={formState}
                     rootClasses={'lg:flex-1 xs:w-full'}
                     type={'text'}
                     required={true}
                     label={'Country'}
                     placeHolder={'South Africa'}
                     register={register}/>
        </div>
        <p className={'text-primary font-semibold my-4'}>Skills</p>
        <div className={'w-full'}>
          {fields.map(({ id, skill, yrs, seniority }, index) => (
            <div key={id} className={'flex flex-row gap-4 mb-2 lg:items-end w-full bg-gray-400 bg-opacity-5 rounded'}>
              <div className={'flex lg:flex-row xs:flex-col gap-4 flex-grow'}>
                <TextInput id={`skills.${index}.skill`}
                           formState={formState}
                           rootClasses={'lg:flex-1 xs:w-full'}
                           type={'text'}
                           required={true}
                           label={'Skill'}
                           placeHolder={'e.g Java'}
                           register={register}
                           defaultValue={skill}/>
                <TextInput id={`skills.${index}.yrs`}
                           formState={formState}
                           rootClasses={'lg:basis-[20%] xs:w-full'}
                           type={'text'}
                           required={true}
                           label={'Yrs Exp'}
                           placeHolder={'1'}
                           register={register}
                           defaultValue={yrs}/>
                <SelectInput id={`skills.${index}.seniority`}
                             formState={formState}
                             rootClasses={'lg:flex-1 xs:w-full'}
                             required={true}
                             label={'Seniority Rating'}
                             placeHolder={2}
                             options={makeSelectOptions(['Select', 'Beginner', 'Junior', 'Mid', 'Senior', 'Expert'])}
                             register={register}
                             defaultValue={seniority}/>
              </div>
              {(fields.length > 1) && <IconButton
                onClick={() => remove(index)}
                rootClasses={'mx-2'}
                icon={<RiDeleteBin6Fill/>}/>}
            </div>
          ))}
          {<p className={'text-red-700 w-full'}>{formState?.errors?.skills?.message}</p>}
        </div>
        <SecondaryButton text={'Add New Skill'}
                         type={'button'}
                         extraClasses={'w-full px-8'}
                         icon={<BiPlus/>}
                         onClick={() => append({ skill: '', yrs: '', seniority: '' })}/>
        <div className={'mt-4 flex flex-row items-center w-full'}>
          <PrimaryButton text={'Save Changes'}
                         type={'submit'}
                         extraClasses={'mx-auto'}
                         icon={<IoAddCircle size={28}/>}/>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;