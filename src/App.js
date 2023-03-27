import React from "react";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Baby from "./components/forBaby/Baby";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Proces from "./components/process/Proces";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Category />
      <Baby />
      <Proces />
      <Footer />
    </>
  );
}

export default App;
