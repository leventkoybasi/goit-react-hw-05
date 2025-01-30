function Search() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMoviesData = async () => {
  //     const data = await fetchMovies(BASE_URL, ENDPOINTS[endpoint]);
  //     const processedMovies = data.results.map((movie) => ({
  //       ...movie,
  //       roundedStars: movie.vote_average.toFixed(1),
  //     }));
  //     setMovies(processedMovies);
  //   };

  //   fetchMoviesData();
  // }, [endpoint]);
  return (
    <>
      <input
        name='search'
        type='text'
        className='form-control'
        placeholder="Search L'MDb"
        aria-describedby='button-addon2'
      />
      <button className='btn btn-primary ' type='button' id='button-addon2'>
        <i className='bi bi-search'></i>
      </button>
    </>
  );
}
export default Search;
