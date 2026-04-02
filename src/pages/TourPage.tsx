import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_HELI = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/85c5bbe1-0716-47c0-be11-ceb9dad6bab8.jpg';
const IMG_HELM = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/236517fa-ef53-49e5-87ff-d59b8c43a1c5.jpg';
const IMG_MEDAL = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/59525366-53c6-49f3-8f7a-4569f4594fd9.jpg';

const halls = [
  {
    id: 1,
    name: 'Жизнь и подвиг Палагина',
    year: 'Центральный зал',
    description: 'Центральная часть фонда. Личные вещи полковника — элементы лётного снаряжения, китель, фуражка, переданные супругой. Фотоматериалы боевых будней и операций на Северном Кавказе.',
    image: IMG_HELM,
    color: 'from-amber-900/50',
    hotspots: [
      { x: 25, y: 42, label: 'Лётный шлем «Братишки»', desc: 'Личный лётный шлем С.В. Палагина с вертолёта Ми-8 МТВ-2. Был в кабине во время всех боевых вылетов. Передан в дар школе супругой Героя.' },
      { x: 62, y: 55, label: 'Перчатки лётчика', desc: 'Кожаные лётные перчатки — часть экипировки пилота вертолёта. Один из самых личных и трогательных экспонатов фонда.' },
      { x: 80, y: 32, label: 'Фотоархив семьи', desc: 'Снимки из личного архива, запечатлевшие боевые будни лётчика в период операций в Чечне и Дагестане.' },
    ]
  },
  {
    id: 2,
    name: 'История боевой славы',
    year: 'Зал №2',
    description: 'Экспонаты, посвящённые локальным конфликтам и современной истории Вооружённых Сил РФ. Элементы обмундирования, памятные знаки и гильзы поисковых экспедиций.',
    image: IMG_HELI,
    color: 'from-slate-900/60',
    hotspots: [
      { x: 28, y: 48, label: 'Ми-8 МТВ-2 «Братишка»', desc: 'Боевой вертолёт, на котором Палагин совершал вылеты в Чечне. Солдаты дали машине имя «Братишка» за то, что она всегда возвращала их домой.' },
      { x: 60, y: 38, label: 'Карта операций', desc: 'Карта боевых действий с отмеченными маршрутами вылетов. Лето 2000 — эвакуация десантников, июнь 2002 — спасение разведчиков у Шали.' },
      { x: 78, y: 62, label: 'Гильзы с мест боёв', desc: 'Гильзы, найденные в ходе поисковых экспедиций в районах операций в Северо-Кавказском регионе.' },
    ]
  },
  {
    id: 3,
    name: 'Кубань — край Героев',
    year: 'Зал №3',
    description: 'Материалы о выдающихся жителях Краснодарского края и истории развития авиации на Кубани. Связь судьбы Героя с историей региона.',
    image: IMG_MEDAL,
    color: 'from-yellow-900/50',
    hotspots: [
      { x: 30, y: 45, label: 'Золотая Звезда Героя РФ', desc: 'Копия государственной награды — медали «Золотая Звезда» Героя Российской Федерации, присвоенной Указом Президента от 6 апреля 2004 года.' },
      { x: 58, y: 35, label: 'Именная доска школы', desc: 'В 2022 году решением городской Думы Краснодара школе №103 присвоено имя Героя. Здесь хранятся материалы о присвоении.' },
      { x: 75, y: 58, label: 'Авиация Кубани', desc: 'Стенд об истории военной авиации Краснодарского края и 487-м отдельном вертолётном полку в Будённовске.' },
    ]
  },
];

const TourPage = () => {
  const [activeHall, setActiveHall] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const hall = halls[activeHall];

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Виртуальный тур</div>
          <h1 className="font-display text-5xl font-light text-foreground">
            3D-экскурсия<br />
            <span className="italic text-gold">по залам музея</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-lg">
            Нажимайте на золотые точки, чтобы узнать об экспонатах. Музей им. С.В. Палагина, школа №103, Краснодар.
          </p>
        </div>

        {/* Hall selector */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {halls.map((h, i) => (
            <button
              key={h.id}
              onClick={() => { setActiveHall(i); setActiveHotspot(null); }}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full border font-body text-sm transition-all duration-300 ${
                activeHall === i
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40 hover:text-foreground'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        {/* Main viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panorama */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] museum-card">
              <img
                src={hall.image}
                alt={hall.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${hall.color} to-transparent`} />
              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute top-5 left-5 z-10">
                <div className="glass rounded-lg px-4 py-2">
                  <div className="font-body text-xs text-gold uppercase tracking-widest">{hall.year}</div>
                  <div className="font-display text-lg text-white">{hall.name}</div>
                </div>
              </div>

              <button
                onClick={() => { setActiveHall((activeHall - 1 + halls.length) % halls.length); setActiveHotspot(null); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
              >
                <Icon name="ChevronLeft" size={18} />
              </button>
              <button
                onClick={() => { setActiveHall((activeHall + 1) % halls.length); setActiveHotspot(null); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors duration-300"
              >
                <Icon name="ChevronRight" size={18} />
              </button>

              {hall.hotspots.map((hs, i) => (
                <button
                  key={i}
                  onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                  className="absolute z-10 group"
                  style={{ left: `${hs.x}%`, top: `${hs.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    activeHotspot === i
                      ? 'bg-gold border-gold scale-110'
                      : 'bg-gold/20 border-gold hotspot hover:bg-gold/40'
                  }`}>
                    <Icon name="Plus" size={14} className={activeHotspot === i ? 'text-[hsl(20,14%,6%)]' : 'text-gold'} />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap font-body text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {hs.label}
                  </div>
                </button>
              ))}

              {activeHotspot !== null && (
                <div className="absolute bottom-5 left-5 right-5 z-20 glass rounded-lg p-4 animate-fade-up">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display text-base text-gold mb-1">{hall.hotspots[activeHotspot].label}</div>
                      <p className="font-body text-sm text-white/80 leading-relaxed">{hall.hotspots[activeHotspot].desc}</p>
                    </div>
                    <button onClick={() => setActiveHotspot(null)} className="text-white/50 hover:text-white flex-shrink-0">
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                </div>
              )}

              <div className="absolute bottom-5 right-5 z-10 w-12 h-12 glass rounded-full flex items-center justify-center">
                <span className="font-body text-[10px] font-bold text-gold leading-none text-center">360°</span>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {halls.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveHall(i); setActiveHotspot(null); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeHall ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="museum-card rounded-xl p-6">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">О зале</div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{hall.name}</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{hall.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                <Icon name="MapPin" size={12} className="text-gold" />
                Музей им. С.В. Палагина, ул. Байбакова, 17
              </div>
            </div>

            <div className="museum-card rounded-xl p-6">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Точки интереса</div>
              <div className="flex flex-col gap-3">
                {hall.hotspots.map((hs, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className={`flex items-center gap-3 text-left p-2 rounded-lg transition-all duration-300 ${
                      activeHotspot === i ? 'bg-gold/10' : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      activeHotspot === i ? 'border-gold bg-gold/20' : 'border-border'
                    }`}>
                      <span className="font-body text-xs text-gold">{i + 1}</span>
                    </div>
                    <span className={`font-body text-sm ${activeHotspot === i ? 'text-gold' : 'text-foreground'}`}>{hs.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="museum-card rounded-xl p-6">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Залы музея</div>
              <div className="grid grid-cols-1 gap-2">
                {halls.map((h, i) => (
                  <button
                    key={h.id}
                    onClick={() => { setActiveHall(i); setActiveHotspot(null); }}
                    className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all duration-300 text-left ${
                      i === activeHall ? 'border-gold/40 bg-gold/5' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i === activeHall ? 'bg-gold' : 'bg-border'}`} />
                    <span className={`font-body text-sm ${i === activeHall ? 'text-gold' : 'text-muted-foreground'}`}>{h.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
