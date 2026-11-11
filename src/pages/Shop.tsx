import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";
import { shopItems } from "@/data/shop";

const Shop = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Helmet>
      <title>Shop — Quilt Explorer</title>
      <meta
        name="description"
        content="Ready-made quilt patterns designed in Quilt Explorer, some with noted fabric designers. Buy and download the PDF: no design session needed."
      />
    </Helmet>
    <Navbar />
    <section className="bg-section-pink flex-1">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate">Shop</h1>
          <p className="mt-6 text-lg text-charcoal/85">
            Ready-to-sew patterns we've designed in Quilt Explorer, some in collaboration with
            noted fabric designers. Buy one and download the PDF straight away: you don't need to
            design anything yourself.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {shopItems.map((item) => (
            <li key={item.slug}>
              <a
                href={`/shop/${item.slug}`}
                className="group block bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-pop transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-bold text-kona-pomegranate">{item.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-charcoal/70">by {item.designer}</p>
                  <p className="mt-3 text-charcoal/85">{item.summary}</p>
                  <p className="mt-4 font-bold text-charcoal">{item.price} · PDF download</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Shop;
