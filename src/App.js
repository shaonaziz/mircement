import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Body/Introduction/Introduction";
import MasonryGrid from "./components/Body/MasonaryGrid/MasonaryGrid";
import Chairman from "./components/Body/Chairman/Chairman";
import Achievement from "./components/Body/Achievement/Achievement";
import SliderSection from "./components/Body/Slider/Slider";
import Footer from "./components/Footer/Footer";
import "swiper/swiper.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <MasonryGrid />
      <Chairman />
      <Achievement />
      <SliderSection />
      <Footer />
    </>
  );
}

export default App;
