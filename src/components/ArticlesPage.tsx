import { useState } from "react";
import Icon from "@/components/ui/icon";

const articles = [
  {
    id: 1,
    category: "Nutriție",
    title: "Cum să mănânci sănătos fără stres",
    excerpt:
      "Principii simple ale unui regim alimentar sănătos, ușor de integrat în viața de zi cu zi, fără restricții dure și fără numărarea caloriilor.",
    date: "5 iunie 2026",
    readTime: "4 min",
    emoji: "🥗",
  },
  {
    id: 2,
    category: "Mișcare",
    title: "Plimbările — cel mai bun remediu pentru slăbit",
    excerpt:
      "De ce mersul pe jos funcționează mai bine decât antrenamentele intense și cum să îl transformi într-un obicei zilnic plăcut.",
    date: "1 iunie 2026",
    readTime: "5 min",
    emoji: "🚶‍♀️",
  },
  {
    id: 3,
    category: "Psihologie",
    title: "Obiceiuri alimentare: cum să-ți schimbi relația cu mâncarea",
    excerpt:
      "Analizăm mecanismele supraalimentării emoționale și învățăm să ascultăm semnalele corpului nostru.",
    date: "28 mai 2026",
    readTime: "6 min",
    emoji: "🧠",
  },
  {
    id: 4,
    category: "Detox",
    title: "Curățare blândă a organismului primăvara",
    excerpt:
      "Cum să îți susții corpul în perioadele de schimbare sezonieră cu produse naturale și ritualuri simple.",
    date: "20 mai 2026",
    readTime: "5 min",
    emoji: "🌸",
  },
  {
    id: 5,
    category: "Somn",
    title: "De ce somnul este cel mai bun remediu pentru slăbit",
    excerpt:
      "Legătura dintre calitatea somnului, hormonii apetitului și kilogramele în plus. Cum să îți reglezi programul în 2 săptămâni.",
    date: "15 mai 2026",
    readTime: "7 min",
    emoji: "🌙",
  },
  {
    id: 6,
    category: "Rețete",
    title: "5 smoothie-uri verzi pentru energie dimineața",
    excerpt:
      "Rețete rapide și delicioase din produse accesibile, care îți vor oferi energie pentru toată ziua.",
    date: "10 mai 2026",
    readTime: "3 min",
    emoji: "🥤",
  },
  {
    id: 7,
    category: "Nutriție",
    title: "Postul intermitent: mituri și realitate",
    excerpt:
      "Analizăm schemele populare 16/8 și 5:2 — cui i se potrivesc, cui sunt contraindicate și cum să începi.",
    date: "5 mai 2026",
    readTime: "8 min",
    emoji: "⏰",
  },
  {
    id: 8,
    category: "Mișcare",
    title: "Yoga pentru începători: 15 minute pe zi",
    excerpt:
      "Un complex de asane simple pentru îmbunătățirea flexibilității, posturii și reducerea nivelului de stres.",
    date: "1 mai 2026",
    readTime: "4 min",
    emoji: "🧘‍♀️",
  },
];

const categories = ["Toate", "Nutriție", "Mișcare", "Psihologie", "Detox", "Somn", "Rețete"];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "Toate" || a.category === activeCategory;
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
          Blog
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Articole</h1>
        <p className="font-body text-white/75 max-w-md mx-auto text-base">
          Sfaturi practice despre nutriție, mișcare și un stil de viață sănătos
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
              placeholder="Caută articole..."
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
            <p>Articolele nu au fost găsite. Încearcă altă căutare.</p>
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
          <p className="font-display text-lg text-white mb-1">🌿 SănătateaBlog</p>
          <p className="font-body text-xs">© 2026 · Totul despre sănătate și viață armonioasă</p>
        </div>
      </footer>
    </main>
  );
}
