import { useLang } from '@/context/LanguageContext';

const MAIN_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/bc960892-f260-4a07-a956-1d1277a2971e.jpeg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useLang();

  const stats = [
    { value: t('home.stat1.v'), label: t('home.stat1.l') },
    { value: t('home.stat2.v'), label: t('home.stat2.l') },
    { value: t('home.stat3.v'), label: t('home.stat3.l') },
    { value: t('home.stat4.v'), label: t('home.stat4.l') },
  ];

  const sections = [
    { icon: '🎖️', title: t('home.s1.title'), desc: t('home.s1.desc'), page: 'heroes' },
    { icon: '🚁', title: t('home.s2.title'), desc: t('home.s2.desc'), page: 'palagin' },
    { icon: '📜', title: t('home.s3.title'), desc: t('home.s3.desc'), page: 'echo' },
    { icon: '🎵', title: t('home.s4.title'), desc: t('home.s4.desc'), page: 'song' },
  ];

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
            {t('home.badge')}
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-light leading-none text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            {t('home.h1.top')}
            <br />
            <span className="text-gold italic">{t('home.h1.bottom')}</span>
          </h1>

          <p className="font-display text-lg md:text-2xl text-white/60 italic mb-6 animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
            {t('home.subtitle')}
          </p>

          <p className="font-body text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            {t('home.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <button
              onClick={() => onNavigate('heroes')}
              className="px-8 py-3.5 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              {t('home.btn.main')}
            </button>
            <button
              onClick={() => onNavigate('palagin')}
              className="px-8 py-3.5 border border-white/20 text-white font-body rounded hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              {t('home.btn.palagin')}
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-body text-xs uppercase tracking-widest">{t('home.scroll')}</span>
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
            {t('home.quote')}
          </div>
          <div className="mt-6 font-body text-sm text-muted-foreground">
            {t('home.quote.attr')}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('home.sections.label')}</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              {t('home.sections.h2.top')}<br />
              <span className="italic text-gold">{t('home.sections.h2.bottom')}</span>
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
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('home.cta.label')}</div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-3">
                {t('home.cta.h2.top')}<br />
                <span className="italic text-gold">{t('home.cta.h2.bottom')}</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                {t('home.cta.desc')}
              </p>
              <button
                onClick={() => onNavigate('heroes')}
                className="px-10 py-4 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300"
              >
                {t('home.cta.btn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
