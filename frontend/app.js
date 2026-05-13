
const { HashRouter, Routes, Route, Link, useNavigate } = window.ReactRouterDOM;

const carsData = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "E63 AMG (2017)",
    price: "$100/day",
    image: "./assets/Mercedes-Benz-E63_AMG-2017-Front.8b39fdf0.jpg",
    details: "4.0-liter V8 Biturbo · 612 HP · 4MATIC+ AWD · Drift Mode · Adaptive air suspension",
  },
  {
    id: 2,
    brand: "BMW",
    model: "M5 (2017)",
    price: "$200/day",
    image: "./assets/large_23a18def-f064-483a-ab04-d9f177d92abc.webp",
    details: "4.4L V8 twin-turbo · 600 HP · Adaptive suspension · Launch control · Active M differential",
  },
  {
    id: 3,
    brand: "Kia",
    model: "Picanto (2026)",
    price: "$20/day",
    image: "./assets/1 Kia Picanto review 20205 UK.jpg",
    details: "1.0L 3-cylinder petrol · Very fuel-efficient · Manual or automatic transmission",
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Corolla S (2014)",
    price: "$30/day",
    image: "./assets/2014_Toyota_Corolla_Test_Drive_Review_summaryImage.jpeg",
    details: "1.8L 4-cylinder · 132 hp · CVT automatic or 6-speed manual · Front-wheel drive",
  },
  {
    id: 5,
    brand: "Nissan",
    model: "Micra (2013)",
    price: "FREE for 7 days",
    image: "./assets/nissan-micra-front-driving-three-quarters.jpg",
    details: "1.2L 3-cylinder petrol · 80 hp · Supercharged option 98 hp · Economy city car",
  },
  {
    id: 6,
    brand: "Toyota",
    model: "RAV4 Hybrid XSE (2025)",
    price: "$50/day",
    image: "./assets/2025-Toyota-RAV4-Hybrid-XSE-Exterior.webp",
    details: "2.5L 4-cylinder · 203 hp · 8-speed automatic · FWD or AWD",
  },
  {
    id: 7,
    brand: "Audi",
    model: "Q3 (2019)",
    price: "$70/day",
    image: "./assets/2019-audi-q3.jpg",
    details: "2.0L turbocharged 4-cylinder · 228 hp · Quattro AWD · 8-speed automatic",
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "G63 (2020)",
    price: "$300/day",
    image: "./assets/14395_st0640_116.webp",
    details: "4.0L twin-turbo V8 · 577 hp · Luxury SUV performance",
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "Tiguan (2019)",
    price: "$70/day",
    image: "./assets/2017-Volkswagen-Tiguan-162TSI-279776.webp",
    details: "2.0L turbocharged 4-cylinder · 184 hp · AWD 4Motion available",
  },
  {
    id: 10,
    brand: "Ferrari",
    model: "812 Competizione (2022)",
    price: "$700/day",
    image: "./assets/2022-ferrari-812-competizione-main.jpg",
    details: "6.5L V12 · 830 hp · 0-100 km/h in 2.85 sec · Top speed 340 km/h",
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1>JARRAH Rental</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contract">Contract</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>Copyright © JARRAH RENTAL CARS 2026</p>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <small>Reliable Car Rentals</small>
          <h2>Drive with confidence on every journey.</h2>
          <p>Choose vehicles from a trusted fleet, enjoy affordable rates, and book directly online.</p>
          <Link className="hero-button" to="/cars">Browse Cars</Link>
        </div>
      </section>
      <section className="feature-grid">
        <article>
          <h3>Affordable Rates</h3>
          <p>Transparent pricing for daily, weekly, and monthly rentals.</p>
        </article>
        <article>
          <h3>24/7 Support</h3>
          <p>Customer help is available anytime so your trip stays smooth.</p>
        </article>
        <article>
          <h3>Wide Fleet</h3>
          <p>From compact city cars to premium SUVs and sports models.</p>
        </article>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page about-page">
      <section>
        <h2>About JARRAH Rental</h2>
        <p>At JARRAH Rental, we deliver freedom, comfort, and confidence on every journey.</p>
        <p>Founded to redefine car rental, our mission is to make booking easy, transparent, and reliable.</p>
        <p>Our fleet includes economical daily drivers, family cars, premium SUVs, and performance models.</p>
        <p>Every vehicle is regularly maintained and ready to give you a smooth driving experience.</p>
        <p>We focus on clear pricing, flexible rental options, and support you can trust anytime.</p>
      </section>
    </main>
  );
}

function CarsPage() {
  const [search, setSearch] = React.useState("");
  const [brand, setBrand] = React.useState("all");

  const filtered = carsData.filter((car) => {
    const text = `${car.brand} ${car.model} ${car.details}`.toLowerCase();
    const matchesSearch = text.includes(search.toLowerCase());
    const matchesBrand = brand === "all" || car.brand === brand;
    return matchesSearch && matchesBrand;
  });

  const handleBook = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    window.location.hash = "#/contract";
  };

  return (
    <main className="page cars-page">
      <section className="cars-header">
        <div>
          <h2>Our Collection</h2>
          <p>Search by brand or model to instantly find the perfect rental car.</p>
        </div>
        <div className="search-controls">
          <input
            type="text"
            placeholder="Search by brand or model"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            <option value="all">All brands</option>
            {[...new Set(carsData.map((car) => car.brand))].map((brandName) => (
              <option key={brandName} value={brandName}>{brandName}</option>
            ))}
          </select>
        </div>
      </section>
      <section className="cars-grid">
        {filtered.map((car) => (
          <article key={car.id} className="car-card">
            <img src={car.image} alt={car.model} />
            <div className="car-card-body">
              <h3>{car.brand}</h3>
              <p className="car-model">{car.model}</p>
              <p>{car.price}</p>
              <p>{car.details}</p>
              <button className="btn-primary" onClick={() => handleBook(car)}>
                Book Now
              </button>
            </div>
          </article>
        ))}
        {filtered.length === 0 && <p className="no-results">No cars match your search.</p>}
      </section>
    </main>
  );
}

function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page contact-page">
      <section>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:JARRAHRental@gmail.com">JARRAHRental@gmail.com</a></p>
        <p>Phone: +961 123 456 789</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={form.name}
              required
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              required
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </label>
          <label>
            Message
            <textarea
              rows="5"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
          </label>
          <button className="btn-primary" type="submit">Send Message</button>
          {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form>
      </section>
    </main>
  );
}

function ContractPage() {
  const navigate = useNavigate();
  const savedCar = React.useMemo(() => {
    const stored = localStorage.getItem("selectedCar");
    return stored ? JSON.parse(stored) : null;
  }, []);

  const [details, setDetails] = React.useState({ fullName: "", email: "", pickupDate: "" });
  const [confirmed, setConfirmed] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmed(true);
  };

  return (
    <main className="page contract-page">
      <section>
        <h2>Booking Contract</h2>
        {!savedCar ? (
          <div className="empty-state">
            <p>No car selected yet. Please choose a vehicle from the Cars page.</p>
            <button className="btn-primary" onClick={() => navigate("/cars")}>Browse Cars</button>
          </div>
        ) : (
          <div className="contract-layout">
            <div className="contract-summary">
              <h3>Selected Car</h3>
              <p><strong>{savedCar.brand}</strong></p>
              <p>{savedCar.model}</p>
              <p>{savedCar.price}</p>
              <p>{savedCar.details}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  required
                  value={details.fullName}
                  onChange={(event) => setDetails({ ...details, fullName: event.target.value })}
                />
              </label>
              <label>
                Contact Email
                <input
                  type="email"
                  required
                  value={details.email}
                  onChange={(event) => setDetails({ ...details, email: event.target.value })}
                />
              </label>
              <label>
                Pickup Date
                <input
                  type="date"
                  required
                  value={details.pickupDate}
                  onChange={(event) => setDetails({ ...details, pickupDate: event.target.value })}
                />
              </label>
              <button className="btn-primary" type="submit">Confirm Booking</button>
              {confirmed && <p className="success-message">Booking confirmed. Check your email for next steps.</p>}
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contract" element={<ContractPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
