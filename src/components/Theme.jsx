import { useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

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
