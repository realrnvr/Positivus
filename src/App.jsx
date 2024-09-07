import React, { useEffect } from "react";
import {
  Home,
  Services,
  Case,
  Work,
  Team,
  Testimonial,
  Contact,
} from "./pages/imports";

import Carousel from "./components/carousel/Carousel";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll(".lz-loading");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.remove("loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImgs.forEach((img) => {
      observer.observe(img);
    });
  };

  useEffect(() => {
    lazyLoading();
  }, []);

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
