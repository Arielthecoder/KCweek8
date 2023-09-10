import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/form';

test('Form component is rendered correctly', () => {
  render(<Form addItem={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Enter an item');
  const submitButtonElement = screen.getByText('Submit');

  expect(inputElement).toBeTruthy();
  expect(submitButtonElement).toBeTruthy();
});

test('Form component adds a new item correctly', () => {
  const addItemMock = (value) => {
    expect(value).toBe('Test New Item');
  };
  render(<Form addItem={addItemMock} />);
  const inputElement = screen.getByPlaceholderText('Enter an item');
  const submitButtonElement = screen.getByText('Submit');

  const newItemText = 'Test New Item';
  fireEvent.change(inputElement, { target: { value: newItemText } });
  fireEvent.click(submitButtonElement);
});

test('Form component does not add an empty item', () => {
  render(<Form addItem={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Enter an item');
  const submitButtonElement = screen.getByText('Submit');

  fireEvent.click(submitButtonElement);
});

