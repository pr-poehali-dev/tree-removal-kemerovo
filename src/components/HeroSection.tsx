import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Icon name="Zap" size={16} />
              Выезд за 2 часа
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900">
              Спил и удаление деревьев<br />
              <span className="text-primary">в Кемерово</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Профессиональный спил деревьев любой сложности в Кемерово и области. Направленная валка, альпинистский спил частями, корчевание пней. Работаем с 2016 года.
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
  );
};

export default HeroSection;
