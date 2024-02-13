import React from 'react';
import {useLocation} from 'react-router-dom';
import IconButton from '../common/IconButton.jsx';
import {MdEdit} from 'react-icons/md';
import {useVisibilityToggle} from '../../hooks/useToggle.js';
import FormModal from '../common/FormModal.jsx';
import EmployeeForm from './Forms/EmployeeForm.jsx';

const EmployeeDetails = () => {
  const { toggle, visible } = useVisibilityToggle();
  const { state: { employee } } = useLocation();
  return (
    <div className={'flex flex-row w-full justify-center'}>
      <FormModal toggle={toggle} visible={visible} title={'Edit employee'} maskClosable={true} closable={false}>
        <EmployeeForm toggle={toggle} employee={employee}/>
      </FormModal>
      <section className="mb-2 border dark:border-0 bg-neutral-100 p-4 rounded-lg bg-neutral-100 md:w-[60%] lg:w-[45%] sm:w-4/5 lg: xl:w-[35%] 2xl:w-[30%] my-4  dark:bg-darkBackground">
        <div className="mx-auto w-full">
          <div className="card md:flex w-full">
            <div className="w-20 h-20 mx-auto mb-6 md:mr-6 flex-shrink-0">
              <img className=" rounded-full" src="https://randomuser.me/api/portraits/men/44.jpg" alt={'profile image'}/>
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className={'flex flex-row w-full justify-between'}>
                <div className={'flex-grow'}>
                  <p className="font-bold dark:text-white">{`${employee.firstName} ${employee.lastName}`}</p>
                  <h3 className="text-xl heading dark:text-white">{`${employee.contactNumber}`}</h3>
                </div>
                <IconButton onClick={toggle} icon={<MdEdit size={20}/>}/>
              </div>
              <p className="mt-2 mb-4 dark:text-white text-sm">{`${employee.firstName} ${employee.lastName}`} is a Software Developer, mainly works
                with {employee?.employeeExperiences.map(item => item.skill.name).join(', ')} technologies.</p>
              <p className="mt-2 mb-4 dark:text-secondary font-bold">Experience per skill:</p>
              <div className={'space-x-2'}>
                {employee?.employeeExperiences.map((item, index) => <span key={index}
                                                             className="dark:text-white font-semibold dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">{`${item.skill.name} (${item.yrs} yrs)`}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeDetails;