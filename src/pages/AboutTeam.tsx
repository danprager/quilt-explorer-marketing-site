import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";
import whoBannerTop from "@/assets/about-who-banner-top.webp";
import whoAndi from "@/assets/about-who-andi.webp";
import whoDan from "@/assets/about-who-dan.webp";
import whoJohn from "@/assets/about-who-john.webp";
import whoBannerBottom from "@/assets/about-who-banner-bottom.webp";

const AboutTeam = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Who Are We? — Quilt Explorer</title>
        <meta name="description" content="Quilt Explorer is built by Andi Herman (PatchAndi), Dan Prager, and John Barham — combining quilting expertise, mathematics, and software development." />
      </Helmet>
      <Navbar />
      <section className="bg-section-grey flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-kona-pomegranate text-center">
              Who are we?
            </h1>

            <figure className="mt-10">
              <img src={whoBannerTop} alt="Quilt Explorer banner" className="w-full h-auto rounded-2xl shadow-soft" width="1200" height="250" />
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
                  img: whoAndi, w: 200, h: 250,
                  bio: "Andi has been quilting since she was taught by her grandmother at the age of eight. She brings the quilting know-how to the Quilt Explorer team. She knows relatively little about developing websites and can often be heard muttering quietly around the house about the importance of a good quarter inch seam.",
                },
                {
                  name: "Dan Prager",
                  img: whoDan, w: 203, h: 250,
                  bio: "Dan is smart… smart enough to marry Andi, and to realise that quilt design would be much better with easy-to-use software. Dan devised and programmed the algorithms that make the Quilt Explorer magic happen. He has a background in mathematics, startups software & product development, and coaching.",
                },
                {
                  name: "John Barham",
                  img: whoJohn, w: 196, h: 250,
                  bio: "John is the descendant of North American quilters. But he never thought that would have any meaning for him professionally. John's main role is to bring the Quilt Explorer software into a user-friendly website so we can all enjoy the magic.",
                },
              ].map((m) => (
                <div key={m.name} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                  <h3 className="px-5 py-3 text-lg font-bold text-charcoal border-b border-border">{m.name}</h3>
                  <div className="p-5 flex flex-col sm:flex-row gap-5">
                    <img src={m.img} alt={m.name} className="w-40 h-52 object-cover rounded-lg shrink-0 mx-auto sm:mx-0" width={m.w} height={m.h} />
                    <p className="text-lg text-charcoal/85">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <figure className="mt-12">
              <img src={whoBannerBottom} alt="Quilt Explorer banner" className="w-full h-auto rounded-2xl shadow-soft" width="1200" height="252" />
            </figure>
          </article>
        </div>
      </section>

      <footer className="bg-charcoal text-kona-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Quilt Explorer. Your magic kaleidoscope for quilt design.
          </div>
          <a href="/terms" className="hover:underline">Terms and conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutTeam;
