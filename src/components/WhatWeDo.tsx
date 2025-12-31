import { Home, ChefHat, Bath, Plus, Sun, HardHat } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
    {
        icon: Home,
        title: "Home Remodel",
        description: "Transform your entire home with our comprehensive remodeling services",
    },
    {
        icon: ChefHat,
        title: "Kitchen Remodel",
        description: "Create the kitchen of your dreams with modern designs and functionality",
    },
    {
        icon: Bath,
        title: "Bathroom Remodel",
        description: "Upgrade your bathroom into a luxurious and comfortable space",
    },
    {
        icon: Plus,
        title: "Additions",
        description: "Expand your living space with expertly crafted home additions",
    },
    {
        icon: Sun,
        title: "Sunrooms",
        description: "Enjoy natural light year-round with beautiful custom sunrooms",
    },
    {
        icon: HardHat,
        title: "General Contracting",
        description: "Full-service contracting for all your construction needs",
    },
];

const WhatWeDo = () => {
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
                    What We Do
                </h2>
                <p
                    className={`text-center text-muted-foreground mb-10 transition-all duration-700 delay-100 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Expert remodeling services tailored to your needs
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`bg-card rounded-2xl p-5 shadow-soft border border-border/50 transition-all duration-700 hover:shadow-card hover:-translate-y-1 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-foreground text-sm leading-tight mb-1">
                                {service.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

