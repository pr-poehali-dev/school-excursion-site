import { createContext, useContext, useState } from 'react';

export type Lang = 'ru' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { ru: 'Главная', en: 'Home' },
  'nav.heroes': { ru: 'Герои и подвиги', en: 'Heroes & Deeds' },
  'nav.palagin': { ru: 'С.В. Палагин', en: 'S.V. Palagin' },
  'nav.echo': { ru: 'Эхо мужества', en: 'Echo of Courage' },
  'nav.song': { ru: '«Братишка»', en: '"Bratishka"' },
  'nav.hall2': { ru: 'Зал 2', en: 'Hall 2' },
  'nav.enter': { ru: 'В выставку', en: 'Enter' },
  'nav.brand': { ru: 'Герои и подвиги', en: 'Heroes & Deeds' },
  'nav.subtitle': { ru: 'Выставка памяти', en: 'Memorial Exhibition' },

  // Footer
  'footer.copy': { ru: '© 2026 Выставка «Герои и подвиги»', en: '© 2026 Heroes & Deeds Exhibition' },
  'footer.motto': { ru: 'Помним. Гордимся. Передаём.', en: 'We remember. We are proud. We pass it on.' },

  // HomePage
  'home.badge': { ru: 'Выставка памяти', en: 'Memorial Exhibition' },
  'home.h1.top': { ru: 'Герои', en: 'Heroes' },
  'home.h1.bottom': { ru: 'и Подвиги', en: 'and Deeds' },
  'home.subtitle': { ru: 'Дань уважения и благодарности всем героям нашей страны', en: 'A tribute of respect and gratitude to all heroes of our country' },
  'home.desc': { ru: 'Виртуальная версия выставки, посвящённой воинам, отдавшим жизнь за Родину. Здесь хранится память о героях — тех, кто сражался в Афганистане, Чечне и других горячих точках.', en: 'A virtual exhibition dedicated to warriors who gave their lives for the Motherland. Here lives the memory of heroes who fought in Afghanistan, Chechnya and other conflict zones.' },
  'home.btn.main': { ru: '🎖️ Смотреть выставку', en: '🎖️ View Exhibition' },
  'home.btn.palagin': { ru: 'С.В. Палагин — Герой России', en: 'S.V. Palagin — Hero of Russia' },
  'home.scroll': { ru: 'Листайте', en: 'Scroll' },
  'home.stat1.v': { ru: '5', en: '5' },
  'home.stat1.l': { ru: 'Героев России', en: 'Heroes of Russia' },
  'home.stat2.v': { ru: '2', en: '2' },
  'home.stat2.l': { ru: 'Войны Афган и Чечня', en: 'Wars: Afghan & Chechnya' },
  'home.stat3.v': { ru: '10+', en: '10+' },
  'home.stat3.l': { ru: 'Стендов выставки', en: 'Exhibition Stands' },
  'home.stat4.v': { ru: '2024', en: '2024' },
  'home.stat4.l': { ru: 'Год выставки', en: 'Exhibition Year' },
  'home.quote': { ru: '«Подвигу всегда есть место на земле. Нет героев от рожденья — они рождаются в боях!»', en: '"There is always room for a heroic deed on earth. No one is born a hero — heroes are born in battle!"' },
  'home.quote.attr': { ru: 'Девиз выставки «Герои и подвиги»', en: 'Motto of the Heroes & Deeds exhibition' },
  'home.sections.label': { ru: 'Выставка', en: 'Exhibition' },
  'home.sections.h2.top': { ru: 'Разделы', en: 'Sections' },
  'home.sections.h2.bottom': { ru: 'экспозиции', en: 'of the Exhibition' },
  'home.s1.title': { ru: 'Герои и подвиги', en: 'Heroes & Deeds' },
  'home.s1.desc': { ru: 'Стенды с историями героев: Вадим Епифанов, Борис Журавлёв, Александр Мальцев, Роман Торохов.', en: 'Exhibition stands with stories of heroes: Vadim Epifanov, Boris Zhuravlev, Alexander Maltsev, Roman Torokhov.' },
  'home.s2.title': { ru: 'С.В. Палагин', en: 'S.V. Palagin' },
  'home.s2.desc': { ru: 'Подполковник авиации, Герой Российской Федерации, кавалер трёх орденов мужества.', en: 'Lieutenant Colonel of Aviation, Hero of the Russian Federation, holder of three Orders of Courage.' },
  'home.s3.title': { ru: 'Эхо мужества', en: 'Echo of Courage' },
  'home.s3.desc': { ru: '«Имена, которые не забыть» — стенд, посвящённый героям чеченских войн и их именам на улицах города.', en: '"Names not to forget" — a stand dedicated to the heroes of the Chechen wars and their names on city streets.' },
  'home.s4.title': { ru: 'Песня «Братишка»', en: 'Song "Bratishka"' },
  'home.s4.desc': { ru: 'Текст песни Александра Маршала, посвящённой легендарному вертолёту Ми-8 «Братишка».', en: "Lyrics of Alexander Marshal's song dedicated to the legendary Mi-8 helicopter 'Bratishka'." },
  'home.cta.label': { ru: 'Помним. Гордимся.', en: 'We Remember. We are Proud.' },
  'home.cta.h2.top': { ru: 'Мужество,', en: 'Courage,' },
  'home.cta.h2.bottom': { ru: 'выносливость, слава!', en: 'endurance, glory!' },
  'home.cta.desc': { ru: 'Выставка «Герои и подвиги» — это живая память о тех, кто отдал всё ради защиты Родины. Изучите стенды, узнайте судьбы героев.', en: 'The Heroes & Deeds Exhibition is a living memory of those who gave everything to protect the Motherland. Explore the stands, learn the stories of heroes.' },
  'home.cta.btn': { ru: 'Войти в выставку →', en: 'Enter Exhibition →' },

  // HeroesPage
  'heroes.label': { ru: 'Выставка', en: 'Exhibition' },
  'heroes.h1.top': { ru: 'Герои', en: 'Heroes' },
  'heroes.h1.bottom': { ru: 'и Подвиги', en: 'and Deeds' },
  'heroes.intro': { ru: 'Выставка «Герои и подвиги» — это дань уважения и благодарности всем героям нашей страны.', en: 'The Heroes & Deeds Exhibition is a tribute of respect and gratitude to all heroes of our country.' },
  'heroes.intro.stand': { ru: 'Вступление', en: 'Introduction' },
  'heroes.intro.title': { ru: 'Выставка «Герои и подвиги»', en: 'Heroes & Deeds Exhibition' },
  'heroes.more': { ru: 'Подробнее', en: 'Learn more' },
  'heroes.echo.label': { ru: 'Стенд', en: 'Stand' },
  'heroes.echo.h2': { ru: 'Эхо мужества: имена, которые не забыть', en: 'Echo of Courage: names not to forget' },
  'heroes.echo.h2.italic': { ru: 'имена, которые не забыть', en: 'names not to forget' },
  'heroes.echo.caption': { ru: '«Гордое имя героя — улицам и школам города»', en: '"A hero\'s proud name — to city streets and schools"' },
  'heroes.afghan.label': { ru: 'Стенд', en: 'Stand' },
  'heroes.afghan.h2.part1': { ru: 'Нет героев от рожденья —', en: 'No one is born a hero —' },
  'heroes.afghan.h2.part2': { ru: 'они рождаются в боях', en: 'heroes are born in battle' },
  'heroes.afghan.caption': { ru: 'Войны в Афганистане и Чечне', en: 'Wars in Afghanistan and Chechnya' },
  'heroes.hero.title': { ru: 'Герой России', en: 'Hero of Russia' },
  // Hero names/descriptions
  'heroes.epifanov.name': { ru: 'Вадим Епифанов', en: 'Vadim Epifanov' },
  'heroes.epifanov.awards': { ru: 'Герой Российской Федерации', en: 'Hero of the Russian Federation' },
  'heroes.epifanov.desc': { ru: 'Вадим Епифанов — Герой Российской Федерации, удостоенный высшей государственной награды за мужество и героизм, проявленные при выполнении воинского долга.', en: 'Vadim Epifanov — Hero of the Russian Federation, awarded the highest state honor for courage and heroism shown in the performance of military duty.' },
  'heroes.zhuravlev.name': { ru: 'Борис Журавлёв', en: 'Boris Zhuravlev' },
  'heroes.zhuravlev.awards': { ru: 'Герой Российской Федерации, ордена и медали', en: 'Hero of the Russian Federation, orders and medals' },
  'heroes.zhuravlev.desc': { ru: 'Борис Журавлёв — Герой Российской Федерации. На стенде выставки представлены фотографии из его жизни, боевого пути и служения Родине.', en: 'Boris Zhuravlev — Hero of the Russian Federation. The exhibition stand features photographs from his life, combat path, and service to the Motherland.' },
  'heroes.maltsev.name': { ru: 'Александр Мальцев', en: 'Alexander Maltsev' },
  'heroes.maltsev.awards': { ru: 'Герой Российской Федерации, ордена Мужества', en: 'Hero of the Russian Federation, Orders of Courage' },
  'heroes.maltsev.desc': { ru: 'Александр Мальцев — Герой Российской Федерации. На стенде выставки — фотографии из мирной и боевой жизни, свидетельства подвига и любви к Родине.', en: 'Alexander Maltsev — Hero of the Russian Federation. The stand features photographs from both peaceful and combat life, evidence of his feat and love for the Motherland.' },
  'heroes.torokhov.name': { ru: 'Роман Торохов', en: 'Roman Torokhov' },
  'heroes.torokhov.awards': { ru: 'Герой Российской Федерации, два ордена', en: 'Hero of the Russian Federation, two orders' },
  'heroes.torokhov.desc': { ru: 'Роман Торохов — Герой Российской Федерации. Его история — пример стойкости, отваги и верности присяге.', en: 'Roman Torokhov — Hero of the Russian Federation. His story is an example of resilience, courage, and loyalty to the oath.' },
  'heroes.modal.zoom': { ru: 'Открыть стенд в полном размере', en: 'Open stand in full size' },

  // PalaginPage
  'palagin.label': { ru: 'Герой Российской Федерации', en: 'Hero of the Russian Federation' },
  'palagin.h1.top': { ru: 'Палагин', en: 'Palagin' },
  'palagin.h1.bottom': { ru: 'Сергей Вячеславович', en: 'Sergey Vyacheslavovich' },
  'palagin.subtitle': { ru: 'Подполковник авиации, Герой Российской Федерации, кавалер трёх орденов Мужества. Лётчик, чей вертолёт «Братишка» стал легендой.', en: 'Lieutenant Colonel of Aviation, Hero of the Russian Federation, holder of three Orders of Courage. The pilot whose helicopter "Bratishka" became a legend.' },
  'palagin.stand.label': { ru: 'Стенд выставки', en: 'Exhibition Stand' },
  'palagin.stand.title': { ru: 'МИР ДОЛЖЕН ПРАВИТЬ МИРОМ!', en: 'THE WORLD MUST BE RULED BY PEACE!' },
  'palagin.fact1.label': { ru: 'Должность', en: 'Position' },
  'palagin.fact1.value': { ru: 'Подполковник авиации', en: 'Lieutenant Colonel of Aviation' },
  'palagin.fact2.label': { ru: 'Звание', en: 'Rank' },
  'palagin.fact2.value': { ru: 'Герой Российской Федерации', en: 'Hero of the Russian Federation' },
  'palagin.fact3.label': { ru: 'Награды', en: 'Awards' },
  'palagin.fact3.value': { ru: 'Кавалер трёх орденов Мужества', en: 'Holder of Three Orders of Courage' },
  'palagin.fact4.label': { ru: 'Вертолёт', en: 'Helicopter' },
  'palagin.fact4.value': { ru: 'Ми-8 МТВ-2 «Братишка»', en: 'Mi-8 MTV-2 "Bratishka"' },
  'palagin.bio.label': { ru: 'Биография', en: 'Biography' },
  'palagin.bio.h2.top': { ru: 'Путь', en: 'The Path' },
  'palagin.bio.h2.bottom': { ru: 'лётчика', en: 'of a Pilot' },
  'palagin.bio.p1': { ru: 'Сергей Вячеславович Палагин — прославленный военный лётчик, подполковник авиации, удостоенный звания Героя Российской Федерации за выдающиеся заслуги перед Отечеством.', en: 'Sergey Vyacheslavovich Palagin is a distinguished military pilot, Lieutenant Colonel of Aviation, awarded the title of Hero of the Russian Federation for outstanding services to the Fatherland.' },
  'palagin.bio.p2': { ru: 'На боевом вертолёте Ми-8 МТВ-2, получившем позывной «Братишка», экипаж Палагина совершил тысячи вылетов в горячих точках, доставляя грузы, эвакуируя раненых и поддерживая наземные войска.', en: 'On the Mi-8 MTV-2 combat helicopter, callsigned "Bratishka", Palagin\'s crew completed thousands of sorties in conflict zones, delivering supplies, evacuating the wounded, and supporting ground forces.' },
  'palagin.bio.p3': { ru: 'Мир помнит его девизами: «Доблесть не знает непроходимых путей», «Мужество, выносливость, слава!»', en: 'He is remembered for his mottos: "Valor knows no impassable paths", "Courage, endurance, glory!"' },
  'palagin.awards.label': { ru: 'Награды', en: 'Awards' },
  'palagin.awards.h2.top': { ru: 'Ордена и', en: 'Orders and' },
  'palagin.awards.h2.bottom': { ru: 'медали', en: 'Medals' },
  'palagin.award1': { ru: 'Герой Российской Федерации', en: 'Hero of the Russian Federation' },
  'palagin.award2': { ru: 'Орден Мужества — I', en: 'Order of Courage — I' },
  'palagin.award3': { ru: 'Орден Мужества — II', en: 'Order of Courage — II' },
  'palagin.award4': { ru: 'Орден Мужества — III', en: 'Order of Courage — III' },
  'palagin.award5': { ru: 'Медали за боевые заслуги', en: 'Combat Merit Medals' },
  'palagin.quote': { ru: '«Доблесть не знает непроходимых путей»', en: '"Valor knows no impassable paths"' },
  'palagin.quote.attr': { ru: 'Девиз Сергея Палагина', en: "Sergey Palagin's Motto" },
  'palagin.song.label': { ru: 'Песня о вертолёте', en: 'Song about the helicopter' },
  'palagin.song.desc': { ru: 'О подвигах экипажа «Братишки» написана песня. Текст её автора — Александра Маршала.', en: "A song was written about the exploits of the 'Bratishka' crew. Lyrics by Alexander Marshal." },
  'palagin.song.btn': { ru: 'Читать песню «Братишка»', en: 'Read the "Bratishka" song' },

  // EchoPage
  'echo.label': { ru: 'Раздел выставки', en: 'Exhibition Section' },
  'echo.h1.top': { ru: 'Эхо мужества:', en: 'Echo of Courage:' },
  'echo.h1.bottom': { ru: 'имена, которые не забыть', en: 'names not to forget' },
  'echo.subtitle': { ru: 'Память о героях, отдавших жизни за Родину в Афганистане и Чечне. Их именами названы улицы и школы нашего города.', en: 'Memory of heroes who gave their lives for the Motherland in Afghanistan and Chechnya. Streets and schools of our city are named after them.' },
  'echo.stand1.subtitle': { ru: 'Герои чеченских войн 1994–2000 гг.', en: 'Heroes of the Chechen Wars 1994–2000' },
  'echo.stand1.title': { ru: 'Эхо мужества: имена, которые не забыть', en: 'Echo of Courage: names not to forget' },
  'echo.stand1.desc': { ru: 'Стенд посвящён героям, павшим в чеченских войнах. «Гордое имя героя — улицам и школам города».', en: 'The stand is dedicated to heroes who fell in the Chechen wars. "A hero\'s proud name — to city streets and schools".' },
  'echo.stand2.subtitle': { ru: 'Война в Афганистане', en: 'The War in Afghanistan' },
  'echo.stand2.title': { ru: 'Нет героев от рожденья — они рождаются в боях!', en: 'No one is born a hero — heroes are born in battle!' },
  'echo.stand2.desc': { ru: 'Стенд о войне в Афганистане 1979–1989 гг., боевых задачах ССО и ветеранах Краснодарского края.', en: 'A stand about the Afghan War 1979–1989, special operations tasks, and veterans of the Krasnodar region.' },
  'echo.stand3.subtitle': { ru: 'Витрина с боевыми трофеями', en: 'Showcase with Combat Trophies' },
  'echo.stand3.title': { ru: 'Экспонаты выставки', en: 'Exhibition Artifacts' },
  'echo.stand3.desc': { ru: 'Витрина с подлинными экспонатами: беспилотник, каска, ночной прицел, боеприпасы.', en: 'A showcase with authentic artifacts: drone, helmet, night-vision scope, ammunition.' },
  'echo.names.label': { ru: 'Имена героев', en: 'Names of Heroes' },
  'echo.names.h2': { ru: 'Гордое имя героя —', en: "A hero's proud name —" },
  'echo.names.h2.italic': { ru: 'улицам и школам города', en: 'to city streets and schools' },
  'echo.quote': { ru: '«Сколько раз, когда бывало трудно, вспоминая мамин нежный взгляд, сжав кулак и свято веря в чудо, делал невозможное солдат…»', en: '"How many times, when things were hard, remembering mother\'s gentle gaze, clenching a fist and faithfully believing in a miracle, the soldier did the impossible…"' },
  'echo.quote.attr': { ru: 'Надпись со стенда «Эхо мужества»', en: 'Inscription from the "Echo of Courage" stand' },

  // SongPage
  'song.label': { ru: 'Песня', en: 'Song' },
  'song.author': { ru: 'Текст песни — Александр Маршал', en: 'Lyrics — Alexander Marshal' },
  'song.stand.label': { ru: 'Стенд выставки', en: 'Exhibition Stand' },
  'song.stand.caption': { ru: 'Оригинальный стенд с текстом песни', en: 'Original stand with song lyrics' },
  'song.chorus.label': { ru: 'Припев:', en: 'Chorus:' },
  'song.about.label': { ru: 'О песне', en: 'About the Song' },
  'song.about.text': { ru: 'Песня «Братишка» посвящена боевому вертолёту Ми-8 МТВ-2, которому солдаты дали это ласковое прозвище. Экипаж под командованием С.В. Палагина совершал вылеты в самых опасных районах — от Бамута до Цхинвали. Вертолёт выходил из боёв невредимым, словно был «заговорён», и стал настоящей легендой.', en: 'The song "Bratishka" is dedicated to the Mi-8 MTV-2 combat helicopter, which soldiers gave this affectionate nickname. The crew under S.V. Palagin\'s command flew missions in the most dangerous areas — from Bamut to Tskhinvali. The helicopter came out of battles unscathed, as if "charmed", and became a true legend.' },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ru',
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('ru');

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

export default LanguageContext;