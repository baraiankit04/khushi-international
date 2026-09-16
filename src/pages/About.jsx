import { Link } from "react-router-dom";

const About = () => {
  const strengths = [
    {
      icon: "bi-basket2-fill",
      title: "Fresh Sourcing",
      text: "Carefully selected Indian fruits, vegetables and spices for international market requirements.",
    },
    {
      icon: "bi-patch-check-fill",
      title: "Quality Focus",
      text: "Quality-focused handling and selection throughout the fresh produce supply process.",
    },
    {
      icon: "bi-box-seam-fill",
      title: "Export Packaging",
      text: "Careful packing and handling designed to protect freshness during international movement.",
    },
    {
      icon: "bi-airplane-engines-fill",
      title: "Export Support",
      text: "Coordinated support from product preparation and documentation through shipment.",
    },
  ];

  const journey = [
    {
      icon: "bi-flag-fill",
      label: "2007",
      title: "The Beginning",
      text: "Khushi International started its journey in the fresh produce business.",
    },
    {
      icon: "bi-basket-fill",
      label: "Sourcing",
      title: "Growing Product Range",
      text: "Expanding our focus across Indian fruits, vegetables and fresh produce.",
    },
    {
      icon: "bi-box2-heart-fill",
      label: "Quality",
      title: "Better Handling",
      text: "Greater focus on product selection, handling, packaging and export requirements.",
    },
    {
      icon: "bi-globe2",
      label: "Today",
      title: "Global Focus",
      text: "Supporting fresh produce requirements for customers across international markets.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="about-bs-hero py-5 overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small mb-4">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-decoration-none text-success"
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    About Us
                  </li>
                </ol>
              </nav>

              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-leaf-fill me-2"></i>
                ABOUT KHUSHI INTERNATIONAL
              </span>

              <h1 className="display-3 fw-bold text-dark lh-sm mb-4">
                Connecting Indian
                <span className="text-success d-block">
                  Freshness With
                </span>
                Global Markets.
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Since 2007, Khushi International has been working
                in the fresh produce trade with a focus on quality,
                careful handling and dependable export service.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">

                <Link
                  to="/products"
                  className="btn btn-success btn-lg rounded-pill px-4 fw-semibold"
                >
                  Explore Products
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4 fw-semibold"
                >
                  Contact Us
                </Link>

              </div>


              {/* HERO MINI CARDS */}
              <div className="row g-3">

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3 p-md-4">
                      <i className="bi bi-calendar2-check-fill text-success fs-4"></i>

                      <h4 className="fw-bold text-dark mt-2 mb-0">
                        2007
                      </h4>

                      <small className="text-secondary">
                        Since
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3 p-md-4">
                      <i className="bi bi-basket2-fill text-success fs-4"></i>

                      <h4 className="fw-bold text-dark mt-2 mb-0">
                        Fresh
                      </h4>

                      <small className="text-secondary">
                        Produce
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3 p-md-4">
                      <i className="bi bi-globe2 text-success fs-4"></i>

                      <h4 className="fw-bold text-dark mt-2 mb-0">
                        Global
                      </h4>

                      <small className="text-secondary">
                        Markets
                      </small>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* RIGHT HERO */}
            <div className="col-lg-6">
              <div className="position-relative ps-lg-4">

                <div className="card border-0 shadow-lg rounded-5 overflow-hidden about-bs-main-image">
                  <img
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=85"
                    alt="Fresh Indian fruits"
                    className="card-img"
                  />

                  <div className="card-img-overlay d-flex align-items-end p-4 p-md-5 about-bs-image-overlay">
                    <div className="text-white">
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                        Fresh From India
                      </span>

                      <h3 className="fw-bold text-white mb-1">
                        Quality Produce
                      </h3>

                      <p className="mb-0 text-white-50">
                        Prepared for international markets
                      </p>
                    </div>
                  </div>
                </div>


                {/* FLOATING CARD */}
                <div className="card border-0 shadow-lg rounded-4 about-bs-floating-card">
                  <div className="card-body p-3">

                    <div className="d-flex align-items-center gap-3">

                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center about-bs-round-icon">
                        <i className="bi bi-airplane-engines-fill"></i>
                      </div>

                      <div>
                        <small className="text-secondary d-block">
                          EXPORT BUSINESS
                        </small>

                        <strong className="text-dark">
                          India → Global Markets
                        </strong>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COMPANY STORY
      ====================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            {/* IMAGES */}
            <div className="col-lg-6">

              <div className="row g-3 align-items-end">

                <div className="col-7">
                  <div className="card border-0 rounded-4 overflow-hidden shadow">
                    <img
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85"
                      alt="Fresh vegetables"
                      loading="lazy"
                      className="about-bs-story-img"
                    />
                  </div>
                </div>

                <div className="col-5">

                  <div className="card bg-success text-white border-0 rounded-4 mb-3">
                    <div className="card-body p-4">

                      <i className="bi bi-award-fill text-warning fs-2"></i>

                      <h3 className="text-white fw-bold mt-3 mb-1">
                        Since 2007
                      </h3>

                      <p className="text-white-50 small mb-0">
                        Growing through quality,
                        service and relationships.
                      </p>

                    </div>
                  </div>

                  <div className="card border-0 rounded-4 overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85"
                      alt="Fresh produce"
                      loading="lazy"
                      className="about-bs-story-small-img"
                    />
                  </div>

                </div>

              </div>

            </div>


            {/* STORY TEXT */}
            <div className="col-lg-6">

              <span className="text-success fw-bold small text-uppercase">
                <i className="bi bi-dash-lg me-2"></i>
                Our Company
              </span>

              <h2 className="display-5 fw-bold text-dark mt-3 mb-4">
                A Business Built Around
                <span className="text-success">
                  {" "}Freshness & Trust.
                </span>
              </h2>

              <p className="fs-5 text-secondary lh-lg">
                Khushi International works with fresh Indian produce
                for international markets, focusing on the details
                required to move perishable products with care.
              </p>

              <p className="text-secondary lh-lg">
                From sourcing and quality checks to packaging,
                documentation and shipment coordination, our aim is
                to support customers with dependable and professional
                export service.
              </p>


              {/* STORY FEATURE CARDS */}
              <div className="row g-3 mt-3">

                <div className="col-sm-6">
                  <div className="card border rounded-4 h-100 about-bs-small-card">
                    <div className="card-body p-4">

                      <div className="d-flex gap-3">

                        <div className="bg-success-subtle text-success rounded-3 p-3 align-self-start">
                          <i className="bi bi-check2-circle fs-4"></i>
                        </div>

                        <div>
                          <h6 className="fw-bold mb-1">
                            Quality First
                          </h6>

                          <p className="small text-secondary mb-0">
                            Attention to product quality and freshness.
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>


                <div className="col-sm-6">
                  <div className="card border rounded-4 h-100 about-bs-small-card">
                    <div className="card-body p-4">

                      <div className="d-flex gap-3">

                        <div className="bg-warning-subtle text-warning-emphasis rounded-3 p-3 align-self-start">
                          <i className="bi bi-people-fill fs-4"></i>
                        </div>

                        <div>
                          <h6 className="fw-bold mb-1">
                            Business Relations
                          </h6>

                          <p className="small text-secondary mb-0">
                            Focus on dependable long-term relationships.
                          </p>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION / VISION / PROMISE
      ====================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>

            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              WHAT DRIVES US
            </span>

            <h2 className="display-5 fw-bold text-dark mt-3">
              Our Purpose.
              <span className="text-success">
                {" "}Our Direction.
              </span>
            </h2>

            <p className="text-secondary fs-5 mt-3">
              The principles behind our approach to
              fresh produce and international business.
            </p>

          </div>


          <div className="row g-4">

            {/* MISSION */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 about-bs-purpose-card">
                <div className="card-body p-4 p-xl-5">

                  <div className="d-flex justify-content-between align-items-start mb-4">

                    <div className="about-bs-purpose-icon bg-success text-white">
                      <i className="bi bi-bullseye"></i>
                    </div>

                    <span className="display-6 fw-bold text-black-50 opacity-25">
                      01
                    </span>

                  </div>

                  <span className="text-success small fw-bold">
                    OUR MISSION
                  </span>

                  <h3 className="fw-bold mt-2 mb-3">
                    Deliver Freshness With Care.
                  </h3>

                  <p className="text-secondary lh-lg mb-0">
                    To supply fresh Indian produce with focus on
                    quality, handling, packaging and dependable
                    customer service.
                  </p>

                </div>
              </div>
            </div>


            {/* VISION */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 about-bs-purpose-card about-bs-dark-card">
                <div className="card-body p-4 p-xl-5">

                  <div className="d-flex justify-content-between align-items-start mb-4">

                    <div className="about-bs-purpose-icon bg-warning text-dark">
                      <i className="bi bi-eye-fill"></i>
                    </div>

                    <span className="display-6 fw-bold text-white opacity-25">
                      02
                    </span>

                  </div>

                  <span className="text-warning small fw-bold">
                    OUR VISION
                  </span>

                  <h3 className="fw-bold text-white mt-2 mb-3">
                    Connect India With Global Markets.
                  </h3>

                  <p className="text-white-50 lh-lg mb-0">
                    To build dependable international business
                    relationships while showcasing fresh Indian
                    produce across global markets.
                  </p>

                </div>
              </div>
            </div>


            {/* PROMISE */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 about-bs-purpose-card">
                <div className="card-body p-4 p-xl-5">

                  <div className="d-flex justify-content-between align-items-start mb-4">

                    <div className="about-bs-purpose-icon bg-success-subtle text-success">
                      <i className="bi bi-hand-thumbs-up-fill"></i>
                    </div>

                    <span className="display-6 fw-bold text-black-50 opacity-25">
                      03
                    </span>

                  </div>

                  <span className="text-success small fw-bold">
                    OUR PROMISE
                  </span>

                  <h3 className="fw-bold mt-2 mb-3">
                    Professional & Dependable Service.
                  </h3>

                  <p className="text-secondary lh-lg mb-0">
                    Clear communication, careful coordination and
                    a professional approach to every business
                    requirement.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          JOURNEY
      ====================================================== */}
      <section className="about-bs-journey py-5">
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-8">

              <span className="text-warning small fw-bold">
                OUR JOURNEY
              </span>

              <h2 className="display-5 fw-bold text-white mt-2 mb-3">
                From 2007 to
                <span className="text-warning">
                  {" "}Today.
                </span>
              </h2>

              <p className="text-white-50 fs-5 mb-0">
                Growing step by step with a focus on fresh produce,
                export requirements and customer relationships.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">
              <span className="badge rounded-pill border border-secondary text-white px-4 py-3">
                <i className="bi bi-clock-history me-2 text-warning"></i>
                Since 2007
              </span>
            </div>

          </div>


          <div className="row g-4">

            {journey.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={item.title}>

                <div className="card h-100 border-0 rounded-4 about-bs-journey-card">
                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <div className="about-bs-journey-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <span className="text-white-50 fw-bold">
                        0{index + 1}
                      </span>

                    </div>

                    <span className="badge bg-warning text-dark rounded-pill mb-3">
                      {item.label}
                    </span>

                    <h4 className="text-white fw-bold">
                      {item.title}
                    </h4>

                    <p className="text-white-50 small lh-lg mb-0">
                      {item.text}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY / STRENGTHS
      ====================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5 mb-5">

            <div className="col-lg-7">

              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                OUR STRENGTHS
              </span>

              <h2 className="display-5 fw-bold mt-3 mb-0">
                What Makes Our Approach
                <span className="text-success">
                  {" "}Different?
                </span>
              </h2>

            </div>

            <div className="col-lg-5">
              <p className="text-secondary lh-lg mb-0">
                Fresh produce requires careful coordination at
                every stage. These are some of the areas we focus
                on throughout the export process.
              </p>
            </div>

          </div>


          <div className="row g-4">

            {strengths.map((item, index) => (
              <div
                className="col-md-6 col-xl-3"
                key={item.title}
              >

                <div className="card border h-100 rounded-4 about-bs-strength-card">
                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-start">

                      <div className="about-bs-strength-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <span className="small fw-bold text-secondary opacity-50">
                        0{index + 1}
                      </span>

                    </div>

                    <h4 className="fw-bold mt-4 mb-3">
                      {item.title}
                    </h4>

                    <p className="text-secondary small lh-lg mb-4">
                      {item.text}
                    </p>

                    <div className="border-top pt-3">
                      <span className="small fw-semibold text-success">
                        Khushi International
                        <i className="bi bi-arrow-right ms-2"></i>
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          QUALITY BAND
      ====================================================== */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="card border-0 rounded-5 shadow-sm overflow-hidden">

            <div className="row g-0 align-items-stretch">

              <div className="col-lg-5">

                <img
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh Indian produce"
                  loading="lazy"
                  className="w-100 h-100 about-bs-quality-image"
                />

              </div>


              <div className="col-lg-7">

                <div className="card-body p-4 p-md-5">

                  <span className="text-success fw-bold small">
                    OUR BUSINESS APPROACH
                  </span>

                  <h2 className="display-6 fw-bold mt-2 mb-4">
                    Freshness Needs More
                    Than Just Good Produce.
                  </h2>

                  <div className="row g-4">

                    <div className="col-sm-6">
                      <div className="d-flex gap-3">

                        <i className="bi bi-check-circle-fill text-success fs-4"></i>

                        <div>
                          <h6 className="fw-bold">
                            Product Selection
                          </h6>

                          <p className="small text-secondary mb-0">
                            Focus on suitable fresh produce.
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="d-flex gap-3">

                        <i className="bi bi-check-circle-fill text-success fs-4"></i>

                        <div>
                          <h6 className="fw-bold">
                            Careful Handling
                          </h6>

                          <p className="small text-secondary mb-0">
                            Attention throughout preparation.
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="d-flex gap-3">

                        <i className="bi bi-check-circle-fill text-success fs-4"></i>

                        <div>
                          <h6 className="fw-bold">
                            Export Packaging
                          </h6>

                          <p className="small text-secondary mb-0">
                            Packaging suited to shipment needs.
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="d-flex gap-3">

                        <i className="bi bi-check-circle-fill text-success fs-4"></i>

                        <div>
                          <h6 className="fw-bold">
                            Communication
                          </h6>

                          <p className="small text-secondary mb-0">
                            Clear business coordination.
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>

                  <Link
                    to="/services"
                    className="btn btn-dark rounded-pill px-4 mt-4"
                  >
                    Explore Our Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-4">

          <div className="card border-0 rounded-5 overflow-hidden about-bs-cta">

            <div className="card-body p-4 p-md-5">

              <div className="row align-items-center g-4">

                <div className="col-lg-8">

                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                    BUSINESS ENQUIRY
                  </span>

                  <h2 className="display-6 fw-bold text-white mb-3">
                    Looking for Fresh Indian Produce?
                  </h2>

                  <p className="text-white-50 fs-5 mb-0">
                    Connect with our team for product availability,
                    export supply and business requirements.
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

                    <Link
                      to="/contact"
                      className="btn btn-warning btn-lg rounded-pill px-4 fw-bold"
                    >
                      Enquire
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;