import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ShowtimesList.css';

function ShowtimesList({ movie }) {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current movie ID if needed, though movie prop is sufficient here
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = Object.keys(movie.showtimes);
  // Sort dates chronologically for better display if needed, for this example, assuming they are already sorted
  // For a real app, you'd want to parse and sort dates.

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleProceedToBooking = () => {
    if (selectedDate && selectedTime) {
      const bookingInfo = {
        movieId: movie.id,
        movieTitle: movie.title,
        date: selectedDate,
        time: selectedTime
      };
      // Store booking info in state or navigate with state
      navigate(`/booking/${movie.id}`, { state: bookingInfo });
    } else {
      alert('Please select a date and time to proceed.');
    }
  };

  return (
    <div className="showtimes-list">
      <div className="date-selector">
        <h4>Select a Date:</h4>
        <div className="date-buttons">
          {dates.map(date => (
            <button
              key={date}
              className={`date-button ${selectedDate === date ? 'selected' : ''}`}
              onClick={() => handleDateSelect(date)}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="time-selector">
          <h4>Select a Time for {selectedDate}:</h4>
          <div className="time-buttons">
            {movie.showtimes[selectedDate].map(time => (
              <button
                key={time}
                className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {(selectedDate && selectedTime) && (
        <button onClick={handleProceedToBooking} className="proceed-booking-button">
          Proceed to Book {movie.title} on {selectedDate} at {selectedTime}
        </button>
      )}
    </div>
  );
}

export default ShowtimesList;