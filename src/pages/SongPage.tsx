import { useLang } from '@/context/LanguageContext';

const SONG_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/c0030fc1-1ac8-4958-a222-56451aaabede.jpeg';

const versesRu = [
  { type: 'verse', lines: ['На стоянке, где машины', 'В ряд стоят винтом к винту,', 'И стеклянные кабины', 'С грустью смотрят в высоту.'] },
  { type: 'verse', lines: ['Есть особая «вертушка»:', 'Её видно за версту,', 'С яркой надписью «Братишка»', 'На простреленном борту.'] },
  { type: 'chorus', lines: ['От Бамута до Цхинвали,', 'От войны и до войны,', 'Так его, любя, прозвали', 'С уважением пацаны.'] },
  { type: 'verse', lines: ['Сложным было положение,', 'Долго длился бой, и вот', 'Оказался в окружении', 'Под огнём десантный взвод.'] },
  { type: 'verse', lines: ['Пригорюнились парнишки:', 'Нечисть, с*ка, прёт и прёт —', 'Вдруг глядят — летит «Братишка»,', 'Их любимый вертолёт.'] },
  { type: 'verse', lines: ['Сбросил вниз вооружение,', 'Всё что надо для войны,', 'И прорвали окружение,', 'Победили пацаны.'] },
  { type: 'verse', lines: ['Озверев, умалишённо', 'Били черти его влёт,', 'Только как заговорённый', 'Был проворный вертолёт.'] },
  { type: 'verse', lines: ['Сквозь обстрел проскочит мышкой,', 'Не теряя высоту,', 'С яркой надписью «Братишка»', 'На простреленном борту.'] },
  { type: 'chorus', lines: ['От Бамута до Цхинвали,', 'От войны и до войны,', 'Так его, любя, прозвали', 'С уважением пацаны.'] },
  { type: 'verse', lines: ['Улетит, бойцов оставит,', 'И обратный курс возьмёт,', 'К месту раненых доставит,', 'И лекарства подвезёт.'] },
  { type: 'verse', lines: ['Словом, дел ему хватает,', 'Хоть пробоины видны —', 'Всё летает и летает,', 'Скромный труженик войны.'] },
  { type: 'chorus', lines: ['От Бамута до Цхинвали,', 'От войны и до войны,', 'Так его, любя, прозвали', 'С уважением пацаны.'] },
  { type: 'verse', lines: ['Настоящий, не из книжки,', 'Набирает высоту —', 'С яркой надписью «Братишка»', 'На заштопанном борту.'] },
];

const versesEn = [
  { type: 'verse', lines: ['At the depot where the aircraft', 'Stand in rows, blade next to blade,', 'Glass-encased cockpits gazing', 'Sadly skyward, unafraid.'] },
  { type: 'verse', lines: ['There\'s a special old "whirlybird"', 'You can spot it from afar,', 'With the bright name "Bratishka"', 'Where the bullet-holes now are.'] },
  { type: 'chorus', lines: ['From Bamut to Tskhinvali,', 'War to war and back again,', 'That\'s the name the lads gave lovingly', 'With respect to it — "Bratchan".'] },
  { type: 'verse', lines: ['In a desperate situation,', 'Battle raged and wouldn\'t cease,', 'An airborne unit found itself', 'Surrounded with no release.'] },
  { type: 'verse', lines: ['All the boys were grim and worried,', 'Enemy kept pressing through —', 'Then they saw it — "Bratishka" flying,', 'Their beloved chopper true.'] },
  { type: 'verse', lines: ['Dropped down all the ammunition,', 'Everything the battle needs,', 'And they broke out of encirclement,', 'Victory at last, brave deeds.'] },
  { type: 'verse', lines: ['Fiercely, like a pack of demons', 'They kept firing at it in flight,', 'But like something enchanted,', 'It was nimble through the night.'] },
  { type: 'verse', lines: ['Through the fire it slipped like a mouse,', 'Never losing altitude,', 'With the bright name "Bratishka" written', 'Where the bullet-holes intrude.'] },
  { type: 'chorus', lines: ['From Bamut to Tskhinvali,', 'War to war and back again,', 'That\'s the name the lads gave lovingly', 'With respect to it — "Bratchan".'] },
  { type: 'verse', lines: ['Off it flies, leaves soldiers waiting,', 'Takes the homeward bearing straight,', 'Brings the wounded to the medics,', 'Medicine to those who wait.'] },
  { type: 'verse', lines: ['Yes, it always has enough work,', 'Though the bullet-holes are clear —', 'Still it flies and keeps on flying,', 'Humble worker, year to year.'] },
  { type: 'chorus', lines: ['From Bamut to Tskhinvali,', 'War to war and back again,', 'That\'s the name the lads gave lovingly', 'With respect to it — "Bratchan".'] },
  { type: 'verse', lines: ['Real and true, not from some story,', 'Climbing upward to the blue —', 'With the bright name "Bratishka" written', 'On its patched and battle-worn fuselage too.'] },
];

const SongPage = () => {
  const { lang, t } = useLang();

  const verses = lang === 'ru' ? versesRu : versesEn;

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('song.label')}</div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-4">
            «<span className="italic text-gold">Братишка</span>»
          </h1>
          <p className="font-body text-muted-foreground text-sm">
            {t('song.author')}
          </p>
        </div>

        {/* Stand photo */}
        {SONG_IMG && (
          <div
            className="relative rounded-xl overflow-hidden mb-16 border border-border group cursor-pointer"
            onClick={() => window.open(SONG_IMG, '_blank')}
          >
            <img
              src={SONG_IMG}
              alt="Song stand"
              className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              style={{ maxHeight: 480, objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{t('song.stand.label')}</div>
              <div className="font-display text-xl text-white">{t('song.stand.caption')}</div>
            </div>
          </div>
        )}

        {/* Song text */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{ background: 'linear-gradient(135deg, hsl(350,50%,20%), hsl(350,40%,12%))' }}
        >
          <div className="absolute inset-0 rounded-2xl border-2 border-gold/20 pointer-events-none" />

          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-gold font-light italic">«Братишка»</h2>
            <p className="font-body text-sm text-foreground/60 mt-2">{t('song.author')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verses.map((verse, i) => (
              <div key={i} className={verse.type === 'chorus' ? 'md:col-span-2 text-center' : ''}>
                {verse.type === 'chorus' && (
                  <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">{t('song.chorus.label')}</div>
                )}
                <div className={`space-y-1 ${verse.type === 'chorus' ? 'font-semibold' : ''}`}>
                  {verse.lines.map((line, j) => (
                    <div
                      key={j}
                      className={`font-body text-sm md:text-base leading-relaxed ${
                        verse.type === 'chorus' ? 'text-foreground' : 'text-foreground/80'
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
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('song.about.label')}</div>
          <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            {t('song.about.text')}
          </p>
        </div>

      </div>
    </div>
  );
};

export default SongPage;