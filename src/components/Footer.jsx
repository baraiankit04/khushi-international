import { Link } from "react-router-dom";
import logo from "../assets/images/khushilogo.png";

const Footer = () => {
  return (
    <footer className="ki-footer">

      {/* =========================
          PREMIUM CTA
      ========================= */}
      <div className="container">
        <div className="ki-footer-cta">

          <div className="row align-items-center g-4 position-relative">

            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="ki-footer-cta-icon">
                  <i className="bi bi-airplane-engines-fill"></i>
                </span>

                <span className="text-warning fw-bold small">
                  EXPORT & BUSINESS ENQUIRY
                </span>
              </div>

              <h2 className="text-white fw-bold mb-2">
                Fresh Indian Produce for Your Market.
              </h2>

              <p className="text-white-50 mb-0">
                Connect with our team for product availability,
                export supply and business enquiries.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="d-flex flex-wrap justify-content-lg-end gap-2">

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light rounded-pill px-4"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="btn btn-warning rounded-pill px-4 fw-bold"
                >
                  Get Enquiry
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>

              </div>
            </div>

          </div>

        </div>
      </div>


      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="container ki-footer-main">

        <div className="row g-5">

          {/* COMPANY */}
          <div className="col-lg-4 col-md-6">

            <Link
              to="/"
              className="ki-footer-logo-box"
            >
              <img
                src={logo}
                alt="Khushi International"
                className="ki-footer-logo"
              />
            </Link>

            <p className="ki-footer-about mt-4">
              Fresh Indian fruits, vegetables and spices supplied
              for international markets with a focus on quality,
              freshness and dependable export service.
            </p>

            <div className="ki-footer-trust mt-4">

              <div>
                <i className="bi bi-patch-check-fill"></i>

                <span>
                  Since
                  <strong>2007</strong>
                </span>
              </div>

              <div>
                <i className="bi bi-globe2"></i>

                <span>
                  Global
                  <strong>Supply</strong>
                </span>
              </div>

            </div>

          </div>


          {/* COMPANY LINKS */}
          <div className="col-6 col-md-3 col-lg-2">

            <h5 className="ki-footer-title">
              Company
            </h5>

            <ul className="list-unstyled ki-footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/team">Our Team</Link>
              </li>

              <li>
                <Link to="/news">News</Link>
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>

          </div>


          {/* PRODUCTS */}
          <div className="col-6 col-md-3 col-lg-2">

            <h5 className="ki-footer-title">
              Products
            </h5>

            <ul className="list-unstyled ki-footer-links">

              <li>
                <Link to="/products/fruits">
                  Fresh Fruits
                </Link>
              </li>

              <li>
                <Link to="/products/vegetables">
                  Fresh Vegetables
                </Link>
              </li>

              <li>
                <Link to="/products/spices">
                  Indian Spices
                </Link>
              </li>

              <li>
                <Link to="/products">
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Send Enquiry
                </Link>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="col-lg-4 col-md-6">

            <h5 className="ki-footer-title">
              Contact Us
            </h5>

            <div className="ki-contact-row">

              <div className="ki-contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <div>
                <small>HEAD OFFICE</small>

                <p>
                  B-601/602, 6th Floor, Groma House,
                  Sector-19 B, Vashi, Navi Mumbai - 400705
                </p>
              </div>

            </div>


            <div className="ki-contact-row">

              <div className="ki-contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>

              <div>
                <small>PHONE</small>

                <a href="tel:+917317422100">
                  +91 7317422100
                </a>
              </div>

            </div>


            <div className="ki-contact-row">

              <div className="ki-contact-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>

              <div>
                <small>EMAIL</small>

                <a href="mailto:info@khushiinternational.in">
                  info@khushiinternational.in
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="ki-footer-bottom">

        <div className="container">

          <div className="row align-items-center g-3">

            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                © {new Date().getFullYear()} Khushi International.
                All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6">

              <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">

                <span className="ki-footer-status">
                  <span></span>
                  Fresh Produce Export
                </span>

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="ki-bottom-social"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a
                  href="mailto:info@khushiinternational.in"
                  className="ki-bottom-social"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>

                <a
                  href="tel:+917317422100"
                  className="ki-bottom-social"
                  aria-label="Phone"
                >
                  <i className="bi bi-telephone"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;