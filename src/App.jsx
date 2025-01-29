// App.jsx
// import style from './App.module.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import styles from './App.module.css';
import { MainProvider } from './hooks/Context';
import { NavLink, Route, Routes, Link } from 'react-router';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <MainProvider>
      <NavLink to='/' className={styles.navLink}>
        <Navbar />
      </NavLink>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>

      <Link to='/' className={styles.navLink}>
        <Footer />
      </Link>
    </MainProvider>
  );
}

export default App;
