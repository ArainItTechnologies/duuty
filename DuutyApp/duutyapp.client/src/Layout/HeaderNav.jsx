import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo4.png";

const HeaderNav = () => {
  return (
    <header id="header" className="header sticky-top">
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-end">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <img src={Logo} alt="" />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li className="dropdown">
                <div>
                  <span>Employer</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </div>
                <ul>
                  <li>
                    <NavLink to="post-job">Post A Job</NavLink>
                  </li>

                  <li>
                    <NavLink to="hire-now">Hire Now </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <div>
                  <span>Employee</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </div>
                <ul>
                  <li>
                    <NavLink to="find-a-job">Find Job </NavLink>
                  </li>
                  <li>
                    <NavLink to="/apply-now">Apply Now </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <a className="cta-btn" href="index.html#appointment">
            Find Job
          </a>
          <a className="cta-btn" href="index.html#appointment">
            Hire Now
          </a>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
