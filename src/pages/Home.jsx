import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=85";

  const aboutMain =
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1100&q=85";

  const aboutSmall =
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=85";

  const productCategories = [
    {
      title: "Fresh Fruits",
      number: "01",
      subtitle: "Naturally Fresh",
      description:
        "Premium Indian mangoes, guava, banana, chikoo, pomegranate and other fresh fruits prepared for international markets.",
      items: "Mango • Guava • Banana • Chikoo • Pomegranate",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85",
      link: "/products/fruits",
      icon: "bi-apple",
    },
    {
      title: "Fresh Vegetables",
      number: "02",
      subtitle: "Farm Fresh",
      description:
        "Fresh Indian vegetables sourced, selected and carefully handled for overseas buyers and international supply.",
      items: "Okra • Chilli • Dudhi • Parwal • Tindora",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1000&q=85",
      link: "/products/vegetables",
      icon: "bi-flower1",
    },
    {
      title: "Indian Spices",
      number: "03",
      subtitle: "Authentic India",
      description:
        "Selected Indian spices supplied for international food businesses, distributors and global market requirements.",
      items: "Turmeric • Chilli • Coriander • Cumin",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85",
      link: "/products/spices",
      icon: "bi-fire",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Source",
      icon: "bi-basket2-fill",
      text: "Fresh produce sourced from reliable farms and suppliers.",
    },
    {
      number: "02",
      title: "Inspect",
      icon: "bi-patch-check-fill",
      text: "Produce checked for freshness and export suitability.",
    },
    {
      number: "03",
      title: "Pack",
      icon: "bi-box-seam-fill",
      text: "Professional handling and export-ready packaging.",
    },
    {
      number: "04",
      title: "Export",
      icon: "bi-airplane-engines-fill",
      text: "Shipment coordination for international markets.",
    },
  ];

  const registrations = [
    {
      short: "APEDA",
      title: "APEDA",
      subtitle: "Agricultural Export",
      icon: "bi-globe-asia-australia",
    },
    {
      short: "FSSAI",
      title: "FSSAI",
      subtitle: "Food Safety",
      icon: "bi-shield-check",
    },
    {
      short: "MSME",
      title: "MSME",
      subtitle: "Udyam Registration",
      icon: "bi-building-check",
    },
    {
      short: "IEC",
      title: "IEC",
      subtitle: "Import Export Code",
      icon: "bi-file-earmark-check",
    },
    {
      short: "GST",
      title: "GST",
      subtitle: "GST Registration",
      icon: "bi-receipt",
    },
    {
      short: "PQ",
      title: "Plant Quarantine",
      subtitle: "Export Compliance",
      icon: "bi-leaf",
    },
  ];

  const markets = [
    {
      name: "United Kingdom",
      icon: "bi-globe-europe-africa",
      text: "Fresh produce supply",
    },
    {
      name: "Europe",
      icon: "bi-globe-europe-africa",
      text: "International markets",
    },
    {
      name: "Middle East",
      icon: "bi-airplane",
      text: "Export connections",
    },
    {
      name: "Worldwide",
      icon: "bi-globe2",
      text: "Growing global reach",
    },
  ];

  return (
    <>
      {/* ==================================================
          PREMIUM HERO
      ================================================== */}
      <section className="premium-hero position-relative overflow-hidden">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>

        <div className="container position-relative py-5">
          <div className="row align-items-center g-5 min-vh-75 py-lg-5">
            {/* HERO CONTENT */}
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 bg-success-subtle border border-success-subtle rounded-pill px-3 py-2 mb-4">
                <span className="d-flex align-items-center justify-content-center bg-success text-white rounded-circle hero-small-icon">
                  <i className="bi bi-globe2"></i>
                </span>

                <span className="text-success fw-bold small">
                  FRESH PRODUCE EXPORTER FROM INDIA
                </span>
              </div>

              <h1 className="display-3 fw-bold lh-sm text-dark mb-0">
                Fresh Indian
                <span className="d-block text-success text-2px  mt-2 premium-typewriter">
                  <Typewriter
                    options={{
                      strings: [
  "Fruits",
  "Vegetables",
  " Spices",
  " Produce",
  " Mangoes",
],
                      autoStart: true,
                      loop: true,
                      delay: 65,
                      deleteSpeed: 35,
                      pauseFor: 1500,
                    }}
                  />
                </span>
                <span className="d-block">for Global Markets.</span>
              </h1>

              <p className="lead text-secondary lh-lg mt-4 hero-description">
                From Indian farms to international markets, Khushi
                International focuses on fresh produce, careful handling,
                export-ready packaging and dependable service.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <Link
                  to="/products"
                  className="btn btn-success btn-lg rounded-pill px-4 py-3 fw-semibold"
                >
                  Explore Products
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4 py-3 fw-semibold"
                >
                  Send Enquiry
                  <i className="bi bi-chat-dots ms-2"></i>
                </Link>
              </div>

              {/* HERO TRUST */}
              <div className="d-flex flex-wrap align-items-center gap-4 mt-5 pt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-success fs-4"></i>
                  <div>
                    <strong className="d-block small">Quality Focused</strong>
                    <small className="text-secondary">Fresh Produce</small>
                  </div>
                </div>

                <div className="vr d-none d-sm-block"></div>

                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-box-seam-fill text-success fs-4"></i>
                  <div>
                    <strong className="d-block small">Export Ready</strong>
                    <small className="text-secondary">Professional Packing</small>
                  </div>
                </div>

                <div className="vr d-none d-sm-block"></div>

                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-globe2 text-success fs-4"></i>
                  <div>
                    <strong className="d-block small">Global Supply</strong>
                    <small className="text-secondary">International Markets</small>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="col-lg-6">
              <div className="position-relative premium-hero-visual">
                <div className="premium-image-frame">
                  <img
                    src={heroImage}
                    alt="Fresh Indian fruits and vegetables"
                    className="w-100 h-100"
                  />
                </div>

                {/* SINCE CARD */}
                <div className="position-absolute premium-floating-card since-card bg-white shadow-lg rounded-4 p-3 p-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-warning-subtle text-warning-emphasis rounded-circle premium-float-icon">
                      <i className="bi bi-award-fill"></i>
                    </div>

                    <div>
                      <small className="text-secondary fw-semibold">
                        SERVING SINCE
                      </small>
                      <h3 className="fw-bold mb-0 text-dark">2007</h3>
                    </div>
                  </div>
                </div>

                {/* EXPORT CARD */}
                <div className="position-absolute premium-floating-card export-card bg-dark text-white shadow-lg rounded-4 p-3 p-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-success rounded-circle premium-float-icon text-white">
                      <i className="bi bi-airplane-engines-fill"></i>
                    </div>

                    <div>
                      <strong className="d-block">Global Export</strong>
                      <small className="text-white-50">
                        India → International Markets
                      </small>
                    </div>
                  </div>
                </div>

                {/* DECORATION */}
                <div className="hero-dot-pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PREMIUM TRUST STRIP
      ================================================== */}
      {/* PREMIUM TRUST STRIP */}
<section className="premium-trust-strip py-4">
  <div className="container">
    <div className="row g-0">

      <div className="col-6 col-lg-3">
        <div className="trust-item text-center px-3 py-3">
          <div className="trust-strip-icon mx-auto mb-3">
            <i className="bi bi-calendar-check-fill"></i>
          </div>

          <h4 className="text-white fw-bold mb-1">
            Since 2007
          </h4>

          <p className="text-white-50 small mb-0">
            Industry Experience
          </p>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="trust-item text-center px-3 py-3">
          <div className="trust-strip-icon mx-auto mb-3">
            <i className="bi bi-basket2-fill"></i>
          </div>

          <h4 className="text-white fw-bold mb-1">
            Fresh
          </h4>

          <p className="text-white-50 small mb-0">
            Indian Produce
          </p>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="trust-item text-center px-3 py-3">
          <div className="trust-strip-icon mx-auto mb-3">
            <i className="bi bi-box-seam-fill"></i>
          </div>

          <h4 className="text-white fw-bold mb-1">
            Export
          </h4>

          <p className="text-white-50 small mb-0">
            Ready Packaging
          </p>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="trust-item text-center px-3 py-3">
          <div className="trust-strip-icon mx-auto mb-3">
            <i className="bi bi-globe2"></i>
          </div>

          <h4 className="text-white fw-bold mb-1">
            Global
          </h4>

          <p className="text-white-50 small mb-0">
            Market Supply
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ==================================================
          PREMIUM ABOUT
      ================================================== */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative premium-about-visual">
                <img
                  src={aboutMain}
                  alt="Fresh produce"
                  loading="lazy"
                  className="img-fluid w-100 premium-about-main shadow"
                />

                <img
                  src={aboutSmall}
                  alt="Fresh vegetables"
                  loading="lazy"
                  className="premium-about-small shadow-lg"
                />

                <div className="premium-experience-box bg-success text-white shadow-lg rounded-4">
                  <span className="display-5 fw-bold d-block">19+</span>
                  <small className="fw-semibold">
                    YEARS OF
                    <br />
                    EXPERIENCE
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                ABOUT KHUSHI INTERNATIONAL
              </span>

              <h2 className="display-5 fw-bold mb-4">
                Freshness Begins at the
                <span className="text-success"> Source.</span>
              </h2>

              <p className="lead text-secondary">
                A fresh produce export business focused on bringing quality
                Indian fruits, vegetables and spices to international markets.
              </p>

              <p className="text-secondary lh-lg">
                From sourcing and inspection to packing and shipment
                coordination, our focus remains on careful handling,
                freshness and dependable export service.
              </p>

              <div className="row g-3 mt-4">
                {[
                  ["bi-patch-check-fill", "Quality Selection"],
                  ["bi-box2-heart-fill", "Careful Handling"],
                  ["bi-box-seam-fill", "Export Packaging"],
                  ["bi-globe2", "Global Supply"],
                ].map(([icon, title]) => (
                  <div className="col-sm-6" key={title}>
                    <div className="d-flex align-items-center gap-3 border rounded-4 p-3 h-100 premium-mini-card">
                      <div className="bg-success-subtle text-success rounded-circle premium-check-icon">
                        <i className={`bi ${icon}`}></i>
                      </div>

                      <span className="fw-bold">{title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn btn-dark rounded-pill px-4 py-3 mt-4"
              >
                Discover Our Story
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCT CATEGORIES
      ================================================== */}
      <section className="py-5 premium-products-section">
        <div className="container py-lg-5">
          <div className="row align-items-end g-4 mb-5">
            <div className="col-lg-7">
              <span className="badge bg-warning-subtle text-warning-emphasis rounded-pill px-3 py-2 mb-3">
                OUR PRODUCT RANGE
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Fresh From India.
                <span className="text-warning d-block">
                  Ready for the World.
                </span>
              </h2>

              <p className="text-white-50 fs-5 mb-0">
                Explore our fresh produce and Indian spice categories.
              </p>
            </div>

            <div className="col-lg-5 text-lg-end">
              <Link
                to="/products"
                className="btn btn-outline-light rounded-pill px-4 py-3"
              >
                View Complete Range
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {productCategories.map((category) => (
              <div className="col-md-6 col-lg-4" key={category.title}>
                <Link
                  to={category.link}
                  className="text-decoration-none"
                >
                  <article className="premium-product-card position-relative overflow-hidden rounded-5">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="w-100 h-100 premium-product-image"
                    />

                    <div className="premium-product-overlay"></div>

                    <div className="position-absolute top-0 start-0 w-100 p-4 d-flex justify-content-between">
                      <span className="badge bg-white text-dark rounded-pill px-3 py-2">
                        {category.subtitle}
                      </span>

                      <span className="text-white-50 fw-bold fs-4">
                        {category.number}
                      </span>
                    </div>

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 p-xl-5">
                      <div className="premium-product-icon bg-success text-white rounded-circle mb-3">
                        <i className={`bi ${category.icon}`}></i>
                      </div>

                      <h3 className="text-white fw-bold display-6">
                        {category.title}
                      </h3>

                      <p className="text-white-50 mb-2">
                        {category.items}
                      </p>

                      <p className="text-white d-none d-xl-block">
                        {category.description}
                      </p>

                      <span className="text-warning fw-bold">
                        Explore Category
                        <i className="bi bi-arrow-right ms-2"></i>
                      </span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          EXPORT PROCESS
      ================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="text-center mx-auto mb-5 premium-section-intro">
            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              HOW WE WORK
            </span>

            <h2 className="display-5 fw-bold mt-3">
              Farm to Flight.
              <span className="text-success"> One Reliable Process.</span>
            </h2>

            <p className="text-secondary fs-5">
              A structured journey from fresh sourcing to international
              shipment.
            </p>
          </div>

          <div className="position-relative">
            <div className="process-connector d-none d-lg-block"></div>

            <div className="row g-4">
              {process.map((step) => (
                <div className="col-md-6 col-lg-3" key={step.number}>
                  <div className="card border-0 shadow-sm rounded-4 h-100 premium-process-card">
                    <div className="card-body p-4 p-xl-5 position-relative">
                      <span className="position-absolute top-0 end-0 p-3 display-6 fw-bold text-black-50 opacity-25">
                        {step.number}
                      </span>

                      <div className="bg-success text-white rounded-circle process-premium-icon mb-4 position-relative">
                        <i className={`bi ${step.icon}`}></i>
                      </div>

                      <small className="text-success fw-bold">
                        STEP {step.number}
                      </small>

                      <h4 className="fw-bold mt-2">{step.title}</h4>

                      <p className="text-secondary lh-lg mb-0">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          GLOBAL MARKETS
      ================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                GLOBAL PRESENCE
              </span>

              <h2 className="display-5 fw-bold mt-3">
                Indian Freshness,
                <span className="text-success d-block">
                  Across Borders.
                </span>
              </h2>

              <p className="text-secondary fs-5 lh-lg mt-3">
                Supporting international customers with fresh Indian produce,
                export coordination and market-focused supply.
              </p>

              <Link
                to="/contact"
                className="btn btn-success rounded-pill px-4 py-3 mt-2"
              >
                Start Business With Us
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                {markets.map((market, index) => (
                  <div className="col-sm-6" key={market.name}>
                    <div
                      className={`rounded-4 p-4 h-100 premium-market-card ${
                        index === 0 ? "market-featured" : ""
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="market-premium-icon rounded-circle">
                          <i className={`bi ${market.icon}`}></i>
                        </div>

                        <i className="bi bi-arrow-up-right fs-5"></i>
                      </div>

                      <h4 className="fw-bold mt-4 mb-1">
                        {market.name}
                      </h4>

                      <p className="mb-0 opacity-75">
                        {market.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          REGISTRATIONS / CERTIFICATES MARQUEE
      ================================================== */}
      <section className="py-5 premium-certificates overflow-hidden">
        <div className="container py-lg-4">
          <div className="text-center mx-auto premium-section-intro mb-5">
            <span className="badge bg-warning-subtle text-warning-emphasis rounded-pill px-3 py-2">
              TRUST & COMPLIANCE
            </span>

            <h2 className="display-5 fw-bold mt-3 mb-3">
              Registrations &
              <span className="text-success"> Compliance</span>
            </h2>

            <p className="text-secondary fs-5">
              Supporting professional food and agricultural export operations.
            </p>
          </div>
        </div>

        <div className="premium-marquee">
          <div className="premium-marquee-track">
            {[...registrations, ...registrations].map((item, index) => (
              <div
                className="premium-certificate-card bg-white"
                key={`${item.title}-${index}`}
              >
                <div className="certificate-brand">
                  <div className="certificate-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <strong>{item.short}</strong>
                </div>

                <div className="vr"></div>

                <div>
                  <h5 className="fw-bold mb-1">
                    {item.title}
                  </h5>

                  <small className="text-secondary">
                    {item.subtitle}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <p className="text-center text-secondary small mt-4 mb-0">
            Registration details and official marks should be displayed
            according to applicable authorization and usage requirements.
          </p>
        </div>
      </section>

      {/* ==================================================
          WHY KHUSHI
      ================================================== */}
      <section className="py-5 bg-dark text-white position-relative overflow-hidden">
        <div className="why-glow"></div>

        <div className="container position-relative py-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                WHY KHUSHI INTERNATIONAL
              </span>

              <h2 className="display-5 text-white fw-bold mt-4">
                Built Around
                <span className="text-warning d-block">
                  Freshness & Reliability.
                </span>
              </h2>

              <p className="text-white-50 fs-5 lh-lg mt-3">
                Every stage is approached with attention to produce quality,
                careful handling and international supply requirements.
              </p>

              <Link
                to="/contact"
                className="btn btn-warning btn-lg rounded-pill px-4 mt-3"
              >
                Talk to Our Team
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                {[
                  {
                    icon: "bi-award-fill",
                    title: "Quality Focus",
                    text: "Produce selected with attention to freshness and buyer requirements.",
                  },
                  {
                    icon: "bi-box2-heart-fill",
                    title: "Safe Handling",
                    text: "Careful handling throughout sorting, packing and export preparation.",
                  },
                  {
                    icon: "bi-clock-history",
                    title: "Timely Coordination",
                    text: "Focused coordination for time-sensitive fresh produce shipments.",
                  },
                  {
                    icon: "bi-people-fill",
                    title: "Business Support",
                    text: "Responsive communication for product and export enquiries.",
                  },
                ].map((item) => (
                  <div className="col-sm-6" key={item.title}>
                    <div className="premium-why-card rounded-4 p-4 h-100">
                      <div className="why-premium-icon rounded-circle mb-4">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <h4 className="fw-bold text-white">
                        {item.title}
                      </h4>

                      <p className="text-white-50 lh-lg mb-0">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL PREMIUM CTA
      ================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="premium-final-cta rounded-5 overflow-hidden position-relative">
            <div className="cta-circle cta-circle-one"></div>
            <div className="cta-circle cta-circle-two"></div>

            <div className="row align-items-center position-relative g-4 p-4 p-md-5">
              <div className="col-lg-8">
                <span className="text-warning fw-bold small">
                  EXPORT & BUSINESS ENQUIRY
                </span>

                <h2 className="display-5 fw-bold text-white mt-2">
                  Looking for Fresh Indian Produce?
                </h2>

                <p className="text-white-50 fs-5 mb-0">
                  Connect with Khushi International for product availability,
                  export supply and business enquiries.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <Link
                  to="/contact"
                  className="btn btn-warning btn-lg rounded-pill px-4 py-3 fw-bold"
                >
                  Send an Enquiry
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-lg rounded-pill px-4 py-3 ms-lg-2 mt-3 mt-lg-0"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;