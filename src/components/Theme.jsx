import { useState } from 'react';

function Theme() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className='nav-item nav-link ms-auto d-flex align-self-end justify-content-center'
        href='#'
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
