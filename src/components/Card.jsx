import { useState, useEffect } from 'react';
import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from '../js/fetchMovies.js';

function Card() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
      setMovies(data.results);
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      <div className='d-flex flex-wrap gap-3 align-items-center justify-content-center'>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className='card bg-black border-0' style={{ width: '18rem' }}>
              {' '}
              <img
                src={`${IMG_BASE_URL}/w500${movie.poster_path}`}
                className='card-img-top'
                alt={movie.title}
              />
              <div className='card-body text-white bg-dark rounded-bottom'>
                <h5 className='card-title'>{movie.title}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </>
  );
}

export default Card;
