import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch, BsArrowRepeat } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Shop Now!</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0"> Free Shipping </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>E-Market</Link>
              </h2>
            </div>
            <div className='col-5'><div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search Product Here"
                aria-label="Search Product Here" aria-describedby="basic-addon2" />
              <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
            </div></div>
            <div className='col-5'>
              <div className='header-upper-links' d-flex align-items-center justify-conent-between>
                <div>
                  <Link className='d-flex'>
                    <img BsArrowRepeat />
                    <p></p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='' alt=''></img>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='' alt=''></img>
                  </Link>
                </div>
                <div>
                  <Link>
                    <img src='' alt=''></img>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-5'>
                <div>
                  <div className="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 
                      d-flex align-items-center" type="button" id="dropdownMenuButton1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu-down.png' />
                      <span className='me-3 inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-5'>
                    <NavLink to='/Home'> Home </NavLink>
                    <NavLink to='/Our Store'> Our Store </NavLink>
                    <NavLink to='/Blogs'> Blogs </NavLink>
                    <NavLink to='/Contact'> Contact </NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Header