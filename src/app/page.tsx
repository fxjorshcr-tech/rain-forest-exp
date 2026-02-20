import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Reviews from "@/components/Reviews";
import LaFortuna from "@/components/LaFortuna";
import About from "@/components/About";
import Inclusions from "@/components/Inclusions";
import ContactForm from "@/components/ContactForm";
import { getTours } from "@/data/tours";

export const revalidate = 60;

export default async function Home() {
  const tours = await getTours();

  return (
    <>
      <Hero />
      <Tours tours={tours} />
      <Inclusions />
      <LaFortuna />
      <About />
      <Reviews />
      <ContactForm />
    </>
  );
}
