// Curated patterns sold as ready-made PDFs: no Quilt Explorer account or design session needed.
// Each item is a designer edition built in the quilt-explorer repo (typst/editions/<slug>/).
// Images live in public/shop/<slug>/.

export type ShopItem = {
  slug: string;
  title: string;
  designer: string;
  collection: string; // fabric line credit, shown under the title
  price: string; // display only: Stripe holds the real price
  summary: string; // one line for the Shop card
  blurb: string[]; // the designer's words, from the pattern's intro page
  details: { label: string; value: string }[];
  includes: string[];
  images: { src: string; alt: string }[]; // first is the hero
  otherDesigns?: { src: string; alt: string }[];
};

const img = (slug: string, file: string) => `/shop/${slug}/${file}`;

export const shopItems: ShopItem[] = [
  {
    slug: "spottiest-day-ever",
    title: "Spottiest Day Ever",
    designer: "Andi Herman",
    collection: "Best Day Ever by Jennifer Paganelli for Windham Fabrics",
    price: "US$14.50", // every Shop pattern; Stripe's STRIPE_SHOP_PRICE_ID is the real price
    summary: "A scrappy throw of half-rectangle triangles, appliqué dots and ovals, made for one fat quarter bundle.",
    blurb: [
      "I've been a massive fan of Jennifer Paganelli's designs for years, so I was absolutely thrilled to get a sneak preview of her gorgeous 'Best Day Ever' collection for this project. The crisp half-rectangle triangles combined with the playful appliqué dots and ovals are perfect for showing off these vibrant prints.",
      "The 'Scrappy' function in Quilt Explorer is the perfect way to showcase a fat quarter bundle of your favorite fabric line. The final page of the pattern has four more sensational scrappy designs using these fabulous fabrics.",
    ],
    details: [
      { label: "Finished size", value: "72″ × 72″" },
      { label: "Blocks", value: "16 blocks, 18″ square (4 × 4)" },
      { label: "Units", value: "Half-rectangle triangles, dots and ovals" },
      { label: "Fabric", value: "Best Day Ever fat quarter bundle (27 FQs + 1 yd Elizabeth Whole Cloth) and 4–4¼ yd Kona Eggplant" },
      { label: "Pages", value: "14" },
    ],
    includes: [
      "Two PDFs in one download: US Letter and A4",
      "Fabric requirements and cutting charts",
      "Unit construction, block and quilt assembly diagrams",
      "Full-size appliqué templates (print at 100%)",
      "Finishing guide for an improvised pieced backing and striped binding",
      "A page of four more scrappy design ideas for the same bundle",
    ],
    images: [
      { src: img("spottiest-day-ever", "cover.webp"), alt: "The finished Spottiest Day Ever quilt hanging outdoors" },
      { src: img("spottiest-day-ever", "bundle.webp"), alt: "The Best Day Ever fat quarter bundle" },
      { src: img("spottiest-day-ever", "back-of-quilt.webp"), alt: "The improvised pieced backing" },
      { src: img("spottiest-day-ever", "binding.webp"), alt: "Close-up of the striped binding" },
    ],
    otherDesigns: [1, 2, 3, 4].map((i) => ({
      src: img("spottiest-day-ever", `design-${i}.webp`),
      alt: `Alternative scrappy design ${i} using the Best Day Ever bundle`,
    })),
  },
];

export const findShopItem = (slug: string | undefined) => shopItems.find((i) => i.slug === slug);
