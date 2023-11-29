import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the setBooking function to track its calls
const mockSetBooking = jest.fn();

test('renders BookingForm component', () => {
  render(<BookingForm booking={{}} setBooking={mockSetBooking} availableTimes={[]} />);
  
  // Ensure form elements are present
  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
});

test('displays the selected time options', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
    render(<BookingForm booking={{}} setBooking={mockSetBooking} availableTimes={availableTimes} />);
  
  
    // Ensure that each available time is an option in the select element
    availableTimes.forEach((time) => {
      fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: time } });
      expect(screen.getByDisplayValue(time)).toBeInTheDocument();
    });
  });
    