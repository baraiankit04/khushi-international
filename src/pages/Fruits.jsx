import { Link } from "react-router-dom";

const Fruits = () => {
  const fruits = [
    {
      name: "Alphonso Mango",
      category: "Premium Mango",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=85",
      description:
        "Premium Indian mango known for its rich flavour, aroma and attractive colour.",
    },
    {
      name: "Pomegranate",
      category: "Fresh Fruit",
      image:
        "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh pomegranates selected with focus on appearance, freshness and market requirements.",
    },
    {
      name: "Guava (Peru)",
      category: "Fresh Fruit",
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian guava with characteristic flavour and carefully selected quality.",
    },
    {
      name: "Chikoo",
      category: "Sapota",
      image:
        "https://images.unsplash.com/photo-1615485925763-86786288908a?auto=format&fit=crop&w=800&q=85",
      description:
        "Naturally sweet Indian chikoo selected and handled for fresh produce supply.",
    },
    {
      name: "Banana",
      category: "Fresh Fruit",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh bananas sourced with attention to maturity, appearance and handling.",
    },
    {
      name: "Amla",
      category: "Indian Gooseberry",
      image:
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=85",
      description:
        "Fresh Indian amla selected for customers requiring quality Indian produce.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="fruit-page-hero py-5 overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small mb-4">
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

                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    Fresh Fruits
                  </li>
                </ol>
              </nav>

              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-apple me-2"></i>
                FRESH FRUITS
              </span>

              <h1 className="display-3 fw-bold lh-sm mb-4">
                Fresh Indian Fruits
                <span className="text-success d-block">
                  for Global Markets.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Explore selected Indian fruits sourced and handled
                with focus on freshness, quality and international
                market requirements.
              </p>

              <div className="d-flex flex-wrap gap-3">

                <a
                  href="#fruit-catalogue"
                  className="btn btn-success btn-lg rounded-pill px-4 fw-semibold"
                >
                  View Fruits
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


              {/* HERO INFO CARDS */}
              <div className="row g-3 mt-4">

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">

                      <i className="bi bi-basket2-fill text-success fs-4"></i>

                      <strong className="d-block mt-2">
                        Fresh
                      </strong>

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

                      <strong className="d-block mt-2">
                        Quality
                      </strong>

                      <small className="text-secondary">
                        Focus
                      </small>

                    </div>
                  </div>
                </div>


                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">

                      <i className="bi bi-airplane-engines-fill text-success fs-4"></i>

                      <strong className="d-block mt-2">
                        Export
                      </strong>

                      <small className="text-secondary">
                        Supply
                      </small>

                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* HERO IMAGE */}
            <div className="col-lg-6">

              <div className="position-relative ps-lg-4">

                <div className="card border-0 rounded-5 overflow-hidden shadow-lg fruit-hero-image">

                  <img
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1300&q=85"
                    alt="Fresh fruits"
                    className="w-100 h-100"
                  />

                  <div className="card-img-overlay d-flex align-items-end p-4 fruit-hero-overlay">

                    <div>
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-2">
                        Fresh From India
                      </span>

                      <h3 className="text-white fw-bold mb-1">
                        Selected Fresh Fruits
                      </h3>

                      <p className="text-white-50 mb-0">
                        Quality • Handling • Export
                      </p>
                    </div>

                  </div>
                </div>


                <div className="card border-0 shadow-lg rounded-4 fruit-hero-floating">

                  <div className="card-body p-3">

                    <div className="d-flex align-items-center gap-3">

                      <div className="fruit-floating-icon">
                        <i className="bi bi-globe2"></i>
                      </div>

                      <div>
                        <small className="text-secondary d-block">
                          MARKET FOCUS
                        </small>

                        <strong>
                          International Supply
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
          PRODUCT CATALOGUE
      ====================================================== */}
      <section
        id="fruit-catalogue"
        className="py-5 bg-white"
      >
        <div className="container py-lg-5">

          <div className="row align-items-end g-4 mb-5">

            <div className="col-lg-7">

              <span className="text-success small fw-bold">
                OUR FRUIT RANGE
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-0">
                Explore Fresh
                <span className="text-success">
                  {" "}Indian Fruits.
                </span>
              </h2>

            </div>


            <div className="col-lg-5">

              <p className="text-secondary lh-lg mb-0">
                Product availability can vary by season and market
                requirements. Contact our team for current availability
                and business enquiries.
              </p>

            </div>

          </div>


          {/* FRUIT CARDS */}
          <div className="row g-4">

            {fruits.map((fruit, index) => (

              <div
                className="col-md-6 col-xl-4"
                key={fruit.name}
              >

                <article className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 fruit-product-card">

                  {/* IMAGE */}
                  <div className="position-relative fruit-product-image">

                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      loading="lazy"
                      className="w-100 h-100"
                    />

                    <span className="position-absolute top-0 start-0 m-3 badge bg-white text-success shadow-sm rounded-pill px-3 py-2">
                      {fruit.category}
                    </span>

                    <span className="position-absolute top-0 end-0 m-3 badge bg-dark rounded-circle fruit-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* BODY */}
                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-start gap-3">

                      <div>
                        <small className="text-success fw-bold">
                          FRESH PRODUCE
                        </small>

                        <h3 className="h4 fw-bold mt-1 mb-0">
                          {fruit.name}
                        </h3>
                      </div>

                      <div className="fruit-leaf-icon">
                        <i className="bi bi-leaf-fill"></i>
                      </div>

                    </div>

                    <p className="text-secondary small lh-lg mt-3">
                      {fruit.description}
                    </p>


                    {/* FEATURES */}
                    <div className="row g-2 my-3">

                      <div className="col-6">
                        <div className="bg-light rounded-3 p-2 small">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Fresh
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="bg-light rounded-3 p-2 small">
                          <i className="bi bi-box-seam-fill text-success me-2"></i>
                          Export
                        </div>
                      </div>

                    </div>


                    <div className="border-top pt-3 mt-3">

                      <div className="d-flex gap-2">

                        <a
                          href={`https://wa.me/917317422100?text=${encodeURIComponent(
                            `Hello Khushi International, I would like to enquire about ${fruit.name}.`
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
                          className="btn btn-outline-dark rounded-circle fruit-arrow-btn"
                          aria-label={`Contact about ${fruit.name}`}
                        >
                          <i className="bi bi-arrow-up-right"></i>
                        </Link>

                      </div>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>


          <div className="text-center mt-5">

            <p className="text-secondary mb-3">
              Looking for another fruit or a specific market requirement?
            </p>

            <Link
              to="/contact"
              className="btn btn-outline-success rounded-pill px-4 py-2"
            >
              Ask About Other Products
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUALITY / PROCESS
      ====================================================== */}
      <section className="py-5 bg-light">

        <div className="container py-lg-5">

          <div className="card border-0 shadow-sm rounded-5 overflow-hidden">

            <div className="row g-0">

              {/* IMAGE */}
              <div className="col-lg-5">

                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh produce quality"
                  loading="lazy"
                  className="w-100 h-100 fruit-quality-image"
                />

              </div>


              {/* CONTENT */}
              <div className="col-lg-7">

                <div className="card-body p-4 p-md-5">

                  <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                    QUALITY APPROACH
                  </span>

                  <h2 className="display-6 fw-bold mt-3 mb-3">
                    Freshness Protected
                    <span className="text-success">
                      {" "}at Every Step.
                    </span>
                  </h2>

                  <p className="text-secondary lh-lg mb-4">
                    Fresh fruits require careful attention from sourcing
                    through handling and packaging. Our approach focuses
                    on supporting quality throughout the export process.
                  </p>


                  <div className="row g-3">

                    {[
                      {
                        icon: "bi-basket2-fill",
                        title: "Sourcing",
                        text: "Selection of suitable fresh produce.",
                      },
                      {
                        icon: "bi-search",
                        title: "Quality Check",
                        text: "Attention to quality and appearance.",
                      },
                      {
                        icon: "bi-box-seam-fill",
                        title: "Packaging",
                        text: "Careful handling for transportation.",
                      },
                      {
                        icon: "bi-airplane-engines-fill",
                        title: "Export",
                        text: "Coordination for international supply.",
                      },
                    ].map((item) => (

                      <div
                        className="col-sm-6"
                        key={item.title}
                      >

                        <div className="card border rounded-4 h-100">

                          <div className="card-body p-3">

                            <div className="d-flex gap-3">

                              <div className="bg-success-subtle text-success rounded-3 p-3 align-self-start">
                                <i className={`bi ${item.icon}`}></i>
                              </div>

                              <div>
                                <strong className="d-block">
                                  {item.title}
                                </strong>

                                <small className="text-secondary">
                                  {item.text}
                                </small>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>


                  <Link
                    to="/services"
                    className="btn btn-dark rounded-pill px-4 mt-4"
                  >
                    View Export Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OTHER CATEGORIES
      ====================================================== */}
      <section className="py-5 bg-white">

        <div className="container py-lg-4">

          <div className="text-center mb-5">

            <span className="text-success fw-bold small">
              EXPLORE MORE
            </span>

            <h2 className="display-6 fw-bold mt-2">
              More From Our
              <span className="text-success">
                {" "}Product Range
              </span>
            </h2>

          </div>


          <div className="row g-4 justify-content-center">

            {/* VEGETABLES */}
            <div className="col-md-6 col-lg-5">

              <Link
                to="/products/vegetables"
                className="text-decoration-none"
              >

                <div className="card border-0 rounded-5 overflow-hidden fruit-other-card">

                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85"
                    alt="Fresh Vegetables"
                    loading="lazy"
                    className="card-img"
                  />

                  <div className="card-img-overlay d-flex align-items-end p-4 fruit-other-overlay">

                    <div className="w-100">

                      <span className="text-warning small fw-bold">
                        EXPLORE CATEGORY
                      </span>

                      <div className="d-flex justify-content-between align-items-center">

                        <h3 className="text-white fw-bold mb-0">
                          Fresh Vegetables
                        </h3>

                        <span className="btn btn-light rounded-circle">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </Link>

            </div>


            {/* SPICES */}
            <div className="col-md-6 col-lg-5">

              <Link
                to="/products/spices"
                className="text-decoration-none"
              >

                <div className="card border-0 rounded-5 overflow-hidden fruit-other-card">

                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"
                    alt="Indian Spices"
                    loading="lazy"
                    className="card-img"
                  />

                  <div className="card-img-overlay d-flex align-items-end p-4 fruit-other-overlay">

                    <div className="w-100">

                      <span className="text-warning small fw-bold">
                        EXPLORE CATEGORY
                      </span>

                      <div className="d-flex justify-content-between align-items-center">

                        <h3 className="text-white fw-bold mb-0">
                          Indian Spices
                        </h3>

                        <span className="btn btn-light rounded-circle">
                          <i className="bi bi-arrow-up-right"></i>
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-5 bg-light">

        <div className="container py-lg-4">

          <div className="card border-0 rounded-5 overflow-hidden fruit-final-cta">

            <div className="card-body p-4 p-md-5">

              <div className="row align-items-center g-4">

                <div className="col-lg-8">

                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                    FRUIT ENQUIRY
                  </span>

                  <h2 className="display-6 fw-bold text-white mb-3">
                    Looking for Fresh Indian Fruits?
                  </h2>

                  <p className="text-white-50 fs-5 mb-0">
                    Contact our team for current product availability,
                    export requirements and business enquiries.
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

          </div>

        </div>
      </section>
    </>
  );
};

export default Fruits;