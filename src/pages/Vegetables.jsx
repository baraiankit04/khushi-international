import { Link } from "react-router-dom";

const Vegetables = () => {
  const vegetables = [
    {
      name: "Okra / Bhindi",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=75",
      text: "Fresh Indian okra selected and packed for export.",
    },
    {
      name: "Green Chilli",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=75",
      text: "Fresh green chilli prepared for international customers.",
    },
    {
      name: "Bottle Gourd / Dudhi",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=75",
      text: "Fresh bottle gourd sourced for overseas markets.",
    },
    {
      name: "Parwal",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=75",
      text: "Fresh pointed gourd supplied according to buyer requirements.",
    },
    {
      name: "Tindora",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=75",
      text: "Fresh Indian tindora prepared for export markets.",
    },
    {
      name: "Arvi",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=75",
      text: "Fresh arvi handled and packed for international supply.",
    },
  ];

  return (
    <>
      <section className="bg-success py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <p className="text-warning fw-bold text-uppercase small mb-2">
                Products / Vegetables
              </p>

              <h1 className="display-4 fw-bold text-white mb-3">
                Fresh Indian Vegetables
              </h1>

              <p className="lead text-white-50 mb-0">
                Fresh vegetables sourced and prepared for international buyers.
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
              Vegetable Collection
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Our Fresh Vegetables
            </h2>

          </div>

          <div className="row g-4">

            {vegetables.map((vegetable, index) => (
              <div
                className="col-6 col-md-4 col-lg-4"
                key={index}
              >

                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={vegetable.image}
                    alt={vegetable.name}
                    loading="lazy"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-3 p-md-4">

                    <span className="badge bg-success-subtle text-success mb-2">
                      Fresh Vegetable
                    </span>

                    <h4 className="fw-bold">
                      {vegetable.name}
                    </h4>

                    <p className="text-secondary lh-lg">
                      {vegetable.text}
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

export default Vegetables;