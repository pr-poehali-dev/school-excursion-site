import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG1 = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/538614c2-b1a4-4fe7-b4e1-e608b1df8cdf.jpg';
const IMG2 = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/fe29102b-79f4-43bf-adb0-4447ed833057.jpg';
const IMG3 = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/4fc9d983-f2d1-48af-9a0b-71ed49344bfc.jpg';

const albumsData = [
  {
    id: 'all',
    title: 'Все фото',
    count: 12,
  },
  {
    id: 'history',
    title: 'История школы',
    count: 4,
  },
  {
    id: 'events',
    title: 'Мероприятия',
    count: 4,
  },
  {
    id: 'graduates',
    title: 'Выпускники',
    count: 4,
  },
];

const photos = [
  { id: 1, src: IMG1, album: 'history', caption: 'Открытие школы, 1962 год', year: '1962', size: 'large' },
  { id: 2, src: IMG2, album: 'history', caption: 'Первые учителя школы', year: '1963', size: 'small' },
  { id: 3, src: IMG3, album: 'graduates', caption: 'Выпускной класс 1970 года', year: '1970', size: 'small' },
  { id: 4, src: IMG1, album: 'events', caption: 'День Победы в школьном музее', year: '1975', size: 'medium' },
  { id: 5, src: IMG2, album: 'history', caption: 'Кабинет физики — 1968 год', year: '1968', size: 'small' },
  { id: 6, src: IMG3, album: 'events', caption: 'Олимпиада по математике', year: '1978', size: 'medium' },
  { id: 7, src: IMG1, album: 'graduates', caption: 'Встреча выпускников 1990 г.', year: '1990', size: 'small' },
  { id: 8, src: IMG2, album: 'events', caption: 'Спортивный праздник школы', year: '1985', size: 'large' },
  { id: 9, src: IMG3, album: 'graduates', caption: 'Последний звонок, 1980 год', year: '1980', size: 'small' },
  { id: 10, src: IMG1, album: 'history', caption: 'Школьная библиотека, 1972 г.', year: '1972', size: 'medium' },
  { id: 11, src: IMG2, album: 'events', caption: 'Новогодний утренник, 1965 г.', year: '1965', size: 'small' },
  { id: 12, src: IMG3, album: 'graduates', caption: 'Вручение аттестатов, 1975 г.', year: '1975', size: 'medium' },
];

const GalleryPage = () => {
  const [activeAlbum, setActiveAlbum] = useState('all');
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered = activeAlbum === 'all' ? photos : photos.filter(p => p.album === activeAlbum);

  const openLightbox = (photo: typeof photos[0], idx: number) => {
    setLightbox(photo);
    setLightboxIdx(idx);
  };

  const prevPhoto = () => {
    const newIdx = (lightboxIdx - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  };

  const nextPhoto = () => {
    const newIdx = (lightboxIdx + 1) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIdx(newIdx);
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Фотоархив</div>
          <h1 className="font-display text-5xl font-light text-foreground">
            Галерея<br />
            <span className="italic text-gold">воспоминаний</span>
          </h1>
        </div>

        {/* Albums */}
        <div className="flex gap-3 mb-10 overflow-x-auto scrollbar-hide pb-2">
          {albumsData.map(album => (
            <button
              key={album.id}
              onClick={() => setActiveAlbum(album.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border font-body text-sm transition-all duration-300 ${
                activeAlbum === album.id
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40 hover:text-foreground'
              }`}
            >
              {album.title}
              <span className={`text-xs rounded-full w-5 h-5 flex items-center justify-center ${
                activeAlbum === album.id ? 'bg-gold/20 text-gold' : 'bg-muted text-muted-foreground'
              }`}>{album.count}</span>
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(photo, i)}
              className="break-inside-avoid w-full museum-card rounded-xl overflow-hidden group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    photo.size === 'large' ? 'aspect-[4/3]' : photo.size === 'medium' ? 'aspect-[3/2]' : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <div className="font-display text-sm text-white leading-tight mb-1">{photo.caption}</div>
                  <div className="font-body text-xs text-gold">{photo.year}</div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={14} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors z-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] mx-16 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-h-[75vh] w-full object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <div className="font-display text-xl text-foreground">{lightbox.caption}</div>
              <div className="font-body text-sm text-gold mt-1">{lightbox.year}</div>
            </div>
            <div className="mt-3 font-body text-xs text-muted-foreground text-center">
              {lightboxIdx + 1} / {filtered.length}
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors z-10"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
