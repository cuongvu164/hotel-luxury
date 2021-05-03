import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setUser as setUserStore } from '../../redux/reducers/user'

const Navbar = () => {
  const loggedInUser = useSelector(store => store.user.user)
  const dispatch = useDispatch();
  const logoutUser = () => {
    
    // localStorage.setItem('user',false);
    dispatch(setUserStore({
      id:null,
      name:null,
      email:null,
      status: false
    }))

  }
  return (
    <>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">LuxuryHotel</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/room">Rooms</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>

                <li className="nav-item cta">
                  <Link to="/booknow" className="nav-link"><span>Book Now</span></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/account/profile">{loggedInUser.name}</Link>
                </li>
                <li className="nav-item">
                {/* <span className=""></span> */}
                  {
                    loggedInUser.status ? <Link to="/" className="nav-link" onClick={()=>logoutUser()}>Logout</Link> : <Link className="nav-link" to="/signin">Sign In</Link>
                  }
                   {/* <Link className="nav-link" to="/signin">Sign In</Link> */}
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;