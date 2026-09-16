import { Link } from "react-router-dom";

const Team = () => {
  const director = {
    name: "Main Director Name",
    role: "Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    text: "Leading Khushi International with a focus on quality, trust, customer relationships and global growth in the fresh fruits and vegetables export business.",
  };

  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Export Operations",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
      text: "Handles export coordination, shipment planning and operational support.",
    },
    {
      name: "Team Member 2",
      role: "Quality & Procurement",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      text: "Supports product sourcing, supplier coordination and quality inspection.",
    },
    {
      name: "Team Member 3",
      role: "Documentation",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
      text: "Manages export-related paperwork, documentation and shipment follow-up.",
    },
    {
      name: "Team Member 4",
      role: "Logistics",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
      text: "Supports shipment movement, transport coordination and delivery planning.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-lg-4">
          <div className="row align-items-center g-4">

            <div className="col-lg-8">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                Our Team
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Meet the People Behind
                <span className="text-success"> Khushi International</span>
              </h1>

              <p className="lead text-secondary mb-0">
                A dedicated team working across sourcing, quality,
                documentation, operations and logistics to support
                fresh produce exports.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark text-white rounded-4 p-4 shadow-sm">

                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-bold">
                      OUR STRENGTH
                    </small>

                    <h5 className="text-white mb-0 mt-1">
                      Dedicated Team
                    </h5>
                  </div>
                </div>

                <p className="text-white-50 mb-0">
                  Working together to deliver quality produce and reliable
                  export service.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIRECTOR / CEO FEATURED SECTION */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">
            <span className="text-success fw-bold text-uppercase small">
              Leadership
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-3">
              Meet Our Managing Director
            </h2>

            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "700px" }}>
              Leadership focused on building trust, maintaining quality
              and expanding Khushi International across global markets.
            </p>
          </div>

          <div className="card border-0 shadow rounded-4 overflow-hidden">
            <div className="row g-0 align-items-stretch">

              <div className="col-lg-5">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-100 h-100"
                  loading="lazy"
                  style={{
                    minHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="col-lg-7">
                <div className="card-body p-4 p-md-5 h-100 d-flex flex-column justify-content-center">

                  <span className="badge bg-warning-subtle text-warning-emphasis align-self-start px-3 py-2 mb-3">
                    {director.role}
                  </span>

                  <h2 className="fw-bold mb-3">
                    {director.name}
                  </h2>

                  <p className="text-secondary fs-5 lh-lg">
                    {director.text}
                  </p>

                  <div className="row g-3 mt-2">

                    <div className="col-sm-4">
                      <div className="bg-light rounded-3 p-3 text-center h-100">
                        <i className="bi bi-award-fill text-success fs-3"></i>
                        <h6 className="fw-bold mt-2 mb-1">
                          Quality
                        </h6>
                        <small className="text-secondary">
                          Product Focus
                        </small>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="bg-light rounded-3 p-3 text-center h-100">
                        <i className="bi bi-handshake-fill text-success fs-3"></i>
                        <h6 className="fw-bold mt-2 mb-1">
                          Trust
                        </h6>
                        <small className="text-secondary">
                          Customer Relations
                        </small>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="bg-light rounded-3 p-3 text-center h-100">
                        <i className="bi bi-globe2 text-success fs-3"></i>
                        <h6 className="fw-bold mt-2 mb-1">
                          Growth
                        </h6>
                        <small className="text-secondary">
                          Global Markets
                        </small>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* OTHER TEAM MEMBERS */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">
            <span className="text-success fw-bold text-uppercase small">
              Our Professionals
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-3">
              Meet Our Team
            </h2>

            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "700px" }}>
              Our team works together to support every stage of the
              fresh produce export process.
            </p>
          </div>

          <div className="row g-4">

            {teamMembers.map((member, index) => (
              <div
                className="col-sm-6 col-lg-3"
                key={index}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="card-img-top"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">

                    <span className="badge bg-success-subtle text-success mb-2">
                      {member.role}
                    </span>

                    <h5 className="card-title fw-bold mb-2">
                      {member.name}
                    </h5>

                    <p className="card-text text-secondary small lh-lg mb-0">
                      {member.text}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span className="text-success fw-bold text-uppercase small">
                Our Departments
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-3">
                Working Together at Every Stage
              </h2>

              <p className="text-secondary lh-lg">
                Fresh produce export requires coordination between
                procurement, quality control, documentation and logistics.
              </p>

              <Link
                to="/contact"
                className="btn btn-success btn-lg px-4"
              >
                Contact Our Team
              </Link>

            </div>

            <div className="col-lg-7">
              <div className="row g-3">

                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <div className="d-flex gap-3">

                      <i className="bi bi-basket2-fill text-success fs-2"></i>

                      <div>
                        <h5 className="fw-bold">
                          Procurement
                        </h5>

                        <p className="text-secondary mb-0">
                          Sourcing fresh fruits and vegetables from reliable suppliers.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <div className="d-flex gap-3">

                      <i className="bi bi-patch-check-fill text-success fs-2"></i>

                      <div>
                        <h5 className="fw-bold">
                          Quality
                        </h5>

                        <p className="text-secondary mb-0">
                          Product freshness, selection and quality inspection.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <div className="d-flex gap-3">

                      <i className="bi bi-file-earmark-check-fill text-success fs-2"></i>

                      <div>
                        <h5 className="fw-bold">
                          Documentation
                        </h5>

                        <p className="text-secondary mb-0">
                          Supporting paperwork and export shipment documents.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <div className="d-flex gap-3">

                      <i className="bi bi-airplane-engines-fill text-success fs-2"></i>

                      <div>
                        <h5 className="fw-bold">
                          Logistics
                        </h5>

                        <p className="text-secondary mb-0">
                          Shipment planning and international movement support.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">
            <span className="text-success fw-bold text-uppercase small">
              Our Values
            </span>

            <h2 className="display-6 fw-bold mt-2">
              What Our Team Stands For
            </h2>
          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center rounded-4 shadow-sm p-4 h-100">

                <i className="bi bi-award-fill text-warning fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Quality
                </h5>

                <p className="text-secondary mb-0">
                  Attention to freshness and product standards.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center rounded-4 shadow-sm p-4 h-100">

                <i className="bi bi-shield-check text-warning fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Reliability
                </h5>

                <p className="text-secondary mb-0">
                  Dependable service throughout the export process.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center rounded-4 shadow-sm p-4 h-100">

                <i className="bi bi-people-fill text-warning fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Teamwork
                </h5>

                <p className="text-secondary mb-0">
                  Strong coordination between every department.
                </p>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="bg-white text-center rounded-4 shadow-sm p-4 h-100">

                <i className="bi bi-globe2 text-warning fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Customer Focus
                </h5>

                <p className="text-secondary mb-0">
                  Understanding buyer and market requirements.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-success py-5">
        <div className="container">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <p className="text-warning fw-bold text-uppercase small mb-2">
                Get In Touch
              </p>

              <h2 className="text-white fw-bold mb-2">
                Connect With Khushi International
              </h2>

              <p className="text-white-50 mb-0">
                Contact our team for fresh produce availability,
                export requirements and business enquiries.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg fw-semibold px-4"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Team;