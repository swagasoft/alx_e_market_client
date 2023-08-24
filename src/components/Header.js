import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>free shippings</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0"> Hotline: <a className='text-white' href='tel:+234801000003'>+234801000003</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <a className='text-white'>E-Market</a>
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
                  <link></link>
                </div>
                <div>
                  <link></link>
                </div>
                <div>
                  <link></link>
                </div>
                <div>
                  <link></link>
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