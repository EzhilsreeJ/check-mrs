import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import ShowtimesList from '../components/ShowtimesList';
import './MovieDetailsPage.css';

function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find(m => m.id === id);
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      // Handle case where movie is not found, perhaps redirect or show an error
      console.error("Movie not found!");
    }
  }, [id]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const handleBookNow = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="movie-details-page">
      <div className="movie-header">
        <img src={movie.posterUrl} alt={movie.title} className="movie-detail-poster" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p className="description">{movie.description}</p>
          <button onClick={handleBookNow} className="book-now-button">Book Now</button>
        </div>
      </div>
      <div className="showtimes-section">
        <h3>Available Showtimes</h3>
        <ShowtimesList movie={movie} />
      </div>
    </div>
  );
}

export default MovieDetailsPage;