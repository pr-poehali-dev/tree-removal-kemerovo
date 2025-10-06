import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: ''
  });

  useEffect(() => {
    document.title = "Спил деревьев Кемерово - Профессионально ⭐ Быстро ⭐ Безопасно | +7 (913) 416-34-81";
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Новая заявка!%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AАдрес: ${formData.address}%0AОписание: ${formData.description}`;
    const whatsappUrl = `https://wa.me/79134163481?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <ReviewsSection />
      <ContactsSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
