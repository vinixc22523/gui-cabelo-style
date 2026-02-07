import { Calendar, Clock, User } from "lucide-react";
import Logo from "./Logo";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#horarios"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
          >
            <Clock className="w-4 h-4" />
            <span className="hidden sm:inline">Consulte Horários</span>
          </a>
          <a
            href="#contato"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <Logo />

        <p className="mt-6 text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em] font-light">
          Agende seu horário on-line
        </p>

        <button
          onClick={scrollToServices}
          className="btn-primary mt-10"
        >
          <Calendar className="w-5 h-5" />
          Agendar Horário
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
