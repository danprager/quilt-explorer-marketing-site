import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/qe/Navbar";

const VIDEO_ID = "I8pYWNwpSYQ";

const sections = [
  { t: 12,   label: "What is Quilt Explorer?" },
  { t: 66,   label: "The interface — Block and Quilt views" },
  { t: 80,   label: "Portrait vs Landscape mode" },
  { t: 103,  label: "Block grid size" },
  { t: 152,  label: "Block style — Symmetric, Mirror, Slope, Rotation" },
  { t: 206,  label: "Units — Squares, HSTs & QSTs" },
  { t: 242,  label: "New Block button" },
  { t: 272,  label: "Color palettes" },
  { t: 323,  label: "Creating custom palettes" },
  { t: 528,  label: "Fine color control & Shuffle Colors" },
  { t: 588,  label: "Scrappy mode" },
  { t: 639,  label: "Quilt layout — Checkerboard, Color Shift, Blocks A&B" },
  { t: 831,  label: "Share button" },
  { t: 864,  label: "Order Pattern (& Andi for scale!)" },
  { t: 1009, label: "What's in a Quilt Explorer pattern?" },
];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

const FullTutorial = () => {
  const [start, setStart] = useState<number | null>(null);

  const src = start !== null
    ? `https://www.youtube.com/embed/${VIDEO_ID}?start=${start}&autoplay=1`
    : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Full Video Tutorial — Quilt Explorer</title>
        <meta name="description" content="A complete walkthrough of Quilt Explorer — learn every feature from block design to ordering your PDF pattern." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Full Video Tutorial
            </h1>
            <p className="mt-4 text-center text-lg text-charcoal/80">
              Andi walks you through everything Quilt Explorer can do — from your first click to ordering your pattern.
            </p>

            {/* Video player */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-pop bg-charcoal aspect-video">
              {src ? (
                <iframe
                  key={src}
                  className="w-full h-full"
                  src={src}
                  title="Quilt Explorer full tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setStart(0)}
                  className="relative w-full h-full group"
                  aria-label="Play Quilt Explorer full tutorial"
                >
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt="Quilt Explorer full tutorial thumbnail"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-kona-pomegranate/90 flex items-center justify-center shadow-pop group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>

            {/* Sections */}
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold text-kona-pomegranate mb-4">Jump to a section</h2>
              <ol className="space-y-0.5">
                {sections.map((s) => (
                  <li key={s.t}>
                    <button
                      onClick={() => setStart(s.t)}
                      className="group flex items-center gap-3 w-full text-left rounded-xl px-4 py-1.5 hover:bg-kona-pomegranate/10 transition-colors"
                    >
                      <span className="shrink-0 font-mono text-sm text-kona-pomegranate font-bold w-10">
                        {fmt(s.t)}
                      </span>
                      <span className="text-charcoal/85 group-hover:text-kona-pomegranate transition-colors">
                        {s.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>

          </article>
        </div>
      </section>
      <footer className="bg-charcoal text-kona-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div>© {new Date().getFullYear()} Quilt Explorer. Your magic kaleidoscope for quilt design.</div>
          <a href="/terms" className="hover:underline">Terms and conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default FullTutorial;
