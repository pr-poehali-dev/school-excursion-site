import { useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_HELI = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/85c5bbe1-0716-47c0-be11-ceb9dad6bab8.jpg';
const IMG_HELM = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/236517fa-ef53-49e5-87ff-d59b8c43a1c5.jpg';
const IMG_MEDAL = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/59525366-53c6-49f3-8f7a-4569f4594fd9.jpg';

const categories = ['Все', 'Личные вещи', 'Награды', 'Документы', 'Техника', 'Фотографии'];

const exhibits = [
  {
    id: 1,
    name: 'Лётный шлем Героя',
    year: '1990-е — 2000-е',
    category: 'Личные вещи',
    desc: 'Личный лётный шлем С.В. Палагина. Был на борту Ми-8 МТВ-2 «Братишка» в ходе боевых вылетов на Северном Кавказе. Передан в дар школе супругой Героя.',
    image: IMG_HELM,
    hall: 'Жизнь и подвиг Палагина',
    rare: true,
  },
  {
    id: 2,
    name: 'Лётные перчатки',
    year: '2000-е',
    category: 'Личные вещи',
    desc: 'Кожаные лётные перчатки из личного снаряжения полковника Палагина. Один из наиболее трогательных и личных предметов основного фонда музея.',
    image: IMG_HELM,
    hall: 'Жизнь и подвиг Палагина',
    rare: true,
  },
  {
    id: 3,
    name: 'Золотая Звезда Героя РФ',
    year: '2004',
    category: 'Награды',
    desc: 'Копия медали «Золотая Звезда» Героя Российской Федерации, присвоенной Указом Президента от 6 апреля 2004 года за мужество и героизм при выполнении воинского долга в Северо-Кавказском регионе.',
    image: IMG_MEDAL,
    hall: 'Жизнь и подвиг Палагина',
    rare: true,
  },
  {
    id: 4,
    name: 'Наградной лист. 2 512 вылетов',
    year: '2004',
    category: 'Документы',
    desc: 'Оригинал наградного листа с описанием боевых подвигов майора Палагина. К моменту присвоения звания Героя он совершил 2 512 боевых вылетов.',
    image: IMG_MEDAL,
    hall: 'Жизнь и подвиг Палагина',
    rare: true,
  },
  {
    id: 5,
    name: 'Ми-8 МТВ-2 «Братишка» (макет)',
    year: '2023',
    category: 'Техника',
    desc: 'Масштабный макет боевого вертолёта Ми-8 МТВ-2 — той самой машины, на которой Палагин совершал вылеты. Солдаты прозвали её «Братишкой», верили, что она «заговорённая».',
    image: IMG_HELI,
    hall: 'История боевой славы',
    rare: false,
  },
  {
    id: 6,
    name: 'Операция у Шали. Июнь 2002',
    year: '2002',
    category: 'Документы',
    desc: 'Архивные документы о спасательной операции июня 2002 года. Палагин эвакуировал 16 бойцов с минного поля под огнём противника — вертолёт 17 минут «висел» над пропастью.',
    image: IMG_HELI,
    hall: 'История боевой славы',
    rare: true,
  },
  {
    id: 7,
    name: 'Письма с Северного Кавказа',
    year: '2000–2002',
    category: 'Документы',
    desc: 'Архивные письма и документы, свидетельствующие об участии экипажа в спасательных операциях. Рассекреченные свидетельства мужества.',
    image: IMG_HELM,
    hall: 'Жизнь и подвиг Палагина',
    rare: false,
  },
  {
    id: 8,
    name: 'Фотохроника боевых операций',
    year: '1993–2008',
    category: 'Фотографии',
    desc: 'Фотоматериалы из личного архива, запечатлевшие боевые будни лётчика: Чечня, Дагестан, Южная Осетия. Многие снимки публикуются впервые.',
    image: IMG_HELI,
    hall: 'Жизнь и подвиг Палагина',
    rare: false,
  },
  {
    id: 9,
    name: 'Карта боевых маршрутов',
    year: '2023',
    category: 'Документы',
    desc: 'Карта Северо-Кавказского региона с отмеченными маршрутами боевых вылетов. Создана учащимися школы на основе архивных материалов.',
    image: IMG_MEDAL,
    hall: 'История боевой славы',
    rare: false,
  },
];

const ExhibitsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selected, setSelected] = useState<typeof exhibits[0] | null>(null);
  const [search, setSearch] = useState('');

  const filtered = exhibits.filter(e => {
    const matchCat = activeCategory === 'Все' || e.category === activeCategory;
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Музейный фонд</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-display text-5xl font-light text-foreground">
              Экспонаты<br />
              <span className="italic text-gold">музея Палагина</span>
            </h1>
            <div className="relative max-w-xs w-full">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Поиск по экспонатам..."
                className="w-full bg-muted border border-border rounded-lg pl-9 pr-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full border font-body text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border text-muted-foreground hover:border-gold/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="font-body text-sm text-muted-foreground mb-6">
          Найдено: <span className="text-gold">{filtered.length}</span> экспонатов
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exhibit) => (
            <button
              key={exhibit.id}
              onClick={() => setSelected(exhibit)}
              className="museum-card rounded-xl overflow-hidden text-left group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={exhibit.image}
                  alt={exhibit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {exhibit.rare && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gold/20 border border-gold/40 rounded text-gold font-body text-[10px] uppercase tracking-widest backdrop-blur-sm">
                    Оригинал
                  </div>
                )}
                <div className="absolute bottom-3 left-3 font-body text-xs text-white/60">{exhibit.hall}</div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300 leading-tight">{exhibit.name}</h3>
                  <span className="font-body text-xs text-muted-foreground flex-shrink-0 mt-1">{exhibit.year}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">{exhibit.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-full">
                  <span className="font-body text-xs text-muted-foreground">{exhibit.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <div className="font-display text-2xl text-muted-foreground">Экспонаты не найдены</div>
            <p className="font-body text-sm text-muted-foreground mt-2">Попробуйте изменить запрос или категорию</p>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full museum-card rounded-2xl overflow-hidden animate-fade-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9]">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {selected.rare && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-gold/20 border border-gold/50 rounded text-gold font-body text-xs uppercase tracking-widest backdrop-blur-sm">
                  Оригинальный экспонат
                </div>
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:text-gold transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-display text-3xl font-light text-foreground">{selected.name}</h2>
                <span className="font-display text-xl text-gold flex-shrink-0 mt-1">{selected.year}</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">{selected.desc}</p>
              <div className="flex items-center gap-4 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Icon name="MapPin" size={14} className="text-gold" />
                  {selected.hall}
                </div>
                <div className="flex items-center gap-1.5">
                  <Icon name="Tag" size={14} className="text-gold" />
                  {selected.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExhibitsPage;
