import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      subtitle: "Mango, Guava, Banana, Chikoo, Pomegranate & More",
      icon: "bi-apple",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80",
      link: "/products/fruits",
    },
    {
      title: "Fresh Vegetables",
      subtitle: "Okra, Green Chilli, Bottle Gourd, Parwal & More",
      icon: "bi-flower1",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1000&q=80",
      link: "/products/vegetables",
    },
    {
      title: "Indian Spices",
      subtitle: "Fresh and selected spices for international markets",
      icon: "bi-fire",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80",
      link: "/products/spices",
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
                Our Products
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Fresh Indian Produce for
                <span className="text-success"> Global Markets</span>
              </h1>

              <p className="lead text-secondary mb-0">
                Explore our fresh fruits, vegetables and spices supplied
                from India for international customers.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark text-white rounded-4 p-4 shadow-sm">

                <div className="d-flex align-items-center gap-3">

                  <div
                    className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "55px", height: "55px" }}
                  >
                    <i className="bi bi-basket2-fill fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-bold">
                      PRODUCT RANGE
                    </small>

                    <h5 className="text-white mb-0 mt-1">
                      Fruits • Vegetables • Spices
                    </h5>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORY SELECTION */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">
            <span className="text-success fw-bold text-uppercase small">
              Choose a Category
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-3">
              Explore Our Product Range
            </h2>

            <p
              className="text-secondary mx-auto mb-0"
              style={{ maxWidth: "700px" }}
            >
              Select a product category to view our fresh produce collection.
            </p>
          </div>

          <div className="row g-4">

            {categories.map((category, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                  <div className="position-relative">

                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="w-100"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.05))",
                      }}
                    >
                      <div className="p-4 text-white">

                        <div
                          className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "52px",
                            height: "52px",
                          }}
                        >
                          <i className={`bi ${category.icon} fs-4`}></i>
                        </div>

                        <h3 className="text-white fw-bold mb-2">
                          {category.title}
                        </h3>

                        <p className="text-white-50 mb-0">
                          {category.subtitle}
                        </p>

                      </div>
                    </div>

                  </div>

                  <div className="card-body p-4">

                    <Link
                      to={category.link}
                      className="btn btn-success w-100"
                    >
                      View {category.title}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="row g-4">

            <div className="col-md-4">
              <div className="bg-white rounded-4 border p-4 h-100 text-center">

                <i className="bi bi-patch-check-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Quality Selection
                </h5>

                <p className="text-secondary mb-0">
                  Products selected with focus on freshness and export quality.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white rounded-4 border p-4 h-100 text-center">

                <i className="bi bi-box-seam-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Export Packaging
                </h5>

                <p className="text-secondary mb-0">
                  Suitable packing for safe international transport.
                </p>

              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white rounded-4 border p-4 h-100 text-center">

                <i className="bi bi-globe2 text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Global Supply
                </h5>

                <p className="text-secondary mb-0">
                  Fresh produce supplied for international market requirements.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Products;