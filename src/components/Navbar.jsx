import Theme from './Theme';

function Navbar() {
  return (
    <div className=' py-1'>
      <nav className='navbar navbar-expand-lg navbar-dark container'>
        <a
          className='navbar-brand bg-primary px-2 py-1 text-black rounded'
          style={{ fontWeight: '800' }}
          href='#'
        >
          {`L'MDb`}
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='d-flex w-100 align-items-center'>
            <div className='input-group flex-grow-1 me-3' style={{ maxWidth: '75%' }}>
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
            </div>
            <div>
              <a className='btn btn-outline-primary border-2 py-1 px-3 rounded fw-bolder' href='#'>
                MOVIES
              </a>
            </div>
            <div className='dropdown ms-3'>
              <button
                className='btn btn-primary py-1 px-3 rounded fw-bolder dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                OPTIONS
              </button>
              <ul
                className='dropdown-menu dropdown-menu-dark'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Profile
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Settings
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <Theme />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
