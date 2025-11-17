import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: '',
    attending: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили ваше подтверждение. До встречи на празднике!",
    });
    setFormData({ name: '', guests: '', message: '', attending: true });
  };

  const schedule = [
    { time: '15:00', event: 'Сбор гостей' },
    { time: '15:30', event: 'Церемония бракосочетания' },
    { time: '16:30', event: 'Фуршет и поздравления' },
    { time: '18:00', event: 'Праздничный ужин' },
    { time: '20:00', event: 'Первый танец молодоженов' },
    { time: '20:30', event: 'Танцы и веселье' }
  ];

  const photos = [
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/32b0dabf-7d53-4995-9d3b-a8bc4cfe3b48.jpg',
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/57bb3c91-400e-4c40-af2b-0adc7b725b59.jpg',
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/635c14b8-3f29-40ed-86e7-a9dadfcdaff2.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-muted to-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/32b0dabf-7d53-4995-9d3b-a8bc4cfe3b48.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light text-primary mb-6">
            Анна & Дмитрий
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-primary/30"></div>
            <p className="font-serif text-3xl md:text-4xl text-muted-foreground">08 • 08 • 2026</p>
            <div className="h-px w-16 bg-primary/30"></div>
          </div>
          <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Приглашаем вас разделить с нами самый счастливый день в нашей жизни
          </p>
          <Icon name="Heart" className="text-primary mx-auto mt-8 animate-pulse" size={32} />
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="CalendarDays" className="text-primary mx-auto mb-4" size={40} />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-4">Программа дня</h2>
            <p className="font-sans text-muted-foreground">Расписание нашего праздника</p>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="font-serif text-3xl text-primary font-semibold min-w-[100px]">{item.time}</div>
                  <div className="h-12 w-px bg-primary/20"></div>
                  <div className="font-sans text-lg text-foreground">{item.event}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dresscode" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Icon name="Shirt" className="text-primary mx-auto mb-4" size={40} />
          <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-8">Дресс-код</h2>
          <Card className="border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="font-sans text-lg text-foreground/80 leading-relaxed mb-6">
                Приветствуется нарядная одежда в пастельных тонах
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFDEE2] border-2 border-primary/20"></div>
                  <span className="font-sans text-sm text-muted-foreground">Розовый</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#E5DEFF] border-2 border-primary/20"></div>
                  <span className="font-sans text-sm text-muted-foreground">Лавандовый</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#F1F0FB] border-2 border-primary/20"></div>
                  <span className="font-sans text-sm text-muted-foreground">Жемчужный</span>
                </div>
              </div>
              <p className="font-sans text-sm text-muted-foreground mt-6 italic">
                Пожалуйста, избегайте белого и чёрного цветов
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="venue" className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-4">Место проведения</h2>
            <p className="font-sans text-muted-foreground">Ресторан "Летний сад"</p>
          </div>

          <Card className="border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted relative">
                <img 
                  src="https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/57bb3c91-400e-4c40-af2b-0adc7b725b59.jpg" 
                  alt="Место проведения"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-sans font-semibold text-foreground">Адрес</p>
                    <p className="font-sans text-muted-foreground">г. Москва, ул. Садовая, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-sans font-semibold text-foreground">Телефон</p>
                    <p className="font-sans text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <Button className="w-full mt-4 font-sans" size="lg">
                  <Icon name="Navigation" className="mr-2" size={18} />
                  Построить маршрут
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <Icon name="Camera" className="text-primary mx-auto mb-4" size={40} />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-4">Галерея</h2>
            <p className="font-sans text-muted-foreground">Моменты нашей истории</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="border-primary/20 overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={photo} 
                      alt={`Фото ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <Icon name="Mail" className="text-primary mx-auto mb-4" size={40} />
            <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-4">Подтверждение</h2>
            <p className="font-sans text-muted-foreground">Пожалуйста, подтвердите ваше присутствие до 01.07.2026</p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-foreground">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="font-sans"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="font-sans text-foreground">Количество гостей *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="font-sans"
                    placeholder="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-foreground">Пожелания или комментарии</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-sans min-h-[100px]"
                    placeholder="Поделитесь вашими пожеланиями..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="attending"
                    checked={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.checked })}
                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                  />
                  <Label htmlFor="attending" className="font-sans text-foreground cursor-pointer">
                    Я смогу присутствовать
                  </Label>
                </div>

                <Button type="submit" className="w-full font-sans" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Icon name="Users" className="text-primary mx-auto mb-4" size={40} />
          <h2 className="font-serif text-5xl md:text-6xl font-light text-primary mb-8">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">Координатор со стороны невесты</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Icon name="User" className="text-primary flex-shrink-0" size={18} />
                    <span className="font-sans text-foreground">Мария Иванова</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={18} />
                    <span className="font-sans text-foreground">+7 (999) 111-22-33</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-primary mb-4">Координатор со стороны жениха</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Icon name="User" className="text-primary flex-shrink-0" size={18} />
                    <span className="font-sans text-foreground">Алексей Петров</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={18} />
                    <span className="font-sans text-foreground">+7 (999) 444-55-66</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 text-center bg-secondary/50">
        <p className="font-serif text-3xl text-primary mb-2">До встречи!</p>
        <p className="font-sans text-muted-foreground">С любовью, Анна и Дмитрий</p>
        <Icon name="Heart" className="text-primary mx-auto mt-4" size={24} />
      </footer>
    </div>
  );
}
