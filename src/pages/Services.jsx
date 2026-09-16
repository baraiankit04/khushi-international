import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "bi-patch-check-fill",
      title: "Quality Control",
      text: "Fresh fruits and vegetables are carefully checked for quality, freshness, appearance and export suitability.",
    },
    {
      icon: "bi-tree-fill",
      title: "Contract Farming",
      text: "We coordinate with farms and growers for dependable sourcing of fresh agricultural produce.",
    },
    {
      icon: "bi-box-seam-fill",
      title: "Packhouse Services",
      text: "Sorting, grading and professional packing support for fresh produce before export shipment.",
    },
    {
      icon: "bi-box2-heart-fill",
      title: "Export Packaging",
      text: "Suitable export packaging helps protect freshness and product quality during international transportation.",
    },
    {
      icon: "bi-file-earmark-check-fill",
      title: "Export Documentation",
      text: "Support for required export-related documentation and shipment coordination.",
    },
    {
      icon: "bi-airplane-engines-fill",
      title: "Logistics Support",
      text: "Coordination for reliable movement of fresh produce to international markets.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-5 bg-light border-bottom">
        <div className="container py-lg-4">
          <div className="row align-items-center g-4">

            <div className="col-lg-8">
              <span className="badge rounded-pill text-bg-success px-3 py-2 mb-3">
                Our Services
              </span>

              <h1 className="display-4 fw-bold text-dark mb-3">
                Complete Fresh Produce
                <span className="text-success"> Export Services</span>
              </h1>

              <p className="lead text-secondary mb-0">
                From sourcing and quality inspection to packaging and shipment,
                Khushi International supports the fresh produce export process
                for international buyers.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark text-white rounded-4 p-4 shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "55px", height: "55px" }}>
                    <i className="bi bi-globe2 fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-semibold">
                      EXPORT SUPPORT
                    </small>
                    <h5 className="text-white mb-0 mt-1">
                      India to Global Markets
                    </h5>
                  </div>
                </div>

                <p className="text-white-50 mb-0">
                  Professional support for quality fresh fruits and vegetables.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <span className="text-success fw-bold text-uppercase small">
                What We Do
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-3">
                Our Export Services
              </h2>

              <p className="text-secondary mb-0">
                Reliable services designed to maintain freshness, quality
                and smooth export operations.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">

                    <div
                      className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center mb-4"
                      style={{ width: "58px", height: "58px" }}
                    >
                      <i className={`bi ${service.icon} fs-3`}></i>
                    </div>

                    <h4 className="card-title fw-bold mb-3">
                      {service.title}
                    </h4>

                    <p className="card-text text-secondary lh-lg mb-0">
                      {service.text}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-5 bg-light">
        <div className="container py-lg-4">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <span className="text-success text-uppercase fw-bold small">
                Our Process
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Simple Export Process
              </h2>

              <p className="text-secondary lh-lg">
                Our process focuses on fresh sourcing, product quality,
                suitable packaging and reliable export coordination.
              </p>

              <Link to="/contact" className="btn btn-success btn-lg px-4">
                Send Enquiry
              </Link>
            </div>

            <div className="col-lg-7">

              <div className="row g-3">

                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-4 h-100 shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="badge bg-warning text-dark fs-6">
                        01
                      </span>
                      <h5 className="fw-bold mb-0">Sourcing</h5>
                    </div>

                    <p className="text-secondary mb-0">
                      Fresh produce sourced from reliable growers and suppliers.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-4 h-100 shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="badge bg-warning text-dark fs-6">
                        02
                      </span>
                      <h5 className="fw-bold mb-0">Inspection</h5>
                    </div>

                    <p className="text-secondary mb-0">
                      Freshness and export quality are carefully checked.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-4 h-100 shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="badge bg-warning text-dark fs-6">
                        03
                      </span>
                      <h5 className="fw-bold mb-0">Packaging</h5>
                    </div>

                    <p className="text-secondary mb-0">
                      Products are sorted, graded and packed for shipment.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="bg-white border rounded-4 p-4 h-100 shadow-sm">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="badge bg-warning text-dark fs-6">
                        04
                      </span>
                      <h5 className="fw-bold mb-0">Export</h5>
                    </div>

                    <p className="text-secondary mb-0">
                      Shipment is coordinated for international destinations.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHY SERVICES */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="row g-4">

            <div className="col-lg-4">
              <span className="text-success fw-bold text-uppercase small">
                Why Choose Us
              </span>

              <h2 className="fw-bold mt-2">
                Reliable Export Support
              </h2>

              <p className="text-secondary lh-lg">
                We focus on product quality, careful handling and professional
                coordination throughout the export process.
              </p>
            </div>

            <div className="col-lg-8">

              <div className="row g-3">

                <div className="col-md-6">
                  <div className="d-flex gap-3 border rounded-4 p-4 h-100">
                    <i className="bi bi-check-circle-fill text-success fs-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Quality Focus
                      </h5>

                      <p className="text-secondary mb-0">
                        Fresh produce checked before shipment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3 border rounded-4 p-4 h-100">
                    <i className="bi bi-box-seam-fill text-success fs-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Safe Packaging
                      </h5>

                      <p className="text-secondary mb-0">
                        Professional packing for international transport.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3 border rounded-4 p-4 h-100">
                    <i className="bi bi-clock-fill text-success fs-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Timely Coordination
                      </h5>

                      <p className="text-secondary mb-0">
                        Efficient shipment and export coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3 border rounded-4 p-4 h-100">
                    <i className="bi bi-globe2 text-success fs-3"></i>

                    <div>
                      <h5 className="fw-bold">
                        Global Markets
                      </h5>

                      <p className="text-secondary mb-0">
                        Supporting supply to international customers.
                      </p>
                    </div>
                  </div>
                </div>

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
                Business Enquiry
              </p>

              <h2 className="text-white fw-bold mb-2">
                Need Fresh Produce Export Services?
              </h2>

              <p className="text-white-50 mb-0">
                Contact Khushi International for products, packaging and
                export requirements.
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

export default Services;