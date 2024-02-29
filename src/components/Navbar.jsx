import React from 'react';
import '../assets/styles/navbar.css';
import ImgBlue from '../assets/besticons/best-icon2.png';

export default function Navbar() {

  return (
    <>
      <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2">
        <div className="container">
          <a className="navbar-brand mr-lg-5" href="#">
            <img src={ImgBlue} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="#">
                    <img src={ImgBlue} />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                  <i className="ni ni-ui-04 d-lg-none"></i>
                  <span className="nav-link-inner--text">Home</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                  <i className="ni ni-collection d-lg-none"></i>
                  <span className="nav-link-inner--text">About</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                  <i className="ni ni-collection d-lg-none"></i>
                  <span className="nav-link-inner--text">Services</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                  <i className="ni ni-collection d-lg-none"></i>
                  <span className="nav-link-inner--text">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
