import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useLang } from '@/context/LanguageContext';

const PHOTO_URLS = [
  'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/c0d1b66d-6056-4364-a31a-9b879eefd741.jpeg',
  'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/5a83d72a-615d-4051-9828-7e78ea732574.jpeg',
  'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/76002eee-e572-4d50-841d-7ff0c035c753.jpeg',
  'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/5e0e1481-a369-4029-809e-c84a6aede22c.jpeg',
  'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/17b3374d-58e6-48f1-bcf0-81629132dd3e.jpeg',
];

const EXHIBIT_ICONS = ['🪖', '📐', '🌬️', '🗂️', '🎧', '📏', '📜', '🧢'];

const Hall2Page = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { t } = useLang();

  const photos = PHOTO_URLS.map((url, i) => ({
    url,
    tag: t(`hall2.photo${i}.tag`),
    title: t(`hall2.photo${i}.title`),
    desc: t(`hall2.photo${i}.desc`),
  }));

  const exhibits = EXHIBIT_ICONS.map((icon, i) => ({
    icon,
    name: t(`hall2.exhibit${i}.name`),
    desc: t(`hall2.exhibit${i}.desc`),
  }));

  const awards = Array.from({ length: 10 }, (_, i) => ({
    name: t(`hall2.award${i}`),
    note: i === 9 ? t('hall2.awards.copy.state') : t('hall2.awards.copy'),
  }));

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null);
  const nextPhoto = () => setLightbox(i => i !== null ? (i + 1) % photos.length : null);

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('hall2.label')}</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            {t('hall2.h1')} <span className="italic text-gold">2</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            {t('hall2.subtitle')}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">{t('hall2.photos.label')}</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-8">
            {t('hall2.photos.h2.top')} <span className="italic text-gold">{t('hall2.photos.h2.bottom')}</span>
          </h2>

          {/* Featured first photo */}
          <div
            className="relative rounded-2xl overflow-hidden mb-4 border border-border group cursor-pointer"
            onClick={() => setLightbox(0)}
          >
            <img
              src={photos[0].url}
              alt={photos[0].title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{photos[0].tag}</div>
              <div className="font-display text-2xl md:text-3xl text-white italic leading-tight mb-2">
                {photos[0].title}
              </div>
              <div className="font-body text-sm text-white/70 max-w-2xl">{photos[0].desc}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>

          {/* Grid of remaining 4 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(1).map((photo, i) => (
              <div
                key={i + 1}
                className="relative rounded-xl overflow-hidden border border-border group cursor-pointer aspect-[3/4]"
                onClick={() => setLightbox(i + 1)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="font-body text-[10px] text-gold uppercase tracking-wider mb-0.5">{photo.tag}</div>
                  <div className="font-display text-sm text-white italic leading-tight line-clamp-2">{photo.title}</div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 rounded-full p-1.5">
                    <Icon name="ZoomIn" size={14} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal items */}
        <div className="mb-16">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">{t('hall2.exhibits.label')}</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-2">
            {t('hall2.exhibits.h2.top')} <span className="italic text-gold">{t('hall2.exhibits.h2.bottom')}</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            {t('hall2.exhibits.desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exhibits.map((item, i) => (
              <div key={i} className="museum-card rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-body text-sm font-medium text-foreground mb-2">{item.name}</div>
                <div className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards copies */}
        <div className="mb-16">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">{t('hall2.awards.label')}</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-2">
            {t('hall2.awards.h2.top')} <span className="italic text-gold">{t('hall2.awards.h2.bottom')}</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            {t('hall2.awards.desc')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {awards.map((award, i) => (
              <div key={i} className="flex items-center gap-4 museum-card rounded-lg px-5 py-4">
                <span className="text-yellow-400 text-xl shrink-0">★</span>
                <div>
                  <div className="font-body text-sm text-foreground">{award.name}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{award.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(20,12%,12%), hsl(20,10%,8%))' }}
        >
          <div className="font-display text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-6 whitespace-pre-line">
            {t('hall2.quote').split('\n')[0]}<br />
            <span className="text-gold">{t('hall2.quote').split('\n')[1]}</span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            {t('hall2.quote.attr')}
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <Icon name="X" size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <Icon name="ChevronLeft" size={28} />
          </button>

          <div
            className="max-w-5xl w-full px-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].url}
              alt={photos[lightbox].title}
              className="max-h-[75vh] w-auto object-contain rounded-lg mb-5"
            />
            <div className="text-center">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">
                {photos[lightbox].tag}
              </div>
              <div className="font-display text-xl text-white italic mb-2">
                {photos[lightbox].title}
              </div>
              <div className="font-body text-sm text-white/60 max-w-xl">
                {photos[lightbox].desc}
              </div>
              <div className="font-body text-xs text-white/30 mt-4">
                {lightbox + 1} / {photos.length}
              </div>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <Icon name="ChevronRight" size={28} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Hall2Page;