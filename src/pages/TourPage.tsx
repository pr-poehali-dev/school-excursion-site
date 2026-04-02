import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HALL_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/538614c2-b1a4-4fe7-b4e1-e608b1df8cdf.jpg';
const EXHIBIT_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/fe29102b-79f4-43bf-adb0-4447ed833057.jpg';
const GALLERY_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/4fc9d983-f2d1-48af-9a0b-71ed49344bfc.jpg';

const halls = [
  {
    id: 1,
    name: 'Зал основания',
    year: '1962',
    description: 'История создания школы, первые учителя и ученики. Документы и фотографии первых лет.',
    image: HALL_IMG,
    color: 'from-amber-900/40',
    hotspots: [
      { x: 25, y: 40, label: 'Первый директор', desc: 'Иван Петрович Смирнов — основатель школы, проработавший здесь 30 лет' },
      { x: 60, y: 55, label: 'Грамоты 1965 года', desc: 'Первые награды школы на городской олимпиаде по математике' },
      { x: 80, y: 35, label: 'Классная доска', desc: 'Оригинальная меловая доска из первого класса, датированная 1962 годом' },
    ]
  },
  {
    id: 2,
    name: 'Зал достижений',
    year: '1970–1990',
    description: 'Золотые годы школы. Кубки, дипломы, олимпиадные победы и выдающиеся выпускники.',
    image: EXHIBIT_IMG,
    color: 'from-yellow-900/40',
    hotspots: [
      { x: 30, y: 50, label: 'Кубок чемпионов', desc: 'Победа в городском первенстве по волейболу 1978 года' },
      { x: 65, y: 35, label: 'Стенд выпускников', desc: 'Выпускники, ставшие учёными, артистами и государственными деятелями' },
      { x: 50, y: 70, label: 'Летопись школы', desc: 'Рукописная летопись, которую вели старшеклассники с 1970 по 1990 год' },
    ]
  },
  {
    id: 3,
    name: 'Зал памяти',
    year: '1941–1945',
    description: 'Память о педагогах и выпускниках — участниках Великой Отечественной войны.',
    image: GALLERY_IMG,
    color: 'from-red-900/30',
    hotspots: [
      { x: 20, y: 45, label: 'Книга памяти', desc: 'Имена 47 выпускников, погибших в годы Великой Отечественной войны' },
      { x: 55, y: 30, label: 'Письма с фронта', desc: 'Подлинные письма учителя истории Фёдора Кузнецова, отправленные с фронта' },
      { x: 75, y: 60, label: 'Медали и ордена', desc: 'Коллекция наград, переданных семьями ветеранов в дар музею' },
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
              {/* Background image */}
              <img
                src={hall.image}
                alt={hall.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${hall.color} to-transparent`} />
              <div className="absolute inset-0 bg-black/30" />

              {/* Hall info */}
              <div className="absolute top-5 left-5 z-10">
                <div className="glass rounded-lg px-4 py-2">
                  <div className="font-body text-xs text-gold uppercase tracking-widest">{hall.year}</div>
                  <div className="font-display text-lg text-white">{hall.name}</div>
                </div>
              </div>

              {/* Navigation arrows */}
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

              {/* Hotspots */}
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

              {/* Hotspot detail */}
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

              {/* 360 badge */}
              <div className="absolute bottom-5 right-5 z-10 w-12 h-12 glass rounded-full flex items-center justify-center">
                <span className="font-body text-[10px] font-bold text-gold leading-none text-center">360°</span>
              </div>
            </div>

            {/* Dots */}
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
                Период: {hall.year}
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
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Навигация</div>
              <div className="grid grid-cols-1 gap-2">
                {halls.map((h, i) => (
                  <button
                    key={h.id}
                    onClick={() => { setActiveHall(i); setActiveHotspot(null); }}
                    className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all duration-300 text-left ${
                      i === activeHall ? 'border-gold/40 bg-gold/5' : 'border-transparent hover:border-border'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${i === activeHall ? 'bg-gold' : 'bg-border'}`} />
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
