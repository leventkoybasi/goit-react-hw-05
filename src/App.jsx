// App.jsx
// import style from './App.module.css';
import CardGallery from './components/CardGallery';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='' data-bs-theme='light'>
      <Navbar />
      <Carousel />
      <CardGallery />
      <Footer />
    </div>
  );
}

export default App;
