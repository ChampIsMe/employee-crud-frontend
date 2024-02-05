import { useState } from 'react';

export const useVisibilityToggle = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  return {toggle, visible}
};
