const PortfolioSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600">
            Примеры выполненных проектов в Кемерово и области
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://cdn.poehali.dev/files/ad2ccdc7-65ea-45c2-948d-b7523c10d88c.jpg"
              alt="Спил дерева частями"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-1">Альпинистский спил</h3>
              <p className="text-white/80 text-sm">Удаление дерева частями между зданиями</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://cdn.poehali.dev/files/f57a6809-830d-49dd-839f-dba42e260786.jpg"
              alt="Направленная валка дерева"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-1">Направленная валка</h3>
              <p className="text-white/80 text-sm">Быстрое удаление на открытом участке</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://cdn.poehali.dev/files/d03cb72d-a960-40e5-b137-7769fb789e8a.jpg"
              alt="Корчевание пня"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white font-bold text-xl mb-1">Корчевание пней</h3>
              <p className="text-white/80 text-sm">Фрезерование пня с вывозом опилок</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
