'use client'
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import Partners from "../Components/TechStack/TechStack";
import Feedback from "@/Components/Feedback/Feedback";
import Technologies from "@/Components/Technologies/Technologies";
import Random from "@/Components/Random/Random";
import Aboutcol from "@/Components/Aboutcol/Aboutcol";
import Numbers from "@/Components/Numbers/Numbers";
import HeaderSlide from "@/Components/HeaderSlide/HeaderSlide";
import Industuries from "@/Components/Industuries/Industuries";

export default function Home() {

  const sections = {
    web : 'Frontent',
    app : 'Mobile',
    backend : 'Backend',
    database : "Cloud & Database",
  }

  return (
    <>
      <HeaderSlide />
      <Partners />
      {/* <Aboutcol /> */}
      <About />
      <Numbers />
      <Services />
      <Industuries />
      {/* <Feedback /> */}
      <Technologies sections={sections} />
      {/* <Random /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
