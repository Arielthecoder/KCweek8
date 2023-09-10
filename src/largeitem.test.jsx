import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './components/item';

test('Item component handles long text correctly', () => {
  
  const longText = 'A'.repeat(1000);

  render(<Item item={{ text: longText }} />);
  
 
  const itemElement = screen.queryByText(longText, { selector: '.singleitem' });

  expect(itemElement).toBeTruthy();
});
