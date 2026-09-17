import { Link } from "react-router-dom";

const Vegetables = () => {
  const vegetables = [
    {
      name: "Okra / Bhindi",
      category: "Fresh Vegetable",
      icon: "bi-flower1",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian okra selected and handled for international market requirements.",
    },
    {
      name: "Green Chilli",
      category: "Fresh Vegetable",
      icon: "bi-fire",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh green chillies selected with focus on freshness, appearance and careful handling.",
    },
    {
      name: "Bottle Gourd",
      category: "Dudhi",
      icon: "bi-basket2",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh bottle gourd supplied for customers requiring quality Indian vegetables.",
    },
    {
      name: "Parwal",
      category: "Pointed Gourd",
      icon: "bi-leaf",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian parwal carefully selected for fresh produce supply requirements.",
    },
    {
      name: "Tindora",
      category: "Ivy Gourd",
      icon: "bi-leaf-fill",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh tindora sourced and handled with attention to product quality and freshness.",
    },
    {
      name: "Arvi",
      category: "Taro Root",
      icon: "bi-basket",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85",
      description:
        "Indian arvi selected for customers looking for fresh and dependable produce supply.",
    },
    {
      name: "Cabbage",
      category: "Leafy Vegetable",
      icon: "bi-flower2",
      image:
        "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh cabbage selected with attention to appearance, freshness and handling.",
    },
    {
      name: "Suran",
      category: "Elephant Foot Yam",
      icon: "bi-basket3",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=85",
      description:
        "Indian suran prepared for customers requiring traditional Indian vegetable varieties.",
    },
    {
      name: "Raw Mango",
      category: "Green Mango",
      icon: "bi-leaf-fill",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh raw mango selected for international customers and fresh produce requirements.",
    },
  ];

  const process = [
    {
      icon: "bi-basket2-fill",
      title: "Sourcing",
      text: "Fresh produce selection",
    },
    {
      icon: "bi-search",
      title: "Inspection",
      text: "Quality-focused checking",
    },
    {
      icon: "bi-box-seam-fill",
      title: "Packaging",
      text: "Careful export handling",
    },
    {
      icon: "bi-airplane-engines-fill",
      title: "Shipment",
      text: "Export coordination",
    },
  ];

  return (
    <>
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="veg-page-hero py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-decoration-none text-success"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="breadcrumb-item">
                    <Link
                      to="/products"
                      className="text-decoration-none text-success"
                    >
                      Products
                    </Link>
                  </li>

                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    Vegetables
                  </li>
                </ol>
              </nav>

              <span className="badge rounded-pill bg-success-subtle text-success border border-success-subtle px-3 py-2 mb-3">
                <i className="bi bi-basket2-fill me-2"></i>
                FRESH VEGETABLES
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">
                Fresh Indian
                <span className="d-block text-success">
                  Vegetables.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                A diverse range of fresh Indian vegetables selected
                and handled for international market requirements.
              </p>

              <div className="d-flex flex-wrap gap-2 gap-md-3">
                <a
                  href="#vegetable-range"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Range
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

              {/* Bootstrap Cards */}
              <div className="row g-3 mt-4">

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-leaf-fill text-success fs-4"></i>

                      <h6 className="fw-bold mb-0 mt-2">
                        Fresh
                      </h6>

                      <small className="text-secondary">
                        Selection
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-patch-check-fill text-success fs-4"></i>

                      <h6 className="fw-bold mb-0 mt-2">
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

                      <h6 className="fw-bold mb-0 mt-2">
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
              <div className="position-relative">

                <div className="card border-0 shadow-lg rounded-5 overflow-hidden veg-hero-image">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1300&q=85"
                    alt="Fresh Indian vegetables"
                    className="card-img w-100 h-100"
                  />

                  <div className="card-img-overlay d-flex align-items-end p-4 p-md-5 veg-image-overlay">
                    <div>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                        FROM INDIA
                      </span>

                      <h3 className="text-white fw-bold mb-1">
                        Fresh Vegetable Range
                      </h3>

                      <p className="text-white-50 mb-0">
                        Freshness • Quality • Export
                      </p>
                    </div>
                  </div>
                </div>


                {/* Floating Bootstrap Card */}
                <div className="card border-0 shadow-lg rounded-4 position-absolute bottom-0 start-0 m-3 m-md-4">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center gap-3">

                      <span className="d-flex align-items-center justify-content-center bg-success text-white rounded-circle flex-shrink-0 veg-icon-circle">
                        <i className="bi bi-airplane-engines-fill"></i>
                      </span>

                      <div>
                        <small className="text-secondary d-block">
                          EXPORT FOCUS
                        </small>

                        <strong>
                          International Markets
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


      {/* ==================================================
          VEGETABLE CATALOGUE
      ================================================== */}
      <section
        id="vegetable-range"
        className="py-5 bg-white"
      >
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">
              <span className="text-success fw-bold small">
                OUR VEGETABLE RANGE
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-2">
                Freshness in
                <span className="text-success">
                  {" "}Every Selection.
                </span>
              </h2>

              <p className="text-secondary mb-0">
                Explore some of the Indian vegetables available
                through Khushi International.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="alert alert-success border-0 rounded-4 mb-0">
                <div className="d-flex gap-3">
                  <i className="bi bi-info-circle-fill fs-4"></i>

                  <div>
                    <strong className="d-block">
                      Product Availability
                    </strong>

                    <small>
                      Availability may vary according to season
                      and market requirements.
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* PRODUCTS */}
          <div className="row g-4">

            {vegetables.map((vegetable, index) => (
              <div
                className="col-sm-6 col-lg-4"
                key={vegetable.name}
              >
                <div className="card h-100 border rounded-4 overflow-hidden shadow-sm veg-product-card">

                  {/* Image */}
                  <div className="position-relative veg-product-image">

                    <img
                      src={vegetable.image}
                      alt={vegetable.name}
                      loading="lazy"
                      className="card-img-top w-100 h-100"
                    />

                    <span className="position-absolute top-0 start-0 m-3 badge bg-white text-success shadow-sm rounded-pill px-3 py-2">
                      {vegetable.category}
                    </span>

                    <span className="position-absolute top-0 end-0 m-3 badge bg-dark rounded-pill px-3 py-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column">

                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">

                      <div>
                        <small className="text-success fw-bold">
                          INDIAN PRODUCE
                        </small>

                        <h3 className="h4 fw-bold mb-0 mt-1">
                          {vegetable.name}
                        </h3>
                      </div>

                      <span className="bg-success-subtle text-success rounded-3 p-2">
                        <i className={`bi ${vegetable.icon} fs-5`}></i>
                      </span>

                    </div>

                    <p className="text-secondary small lh-lg">
                      {vegetable.description}
                    </p>


                    {/* Bootstrap Badges */}
                    <div className="d-flex flex-wrap gap-2 mb-4">

                      <span className="badge bg-light text-secondary border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-check-circle-fill text-success me-1"></i>
                        Fresh
                      </span>

                      <span className="badge bg-light text-secondary border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-box-seam-fill text-success me-1"></i>
                        Export
                      </span>

                      <span className="badge bg-light text-secondary border rounded-pill fw-normal px-3 py-2">
                        <i className="bi bi-globe2 text-success me-1"></i>
                        Global
                      </span>

                    </div>


                    {/* Buttons */}
                    <div className="border-top pt-3 mt-auto">

                      <div className="d-grid gap-2 d-sm-flex">

                        <a
                          href={`https://wa.me/917317422100?text=${encodeURIComponent(
                            `Hello Khushi International, I would like to enquire about ${vegetable.name}.`
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
                          Details
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
              Need another Indian vegetable not listed here?
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


      {/* ==================================================
          EXPORT PROCESS
      ================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">

          <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              OUR APPROACH
            </span>

            <h2 className="display-5 fw-bold mt-3">
              From Fresh Produce
              <span className="text-success">
                {" "}to Shipment.
              </span>
            </h2>

            <p className="text-secondary fs-5 mt-3">
              A coordinated approach for handling fresh vegetables
              for international supply.
            </p>
          </div>


          <div className="row g-4">

            {process.map((item, index) => (
              <div
                className="col-sm-6 col-lg-3"
                key={item.title}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center">
                  <div className="card-body p-4">

                    <div className="position-relative d-inline-block mb-4">

                      <span className="d-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle veg-process-icon">
                        <i className={`bi ${item.icon} fs-4`}></i>
                      </span>

                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-dark">
                        {index + 1}
                      </span>

                    </div>

                    <h5 className="fw-bold">
                      {item.title}
                    </h5>

                    <p className="text-secondary small mb-0">
                      {item.text}
                    </p>

                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          QUALITY SECTION
      ================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">

          <div className="card border-0 shadow rounded-5 overflow-hidden">

            <div className="row g-0 align-items-stretch">

              <div className="col-lg-5">
                <img
                  src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh vegetables"
                  loading="lazy"
                  className="w-100 h-100 veg-quality-image"
                />
              </div>


              <div className="col-lg-7">
                <div className="card-body p-4 p-md-5">

                  <span className="text-success fw-bold small">
                    FRESHNESS MATTERS
                  </span>

                  <h2 className="display-6 fw-bold mt-2 mb-3">
                    Care at Every
                    <span className="text-success">
                      {" "}Stage.
                    </span>
                  </h2>

                  <p className="text-secondary lh-lg mb-4">
                    Fresh vegetables require careful handling.
                    Our approach focuses on sourcing, inspection,
                    packaging and coordination throughout the
                    export process.
                  </p>


                  {/* Bootstrap List Group */}
                  <div className="list-group list-group-flush">

                    <div className="list-group-item px-0 py-3 bg-transparent">
                      <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>

                        <span>
                          Fresh produce selection and sourcing
                        </span>
                      </div>
                    </div>

                    <div className="list-group-item px-0 py-3 bg-transparent">
                      <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>

                        <span>
                          Quality-focused handling and inspection
                        </span>
                      </div>
                    </div>

                    <div className="list-group-item px-0 py-3 bg-transparent">
                      <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>

                        <span>
                          Export packaging according to requirements
                        </span>
                      </div>
                    </div>

                    <div className="list-group-item px-0 py-3 bg-transparent">
                      <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>

                        <span>
                          Shipment and export coordination
                        </span>
                      </div>
                    </div>

                  </div>

                  <Link
                    to="/services"
                    className="btn btn-dark rounded-pill px-4 mt-4"
                  >
                    Explore Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          OTHER CATEGORIES
      ================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-lg-4">

          <div className="row align-items-center mb-4">

            <div className="col-lg-7">
              <span className="text-success fw-bold small">
                MORE PRODUCTS
              </span>

              <h2 className="display-6 fw-bold mt-2">
                Explore Other
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
                      src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=85"
                      alt="Fresh Fruits"
                      loading="lazy"
                      className="w-100 h-100 veg-category-small-image"
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

                      <p className="small text-secondary">
                        Explore our Indian fresh fruit range.
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


            {/* SPICES */}
            <div className="col-md-6">

              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                <div className="row g-0 h-100">

                  <div className="col-5">
                    <img
                      src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=85"
                      alt="Indian Spices"
                      loading="lazy"
                      className="w-100 h-100 veg-category-small-image"
                    />
                  </div>

                  <div className="col-7">

                    <div className="card-body p-4">

                      <span className="badge bg-warning-subtle text-warning-emphasis rounded-pill">
                        Spices
                      </span>

                      <h4 className="fw-bold mt-3">
                        Indian Spices
                      </h4>

                      <p className="small text-secondary">
                        Explore selected Indian spices.
                      </p>

                      <Link
                        to="/products/spices"
                        className="btn btn-outline-dark rounded-pill"
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


      {/* ==================================================
          CTA
      ================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-lg-4">

          <div className="card border-0 rounded-5 overflow-hidden veg-final-cta">

            <div className="card-body p-4 p-md-5">

              <div className="row align-items-center g-4">

                <div className="col-lg-8">

                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                    VEGETABLE ENQUIRY
                  </span>

                  <h2 className="display-6 fw-bold text-white mb-3">
                    Looking for Fresh Indian Vegetables?
                  </h2>

                  <p className="text-white-50 fs-5 mb-0">
                    Contact us for current availability,
                    product requirements and export enquiries.
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

          </div>

        </div>
      </section>
    </>
  );
};

export default Vegetables;