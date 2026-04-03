import Icon from '@/components/ui/icon';

const STAND_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/bc960892-f260-4a07-a956-1d1277a2971e.jpeg';

const awards = [
  'Герой Российской Федерации',
  'Орден Мужества — I',
  'Орден Мужества — II',
  'Орден Мужества — III',
  'Медали за боевые заслуги',
];

const facts = [
  { icon: '🚁', label: 'Должность', value: 'Подполковник авиации' },
  { icon: '🇷🇺', label: 'Звание', value: 'Герой Российской Федерации' },
  { icon: '🏅', label: 'Награды', value: 'Кавалер трёх орденов Мужества' },
  { icon: '✈️', label: 'Вертолёт', value: 'Ми-8 МТВ-2 «Братишка»' },
];

const PalaginPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Герой Российской Федерации</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            Палагин
            <br />
            <span className="italic text-gold">Сергей Вячеславович</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Подполковник авиации, Герой Российской Федерации, кавалер трёх орденов Мужества.
            Лётчик, чей вертолёт «Братишка» стал легендой.
          </p>
        </div>

        {/* Main stand */}
        <div
          className="relative rounded-2xl overflow-hidden mb-16 border border-border group cursor-pointer"
          onClick={() => window.open(STAND_IMG, '_blank')}
        >
          <img
            src={STAND_IMG}
            alt="Стенд Палагина"
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            style={{ maxHeight: 520, objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">Стенд выставки</div>
            <div className="font-display text-2xl text-white">МИР ДОЛЖЕН ПРАВИТЬ МИРОМ!</div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/60 rounded-full p-2">
              <Icon name="ZoomIn" size={18} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {facts.map((f, i) => (
            <div key={i} className="museum-card rounded-xl p-6 text-center">
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">{f.label}</div>
              <div className="font-display text-base text-foreground">{f.value}</div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Biography */}
          <div>
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Биография</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-6">
              Путь <span className="italic text-gold">лётчика</span>
            </h2>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                Сергей Вячеславович Палагин — прославленный военный лётчик, подполковник авиации, 
                удостоенный звания Героя Российской Федерации за выдающиеся заслуги перед Отечеством.
              </p>
              <p>
                На боевом вертолёте Ми-8 МТВ-2, получившем позывной «Братишка», экипаж Палагина 
                совершил тысячи вылетов в горячих точках, доставляя грузы, эвакуируя раненых 
                и поддерживая наземные войска.
              </p>
              <p>
                Мир помнит его девизами: «Доблесть не знает непроходимых путей», 
                «Мужество, выносливость, слава!»
              </p>
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Награды</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-6">
              Ордена и <span className="italic text-gold">медали</span>
            </h2>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-3 museum-card rounded-lg px-4 py-3">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="font-body text-sm text-foreground">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-2xl p-10 text-center mb-8"
          style={{ background: 'linear-gradient(135deg, hsl(20,12%,12%), hsl(20,10%,8%))' }}
        >
          <div className="font-display text-3xl md:text-4xl font-light italic text-foreground leading-relaxed mb-6">
            «Доблесть не знает
            <span className="text-gold"> непроходимых путей»</span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            Девиз Сергея Палагина
          </div>
        </div>

        {/* Song section */}
        <div className="text-center">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Песня о вертолёте</div>
          <p className="font-body text-muted-foreground text-sm mb-6">
            О подвигах экипажа «Братишки» написана песня. Текст её автора — Александра Маршала.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold font-body text-sm rounded hover:bg-gold/10 transition-all duration-300"
          >
            <Icon name="Music" size={16} />
            Читать песню «Братишка»
          </a>
        </div>

      </div>
    </div>
  );
};

export default PalaginPage;
