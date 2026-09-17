import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-light py-5">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-7">

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-4">

                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-success text-decoration-none"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    Contact
                  </li>

                </ol>
              </nav>


              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-chat-dots-fill me-2"></i>
                CONTACT US
              </span>


              <h1 className="display-3 fw-bold lh-sm mb-4">
                Let's Talk About Your
                <span className="d-block text-success">
                  Fresh Produce Requirement.
                </span>
              </h1>


              <p className="lead text-secondary lh-lg mb-4">
                Connect with Khushi International for fresh fruits,
                vegetables, spices, packaging, export and international
                business enquiries.
              </p>


              <div className="d-flex flex-wrap gap-3">

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp Us
                </a>

                <a
                  href="tel:+917317422100"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Us
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div className="col-lg-5">

              <div className="card border-0 shadow-lg rounded-5 overflow-hidden contact-hero-card">

                <div className="card-body bg-dark text-white p-4 p-md-5">

                  <span className="d-inline-flex bg-success rounded-circle p-3 mb-4">
                    <i className="bi bi-building-fill fs-3"></i>
                  </span>

                  <small className="text-warning fw-bold">
                    KHUSHI INTERNATIONAL
                  </small>

                  <h3 className="fw-bold mt-2 mb-4">
                    Navi Mumbai Office
                  </h3>


                  <div className="d-flex gap-3 mb-4">

                    <i className="bi bi-geo-alt-fill text-success fs-4"></i>

                    <div>
                      <small className="text-white-50 d-block mb-1">
                        OFFICE ADDRESS
                      </small>

                      <p className="mb-0">
                        B-601/602, 6th Floor, Groma House,
                        Sector-19 B, Vashi, Navi Mumbai - 400705
                      </p>
                    </div>

                  </div>


                  <div className="d-flex gap-3 mb-4">

                    <i className="bi bi-telephone-fill text-success fs-4"></i>

                    <div>
                      <small className="text-white-50 d-block mb-1">
                        PHONE
                      </small>

                      <a
                        href="tel:+917317422100"
                        className="text-white text-decoration-none fw-semibold"
                      >
                        +91 7317422100
                      </a>
                    </div>

                  </div>


                  <div className="d-flex gap-3">

                    <i className="bi bi-envelope-fill text-success fs-4"></i>

                    <div>
                      <small className="text-white-50 d-block mb-1">
                        EMAIL
                      </small>

                      <a
                        href="mailto:info@khushiinternational.in"
                        className="text-white text-decoration-none"
                      >
                        info@khushiinternational.in
                      </a>
                    </div>

                  </div>

                </div>


                <div className="card-footer bg-success border-0 p-3">

                  <a
                    href="https://wa.me/917317422100"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <span className="fw-semibold">
                      Start WhatsApp Conversation
                    </span>

                    <i className="bi bi-arrow-up-right fs-5"></i>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT OPTIONS ================= */}
      <section className="py-5 bg-white">
        <div className="container">

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

            {/* PHONE */}
            <div className="col">

              <a
                href="tel:+917317422100"
                className="text-decoration-none"
              >
                <div className="card border shadow-sm rounded-4 h-100 contact-option-card">

                  <div className="card-body p-4">

                    <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-4 contact-option-icon">
                      <i className="bi bi-telephone-fill fs-4"></i>
                    </span>

                    <small className="text-secondary fw-semibold">
                      CALL US
                    </small>

                    <h5 className="text-dark fw-bold mt-2 mb-1">
                      +91 7317422100
                    </h5>

                    <span className="text-success small fw-semibold">
                      Call Now
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </span>

                  </div>

                </div>
              </a>

            </div>


            {/* EMAIL */}
            <div className="col">

              <a
                href="mailto:info@khushiinternational.in"
                className="text-decoration-none"
              >
                <div className="card border shadow-sm rounded-4 h-100 contact-option-card">

                  <div className="card-body p-4">

                    <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-4 contact-option-icon">
                      <i className="bi bi-envelope-fill fs-4"></i>
                    </span>

                    <small className="text-secondary fw-semibold">
                      EMAIL US
                    </small>

                    <h6 className="text-dark fw-bold mt-2 mb-1">
                      info@khushiinternational.in
                    </h6>

                    <span className="text-success small fw-semibold">
                      Send Email
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </span>

                  </div>

                </div>
              </a>

            </div>


            {/* WHATSAPP */}
            <div className="col">

              <a
                href="https://wa.me/917317422100"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <div className="card border shadow-sm rounded-4 h-100 contact-option-card">

                  <div className="card-body p-4">

                    <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-4 contact-option-icon">
                      <i className="bi bi-whatsapp fs-4"></i>
                    </span>

                    <small className="text-secondary fw-semibold">
                      WHATSAPP
                    </small>

                    <h5 className="text-dark fw-bold mt-2 mb-1">
                      Chat With Us
                    </h5>

                    <span className="text-success small fw-semibold">
                      Start Chat
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </span>

                  </div>

                </div>
              </a>

            </div>


            {/* LOCATION */}
            <div className="col">

              <a
                href="#office-location"
                className="text-decoration-none"
              >
                <div className="card border shadow-sm rounded-4 h-100 contact-option-card">

                  <div className="card-body p-4">

                    <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-4 contact-option-icon">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </span>

                    <small className="text-secondary fw-semibold">
                      LOCATION
                    </small>

                    <h5 className="text-dark fw-bold mt-2 mb-1">
                      Vashi, Navi Mumbai
                    </h5>

                    <span className="text-success small fw-semibold">
                      View Map
                      <i className="bi bi-arrow-down ms-2"></i>
                    </span>

                  </div>

                </div>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ENQUIRY FORM ================= */}
      <section className="py-5 bg-light">

        <div className="container py-lg-5">

          <div className="row g-5">

            {/* LEFT INFO */}
            <div className="col-lg-5">

              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                BUSINESS ENQUIRY
              </span>

              <h2 className="display-5 fw-bold mb-3">
                Tell Us What
                <span className="d-block text-success">
                  You're Looking For.
                </span>
              </h2>

              <p className="text-secondary fs-5 lh-lg">
                Share your product and business requirements with
                our team. You can enquire about fruits, vegetables,
                spices or export-related services.
              </p>


              {/* INFO CARDS */}
              <div className="card border-0 shadow-sm rounded-4 mt-4 contact-small-card">

                <div className="card-body p-4">

                  <div className="d-flex gap-3">

                    <span className="bg-success-subtle text-success rounded-circle p-3 align-self-start">
                      <i className="bi bi-basket2-fill"></i>
                    </span>

                    <div>
                      <h6 className="fw-bold">
                        Product Enquiry
                      </h6>

                      <small className="text-secondary">
                        Fruits, vegetables, spices and current
                        product requirements.
                      </small>
                    </div>

                  </div>

                </div>

              </div>


              <div className="card border-0 shadow-sm rounded-4 mt-3 contact-small-card">

                <div className="card-body p-4">

                  <div className="d-flex gap-3">

                    <span className="bg-success-subtle text-success rounded-circle p-3 align-self-start">
                      <i className="bi bi-airplane-engines-fill"></i>
                    </span>

                    <div>
                      <h6 className="fw-bold">
                        Export Enquiry
                      </h6>

                      <small className="text-secondary">
                        Packaging, documentation, logistics
                        and international supply enquiries.
                      </small>
                    </div>

                  </div>

                </div>

              </div>


              <div className="alert alert-success border-0 rounded-4 mt-4">

                <div className="d-flex gap-3">

                  <i className="bi bi-whatsapp fs-4"></i>

                  <div>
                    <strong className="d-block">
                      Need a Quick Response?
                    </strong>

                    <small>
                      You can contact our team directly through WhatsApp.
                    </small>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="col-lg-7">

              <div className="card border-0 shadow-lg rounded-5">

                <div className="card-body p-4 p-md-5">

                  <div className="d-flex align-items-center justify-content-between mb-4">

                    <div>
                      <small className="text-success fw-bold">
                        SEND A MESSAGE
                      </small>

                      <h3 className="fw-bold mt-1 mb-0">
                        Business Enquiry Form
                      </h3>
                    </div>

                    <span className="d-none d-sm-inline-flex bg-success-subtle text-success rounded-circle p-3">
                      <i className="bi bi-send-fill fs-4"></i>
                    </span>

                  </div>


                  {submitted && (
                    <div
                      className="alert alert-success alert-dismissible fade show rounded-4"
                      role="alert"
                    >
                      <i className="bi bi-check-circle-fill me-2"></i>

                      <strong>Thank you!</strong> Your enquiry has
                      been received on this page.

                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSubmitted(false)}
                        aria-label="Close"
                      ></button>
                    </div>
                  )}


                  <form onSubmit={handleSubmit}>

                    <div className="row g-3">

                      {/* NAME */}
                      <div className="col-md-6">

                        <label
                          htmlFor="name"
                          className="form-label fw-semibold"
                        >
                          Your Name *
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            <i className="bi bi-person"></i>
                          </span>

                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control py-3"
                            placeholder="Enter your name"
                            required
                          />

                        </div>

                      </div>


                      {/* COMPANY */}
                      <div className="col-md-6">

                        <label
                          htmlFor="company"
                          className="form-label fw-semibold"
                        >
                          Company Name
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            <i className="bi bi-building"></i>
                          </span>

                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-control py-3"
                            placeholder="Company name"
                          />

                        </div>

                      </div>


                      {/* EMAIL */}
                      <div className="col-md-6">

                        <label
                          htmlFor="email"
                          className="form-label fw-semibold"
                        >
                          Email Address *
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            <i className="bi bi-envelope"></i>
                          </span>

                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control py-3"
                            placeholder="Email address"
                            required
                          />

                        </div>

                      </div>


                      {/* PHONE */}
                      <div className="col-md-6">

                        <label
                          htmlFor="phone"
                          className="form-label fw-semibold"
                        >
                          Phone / WhatsApp *
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            <i className="bi bi-telephone"></i>
                          </span>

                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control py-3"
                            placeholder="+91..."
                            required
                          />

                        </div>

                      </div>


                      {/* COUNTRY */}
                      <div className="col-md-6">

                        <label
                          htmlFor="country"
                          className="form-label fw-semibold"
                        >
                          Country
                        </label>

                        <div className="input-group">

                          <span className="input-group-text bg-white">
                            <i className="bi bi-globe2"></i>
                          </span>

                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control py-3"
                            placeholder="Your country"
                          />

                        </div>

                      </div>


                      {/* PRODUCT */}
                      <div className="col-md-6">

                        <label
                          htmlFor="product"
                          className="form-label fw-semibold"
                        >
                          Interested In *
                        </label>

                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="form-select py-3"
                          required
                        >
                          <option value="">
                            Select requirement
                          </option>

                          <option value="Fresh Fruits">
                            Fresh Fruits
                          </option>

                          <option value="Fresh Vegetables">
                            Fresh Vegetables
                          </option>

                          <option value="Indian Spices">
                            Indian Spices
                          </option>

                          <option value="Export Packaging">
                            Export Packaging
                          </option>

                          <option value="Export Services">
                            Export Services
                          </option>

                          <option value="Other">
                            Other
                          </option>

                        </select>

                      </div>


                      {/* MESSAGE */}
                      <div className="col-12">

                        <label
                          htmlFor="message"
                          className="form-label fw-semibold"
                        >
                          Your Requirement *
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          rows="5"
                          placeholder="Tell us about product, quantity, destination or other requirements..."
                          required
                        ></textarea>

                      </div>


                      {/* SUBMIT */}
                      <div className="col-12">

                        <button
                          type="submit"
                          className="btn btn-success btn-lg rounded-pill px-5"
                        >
                          Send Enquiry
                          <i className="bi bi-send-fill ms-2"></i>
                        </button>

                      </div>

                    </div>

                  </form>


                  <hr className="my-4" />


                  <small className="text-secondary">
                    <i className="bi bi-shield-check text-success me-2"></i>
                    Please provide accurate contact details so our team
                    can respond to your enquiry.
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MAP ================= */}
      <section
        id="office-location"
        className="py-5 bg-white"
      >

        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-4">

            <div className="col-lg-7">

              <span className="text-success fw-bold small">
                OUR LOCATION
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-3">
                Visit Our
                <span className="text-success">
                  {" "}Navi Mumbai Office.
                </span>
              </h2>

              <p className="text-secondary fs-5 mb-0">
                Khushi International is located in Vashi,
                Navi Mumbai.
              </p>

            </div>

          </div>


          <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

            <div className="row g-0">

              {/* MAP */}
              <div className="col-lg-8">

                <iframe
                  title="Khushi International Office Location"
                  src="https://www.google.com/maps?q=Groma%20House%20Sector%2019B%20Vashi%20Navi%20Mumbai&output=embed"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>


              {/* ADDRESS */}
              <div className="col-lg-4 bg-dark text-white">

                <div className="p-4 p-md-5 h-100 d-flex flex-column justify-content-center">

                  <span className="d-inline-flex align-self-start bg-success rounded-circle p-3 mb-4">
                    <i className="bi bi-geo-alt-fill fs-3"></i>
                  </span>

                  <small className="text-warning fw-bold">
                    OFFICE ADDRESS
                  </small>

                  <h3 className="fw-bold mt-2 mb-3">
                    Khushi International
                  </h3>

                  <p className="text-white-50 lh-lg">
                    B-601/602, 6th Floor,
                    Groma House, Sector-19 B,
                    Vashi, Navi Mumbai - 400705
                  </p>


                  <hr className="border-secondary my-4" />


                  <a
                    href="tel:+917317422100"
                    className="text-white text-decoration-none mb-3"
                  >
                    <i className="bi bi-telephone-fill text-success me-3"></i>
                    +91 7317422100
                  </a>


                  <a
                    href="mailto:info@khushiinternational.in"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-envelope-fill text-success me-3"></i>
                    info@khushiinternational.in
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-5 bg-success">

        <div className="container py-4 py-lg-5">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                GET IN TOUCH
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Ready to Discuss Your Requirement?
              </h2>

              <p className="text-white fs-5 opacity-75 mb-0">
                Connect with Khushi International for fresh
                produce and export business enquiries.
              </p>

            </div>


            <div className="col-lg-4">

              <div className="d-flex flex-wrap justify-content-lg-end gap-2">

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>

                <a
                  href="tel:+917317422100"
                  className="btn btn-warning btn-lg rounded-pill px-4 fw-bold"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;