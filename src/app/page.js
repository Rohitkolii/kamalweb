'use client'
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import Partners from "../Components/Partners/Partners";
import Feedback from "@/Components/Feedback/Feedback";
import Technologies from "@/Components/Technologies/Technologies";
import Random from "@/Components/Random/Random";
import Aboutcol from "@/Components/Aboutcol/Aboutcol";
import Numbers from "@/Components/Numbers/Numbers";

export default function Home() {

  const sections = {
    web : 'Web',
    app : 'App',
    // backend : 'Backend',
    database : "Database",
    cloud : 'Cloud',
  }

  return (
    <>
      <Header />
      <Partners />
      {/* <Aboutcol /> */}
      <About />
      <Numbers />
      <Services />
      <Feedback />
      <Technologies sections={sections} />
      {/* <Random /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
