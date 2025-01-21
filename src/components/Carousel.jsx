import style from './Carousel.module.css';
import { useState, useEffect } from 'react';
import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from '../js/fetchMovies.js';

function Carousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
      setMovies(data.results);
    };

    fetchMoviesData();
  }, []);
  return (
    <div className='container py-3'>
      <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          {movies.slice(0, 5).map((movie, index) => (
            <div key={movie.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className='row align-items-center'>
                <div className='col-md-6'>
                  <img
                    src={`${IMG_BASE_URL}/w780${movie.backdrop_path}`}
                    className='d-block w-100'
                    alt='First slide'
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div
                  className={`col-md-6 d-flex flex-column justify-content-center text-start gap-5 w-25 ${style.carouselCaption}`}
                >
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
