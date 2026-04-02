const HERO_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/85c5bbe1-0716-47c0-be11-ceb9dad6bab8.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '2 512', label: 'Боевых вылетов' },
  { value: '2004', label: 'Год присвоения Героя' },
  { value: '340+', label: 'Экспонатов фонда' },
  { value: '2023', label: 'Год открытия музея' },
];

const features = [
  {
    icon: '🚁',
    title: 'Жизнь и подвиг',
    desc: 'Личные вещи Героя, документы, фотографии. Китель, лётный шлем и перчатки, переданные семьёй.',
    page: 'tour',
  },
  {
    icon: '🎖️',
    title: 'История боевой славы',
    desc: 'Экспонаты о локальных конфликтах, обмундирование, памятные знаки и гильзы поисковых экспедиций.',
    page: 'tour',
  },
  {
    icon: '🌿',
    title: 'Кубань — край Героев',
    desc: 'История авиации Кубани, выдающиеся жители Краснодарского края, их судьбы и достижения.',
    page: 'exhibits',
  },
  {
    icon: '📚',
    title: 'Уроки Мужества',
    desc: 'Музей служит базой для проведения уроков мужества, тематических экскурсий и исследований.',
    page: 'about',
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[hsl(20,14%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body uppercase tracking-widest mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Школа №103 им. С.В. Палагина · Краснодар
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-light leading-none text-white mb-4 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Герой
            <br />
            <span className="text-gold italic">Сергей Палагин</span>
          </h1>

          <p className="font-display text-lg md:text-2xl text-white/50 italic mb-3 animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            Подполковник · Герой Российской Федерации · 1968–2020
          </p>

          <p className="font-body text-sm md:text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            Виртуальный музей школы №103 хранит память о подвиге лётчика, совершившего 2 512 боевых вылетов и спасшего десятки жизней
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <button
              onClick={() => onNavigate('tour')}
              className="px-8 py-3.5 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              🎯 Начать 3D-тур
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 border border-white/20 text-white font-body rounded hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Биография Героя
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-body text-xs uppercase tracking-widest">Листайте</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-light text-gold">{s.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-display text-3xl md:text-4xl font-light italic text-foreground leading-relaxed">
            «Вертолёт и экипаж называли
            <span className="text-gold"> «заговорёнными»</span> — машина выходила из боя без повреждений,
            а экипаж за всё время службы не понёс потерь»
          </div>
          <div className="mt-6 font-body text-sm text-muted-foreground">
            Ми-8 МТВ-2 «Братишка» — позывной, данный солдатами, которых спасал экипаж Палагина
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Музейный фонд</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Разделы<br />
              <span className="italic text-gold">экспозиции</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="museum-card rounded-lg p-6 group cursor-pointer" onClick={() => onNavigate(f.page)}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, hsl(20,12%,12%), hsl(20,10%,8%))' }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(42,80%,62%,0.2) 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Адрес музея</div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-3">
                ул. Байбакова, 17<br />
                <span className="italic text-gold">Краснодар</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Школа №103 им. Героя Российской Федерации С.В. Палагина.<br />
                Музей открыт для экскурсий в учебные дни.
              </p>
              <button
                onClick={() => onNavigate('tour')}
                className="px-10 py-4 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300"
              >
                Войти в музей →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
