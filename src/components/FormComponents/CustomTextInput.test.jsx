import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import CustomTextInput from './CustomTextInput.jsx';

describe('Test custom input', () => {
  it('should show input value', () => {
    render(<CustomTextInput/>)
    //todo: implement
    screen.debug()
  });
})