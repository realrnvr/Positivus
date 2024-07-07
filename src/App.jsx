import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Carousel from "./components/carousel/Carousel";
import Services from "./pages/services/Services";
import Case from "./pages/case/Case";
import Work from "./pages/work/Work";
import Team from "./pages/team/Team";
import Testimonial from "./pages/testimonial/Testimonial";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Carousel />
        <Services />
        <Case />
        <Work />
        <Team />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
