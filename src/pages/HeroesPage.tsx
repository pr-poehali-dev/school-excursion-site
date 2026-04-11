import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useLang } from '@/context/LanguageContext';

interface Hero {
  id: string;
  nameKey: string;
  image: string;
  standImage: string;
  awardsKey: string;
  descKey: string;
  medals: number;
}

const heroes: Hero[] = [
  {
    id: 'epifanov',
    nameKey: 'heroes.epifanov.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/f4aeb27d-8bfe-4334-86cb-74d6bc2002b6.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/f4aeb27d-8bfe-4334-86cb-74d6bc2002b6.jpeg',
    awardsKey: 'heroes.epifanov.awards',
    descKey: 'heroes.epifanov.desc',
    medals: 1,
  },
  {
    id: 'zhuravlev',
    nameKey: 'heroes.zhuravlev.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/29952ea6-2a8d-4bc5-b926-c721d0f32ac4.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/29952ea6-2a8d-4bc5-b926-c721d0f32ac4.jpeg',
    awardsKey: 'heroes.zhuravlev.awards',
    descKey: 'heroes.zhuravlev.desc',
    medals: 2,
  },
  {
    id: 'maltsev',
    nameKey: 'heroes.maltsev.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/50589757-c0ec-4e46-ad36-4510c919d3f5.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/50589757-c0ec-4e46-ad36-4510c919d3f5.jpeg',
    awardsKey: 'heroes.maltsev.awards',
    descKey: 'heroes.maltsev.desc',
    medals: 1,
  },
  {
    id: 'torokhov',
    nameKey: 'heroes.torokhov.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d1c9c817-0678-4cae-b931-ebaaa63ab594.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d1c9c817-0678-4cae-b931-ebaaa63ab594.jpeg',
    awardsKey: 'heroes.torokhov.awards',
    descKey: 'heroes.torokhov.desc',
    medals: 2,
  },
];

const introStandImage = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/4deae634-1af4-4ee4-9571-e381457fe174.jpeg';

const HeroesPage = () => {
  const [selected, setSelected] = useState<Hero | null>(null);
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('heroes.label')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
            {t('heroes.h1.top')}
            <span className="italic text-gold"> {t('heroes.h1.bottom')}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            {t('heroes.intro')}
          </p>
        </div>

        {/* Intro stand image */}
        <div className="relative rounded-xl overflow-hidden mb-16 border border-border group cursor-pointer"
          style={{ maxHeight: 420 }}
          onClick={() => window.open(introStandImage, '_blank')}
        >
          <img
            src={introStandImage}
            alt="Introduction"
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            style={{ height: 420, objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{t('heroes.intro.stand')}</div>
            <div className="font-display text-2xl text-white">{t('heroes.intro.title')}</div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/60 rounded-full p-2">
              <Icon name="ZoomIn" size={18} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Heroes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="museum-card rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(hero)}
            >
              <div className="relative overflow-hidden" style={{ height: 320 }}>
                <img
                  src={hero.image}
                  alt={t(hero.nameKey)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {Array.from({ length: hero.medals }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 rounded-full p-2">
                    <Icon name="Expand" size={16} className="text-gold" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{t('heroes.hero.title')}</div>
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                  {t(hero.nameKey)}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {t(hero.descKey)}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-body">
                  <Icon name="ChevronRight" size={16} />
                  {t('heroes.more')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Echo stand */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{t('heroes.echo.label')}</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              {t('heroes.echo.h2')}
            </h2>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-border group cursor-pointer"
            onClick={() => window.open('https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg', '_blank')}
          >
            <img
              src="https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg"
              alt="Echo of Courage"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-102"
              style={{ maxHeight: 500, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-display text-2xl text-white">{t('heroes.echo.caption')}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* Afghan stand */}
        <div>
          <div className="text-center mb-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{t('heroes.afghan.label')}</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              <span className="italic text-gold">{t('heroes.afghan.h2.part1')}</span>{' '}
              {t('heroes.afghan.h2.part2')}
            </h2>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-border group cursor-pointer"
            onClick={() => window.open('https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg', '_blank')}
          >
            <img
              src="https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg"
              alt="Afghan war"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-102"
              style={{ maxHeight: 500, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-display text-2xl text-white">{t('heroes.afghan.caption')}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden museum-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ height: 360 }}>
              <img
                src={selected.standImage}
                alt={t(selected.nameKey)}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/60 rounded-full p-2 text-white hover:text-gold transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{t('heroes.hero.title')}</div>
              <h2 className="font-display text-3xl text-foreground mb-3">{t(selected.nameKey)}</h2>
              <div className="font-body text-sm text-gold mb-4 flex items-center gap-2">
                <Icon name="Award" size={14} />
                {t(selected.awardsKey)}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t(selected.descKey)}
              </p>
              <button
                onClick={() => window.open(selected.standImage, '_blank')}
                className="mt-6 flex items-center gap-2 text-sm text-gold font-body hover:underline"
              >
                <Icon name="ZoomIn" size={14} />
                {t('heroes.modal.zoom')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroesPage;