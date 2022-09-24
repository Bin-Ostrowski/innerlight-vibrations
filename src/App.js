import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import SoundHealing from "./components/SoundHealing";
import Counseling from "./components/Counseling";
import Insurance from "./components/Insurance";
import GiftCard from "./components/GiftCard";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";


export default function App() {
  
  return (
    <div>
      <Nav></Nav>
        <section className="hero"></section>
      <main>
        <About></About>
        <SoundHealing></SoundHealing>
        <Counseling></Counseling>
        <Insurance></Insurance>
        <GiftCard></GiftCard>
      <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}
