import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/dots-images/";

// Widths keep the relative scale the images had in the tutorial PDF (1.4 CSS px per PDF point),
// so dots, ovals and templates stay in proportion to one another.
const Pic = ({ src, width, alt = "" }: { src: string; width: number; alt?: string }) => (
  <img src={`${IMG}${src}`} alt={alt} style={{ width }} className="h-auto max-w-full" loading="lazy" />
);

// The fold sequence is enlarged so the row spans roughly the text column.
const FOLD = 1.3;
const Arrow = () => <Pic src="image18.png" width={39 * FOLD} />;

const MOSAIC = [
  ["image3.png", "image4.png", "image1.png"],
  ["image6.png", "image5.png", "image6.png"],
  ["image1.png", "image4.png", "image3.png"],
];

const DotsOvalsTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Dots and Ovals Tutorial — Quilt Explorer</title>
        <meta name="description" content="How to make the appliqué Dot and Oval units used in Quilt Explorer: making rounded templates, cutting fabric pieces, and sewing the units." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Dots and Ovals
            </h1>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What are dots and ovals in Quilt Explorer?
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <Pic src="image1.png" width={80} alt="A Dot unit: a square with a circle in the centre" />
              <Pic src="image2.png" width={158} alt="An Oval unit: a rectangle with an ellipse in the centre" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              In Quilt Explorer, we use appliqué to create square pieces with a circle in the centre
              (Dots) and rectangle pieces with an ellipse in the centre (Ovals).
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              blocks used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 mx-auto w-fit grid grid-cols-[80px_159px_80px] gap-2 items-center justify-items-center">
              {MOSAIC.flat().map((src, i) => (
                <img key={i} src={`${IMG}${src}`} alt="" className="w-full h-auto" />
              ))}
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make Dots and Ovals
            </h2>

            <h3 className="mt-8 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Make your rounded templates
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Each appliqué unit consists of a rounded (circular or oval) shape and a background
              piece. Each of these is provided with a quarter inch seam allowance, indicated by a
              dotted line.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Pic src="image7.png" width={114} alt="Dot template: square background with a circle, each with a dotted seam allowance line" />
              <Pic src="image8.png" width={217} alt="Oval template: rectangle background with an ellipse, each with a dotted seam allowance line" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Select the correct sized rounded template and print it at <strong>'Actual size'</strong>.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              If your dot or oval fits easily onto a piece of printer paper, you will be provided with
              a complete shape.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Pic src="image9.png" width={118} alt="Complete circle template" />
              <Pic src="image10.png" width={232} alt="Complete oval template" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              If it is too big to fit onto a piece of printer paper, you will receive a quarter-shape.
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-12">
              <Pic src="image11.png" width={59} alt="Quarter-circle template" />
              <Pic src="image12.png" width={117} alt="Quarter-oval template" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              In the case of a quarter-shape, there is one additional step:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-lg text-charcoal/85">
              <li>Cut out your printed quarter-shape.</li>
              <li>
                Take a piece of paper at least four times as big as the printed quarter-shape. If
                needed, you can stick multiple pages together.
              </li>
              <li>
                Fold your big paper piece into quarters and place your quarter-shape into the corner
                with all the folds. <em>See below.</em>
              </li>
              <li>Trace around your quarter shape and cut out.</li>
              <li>Open out your cut shape to reveal a full dot or oval.</li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pic src="image13.png" width={123 * FOLD} alt="Large sheet of paper marked into quarters" />
              <Arrow />
              <Pic src="image14.png" width={62 * FOLD} alt="Paper folded in half" />
              <Arrow />
              <Pic src="image17.png" width={70 * FOLD} alt="Paper folded into quarters" />
              <Arrow />
              <Pic src="image16.png" width={70 * FOLD} alt="Quarter-oval traced into the folded corner" />
              <Pic src="image15.png" width={70 * FOLD} alt="Quarter-circle traced into the folded corner" />
            </div>

            <p className="mt-8 text-lg text-charcoal/85">At this stage, you have a choice:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-lg text-charcoal/85">
              <li>
                If you would like to attach the shape with a raw edge, cut out your shape{" "}
                <strong><em>without</em></strong> the seam allowance (ie cut on the solid line).
              </li>
              <li>
                If you would like to attach the shape with a tucked under seam allowance, cut out your
                shape <strong><em>with</em></strong> the seam allowance (ie cut on the dotted line).
              </li>
            </ul>
            <p className="mt-4 text-lg text-charcoal/85">
              Glue your cut out shape onto some cardboard, stiff enough to be used as a template. Cut
              out your cardboard piece. This is your new template for this Quilt Explorer project.
            </p>

            <h3 className="mt-12 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Cut your fabric pieces
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Cut your square and/or rectangular background pieces according to the requirements in
              your Quilt Explorer pattern.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              To cut your round and/or oval pieces, use the cardboard template you have just made to
              draw the shapes onto the back of your chosen fabrics. Draw them as closely together as
              possible to minimise fabric wastage. Cut them out with scissors.
            </p>

            <h3 className="mt-12 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Assemble and sew your units
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Take a curved shape and centre it onto the relevant background shape. You can either
              fold the fabric pieces into quarters to find and align the centres, or you can simply
              place the pieces by eye.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Fix the curved shape in place on the background piece using pins or fabric glue.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              <strong>If you have chosen raw edge appliqué</strong>, carefully sew around the edge of
              your rounded shape to fix it directly to the background shape. You can choose to:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-lg text-charcoal/85">
              <li>Use a straight stitch and sew around the shape 3-4 times to catch any stray threads</li>
              <li>Use a zig zag or blanket stitch to sew around the edge of the curved piece</li>
              <li>Use another method of your choosing</li>
            </ul>
            <p className="mt-4 text-lg text-charcoal/85">
              <strong>If you have chosen to turn under your seam allowance</strong>, you can choose to:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-lg text-charcoal/85">
              <li>
                Follow{" "}
                <a href="https://www.youtube.com/watch?v=2INxkVfGyqE" target="_blank" rel="noopener noreferrer" className="text-kona-pomegranate underline">
                  this tutorial by Sarah Fielke
                </a>
              </li>
              <li>
                Follow{" "}
                <a href="https://www.youtube.com/watch?v=jqlS-D0DIhg&t=63s" target="_blank" rel="noopener noreferrer" className="text-kona-pomegranate underline">
                  this tutorial by Thimbles and Needles
                </a>
              </li>
              <li>Use another method of your choosing</li>
            </ul>
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

export default DotsOvalsTutorial;
