import { NavLink } from "react-router-dom";
import logo from "../assets/images/khushilogo.png";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `nav-link premium-nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="site-header">

      {/* THIN TOP BAR */}
      <div className="premium-top-strip d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center gap-4">

              <span>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Vashi, Navi Mumbai
              </span>

              <span>
                <i className="bi bi-airplane-engines-fill me-2"></i>
                Fresh Produce Exporter Since 2007
              </span>

            </div>

            <div className="d-flex align-items-center gap-4">

              <a href="tel:+917317422100">
                <i className="bi bi-telephone-fill me-2"></i>
                +91 7317422100
              </a>

              <a href="mailto:info@khushiinternational.in">
                <i className="bi bi-envelope-fill me-2"></i>
                info@khushiinternational.in
              </a>

            </div>

          </div>
        </div>
      </div>


      {/* MAIN PREMIUM NAVBAR */}
      <nav className="navbar navbar-expand-lg premium-main-navbar sticky-top">

        <div className="container">

          {/* LOGO */}
          <NavLink
            to="/"
            className="navbar-brand premium-brand p-0 me-xl-5"
          >
            <img
              src={logo}
              alt="Khushi International"
              className="premium-navbar-logo"
            />
          </NavLink>


          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler premium-toggle shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#khushiNavbar"
            aria-controls="khushiNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>


          {/* NAVIGATION */}
          <div
            className="collapse navbar-collapse"
            id="khushiNavbar"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={navClass}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={navClass}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={navClass}
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={navClass}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/team"
                  className={navClass}
                >
                  Team
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={navClass}
                >
                  News
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/gallery"
                  className={navClass}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={navClass}
                >
                  Contact
                </NavLink>
              </li>

            </ul>


            {/* DIVIDER */}
            <div className="nav-divider d-none d-xl-block"></div>


            {/* ACTIONS */}
            <div className="d-flex align-items-center gap-2 ms-xl-3 mt-3 mt-lg-0">

              <a
                href="https://wa.me/917317422100"
                target="_blank"
                rel="noreferrer"
                className="nav-whatsapp-btn"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <NavLink
                to="/contact"
                className="btn premium-enquiry-btn"
              >
                Get Enquiry

                <i className="bi bi-arrow-up-right ms-2"></i>
              </NavLink>

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;