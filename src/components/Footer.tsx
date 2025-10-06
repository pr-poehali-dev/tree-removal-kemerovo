import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center">
              <Icon name="TreePine" size={24} />
            </div>
            <div>
              <div className="font-bold text-lg">СпилКемерово</div>
              <div className="text-sm text-gray-400">С 2016 года</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="font-semibold mb-1">+7 (913) 416-34-81</div>
            <div className="text-sm text-gray-400">Shargin41626@gmail.com</div>
            <div className="text-sm text-gray-400 mt-1">Кемерово и область • Ежедневно 7:00-22:00</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
