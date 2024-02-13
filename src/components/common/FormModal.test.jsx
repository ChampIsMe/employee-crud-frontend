import {afterEach, beforeAll, describe, it,vi,expect} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import FormModal from './FormModal.jsx';

describe('FormModal', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', () => ({
      useRouteError: () => ({ message: 'Test error' })
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  })
  const toggle = vi.fn()
  it('renders visible modal', () => {
    render(<FormModal toggle={toggle} maskClosable={true} closable={false} title={'Test header'} visible={true}>
      <h1>Modal child</h1>
    </FormModal>)
    expect(screen.getByText('Modal child', { exact: true })).toBeInTheDocument()
  })
  it('renders invisible modal', () => {
    render(<FormModal toggle={toggle} maskClosable={true} closable={false} title={'Test header'} visible={false}>
      <h1>Modal child</h1>
    </FormModal>)
    expect(screen.queryByText('Test header', { exact: true })).not.toBeInTheDocument()
  })
  it('should emit toggle click', () => {
    render(<FormModal toggle={toggle} maskClosable={true} closable={false} title={'Test header'} visible={true}>
      <h1>Modal child</h1>
    </FormModal>)
    fireEvent.click(screen.getByTestId('test-modalwrapper', { exact: true }))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})