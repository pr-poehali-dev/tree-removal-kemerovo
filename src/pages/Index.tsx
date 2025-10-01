import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded flex items-center justify-center font-bold">
              АР
            </div>
            <span className="text-lg md:text-xl font-bold">Арборист PRO</span>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <a href="tel:+79134163481" className="hidden sm:flex text-primary font-semibold text-sm md:text-base hover:underline">
              +7 (913) 416-34-81
            </a>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
              <a href="#services" className="py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#contacts" className="py-2 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              <a href="tel:+79134163481" className="text-primary font-semibold py-2">+7 (913) 416-34-81</a>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Спил деревьев в Кемерово
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Безопасно удалим любое дерево. 9 лет опыта, своё оборудование, уборка территории
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="tel:+79134163481">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/79134163481" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Icon name="BadgeCheck" size={20} className="text-primary" />
                <span>Лицензия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>Страховка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>Выезд за 2 часа</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-8 md:py-12 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-5 pointer-events-none">
          <img 
            src="https://cdn.poehali.dev/files/ad2ccdc7-65ea-45c2-948d-b7523c10d88c.jpg" 
            alt=""
            className="w-full h-full object-cover"
          />
          <img 
            src="https://cdn.poehali.dev/files/f57a6809-830d-49dd-839f-dba42e260786.jpg" 
            alt=""
            className="w-full h-full object-cover"
          />
          <img 
            src="https://cdn.poehali.dev/files/d03cb72d-a960-40e5-b137-7769fb789e8a.jpg" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Наши услуги</h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Axe" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Направленная валка</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Быстрое удаление целиком на открытых участках
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Точный расчет направления падения</li>
                      <li>• Работа на открытой территории</li>
                      <li>• От 2000₽ за дерево</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-3">
                  <div className="bg-secondary/10 w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Спил частями</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Альпинистский спил в стесненных условиях
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Между зданиями и ЛЭП</li>
                      <li>• Высота до 30 метров</li>
                      <li>• От 5000₽ за дерево</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-3">
                  <div className="bg-accent/10 w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Trash2" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Корчевание пней</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Полное удаление с корневой системой
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Фрезерование пня</li>
                      <li>• Вывоз опилок</li>
                      <li>• От 1500₽ за пень</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-3">
                  <div className="bg-primary/10 w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="Box" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Распил на дрова</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Нарезка древесины под ваши размеры
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Любой размер чурок</li>
                      <li>• Аккуратная укладка</li>
                      <li>• От 500₽ за м³</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20 text-center">
            <p className="text-sm font-semibold text-secondary">
              Полная уборка территории и вывоз веток включены в стоимость
            </p>
          </div>
        </div>
      </section>



      <section className="py-8 md:py-12 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <img 
            src="https://cdn.poehali.dev/files/06f9b535-edf8-4b4c-974d-f65595babc25.jpg" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Почему мы</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div className="font-bold text-2xl text-primary mb-1">9 лет</div>
              <div className="text-sm text-muted-foreground">на рынке</div>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="TreeDeciduous" size={24} className="text-primary" />
              </div>
              <div className="font-bold text-2xl text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">деревьев спилено</div>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <div className="font-bold text-2xl text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">безопасность</div>
            </div>

            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div className="font-bold text-2xl text-primary mb-1">2 часа</div>
              <div className="text-sm text-muted-foreground">выезд по городу</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-8 md:py-12 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Оставьте заявку</h2>
          
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" type="tel" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Адрес объекта</label>
                  <Input placeholder="г. Кемерово, ул. ..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Описание задачи</label>
                  <Textarea placeholder="Количество деревьев, высота, условия..." rows={3} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Перезвоним в течение 15 минут
                </p>
              </form>

              <div className="mt-6 pt-6 border-t grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Phone" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <a href="tel:+79134163481" className="text-primary hover:underline">+7 (913) 416-34-81</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Mail" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:Shargin41626@gmail.com" className="text-primary hover:underline text-xs break-all">Shargin41626@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Работаем</div>
                    <div className="text-muted-foreground">Кемерово и область</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-6 px-4 text-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground text-primary w-8 h-8 rounded flex items-center justify-center font-bold">
                АР
              </div>
              <span className="font-bold">Арборист PRO</span>
            </div>
            <div className="text-center md:text-left">
              <div>+7 (913) 416-34-81 • Shargin41626@gmail.com</div>
              <div className="text-primary-foreground/70 text-xs">Кемерово и область • Работаем с 2015 года</div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/79134163481"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="md:w-8 md:h-8" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Написать в WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Index;