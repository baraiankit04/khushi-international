const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Form abhi frontend-only hai. Backend/email connection baad me add karenge."
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-lg-4">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                Contact Us
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Let&apos;s Discuss Your
                <span className="text-success"> Fresh Produce Requirements</span>
              </h1>

              <p className="lead text-secondary mb-0">
                Contact Khushi International for fresh fruits, vegetables,
                packaging, shipment and export business enquiries.
              </p>

            </div>

            <div className="col-lg-4">

              <div className="bg-dark text-white rounded-4 p-4 shadow-sm">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className="bi bi-headset fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-bold">
                      BUSINESS ENQUIRY
                    </small>

                    <h5 className="text-white mb-0 mt-1">
                      We&apos;re Here to Help
                    </h5>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="row g-5">

            {/* LEFT SIDE */}
            <div className="col-lg-5">

              <span className="text-success fw-bold text-uppercase small">
                Get In Touch
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-3">
                Contact Khushi International
              </h2>

              <p className="text-secondary lh-lg mb-4">
                Get in touch with our team for fresh produce availability,
                export requirements, packaging details and business enquiries.
              </p>

              {/* ADDRESS */}
              <div className="d-flex gap-3 border rounded-4 p-4 mb-3">

                <div
                  className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary text-uppercase fw-bold">
                    Office Address
                  </small>

                  <p className="mb-0 mt-1 text-dark">
                    B-601/602, 6th Floor, Groma House,
                    Sector-19 B, Vashi,
                    Navi Mumbai - 400705
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="d-flex gap-3 border rounded-4 p-4 mb-3">

                <div
                  className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-telephone-fill fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary text-uppercase fw-bold">
                    Call Us
                  </small>

                  <div className="mt-1">

                    <a
                      href="tel:+917317422100"
                      className="text-dark text-decoration-none d-block"
                    >
                      +91 7317422100
                    </a>

                    <a
                      href="tel:+917317422100"
                      className="text-dark text-decoration-none d-block"
                    >
                      +91 7317422100
                    </a>

                  </div>
                </div>

              </div>

              {/* EMAIL */}
              <div className="d-flex gap-3 border rounded-4 p-4 mb-4">

                <div
                  className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-envelope-fill fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary text-uppercase fw-bold">
                    Email Us
                  </small>

                  <a
                    href="mailto:info@khushiinternational.in"
                    className="text-dark text-decoration-none d-block mt-1"
                  >
                    info@khushiinternational.in
                  </a>
                </div>

              </div>

              {/* BUTTONS */}
              <div className="d-flex flex-wrap gap-2">

                <a
                  href="tel:+917317422100"
                  className="btn btn-success px-4"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Now
                </a>

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success px-4"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-lg-7">

              <div className="bg-light rounded-4 p-4 p-md-5 shadow-sm">

                <div className="mb-4">

                  <span className="text-success fw-bold text-uppercase small">
                    Send Enquiry
                  </span>

                  <h3 className="fw-bold mt-2">
                    Tell Us What You Need
                  </h3>

                  <p className="text-secondary mb-0">
                    Fill in the form and our team can get in touch with you.
                  </p>

                </div>

                <form onSubmit={handleSubmit}>

                  <div className="row g-3">

                    {/* NAME */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                        required
                      />

                    </div>

                    {/* COMPANY */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Company Name
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter company name"
                      />

                    </div>

                    {/* EMAIL */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="name@example.com"
                        required
                      />

                    </div>

                    {/* PHONE */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Phone / WhatsApp
                      </label>

                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="+91 ..."
                        required
                      />

                    </div>

                    {/* COUNTRY */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Country
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Country"
                      />

                    </div>

                    {/* PRODUCT */}
                    <div className="col-md-6">

                      <label className="form-label fw-semibold">
                        Interested Product
                      </label>

                      <select className="form-select form-select-lg">

                        <option value="">
                          Select Product
                        </option>

                        <option>
                          Mango
                        </option>

                        <option>
                          Guava / Peru
                        </option>

                        <option>
                          Chikoo / Sapota
                        </option>

                        <option>
                          Banana
                        </option>

                        <option>
                          Green Chilli
                        </option>

                        <option>
                          Okra / Bhindi
                        </option>

                        <option>
                          Bottle Gourd
                        </option>

                        <option>
                          Other Fruits / Vegetables
                        </option>

                      </select>

                    </div>

                    {/* SUBJECT */}
                    <div className="col-12">

                      <label className="form-label fw-semibold">
                        Subject
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Business enquiry"
                      />

                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">

                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Product name, quantity, destination, packaging or other requirements..."
                        required
                      ></textarea>

                    </div>

                    {/* SUBMIT */}
                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-success btn-lg px-5"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Send Enquiry
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center g-4 mb-4">

            <div className="col-lg-8">

              <span className="text-success fw-bold text-uppercase small">
                Our Location
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-2">
                Visit Our Vashi Office
              </h2>

              <p className="text-secondary mb-0">
                Groma House, Sector 19B, Vashi, Navi Mumbai.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <a
                href="https://www.google.com/maps/search/?api=1&query=Groma+House+Sector+19B+Vashi+Navi+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success"
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                Open Google Maps
              </a>

            </div>

          </div>

          <div className="ratio ratio-21x9 rounded-4 overflow-hidden shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=Groma%20House%20Sector%2019B%20Vashi%20Navi%20Mumbai&output=embed"
              title="Khushi International Location"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-success py-5">
        <div className="container">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <p className="text-warning fw-bold text-uppercase small mb-2">
                Fresh Produce Export
              </p>

              <h2 className="text-white fw-bold mb-2">
                Ready to Send Your Requirement?
              </h2>

              <p className="text-white-50 mb-0">
                Tell us the product, quantity and destination and connect
                with our team.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <a
                href="https://wa.me/917317422100"
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning btn-lg fw-semibold px-4"
              >
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;