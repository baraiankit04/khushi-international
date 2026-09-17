import { Link } from "react-router-dom";

const Team = () => {
  const director = {
    name: "Director Name",
    role: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85",
    message:
      "Leading Khushi International with a focus on quality, dependable business relationships and the international supply of fresh Indian produce.",
  };

  const teamMembers = [
    {
      name: "Team Member",
      role: "Export Operations",
      icon: "bi-airplane-engines-fill",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Team Member",
      role: "Quality & Sourcing",
      icon: "bi-patch-check-fill",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Team Member",
      role: "Documentation",
      icon: "bi-file-earmark-check-fill",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Team Member",
      role: "Logistics",
      icon: "bi-truck",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    },
  ];

  const departments = [
    {
      icon: "bi-basket2-fill",
      title: "Sourcing",
      text: "Coordination for fresh fruits, vegetables and other product requirements.",
    },
    {
      icon: "bi-patch-check-fill",
      title: "Quality",
      text: "Attention to produce quality, freshness and customer requirements.",
    },
    {
      icon: "bi-box-seam-fill",
      title: "Packaging",
      text: "Product handling and export packaging coordination.",
    },
    {
      icon: "bi-file-earmark-text-fill",
      title: "Documentation",
      text: "Support for documentation required during the export process.",
    },
    {
      icon: "bi-airplane-engines-fill",
      title: "Operations",
      text: "Coordination across fresh produce export operations and shipment.",
    },
    {
      icon: "bi-headset",
      title: "Customer Support",
      text: "Communication and coordination for customer requirements and enquiries.",
    },
  ];

  return (
    <>
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="bg-light py-5">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

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
                    Team
                  </li>

                </ol>
              </nav>


              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-people-fill me-2"></i>
                OUR TEAM
              </span>


              <h1 className="display-3 fw-bold lh-sm mb-4">
                The People Behind
                <span className="d-block text-success">
                  Khushi International.
                </span>
              </h1>


              <p className="lead text-secondary lh-lg mb-4">
                A team working together across sourcing, quality,
                documentation, logistics and export operations to
                support international fresh produce requirements.
              </p>


              <div className="d-flex flex-wrap gap-3">

                <a
                  href="#leadership"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Meet Our Team
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


              {/* MINI STATS */}
              <div className="row g-3 mt-4">

                <div className="col-4">

                  <div className="card border-0 shadow-sm rounded-4 h-100 team-stat-hover">

                    <div className="card-body p-3">

                      <i className="bi bi-calendar-check-fill text-success fs-4"></i>

                      <h5 className="fw-bold mt-2 mb-0">
                        2007
                      </h5>

                      <small className="text-secondary">
                        Established
                      </small>

                    </div>

                  </div>

                </div>


                <div className="col-4">

                  <div className="card border-0 shadow-sm rounded-4 h-100 team-stat-hover">

                    <div className="card-body p-3">

                      <i className="bi bi-people-fill text-success fs-4"></i>

                      <h5 className="fw-bold mt-2 mb-0">
                        Team
                      </h5>

                      <small className="text-secondary">
                        Driven
                      </small>

                    </div>

                  </div>

                </div>


                <div className="col-4">

                  <div className="card border-0 shadow-sm rounded-4 h-100 team-stat-hover">

                    <div className="card-body p-3">

                      <i className="bi bi-globe2 text-success fs-4"></i>

                      <h5 className="fw-bold mt-2 mb-0">
                        Global
                      </h5>

                      <small className="text-secondary">
                        Focus
                      </small>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT IMAGE */}
            <div className="col-lg-6">

              <div className="card border-0 shadow-lg rounded-5 overflow-hidden team-hero-card">

                <div className="ratio ratio-4x3 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=85"
                    alt="Khushi International team"
                    className="w-100 h-100 object-fit-cover team-image-zoom"
                  />

                </div>


                <div className="card-body bg-dark text-white p-4">

                  <div className="row align-items-center g-3">

                    <div className="col">

                      <small className="text-warning fw-bold">
                        WORKING TOGETHER
                      </small>

                      <h4 className="fw-bold mb-1 mt-1">
                        One Team. One Commitment.
                      </h4>

                      <p className="text-white-50 mb-0">
                        Quality • Service • Reliability
                      </p>

                    </div>


                    <div className="col-auto">

                      <span className="d-inline-flex bg-success rounded-circle p-3">

                        <i className="bi bi-people-fill fs-4"></i>

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          DIRECTOR / LEADERSHIP
      ================================================== */}
      <section
        id="leadership"
        className="py-5 bg-white"
      >

        <div className="container py-lg-5">

          <div className="text-center mx-auto mb-5">

            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              LEADERSHIP
            </span>

            <h2 className="display-5 fw-bold mt-3 mb-3">
              Leading With
              <span className="text-success">
                {" "}Vision & Commitment.
              </span>
            </h2>

            <p className="text-secondary fs-5 mb-0">
              Leadership focused on building dependable relationships
              and supporting international fresh produce trade.
            </p>

          </div>


          {/* FEATURED DIRECTOR */}
          <div className="card border-0 shadow-lg rounded-5 overflow-hidden team-director-card">

            <div className="row g-0 align-items-stretch">

              {/* DIRECTOR IMAGE */}
              <div className="col-lg-5">

                <div className="h-100 overflow-hidden">

                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-100 h-100 object-fit-cover team-director-image"
                  />

                </div>

              </div>


              {/* DIRECTOR CONTENT */}
              <div className="col-lg-7">

                <div className="card-body p-4 p-md-5 p-lg-5">

                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4">

                    <div>

                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                        LEADERSHIP
                      </span>

                      <h2 className="display-6 fw-bold mb-1">
                        {director.name}
                      </h2>

                      <p className="text-success fw-semibold fs-5 mb-0">
                        {director.role}
                      </p>

                    </div>


                    <span className="d-none d-sm-inline-flex bg-success-subtle text-success rounded-circle p-3">
                      <i className="bi bi-quote fs-3"></i>
                    </span>

                  </div>


                  <hr className="my-4" />


                  <p className="text-secondary fs-5 lh-lg">
                    {director.message}
                  </p>


                  <div className="row g-3 mt-3">

                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 team-small-hover">

                        <div className="card-body p-3">

                          <div className="d-flex align-items-center gap-3">

                            <span className="bg-success-subtle text-success rounded-circle p-3">
                              <i className="bi bi-eye-fill"></i>
                            </span>

                            <div>

                              <strong className="d-block">
                                Vision
                              </strong>

                              <small className="text-secondary">
                                Long-term business relationships
                              </small>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>


                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 team-small-hover">

                        <div className="card-body p-3">

                          <div className="d-flex align-items-center gap-3">

                            <span className="bg-success-subtle text-success rounded-circle p-3">
                              <i className="bi bi-patch-check-fill"></i>
                            </span>

                            <div>

                              <strong className="d-block">
                                Commitment
                              </strong>

                              <small className="text-secondary">
                                Quality-focused service
                              </small>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>


                  <div className="d-flex flex-wrap gap-2 mt-4">

                    <Link
                      to="/about"
                      className="btn btn-dark rounded-pill px-4"
                    >
                      About Company
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                    <Link
                      to="/contact"
                      className="btn btn-outline-success rounded-pill px-4"
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


      {/* ==================================================
          TEAM MEMBERS
      ================================================== */}
      <section className="py-5 bg-light">

        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">

              <span className="text-success fw-bold small">
                OUR PEOPLE
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-3">
                Meet Our
                <span className="text-success">
                  {" "}Team.
                </span>
              </h2>

              <p className="text-secondary fs-5 mb-0">
                Working across different functions to support
                fresh produce export operations.
              </p>

            </div>


            <div className="col-lg-5">

              <div className="alert alert-success border-0 rounded-4 mb-0">

                <div className="d-flex gap-3">

                  <i className="bi bi-people-fill fs-4"></i>

                  <div>

                    <strong className="d-block">
                      Working Together
                    </strong>

                    <small>
                      Coordination across departments helps support
                      the complete export process.
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* TEAM CARDS */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

            {teamMembers.map((member) => (

              <div className="col" key={`${member.name}-${member.role}`}>

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 team-member-card">

                  {/* IMAGE */}
                  <div className="ratio ratio-1x1 overflow-hidden">

                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover team-member-image"
                    />

                  </div>


                  {/* CONTENT */}
                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-start gap-3">

                      <div>

                        <h5 className="fw-bold mb-1">
                          {member.name}
                        </h5>

                        <p className="text-success small fw-semibold mb-0">
                          {member.role}
                        </p>

                      </div>


                      <span className="bg-success-subtle text-success rounded-circle p-2 team-member-icon">
                        <i className={`bi ${member.icon}`}></i>
                      </span>

                    </div>

                  </div>


                  <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">

                    <Link
                      to="/contact"
                      className="text-success text-decoration-none fw-semibold small"
                    >
                      Contact Team
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          DEPARTMENTS
      ================================================== */}
      <section className="py-5 bg-dark">

        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                WORKING TOGETHER
              </span>

              <h2 className="display-5 fw-bold text-white">
                Teams Behind the
                <span className="d-block text-warning">
                  Export Process.
                </span>
              </h2>

            </div>


            <div className="col-lg-5">

              <p className="text-white-50 fs-5 mb-0">
                Different functions working together from fresh
                produce sourcing through international shipment.
              </p>

            </div>

          </div>


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

            {departments.map((department) => (

              <div className="col" key={department.title}>

                <div className="card h-100 bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 team-department-card">

                  <div className="card-body p-4 text-white">

                    <div className="d-flex align-items-center justify-content-between mb-4">

                      <span className="d-inline-flex bg-success rounded-circle p-3">
                        <i className={`bi ${department.icon} fs-4`}></i>
                      </span>

                      <i className="bi bi-arrow-up-right text-white-50 fs-4"></i>

                    </div>

                    <h4 className="fw-bold">
                      {department.title}
                    </h4>

                    <p className="text-white-50 mb-0">
                      {department.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          TEAM VALUES
      ================================================== */}
      <section className="py-5 bg-white">

        <div className="container py-lg-5">

          <div className="text-center mb-5">

            <span className="text-success fw-bold small">
              OUR VALUES
            </span>

            <h2 className="display-5 fw-bold mt-2">
              What Guides
              <span className="text-success">
                {" "}Our Team.
              </span>
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border shadow-sm rounded-4 h-100 text-center team-value-card">

                <div className="card-body p-4 p-lg-5">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-patch-check-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Quality
                  </h4>

                  <p className="text-secondary mb-0">
                    Attention to fresh produce quality and
                    customer requirements.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border shadow-sm rounded-4 h-100 text-center team-value-card">

                <div className="card-body p-4 p-lg-5">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-handshake-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Relationships
                  </h4>

                  <p className="text-secondary mb-0">
                    Building dependable and long-term
                    business relationships.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card border shadow-sm rounded-4 h-100 text-center team-value-card">

                <div className="card-body p-4 p-lg-5">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-people-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Teamwork
                  </h4>

                  <p className="text-secondary mb-0">
                    Coordination across departments throughout
                    the export process.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          CTA
      ================================================== */}
      <section className="py-5 bg-success">

        <div className="container py-4 py-lg-5">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                CONNECT WITH US
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Let's Build a Business Relationship.
              </h2>

              <p className="text-white fs-5 opacity-75 mb-0">
                Contact the Khushi International team for fresh
                produce and export enquiries.
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
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Team;