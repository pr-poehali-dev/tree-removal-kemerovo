import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Новая заявка!%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AАдрес: ${formData.address}%0AОписание: ${formData.description}`;
    const whatsappUrl = `https://wa.me/79134163481?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white w-11 h-11 rounded-2xl flex items-center justify-center font-bold shadow-lg">
              <Icon name="TreePine" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">СпилКемерово</span>
              <span className="text-xs text-gray-500 hidden sm:block">С 2016 года</span>
            </div>
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

      <section className="pt-16 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Icon name="Zap" size={16} />
                Выезд за 2 часа
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900">
                Спил деревьев<br />
                <span className="text-primary">по Кемерово</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Профессиональное удаление деревьев любой сложности. 9 лет опыта, современное оборудование, безопасная работа.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
                  <a href="#contacts">
                    Получить консультацию
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-2" asChild>
                  <a href="tel:+79134163481">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Гарантия</div>
                    <div className="text-sm text-gray-500">На все работы</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-500">Аварийный выезд</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/ad2ccdc7-65ea-45c2-948d-b7523c10d88c.jpg"
                alt="Спил деревьев"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональное удаление деревьев любой сложности с применением современных технологий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon name="Axe" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Направленная валка</h3>
                    <p className="text-gray-600 mb-4">
                      Быстрое удаление целиком на открытых участках с точным расчетом направления падения
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Точный расчет направления
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Работа на открытой территории
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        От 2000₽ за дерево
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon name="Mountain" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Спил частями</h3>
                    <p className="text-gray-600 mb-4">
                      Альпинистский спил в стесненных условиях между зданиями и ЛЭП
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Между зданиями и ЛЭП
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Высота до 30 метров
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        От 5000₽ за дерево
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon name="TreeDeciduous" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Корчевание пней</h3>
                    <p className="text-gray-600 mb-4">
                      Полное удаление пня с корневой системой методом фрезерования
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Фрезерование пня
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Вывоз опилок
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        От 1500₽ за пень
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon name="Logs" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Распил на дрова</h3>
                    <p className="text-gray-600 mb-4">
                      Нарезка древесины под любые размеры с аккуратной укладкой
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Любой размер чурок
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        Аккуратная укладка
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        От 500₽ за м³
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="why" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} className="text-primary" />
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2">9</div>
              <div className="text-gray-600 font-medium">лет на рынке</div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" size={32} className="text-primary" />
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">деревьев спилено</div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">безопасность</div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <div className="text-5xl font-black text-gray-900 mb-2">2ч</div>
              <div className="text-gray-600 font-medium">выезд по городу</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Оставьте заявку
            </h2>
            <p className="text-xl text-gray-600">
              Перезвоним в течение 15 минут и ответим на все вопросы
            </p>
          </div>
          
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">Телефон</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Адрес объекта</label>
                  <Input 
                    placeholder="г. Кемерово, ул. ..." 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">Описание задачи</label>
                  <Textarea 
                    placeholder="Количество деревьев, высота, условия..." 
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Телефон</div>
                    <a href="tel:+79134163481" className="text-primary hover:underline font-medium">+7 (913) 416-34-81</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Email</div>
                    <a href="mailto:Shargin41626@gmail.com" className="text-primary hover:underline font-medium break-all">Shargin41626@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Работаем</div>
                    <div className="text-gray-600">Кемерово и область</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">График</div>
                    <div className="text-gray-600">Ежедневно 7:00-22:00</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <a
        href="https://wa.me/79134163481"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>
    </div>
  );
};

export default Index;
