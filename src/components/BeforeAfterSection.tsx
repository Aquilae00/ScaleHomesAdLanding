import { useEffect, useRef, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";

const BeforeAfterSection = () => {
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

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="max-w-lg mx-auto">
        <h2 
          className={`text-2xl md:text-3xl font-bold text-center text-primary mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          See the Difference
        </h2>
        <p 
          className={`text-center text-muted-foreground mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Drag to reveal the transformation
        </p>

        <div 
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <BeforeAfterSlider
            beforeImage={kitchenBefore}
            afterImage={kitchenAfter}
            beforeAlt="Kitchen before remodel with dated cabinets"
            afterAlt="Kitchen after remodel with modern white cabinets"
          />
        </div>

        <p 
          className={`text-center text-sm text-muted-foreground mt-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Complete kitchen transformation in Plano, TX
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSection;