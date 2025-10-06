import Icon from "@/components/ui/icon";

const WhyUsSection = () => {
  return (
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
  );
};

export default WhyUsSection;
