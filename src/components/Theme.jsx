import { useState, useEffect } from 'react';

function Theme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={toggleTheme}
        className='nav-item nav-link ms-auto d-flex align-self-end justify-content-center'
      >
        {theme === 'light' ? (
          <i className='bi bi-moon-stars-fill text-primary fs-4'></i>
        ) : (
          <i className='bi bi-brightness-high-fill text-primary fs-4'></i>
        )}
      </button>
    </>
  );
}

export default Theme;
