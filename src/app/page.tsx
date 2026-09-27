import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import QuoteSection from "@/components/QuoteSection";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <Story />
        <Process />
        <Industries />
        <Testimonials />
        <QuoteSection />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
