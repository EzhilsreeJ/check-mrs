import React from 'react';
import './BookingSummary.css';

function BookingSummary({ movieTitle, date, time, selectedSeats, numberOfTickets }) {
  return (
    <div className="booking-summary">
      <h4>Booking Summary</h4>
      <p><strong>Movie:</strong> {movieTitle}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>
      <p><strong>Number of Tickets:</strong> {numberOfTickets}</p>
      {/* Add total price here if applicable */}
    </div>
  );
}

export default BookingSummary;