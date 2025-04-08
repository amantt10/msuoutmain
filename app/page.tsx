import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Resources />
    </>
  );
}
