# Project Report

## Title
JARRAH Rental React Frontend

## Abstract
This project delivers a responsive frontend application for a car rental company. The app uses ReactJS to provide a seamless user interface for browsing vehicles, contacting the service, and booking a car.

## System Design
The system is built as a single-page application with React Router for navigation. It includes:
- Home page with service highlights
- About page with company description
- Cars page with search and filter functionality
- Contact page with a contact form
- Contract page for booking confirmation

## Technologies Used
- ReactJS (via CDN)
- React Router DOM
- HTML, CSS, JavaScript

## Key Code Snippets
### React Router Setup
```jsx
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
```

### Booking Flow
```jsx
const handleBook = (car) => {
  localStorage.setItem("selectedCar", JSON.stringify(car));
  window.location.hash = "#/contract";
};
```

### Responsive Layout
```css
@media (max-width: 640px) {
  .site-header nav {
    justify-content: center;
  }
  .hero-section {
    padding: 2rem 1rem;
  }
}
```
