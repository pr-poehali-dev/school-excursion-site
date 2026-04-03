interface HomePageProps {
  onNavigate: (page: string) => void;
}

const MAIN_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/bc960892-f260-4a07-a956-1d1277a2971e.jpeg';

const stats = [
  { value: '5', label: 'Героев России' },
  { value: '2', label: 'Войны Афган и Чечня' },
  { value: '10+', label: 'Стендов выставки' },
  { value: '2024', label: 'Год выставки' },
];

const sections = [
  {
    icon: '🎖️',
    title: 'Герои и подвиги',
    desc: 'Стенды с историями героев: Вадим Епифанов, Борис Журавлёв, Александр Мальцев, Роман Торохов.',
    page: 'heroes',
  },
  {
    icon: '🚁',
    title: 'С.В. Палагин',
    desc: 'Подполковник авиации, Герой Российской Федерации, кавалер трёх орденов мужества.',
    page: 'palagin',
  },
  {
    icon: '📜',
    title: 'Эхо мужества',
    desc: '«Имена, которые не забыть» — стенд, посвящённый героям чеченских войн и их именам на улицах города.',
    page: 'echo',
  },
  {
    icon: '🎵',
    title: 'Песня «Братишка»',
    desc: 'Текст песни Александра Маршала, посвящённой легендарному вертолёту Ми-8 «Братишка».',
    page: 'song',
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${MAIN_STAND})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[hsl(20,14%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body uppercase tracking-widest mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Выставка памяти
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-light leading-none text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Герои
            <br />
            <span className="text-gold italic">и Подвиги</span>
          </h1>

          <p className="font-display text-lg md:text-2xl text-white/60 italic mb-6 animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            Дань уважения и благодарности всем героям нашей страны
          </p>

          <p className="font-body text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            Виртуальная версия выставки, посвящённой воинам, отдавшим жизнь за Родину. 
            Здесь хранится память о героях — тех, кто сражался в Афганистане, Чечне и других горячих точках.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <button
              onClick={() => onNavigate('heroes')}
              className="px-8 py-3.5 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              🎖️ Смотреть выставку
            </button>
            <button
              onClick={() => onNavigate('palagin')}
              className="px-8 py-3.5 border border-white/20 text-white font-body rounded hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              С.В. Палагин — Герой России
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
            «Подвигу всегда есть место на земле.
            <span className="text-gold"> Нет героев от рожденья —</span>
            &nbsp;они рождаются в боях!»
          </div>
          <div className="mt-6 font-body text-sm text-muted-foreground">
            Девиз выставки «Герои и подвиги»
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Выставка</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Разделы<br />
              <span className="italic text-gold">экспозиции</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((f, i) => (
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
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Помним. Гордимся.</div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-3">
                Мужество,<br />
                <span className="italic text-gold">выносливость, слава!</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Выставка «Герои и подвиги» — это живая память о тех, кто отдал всё ради защиты Родины.
                Изучите стенды, узнайте судьбы героев.
              </p>
              <button
                onClick={() => onNavigate('heroes')}
                className="px-10 py-4 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300"
              >
                Войти в выставку →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
