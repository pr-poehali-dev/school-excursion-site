import { useState } from 'react';
import Icon from '@/components/ui/icon';

const EXHIBIT_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/fe29102b-79f4-43bf-adb0-4447ed833057.jpg';
const HALL_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/538614c2-b1a4-4fe7-b4e1-e608b1df8cdf.jpg';
const GALLERY_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/4fc9d983-f2d1-48af-9a0b-71ed49344bfc.jpg';

const categories = ['Все', 'Документы', 'Награды', 'Личные вещи', 'Фотографии', 'Учебники'];

const exhibits = [
  { id: 1, name: 'Грамота за отличную учёбу', year: '1967', category: 'Документы', desc: 'Первая грамота, выданная ученику школы — Александру Волкову за выдающиеся успехи в учёбе.', image: EXHIBIT_IMG, hall: 'Зал основания', rare: true },
  { id: 2, name: 'Директорский колокольчик', year: '1962', category: 'Личные вещи', desc: 'Бронзовый колокольчик, которым первый директор давал сигнал к началу и окончанию уроков.', image: HALL_IMG, hall: 'Зал основания', rare: true },
  { id: 3, name: 'Фотоальбом выпуска 1970', year: '1970', category: 'Фотографии', desc: 'Коллективные фотографии первого большого выпуска школы — 120 выпускников трёх параллелей.', image: GALLERY_IMG, hall: 'Зал достижений', rare: false },
  { id: 4, name: 'Кубок по математике', year: '1978', category: 'Награды', desc: 'Золотой кубок за первое место в городской олимпиаде по математике среди школ района.', image: EXHIBIT_IMG, hall: 'Зал достижений', rare: false },
  { id: 5, name: 'Учебник арифметики', year: '1963', category: 'Учебники', desc: 'Учебник по арифметике издания 1962 года — один из немногих сохранившихся экземпляров.', image: HALL_IMG, hall: 'Зал основания', rare: true },
  { id: 6, name: 'Письмо с фронта', year: '1943', category: 'Документы', desc: 'Оригинальное письмо учителя истории Фёдора Кузнецова, написанное во время боёв под Сталинградом.', image: GALLERY_IMG, hall: 'Зал памяти', rare: true },
  { id: 7, name: 'Медаль «За отвагу»', year: '1945', category: 'Награды', desc: 'Боевая медаль выпускника школы, переданная семьёй в дар музею в 1985 году.', image: EXHIBIT_IMG, hall: 'Зал памяти', rare: true },
  { id: 8, name: 'Школьный дневник 1975 г.', year: '1975', category: 'Документы', desc: 'Дневник ученика 5 класса — Натальи Соколовой, будущего кандидата физических наук.', image: HALL_IMG, hall: 'Зал достижений', rare: false },
  { id: 9, name: 'Пионерский значок', year: '1965', category: 'Личные вещи', desc: 'Значок первого председателя пионерской дружины школы имени В.И. Ленина.', image: GALLERY_IMG, hall: 'Зал основания', rare: false },
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
        {/* Header */}
        <div className="mb-10">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Коллекция</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-display text-5xl font-light text-foreground">
              Экспонаты<br />
              <span className="italic text-gold">музея</span>
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

        {/* Categories */}
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

        {/* Counter */}
        <div className="font-body text-sm text-muted-foreground mb-6">
          Найдено: <span className="text-gold">{filtered.length}</span> экспонатов
        </div>

        {/* Grid */}
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
                    Редкий
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
            <p className="font-body text-sm text-muted-foreground mt-2">Попробуйте изменить поисковый запрос или категорию</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
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
                  Редкий экспонат
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
                <span className="font-display text-2xl text-gold flex-shrink-0">{selected.year}</span>
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
