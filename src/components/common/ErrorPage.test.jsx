import {beforeAll, afterEach,describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import ErrorPage from './ErrorPage.jsx';

describe('ErrorPage', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', () => ({
      useRouteError: () => ({ message: 'Test error' })
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  })
  it('renders correct error', () => {
    render(<ErrorPage/>)
    expect(screen.getByText(/Test error/i, { exact: true })).toBeInTheDocument()
  })
  it('renders incorrect error', () => {
    render(<ErrorPage/>)
    expect(screen.queryByText("Test no error", { exact: true })).not.toBeInTheDocument()
  })
})