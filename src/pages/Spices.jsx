import { Link } from "react-router-dom";

const Spices = () => {
  const spices = [
    {
      name: "Turmeric",
      subName: "Haldi",
      icon: "bi-flower1",
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=85",
      description:
        "Selected Indian turmeric for customers requiring quality Indian spices and produce.",
    },
    {
      name: "Green Chilli",
      subName: "Fresh Chilli",
      icon: "bi-fire",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian green chillies selected with focus on freshness and careful handling.",
    },
    {
      name: "Coriander",
      subName: "Dhaniya",
      icon: "bi-leaf-fill",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85",
      description:
        "Selected coriander representing the aroma and character of Indian spices.",
    },
    {
      name: "Cumin",
      subName: "Jeera",
      icon: "bi-flower2",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=85",
      description:
        "Indian cumin selected for business and international market requirements.",
    },
    {
      name: "Ginger",
      subName: "Adrak",
      icon: "bi-basket2-fill",
      image:
        "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian ginger selected and handled with attention to product quality.",
    },
    {
      name: "Red Chilli",
      subName: "Lal Mirch",
      icon: "bi-fire",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=85",
      description:
        "Selected Indian red chilli for customers requiring traditional Indian spice products.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
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

                  <li className="breadcrumb-item">
                    <Link
                      to="/products"
                      className="text-success text-decoration-none"
                    >
                      Products
                    </Link>
                  </li>

                  <li className="breadcrumb-item active">
                    Spices
                  </li>
                </ol>
              </nav>

              <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-flower1 me-2"></i>
                INDIAN SPICES
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">
                Authentic Indian
                <span className="d-block text-success">
                  Spices & Flavours.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Explore selected Indian spices supplied for customers
                looking for quality, aroma and dependable business supply.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#spice-range"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Spices
                  <i className="bi bi-arrow-down ms-2"></i>
                </a>

                <a
                  href="https://wa.me/917317422100"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success btn-lg rounded-pill px-4"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Enquire
                </a>
              </div>

              {/* Bootstrap Stats */}
              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-flower1 text-warning fs-4"></i>
                      <h6 className="fw-bold mt-2 mb-0">
                        Indian
                      </h6>
                      <small className="text-secondary">
                        Origin
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-patch-check-fill text-success fs-4"></i>
                      <h6 className="fw-bold mt-2 mb-0">
                        Quality
                      </h6>
                      <small className="text-secondary">
                        Focus
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-globe2 text-success fs-4"></i>
                      <h6 className="fw-bold mt-2 mb-0">
                        Global
                      </h6>
                      <small className="text-secondary">
                        Supply
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
                <div className="ratio ratio-4x3">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1300&q=85"
                    alt="Indian spices"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                <div className="card-body bg-dark text-white p-4">
                  <div className="row align-items-center g-3">
                    <div className="col">
                      <small className="text-warning fw-bold">
                        FROM INDIA
                      </small>

                      <h4 className="fw-bold mb-1 mt-1">
                        Selected Indian Spices
                      </h4>

                      <p className="text-white-50 mb-0">
                        Quality • Aroma • Supply
                      </p>
                    </div>

                    <div className="col-auto">
                      <span className="d-flex align-items-center justify-content-center bg-success rounded-circle p-3">
                        <i className="bi bi-globe2 fs-4"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SPICE RANGE ================= */}
      <section
        id="spice-range"
        className="py-5 bg-white"
      >
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">
            <div className="col-lg-7">
              <span className="text-success fw-bold small">
                OUR SPICE RANGE
              </span>

              <h2 className="display-5 fw-bold mt-2">
                Explore Selected
                <span className="text-success">
                  {" "}Indian Spices.
                </span>
              </h2>

              <p className="text-secondary mb-0">
                Contact our team for current availability and
                specific product requirements.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="alert alert-warning border-0 rounded-4 mb-0">
                <div className="d-flex gap-3">
                  <i className="bi bi-info-circle-fill fs-4"></i>

                  <div>
                    <strong className="d-block">
                      Business Enquiry
                    </strong>

                    <small>
                      Product availability and specifications
                      can vary according to requirements.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Bootstrap Product Cards */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">

            {spices.map((spice, index) => (
              <div className="col" key={spice.name}>

                <div className="card h-100 border shadow-sm rounded-4 overflow-hidden">

                  <div className="ratio ratio-4x3 position-relative">

                    <img
                      src={spice.image}
                      alt={spice.name}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover"
                    />

                    <span className="position-absolute top-0 start-0 m-3 badge bg-warning text-dark rounded-pill px-3 py-2 w-auto h-auto">
                      {spice.subName}
                    </span>

                    <span className="position-absolute top-0 end-0 m-3 badge bg-dark rounded-pill px-3 py-2 w-auto h-auto">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="card-body p-4 d-flex flex-column">

                    <div className="d-flex align-items-start justify-content-between gap-3">

                      <div>
                        <small className="text-success fw-bold">
                          INDIAN SPICE
                        </small>

                        <h3 className="h4 fw-bold mt-1 mb-0">
                          {spice.name}
                        </h3>
                      </div>

                      <span className="bg-warning-subtle text-warning-emphasis rounded-3 p-3">
                        <i className={`bi ${spice.icon}`}></i>
                      </span>

                    </div>

                    <p className="text-secondary small lh-lg mt-3">
                      {spice.description}
                    </p>


                    {/* Bootstrap badges */}
                    <div className="d-flex flex-wrap gap-2 mb-4">

                      <span className="badge bg-light text-dark border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-check-circle-fill text-success me-1"></i>
                        Selected
                      </span>

                      <span className="badge bg-light text-dark border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-box-seam-fill text-success me-1"></i>
                        Export
                      </span>

                      <span className="badge bg-light text-dark border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-globe2 text-success me-1"></i>
                        Global
                      </span>

                    </div>


                    {/* Bootstrap buttons */}
                    <div className="border-top pt-3 mt-auto">
                      <div className="d-grid gap-2 d-sm-flex">

                        <a
                          href={`https://wa.me/917317422100?text=${encodeURIComponent(
                            `Hello Khushi International, I would like to enquire about ${spice.name}.`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-success rounded-pill flex-grow-1"
                        >
                          <i className="bi bi-whatsapp me-2"></i>
                          Enquire
                        </a>

                        <Link
                          to="/contact"
                          className="btn btn-outline-dark rounded-pill px-3"
                        >
                          Contact
                          <i className="bi bi-arrow-up-right ms-2"></i>
                        </Link>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-5">
            <p className="text-secondary mb-3">
              Looking for another Indian spice?
            </p>

            <Link
              to="/contact"
              className="btn btn-outline-success rounded-pill px-4"
            >
              Ask About Other Products
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

        </div>
      </section>


      {/* ================= WHY OUR SPICES ================= */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">

          <div className="text-center mx-auto mb-5">
            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              OUR APPROACH
            </span>

            <h2 className="display-5 fw-bold mt-3">
              Quality-Focused
              <span className="text-success">
                {" "}Supply.
              </span>
            </h2>

            <p className="text-secondary fs-5">
              Attention to the important stages of product supply.
            </p>
          </div>


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <span className="d-inline-flex bg-success-subtle text-success rounded-3 p-3 mb-3">
                    <i className="bi bi-basket2-fill fs-4"></i>
                  </span>

                  <h5 className="fw-bold">
                    Product Selection
                  </h5>

                  <p className="text-secondary small mb-0">
                    Selected products according to business requirements.
                  </p>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <span className="d-inline-flex bg-success-subtle text-success rounded-3 p-3 mb-3">
                    <i className="bi bi-patch-check-fill fs-4"></i>
                  </span>

                  <h5 className="fw-bold">
                    Quality Focus
                  </h5>

                  <p className="text-secondary small mb-0">
                    Attention to product quality and customer requirements.
                  </p>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <span className="d-inline-flex bg-success-subtle text-success rounded-3 p-3 mb-3">
                    <i className="bi bi-box-seam-fill fs-4"></i>
                  </span>

                  <h5 className="fw-bold">
                    Packaging
                  </h5>

                  <p className="text-secondary small mb-0">
                    Careful packing and handling for product movement.
                  </p>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <span className="d-inline-flex bg-success-subtle text-success rounded-3 p-3 mb-3">
                    <i className="bi bi-airplane-engines-fill fs-4"></i>
                  </span>

                  <h5 className="fw-bold">
                    Export Support
                  </h5>

                  <p className="text-secondary small mb-0">
                    Support for international supply and export coordination.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PACKAGING ================= */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="card border-0 shadow rounded-5 overflow-hidden">

            <div className="row g-0">

              <div className="col-lg-5">

                <div className="ratio ratio-1x1 h-100">

                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85"
                    alt="Indian spice packaging"
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                  />

                </div>

              </div>


              <div className="col-lg-7">

                <div className="card-body p-4 p-md-5">

                  <span className="text-success fw-bold small">
                    PRODUCT HANDLING
                  </span>

                  <h2 className="display-6 fw-bold mt-2 mb-3">
                    Careful Handling &
                    <span className="text-success">
                      {" "}Packaging.
                    </span>
                  </h2>

                  <p className="text-secondary lh-lg">
                    Product handling and packaging are important parts
                    of international supply. Requirements can be
                    coordinated according to the product and customer.
                  </p>


                  {/* Bootstrap list group */}
                  <ul className="list-group list-group-flush mb-4">

                    <li className="list-group-item px-0 py-3">
                      <i className="bi bi-check-circle-fill text-success me-3"></i>
                      Product-focused handling
                    </li>

                    <li className="list-group-item px-0 py-3">
                      <i className="bi bi-check-circle-fill text-success me-3"></i>
                      Packaging according to requirements
                    </li>

                    <li className="list-group-item px-0 py-3">
                      <i className="bi bi-check-circle-fill text-success me-3"></i>
                      Export documentation support
                    </li>

                    <li className="list-group-item px-0 py-3">
                      <i className="bi bi-check-circle-fill text-success me-3"></i>
                      Shipment coordination
                    </li>

                  </ul>

                  <Link
                    to="/services"
                    className="btn btn-dark rounded-pill px-4"
                  >
                    View Our Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= OTHER PRODUCTS ================= */}
      <section className="py-5 bg-light">
        <div className="container py-lg-4">

          <div className="row align-items-end mb-4">
            <div className="col-lg-8">
              <span className="text-success fw-bold small">
                EXPLORE MORE
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Other Product
                <span className="text-success">
                  {" "}Categories.
                </span>
              </h2>
            </div>
          </div>


          <div className="row g-4">

            {/* FRUITS */}
            <div className="col-md-6">

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                <div className="row g-0 h-100">

                  <div className="col-5">
                    <img
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=85"
                      alt="Fresh Fruits"
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <div className="col-7">

                    <div className="card-body p-4">

                      <span className="badge bg-success-subtle text-success rounded-pill">
                        Fruits
                      </span>

                      <h4 className="fw-bold mt-3">
                        Fresh Fruits
                      </h4>

                      <p className="text-secondary small">
                        Explore our fresh Indian fruit range.
                      </p>

                      <Link
                        to="/products/fruits"
                        className="btn btn-outline-success rounded-pill"
                      >
                        Explore
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>

                    </div>

                  </div>
                </div>
              </div>
            </div>


            {/* VEGETABLES */}
            <div className="col-md-6">

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                <div className="row g-0 h-100">

                  <div className="col-5">

                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
                      alt="Fresh Vegetables"
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover"
                    />

                  </div>

                  <div className="col-7">

                    <div className="card-body p-4">

                      <span className="badge bg-success-subtle text-success rounded-pill">
                        Vegetables
                      </span>

                      <h4 className="fw-bold mt-3">
                        Fresh Vegetables
                      </h4>

                      <p className="text-secondary small">
                        Explore our Indian vegetable range.
                      </p>

                      <Link
                        to="/products/vegetables"
                        className="btn btn-outline-success rounded-pill"
                      >
                        Explore
                        <i className="bi bi-arrow-right ms-2"></i>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-5 bg-dark">
        <div className="container py-4 py-lg-5">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                BUSINESS ENQUIRY
              </span>

              <h2 className="display-5 text-white fw-bold">
                Looking for Indian Spices?
              </h2>

              <p className="text-white-50 fs-5 mb-0">
                Contact our team for product availability,
                requirements and export enquiries.
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
                  Enquire Now
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Spices;