type Page = "home" | "gallery" | "articles";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const articles = [
  {
    id: 1,
    category: "Питание",
    title: "Как начать правильно питаться без стресса",
    excerpt:
      "Простые принципы здорового рациона, которые легко встроить в повседневную жизнь без жёстких ограничений.",
    date: "5 июня 2026",
    readTime: "4 мин",
    emoji: "🥗",
  },
  {
    id: 2,
    category: "Движение",
    title: "Прогулки как лучшее средство для похудения",
    excerpt:
      "Почему ходьба работает лучше интенсивных тренировок и как превратить её в привычку.",
    date: "1 июня 2026",
    readTime: "5 мин",
    emoji: "🚶‍♀️",
  },
  {
    id: 3,
    category: "Психология",
    title: "Пищевые привычки: как изменить отношение к еде",
    excerpt:
      "Разбираем механизмы эмоционального переедания и учимся слышать сигналы своего тела.",
    date: "28 мая 2026",
    readTime: "6 мин",
    emoji: "🧠",
  },
];

const benefits = [
  { emoji: "🌿", title: "Натуральный подход", desc: "Без диет и жёстких ограничений" },
  { emoji: "💚", title: "Для всей семьи", desc: "Советы для любого возраста" },
  { emoji: "🌱", title: "Постепенно", desc: "Маленькие шаги к большим результатам" },
  { emoji: "☀️", title: "С удовольствием", desc: "Здоровье без насилия над собой" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--green-deep))] to-[hsl(var(--green-mid))] text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-[120px] animate-leaf">🌿</div>
          <div className="absolute bottom-10 right-16 text-[90px] animate-leaf" style={{ animationDelay: "2s" }}>🍃</div>
          <div className="absolute top-1/2 right-1/3 text-[60px] animate-leaf" style={{ animationDelay: "1s" }}>🌱</div>
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
          <p className="font-body text-white/70 uppercase tracking-widest text-xs mb-4 animate-fade-in">
            Блог о здоровье и похудении
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
            Живи в гармонии <br />с собой и природой
          </h1>
          <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-10 animate-fade-in-up delay-200">
            Натуральные способы похудеть, набраться энергии и полюбить своё тело — без стресса и жёстких диет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button
              onClick={() => onNavigate("articles")}
              className="px-8 py-3 bg-white text-[hsl(var(--green-deep))] font-body font-medium rounded-full hover:bg-white/90 transition-all shadow-lg"
            >
              Читать статьи
            </button>
            <button
              onClick={() => onNavigate("gallery")}
              className="px-8 py-3 border border-white/50 text-white font-body font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Галерея
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[hsl(var(--cream))] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center p-4 animate-fade-in-up">
                <div className="text-4xl mb-3">{b.emoji}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-primary mb-2">Свежее</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Последние статьи
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article
                key={a.id}
                className={`group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-44 bg-gradient-to-br from-[hsl(var(--green-light))] to-[hsl(var(--green-mid))] flex items-center justify-center text-6xl">
                  {a.emoji}
                </div>
                <div className="p-6">
                  <span className="text-xs font-body uppercase tracking-wider text-primary font-medium">
                    {a.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-body">
                    <span>{a.date}</span>
                    <span>{a.readTime} чтения</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate("articles")}
              className="px-8 py-3 border border-primary text-primary font-body font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Все статьи
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(var(--green-deep))] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-5xl mb-6">🌿</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Начни путь к здоровью сегодня
          </h2>
          <p className="font-body text-white/75 max-w-md mx-auto mb-8">
            Читай статьи, черпай вдохновение в галерее и двигайся к своей лучшей версии.
          </p>
          <button
            onClick={() => onNavigate("articles")}
            className="px-10 py-3 bg-white text-[hsl(var(--green-deep))] font-body font-medium rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            Начать читать
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--bark))] text-white/70 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-lg text-white mb-1">🌿 ЗдравоБлог</p>
          <p className="font-body text-xs">© 2026 · Всё о здоровье и гармоничной жизни</p>
        </div>
      </footer>
    </main>
  );
}
