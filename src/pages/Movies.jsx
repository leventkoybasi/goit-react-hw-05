import Card from '../components/Card';

function Movies() {
  return (
    <div className='container my-4'>
      <Card endpoint='TRENDING_DAY' />
    </div>
  );
}
export default Movies;
