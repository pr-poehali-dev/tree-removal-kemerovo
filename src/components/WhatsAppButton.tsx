import Icon from "@/components/ui/icon";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/79134163481"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} />
    </a>
  );
};

export default WhatsAppButton;
