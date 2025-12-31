import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import heroRemodel from "@/assets/worker.webp";
import logo from "@/assets/logo.png";

const NeedRemodelSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+19725551234";
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Picture */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img 
            src={heroRemodel} 
            alt="Home remodeling" 
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Does Your Home Need a Remodel? */}
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-primary mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Does Your Home Need a Remodel?
        </h2>

        {/* Company Logo */}
        <div 
          className={`flex justify-center mb-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <img 
            src={logo} 
            alt="DFW Home Connect" 
            className="h-20 md:h-26 w-auto rounded-full"
          />
        </div>

        {/* Call For A Free Estimate Today! */}
        <p 
          className={`text-xl md:text-2xl font-semibold text-center text-foreground mb-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Call For A Free Estimate Today!
        </p>

        {/* Call Button */}
        <div 
          className={`flex justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleCallClick}
          >
            📞 Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NeedRemodelSection;

