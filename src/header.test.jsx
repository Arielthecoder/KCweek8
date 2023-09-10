import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/header';

test('Header component is rendered correctly', () => {
  render(<Header />);
  const headerElement = screen.getByText('Hello Techtonica!');
  const subheaderElement = screen.getByText('This is a Gratitude List');
  

  expect(headerElement).toBeTruthy();
  expect(subheaderElement).toBeTruthy();
});
