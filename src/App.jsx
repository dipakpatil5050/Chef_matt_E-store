import { useState } from "react";
import "./App.css";
import HomePage from "./componenets/HomePage";
import Footer from "./componenets/Footer";
import Sidebar from "./componenets/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
