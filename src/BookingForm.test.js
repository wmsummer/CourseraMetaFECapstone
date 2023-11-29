import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
    

  test('form validation - test default disabled ', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
    render(<BookingForm booking={{}} setBooking={{}} availableTimes={availableTimes} />);
  
  
    // Ensure button is disabled when form is invalid, which it is when no date or time is selected by default
    expect(screen.getByRole('button')).toBeDisabled();

    //set date and time
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-08-10' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    expect(screen.getByRole('button')).toBeEnabled();


  });

  test('form validation - test default enable after date and time set ', () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
    render(<BookingForm booking={{}} setBooking={{}} availableTimes={availableTimes} />);
  

    //set date and time
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-08-10' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    expect(screen.getByRole('button')).toBeEnabled();


  });

  test('form validation - error', async () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
    render(<BookingForm booking={{}} setBooking={{}} availableTimes={availableTimes} />);
  

    //touch date but don't set it
    fireEvent.blur(screen.getByLabelText('Choose date'));
    // check for error message
    await waitFor(() => {
    expect(screen.getByText('Please select a date')).toBeInTheDocument();
    });

    //touch time but don't set it
    fireEvent.blur(screen.getByLabelText('Choose time'));
    // check for error message
    await waitFor(() => {
    expect(screen.getByText('Please select a time')).toBeInTheDocument();
    });




  });