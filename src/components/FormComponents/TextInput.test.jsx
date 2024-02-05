import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import TextInput from './TextInput.jsx';

describe('Test custom input', () => {
  it('should show input value', () => {
    render(<TextInput/>)
    //todo: implement
    screen.debug()
  });
})