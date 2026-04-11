import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useLang } from '@/context/LanguageContext';

interface Hero {
  id: string;
  name: string;
  image: string;
  standImage: string;
  awards: string;
  desc: string;
  medals: number;
}

const heroes: Hero[] = [
  {
    id: 'epifanov',
    name: 'heroes.epifanov.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/f4aeb27d-8bfe-4334-86cb-74d6bc2002b6.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/f4aeb27d-8bfe-4334-86cb-74d6bc2002b6.jpeg',
    awards: 'heroes.epifanov.awards',
    desc: 'heroes.epifanov.desc',
    medals: 1,
  },
  {
    id: 'zhuravlev',
    name: 'heroes.zhuravlev.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/29952ea6-2a8d-4bc5-b926-c721d0f32ac4.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/29952ea6-2a8d-4bc5-b926-c721d0f32ac4.jpeg',
    awards: 'heroes.zhuravlev.awards',
    desc: 'heroes.zhuravlev.desc',
    medals: 2,
  },
  {
    id: 'maltsev',
    name: 'heroes.maltsev.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/50589757-c0ec-4e46-ad36-4510c919d3f5.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/50589757-c0ec-4e46-ad36-4510c919d3f5.jpeg',
    awards: 'heroes.maltsev.awards',
    desc: 'heroes.maltsev.desc',
    medals: 1,
  },
  {
    id: 'torokhov',
    name: 'heroes.torokhov.name',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d1c9c817-0678-4cae-b931-ebaaa63ab594.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d1c9c817-0678-4cae-b931-ebaaa63ab594.jpeg',
    awards: 'heroes.torokhov.awards',
    desc: 'heroes.torokhov.desc',
    medals: 2,
  },
  {
    id: 'sukuev',
    name: 'Виталий Сукуев',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/eeb77a83-a285-499d-9dda-cefdc4ee0772.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/eeb77a83-a285-499d-9dda-cefdc4ee0772.jpeg',
    awards: 'Герой Российской Федерации (посмертно, 14 ноября 2022)',
    desc: 'Гвардии полковник, командир 108-го гвардейского десантно-штурмового полка 7-й гвардейской горной дивизии ВДВ. Погиб 28 сентября 2022 года, приняв удар взрыва противотанковой мины. Посвятил 25 лет жизни службе в Вооружённых силах РФ.',
    medals: 1,
  },
  {
    id: 'darchenko',
    name: 'Дмитрий Дарченко',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/2fd75a61-e59e-419d-8b3d-aacc238483dc.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/2fd75a61-e59e-419d-8b3d-aacc238483dc.jpeg',
    awards: 'Герой Российской Федерации (посмертно, 11 марта 2024)',
    desc: 'Гвардии прапорщик, командир штурмовой группы 76-й гвардейской десантно-штурмовой дивизии. 29 августа 2023 г. ворвался на позиции противника близ н.п. Работино, уничтожил 10 националистов. Прикрывая отход товарищей, погиб от артиллерийского удара.',
    medals: 1,
  },
  {
    id: 'volkov',
    name: 'Александр Волков',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/c43820c9-54b4-4508-b3ca-ca899eb924cc.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/c43820c9-54b4-4508-b3ca-ca899eb924cc.jpeg',
    awards: 'Герой Российской Федерации (8 декабря 2022)',
    desc: 'Майор, командир разведывательной группы. В ходе СВО вскрыл порядка 20 огневых позиций противника, захватил в плен командира роты ВСУ. Участник контртеррористических операций на Северном Кавказе и операции в Сирийской Арабской Республике.',
    medals: 1,
  },
  {
    id: 'voloskov',
    name: 'Андрей Волосков',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/36144839-8643-4112-ad4b-55a63fbcdec6.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/36144839-8643-4112-ad4b-55a63fbcdec6.jpeg',
    awards: 'Герой Российской Федерации (посмертно, 22 февраля 2024)',
    desc: 'Гвардии лейтенант, командир парашютно-десантного взвода 299-го полка 98-й гвардейской дивизии. Двое суток удерживал рубеж в лесополосе «Зуб». Будучи тяжело ранен, отказался от эвакуации и продолжал руководить боем, прикрывая отход товарищей.',
    medals: 1,
  },
  {
    id: 'mikhailov',
    name: 'Максим Михайлов',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/084e91b7-c0f5-463d-b067-b0a44be31dd6.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/084e91b7-c0f5-463d-b067-b0a44be31dd6.jpeg',
    awards: 'Герой Российской Федерации (посмертно, 1 июня 2022)',
    desc: 'Гвардии старший лейтенант, командир танковой роты 42-й гвардейской дивизии. 3 марта 2022 г. под Мелитополем экипаж его танка уничтожил 4 танка, 6 боевых машин и до 50 военнослужащих противника. Погиб 24 марта 2022 г. в результате поражения вражеским снарядом.',
    medals: 1,
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
          {heroes.map((hero) => {
            const heroName = hero.name.startsWith('heroes.') ? t(hero.name) : hero.name;
            const heroDesc = hero.desc.startsWith('heroes.') ? t(hero.desc) : hero.desc;
            const heroAwards = hero.awards.startsWith('heroes.') ? t(hero.awards) : hero.awards;
            return (
              <div
                key={hero.id}
                className="museum-card rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(hero)}
              >
                <div className="relative overflow-hidden" style={{ height: 320 }}>
                  <img
                    src={hero.image}
                    alt={heroName}
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
                    {heroName}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {heroDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-body">
                    <Icon name="ChevronRight" size={16} />
                    {t('heroes.more')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      {selected && (() => {
        const modalName = selected.name.startsWith('heroes.') ? t(selected.name) : selected.name;
        const modalDesc = selected.desc.startsWith('heroes.') ? t(selected.desc) : selected.desc;
        const modalAwards = selected.awards.startsWith('heroes.') ? t(selected.awards) : selected.awards;
        return (
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
                  alt={modalName}
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
                <h2 className="font-display text-3xl text-foreground mb-3">{modalName}</h2>
                <div className="font-body text-sm text-gold mb-4 flex items-center gap-2">
                  <Icon name="Award" size={14} />
                  {modalAwards}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {modalDesc}
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
        );
      })()}
    </div>
  );
};

export default HeroesPage;