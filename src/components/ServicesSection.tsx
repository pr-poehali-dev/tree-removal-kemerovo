import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
