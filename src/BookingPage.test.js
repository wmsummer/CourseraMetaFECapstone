import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

// Mock the setBooking function to track its calls
const mockSetBooking = jest.fn();

test('renders BookingPage component', () => {
  render(<BookingPage />);
  
  // Ensure "Reservations" is present
  expect(screen.getByText('Reservations')).toBeInTheDocument();
});
