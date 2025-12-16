import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration}</p>
      <Link to={`/movie/${movie.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default MovieCard;