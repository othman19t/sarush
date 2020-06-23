import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import About from "./components/about";
import Services from "./components/services";
import Products from "./components/products";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
