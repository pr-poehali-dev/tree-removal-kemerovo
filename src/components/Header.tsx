import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white w-11 h-11 rounded-2xl flex items-center justify-center font-bold shadow-lg">
            <Icon name="TreePine" size={24} />
          </div>
          <span className="text-lg font-bold text-gray-900">СпилКемерово</span>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
          <a href="#why" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a href="tel:+79134163481" className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors">
            <Icon name="Phone" size={18} />
            +7 (913) 416-34-81
          </a>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#services" className="py-2 text-gray-700 font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
            <a href="#why" className="py-2 text-gray-700 font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
            <a href="#contacts" className="py-2 text-gray-700 font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
            <a href="tel:+79134163481" className="text-primary font-semibold py-2 flex items-center gap-2">
              <Icon name="Phone" size={18} />
              +7 (913) 416-34-81
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
