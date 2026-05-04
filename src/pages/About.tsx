import Navbar from "@/components/qe/Navbar";
import QEButton from "@/components/qe/QEButton";
import { Sparkles } from "lucide-react";
import story1 from "@/assets/about-story-1.png";
import story2 from "@/assets/about-story-2.png";
import story3 from "@/assets/about-story-3.png";
import whoBannerTop from "@/assets/about-who-banner-top.png";
import whoAndi from "@/assets/about-who-andi.png";
import whoDan from "@/assets/about-who-dan.png";
import whoJohn from "@/assets/about-who-john.png";
import whoBannerBottom from "@/assets/about-who-banner-bottom.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page 1 — The Quilt Explorer story */}
      <section className="bg-section-pink">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-kona-pomegranate text-center">
              The Quilt Explorer story
            </h1>

            <figure className="mt-10 flex justify-center">
              <img
                src={story1}
                alt="Quilt Explorer"
                className="w-64 h-64 object-contain rounded-2xl shadow-pop bg-white"
              />
            </figure>

            <p className="mt-8 text-lg text-charcoal/85">
              Andi Herman (aka PatchAndi) and Dan Prager are the wife-and-husband team behind YouPatch, the pixel-quilt design tool at{" "}
              <a
                href="http://youpatch.com"
                target="_blank"
                rel="noreferrer"
                className="text-kona-pomegranate underline font-semibold"
              >
                youpatch.com
              </a>
              . After more than ten years of helping quilters turn photos into fabulous pixel-quilt designs, they turned their attention to something new: a better way to design traditional-style quilt blocks.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Andi had tried many of the quilt design tools on the market and found them frustrating — hard to learn, and hard to get a result she actually loved. Dan, a mathematician with a deep understanding of symmetry and computing, saw an opportunity to build something completely different. Together, they created Quilt Explorer.
            </p>

            <figure className="mt-10 flex justify-center">
              <img
                src={story2}
                alt="Quilt Explorer designs"
                className="w-64 h-64 object-contain rounded-2xl shadow-pop bg-white"
              />
            </figure>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-charcoal">
              Quilt Explorer: a magic kaleidoscope for quilt design
            </h2>
            <p className="mt-4 text-lg text-charcoal/85">
              Open it up, start exploring, and watch gorgeous new designs appear on your screen — each one unique, each one generated in an instant.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              When you find a design that takes your breath away, Quilt Explorer can turn it into a detailed, personalised PDF pattern — for around the price of a regular commercial pattern — including:
            </p>
            <ul className="mt-4 list-disc pl-8 space-y-2 text-lg text-charcoal/85">
              <li>Fabric yardage matched to the Kona Cotton Solids range</li>
              <li>Precise cutting instructions</li>
              <li>Step-by-step piecing instructions</li>
              <li>Full colour diagrams to make construction a breeze</li>
            </ul>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-charcoal">
              What makes Quilt Explorer awesome?
            </h2>
            <figure className="mt-6 flex justify-center">
              <img
                src={story3}
                alt="A Quilt Explorer design"
                className="w-64 h-64 object-contain rounded-2xl shadow-pop bg-white"
              />
            </figure>
            <p className="mt-6 text-lg text-charcoal/85">
              Every block is generated randomly, without a block library — which means every design you create has the potential to be genuinely unique, never seen before.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Because colours are matched to the Kona Cotton Solids range, you always know exactly which fabrics to buy.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              And most importantly: it's fun. Whether you're a beginner or a seasoned quilter, Quilt Explorer is a joy to use.
            </p>

            <div className="mt-10 text-center">
              <a href="https://app.quiltexplorer.com">
                <QEButton size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get started!
                </QEButton>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Page 2 — Who are we? */}
      <section className="bg-section-grey">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-kona-pomegranate text-center">
              Who are we?
            </h1>

            <figure className="mt-10">
              <img
                src={whoBannerTop}
                alt="Quilt Explorer banner"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </figure>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-charcoal">Our vision</h2>
            <p className="mt-4 text-lg text-charcoal/85">
              At Quilt Explorer we combine our understanding of craft, mathematics, and technology to create innovative and original software. We want to help you — the crafter — to do creative and amazing things, and have lots of fun doing it.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-charcoal">Our team</h2>

            <div className="mt-8 space-y-8">
              {[
                {
                  name: "PatchAndi (Andi Herman)",
                  img: whoAndi,
                  bio: "Andi has been quilting since she was taught by her grandmother at the age of eight. She brings the quilting know-how to the Quilt Explorer team. She knows relatively little about developing websites and can often be heard muttering quietly around the house about the importance of a good quarter inch seam.",
                },
                {
                  name: "Dan Prager",
                  img: whoDan,
                  bio: "Dan is smart… smart enough to marry Andi, and to realise that quilt design would be much better with easy-to-use software. Dan devised and programmed the algorithms that make the Quilt Explorer magic happen. He has a background in mathematics, startups, and software development & coaching.",
                },
                {
                  name: "John Barham",
                  img: whoJohn,
                  bio: "John is the descendant of North American quilters. But he never thought that would have any meaning for him professionally. John's main role is to bring the Quilt Explorer software into a user-friendly website so we can all enjoy the magic.",
                },
              ].map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden"
                >
                  <h3 className="px-5 py-3 text-lg font-bold text-charcoal border-b border-border">
                    {m.name}
                  </h3>
                  <div className="p-5 flex flex-col sm:flex-row gap-5">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-40 h-52 object-cover rounded-lg shrink-0 mx-auto sm:mx-0"
                    />
                    <p className="text-lg text-charcoal/85">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <figure className="mt-12">
              <img
                src={whoBannerBottom}
                alt="Quilt Explorer banner"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </figure>
          </article>
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

export default About;
