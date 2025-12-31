import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import NeedRemodelSection from "@/components/NeedRemodelSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta handled via index.html */}
      <HeroSection />
      <WhyChooseUs />
      <WhatWeDo />
      <HowItWorks />
      <NeedRemodelSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;