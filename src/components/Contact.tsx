import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gold-gradient-text">Localização</span> & Contato
          </h2>
          <p className="section-subtitle">
            Venha nos visitar ou entre em contato
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3565!2d-43.2!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMTInMDAuMCJX!5e0!3m2!1sen!2sbr!4v1609459200000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Gui Cabelo"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground">
                  Rua Exemplo, 123<br />
                  Centro - Rio de Janeiro, RJ
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Telefone
                </h3>
                <a
                  href="tel:5521999999999"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (21) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Clock className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground">
                  Seg - Sex: 9h às 20h<br />
                  Sáb: 9h às 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com/guicabelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @guicabelo
                </a>
              </div>
            </div>

            <button className="btn-primary w-full md:w-auto">
              Agendar Horário
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
