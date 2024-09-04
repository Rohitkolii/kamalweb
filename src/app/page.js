'use client'
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import Partners from "../Components/Partners/Partners";
import Feedback from "@/Components/Feedback/Feedback";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Feedback />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
