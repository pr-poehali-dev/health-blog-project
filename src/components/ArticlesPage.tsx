import { useState } from "react";
import Icon from "@/components/ui/icon";

const articles = [
  {
    id: 1,
    category: "Питание",
    title: "Как начать правильно питаться без стресса",
    excerpt:
      "Простые принципы здорового рациона, которые легко встроить в повседневную жизнь без жёстких ограничений и подсчёта калорий.",
    date: "5 июня 2026",
    readTime: "4 мин",
    emoji: "🥗",
  },
  {
    id: 2,
    category: "Движение",
    title: "Прогулки как лучшее средство для похудения",
    excerpt:
      "Почему ходьба работает лучше интенсивных тренировок и как превратить её в приятную ежедневную привычку.",
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
  {
    id: 4,
    category: "Детокс",
    title: "Мягкое очищение организма весной",
    excerpt:
      "Как поддержать организм в период сезонных перемен с помощью натуральных продуктов и простых ритуалов.",
    date: "20 мая 2026",
    readTime: "5 мин",
    emoji: "🌸",
  },
  {
    id: 5,
    category: "Сон",
    title: "Почему сон — лучшее средство для похудения",
    excerpt:
      "Связь между качеством сна, гормонами аппетита и лишним весом. Как наладить режим за 2 недели.",
    date: "15 мая 2026",
    readTime: "7 мин",
    emoji: "🌙",
  },
  {
    id: 6,
    category: "Рецепты",
    title: "5 зелёных смузи для бодрости утром",
    excerpt:
      "Быстрые и вкусные рецепты из доступных продуктов, которые зарядят энергией на весь день.",
    date: "10 мая 2026",
    readTime: "3 мин",
    emoji: "🥤",
  },
  {
    id: 7,
    category: "Питание",
    title: "Интервальное голодание: мифы и реальность",
    excerpt:
      "Разбираем популярные схемы 16/8 и 5:2 — кому подходит, кому противопоказано и как начать.",
    date: "5 мая 2026",
    readTime: "8 мин",
    emoji: "⏰",
  },
  {
    id: 8,
    category: "Движение",
    title: "Йога для начинающих: 15 минут в день",
    excerpt:
      "Комплекс простых асан для улучшения гибкости, осанки и снижения уровня стресса.",
    date: "1 мая 2026",
    readTime: "4 мин",
    emoji: "🧘‍♀️",
  },
];

const categories = ["Все", "Питание", "Движение", "Психология", "Детокс", "Сон", "Рецепты"];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "Все" || a.category === activeCategory;
    const matchSearch =
      search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(var(--green-deep))] to-[hsl(var(--green-mid))] text-white py-16 text-center">
        <p className="font-body text-white/60 uppercase tracking-widest text-xs mb-3">
          Блог
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Статьи</h1>
        <p className="font-body text-white/75 max-w-md mx-auto text-base">
          Практичные советы о питании, движении и здоровом образе жизни
        </p>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-border py-4">
        <div className="container mx-auto px-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-4">
            <Icon
              name="Search"
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Поиск статей..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-muted border border-border rounded-full text-sm font-body outline-none focus:border-primary transition-colors"
            />
          </div>
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="container mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-body">
            <div className="text-5xl mb-4">🔍</div>
            <p>Статьи не найдены. Попробуйте другой запрос.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a, i) => (
              <article
                key={a.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-[hsl(var(--green-light))] to-[hsl(var(--green-mid))] flex items-center justify-center text-5xl">
                  {a.emoji}
                </div>
                <div className="p-6">
                  <span className="text-xs font-body uppercase tracking-wider text-primary font-medium">
                    {a.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-body">
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {a.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
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
