import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LightVisualizer from "@/components/LightVisualizer";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 font-sans text-foreground antialiased selection:bg-gold-300 selection:text-charcoal-950">
      {/* Dynamic Sticky Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Interactive Lighting Temperature Simulator */}
        <LightVisualizer />

        {/* Infinite Scrolling Reviews Marquee */}
        <ReviewsMarquee />

        {/* Project Lightbox Gallery */}
        <Gallery />

        {/* Location & Contact Forms */}
        <Contact />
      </main>

      {/* Footer Branding & Nav links */}
      <Footer />
    </div>
  );
}
