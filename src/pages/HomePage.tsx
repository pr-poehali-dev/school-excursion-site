interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/538614c2-b1a4-4fe7-b4e1-e608b1df8cdf.jpg';

const stats = [
  { value: '12', label: 'Залов музея' },
  { value: '340+', label: 'Экспонатов' },
  { value: '1962', label: 'Год основания' },
  { value: '60+', label: 'Лет истории' },
];

const features = [
  {
    icon: '🏛️',
    title: '3D-туры по залам',
    desc: 'Погрузитесь в атмосферу музея через интерактивные панорамные туры с точками интереса',
  },
  {
    icon: '🔍',
    title: 'Каталог экспонатов',
    desc: 'Подробные описания, фотографии и истории каждого предмета школьной коллекции',
  },
  {
    icon: '📸',
    title: 'Фотогалерея',
    desc: 'Архивные снимки, исторические документы и современные фотографии жизни школы',
  },
  {
    icon: '📖',
    title: 'История школы',
    desc: 'Хроника событий, выдающиеся выпускники и важные вехи за все годы существования',
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(20,14%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body uppercase tracking-widest mb-8 animate-fade-in"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Виртуальная экскурсия
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-light leading-none text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Школьный
            <br />
            <span className="text-gold italic">Музей</span>
          </h1>

          <p className="font-body text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            Откройте для себя историю школы через интерактивные залы, уникальные экспонаты и архивные фотографии
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <button
              onClick={() => onNavigate('tour')}
              className="px-8 py-3.5 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <span>🎯</span>
              Начать 3D-тур
            </button>
            <button
              onClick={() => onNavigate('exhibits')}
              className="px-8 py-3.5 border border-white/20 text-white font-body rounded hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              Смотреть экспонаты
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
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
              <div className="font-display text-5xl font-light text-gold">{s.value}</div>
              <div className="font-body text-sm text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Возможности</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Изучайте историю<br />
              <span className="italic text-gold">в новом формате</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="museum-card rounded-lg p-6 group cursor-pointer">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="relative rounded-2xl overflow-hidden p-16"
            style={{ background: 'linear-gradient(135deg, hsl(20,12%,12%), hsl(20,10%,8%))' }}
          >
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(42,80%,62%,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 50%, hsl(42,80%,62%,0.08) 0%, transparent 60%)'
              }}
            />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
                Начните свою<br />
                <span className="italic text-gold">экскурсию</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
                Перемещайтесь по залам, изучайте экспонаты и открывайте тайны школьной истории
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
