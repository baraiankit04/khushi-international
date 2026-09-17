import { Link } from "react-router-dom";

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: "Company Update",
      icon: "bi-megaphone-fill",
      title: "Company Updates & Announcements",
      description:
        "Official updates, announcements and important developments from Khushi International will be published here.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 2,
      category: "Fresh Produce",
      icon: "bi-basket2-fill",
      title: "Fresh Produce Updates",
      description:
        "Updates related to seasonal fruits, vegetables, product availability and fresh produce activities.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 3,
      category: "Export",
      icon: "bi-airplane-engines-fill",
      title: "Export & Shipment Updates",
      description:
        "Important updates related to export operations, international supply and shipment activities.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 4,
      category: "Events",
      icon: "bi-calendar-event-fill",
      title: "Events & Exhibitions",
      description:
        "Updates about exhibitions, trade events, business meetings and industry participation.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 5,
      category: "Business",
      icon: "bi-globe2",
      title: "International Business Updates",
      description:
        "Business developments and updates related to international markets and customer requirements.",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: 6,
      category: "Quality",
      icon: "bi-patch-check-fill",
      title: "Quality & Operations",
      description:
        "Updates covering product handling, quality processes, packaging and operational activities.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-light py-5">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

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

                  <li className="breadcrumb-item active">
                    News
                  </li>
                </ol>
              </nav>

              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-newspaper me-2"></i>
                NEWS & UPDATES
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">
                Latest From
                <span className="d-block text-success">
                  Khushi International.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Explore company announcements, fresh produce updates,
                export activities, events and other developments from
                Khushi International.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#latest-updates"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Updates
                  <i className="bi bi-arrow-down ms-2"></i>
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4"
                >
                  Contact Us
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </Link>
              </div>

            </div>


            {/* HERO IMAGE */}
            <div className="col-lg-5">

              <div className="card border-0 shadow-lg rounded-5 overflow-hidden news-hero-card">

                <div className="ratio ratio-4x3 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                    alt="Khushi International updates"
                    className="w-100 h-100 object-fit-cover news-image-zoom"
                  />

                </div>

                <div className="card-body bg-dark text-white p-4">

                  <div className="d-flex align-items-center gap-3">

                    <span className="d-inline-flex bg-success rounded-circle p-3">
                      <i className="bi bi-broadcast-pin fs-4"></i>
                    </span>

                    <div>
                      <small className="text-warning fw-bold">
                        STAY UPDATED
                      </small>

                      <h5 className="fw-bold mb-0 mt-1">
                        Company News & Activities
                      </h5>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* QUICK INFO */}
          <div className="row row-cols-2 row-cols-md-4 g-3 mt-4">

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 news-mini-card">
                <div className="card-body p-3">
                  <i className="bi bi-megaphone-fill text-success fs-4"></i>
                  <h6 className="fw-bold mt-2 mb-0">Company</h6>
                  <small className="text-secondary">Updates</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 news-mini-card">
                <div className="card-body p-3">
                  <i className="bi bi-basket2-fill text-success fs-4"></i>
                  <h6 className="fw-bold mt-2 mb-0">Produce</h6>
                  <small className="text-secondary">News</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 news-mini-card">
                <div className="card-body p-3">
                  <i className="bi bi-airplane-engines-fill text-success fs-4"></i>
                  <h6 className="fw-bold mt-2 mb-0">Export</h6>
                  <small className="text-secondary">Activities</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 news-mini-card">
                <div className="card-body p-3">
                  <i className="bi bi-calendar-event-fill text-success fs-4"></i>
                  <h6 className="fw-bold mt-2 mb-0">Events</h6>
                  <small className="text-secondary">Updates</small>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURED UPDATE ================= */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-8">
              <span className="text-success fw-bold small">
                FEATURED
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-3">
                Company
                <span className="text-success">
                  {" "}Updates.
                </span>
              </h2>

              <p className="text-secondary fs-5 mb-0">
                Important company announcements and developments
                can be highlighted in this section.
              </p>
            </div>

          </div>


          <div className="card border-0 shadow-lg rounded-5 overflow-hidden news-feature-card">

            <div className="row g-0">

              <div className="col-lg-7">

                <div className="ratio ratio-16x9 h-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=85"
                    alt="Khushi International company update"
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover news-feature-image"
                  />

                </div>

              </div>


              <div className="col-lg-5">

                <div className="card-body p-4 p-md-5 h-100 d-flex flex-column justify-content-center">

                  <div className="d-flex flex-wrap gap-2 mb-3">

                    <span className="badge bg-success rounded-pill px-3 py-2">
                      Featured
                    </span>

                    <span className="badge bg-light text-dark border rounded-pill px-3 py-2">
                      Company Update
                    </span>

                  </div>

                  <h2 className="fw-bold mb-3">
                    Welcome to Our News & Updates Section
                  </h2>

                  <p className="text-secondary lh-lg">
                    This section will feature official updates from
                    Khushi International including business activities,
                    fresh produce, shipments, events and company
                    announcements.
                  </p>

                  <div className="alert alert-warning border-0 rounded-4 mt-2">
                    <div className="d-flex gap-3">
                      <i className="bi bi-info-circle-fill"></i>

                      <small>
                        Actual company news can be added here whenever
                        a new update is available.
                      </small>
                    </div>
                  </div>

                  <div className="mt-3">

                    <Link
                      to="/contact"
                      className="btn btn-success rounded-pill px-4"
                    >
                      Contact Company
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= NEWS CARDS ================= */}
      <section
        id="latest-updates"
        className="py-5 bg-light"
      >
        <div className="container py-lg-5">

          <div className="text-center mb-5">

            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              LATEST UPDATES
            </span>

            <h2 className="display-5 fw-bold mt-3 mb-3">
              News &
              <span className="text-success">
                {" "}Activities.
              </span>
            </h2>

            <p className="text-secondary fs-5">
              Follow different areas of Khushi International's
              business activities.
            </p>

          </div>


          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">

            {newsItems.map((news) => (

              <div className="col" key={news.id}>

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 news-card">

                  {/* IMAGE */}
                  <div className="ratio ratio-4x3 overflow-hidden position-relative">

                    <img
                      src={news.image}
                      alt={news.title}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover news-card-image"
                    />

                    <span className="position-absolute top-0 start-0 m-3 badge bg-dark rounded-pill px-3 py-2 w-auto h-auto">
                      {news.category}
                    </span>

                  </div>


                  {/* CONTENT */}
                  <div className="card-body p-4 d-flex flex-column">

                    <div className="d-flex justify-content-between align-items-start mb-3">

                      <span className="d-inline-flex bg-success-subtle text-success rounded-3 p-3 news-card-icon">
                        <i className={`bi ${news.icon} fs-5`}></i>
                      </span>

                      <span className="text-secondary small">
                        Update
                      </span>

                    </div>

                    <h4 className="fw-bold mb-3">
                      {news.title}
                    </h4>

                    <p className="text-secondary small lh-lg">
                      {news.description}
                    </p>

                    <div className="border-top pt-3 mt-auto">

                      <Link
                        to="/contact"
                        className="text-success text-decoration-none fw-semibold"
                      >
                        Learn More
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= WHAT WE SHARE ================= */}
      <section className="py-5 bg-dark">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                NEWSROOM
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                What You'll Find
                <span className="d-block text-warning">
                  Here.
                </span>
              </h2>

              <p className="text-white-50 fs-5">
                Our news section can be used to share genuine
                company activities and important business updates.
              </p>

            </div>


            <div className="col-lg-7">

              <div className="row g-3">

                <div className="col-sm-6">

                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 h-100 news-dark-card">

                    <div className="card-body p-4 text-white">

                      <i className="bi bi-airplane-engines-fill text-warning fs-3"></i>

                      <h5 className="fw-bold mt-3">
                        Shipment Updates
                      </h5>

                      <p className="text-white-50 small mb-0">
                        Genuine updates related to export and
                        shipment activities.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 h-100 news-dark-card">

                    <div className="card-body p-4 text-white">

                      <i className="bi bi-basket2-fill text-warning fs-3"></i>

                      <h5 className="fw-bold mt-3">
                        Seasonal Produce
                      </h5>

                      <p className="text-white-50 small mb-0">
                        Fresh produce and seasonal product
                        availability updates.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 h-100 news-dark-card">

                    <div className="card-body p-4 text-white">

                      <i className="bi bi-calendar-event-fill text-warning fs-3"></i>

                      <h5 className="fw-bold mt-3">
                        Events
                      </h5>

                      <p className="text-white-50 small mb-0">
                        Trade events, exhibitions and company
                        participation.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="col-sm-6">

                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 h-100 news-dark-card">

                    <div className="card-body p-4 text-white">

                      <i className="bi bi-building-fill text-warning fs-3"></i>

                      <h5 className="fw-bold mt-3">
                        Company News
                      </h5>

                      <p className="text-white-50 small mb-0">
                        Official announcements and business
                        developments.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SOCIAL / CONTACT ================= */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="card border-0 bg-light rounded-5">

            <div className="card-body p-4 p-md-5">

              <div className="row align-items-center g-4">

                <div className="col-lg-8">

                  <span className="text-success fw-bold small">
                    STAY CONNECTED
                  </span>

                  <h2 className="display-6 fw-bold mt-2 mb-3">
                    Want to Know More About
                    <span className="text-success">
                      {" "}Our Business?
                    </span>
                  </h2>

                  <p className="text-secondary mb-0">
                    Contact our team for fresh produce, export
                    services and business enquiries.
                  </p>

                </div>


                <div className="col-lg-4">

                  <div className="d-flex flex-wrap justify-content-lg-end gap-2">

                    <a
                      href="https://wa.me/917317422100"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-success rounded-pill px-4"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      WhatsApp
                    </a>

                    <Link
                      to="/contact"
                      className="btn btn-outline-dark rounded-pill px-4"
                    >
                      Contact
                    </Link>

                  </div>

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
                KHUSHI INTERNATIONAL
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Fresh Produce. Global Connections.
              </h2>

              <p className="text-white fs-5 opacity-75 mb-0">
                Connect with our team for product and
                international business enquiries.
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
                  Send Enquiry
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default News;