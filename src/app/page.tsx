import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Reviews from "@/components/Reviews";
import LaFortuna from "@/components/LaFortuna";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tours />
      <LaFortuna />
      <About />
      <Reviews />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
