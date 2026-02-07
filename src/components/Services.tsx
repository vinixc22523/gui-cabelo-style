import { Scissors, Star, Sparkles, Package, FlaskConical } from "lucide-react";
import BookingDialog from "./BookingDialog";

const services = [
  {
    icon: Scissors,
    title: "Cabelo",
    description: "Cortes modernos e clássicos",
    price: "A partir de R$ 35",
  },
  {
    icon: Star,
    title: "Barba",
    description: "Modelagem e cuidados completos",
    price: "A partir de R$ 25",
  },
  {
    icon: Sparkles,
    title: "Sobrancelha",
    description: "Design e acabamento perfeito",
    price: "A partir de R$ 15",
  },
  {
    icon: Package,
    title: "Combos",
    description: "Pacotes especiais com desconto",
    price: "A partir de R$ 50",
  },
  {
    icon: FlaskConical,
    title: "Química",
    description: "Coloração, luzes e tratamentos",
    price: "A partir de R$ 60",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">
            Nossos <span className="gold-gradient-text">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos uma experiência completa em cuidados masculinos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                {service.price}
              </p>

              <BookingDialog 
                defaultService={service.title.toLowerCase() === "combos" ? "combo-cabelo-barba" : service.title.toLowerCase() === "química" ? "quimica" : service.title.toLowerCase()}
                trigger={
                  <button className="btn-outline mt-6 w-full text-xs py-2">
                    Agendar
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
