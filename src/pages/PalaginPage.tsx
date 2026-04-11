import Icon from '@/components/ui/icon';
import { useLang } from '@/context/LanguageContext';

const STAND_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/76aba6fc-53c6-4fec-a3ad-b9273afb9dc5.jpeg';
const PORTRAIT_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/64e1b8e2-955b-4602-a8a1-5935699fe4ed.jpeg';

const PalaginPage = () => {
  const { t } = useLang();

  const facts = [
    { icon: '🚁', label: t('palagin.fact1.label'), value: t('palagin.fact1.value') },
    { icon: '🇷🇺', label: t('palagin.fact2.label'), value: t('palagin.fact2.value') },
    { icon: '🏅', label: t('palagin.fact3.label'), value: t('palagin.fact3.value') },
    { icon: '✈️', label: t('palagin.fact4.label'), value: t('palagin.fact4.value') },
  ];

  const awards = [
    t('palagin.award1'),
    t('palagin.award2'),
    t('palagin.award3'),
    t('palagin.award4'),
    t('palagin.award5'),
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('palagin.label')}</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            {t('palagin.h1.top')}
            <br />
            <span className="italic text-gold">{t('palagin.h1.bottom')}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            {t('palagin.subtitle')}
          </p>
        </div>

        {/* Portrait + Stand */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 items-start">
          {/* Portrait */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border group cursor-pointer shrink-0 w-full md:w-72"
            onClick={() => window.open(PORTRAIT_IMG, '_blank')}
          >
            <img
              src={PORTRAIT_IMG}
              alt="С.В. Палагин в кабине вертолёта"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ height: 320, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-0.5">Фото</div>
              <div className="font-display text-sm text-white italic">С.В. Палагин в кабине вертолёта</div>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 rounded-full p-1.5">
                <Icon name="ZoomIn" size={15} className="text-gold" />
              </div>
            </div>
          </div>

          {/* Main stand */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border group cursor-pointer flex-1"
            onClick={() => window.open(STAND_IMG, '_blank')}
          >
            <img
              src={STAND_IMG}
              alt="Palagin stand"
              className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              style={{ height: 320, objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{t('palagin.stand.label')}</div>
              <div className="font-display text-xl text-white">{t('palagin.stand.title')}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
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
          <div>
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('palagin.bio.label')}</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-6">
              {t('palagin.bio.h2.top')} <span className="italic text-gold">{t('palagin.bio.h2.bottom')}</span>
            </h2>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>{t('palagin.bio.p1')}</p>
              <p>{t('palagin.bio.p2')}</p>
              <p>{t('palagin.bio.p3')}</p>
            </div>
          </div>

          <div>
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('palagin.awards.label')}</div>
            <h2 className="font-display text-3xl font-light text-foreground mb-6">
              {t('palagin.awards.h2.top')} <span className="italic text-gold">{t('palagin.awards.h2.bottom')}</span>
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
            {t('palagin.quote').split('непроходимых')[0]}
            <span className="text-gold">
              {t('palagin.quote').includes('непроходимых') ? 'непроходимых' : 'impassable'}{t('palagin.quote').split(t('palagin.quote').includes('непроходимых') ? 'непроходимых' : 'impassable')[1]}
            </span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            {t('palagin.quote.attr')}
          </div>
        </div>

        {/* Song */}
        <div className="text-center">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('palagin.song.label')}</div>
          <p className="font-body text-muted-foreground text-sm mb-6">
            {t('palagin.song.desc')}
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold font-body text-sm rounded hover:bg-gold/10 transition-all duration-300"
          >
            <Icon name="Music" size={16} />
            {t('palagin.song.btn')}
          </a>
        </div>

      </div>
    </div>
  );
};

export default PalaginPage;