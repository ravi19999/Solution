import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import WhyUs from "./components/why-us/WhyUs";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <WhyUs />
      <Services />
    </>
  );
}

export default App;
