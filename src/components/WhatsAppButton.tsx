import Icon from "@/components/ui/icon";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://t.me/+79134163481"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={28} />
      </a>
      
      <a
        href="https://wa.me/79134163481"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;