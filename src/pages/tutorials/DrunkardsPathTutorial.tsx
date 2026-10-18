import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/dp-images/";

// The how-to images share one piece scale: the outside piece and the finished unit are 175px wide
// and the inside piece 133px. In the pinning steps each image is sized by its inside piece, which
// lies flat and never changes shape.
const OUTSIDE = 175;

const Pic = ({ src, width, alt = "" }: { src: string; width: number; alt?: string }) => (
  <img src={`${IMG}${src}`} alt={alt} style={{ width }} className="h-auto max-w-full" loading="lazy" />
);

// Page 1 mosaic, row by row, as laid out in the tutorial PDF.
const MOSAIC = [
  "image2.png", "image3.png", "image4.png", "image5.png",
  "image6.png", "image7.png", "image8.png", "image9.png",
  "image2.png", "image10.png", "image11.png", "image12.png",
  "image13.png", "image14.png", "image15.png", "image7.png",
];

const DrunkardsPathTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Drunkard's Path Tutorial — Quilt Explorer</title>
        <meta name="description" content="How to make Drunkard's Path units: making templates, cutting the curved pieces, and pinning and sewing the curve, with a cutting chart for common sizes." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Drunkard's Path
            </h1>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What is a Drunkard's Path unit?
            </h2>

            <div className="mt-6">
              <Pic src="image1.png" width={81} alt="A single Drunkard's Path unit" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              A Drunkard's Path unit is a sewn unit that consists of an inner quarter circle, or
              'inside piece', and an outer arc, or 'outside piece' that come together to form a square
              shape.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              blocks used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 mx-auto w-fit grid grid-cols-[repeat(4,80px)] gap-2">
              {MOSAIC.map((src, i) => (
                <img key={i} src={`${IMG}${src}`} alt="" className="w-full h-auto" />
              ))}
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make Drunkard's Path units
            </h2>

            <h3 className="mt-8 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Make your templates
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Each Drunkard's Path unit consists of a quarter-circle 'inside' piece and an arced
              'outside' piece.
            </p>

            <div className="mt-6">
              <Pic src="image16.png" width={194} alt="Inside and outside piece templates, each with a dotted seam allowance line" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Select the correct sized template from the Drunkard's Path template page and print it
              at <strong>'Actual size'</strong>.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Cut out your two paper pieces, including the seam allowances, indicated by the dotted
              lines.
            </p>

            <div className="mt-6">
              <Pic src="image17.png" width={194} alt="The two paper template pieces cut out along the dotted lines" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Glue these two paper pieces onto some cardboard, stiff enough to be used as a template.
              Cut out your two cardboard pieces. These are your new templates for this Quilt Explorer
              project.
            </p>
            <p className="mt-4 text-base text-charcoal/60 italic">
              Note: If you already have Drunkard's Path templates at the required size, go ahead and
              use these instead of making your own cardboard ones.
            </p>

            <h3 className="mt-12 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Cut your fabric pieces
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Each square of fabric will yield one inside piece and one outside piece, with a small
              amount of fabric wastage.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              In Quilt Explorer, we suggest a cut square size of 'finished/sewn unit size' + 2 inches.
              For example, if your Drunkard's Path units will finish at 6 inches sewn, your cut
              squares of fabric will be 8 inches. We feel confident that the suggested size will
              easily fit both of your templates. However, you might like to experiment with smaller
              squares to reduce wastage.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Place your templates in opposite corners of your cut square and cut out each of your
              pieces. You can either do this with a small (to make the tighter curves easier) rotary
              cutter, or you can trace around the templates and cut out with scissors.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              By placing them into the corners, the straight outer sides of your pieces have already
              been cut.
            </p>

            <div className="mt-6">
              <Pic src="image18.png" width={256} alt="Both templates placed in opposite corners of a cut square" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Cut all the inside and outside fabric pieces required for your Quilt Explorer pattern in
              the indicated colors.
            </p>

            <h3 className="mt-12 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Sew your units
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Sewing curves can be trickier than sewing straight lines, but with a little practice and
              knowhow, you'll be managing them with ease.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              To sew a Drunkard's Path unit, take an inside piece and an outside piece in the colors
              indicated in your Quilt Explorer pattern.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-3xl font-bold text-charcoal/70">
              <Pic src="image21.png" width={136} alt="An inside piece" />
              <span aria-hidden="true">+</span>
              <Pic src="image19.png" width={176} alt="An outside piece" />
              <span aria-hidden="true">=</span>
              <Pic src="image20.png" width={OUTSIDE} alt="A sewn Drunkard's Path unit" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Fold both pieces in half as shown below, and finger press, or mark, the centre points
              along the curves.
            </p>

            <div className="mt-6 flex flex-wrap items-start gap-6">
              <Pic src="image22.png" width={159} alt="Inside piece folded in half to mark the centre point of the curve" />
              <Pic src="image23.png" width={176} alt="Outside piece folded in half to mark the centre point of the curve" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">Lay out the pieces as shown below.</p>
            <p className="mt-4 text-lg text-charcoal/85">
              Lay your inside quarter-circle piece face up. Place the arced outside piece face down,
              so they are right-sides-facing.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Match up your centre points and place a pin through both pieces of fabric.
            </p>

            <div className="mt-6">
              <Pic src="image24.png" width={176} alt="Outside piece laid face down on the inside piece, pinned at the centre points" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Now pull one of the sides of the outer piece so it is in line with the corner of the
              inner piece. Pin in place at the corner.
            </p>

            <div className="mt-6">
              <Pic src="image25.png" width={152} alt="One side of the outer piece pulled into line and pinned at the corner" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">Now do the same for the other side.</p>

            <div className="mt-6">
              <Pic src="image26.png" width={140} alt="Both sides pinned at the corners" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Now you need to gently ease the rest of the curve of the outer piece so that it neatly
              aligns with the curve of the inner piece. Use as many or as few pins as you need to
              secure in place.
            </p>

            <div className="mt-6">
              <Pic src="image27.png" width={143} alt="The curve eased into place and pinned along its length" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Carefully sew a line a quarter inch from the edge of the curve, removing pins as you go.
            </p>

            <div className="mt-6">
              <Pic src="image28.png" width={135} alt="A seam sewn a quarter inch from the edge of the curve" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Now iron the block open to reveal the completed unit.
            </p>

            <div className="mt-6">
              <Pic src="image20.png" width={OUTSIDE} alt="The completed Drunkard's Path unit" />
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Appendix A — Cutting chart
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    {["Starting squares", "DP size (unsewn)", "Finished (sewn) DP"].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-3 font-bold text-kona-pomegranate text-center border border-pink-300"
                        style={{ backgroundColor: "#f5b682" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 19 }, (_, i) => {
                    const finished = 1 + i * 0.5;
                    return [finished + 2, finished + 0.5, finished].map((v) => `${v}"`);
                  }).map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#edc0d1" : "transparent" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-2 text-center text-charcoal/80 border border-pink-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

export default DrunkardsPathTutorial;
