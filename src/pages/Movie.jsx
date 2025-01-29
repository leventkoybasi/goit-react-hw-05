import { fetchMovies, BASE_URL, ENDPOINTS, IMG_BASE_URL } from '../js/fetchMovies.js';

function Movie() {
  return (
    <div className='container my-4 mb-5'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4'>
          <img src='https://picsum.photos/id/297/400/600' alt='Movie' className='img-fluid' />
        </div>

        <div className='col-sm-12 col-md-12 col-lg-8 bg-primary'>
          <h1>Movie Title</h1>
          <p>Movie Description</p>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-sm-12 col-md-12 col-lg-4'>
          <h2>Aditional Information</h2>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-8'>
          <h2>Film Overview</h2>
          <p>Film Overview is here</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
