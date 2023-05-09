import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
/**
* @author
* @function Header
**/

export const Header = (props) => {
  return(
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/#">
            Student App
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/addstudent">
                        Add Student
                      </Link>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/#">
                        Details
                      </NavLink>
                    </li>
                  </ul>
                  <NavLink className="btn btn-outline-info my-2 my-sm-0 text-light  ms-auto" to="/login">
                    Login
                  </NavLink>
                  <NavLink
                    className="btn btn-outline-info text-light my-2 my-sm-0 ml-3"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </div>
              </nav>
      </>
   )

 }