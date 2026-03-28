import { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  Coffee, 
  Map, 
  AlertCircle, 
  Ticket, 
  Users, 
  GraduationCap,
  Monitor,
  Wifi,
  Calendar,
  CreditCard,
  Star,
  Globe,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface CourseModule {
  number: string;
  title: string;
  description: string;
  benefit: string;
  icon: React.ElementType;
}

const modules: CourseModule[] = [
  {
    number: '1',
    title: 'Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    benefit: 'Уверенность уже в первые часы за границей.',
    icon: Plane
  },
  {
    number: '2',
    title: 'В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    benefit: 'Практика вежливых фраз и повседневной лексики.',
    icon: Hotel
  },
  {
    number: '3',
    title: 'Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    benefit: 'Развитие гастрономического словаря и уверенности в общении.',
    icon: Coffee
  },
  {
    number: '4',
    title: 'На улице: ориентирование и просьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
    icon: Map
  },
  {
    number: '5',
    title: 'Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    benefit: 'Важные фразы, которые могут спасти отпуск.',
    icon: AlertCircle
  },
  {
    number: '6–8',
    title: 'Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    benefit: 'Погружение в культурный контекст через язык.',
    icon: Ticket
  },
  {
    number: '7',
    title: 'Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    benefit: 'Игровая практика диалогов и неформального общения.',
    icon: Users
  },
  {
    number: '8',
    title: 'Дипломный проект: «Мой идеальный отпуск»',
    description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
    benefit: 'Развитие связной речи и творческого самовыражения.',
    icon: GraduationCap
  }
];

const features = [
  {
    title: 'Практическая речь',
    description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики',
    icon: Globe
  },
  {
    title: 'Реальные ситуации',
    description: 'Все ситуации — из реальной жизни путешественника',
    icon: Map
  },
  {
    title: 'Интерактивность',
    description: 'Ролевые игры, аудиоситуации, мини-квесты',
    icon: Users
  },
  {
    title: 'Результат',
    description: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс',
    icon: Star
  }
];

export default function App() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll-section');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672152239496-b2ac8ca8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB3b3JsZCUyMG1hcCUyMGFpcnBsYW5lJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDcyNTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travel background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm sm:text-base">Новый курс 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Английский для путешествий
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>

            <button 
              onClick={scrollToEnroll}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] shadow-lg inline-flex items-center gap-3"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              Записаться на курс
            </button>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 sm:mb-10 justify-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-300">Для кого курс</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="text-6xl sm:text-7xl mb-4 text-center">📚</div>
              <h3 className="text-xl sm:text-2xl text-cyan-300 mb-2 text-center">Первая группа</h3>
              <p className="text-base sm:text-lg text-slate-300 text-center">4–5 класс</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <div className="text-6xl sm:text-7xl mb-4 text-center">🎓</div>
              <h3 className="text-xl sm:text-2xl text-orange-300 mb-2 text-center">Вторая группа</h3>
              <p className="text-base sm:text-lg text-slate-300 text-center">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 sm:mb-12 justify-center">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-amber-300">Программа курса</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-slate-950" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-cyan-400 mb-1">Модуль {module.number}</div>
                      <h3 className="text-xl sm:text-2xl text-slate-100 mb-2">{module.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">{module.description}</p>
                  
                  <div className="flex items-start gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3 sm:p-4">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-cyan-300">{module.benefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 sm:mb-12 justify-center">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-orange-300">Почему этот курс особенный?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] text-center"
                >
                  <div className="inline-flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-slate-950" />
                  </div>
                  <h3 className="text-lg sm:text-xl text-orange-300 mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8 sm:mb-10 justify-center">
            <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-300">Что потребуется</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
              <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4 mx-auto" />
              <p className="text-slate-300 text-center text-sm sm:text-base">Стационарный компьютер или ноутбук с наушниками и микрофоном</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
              <Wifi className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mb-4 mx-auto" />
              <p className="text-slate-300 text-center text-sm sm:text-base">Стабильный интернет и Zoom</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 sm:col-span-3 sm:max-w-md sm:mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706403615881-d83dc2067c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnRzJTIwbGVhcm5pbmclMjBsYW5ndWFnZXN8ZW58MXx8fHwxNzc0NzI1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-slate-300 text-center text-sm sm:text-base">Желание учиться и готовность к новым приключениям!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-cyan-300">Расписание</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border-l-4 border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300">Четверг</span>
                  </div>
                  <p className="text-xl sm:text-2xl text-slate-100 mb-1">15:00 МСК</p>
                  <p className="text-slate-400">Группа 4–5 класс</p>
                </div>
                
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-300">Пятница</span>
                  </div>
                  <p className="text-xl sm:text-2xl text-slate-100 mb-1">15:30 МСК</p>
                  <p className="text-slate-400">Группа 6–8 класс</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-amber-300">Стоимость</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl text-amber-300 mb-1">Полный курс</h3>
                      <p className="text-slate-400">10 уроков</p>
                    </div>
                    <Star className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="text-3xl sm:text-4xl text-slate-100 mb-2">12 000 ₽</p>
                  <p className="text-sm sm:text-base text-slate-400">Максимальная выгода</p>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl text-slate-300 mb-1">Абонемент</h3>
                      <p className="text-slate-400">За урок</p>
                    </div>
                  </div>
                  <p className="text-3xl sm:text-4xl text-slate-100 mb-2">1 300 ₽</p>
                  <p className="text-sm sm:text-base text-slate-400">Гибкая оплата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-orange-500/10 p-8 sm:p-12 rounded-3xl border border-cyan-500/20">
            <div className="text-5xl sm:text-6xl mb-6">📢</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text mb-4 sm:mb-6">
              Набор открыт!
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-4">
              Группы маленькие — максимум <span className="text-cyan-400">6 детей</span>, чтобы каждый получил внимание.
            </p>
            <p className="text-xl sm:text-2xl text-orange-400 mb-6 sm:mb-8">
              Места ограничены!
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section id="enroll-section" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-t from-slate-950 to-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setShowEnrollForm(!showEnrollForm)}
            className="group relative bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:via-amber-600 hover:to-orange-600 text-slate-950 px-10 sm:px-16 py-5 sm:py-6 rounded-full text-xl sm:text-2xl transition-all duration-300 hover:scale-110 shadow-[0_0_40px_rgba(251,146,60,0.4)] hover:shadow-[0_0_60px_rgba(251,146,60,0.6)] animate-pulse hover:animate-none"
          >
            <span className="flex items-center gap-3 sm:gap-4">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              <span>Записаться на курс</span>
            </span>
          </button>

          {showEnrollForm && (
            <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-10 rounded-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl sm:text-3xl text-cyan-300 mb-6">Заявка на курс</h3>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Имя ребёнка"
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 placeholder-slate-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Класс (4–8)"
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 placeholder-slate-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Имя родителя"
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 placeholder-slate-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 placeholder-slate-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 placeholder-slate-500 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <select 
                    required
                    className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                  >
                    <option value="">Выберите группу</option>
                    <option value="4-5">4–5 класс (Четверг, 15:00)</option>
                    <option value="6-8">6–8 класс (Пятница, 15:30)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-950 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 sm:py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-cyan-400" />
            <p className="text-slate-400">Английский для путешествий</p>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
