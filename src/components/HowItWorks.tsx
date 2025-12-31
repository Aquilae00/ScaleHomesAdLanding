import { Phone, ClipboardCheck, Hammer } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call or Text Us",
    description: "Reach out anytime — real humans, not bots.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Free In-Home Estimate",
    description: "We'll visit, listen, and plan together.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "We Handle the Rest",
    description: "Sit back while we transform your space.",
  },
];

const HowItWorks = () => {
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
          How It Works
        </h2>
        <p 
          className={`text-center text-muted-foreground mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Simple as 1-2-3
        </p>

        <div className="space-y-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative bg-card rounded-2xl p-5 shadow-soft border border-border/50 transition-all duration-700 hover:shadow-card ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-soft">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[2.875rem] -bottom-4 w-0.5 h-4 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;