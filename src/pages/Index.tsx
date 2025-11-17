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
      title: "Спасибо за ответ! 🎉",
      description: "Мы получили ваше подтверждение. До встречи на празднике!",
    });
    setFormData({ name: '', guests: '', message: '', attending: true });
  };

  const schedule = [
    { time: '15:00', event: 'Сбор гостей', icon: '🎈' },
    { time: '15:30', event: 'Церемония бракосочетания', icon: '💒' },
    { time: '16:30', event: 'Фуршет и поздравления', icon: '🍰' },
    { time: '18:00', event: 'Праздничный ужин', icon: '🍽️' },
    { time: '20:00', event: 'Первый танец молодоженов', icon: '💃' },
    { time: '20:30', event: 'Танцы и веселье', icon: '🎵' }
  ];

  const photos = [
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/a33bd4bd-0261-44c5-5a6b-2e95096ef406.jpg',
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/b41c8883-c0ab-4709-ac8d-81278dc09dc5.jpg',
    'https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/189d9814-9ecb-4854-85a2-1b1beecdf00b.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-muted to-accent/20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>
        <img src="https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/a33bd4bd-0261-44c5-5a6b-2e95096ef406.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-40 right-20 w-32 h-32 opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <img src="https://cdn.poehali.dev/projects/5c81d96d-cd01-43c2-b256-648ccec6521e/files/189d9814-9ecb-4854-85a2-1b1beecdf00b.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute -top-8 left-1/4 transform -rotate-12">
              <span className="text-6xl">❤️</span>
            </div>
            <div className="absolute -top-4 right-1/4 transform rotate-12">
              <span className="text-5xl">💕</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            <div className="relative group">
              <div className="absolute inset-0 bg-white transform rotate-3 rounded-3xl shadow-lg"></div>
              <img 
                src="https://cdn.poehali.dev/files/51150b9f-9b46-4cb8-b07f-10fd6f56e4f5.png"
                alt="Карина"
                className="relative w-48 h-48 object-cover rounded-3xl border-4 border-white shadow-xl"
              />
            </div>

            <div className="font-handwritten text-8xl md:text-9xl text-primary font-bold transform -rotate-6">
              Д + К
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-white transform -rotate-3 rounded-3xl shadow-lg"></div>
              <img 
                src="https://cdn.poehali.dev/files/51150b9f-9b46-4cb8-b07f-10fd6f56e4f5.png"
                alt="Данил"
                className="relative w-48 h-48 object-cover rounded-3xl border-4 border-white shadow-xl"
              />
            </div>
          </div>

          <h1 className="font-handwritten text-6xl md:text-7xl text-foreground mb-6">
            Узнаёте этих детишек?
          </h1>
          <p className="font-handwritten text-5xl md:text-6xl text-primary mb-8 font-bold">
            Да-да, это мы!
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
            <p className="font-handwritten text-4xl md:text-5xl text-foreground/80">08 • 08 • 2026</p>
            <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
          </div>

          <p className="font-sans text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Время летит так быстро... Мы выросли, и теперь готовы создать свою семью.
            И нам невероятно хочется, чтобы в этот важный день рядом были те, 
            кто был с нами в самые тёплые моменты жизни.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <span className="text-4xl animate-bounce">🎉</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🎊</span>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 relative">
        <div className="absolute top-10 right-10 text-8xl opacity-10 animate-spin" style={{ animationDuration: '20s' }}>
          🎪
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-6xl mb-4 block">📅</span>
            <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-4 font-bold">Программа дня</h2>
            <p className="font-sans text-xl text-muted-foreground">Расписание нашего праздника</p>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="border-4 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-scale-in bg-white/80 backdrop-blur" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-center gap-6">
                  <span className="text-5xl">{item.icon}</span>
                  <div className="font-handwritten text-4xl text-primary font-bold min-w-[120px]">{item.time}</div>
                  <div className="h-12 w-1 bg-primary/20 rounded-full"></div>
                  <div className="font-sans text-lg md:text-xl text-foreground font-semibold">{item.event}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dresscode" className="py-20 px-4 relative">
        <div className="absolute bottom-10 left-10 text-8xl opacity-10 transform rotate-12">
          👗
        </div>
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <span className="text-6xl mb-4 block">👔</span>
          <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-8 font-bold">Дресс-код</h2>
          <Card className="border-4 border-secondary/50 max-w-2xl mx-auto bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-6">
                Приветствуется яркая нарядная одежда! 🌈
              </p>
              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B9D] border-4 border-white shadow-lg"></div>
                  <span className="font-sans text-sm font-semibold text-foreground">Розовый</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#87CEEB] border-4 border-white shadow-lg"></div>
                  <span className="font-sans text-sm font-semibold text-foreground">Голубой</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#FFD93D] border-4 border-white shadow-lg"></div>
                  <span className="font-sans text-sm font-semibold text-foreground">Жёлтый</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#C3B1E1] border-4 border-white shadow-lg"></div>
                  <span className="font-sans text-sm font-semibold text-foreground">Лиловый</span>
                </div>
              </div>
              <p className="font-handwritten text-2xl text-muted-foreground italic">
                Давайте сделаем этот день красочным! 🎨
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="venue" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">📍</span>
            <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-4 font-bold">Место проведения</h2>
            <p className="font-sans text-2xl text-muted-foreground font-semibold">Ресторан "Летний сад"</p>
          </div>

          <Card className="border-4 border-accent/50 overflow-hidden bg-white/80 backdrop-blur">
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
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-sans font-bold text-lg text-foreground">Адрес</p>
                    <p className="font-sans text-muted-foreground">г. Москва, ул. Садовая, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-sans font-bold text-lg text-foreground">Телефон</p>
                    <p className="font-sans text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <Button className="w-full mt-4 font-sans text-lg h-14" size="lg">
                  <Icon name="Navigation" className="mr-2" size={24} />
                  Построить маршрут
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 relative">
        <div className="absolute top-20 left-1/4 text-6xl opacity-20 animate-pulse">
          ⭐
        </div>
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">📸</span>
            <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-4 font-bold">Галерея</h2>
            <p className="font-sans text-xl text-muted-foreground">Моменты нашей истории</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-white transform rotate-2 rounded-3xl shadow-lg transition-transform group-hover:rotate-6"></div>
                <Card className="relative border-4 border-white overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted relative overflow-hidden rounded-2xl">
                      <img 
                        src={photo} 
                        alt={`Фото ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4 relative">
        <div className="absolute bottom-20 right-20 text-7xl opacity-20 animate-bounce">
          💌
        </div>
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block">✉️</span>
            <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-4 font-bold">Подтверждение</h2>
            <p className="font-sans text-lg text-muted-foreground">Пожалуйста, подтвердите ваше присутствие до 01.07.2026</p>
          </div>

          <Card className="border-4 border-primary/30 bg-white/80 backdrop-blur">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-foreground font-semibold text-lg">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="font-sans text-lg h-12 border-2"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="font-sans text-foreground font-semibold text-lg">Количество гостей *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="font-sans text-lg h-12 border-2"
                    placeholder="1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-sans text-foreground font-semibold text-lg">Пожелания или комментарии</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="font-sans min-h-[120px] text-lg border-2"
                    placeholder="Поделитесь вашими пожеланиями..."
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-2xl">
                  <input
                    type="checkbox"
                    id="attending"
                    checked={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.checked })}
                    className="w-6 h-6 text-primary rounded-lg focus:ring-primary"
                  />
                  <Label htmlFor="attending" className="font-sans text-foreground cursor-pointer text-lg font-semibold">
                    Я смогу присутствовать ✨
                  </Label>
                </div>

                <Button type="submit" className="w-full font-sans text-xl h-14 shadow-lg" size="lg">
                  <Icon name="Send" className="mr-2" size={24} />
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <span className="text-6xl mb-4 block">👥</span>
          <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-8 font-bold">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-4 border-secondary/50 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="font-handwritten text-4xl text-primary mb-4 font-bold">Координатор со стороны невесты</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <span className="font-sans text-foreground font-semibold text-lg">Мария Иванова</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span className="font-sans text-foreground">+7 (999) 111-22-33</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-accent/50 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="font-handwritten text-4xl text-primary mb-4 font-bold">Координатор со стороны жениха</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <span className="font-sans text-foreground font-semibold text-lg">Алексей Петров</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span className="font-sans text-foreground">+7 (999) 444-55-66</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 text-center bg-gradient-to-t from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[20rem]">💝</span>
        </div>
        <div className="relative z-10">
          <p className="font-handwritten text-5xl md:text-6xl text-primary mb-4 font-bold">До встречи!</p>
          <p className="font-sans text-xl text-muted-foreground mb-6">С любовью, Данил и Карина</p>
          <div className="flex justify-center gap-3">
            <span className="text-4xl animate-pulse">💕</span>
            <span className="text-5xl animate-pulse" style={{ animationDelay: '0.5s' }}>❤️</span>
            <span className="text-4xl animate-pulse" style={{ animationDelay: '1s' }}>💕</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
