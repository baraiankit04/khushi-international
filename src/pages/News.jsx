import { Link } from "react-router-dom";

const News = () => {
  const newsItems = [
    {
      title: "Fresh Mango Export Season",
      category: "Season Update",
      date: "April 2026",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=75",
      text: "Khushi International prepares premium Indian mangoes for international customers during the seasonal export period.",
    },
    {
      title: "Fresh Vegetables for European Markets",
      category: "Export Update",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=75",
      text: "Fresh Indian vegetables are selected, packed and coordinated for customers across European destinations.",
    },
    {
      title: "Quality Packaging for Fresh Produce",
      category: "Quality",
      date: "June 2026",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=75",
      text: "Export packaging plays an important role in maintaining freshness and protecting produce during international transit.",
    },
    {
      title: "Expanding Global Fresh Produce Supply",
      category: "Company News",
      date: "July 2026",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=75",
      text: "Our team continues to support fresh produce supply for buyers across the UK, Europe, Middle East and other markets.",
    },
    {
      title: "Fresh Guava and Indian Fruits",
      category: "Product Update",
      date: "August 2026",
      image:
        "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=75",
      text: "Fresh Indian fruits including guava are sourced and prepared according to customer and export requirements.",
    },
    {
      title: "Reliable Export Coordination",
      category: "Operations",
      date: "September 2026",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=75",
      text: "Professional coordination between sourcing, documentation, packaging and logistics helps support fresh produce exports.",
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
                News & Updates
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Latest From
                <span className="text-success"> Khushi International</span>
              </h1>

              <p className="lead text-secondary mb-0">
                Company updates, fresh produce information,
                export activities and seasonal product news.
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
                    <i className="bi bi-newspaper fs-4"></i>
                  </div>

                  <div>
                    <small className="text-warning fw-bold">
                      COMPANY UPDATES
                    </small>

                    <h5 className="text-white mb-0 mt-1">
                      News & Insights
                    </h5>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                loading="lazy"
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{
                  height: "420px",
                  objectFit: "cover",
                }}
              />

            </div>

            <div className="col-lg-6">

              <span className="badge bg-warning-subtle text-warning-emphasis mb-3">
                Featured Update
              </span>

              <p className="text-success fw-bold text-uppercase small mb-2">
                {newsItems[0].category}
              </p>

              <h2 className="display-6 fw-bold mb-3">
                {newsItems[0].title}
              </h2>

              <div className="d-flex align-items-center gap-2 text-secondary mb-3">

                <i className="bi bi-calendar3"></i>

                <span>
                  {newsItems[0].date}
                </span>

              </div>

              <p className="text-secondary lh-lg fs-5">
                {newsItems[0].text}
              </p>

              <Link to="/contact" className="btn btn-success px-4">
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* NEWS CARDS */}
      <section className="bg-light py-5">
        <div className="container py-lg-4">

          <div className="row align-items-end mb-5">

            <div className="col-lg-8">

              <span className="text-success fw-bold text-uppercase small">
                Latest Updates
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-2">
                News & Company Activities
              </h2>

              <p className="text-secondary mb-0">
                Follow our fresh produce and export-related updates.
              </p>

            </div>

          </div>

          <div className="row g-4">

            {newsItems.slice(1).map((news, index) => (

              <div
                className="col-md-6 col-lg-4"
                key={index}
              >

                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="card-img-top"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-4">

                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">

                      <span className="badge bg-success-subtle text-success">
                        {news.category}
                      </span>

                      <small className="text-secondary">
                        <i className="bi bi-calendar3 me-1"></i>
                        {news.date}
                      </small>

                    </div>

                    <h4 className="card-title fw-bold">
                      {news.title}
                    </h4>

                    <p className="card-text text-secondary lh-lg">
                      {news.text}
                    </p>

                    <Link
                      to="/contact"
                      className="btn btn-outline-success btn-sm"
                    >
                      Read More
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* NEWS CATEGORIES */}
      <section className="py-5">
        <div className="container py-lg-4">

          <div className="text-center mb-5">

            <span className="text-success fw-bold text-uppercase small">
              Stay Informed
            </span>

            <h2 className="display-6 fw-bold mt-2">
              What We Share
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-6 col-lg-3">
              <div className="border rounded-4 text-center p-4 h-100">

                <i className="bi bi-basket2-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Product Updates
                </h5>

                <p className="text-secondary small mb-0">
                  Seasonal fruits and vegetables.
                </p>

              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="border rounded-4 text-center p-4 h-100">

                <i className="bi bi-airplane-engines-fill text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Export News
                </h5>

                <p className="text-secondary small mb-0">
                  Export and shipment updates.
                </p>

              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="border rounded-4 text-center p-4 h-100">

                <i className="bi bi-building text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Company News
                </h5>

                <p className="text-secondary small mb-0">
                  Khushi International activities.
                </p>

              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="border rounded-4 text-center p-4 h-100">

                <i className="bi bi-globe2 text-success fs-1"></i>

                <h5 className="fw-bold mt-3">
                  Market Updates
                </h5>

                <p className="text-secondary small mb-0">
                  International fresh produce markets.
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
                Business Enquiry
              </p>

              <h2 className="text-white fw-bold mb-2">
                Interested in Our Fresh Produce?
              </h2>

              <p className="text-white-50 mb-0">
                Contact Khushi International for product availability,
                export supply and business requirements.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end">

              <Link
                to="/contact"
                className="btn btn-warning btn-lg fw-semibold px-4"
              >
                Send Enquiry
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default News;