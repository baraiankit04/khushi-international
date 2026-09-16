import { Link } from "react-router-dom";

const Spices = () => {
  const spices = [
    {
      name: "Turmeric",
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=75",
      text: "Quality Indian turmeric for international markets.",
    },
    {
      name: "Red Chilli",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=75",
      text: "Selected Indian red chilli for export requirements.",
    },
    {
      name: "Coriander",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=75",
      text: "Fresh and selected coriander products for global buyers.",
    },
    {
      name: "Cumin",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=75",
      text: "Indian cumin prepared according to market requirements.",
    },
    {
      name: "Green Chilli",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=75",
      text: "Fresh green chilli for food and fresh produce markets.",
    },
    {
      name: "Mixed Indian Spices",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=75",
      text: "Selected Indian spice varieties for international requirements.",
    },
  ];

  return (
    <>
      <section className="bg-dark py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <p className="text-warning fw-bold text-uppercase small mb-2">
                Products / Spices
              </p>

              <h1 className="display-4 fw-bold text-white mb-3">
                Indian Spices
              </h1>

              <p className="lead text-white-50 mb-0">
                Explore selected Indian spices for international markets.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <Link
                to="/products"
                className="btn btn-warning fw-semibold px-4"
              >
                <i className="bi bi-arrow-left me-2"></i>
                All Categories
              </Link>

            </div>

          </div>

        </div>
      </section>

      <section className="py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">

            <span className="text-success fw-bold text-uppercase small">
              Spice Collection
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Our Indian Spices
            </h2>

          </div>

          <div className="row g-4">

            {spices.map((spice, index) => (
              <div
                className="col-6 col-md-4 col-lg-4"
                key={index}
              >

                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={spice.image}
                    alt={spice.name}
                    loading="lazy"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-3 p-md-4">

                    <span className="badge bg-warning-subtle text-warning-emphasis mb-2">
                      Indian Spice
                    </span>

                    <h4 className="fw-bold">
                      {spice.name}
                    </h4>

                    <p className="text-secondary lh-lg">
                      {spice.text}
                    </p>

                    <Link
                      to="/contact"
                      className="btn btn-outline-success"
                    >
                      Enquire Now
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Spices;