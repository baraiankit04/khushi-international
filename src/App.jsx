import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./Pages/Products";
import Team from "./pages/Team";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Spices from "./pages/Spices";

function App() {
  return (
    <BrowserRouter>
      {/* Every route opens from top */}
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/fruits" element={<Fruits />} />
          <Route path="/products/vegetables" element={<Vegetables />} />
          <Route path="/products/spices" element={<Spices />} />

          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917317422100"
        target="_blank"
        rel="noreferrer"
        className="btn btn-success rounded-circle position-fixed d-flex align-items-center justify-content-center shadow"
        style={{
          width: "58px",
          height: "58px",
          right: "20px",
          bottom: "20px",
          zIndex: "9999",
        }}
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </BrowserRouter>
  );
}

export default App;