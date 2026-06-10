import { useState } from "react";
import Icon from "@/components/ui/icon";

const images = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/a6b521d2-4173-48dd-a2b6-5be693cd2f02.jpg",
    title: "Здоровое питание",
    category: "Питание",
    desc: "Свежие овощи и зелень — основа натурального рациона",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/07b04f58-234c-4ba9-b0ff-949f189d7484.jpg",
    title: "Прогулки в природе",
    category: "Движение",
    desc: "Утренние прогулки босиком по лесной тропе",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/960f4eee-5c83-46a5-a0a6-e93f43ffdc71.jpg",
    title: "Утренняя йога",
    category: "Движение",
    desc: "Медитация и йога для гармонии тела и ума",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/a6b521d2-4173-48dd-a2b6-5be693cd2f02.jpg",
    title: "Зелёные смузи",
    category: "Питание",
    desc: "Витаминные смузи для энергии с утра",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/07b04f58-234c-4ba9-b0ff-949f189d7484.jpg",
    title: "Лесные прогулки",
    category: "Природа",
    desc: "Лес исцеляет — японская практика синрин-йоку",
  },
  {
    id: 6,
    src: "https://cdn.poehali.dev/projects/d510431e-4592-4bdc-b06a-c6d2b513f001/files/960f4eee-5c83-46a5-a0a6-e93f43ffdc71.jpg",
    title: "Осознанность",
    category: "Психология",
    desc: "Практики осознанности снижают стресс и нормализуют вес",
  },
];

const categories = ["Все", "Питание", "Движение", "Природа", "Психология"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [lightbox, setLightbox] = useState<(typeof images)[0] | null>(null);

  const filtered =
    activeCategory === "Все"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(var(--green-deep))] to-[hsl(var(--green-mid))] text-white py-16 text-center">
        <p className="font-body text-white/60 uppercase tracking-widest text-xs mb-3">
          Визуальное вдохновение
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Галерея</h1>
        <p className="font-body text-white/75 max-w-md mx-auto text-base">
          Образы здоровой и гармоничной жизни в единстве с природой
        </p>
      </section>

      {/* Category filter */}
      <section className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-border py-4">
        <div className="container mx-auto px-6 flex gap-2 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="break-inside-avoid group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
              onClick={() => setLightbox(img)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="text-xs font-body uppercase tracking-wider text-white/70 font-medium">
                      {img.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white leading-snug">
                      {img.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur rounded-full p-1.5">
                    <Icon name="ZoomIn" size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full object-cover max-h-[70vh]"
            />
            <div className="p-6">
              <span className="text-xs font-body uppercase tracking-wider text-primary font-medium">
                {lightbox.category}
              </span>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-1 mb-2">
                {lightbox.title}
              </h2>
              <p className="font-body text-sm text-muted-foreground">{lightbox.desc}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>
      )}

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
