import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div className='youNabarMain'>
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              YouStarter.
            </Link>
            <button
              style={{color:"white"}}
              className='navbar-toggler bg-iconnav'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span style={{color:"white"}} className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link active' aria-current='page' to='/home'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/trending'>
                    Popular
                  </Link>
                </li>
                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    to='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Entertainment
                  </Link>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <Link className='dropdown-item' to='#'>
                        Short Flim
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='#'>
                        Vlog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='#'
                    tabindex='-1'
                    aria-disabled='true'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
