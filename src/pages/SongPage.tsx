const SONG_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/9f7fafc9-5326-475d-8b00-ffdebf80a165.jpeg';

const verses = [
  {
    type: 'verse',
    lines: [
      'На стоянке, где машины',
      'В ряд стоят винтом к винту,',
      'И стеклянные кабины',
      'С грустью смотрят в высоту.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Есть особая «вертушка»:',
      'Её видно за версту,',
      'С яркой надписью «Братишка»',
      'На простреленном борту.',
    ],
  },
  {
    type: 'chorus',
    lines: [
      'От Бамута до Цхинвали,',
      'От войны и до войны,',
      'Так его, любя, прозвали',
      'С уважением пацаны.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Сложным было положение,',
      'Долго длился бой, и вот',
      'Оказался в окружении',
      'Под огнём десантный взвод.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Пригорюнились парнишки:',
      'Нечисть, с*ка, прёт и прёт —',
      'Вдруг глядят — летит «Братишка»,',
      'Их любимый вертолёт.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Сбросил вниз вооружение,',
      'Всё что надо для войны,',
      'И прорвали окружение,',
      'Победили пацаны.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Озверев, умалишённо',
      'Били черти его влёт,',
      'Только как заговорённый',
      'Был проворный вертолёт.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Сквозь обстрел проскочит мышкой,',
      'Не теряя высоту,',
      'С яркой надписью «Братишка»',
      'На простреленном борту.',
    ],
  },
  {
    type: 'chorus',
    lines: [
      'От Бамута до Цхинвали,',
      'От войны и до войны,',
      'Так его, любя, прозвали',
      'С уважением пацаны.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Улетит, бойцов оставит,',
      'И обратный курс возьмёт,',
      'К месту раненых доставит,',
      'И лекарства подвезёт.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Словом, дел ему хватает,',
      'Хоть пробоины видны —',
      'Всё летает и летает,',
      'Скромный труженик войны.',
    ],
  },
  {
    type: 'chorus',
    lines: [
      'От Бамута до Цхинвали,',
      'От войны и до войны,',
      'Так его, любя, прозвали',
      'С уважением пацаны.',
    ],
  },
  {
    type: 'verse',
    lines: [
      'Настоящий, не из книжки,',
      'Набирает высоту —',
      'С яркой надписью «Братишка»',
      'На заштопанном борту.',
    ],
  },
];

const SongPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Песня</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            «<span className="italic text-gold">Братишка</span>»
          </h1>
          <p className="font-body text-muted-foreground text-sm">
            Текст песни — Александр Маршал
          </p>
        </div>

        {/* Stand photo */}
        <div
          className="relative rounded-xl overflow-hidden mb-16 border border-border group cursor-pointer"
          onClick={() => window.open(SONG_IMG, '_blank')}
        >
          <img
            src={SONG_IMG}
            alt="Стенд с песней Братишка"
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            style={{ maxHeight: 480, objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">Стенд выставки</div>
            <div className="font-display text-xl text-white">Оригинальный стенд с текстом песни</div>
          </div>
        </div>

        {/* Song text */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{ background: 'linear-gradient(135deg, hsl(350,50%,20%), hsl(350,40%,12%))' }}
        >
          {/* Decorative border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-gold/20 pointer-events-none" />

          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-gold font-light italic">«Братишка»</h2>
            <p className="font-body text-sm text-foreground/60 mt-2">Текст песни — Александр Маршал</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verses.map((verse, i) => (
              <div key={i} className={verse.type === 'chorus' ? 'md:col-span-2 text-center' : ''}>
                {verse.type === 'chorus' && (
                  <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Припев:</div>
                )}
                <div className={`space-y-1 ${verse.type === 'chorus' ? 'font-semibold' : ''}`}>
                  {verse.lines.map((line, j) => (
                    <div
                      key={j}
                      className={`font-body text-sm md:text-base leading-relaxed ${
                        verse.type === 'chorus'
                          ? 'text-foreground'
                          : 'text-foreground/80'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About the song */}
        <div className="mt-12 text-center">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">О песне</div>
          <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Песня «Братишка» посвящена боевому вертолёту Ми-8 МТВ-2, которому солдаты дали это 
            ласковое прозвище. Экипаж под командованием С.В. Палагина совершал вылеты в самых 
            опасных районах — от Бамута до Цхинвали. Вертолёт выходил из боёв невредимым, словно 
            был «заговорён», и стал настоящей легендой.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SongPage;
