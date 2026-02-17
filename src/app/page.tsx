import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Reviews from "@/components/Reviews";
import LaFortuna from "@/components/LaFortuna";
import About from "@/components/About";
import Inclusions from "@/components/Inclusions";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Tours />
      <Inclusions />
      <LaFortuna />
      <About />
      <Reviews />
      <ContactForm />
    </>
  );
}
