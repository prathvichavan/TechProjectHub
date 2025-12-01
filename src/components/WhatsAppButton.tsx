import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919766638211";
  const message = "Hi! I'm interested in your projects.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-xl transition-all duration-500 hover:scale-125 hover:rotate-12 animate-bounce-in animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
