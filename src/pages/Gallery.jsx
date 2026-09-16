import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    {
      title: "Fresh Mangoes",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Fresh Guava",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Fresh Bananas",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Fresh Vegetables",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Green Chilli",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Export Quality Produce",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Export Packaging",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Packed Fresh Produce",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Cargo Shipment",
      category: "Shipment",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Air Export",
      category: "Shipment",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "International Logistics",
      category: "Shipment",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=75",
    },
    {
      title: "Fresh Produce Handling",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=75",
    },
  ];

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Packaging",
    "Shipment",
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-lg-4">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 mb-3">
                Our Gallery
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Fresh Produce &
                <span className="text-success"> Export Gallery</span>
              </h1>

              <p className="lead text-secondary mb-0">
                Explore fresh fruits, vegetables, packaging and
                shipment activities from our export operations.
              </p>

            </div>

            <div className="col-lg-4">

              <div className="bg-dark text-white rounded-4 p-4 shadow-sm">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className="bi bi-images fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-bold">
                      VISUAL JOURNEY
                    </small>

                    <h5 className="text-white mb-0 mt-1">
                      Our Work in Pictures
                    </h5>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="py-5">
        <div className="container py-lg-4">

          {/* HEADING */}
          <div className="row align-items-end g-4 mb-4">

            <div className="col-lg-7">

              <span className="text-success fw-bold text-uppercase small">
                Gallery Collection
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-2">
                Explore Our Fresh Produce
              </h2>

              <p className="text-secondary mb-0">
                Browse our products, packaging and export-related
                activities.
              </p>

            </div>

            <div className="col-lg-5">

              <div className="d-flex flex-wrap gap-2 justify-content-lg-end">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`btn ${
                      activeCategory === category
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                  >
                    {category}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* GALLERY GRID */}
          <div className="row g-4 mt-2">

            {filteredItems.map((item, index) => (

              <div
                className="col-6 col-md-4 col-lg-3"
                key={index}
              >

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="card-img-top"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-3">

                    <span className="badge bg-success-subtle text-success mb-2">
                      {item.category}
                    </span>

                    <h6 className="fw-bold mb-0">
                      {item.title}
                    </h6>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* GALLERY INFO */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">

              <div className="bg-white border rounded-4 text-center p-4 h-100">

                <i className="bi bi-basket2-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Fresh Produce
                </h5>

                <p className="text-secondary small mb-0">
                  Fresh Indian fruits and vegetables.
                </p>

              </div>

            </div>

            <div className="col-md-6 col-lg-3">

              <div className="bg-white border rounded-4 text-center p-4 h-100">

                <i className="bi bi-patch-check-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Quality Check
                </h5>

                <p className="text-secondary small mb-0">
                  Freshness and quality inspection.
                </p>

              </div>

            </div>

            <div className="col-md-6 col-lg-3">

              <div className="bg-white border rounded-4 text-center p-4 h-100">

                <i className="bi bi-box-seam-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Packaging
                </h5>

                <p className="text-secondary small mb-0">
                  Professional packing for export shipment.
                </p>

              </div>

            </div>

            <div className="col-md-6 col-lg-3">

              <div className="bg-white border rounded-4 text-center p-4 h-100">

                <i className="bi bi-airplane-engines-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Shipment
                </h5>

                <p className="text-secondary small mb-0">
                  International cargo and export movement.
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
                Product Enquiry
              </p>

              <h2 className="text-white fw-bold mb-2">
                Interested in Our Fresh Produce?
              </h2>

              <p className="text-white-50 mb-0">
                Contact us for product availability, packaging,
                quantity and export requirements.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <a
                href="/contact"
                className="btn btn-warning btn-lg fw-semibold px-4"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;