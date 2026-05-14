import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import Navbar from "@/components/qe/Navbar";
import QEButton from "@/components/qe/QEButton";
import logo from "@/assets/qe-logo.png";
import { Instagram, Facebook, Users, Sparkles, Scissors, Image as ImageIcon, BookOpen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import appPhone from "@/assets/qe-app-phone.png";
import patternQuiltTop from "@/assets/qe-pattern-1-quilt-top.webp";
import patternStats from "@/assets/qe-pattern-2-stats.webp";
import patternYardage from "@/assets/qe-pattern-3-yardage.webp";
import patternUnits from "@/assets/qe-pattern-4-units.webp";
import patternBlocks from "@/assets/qe-pattern-5-blocks.webp";
import patternAssembly from "@/assets/qe-pattern-6-assembly.webp";

const heroSlides = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return new URL(`../assets/hero-carousel/${n}.png`, import.meta.url).href;
});

const patternSlides = [
  { src: patternQuiltTop, caption: "The completed quilt top" },
  { src: patternStats, caption: "Quilt stats & glossary" },
  { src: patternYardage, caption: "Fabric yardage in your Kona colors" },
  { src: patternUnits, caption: "Unit construction" },
  { src: patternBlocks, caption: "Block construction" },
  { src: patternAssembly, caption: "Assembling the quilt top" },
];

const YT_ID = "qY0rw3gkEUo";

const YouTubeFacade = () => {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
        title="Quilt Explorer demo video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }
  return (
    <button
      onClick={() => setActive(true)}
      className="relative w-full h-full group"
      aria-label="Play Quilt Explorer demo video"
    >
      <img
        src={`https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`}
        alt="Quilt Explorer demo video thumbnail"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-kona-pomegranate/90 flex items-center justify-center shadow-pop group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white ml-1" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

const Index = () => {
  const heroAutoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false }));
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Quilt Explorer: Your magic kaleidoscope for quilt design</title>
        <meta name="description" content="Design beautiful, unique quilt blocks in minutes. Explore endless possibilities and get a complete PDF pattern with cutting and assembly instructions." />
      </Helmet>
      <Navbar />

      {/* Section 1 - Hero (soft pink) */}
      <section className="bg-section-pink">
        <div className="container pt-8 md:pt-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src={logo}
              alt="Quilt Explorer logo"
              className="mx-auto w-full max-w-[400px] h-auto"
            />

            <div className="mt-10 md:grid md:grid-cols-2 md:gap-10 md:items-start">
              {/* Left: carousel + CTA */}
              <div>
                <div className="px-10 md:px-8">
                  <Carousel
                    opts={{ loop: true }}
                    plugins={[heroAutoplay.current]}
                    className="w-full max-w-xs mx-auto"
                  >
                    <CarouselContent>
                      {heroSlides.map((src, i) => (
                        <CarouselItem key={i}>
                          <figure className="rounded-2xl overflow-hidden shadow-pop bg-white p-2 aspect-square">
                            <img
                              src={src}
                              alt={`Quilt design ${i + 1}`}
                              className="w-full h-full object-contain rounded-lg"
                              loading={i === 0 ? "eager" : "lazy"}
                            />
                          </figure>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
                    <CarouselNext className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
                  </Carousel>
                </div>
                <div className="mt-8">
                  <a href="https://app.quiltexplorer.com">
                    <QEButton size="lg">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Start exploring!
                    </QEButton>
                  </a>
                </div>
              </div>

              {/* Right: tagline + text */}
              <div className="mt-10 md:-mt-1.5 md:text-left space-y-4">
                <p className="text-3xl md:text-4xl font-extrabold text-kona-pomegranate-deep">
                  Your magic kaleidoscope
                  <br />
                  for quilt design
                </p>
                <p className="text-lg md:text-xl text-charcoal/80">
                  Every click generates a beautiful new design.
                </p>
                <p className="text-lg md:text-xl text-charcoal/80">
                  Explore the possibilities, find one you love, and tweak it until it's unmistakably yours.
                </p>
                <p className="text-lg md:text-xl text-charcoal/80">
                  Free to design and fun to share — on your phone, tablet, or computer.
                </p>
                <p className="text-lg md:text-xl text-charcoal/80">
                  Only pay for PDF patterns and Premium features.
                </p>
                <blockquote className="text-xl italic text-kona-pomegranate pt-2">
                  "Wow! Even I can do this"
                  <footer className="not-italic text-base text-charcoal/70 mt-1">
                    — Maryjane Morris, Brisbane, Australia
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 - Why (soft grey) */}
      <section className="bg-section-grey">
        <div className="container py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center text-kona-pomegranate">
              Why Quilt Explorer?
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
              <div className="space-y-5 text-lg text-charcoal/85">
                <p>
                  No steep learning curve. Just jump in and play.
                </p>
                <p>
                  Instant visual feedback makes every click a delight.
                </p>
                <p>
                  Our tutorials are there whenever you need them, for inspiration or a helping hand.
                </p>
                <p className="text-2xl font-bold text-kona-orange">So easy! Such fun!</p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-pop bg-charcoal aspect-video">
                  <YouTubeFacade />
                </div>
                <div className="mt-6 text-center">
                  <a href="https://app.quiltexplorer.com">
                    <QEButton size="md">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Click here
                    </QEButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Features (soft pink) */}
      <section className="bg-section-pink">
        <div className="container py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center text-kona-pomegranate">
              What can you do with QE?
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">

              {/* Phone screenshot */}
              <div className="flex justify-center">
                <div className="border-[6px] border-charcoal rounded-[2.5rem] shadow-2xl overflow-hidden max-w-[340px] w-full">
                  <img
                    src={appPhone}
                    alt="Quilt Explorer app design screen"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Feature lists */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-kona-pomegranate mb-3">Free, forever</h3>
                  <ul className="space-y-2 text-lg text-charcoal/85">
                    {[
                      "Endless random block designs",
                      "Repeated blocks & checkerboard quilts",
                      "Half-Square Triangle (HST) & Square units",
                      "Choice of Kona color palettes",
                      "Fine control of colors",
                      "Share your designs with others",
                      "Order precise PDF patterns (see next section)",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-kona-chartreuse flex items-center justify-center text-charcoal font-bold text-xs">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-kona-capri-deep mb-1 flex items-center gap-2">
                    Premium
                    <span className="text-sm font-bold bg-kona-capri-deep text-white rounded-full px-3 py-0.5">Coming soon</span>
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-3 italic">Good things are on their way — watch this space.</p>
                  <ul className="space-y-2 text-lg text-charcoal/50">
                    {[
                      "Customise and save your color palettes",
                      "Save your designs",
                      "Scrappy quilts",
                      "Two-block checkerboard quilts",
                      "Larger block sizes: up to 11×11 units",
                      "Additional block styles, e.g. Rotation",
                      "Quarter-Square Triangle (QST) units",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-kona-capri-soft border border-kona-capri-deep flex items-center justify-center text-kona-capri-deep font-bold text-xs">🔒</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-charcoal/40 italic">…and more</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Patterns (soft grey) */}
      <section className="bg-section-grey">
        <div className="container py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center text-kona-pomegranate">
              Brilliant, value-packed patterns
            </h2>
            <p className="mt-4 text-center text-lg text-charcoal/80 max-w-2xl mx-auto">
              Quilt Explorer patterns explain <span className="font-bold">EVERYTHING</span> you need to make your quilt top.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {[
                { icon: ImageIcon, text: "Full color images" },
                { icon: Scissors, text: "Kona fabric yardage" },
                { icon: Scissors, text: "Cutting instructions" },
                { icon: Sparkles, text: "Piecing & assembly" },
                { icon: BookOpen, text: "Helpful tutorials" },
              ].map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="inline-flex items-center gap-2 bg-card rounded-full pl-2 pr-4 py-1.5 shadow-soft border border-border"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-kona-chartreuse flex items-center justify-center">
                    <Icon className="h-3.5 w-3.5 text-charcoal" />
                  </span>
                  <span className="text-sm font-semibold text-charcoal whitespace-nowrap">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 px-10 md:px-12 max-w-3xl mx-auto">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {patternSlides.map((slide, i) => (
                    <CarouselItem key={i}>
                      <figure className="rounded-2xl overflow-hidden shadow-pop bg-white p-2 h-[28rem] md:h-[32rem] flex flex-col">
                        <div className="flex-1 flex items-center justify-center overflow-hidden">
                          <img
                            src={slide.src}
                            alt={slide.caption}
                            className="max-h-full max-w-full object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="text-center text-sm text-charcoal/70 py-3 font-semibold">
                          {slide.caption}
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
                <CarouselNext className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Community (soft pink) */}
      <section id="contact" className="bg-section-pink">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-kona-pomegranate">
              Be part of the Quilt Explorer community
            </h2>
            <p className="mt-4 text-lg text-charcoal/80">
              Find up-to-date information and gorgeous new designs in your social media feeds.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <a
                href="https://instagram.com/quiltexplorerdotcom"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
              >
                <Instagram className="h-4 w-4 text-kona-capri-deep" />
                <span className="text-sm font-bold text-kona-capri-deep">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=615733481710466&sk=about"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
              >
                <Facebook className="h-4 w-4 text-kona-capri-deep" />
                <span className="text-sm font-bold text-kona-capri-deep">Facebook Page</span>
              </a>
              <a
                href="https://www.facebook.com/groups/2438672756618317"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-kona-capri-soft rounded-full px-4 py-2 border-2 border-kona-capri-deep hover:shadow-pop transition-all hover:-translate-y-0.5"
              >
                <Users className="h-4 w-4 text-kona-capri-deep" />
                <span className="text-sm font-bold text-kona-capri-deep">Facebook Group</span>
              </a>
            </div>

            <p className="mt-10 text-charcoal/80 max-w-2xl mx-auto">
              Connect with other Quilt Explorer users in the Facebook community group.
              Share your designs and see what others have been creating.
            </p>

            <div className="mt-10">
              <a href="https://app.quiltexplorer.com">
                <QEButton size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start designing now
                </QEButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-kona-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Quilt Explorer. Your magic kaleidoscope for quilt design.
          </div>
          <a href="/terms" className="hover:underline">
            Terms and conditions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
