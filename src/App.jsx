import { useState } from "react";
import "./App.css";
import HomePage from "./componenets/HomePage";
import Footer from "./componenets/Footer";
import Sidebar from "./componenets/Sidebar";
import ProductsPage from "./componenets/ProductsPage";
import OfferPage from "./componenets/OfferPage";

function App() {
  return (
    <>
      <Sidebar />
      <HomePage />
      <ProductsPage />
      <OfferPage />
      <Footer />
    </>
  );
}

export default App;
