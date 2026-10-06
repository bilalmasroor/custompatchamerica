import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
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
        <MarqueeStrip />
        <Categories />
        <Process />
        <WhyChooseUs />
        <Story />
        <Industries />
        <Testimonials />
        <QuoteSection />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}
