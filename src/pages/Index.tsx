import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [compareSlider, setCompareSlider] = useState(50);

  const portfolioItems = [
    {
      id: 1,
      title: 'Современная квартира',
      before: 'https://cdn.poehali.dev/projects/87377f7e-05af-4cc2-96d9-e1134988ff4d/files/c5793c8c-d06b-48fd-829e-6a22f5d947e1.jpg',
      after: 'https://cdn.poehali.dev/projects/87377f7e-05af-4cc2-96d9-e1134988ff4d/files/dff095a7-8789-46ba-b78f-52624a71dca5.jpg',
      area: '85 м²',
      duration: '45 дней'
    },
    {
      id: 2,
      title: 'Офисное помещение',
      before: 'https://cdn.poehali.dev/projects/87377f7e-05af-4cc2-96d9-e1134988ff4d/files/747c7221-9036-4138-bdf4-19bc50b41a62.jpg',
      after: 'https://cdn.poehali.dev/projects/87377f7e-05af-4cc2-96d9-e1134988ff4d/files/4bd33f3b-91d0-4c7c-8218-e591fae0208d.jpg',
      area: '120 м²',
      duration: '60 дней'
    }
  ];

  const services = [
    { icon: 'Home', title: 'Ремонт квартир', desc: 'Косметический и капитальный ремонт под ключ', price: 'от 5 000 ₽/м²' },
    { icon: 'Building', title: 'Ремонт офисов', desc: 'Создание современного рабочего пространства', price: 'от 6 500 ₽/м²' },
    { icon: 'Store', title: 'Ремонт магазинов', desc: 'Дизайн и оборудование коммерческих помещений', price: 'от 7 000 ₽/м²' },
    { icon: 'Paintbrush', title: 'Дизайн интерьера', desc: 'Разработка уникального дизайн-проекта', price: 'от 1 500 ₽/м²' }
  ];

  const pricingPlans = [
    {
      name: 'Косметический',
      price: '5 000',
      features: ['Поклейка обоев', 'Покраска стен', 'Замена напольного покрытия', 'Замена электрики', 'Базовая сантехника']
    },
    {
      name: 'Капитальный',
      price: '8 500',
      popular: true,
      features: ['Перепланировка', 'Полная замена коммуникаций', 'Установка новых окон', 'Выравнивание стен и полов', 'Монтаж натяжных потолков', 'Установка дверей']
    },
    {
      name: 'Премиум',
      price: '15 000',
      features: ['Дизайн-проект', 'Материалы премиум класса', 'Индивидуальная мебель', 'Умный дом', 'Декоративная отделка', 'VIP обслуживание']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            РемонтПро
          </h1>
          <div className="hidden md:flex gap-6">
            {['home', 'services', 'portfolio', 'pricing', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-semibold transition-all hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'services' && 'Услуги'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'pricing' && 'Прайс'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="hidden md:block">Получить консультацию</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 animate-slide-up">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Современный ремонт{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  под ключ
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Превращаем ваши идеи в реальность. Качественный ремонт квартир, офисов и магазинов с гарантией 3 года.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('portfolio')}>
                  <Icon name="Eye" className="mr-2" size={20} />
                  Смотреть работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                <img
                  src="https://cdn.poehali.dev/projects/87377f7e-05af-4cc2-96d9-e1134988ff4d/files/dff095a7-8789-46ba-b78f-52624a71dca5.jpg"
                  alt="Современный интерьер"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр ремонтных работ любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer border-2 hover:border-primary"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интерактивная галерея: проведите слайдером, чтобы увидеть трансформацию
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioItems.map((item, idx) => (
              <Card key={item.id} className="p-6 animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <div className="relative h-96 rounded-lg overflow-hidden mb-4 group">
                  <img
                    src={item.after}
                    alt="После ремонта"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                    style={{
                      backgroundImage: `url(${item.before})`,
                      clipPath: `inset(0 ${100 - compareSlider}% 0 0)`
                    }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                    style={{ left: `${compareSlider}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <Icon name="ArrowLeftRight" size={24} className="text-primary" />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={compareSlider}
                    onChange={(e) => setCompareSlider(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    До ремонта
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    После ремонта
                  </div>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={16} className="text-primary" />
                    <span className="font-semibold">{item.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span className="font-semibold">{item.duration}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий вариант ремонта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 relative animate-slide-up ${
                  plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold text-primary mb-2">{plan.price} ₽</div>
                  <div className="text-muted-foreground">за м²</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => scrollToSection('contacts')}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите бесплатный расчет стоимости ремонта
            </p>
          </div>
          <Card className="p-8 animate-scale-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input type="email" placeholder="example@mail.ru" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Опишите ваш проект</label>
                <Textarea
                  placeholder="Расскажите о том, какой ремонт вам нужен..."
                  className="min-h-32"
                />
              </div>
              <Button size="lg" className="w-full text-lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t">
              <div className="text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                <div className="font-bold">+7 (999) 123-45-67</div>
                <div className="text-sm text-muted-foreground">Ежедневно 9:00 - 21:00</div>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={32} className="text-secondary mx-auto mb-3" />
                <div className="font-bold">info@remontpro.ru</div>
                <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={32} className="text-accent mx-auto mb-3" />
                <div className="font-bold">г. Москва</div>
                <div className="text-sm text-muted-foreground">Работаем по всему городу</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            РемонтПро
          </h3>
          <p className="text-background/70 mb-6">
            Профессиональный ремонт с гарантией качества
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-sm text-background/60">
            © 2024 РемонтПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
