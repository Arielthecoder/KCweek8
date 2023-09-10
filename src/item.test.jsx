import { render, screen } from '@testing-library/react';
import Item from './components/item';

test('Item component does not render when text is empty', () => {
  const itemText = '';
  render(<Item item={{ text: itemText }} />);
  
 
  const itemElement = screen.queryByText(itemText, { selector: '.singleitem' });

  expect(itemElement).toBeNull();
});

