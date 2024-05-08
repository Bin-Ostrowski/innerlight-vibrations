import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import SoundHealing from "./components/SoundHealing";
import Counseling from "./components/Counseling";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Banner from "./components/Banner";


export default function App() {
  
  return (
    <div>
      <Nav></Nav>
        {/* <section className="hero"></section> */}
      <main>
        <Banner></Banner>
        <About></About>
        <SoundHealing></SoundHealing>
        <Counseling></Counseling>
        <Services></Services>
        <Insurance></Insurance>
      <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
