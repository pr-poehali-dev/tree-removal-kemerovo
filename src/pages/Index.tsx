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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg">
              АР
            </div>
            <span className="text-lg md:text-2xl font-bold text-foreground tracking-tight">Арборист PRO</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:flex bg-secondary hover:bg-secondary/90" size="sm">
              <a href="tel:+79134163481">
                <Icon name="Phone" size={16} className="mr-1" />
                <span className="hidden lg:inline">Позвонить</span>
              </a>
            </Button>
            
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
          <div className="md:hidden bg-white border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#advantages" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Преимущества
              </a>
              <a 
                href="#reviews" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#contacts" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                <a href="tel:+79134163481">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Профессиональный спил аварийных деревьев в Кемерово
              </h1>
              <p className="text-base md:text-xl text-muted-foreground">
                Безопасно удалим любое дерево. Работаем с 2015 года. Гарантия качества и полная уборка территории.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#contacts">
                    <Icon name="FileText" size={20} className="mr-2" />
                    Оставить заявку
                  </a>
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href="https://wa.me/79134163481" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">деревьев спилено</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">9 лет</div>
                  <div className="text-xs md:text-sm text-muted-foreground">на рынке</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">безопасность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/ad2ccdc7-65ea-45c2-948d-b7523c10d88c.jpg" 
                alt="Профессиональный арборист за работой"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-primary text-primary-foreground px-3 py-2 md:px-6 md:py-3 rounded-lg shadow-xl flex items-center gap-2">
                <Icon name="BadgeCheck" size={16} className="md:w-5 md:h-5" />
                <span className="font-semibold text-xs md:text-sm uppercase tracking-wide">Лицензированные специалисты</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Наши услуги</h2>
            <p className="text-base md:text-xl text-muted-foreground">Комплексные решения для любых задач</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-primary/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Axe" size={24} className="md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Направленная валка</h3>
                      <p className="text-muted-foreground mb-4">
                        Безопасное удаление деревьев с заданным направлением падения на открытых участках
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>Работа на открытой территории</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>Точный расчет направления</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>Быстрая валка целиком</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Layers" size={24} className="md:w-8 md:h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Спил частями</h3>
                      <p className="text-muted-foreground mb-4">
                        Удаление деревьев частями в стесненных условиях с применением альпинизма
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Работа между зданиями</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Альпинистское снаряжение</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                          <span>Высота до 30 метров</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Box" size={24} className="md:w-8 md:h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Распил на дрова</h3>
                      <p className="text-muted-foreground mb-4">
                        Профессиональный распил древесины на дрова нужного размера
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span>Размер по вашему желанию</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span>Аккуратная укладка</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span>Готовые дрова на месте</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/f57a6809-830d-49dd-839f-dba42e260786.jpg" 
                alt="Профессиональный спил деревьев"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <img 
                src="https://cdn.poehali.dev/files/d03cb72d-a960-40e5-b137-7769fb789e8a.jpg" 
                alt="Работа с бензопилой"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <img 
                src="https://cdn.poehali.dev/files/06f9b535-edf8-4b4c-974d-f65595babc25.jpg" 
                alt="Альпинистский спил"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Гарантии качества и безопасности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Shield" size={32} className="md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Полная ответственность</h3>
                <p className="text-muted-foreground text-sm">
                  Полная ответственность за ваше имущество
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Users" size={32} className="md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Опытная команда</h3>
                <p className="text-muted-foreground text-sm">
                  Арбористы с опытом работы от 5 лет
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Wrench" size={32} className="md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Своё оборудование</h3>
                <p className="text-muted-foreground text-sm">
                  Профессиональная техника последнего поколения
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon name="Clock" size={32} className="md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Срочный выезд</h3>
                <p className="text-muted-foreground text-sm">
                  Приедем в течение 2 часов в черте города
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 md:py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  Огромное спасибо за оперативную работу! Спилили опасную березу возле дома за один день. Все чисто убрали, вывезли. Рекомендую!
                </p>
                <div className="font-semibold">Анна Петрова</div>
                <div className="text-sm text-muted-foreground">ул. Весенняя, 45</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  Профессионалы своего дела. Удалили сложное дерево между гаражами. Работали аккуратно, ничего не повредили. Цена адекватная.
                </p>
                <div className="font-semibold">Сергей Иванов</div>
                <div className="text-sm text-muted-foreground">Кемеровский район</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  Вызывали для спила трех старых тополей. Ребята приехали быстро, работу выполнили качественно. Территорию привели в порядок. Молодцы!
                </p>
                <div className="font-semibold">Михаил Краснов</div>
                <div className="text-sm text-muted-foreground">пр. Шахтеров</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и получите бесплатную консультацию</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" type="tel" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Адрес объекта</label>
                    <Input placeholder="г. Кемерово, ул. ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Описание задачи</label>
                    <Textarea placeholder="Опишите, какие работы необходимо выполнить" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <a href="tel:+79134163481" className="text-primary hover:underline text-lg">
                        +7 (913) 416-34-81
                      </a>
                      <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:Shargin41626@gmail.com" className="text-primary hover:underline text-sm md:text-base break-all">
                        Shargin41626@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Кемерово и Кемеровская область
                      </p>
                      <p className="text-sm text-muted-foreground">Выезд по области</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Icon name="Gift" size={24} className="text-primary" />
                  Скидка 15% при заказе сегодня!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Оставьте заявку прямо сейчас и получите специальную скидку на все виды работ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-foreground text-primary w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                  АР
                </div>
                <span className="text-2xl font-bold">Арборист PRO</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональные услуги по спилу деревьев в Кемерово и области с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Направленная валка</li>
                <li>Распил на дрова</li>
                <li>Спил частями в стесненных условиях</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+7 (913) 416-34-81</li>
                <li>Shargin41626@gmail.com</li>
                <li>г. Кемерово</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
            © 2025 Арборист PRO. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;