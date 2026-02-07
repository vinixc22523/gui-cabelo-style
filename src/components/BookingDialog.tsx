import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5541987098345";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

const services = [
  { id: "cabelo", name: "Cabelo", price: "R$ 35" },
  { id: "barba", name: "Barba", price: "R$ 25" },
  { id: "sobrancelha", name: "Sobrancelha", price: "R$ 15" },
  { id: "combo-cabelo-barba", name: "Combo Cabelo + Barba", price: "R$ 50" },
  { id: "quimica", name: "Química", price: "R$ 60" },
];

interface BookingDialogProps {
  trigger?: React.ReactNode;
  defaultService?: string;
}

const BookingDialog = ({ trigger, defaultService }: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>(defaultService || "");
  const [open, setOpen] = useState(false);

  const handleWhatsAppConfirm = () => {
    if (!date || !time || !selectedService) return;

    const service = services.find((s) => s.id === selectedService);
    const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário:\n\n` +
      `📅 Data: ${formattedDate}\n` +
      `🕐 Horário: ${time}\n` +
      `✂️ Serviço: ${service?.name} (${service?.price})\n\n` +
      `Aguardo confirmação!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setDate(undefined);
    setTime(undefined);
    setSelectedService(defaultService || "");
  };

  const isFormValid = date && time && selectedService;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) resetForm();
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="btn-primary">
            <CalendarIcon className="w-5 h-5" />
            Agendar Horário
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Agendar <span className="gold-gradient-text">Horário</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Escolha o serviço, data e horário desejados
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Service Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Serviço</label>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "flex justify-between items-center p-3 rounded-lg border transition-all text-left",
                    selectedService === service.id
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-background hover:border-primary/50 text-foreground"
                  )}
                >
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary text-sm">{service.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Data</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < today || day === 0; // Disable past dates and Sundays
                  }}
                  initialFocus
                  locale={ptBR}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Horário
            </label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={cn(
                    "py-2 px-3 rounded-lg border text-sm font-medium transition-all",
                    time === slot
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/50 text-foreground"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Confirmation Button */}
          <Button
            onClick={handleWhatsAppConfirm}
            disabled={!isFormValid}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Confirmar via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
