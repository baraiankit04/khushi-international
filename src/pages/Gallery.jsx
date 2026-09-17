import { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Fruits",
    "Vegetables",
    "Packaging",
    "Shipment",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Fresh Indian Fruits",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=85",
      size: "large",
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 3,
      title: "Produce Packaging",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 4,
      title: "Mango Selection",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 5,
      title: "Export Operations",
      category: "Shipment",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
      size: "large",
    },
    {
      id: 6,
      title: "Fresh Produce Range",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 7,
      title: "Pomegranate",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 8,
      title: "Product Handling",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
    {
      id: 9,
      title: "International Shipment",
      category: "Shipment",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=85",
      size: "normal",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

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

                  <li className="breadcrumb-item active">
                    Gallery
                  </li>

                </ol>
              </nav>


              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-images me-2"></i>
                OUR GALLERY
              </span>


              <h1 className="display-3 fw-bold lh-sm mb-4">
                A Glimpse Into
                <span className="d-block text-success">
                  Our Fresh World.
                </span>
              </h1>


              <p className="lead text-secondary lh-lg mb-4">
                Explore fresh produce, product handling, packaging
                and export activities through our gallery.
              </p>


              <div className="d-flex flex-wrap gap-3">

                <a
                  href="#gallery"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Gallery
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
            <div className="col-lg-6">

              <div className="row g-3">

                <div className="col-7">

                  <div className="card border-0 shadow rounded-5 overflow-hidden gallery-hero-card h-100">

                    <div
                      className="overflow-hidden"
                      style={{ height: "430px" }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85"
                        alt="Fresh fruits"
                        className="w-100 h-100 object-fit-cover gallery-hero-img"
                      />
                    </div>

                  </div>

                </div>


                <div className="col-5">

                  <div className="d-flex flex-column gap-3 h-100">

                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden gallery-hero-card flex-fill">

                      <img
                        src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
                        alt="Fresh vegetables"
                        className="w-100 h-100 object-fit-cover gallery-hero-img"
                      />

                    </div>


                    <div className="card border-0 bg-dark text-white rounded-4 flex-fill gallery-info-card">

                      <div className="card-body p-4 d-flex flex-column justify-content-center">

                        <span className="d-inline-flex align-self-start bg-success rounded-circle p-3 mb-3">
                          <i className="bi bi-camera-fill fs-4"></i>
                        </span>

                        <h4 className="fw-bold">
                          Fresh Produce
                        </h4>

                        <p className="text-white-50 small mb-0">
                          From India to international markets.
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


      {/* ================= FILTER + GALLERY ================= */}
      <section
        id="gallery"
        className="py-5 bg-white"
      >
        <div className="container py-lg-5">

          {/* HEADING */}
          <div className="row align-items-end g-4 mb-4">

            <div className="col-lg-7">

              <span className="text-success fw-bold small">
                EXPLORE OUR WORK
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-3">
                Fresh Produce &
                <span className="text-success">
                  {" "}Export Gallery.
                </span>
              </h2>

              <p className="text-secondary fs-5 mb-0">
                Browse images by product and activity category.
              </p>

            </div>


            <div className="col-lg-5">

              <div className="d-flex justify-content-lg-end">

                <span className="badge bg-light text-dark border rounded-pill px-4 py-3">
                  <i className="bi bi-images text-success me-2"></i>
                  {filteredItems.length} Images
                </span>

              </div>

            </div>

          </div>


          {/* FILTER BUTTONS */}
          <div className="d-flex flex-wrap gap-2 mb-5">

            {filters.map((filter) => (

              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`btn rounded-pill px-4 ${
                  activeFilter === filter
                    ? "btn-success"
                    : "btn-outline-success"
                }`}
              >
                {filter === "All" && (
                  <i className="bi bi-grid-fill me-2"></i>
                )}

                {filter === "Fruits" && (
                  <i className="bi bi-apple me-2"></i>
                )}

                {filter === "Vegetables" && (
                  <i className="bi bi-basket2-fill me-2"></i>
                )}

                {filter === "Packaging" && (
                  <i className="bi bi-box-seam-fill me-2"></i>
                )}

                {filter === "Shipment" && (
                  <i className="bi bi-airplane-engines-fill me-2"></i>
                )}

                {filter}
              </button>

            ))}

          </div>


          {/* GALLERY */}
          <div className="row g-4">

            {filteredItems.map((item) => (

              <div
                className={
                  item.size === "large"
                    ? "col-md-6 col-lg-8"
                    : "col-md-6 col-lg-4"
                }
                key={item.id}
              >

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden gallery-card">

                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "360px" }}
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-100 h-100 object-fit-cover gallery-card-img"
                    />


                    {/* DARK OVERLAY */}
                    <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-4">

                      <div className="d-flex justify-content-between align-items-start">

                        <span className="badge bg-success rounded-pill px-3 py-2">
                          {item.category}
                        </span>

                        <span className="gallery-view-icon bg-white text-dark rounded-circle d-inline-flex align-items-center justify-content-center">
                          <i className="bi bi-arrows-fullscreen"></i>
                        </span>

                      </div>


                      <div>

                        <small className="text-warning fw-bold">
                          KHUSHI INTERNATIONAL
                        </small>

                        <h3 className="text-white fw-bold mt-1 mb-0">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= GALLERY CATEGORIES ================= */}
      <section className="py-5 bg-light">

        <div className="container py-lg-5">

          <div className="text-center mb-5">

            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              OUR ACTIVITIES
            </span>

            <h2 className="display-5 fw-bold mt-3">
              From Produce to
              <span className="text-success">
                {" "}Shipment.
              </span>
            </h2>

          </div>


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

            {/* FRUITS */}
            <div className="col">

              <div className="card border-0 shadow-sm rounded-4 h-100 text-center gallery-category-card">

                <div className="card-body p-4">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-apple fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Fruits
                  </h4>

                  <p className="text-secondary small">
                    Fresh Indian fruits and seasonal produce.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter("Fruits");
                      document
                        .getElementById("gallery")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-outline-success rounded-pill"
                  >
                    View Photos
                  </button>

                </div>

              </div>

            </div>


            {/* VEGETABLES */}
            <div className="col">

              <div className="card border-0 shadow-sm rounded-4 h-100 text-center gallery-category-card">

                <div className="card-body p-4">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-basket2-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Vegetables
                  </h4>

                  <p className="text-secondary small">
                    Selected Indian fresh vegetables.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter("Vegetables");
                      document
                        .getElementById("gallery")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-outline-success rounded-pill"
                  >
                    View Photos
                  </button>

                </div>

              </div>

            </div>


            {/* PACKAGING */}
            <div className="col">

              <div className="card border-0 shadow-sm rounded-4 h-100 text-center gallery-category-card">

                <div className="card-body p-4">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-box-seam-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Packaging
                  </h4>

                  <p className="text-secondary small">
                    Product handling and packaging activities.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter("Packaging");
                      document
                        .getElementById("gallery")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-outline-success rounded-pill"
                  >
                    View Photos
                  </button>

                </div>

              </div>

            </div>


            {/* SHIPMENT */}
            <div className="col">

              <div className="card border-0 shadow-sm rounded-4 h-100 text-center gallery-category-card">

                <div className="card-body p-4">

                  <span className="d-inline-flex bg-success-subtle text-success rounded-circle p-3 mb-3">
                    <i className="bi bi-airplane-engines-fill fs-3"></i>
                  </span>

                  <h4 className="fw-bold">
                    Shipment
                  </h4>

                  <p className="text-secondary small">
                    Export and international shipment activities.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter("Shipment");
                      document
                        .getElementById("gallery")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-outline-success rounded-pill"
                  >
                    View Photos
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= DARK SECTION ================= */}
      <section className="py-5 bg-dark">

        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                OUR BUSINESS
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Fresh Indian Produce
                <span className="d-block text-warning">
                  For International Markets.
                </span>
              </h2>

              <p className="text-white-50 fs-5 mb-4">
                Explore our products and contact the Khushi
                International team for current requirements
                and business enquiries.
              </p>


              <div className="d-flex flex-wrap gap-2">

                <Link
                  to="/products"
                  className="btn btn-success btn-lg rounded-pill px-4"
                >
                  Explore Products
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/about"
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  About Us
                </Link>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="row g-3">

                <div className="col-6">
                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 text-white gallery-dark-card">
                    <div className="card-body p-4">
                      <i className="bi bi-basket2-fill text-warning fs-3"></i>
                      <h5 className="fw-bold mt-3">Fresh</h5>
                      <small className="text-white-50">
                        Produce
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 text-white gallery-dark-card">
                    <div className="card-body p-4">
                      <i className="bi bi-box-seam-fill text-warning fs-3"></i>
                      <h5 className="fw-bold mt-3">Export</h5>
                      <small className="text-white-50">
                        Packaging
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 text-white gallery-dark-card">
                    <div className="card-body p-4">
                      <i className="bi bi-airplane-engines-fill text-warning fs-3"></i>
                      <h5 className="fw-bold mt-3">Shipment</h5>
                      <small className="text-white-50">
                        Support
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card bg-white bg-opacity-10 border border-light border-opacity-10 rounded-4 text-white gallery-dark-card">
                    <div className="card-body p-4">
                      <i className="bi bi-globe2 text-warning fs-3"></i>
                      <h5 className="fw-bold mt-3">Global</h5>
                      <small className="text-white-50">
                        Business
                      </small>
                    </div>
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
                BUSINESS ENQUIRY
              </span>

              <h2 className="display-5 fw-bold text-white mb-3">
                Looking for Fresh Indian Produce?
              </h2>

              <p className="text-white fs-5 opacity-75 mb-0">
                Contact our team for fruits, vegetables,
                spices and export enquiries.
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

export default Gallery;