import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import movies from '../data/movies';
import SeatPicker from '../components/SeatPicker';
import BookingSummary from '../components/BookingSummary';
import './BookingPage.css';

function BookingPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingInfo, setBookingInfo] = useState(null);

  // Mock seats data, in a real app this would be dynamic and depend on the showtime
  const totalSeats = 50; // Example: 50 seats available
  const seatLayout = Array.from({ length: totalSeats }, (_, i) => ({
    id: `seat-${i + 1}`,
    number: i + 1,
    isOccupied: Math.random() < 0.3 // Simulate some occupied seats
  }));

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === movieId);
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      console.error("Movie not found for booking!");
    }

    // Use state passed from ShowtimesList if available
    if (location.state && location.state.movieId === movieId) {
      setBookingInfo(location.state);
    } else {
      // If no state, user navigated directly. Try to get date/time or prompt.
      // For simplicity, we'll assume they need to select it if not provided.
      console.warn("Booking info not passed via state. Please select date and time on movie details page.");
      // In a real app, you might redirect them back or show an error/prompt.
    }
  }, [movieId, location.state]);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats(prevSeats => {
      if (prevSeats.includes(seatId)) {
        return prevSeats.filter(id => id !== seatId);
      } else {
        return [...prevSeats, seatId];
      }
    });
  };

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    if (!bookingInfo) {
      alert("Booking details are incomplete. Please select a showtime.");
      return;
    }
    // In a real app, this would involve an API call to confirm the booking
    alert(`Booking confirmed for ${movie.title}! Seats: ${selectedSeats.join(', ')}`);
    console.log("Booking confirmed:", {
      movieTitle: movie.title,
      seats: selectedSeats,
      ...bookingInfo
    });
    // Optionally redirect to a confirmation page
  };

  if (!movie) {
    return <div>Loading movie for booking...</div>;
  }

  return (
    <div className="booking-page">
      <h2>Book Your Tickets</h2>
      {bookingInfo && (
        <BookingSummary
          movieTitle={movie.title}
          date={bookingInfo.date}
          time={bookingInfo.time}
          selectedSeats={selectedSeats}
          numberOfTickets={selectedSeats.length}
        />
      )}

      <div className="seat-selection-area">
        <h3>Select Your Seats</h3>
        <div className="seat-layout-container">
          <SeatPicker
            seats={seatLayout}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />
        </div>
      </div>

      <button onClick={handleConfirmBooking} className="confirm-booking-button" disabled={selectedSeats.length === 0 || !bookingInfo}>
        Confirm Booking ({selectedSeats.length} seats)
      </button>
    </div>
  );
}

export default BookingPage;