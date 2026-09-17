import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      subtitle: "Naturally Fresh",
      text: "Selected Indian fruits sourced and prepared for international market requirements.",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=85",
      link: "/products/fruits",
      icon: "bi-apple",
      items: ["Mango", "Guava", "Chikoo", "Pomegranate", "Banana"],
    },
    {
      title: "Fresh Vegetables",
      subtitle: "Farm Fresh",
      text: "A wide selection of Indian vegetables handled with focus on freshness and export quality.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
      link: "/products/vegetables",
      icon: "bi-basket2-fill",
      items: ["Okra", "Green Chilli", "Bottle Gourd", "Parwal", "Tindora"],
    },
    {
      title: "Indian Spices",
      subtitle: "Authentic India",
      text: "Selected Indian spices for customers looking for quality, aroma and dependable supply.",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85",
      link: "/products/spices",
      icon: "bi-fire",
      items: ["Turmeric", "Chilli", "Coriander", "Cumin", "Ginger"],
    },
  ];

  const featured = [
    {
      name: "Mango",
      type: "Fresh Fruit",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Pomegranate",
      type: "Fresh Fruit",
      image:
        "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Fresh Vegetables",
      type: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Indian Spices",
      type: "Spices",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="products-premium-hero py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb small mb-4">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-success text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Products</li>
                </ol>
              </nav>

              <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2 mb-3">
                <i className="bi bi-basket2-fill me-2"></i>
                OUR PRODUCTS
              </span>

              <h1 className="display-3 fw-bold text-dark lh-sm mb-4">
                Fresh Indian Produce
                <span className="d-block text-success">
                  for Global Markets.
                </span>
              </h1>

              <p className="lead text-secondary lh-lg mb-4">
                Explore our range of fresh fruits, vegetables and Indian
                spices selected for international business requirements.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#product-categories"
                  className="btn btn-success btn-lg rounded-pill px-4 fw-semibold"
                >
                  View Products
                  <i className="bi bi-arrow-down ms-2"></i>
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4"
                >
                  Send Enquiry
                </Link>
              </div>

              <div className="row g-3 mt-4">
                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-leaf-fill text-success fs-4"></i>
                      <strong className="d-block mt-2">Fresh</strong>
                      <small className="text-secondary">Produce</small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-box-seam-fill text-success fs-4"></i>
                      <strong className="d-block mt-2">Export</strong>
                      <small className="text-secondary">Packing</small>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-3">
                      <i className="bi bi-globe2 text-success fs-4"></i>
                      <strong className="d-block mt-2">Global</strong>
                      <small className="text-secondary">Supply</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="card border-0 rounded-5 overflow-hidden shadow-lg products-hero-image">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1300&q=85"
                    alt="Fresh fruits and vegetables"
                    className="w-100 h-100"
                  />
                </div>

                <div className="card border-0 shadow-lg rounded-4 products-floating-box">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="products-floating-icon">
                        <i className="bi bi-patch-check-fill"></i>
                      </div>

                      <div>
                        <small className="text-secondary d-block">
                          OUR FOCUS
                        </small>
                        <strong>Freshness & Quality</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section id="product-categories" className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row align-items-end mb-5 g-4">
            <div className="col-lg-7">
              <span className="text-success small fw-bold">
                PRODUCT CATEGORIES
              </span>

              <h2 className="display-5 fw-bold mt-2 mb-0">
                Explore Our
                <span className="text-success"> Product Range.</span>
              </h2>
            </div>

            <div className="col-lg-5">
              <p className="text-secondary lh-lg mb-0">
                Choose a category to explore our fresh produce and spice
                range in more detail.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {categories.map((category, index) => (
              <div className="col-lg-4" key={category.title}>
                <div className="card border-0 shadow-sm rounded-5 overflow-hidden h-100 products-category-card">
                  <div className="position-relative products-category-image">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="w-100 h-100"
                    />

                    <span className="position-absolute top-0 start-0 m-3 badge bg-dark rounded-pill px-3 py-2">
                      0{index + 1}
                    </span>

                    <div className="products-category-icon shadow">
                      <i className={`bi ${category.icon}`}></i>
                    </div>
                  </div>

                  <div className="card-body p-4">
                    <small className="text-success fw-bold">
                      {category.subtitle.toUpperCase()}
                    </small>

                    <h3 className="fw-bold mt-2 mb-3">
                      {category.title}
                    </h3>

                    <p className="text-secondary lh-lg">
                      {category.text}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="badge bg-light text-secondary border rounded-pill fw-normal px-3 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={category.link}
                      className="btn btn-outline-success rounded-pill px-4"
                    >
                      Explore Category
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCE ================= */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "720px" }}>
            <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
              FRESH SELECTION
            </span>

            <h2 className="display-5 fw-bold mt-3">
              A Glimpse of Our
              <span className="text-success"> Produce.</span>
            </h2>

            <p className="text-secondary fs-5 mt-3">
              Fresh products selected across our fruit, vegetable and spice
              categories.
            </p>
          </div>

          <div className="row g-3">
            {featured.map((product) => (
              <div className="col-6 col-lg-3" key={product.name}>
                <div className="card border-0 rounded-4 overflow-hidden shadow-sm products-feature-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="card-img"
                  />

                  <div className="card-img-overlay d-flex align-items-end products-feature-overlay">
                    <div>
                      <small className="text-warning fw-bold">
                        {product.type}
                      </small>

                      <h5 className="text-white fw-bold mb-0">
                        {product.name}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              to="/products/fruits"
              className="btn btn-dark rounded-pill px-4"
            >
              Browse Fresh Fruits
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPORT APPROACH ================= */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="card border-0 shadow-sm rounded-5 overflow-hidden">
            <div className="row g-0">
              <div className="col-lg-5">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh produce handling"
                  loading="lazy"
                  className="w-100 h-100 products-export-image"
                />
              </div>

              <div className="col-lg-7">
                <div className="card-body p-4 p-md-5">
                  <span className="text-success fw-bold small">
                    FROM PRODUCT TO SHIPMENT
                  </span>

                  <h2 className="display-6 fw-bold mt-2 mb-3">
                    Fresh Produce Needs
                    <span className="text-success"> Care at Every Step.</span>
                  </h2>

                  <p className="text-secondary lh-lg mb-4">
                    Our export approach focuses on product selection,
                    handling, packaging and coordination to support
                    international supply requirements.
                  </p>

                  <div className="row g-3">
                    {[
                      ["bi-basket2-fill", "Product Sourcing"],
                      ["bi-patch-check-fill", "Quality Focus"],
                      ["bi-box-seam-fill", "Export Packaging"],
                      ["bi-airplane-engines-fill", "Shipment Support"],
                    ].map(([icon, text]) => (
                      <div className="col-sm-6" key={text}>
                        <div className="card border rounded-4 h-100">
                          <div className="card-body p-3 d-flex align-items-center gap-3">
                            <div className="bg-success-subtle text-success rounded-3 p-3">
                              <i className={`bi ${icon}`}></i>
                            </div>

                            <strong>{text}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="btn btn-success rounded-pill px-4 mt-4"
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

      {/* ================= CTA ================= */}
      <section className="py-5 bg-light">
        <div className="container py-lg-4">
          <div className="card border-0 rounded-5 overflow-hidden products-premium-cta">
            <div className="card-body p-4 p-md-5">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                    BUSINESS ENQUIRY
                  </span>

                  <h2 className="display-6 fw-bold text-white mb-3">
                    Need Fresh Produce for Your Market?
                  </h2>

                  <p className="text-white-50 fs-5 mb-0">
                    Contact our team for product availability, supply
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

export default Products;