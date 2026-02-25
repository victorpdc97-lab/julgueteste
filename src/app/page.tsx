import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AuthorStrip from "@/components/AuthorStrip";
import Problem from "@/components/Problem";
import Argument from "@/components/Argument";
import BookSection from "@/components/BookSection";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <AuthorStrip />
        <Problem />
        <Argument />
        <BookSection />
        <Results />
        <Testimonials />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCta />
    </>
  );
}
