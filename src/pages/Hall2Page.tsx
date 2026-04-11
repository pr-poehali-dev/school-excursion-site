import Icon from '@/components/ui/icon';

const STAND_SONG_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/bc960892-f260-4a07-a956-1d1277a2971e.jpeg';

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

const sections = [
  {
    icon: 'BookOpen',
    title: 'Экспозиция',
    desc: 'Постоянная экспозиция зала, посвящённая лётчику-герою С.В. Палагину и подвигам авиаторов России.',
  },
  {
    icon: 'Star',
    title: 'Стенд «И был их каждый вылет делом чести…»',
    desc: 'Стенд посвящён лётчикам, для которых каждый боевой вылет становился воплощением долга перед Родиной и народом.',
  },
  {
    icon: 'Package',
    title: 'Личные вещи С.В. Палагина',
    desc: 'Подлинные предметы из личного архива полковника: китель, штурманское снаряжение, памятные документы.',
  },
  {
    icon: 'Library',
    title: 'Выставка книг',
    desc: 'Подборка изданий о героях авиации, войнах в Афганистане и Чечне, а также о жизненном пути С.В. Палагина.',
  },
  {
    icon: 'Square',
    title: 'Памятная доска',
    desc: 'Памятная доска, увековечивающая имя и заслуги Героя Российской Федерации полковника С.В. Палагина.',
  },
];

const Hall2Page = () => {
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

        {/* Stand banner */}
        <div
          className="relative rounded-2xl overflow-hidden mb-16 border border-border group cursor-pointer"
          onClick={() => window.open(STAND_SONG_IMG, '_blank')}
        >
          <img
            src={STAND_SONG_IMG}
            alt="Стенд зала 2"
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ maxHeight: 480, objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">Стенд</div>
            <div className="font-display text-2xl md:text-3xl text-white italic leading-tight">
              «И был их каждый вылет делом чести,<br className="hidden md:block" /> за Родину свою, за свой народ»
            </div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/60 rounded-full p-2">
              <Icon name="ZoomIn" size={18} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Sections overview */}
        <div className="mb-16">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3 text-center">Состав зала</div>
          <h2 className="font-display text-3xl font-light text-foreground mb-8 text-center">
            Разделы <span className="italic text-gold">экспозиции</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((s, i) => (
              <div key={i} className="museum-card rounded-xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-foreground mb-1">{s.title}</div>
                  <div className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
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
    </div>
  );
};

export default Hall2Page;