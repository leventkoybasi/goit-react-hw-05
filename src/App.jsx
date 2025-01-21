// App.jsx
import style from './App.module.css';
import CardGallery from './components/CardGallery';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='bg-black'>
      <Header />
      <Carousel />
      <CardGallery />
      <Footer />
    </div>
  );
}

export default App;
