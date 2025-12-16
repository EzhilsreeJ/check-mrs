import React from 'react';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Now Showing</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;