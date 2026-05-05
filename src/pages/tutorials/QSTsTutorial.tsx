import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/qst-images/";
const SZ = "w-24 h-24 object-contain";


const QSTsTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Quarter-Square Triangles Tutorial — Quilt Explorer</title>
        <meta name="description" content="Step-by-step guide to making Quarter-Square Triangle (QST) units using the 2-at-a-time method, with a cutting chart and examples of different QST styles." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Quarter-Square Triangles (QSTs)
            </h1>

            <p className="mt-8 text-lg text-charcoal/85">
              Let me start by saying that there are <em>MANY</em> different ways to construct QSTs.
              If you have a favourite method that is different to this one, please go ahead and use
              it. This is simply one possible option for sewing QSTs.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What is a QST?
            </h2>

            <div className="mt-6 flex justify-center">
              <img src={`${IMG}image23.png`} alt="A single quarter-square triangle unit" className={SZ} />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              A QST is a sewn unit that consists of 4 right-angle triangles, sewn together with
              their right-angle points meeting at the centre to make a square.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              units used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 flex justify-center">
              <img src={`${IMG}block.png`} alt="A 4x4 arrangement of QST blocks" className="w-64 h-auto object-contain" />
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make QSTs
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              Our preferred method for making QSTs is the <strong>2-at-a-time method</strong>.
            </p>

            <p className="mt-6 text-lg font-semibold text-charcoal underline decoration-charcoal">
              We start by making two Half-Square-Triangles (HSTs).
            </p>

            <p className="mt-4 text-lg text-charcoal/85">
              Cut starting-squares of your chosen fabrics according to the cutting chart in{" "}
              <strong>Appendix A</strong>.
            </p>

            <div className="mt-6 flex items-start gap-6">
              <img src={`${IMG}image18.png`} alt="Fabric square 1" className={SZ} loading="lazy" />
              <img src={`${IMG}image9.png`}  alt="Fabric square 2" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Take a square of each fabric you would like to join together. Draw a diagonal line on
              the back of one of the squares from one corner to the opposite corner.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image12.png`} alt="Square with diagonal line drawn" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then place the 2 squares neatly right-sides together.
            </p>
            <p className="mt-2 text-lg text-charcoal/85">
              Sew two lines, each a ¼ inch from your drawn line.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image20.png`} alt="Squares sewn with two lines" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then cut along your drawn line using a rotary cutter or scissors.
            </p>

            <div className="mt-6">
              <img src={`${IMG}split-hst.png`} alt="Cutting along the drawn line" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              You now have two units that can be ironed open to reveal two unsewn HSTs.
            </p>
            <p className="mt-1 text-base text-charcoal/60 italic">
              Note: "Unsewn" means "not yet sewn into the final quilt top".
            </p>

            <div className="mt-6 flex items-start gap-6">
              <img src={`${IMG}image2.png`} alt="First HST unit" className={`${SZ} rotate-90`} loading="lazy" />
              <img src={`${IMG}image2.png`} alt="Second HST unit" className={`${SZ} rotate-90`} loading="lazy" />
            </div>

            <p className="mt-8 text-lg font-semibold text-charcoal underline decoration-charcoal">
              To turn these two HSTs into QSTs:
            </p>

            <p className="mt-4 text-lg text-charcoal/85">
              Take one of your HSTs and draw a second diagonal line on the back from corner to
              corner, perpendicular to the existing seam line (so if you could see both, the two
              diagonals would form an "X").
            </p>

            <div className="mt-6">
              <img src={`${IMG}image21.png`} alt="HST with second diagonal line drawn" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Place the two pressed units right-sides together, with seams aligned and opposite
              colours touching each other, so that the final QSTs will have the fabric layout you
              want.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image10-t.png`} alt="Two HSTs placed right-sides together" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Sew two lines, each a ¼ inch from this new drawn line, one on each side.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image22.png`} alt="Sewing two lines on the second diagonal" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Cut along the second drawn line with a rotary cutter or scissors.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image15-t.png`} alt="Cutting along the second drawn line" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Open and press the two new units to reveal two unsewn QSTs, each made from four
              right-angle triangles whose right-angle corners meet neatly at the centre.
            </p>

            <div className="mt-6 flex items-start gap-6">
              <img src={`${IMG}image4.png`} alt="First QST unit" className={SZ} loading="lazy" />
              <img src={`${IMG}image4.png`} alt="Second QST unit" className={SZ} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              These QST units will be slightly larger than necessary. Carefully trim each QST to
              your desired size:{" "}
              <em>
                the chosen finished unit size for your design, plus ½ inch for seam allowances.
              </em>{" "}
              As you trim, be sure to keep the diagonal seam lines meeting exactly at the centre
              and running cleanly into each corner of the square. Use the Center Point from the
              cutting chart in <strong>Appendix A</strong> to help place the unit in the correct
              position while trimming.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Other kinds of QSTs
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              The QSTs described above are typical ones where there are two colors sitting opposite
              each other.
            </p>

            <div className="mt-4">
              <img src={`${IMG}image13.png`} alt="Typical 2-color QST" className={SZ} loading="lazy" />
            </div>

            <p className="mt-4 text-lg text-charcoal/85">
              <em>HOWEVER</em>, QSTs can be made in different styles. Here are some examples.
            </p>

            {[
              {
                a: "image6.png", b: "image19.png",
                results: ["image1.png", "image1.png"],
                note: null,
              },
              {
                a: "image6.png", b: "image11.png",
                results: ["image3.png", "image5.png"],
                note: "The above example gives two different mirror-image QSTs. One where the orange is on the left, and one where the pink is on the left. Pay careful attention to your pattern so that you are using the correct unit in the correct position.",
              },
              {
                a: "image6.png", b: "image8.png",
                results: ["image14.png", "image17.png"],
                note: "The above example gives two mirror-image QSTs. Be careful when selecting the correct one for your pattern.",
              },
            ].map((ex, i) => (
              <div key={i} className="mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <img src={`${IMG}${ex.a}`} alt="First HST pair" className={SZ} loading="lazy" />
                  <span className="text-charcoal/70 font-medium">combined with</span>
                  <img src={`${IMG}${ex.b}`} alt="Second HST pair" className={SZ} loading="lazy" />
                  <span className="text-charcoal/70 font-medium">makes</span>
                  {ex.results.map((r, j) => (
                    <img key={j} src={`${IMG}${r}`} alt="Resulting QST" className={SZ} loading="lazy" />
                  ))}
                </div>
                {ex.note && (
                  <p className="mt-2 text-base text-charcoal/60 italic">{ex.note}</p>
                )}
              </div>
            ))}

            <p className="mt-8 text-lg text-charcoal/85">
              Continue to make QSTs until you have completed all required units according to your
              Quilt Explorer pattern.
            </p>
            <p className="mt-2 text-base text-charcoal/60 italic">
              If you have HSTs left over at the end of constructing your blocks (because you only
              needed one of the mirror images), these can be kept for future projects.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Appendix A — Cutting chart
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    {["Starting square", "Center point", "QST size (unsewn)", "Finished (sewn) QST"].map((h) => (
                      <th key={h} className="px-5 py-3 font-bold text-kona-pomegranate text-center border border-pink-300" style={{ backgroundColor: "#f5b682" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['2.5"', '0.5"',  '1.5"',  '1"'   ],
                    ['3"',   '0.75"', '2"',    '1.5"' ],
                    ['3.5"', '1"',    '2.5"',  '2"'   ],
                    ['4"',   '1.25"', '3"',    '2.5"' ],
                    ['4.5"', '1.5"',  '3.5"',  '3"'   ],
                    ['5"',   '1.75"', '4"',    '3.5"' ],
                    ['5.5"', '2"',    '4.5"',  '4"'   ],
                    ['6"',   '2.25"', '5"',    '4.5"' ],
                    ['6.5"', '2.5"',  '5.5"',  '5"'   ],
                    ['7"',   '2.75"', '6"',    '5.5"' ],
                    ['7.5"', '3"',    '6.5"',  '6"'   ],
                    ['8"',   '3.25"', '7"',    '6.5"' ],
                    ['8.5"', '3.5"',  '7.5"',  '7"'   ],
                    ['9"',   '3.75"', '8"',    '7.5"' ],
                    ['9.5"', '4"',    '8.5"',  '8"'   ],
                    ['10"',  '4.25"', '9"',    '8.5"' ],
                    ['10.5"','4.5"',  '9.5"',  '9"'   ],
                    ['11"',  '4.75"', '10"',   '9.5"' ],
                    ['11.5"','5"',    '10.5"', '10"'  ],
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#edc0d1" : "transparent" }}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-5 py-2 text-center text-charcoal/80 border border-pink-300">
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

export default QSTsTutorial;
