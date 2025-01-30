import { useState } from 'react';
import { fetchMovies, BASE_URL, ENDPOINTS } from '../js/fetchMovies.js';
import { MainContext, useContext } from '../hooks/Context';
import { useNavigate } from 'react-router';

function Search() {
  const [query, setQuery] = useState('');
  const { setLoading, setSearchMovies } = useContext(MainContext);
  const navigate = useNavigate();

  const fetchMoviesData = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await fetchMovies(BASE_URL, ENDPOINTS.SEARCH_MOVIES, { query });
      if (data && data.results) {
        const searchedMovie = data.results.map((movie) => ({
          ...movie,
          roundedStars: movie.vote_average.toFixed(1),
        }));
        setSearchMovies(searchedMovie);
      } else {
        setSearchMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setSearchMovies([]);
    } finally {
      setLoading(false);
      navigate('/searchresults');
    }
  };

  const handleSearchClick = () => {
    fetchMoviesData();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className='input-group'>
        <input
          name='search'
          type='text'
          className='form-control'
          placeholder="Search L'MDb"
          aria-describedby='button-addon2'
          value={query}
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary'
          type='button'
          id='button-addon2'
          onClick={handleSearchClick}
        >
          <i className='bi bi-search'></i>
        </button>
      </div>
    </>
  );
}

export default Search;
