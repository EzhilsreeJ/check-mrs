import React from 'react';
import './SeatPicker.css';

function SeatPicker({ seats, selectedSeats, onSeatSelect }) {
  return (
    <div className="seat-picker">
      <div className="screen-indicator">Screen</div>
      <div className="seats-grid">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.isOccupied ? 'occupied' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => !seat.isOccupied && onSeatSelect(seat.id)}
          >
            {seat.number}
          </div>
        ))}
      </div>
      <div className="seat-legend">
        <div className="legend-item"><span className="seat-available"></span> Available</div>
        <div className="legend-item"><span className="seat-selected"></span> Selected</div>
        <div className="legend-item"><span className="seat-occupied"></span> Occupied</div>
      </div>
    </div>
  );
}

export default SeatPicker;