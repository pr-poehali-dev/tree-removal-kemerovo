import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Что говорят о нас наши клиенты
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Быстро приехали, аккуратно спилили два тополя во дворе. Всё убрали, вывезли. Ребята профессионалы своего дела!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">АС</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Андрей Сергеев</div>
                  <div className="text-sm text-gray-500">Кемерово, Заводский район</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Дерево было в опасном месте, рядом с проводами. Спилили частями, всё прошло отлично. Цена адекватная, работой довольна.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ЕП</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Елена Петрова</div>
                  <div className="text-sm text-gray-500">Кемерово, Центральный район</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Срочно нужно было убрать упавшее дерево после бури. Приехали через час, быстро всё распилили и увезли. Спасибо!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">ДК</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Дмитрий Ковалев</div>
                  <div className="text-sm text-gray-500">Кемерово, Ленинский район</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
