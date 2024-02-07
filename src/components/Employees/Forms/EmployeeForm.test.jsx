import {afterEach, beforeAll, describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import EmployeeForm from './EmployeeForm.jsx';

describe('EmployeeForm', () => {
  beforeAll(() => {
    //Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    });
    vi.mock('react-router-dom', () => ({
      useRouteError: () => ({ message: 'Test error' })
    }));
    // noinspection JSUnusedGlobalSymbols
    vi.mock('../../../ReduxImpl/Reducers/EmployeeSlice.js', () => ({
      useCreateEmployeeMutation: () => [vi.fn()]
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  })
  it('renders all labels', () => {
    render(<EmployeeForm/>)
    const firstName = screen.getByLabelText('First Name', { exact: true })
    const lastNameName = screen.getByLabelText('Last Name', { exact: true })
    const contactNumber = screen.getByLabelText('Contact Number', { exact: true })
    const emailAddress = screen.getByLabelText('Email Address', { exact: true })
    const dateOfBirth = screen.getByLabelText('Date of Birth', { exact: true })
    const streetAddress = screen.getByLabelText('Street Address', { exact: true })
    const city = screen.getByLabelText('City', { exact: true })
    const postalCode = screen.getByLabelText('Postal code', { exact: true })
    const country = screen.getByLabelText('Country', { exact: true })
    const skill = screen.getByLabelText('Skill', { exact: true })
    const yrs = screen.getByLabelText('Yrs Exp', { exact: true })
    const seniority = screen.getByLabelText('Seniority Rating', { exact: true })
    const newSkillButton = screen.queryByText('Add New Skill', { exact: true })
    const submitButton = screen.queryByText('Save Changes', { exact: true })
    let elements = [firstName, lastNameName, contactNumber, emailAddress, dateOfBirth, streetAddress, city, postalCode, country, skill, yrs, seniority, newSkillButton, submitButton]
    for (let i = 0; i < elements.length; i++) {
      expect(elements[i]).toBeInTheDocument()
    }
  })
  it('should autofill all provided default values', () => {
    const defaultValues = {
      "first_name": "Philip",
      "last_name": "Okinyi",
      "contact_number": "+27715153701"
    }
    render(<EmployeeForm employee={defaultValues}/>)
    //Only a few fields are used to demonstrate
    const firstName = screen.getByLabelText('First Name', { exact: true })
    const lastNameName = screen.getByLabelText('Last Name', { exact: true })
    const contactNumber = screen.getByLabelText('Contact Number', { exact: true })
    expect(firstName.value).toBe('Philip');
    expect(lastNameName.value).toBe('Okinyi');
    expect(contactNumber.value).toBe("+27715153701");
  })
  //todo: Other core tests are ignored for the purposes of brevity
})