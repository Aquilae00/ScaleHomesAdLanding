import { Shield, Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero2.jpg";
import bbbBadge from "@/assets/BBB.png";
import googleLogo from "@/assets/Google.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful modern kitchen remodel with white cabinets and marble countertops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-4 left-4 z-20 animate-fade-up" style={{ animationDelay: "0s" }}>
        <img 
          src={logo} 
          alt="DFW Home Connect Logo" 
          className="w-12 h-12 rounded-lg object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pt-16 pb-32 text-center">

        {/* Trust Badge */}
        <div className="animate-fade-up mb-6" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
            <Shield className="w-4 h-4 text-trust-green" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wide">
              LICENSED • CERTIFIED • INSURED
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4 animate-fade-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Dallas-Fort Worth's<br />
          Best 
          <span className="text-primary"> Home Remodel </span>Experts
        </h1>

        {/* Trust Badges Row */}
        <div 
          className="animate-fade-up flex flex-wrap justify-center items-center gap-4 mb-8"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Google Reviews Badge */}
          <div className="flex items-center gap-3 bg-card/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-card border border-border/50 h-16">
            <img 
              src={googleLogo} 
              alt="Google" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs font-semibold text-foreground">
                Over 60+ 5-star reviews
              </p>
            </div>
          </div>

          {/* BBB Badge */}
          <img 
            src={bbbBadge} 
            alt="BBB Accredited Business" 
            className="h-16 w-auto"
          />
        </div>

        {/* Tagline */}
        <p 
          className="animate-fade-up text-lg max-w-xs mx-auto mb-8 text-foreground font-medium "
          style={{ animationDelay: "0.5s" }}
        >
          Free Estimates, Zero Pressure
        </p>

        {/* CTA Buttons */}
        <div 
          className="animate-fade-up flex flex-col sm:flex-row gap-3 justify-center items-center"
          style={{ animationDelay: "0.6s" }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto gap-2">
            <a href="tel:+4692108283">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto gap-2"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="w-5 h-5" />
            Text Us Instead
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;