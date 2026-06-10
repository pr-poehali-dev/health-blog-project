type Page = "home" | "gallery" | "articles";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const articles = [
  {
    id: 1,
    category: "Nutriție",
    title: "Cum să mănânci sănătos fără stres",
    excerpt:
      "Principii simple ale unui regim alimentar sănătos, ușor de integrat în viața de zi cu zi, fără restricții dure.",
    date: "5 iunie 2026",
    readTime: "4 min",
    emoji: "🥗",
  },
  {
    id: 2,
    category: "Mișcare",
    title: "Plimbările — cel mai bun remediu pentru slăbit",
    excerpt:
      "De ce mersul pe jos funcționează mai bine decât antrenamentele intense și cum să îl transformi într-un obicei.",
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
];

const benefits = [
  { emoji: "🌿", title: "Abordare naturală", desc: "Fără diete și restricții dure" },
  { emoji: "💚", title: "Pentru toată familia", desc: "Sfaturi pentru orice vârstă" },
  { emoji: "🌱", title: "Treptat", desc: "Pași mici spre rezultate mari" },
  { emoji: "☀️", title: "Cu plăcere", desc: "Sănătate fără violență față de sine" },
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
            Blog despre sănătate și slăbit
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
            Trăiește în armonie <br />cu tine și natura
          </h1>
          <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-10 animate-fade-in-up delay-200">
            Metode naturale de a slăbi, a căpăta energie și a-ți iubi corpul — fără stres și diete stricte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button
              onClick={() => onNavigate("articles")}
              className="px-8 py-3 bg-white text-[hsl(var(--green-deep))] font-body font-medium rounded-full hover:bg-white/90 transition-all shadow-lg"
            >
              Citește articole
            </button>
            <button
              onClick={() => onNavigate("gallery")}
              className="px-8 py-3 border border-white/50 text-white font-body font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Galerie
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
            <p className="font-body text-xs uppercase tracking-widest text-primary mb-2">Recent</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Ultimele articole
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article
                key={a.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
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
                    <span>{a.readTime} citire</span>
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
              Toate articolele
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(var(--green-deep))] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-5xl mb-6">🌿</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Începe călătoria spre sănătate astăzi
          </h2>
          <p className="font-body text-white/75 max-w-md mx-auto mb-8">
            Citește articole, inspiră-te din galerie și mergi spre cea mai bună versiune a ta.
          </p>
          <button
            onClick={() => onNavigate("articles")}
            className="px-10 py-3 bg-white text-[hsl(var(--green-deep))] font-body font-medium rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            Începe să citești
          </button>
        </div>
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
