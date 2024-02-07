import {afterEach, beforeAll, describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import EmployeeList from './EmployeeList.jsx';
import employees from './SampleEmployeeData.json'

describe('EmployeeList', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', () => ({
      useOutletContext: () => ({ employees, isSuccess: false, isError: false, isLoading: false }),
      useNavigate: () => ({ state: employees[0] })
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  })
  it('Should render every first_name in the provided list', () => {
    render(<EmployeeList/>)
    for (let i = 0; i < employees.length; i++) {
      expect(screen.getByText(employees[i].first_name, { exact: true })).toBeInTheDocument()
    }
  })
  //todo: Other core tests are ignored for the purposes of brevity
})