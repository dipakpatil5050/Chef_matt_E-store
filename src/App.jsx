import { useState } from "react";
import "./App.css";
import HomePage from "./componenets/HomePage";
import Footer from "./componenets/Footer";
import Sidebar from "./componenets/Sidebar";
import ProductsPage from "./componenets/ProductsPage";
import OfferPage from "./componenets/OfferPage";
import OffersCarousel from "./componenets/OffersCarousel";

function App() {
  return (
    <>
      <Sidebar />
      <HomePage />
      <ProductsPage />
      {/* <OfferPage /> */}
      <OffersCarousel />
      <Footer />
    </>
  );
}

export default App;
