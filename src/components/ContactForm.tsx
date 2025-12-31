import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Full Home Renovation",
    "Room Addition",
    "Flooring",
    "Painting",
    "Other",
];

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        projectType: "",
        message: "",
    });

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.phone) {
            toast({
                title: "Please fill in required fields",
                description: "Name and phone are required.",
                variant: "destructive",
            });
            return;
        }

        try {
            setIsSubmitted(true);
            await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
          
        } catch (err) {
            toast({
                title: "Something went wrong",
                description: "Please try again.",
                variant: "destructive",
            });
            console.error(err);
        }
        // Simulate form submission

        toast({
            title: "Message Sent!",
            description: "We'll text you back today!",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        // For phone field, only allow numbers
        if (name === "phone") {
            const numericValue = value.replace(/\D/g, "");
            setFormData((prev) => ({
                ...prev,
                [name]: numericValue,
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section id="contact-form" ref={sectionRef} className="py-16 px-4 bg-background pb-32">
            <div className="max-w-lg mx-auto">
                {/* Section Header */}
                <div
                    className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h2 className="font-bold text-primary text-xl">Prefer to Message?</h2>
                        <p className="text-sm text-muted-foreground">We'll text you back today</p>
                    </div>
                </div>

                {/* Form */}
                <div
                    className={`transition-all duration-700 delay-100 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    {isSubmitted ? (
                        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 text-center animate-fade-up">
                            <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-trust-green" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Thanks!</h3>
                            <p className="text-muted-foreground">We'll text you back soon.</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 space-y-4"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-foreground mb-2"
                                >
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="John Smith"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-foreground mb-2"
                                >
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="2145551234"
                                />
                            </div>

                            {/* Project Type */}
                            <div>
                                <label
                                    htmlFor="projectType"
                                    className="block text-sm font-semibold text-foreground mb-2"
                                >
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full h-12 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                                >
                                    <option value="">Select a project type</option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-foreground mb-2"
                                >
                                    Tell us about your project
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full p-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    placeholder="Describe your remodeling goals..."
                                />
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" className="w-full" size="lg">
                                <Send className="w-5 h-5" />
                                Send Message
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                We'll text you back today!
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
