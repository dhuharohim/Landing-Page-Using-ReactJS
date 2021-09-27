import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Dhuha's Portfolio
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Stuff
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" className="btn btn-secondary">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
