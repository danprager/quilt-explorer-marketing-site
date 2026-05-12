import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";
import QEButton from "@/components/qe/QEButton";
import logo from "@/assets/qe-logo.webp";
import { Instagram, Facebook, Users, Sparkles, Scissors, Image as ImageIcon, BookOpen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
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

const Index = () => {
  const heroAutoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false }));
  const [heroApi, setHeroApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(true);
  const toggleAutoplay = () => {
    const plugin = heroAutoplay.current;
    const next = !isPlayingRef.current;
    isPlayingRef.current = next;
    setIsPlaying(next);
    if (next) plugin.play();
    else plugin.stop();
  };
  useEffect(() => {
    if (!heroApi) return;
    const plugin = heroAutoplay.current;
    const keepPaused = () => {
      if (!isPlayingRef.current) plugin.stop();
    };
    heroApi.on("pointerUp", keepPaused);
    heroApi.on("select", keepPaused);
    heroApi.on("settle", keepPaused);
    return () => {
      heroApi.off("pointerUp", keepPaused);
      heroApi.off("select", keepPaused);
      heroApi.off("settle", keepPaused);
    };
  }, [heroApi]);
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Quilt Explorer — Easy! Fun! Gorgeous Quilt Designs</title>
        <meta name="description" content="Design beautiful, unique quilt blocks in minutes. Explore endless possibilities and get a complete PDF pattern with cutting and assembly instructions." />
      </Helmet>
      <Navbar />

      {/* Section 1 - Hero (soft pink) */}
      <section className="bg-section-pink">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src={logo}
              alt="Quilt Explorer logo"
              className="mx-auto w-full max-w-2xl h-auto"
            />
            <p className="mt-6 text-3xl md:text-5xl font-extrabold text-kona-pomegranate-deep">
              Your magic kaleidoscope
              <br />
              for quilt design
            </p>

            <div className="mt-10 px-10 md:px-12">
              <Carousel
                opts={{ loop: true }}
                plugins={[heroAutoplay.current]}
                setApi={setHeroApi}
                className="w-full max-w-2xl mx-auto"
              >
                <CarouselContent>
                  {heroSlides.map((src, i) => (
                    <CarouselItem key={i}>
                      <figure className="rounded-2xl overflow-hidden shadow-pop bg-white p-2">
                        <img
                          src={src}
                          alt={`Quilt design ${i + 1}`}
                          className="w-full h-auto rounded-lg"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
                <CarouselNext className="bg-kona-pomegranate text-kona-white border-none hover:bg-kona-pomegranate/90 hover:text-kona-white" />
              </Carousel>
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={toggleAutoplay}
                  aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                  aria-pressed={!isPlaying}
                  className="inline-flex items-center gap-2 rounded-full bg-kona-pomegranate text-kona-white px-4 py-2 text-sm font-bold shadow-soft hover:bg-kona-pomegranate/90 transition-all"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>

            <div className="mt-10">
              <a href="https://app.quiltexplorer.com">
                <QEButton size="lg" className="animate-wiggle">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start exploring!
                </QEButton>
              </a>
            </div>

            <p className="mt-10 text-lg md:text-xl text-charcoal/80">
              Each button click is like a turn of the kaleidoscope, offering a beautiful new design each time.
            </p>
            <p className="mt-3 text-lg md:text-xl text-charcoal/80">
              Quilt Explorer makes it easy to create a unique fabulous design in minutes, and access an easy-to-follow pattern with complete yardages, cutting and sewing instructions.
            </p>

            <blockquote className="mt-8 text-xl italic text-kona-pomegranate">
              "Wow! Even I can do this"
              <footer className="not-italic text-base text-charcoal/70 mt-1">
                — Maryjane Morris, Brisbane, Australia
              </footer>
            </blockquote>

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
                  If you can't face the thought of learning complicated new software for designing your quilts,
                  <span className="font-semibold text-kona-pomegranate"> Quilt Explorer is for you!</span>
                </p>
                <p>
                  The simplicity of the design process and the immediate visual feedback makes Quilt Explorer
                  a delight to use.
                </p>
                <p className="text-2xl font-bold text-kona-orange">So easy! Such fun!</p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-pop bg-charcoal aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/qY0rw3gkEUo"
                    title="Quilt Explorer demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
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

      {/* Section 3 - Patterns (soft pink) */}
      <section className="bg-section-pink">
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

      {/* Section 4 - Community (soft grey) */}
      <section id="contact" className="bg-section-grey">
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
                <span className="text-sm font-bold text-kona-capri-deep">Community Group</span>
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
