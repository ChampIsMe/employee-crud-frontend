import {beforeAll, describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import EmployeeList from './EmployeeList.jsx';

describe('App.js', () => {
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
  });
  it('renders H1 text', () => {
    render(<EmployeeList/>)
    expect(screen.getByText(/Add tailwinds to project and set up dark\/light theme/i, { exact: true })).toBeInTheDocument()
  })
})