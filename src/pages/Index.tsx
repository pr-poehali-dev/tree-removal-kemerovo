import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TreeDeciduous" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ЭкоСпил</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <a href="tel:+79134163481">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Профессиональный спил аварийных деревьев в Кемерово
              </h1>
              <p className="text-xl text-muted-foreground">
                Безопасно удалим любое дерево. Работаем с 2015 года. Гарантия качества и полная уборка территории.
              </p>
              <div className="flex flex-wrap gap-4">
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
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">деревьев спилено</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">9 лет</div>
                  <div className="text-sm text-muted-foreground">на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">безопасность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7d610336-a591-41aa-b424-e9cfad0d87e7.jpg" 
                alt="Профессиональный спил деревьев"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные решения для любых задач</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Axe" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Спил аварийных деревьев</h3>
                <p className="text-muted-foreground mb-4">
                  Безопасное удаление опасных деревьев любой сложности с использованием альпинистского снаряжения
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Работа в стесненных условиях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Удаление деревьев возле зданий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Работа на высоте до 30 метров</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Drill" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Корчевание пней</h3>
                <p className="text-muted-foreground mb-4">
                  Полное удаление пней с помощью профессионального оборудования
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Механическое фрезерование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Выкорчевывание с корнями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Вывоз остатков</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Уборка и вывоз</h3>
                <p className="text-muted-foreground mb-4">
                  Полная очистка территории и утилизация порубочных остатков
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span>Распил на дрова</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span>Измельчение веток</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span>Вывоз мусора</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Гарантии качества и безопасности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Полная страховка</h3>
                <p className="text-muted-foreground text-sm">
                  Все работы застрахованы на 5 млн рублей
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Опытная команда</h3>
                <p className="text-muted-foreground text-sm">
                  Арбористы с опытом работы от 5 лет
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Своё оборудование</h3>
                <p className="text-muted-foreground text-sm">
                  Профессиональная техника последнего поколения
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Срочный выезд</h3>
                <p className="text-muted-foreground text-sm">
                  Приедем в течение 2 часов в черте города
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Примеры работ</h2>
            <p className="text-xl text-muted-foreground">Наши реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/f57a6809-830d-49dd-839f-dba42e260786.jpg" 
                alt="Спил дерева в городе"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold">Спил аварийной ели</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/d03cb72d-a960-40e5-b137-7769fb789e8a.jpg" 
                alt="Корчевание пня"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold">Корчевание пней</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/files/06f9b535-edf8-4b4c-974d-f65595babc25.jpg" 
                alt="Благоустройство территории"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold">Комплексная очистка</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы клиентов</h2>
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

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
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
                      <a href="mailto:Shargin41626@gmail.com" className="text-primary hover:underline">
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
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TreeDeciduous" size={32} />
                <span className="text-2xl font-bold">ЭкоСпил</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональные услуги по спилу деревьев в Кемерово и области с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Спил аварийных деревьев</li>
                <li>Корчевание пней</li>
                <li>Обрезка кроны</li>
                <li>Уборка и вывоз</li>
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
            © 2025 ЭкоСпил. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;