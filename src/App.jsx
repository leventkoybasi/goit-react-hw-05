// App.jsx
// import style from './App.module.css';

import CardGallery from './components/CardGallery';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { MainProvider } from './hooks/Context';

function App() {
  return (
    <MainProvider>
      <div>
        <Navbar />
        <Carousel />
        <CardGallery />
        <Footer />
      </div>
    </MainProvider>
  );
}

export default App;
//data-bs-theme={theme}
