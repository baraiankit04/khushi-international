import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "bi-patch-check-fill",
      number: "01",
      title: "Quality Control",
      text: "Fresh produce is carefully checked with focus on quality, freshness, appearance and customer requirements.",
      points: [
        "Product quality checks",
        "Freshness focus",
        "Selection support",
      ],
    },
    {
      icon: "bi-tree-fill",
      number: "02",
      title: "Contract Farming",
      text: "Coordination with farming and sourcing networks to support fresh produce requirements for customers.",
      points: [
        "Farm coordination",
        "Product planning",
        "Sourcing support",
      ],
    },
    {
      icon: "bi-building-fill-gear",
      number: "03",
      title: "Packhouse Services",
      text: "Fresh produce handling, sorting and preparation support before products move toward export shipment.",
      points: [
        "Sorting & handling",
        "Product preparation",
        "Packing support",
      ],
    },
    {
      icon: "bi-box-seam-fill",
      number: "04",
      title: "Export Packaging",
      text: "Packaging support according to product characteristics, customer requirements and transportation needs.",
      points: [
        "Product-focused packing",
        "Careful handling",
        "Export preparation",
      ],
    },
    {
      icon: "bi-file-earmark-check-fill",
      number: "05",
      title: "Export Documentation",
      text: "Support for documentation and coordination required during the fresh produce export process.",
      points: [
        "Document coordination",
        "Shipment paperwork",
        "Export support",
      ],
    },
    {
      icon: "bi-airplane-engines-fill",
      number: "06",
      title: "Logistics Support",
      text: "Coordination support for moving fresh produce from preparation through international shipment.",
      points: [
        "Shipment coordination",
        "Logistics support",
        "International supply",
      ],
    },
  ];

  const process = [
    {
      icon: "bi-chat-square-text-fill",
      step: "01",
      title: "Requirement",
      text: "Understanding product and market requirements.",
    },
    {
      icon: "bi-basket2-fill",
      step: "02",
      title: "Sourcing",
      text: "Coordinating suitable fresh produce sourcing.",
    },
    {
      icon: "bi-patch-check-fill",
      step: "03",
      title: "Quality",
      text: "Attention to product quality and selection.",
    },
    {
      icon: "bi-box-seam-fill",
      step: "04",
      title: "Packaging",
      text: "Preparing produce according to requirements.",
    },
    {
      icon: "bi-file-earmark-text-fill",
      step: "05",
      title: "Documents",
      text: "Supporting export documentation and coordination.",
    },
    {
      icon: "bi-airplane-engines-fill",
      step: "06",
      title: "Shipment",
      text: "Coordinating the product for international movement.",
    },
  ];

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
                    Services
                  </li>

                </ol>
              </nav>

              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-gear-fill me-2"></i>
                OUR SERVICES
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">
                Export Support From
                <span className="d-block text-success">
                  Sourcing to Shipment.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Khushi International supports fresh produce requirements
                through quality-focused sourcing, handling, packaging,
                documentation and export coordination.
              </p>

              <div className="d-flex flex-wrap gap-3">

                <a
                  href="#our-services"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Services
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


            {/* RIGHT */}
            <div className="col-lg-5">

              <div className="card border-0 shadow-lg rounded-5 overflow-hidden service-image-hover">

                <div className="ratio ratio-4x3 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                    alt="Export logistics services"
                    className="w-100 h-100 object-fit-cover service-hover-img"
                  />

                </div>

                <div className="card-body bg-dark text-white p-4">

                  <div className="d-flex align-items-center gap-3">

                    <span className="bg-success rounded-circle p-3">
                      <i className="bi bi-globe2 fs-4"></i>
                    </span>

                    <div>

                      <small className="text-warning fw-bold">
                        KHUSHI INTERNATIONAL
                      </small>

                      <h5 className="fw-bold mb-0 mt-1">
                        Fresh Produce Export Support
                      </h5>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>


          {/* ================= MINI CARDS ================= */}
          <div className="row row-cols-2 row-cols-md-4 g-3 mt-4">

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 service-mini-hover">
                <div className="card-body p-3 d-flex align-items-center gap-3">

                  <i className="bi bi-patch-check-fill text-success fs-3"></i>

                  <div>
                    <strong className="d-block">
                      Quality
                    </strong>

                    <small className="text-secondary">
                      Focused
                    </small>
                  </div>

                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 service-mini-hover">
                <div className="card-body p-3 d-flex align-items-center gap-3">

                  <i className="bi bi-box-seam-fill text-success fs-3"></i>

                  <div>
                    <strong className="d-block">
                      Export
                    </strong>

                    <small className="text-secondary">
                      Packaging
                    </small>
                  </div>

                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 service-mini-hover">
                <div className="card-body p-3 d-flex align-items-center gap-3">

                  <i className="bi bi-file-earmark-check-fill text-success fs-3"></i>

                  <div>
                    <strong className="d-block">
                      Documents
                    </strong>

                    <small className="text-secondary">
                      Support
                    </small>
                  </div>

                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100 service-mini-hover">
                <div className="card-body p-3 d-flex align-items-center gap-3">

                  <i className="bi bi-airplane-engines-fill text-success fs-3"></i>

                  <div>
                    <strong className="d-block">
                      Global
                    </strong>

                    <small className="text-secondary">
                      Shipment
                    </small>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section
        id="our-services"
        className="py-5 bg-white"
      >
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">

              <span className="text-success fw-bold small">
                WHAT WE DO
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-3">
                Complete Support for
                <span className="text-success">
                  {" "}Fresh Produce.
                </span>
              </h2>

              <p className="text-secondary fs-5 mb-0">
                Services designed around the requirements of fresh
                produce sourcing and international supply.
              </p>

            </div>


            <div className="col-lg-5">

              <div className="alert alert-success border-0 rounded-4 mb-0">

                <div className="d-flex gap-3">

                  <i className="bi bi-info-circle-fill fs-4"></i>

                  <div>

                    <strong className="d-block">
                      Need a Specific Service?
                    </strong>

                    <small>
                      Contact our team to discuss your product
                      and export requirements.
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* MAIN SERVICE CARDS */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">

            {services.map((service) => (

              <div className="col" key={service.title}>

                <div className="card h-100 border shadow-sm rounded-4 service-hover-card">

                  <div className="card-body p-4 p-lg-5 d-flex flex-column">

                    <div className="d-flex justify-content-between align-items-start mb-4">

                      <span className="d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-4 p-3 service-icon-hover">
                        <i className={`bi ${service.icon} fs-3`}></i>
                      </span>

                      <span className="badge bg-dark rounded-pill px-3 py-2">
                        {service.number}
                      </span>

                    </div>


                    <h3 className="h4 fw-bold mb-3">
                      {service.title}
                    </h3>


                    <p className="text-secondary lh-lg">
                      {service.text}
                    </p>


                    <ul className="list-group list-group-flush mb-4">

                      {service.points.map((point) => (

                        <li
                          className="list-group-item px-0 py-2 bg-transparent border-0"
                          key={point}
                        >
                          <i className="bi bi-check-circle-fill text-success me-2"></i>

                          <small>
                            {point}
                          </small>
                        </li>

                      ))}

                    </ul>


                    <div className="mt-auto">

                      <Link
                        to="/contact"
                        className="btn btn-outline-success rounded-pill px-4"
                      >
                        Enquire
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-5 bg-dark">

        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                HOW WE WORK
              </span>

              <h2 className="display-5 fw-bold text-white">
                From Requirement

                <span className="d-block text-warning">
                  to Export Shipment.
                </span>

              </h2>

            </div>


            <div className="col-lg-5">

              <p className="text-white-50 fs-5 mb-0">
                A clear process to support fresh produce
                requirements from initial enquiry through shipment.
              </p>

            </div>

          </div>


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

            {process.map((item) => (

              <div className="col" key={item.title}>

                <div className="card h-100 bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 service-process-hover">

                  <div className="card-body p-4 text-white">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                      <span className="bg-success rounded-circle p-3">
                        <i className={`bi ${item.icon} fs-4`}></i>
                      </span>

                      <span className="display-6 fw-bold text-white-50">
                        {item.step}
                      </span>

                    </div>


                    <h4 className="fw-bold text-white mb-3">
                      {item.title}
                    </h4>

                    <p className="text-white-50 mb-0">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= EXPORT SUPPORT ================= */}
      <section className="py-5 bg-light">

        <div className="container py-lg-5">

          <div className="card border-0 shadow rounded-5 overflow-hidden">

            <div className="row g-0">

              {/* IMAGE */}
              <div className="col-lg-6">

                <div className="ratio ratio-4x3 h-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=85"
                    alt="International logistics"
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover service-hover-img"
                  />

                </div>

              </div>


              {/* CONTENT */}
              <div className="col-lg-6">

                <div className="card-body p-4 p-md-5">

                  <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                    EXPORT SUPPORT
                  </span>

                  <h2 className="display-6 fw-bold mt-3 mb-3">
                    More Than Just
                    <span className="text-success">
                      {" "}Product Supply.
                    </span>
                  </h2>

                  <p className="text-secondary lh-lg">
                    Fresh produce exports involve multiple stages.
                    Khushi International supports coordination across
                    product preparation, packaging, documentation
                    and shipment requirements.
                  </p>


                  <div className="row g-3 mt-2">

                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 service-detail-hover">

                        <div className="card-body p-3">

                          <i className="bi bi-file-earmark-text-fill text-success fs-4"></i>

                          <h6 className="fw-bold mt-2">
                            Documentation
                          </h6>

                          <small className="text-secondary">
                            Export documentation support.
                          </small>

                        </div>

                      </div>

                    </div>


                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 service-detail-hover">

                        <div className="card-body p-3">

                          <i className="bi bi-box-seam-fill text-success fs-4"></i>

                          <h6 className="fw-bold mt-2">
                            Packaging
                          </h6>

                          <small className="text-secondary">
                            Product-focused export packing.
                          </small>

                        </div>

                      </div>

                    </div>


                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 service-detail-hover">

                        <div className="card-body p-3">

                          <i className="bi bi-truck text-success fs-4"></i>

                          <h6 className="fw-bold mt-2">
                            Logistics
                          </h6>

                          <small className="text-secondary">
                            Movement and shipment support.
                          </small>

                        </div>

                      </div>

                    </div>


                    <div className="col-sm-6">

                      <div className="card border rounded-4 h-100 service-detail-hover">

                        <div className="card-body p-3">

                          <i className="bi bi-globe2 text-success fs-4"></i>

                          <h6 className="fw-bold mt-2">
                            International
                          </h6>

                          <small className="text-secondary">
                            Global market supply focus.
                          </small>

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


      {/* ================= PRODUCT CATEGORIES ================= */}
      <section className="py-5 bg-white">

        <div className="container py-lg-4">

          <div className="text-center mb-5">

            <span className="text-success fw-bold small">
              OUR PRODUCTS
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Explore Our
              <span className="text-success">
                {" "}Product Range.
              </span>
            </h2>

          </div>


          <div className="row g-4">

            {/* FRUITS */}
            <div className="col-md-4">

              <Link
                to="/products/fruits"
                className="text-decoration-none"
              >

                <div className="card border shadow-sm rounded-4 h-100 service-product-hover">

                  <div className="card-body p-4">

                    <span className="bg-success-subtle text-success rounded-circle d-inline-flex p-3 mb-3">
                      <i className="bi bi-apple fs-4"></i>
                    </span>

                    <h4 className="text-dark fw-bold">
                      Fresh Fruits
                    </h4>

                    <p className="text-secondary small">
                      Explore our selected Indian fresh fruit range.
                    </p>

                    <span className="text-success fw-semibold">
                      View Products
                      <i className="bi bi-arrow-right ms-2"></i>
                    </span>

                  </div>

                </div>

              </Link>

            </div>


            {/* VEGETABLES */}
            <div className="col-md-4">

              <Link
                to="/products/vegetables"
                className="text-decoration-none"
              >

                <div className="card border shadow-sm rounded-4 h-100 service-product-hover">

                  <div className="card-body p-4">

                    <span className="bg-success-subtle text-success rounded-circle d-inline-flex p-3 mb-3">
                      <i className="bi bi-basket2-fill fs-4"></i>
                    </span>

                    <h4 className="text-dark fw-bold">
                      Fresh Vegetables
                    </h4>

                    <p className="text-secondary small">
                      Explore our Indian fresh vegetable range.
                    </p>

                    <span className="text-success fw-semibold">
                      View Products
                      <i className="bi bi-arrow-right ms-2"></i>
                    </span>

                  </div>

                </div>

              </Link>

            </div>


            {/* SPICES */}
            <div className="col-md-4">

              <Link
                to="/products/spices"
                className="text-decoration-none"
              >

                <div className="card border shadow-sm rounded-4 h-100 service-product-hover">

                  <div className="card-body p-4">

                    <span className="bg-warning-subtle text-warning-emphasis rounded-circle d-inline-flex p-3 mb-3">
                      <i className="bi bi-flower1 fs-4"></i>
                    </span>

                    <h4 className="text-dark fw-bold">
                      Indian Spices
                    </h4>

                    <p className="text-secondary small">
                      Explore selected Indian spices and flavours.
                    </p>

                    <span className="text-success fw-semibold">
                      View Products
                      <i className="bi bi-arrow-right ms-2"></i>
                    </span>

                  </div>

                </div>

              </Link>

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
                LET'S WORK TOGETHER
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Have an Export Requirement?
              </h2>

              <p className="text-white fs-5 opacity-75 mb-0">
                Talk to our team about fresh produce,
                packaging, documentation and shipment requirements.
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

export default Services;