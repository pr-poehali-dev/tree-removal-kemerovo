import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface ContactsSectionProps {
  formData: {
    name: string;
    phone: string;
    address: string;
    description: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactsSection = ({ formData, setFormData, handleSubmit }: ContactsSectionProps) => {
  return (
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
  );
};

export default ContactsSection;
