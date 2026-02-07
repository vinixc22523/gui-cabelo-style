import { Scissors } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center bg-card animate-pulse-gold">
        <Scissors className="w-10 h-10 text-primary" />
      </div>
      <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-wider uppercase gold-gradient-text">
        Gui Cabelo
      </h1>
    </div>
  );
};

export default Logo;
