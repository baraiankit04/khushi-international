import { Link } from "react-router-dom";

const Fruits = () => {
  const fruits = [
    {
      name: "Alphonso Mango",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=75",
      text: "Premium Indian mango selected for international markets.",
    },
    {
      name: "Guava / Peru",
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=75",
      text: "Fresh Indian guava sourced and packed for export.",
    },
    {
      name: "Banana",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=800&q=75",
      text: "Fresh bananas prepared for international buyers.",
    },
    {
      name: "Chikoo / Sapota",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=75",
      text: "Fresh chikoo selected for overseas fresh produce supply.",
    },
    {
      name: "Pomegranate",
      image:
        "https://images.unsplash.com/photo-1615485737651-5801cb48b32c?auto=format&fit=crop&w=800&q=75",
      text: "Quality Indian pomegranate for export markets.",
    },
    {
      name: "Amla",
      image:
        "https://images.unsplash.com/photo-1615485737651-5801cb48b32c?auto=format&fit=crop&w=800&q=75",
      text: "Fresh Indian amla supplied according to buyer requirements.",
    },
  ];

  return (
    <>
      <section className="bg-success py-5">
        <div className="container py-lg-4">
          <div className="row align-items-center g-4">

            <div className="col-lg-8">
              <p className="text-warning fw-bold text-uppercase small mb-2">
                Products / Fruits
              </p>

              <h1 className="display-4 fw-bold text-white mb-3">
                Fresh Indian Fruits
              </h1>

              <p className="lead text-white-50 mb-0">
                Explore fresh Indian fruits prepared for international markets.
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
              Fruit Collection
            </span>

            <h2 className="display-6 fw-bold mt-2">
              Our Fresh Fruits
            </h2>
          </div>

          <div className="row g-4">

            {fruits.map((fruit, index) => (
              <div className="col-6 col-md-4 col-lg-4" key={index}>

                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="card-img-top"
                    loading="lazy"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-3 p-md-4">

                    <span className="badge bg-warning-subtle text-warning-emphasis mb-2">
                      Fresh Fruit
                    </span>

                    <h4 className="fw-bold">
                      {fruit.name}
                    </h4>

                    <p className="text-secondary lh-lg">
                      {fruit.text}
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

export default Fruits;