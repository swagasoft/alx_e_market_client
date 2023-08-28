import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className='top-footer py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4 text-white'>ALX E-Market</div>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>No:62 Koka Junction,<br /> Asaba Delta Sate.<br /> Post Code:320104 </address>
                <a href='tel:+234801000003' className='mb-3 mt-4 text-white d-block'>+234801000003</a>
                <a href='mailto:alxemarket@gmail.com' className='mb-3 mt-4 text-white d-block'>alxemarket@gmail.com</a>
                <div className='social-icon d-flex align-items-center gap-3'>
                  <a href="" className='text-white'>
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a href="" className='text-white'>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a href="" className='text-white'>
                    <BsTwitter className='fs-4' />
                  </a>
                  <a href="" className='text-white'>
                    <BsFacebook className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Accessaries</Link>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Smart Phones</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='last-footer py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                Copyright &copy; {new Date().getFullYear()}; Power by ALX E-Market
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer