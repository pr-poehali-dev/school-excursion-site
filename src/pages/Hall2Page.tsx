import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PHOTO_EXHIBITS = [
  {
    url: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/17b3374d-58e6-48f1-bcf0-81629132dd3e.jpeg',
    tag: 'Памятная доска',
    title: 'Памятная доска с именами героев',
    desc: 'Алый стенд с золотыми именами земляков-героев, отдавших жизнь за Родину. Каждое имя — судьба, каждая звезда — память.',
  },
  {
    url: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/5a83d72a-615d-4051-9828-7e78ea732574.jpeg',
    tag: 'Выставка книг',
    title: 'Выставка книг об авиации и героях',
    desc: 'Витрина с изданиями о героях авиации, истории военной авиации России, жизненном пути С.В. Палагина и подвигах кубанских лётчиков.',
  },
  {
    url: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/76002eee-e572-4d50-841d-7ff0c035c753.jpeg',
    tag: 'Личные вещи',
    title: 'Личные вещи полковника С.В. Палагина',
    desc: 'Парадный китель с наградами Героя России, переданный семьёй на хранение музею. Рядом — предметы быта и служебное снаряжение.',
  },
  {
    url: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/5e0e1481-a369-4029-809e-c84a6aede22c.jpeg',
    tag: 'Экспозиция',
    title: 'Экспозиция «Жизнь солдата»',
    desc: 'Воссозданный интерьер военного блиндажа: знамя 150-й стрелковой дивизии, плакат «Родина-мать зовёт!», каска, сено, фронтовой быт.',
  },
  {
    url: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/c0d1b66d-6056-4364-a31a-9b879eefd741.jpeg',
    tag: 'Стенд',
    title: '«И был их каждый вылет делом чести»',
    desc: 'Стенд о 46-м гвардейском Таманском ночном бомбардировочном авиационном полку — легендарных «ночных ведьмах», совершивших 23 872 боевых вылета.',
  },
];

const exhibits = [
  { icon: '🪖', name: 'Китель', desc: 'Форменный китель полковника С.В. Палагина' },
  { icon: '📐', name: 'Навигационный расчётчик НРК-2', desc: 'Прибор для навигационных вычислений в полёте' },
  { icon: '🌬️', name: 'Ветрочёт штурманский ВШ-1', desc: 'Инструмент для расчёта влияния ветра на курс воздушного судна' },
  { icon: '🗂️', name: 'Наколенный планшет лётчика', desc: 'Снаряжение для ведения карт и маршрутов во время полёта' },
  { icon: '🎧', name: 'Лётный шлемофон ВВС СССР', desc: 'Защитный шлем с переговорным устройством советских Военно-воздушных сил' },
  { icon: '📏', name: 'Навигационный транспортир', desc: 'Инструмент для измерения углов и курсов на картах' },
  { icon: '📜', name: 'Приглашение на инаугурацию Президента РФ', desc: 'Личное приглашение С.В. Палагина на церемонию вступления в должность Президента Российской Федерации' },
  { icon: '🧢', name: 'Форменная пилотка лётчика ВВС', desc: 'Головной убор лётного состава Военно-воздушных сил' },
];

const awards = [
  { name: 'Нагрудный знак «Лётчик-снайпер»', note: 'Копия' },
  { name: '«Звезда Героя»', note: 'Копия' },
  { name: 'Орден «За заслуги перед Отечеством» IV степени', note: 'Копия' },
  { name: 'Орден Мужества', note: 'Копия' },
  { name: 'Нагрудный знак «Крест За службу на Кавказе»', note: 'Копия' },
  { name: 'Нагрудный знак об окончании Военно-воздушной академии им. профессора Н.Е. Жуковского и Ю.А. Гагарина', note: 'Копия' },
  { name: 'Нагрудный знак внутренних войск МВД России «За отличие в службе»', note: 'Копия' },
  { name: 'Орден «За военные заслуги»', note: 'Копия' },
  { name: 'Медаль «За отвагу»', note: 'Копия' },
  { name: 'Медаль Нестерова', note: 'Копия государственной награды РФ' },
];

const Hall2Page = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox(i => i !== null ? (i - 1 + PHOTO_EXHIBITS.length) % PHOTO_EXHIBITS.length : null);
  const nextPhoto = () => setLightbox(i => i !== null ? (i + 1) % PHOTO_EXHIBITS.length : null);

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Музейная экспозиция</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            Зал <span className="italic text-gold">2</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Экспозиция, посвящённая Герою Российской Федерации полковнику С.В. Палагину. Личные вещи, штурманское снаряжение, выставка книг и памятная доска.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Фотографии зала</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-8">
            Экспонаты <span className="italic text-gold">в деталях</span>
          </h2>

          {/* Featured first photo */}
          <div
            className="relative rounded-2xl overflow-hidden mb-4 border border-border group cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img
              src={PHOTO_EXHIBITS[0].url}
              alt={PHOTO_EXHIBITS[0].title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-8 right-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{PHOTO_EXHIBITS[0].tag}</div>
              <div className="font-display text-2xl md:text-3xl text-white italic leading-tight mb-2">
                {PHOTO_EXHIBITS[0].title}
              </div>
              <div className="font-body text-sm text-white/70 max-w-2xl">{PHOTO_EXHIBITS[0].desc}</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>

          {/* Grid of remaining 4 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PHOTO_EXHIBITS.slice(1).map((photo, i) => (
              <div
                key={i + 1}
                className="relative rounded-xl overflow-hidden border border-border group cursor-pointer aspect-[3/4]"
                onClick={() => openLightbox(i + 1)}
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
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Витрина</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-2">
            Личные вещи и штурманское снаряжение <span className="italic text-gold">полковника Палагина С.В.</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Подлинные предметы, переданные на хранение музею из личного архива семьи Героя России.
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
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Стенд наград</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-2">
            Государственные награды <span className="italic text-gold">и знаки отличия</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Копии наград, полученных полковником С.В. Палагиным за годы службы и боевые заслуги.
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
          <div className="font-display text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-6">
            «И был их каждый вылет делом чести,<br />
            <span className="text-gold">за Родину свою, за свой народ»</span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            Стенд Зала 2 — Герой Российской Федерации С.В. Палагин
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
              src={PHOTO_EXHIBITS[lightbox].url}
              alt={PHOTO_EXHIBITS[lightbox].title}
              className="max-h-[75vh] w-auto object-contain rounded-lg mb-5"
            />
            <div className="text-center">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">
                {PHOTO_EXHIBITS[lightbox].tag}
              </div>
              <div className="font-display text-xl text-white italic mb-2">
                {PHOTO_EXHIBITS[lightbox].title}
              </div>
              <div className="font-body text-sm text-white/60 max-w-xl">
                {PHOTO_EXHIBITS[lightbox].desc}
              </div>
              <div className="font-body text-xs text-white/30 mt-4">
                {lightbox + 1} / {PHOTO_EXHIBITS.length}
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
