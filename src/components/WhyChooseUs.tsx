import { Heart, Wrench, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import crewPhoto from "@/assets/crew-photo.png";

const features = [
    {
        icon: Heart,
        title: "Trusted by 1000+ Local Families",
        description: "Your neighbors love us",
    },
    {
        icon: Wrench,
        title: "25+ Years of Experience",
        description: "Skilled craftsmanship",
    },
    {
        icon: MessageCircle,
        title: "Clear Communication",
        description: "No surprises, always",
    },
    {
        icon: Sparkles,
        title: "We Treat Your Home Like Ours",
        description: "Clean & careful work",
    },
];

const WhyChooseUs = () => {
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
        <section ref={sectionRef} className="py-16 px-4 bg-card">
            <div className="max-w-lg mx-auto">
                {/* Crew Photo */}
                <div
                    className={`mb-10 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-card">
                        <img
                            src={crewPhoto}
                            alt="Our friendly remodeling crew ready to help with your project"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                            <p className="text-card text-center font-semibold">
                                Meet Our Crew — Ready to Help!
                            </p>
                        </div>
                    </div>
                </div>
                <h2
                    className={`text-2xl md:text-3xl font-bold text-center text-primary mb-3 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Why Choose Us?
                </h2>
                <p
                    className={`text-center text-muted-foreground mb-10 transition-all duration-700 delay-100 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    You're in good hands
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`bg-background rounded-2xl p-5 shadow-soft border border-border/50 transition-all duration-700 hover:shadow-card hover:-translate-y-1 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-foreground text-sm leading-tight mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
