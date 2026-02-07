import { Scissors } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
              <Scissors className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif text-lg font-semibold gold-gradient-text">
              Gui Cabelo
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Gui Cabelo. Todos os direitos reservados.
          </p>

          <nav className="flex gap-6">
            <a
              href="#servicos"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
