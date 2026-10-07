import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/hrt-images/";
const WIDE = "w-40 h-20 object-contain";
const TALL = "h-28 w-14 object-contain";
const ARROW = "w-8 h-auto object-contain";
const STEP = "w-44 h-auto object-contain shrink-0";

const SlopeSequence = ({ marked, placed, result, slope }: { marked: string; placed: string; result: string; slope: string }) => (
  <div className="mt-6 flex flex-wrap items-center gap-3">
    <img src={`${IMG}${marked}`} alt={`Rectangle marked with a diagonal for ${slope} sloping HRTs`} className={TALL} loading="lazy" />
    <img src={`${IMG}image21.png`} alt="" className={ARROW} loading="lazy" />
    <img src={`${IMG}${placed}`} alt={`Rectangles placed for ${slope} sloping HRTs`} className="h-32 w-auto object-contain" loading="lazy" />
    <img src={`${IMG}image21.png`} alt="" className={ARROW} loading="lazy" />
    <div className="flex gap-2">
      <img src={`${IMG}${result}`} alt={`First ${slope} sloping HRT`} className={TALL} loading="lazy" />
      <img src={`${IMG}${result}`} alt={`Second ${slope} sloping HRT`} className={TALL} loading="lazy" />
    </div>
  </div>
);

const TrimStep = ({ img, alt, children }: { img: string; alt: string; children: React.ReactNode }) => (
  <div className="mt-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
    <div className="space-y-4 text-lg text-charcoal/85">{children}</div>
    <img src={`${IMG}${img}`} alt={alt} className={STEP} loading="lazy" />
  </div>
);

const HRTsTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Half-Rectangle Triangles Tutorial — Quilt Explorer</title>
        <meta name="description" content="Step-by-step guide to making and trimming Half-Rectangle Triangle (HRT) units using the 2-at-a-time method, with a cutting chart for common sizes." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Half-Rectangle Triangles (HRTs)
            </h1>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What is an HRT?
            </h2>

            <div className="mt-6 flex justify-center">
              <img src={`${IMG}image1.png`} alt="A single half-rectangle triangle unit" className={WIDE} />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              An HRT is a sewn unit that consists of 2 right-angle triangles, sewn together along
              their hypotenuse (longest side) to make a rectangle. In Quilt Explorer, HRTs are
              constructed at a ratio of 1:2, so the long side of the unit is exactly twice the length
              of the short side.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              blocks used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 mx-auto w-64 grid grid-cols-4 gap-1">
              {["image2.png", "image3.png", "image4.png", "image5.png"].map((src) => (
                <img key={src} src={`${IMG}${src}`} alt="" className="col-span-2 w-full h-auto" />
              ))}
              {["image6.png", "image7.png", "image8.png", "image9.png"].map((src) => (
                <img key={src} src={`${IMG}${src}`} alt="" className="w-full h-auto" />
              ))}
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make HRTs
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              Our preferred method for making HRTs is the <strong>2-at-a-time method</strong>.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Cut starting-rectangles of your chosen fabrics according to the cutting chart in{" "}
              <strong>Appendix A</strong>.
            </p>

            <div className="mt-6 flex flex-wrap items-start gap-6">
              <img src={`${IMG}image10.png`} alt="Fabric rectangle 1" className={WIDE} loading="lazy" />
              <img src={`${IMG}image11.png`} alt="Fabric rectangle 2" className={WIDE} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Take a rectangle of each fabric you would like to join together. Draw a diagonal line
              on the back of one of the rectangles from one corner to the opposite corner.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image12.png`} alt="Rectangle with diagonal line drawn" className={WIDE} loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then place the 2 rectangles right-sides together. Instead of lining up all four edges
              neatly, twist the top rectangle so that the opposite corners connect with your diagonal
              marking.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image13.png`} alt="Top rectangle twisted so its corners meet the drawn diagonal" className="w-40 h-auto object-contain" loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Sew two lines, each a ¼ inch from your drawn line.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image14.png`} alt="Rectangles sewn with two lines either side of diagonal" className="w-40 h-auto object-contain" loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then cut along your drawn line using a rotary cutter or scissors.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image15.png`} alt="Unit being cut along the drawn line" className="w-40 h-auto object-contain" loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              You now have two units that can be ironed open to reveal two unsewn HRTs.
            </p>
            <p className="mt-2 text-base text-charcoal/60 italic">
              Note: "Unsewn" means "not yet sewn into the final quilt top".
            </p>

            <div className="mt-6 flex items-start gap-4">
              <img src={`${IMG}image16.png`} alt="First HRT unit" className={TALL} loading="lazy" />
              <img src={`${IMG}image16.png`} alt="Second HRT unit" className={TALL} loading="lazy" />
            </div>

            <h3 className="mt-12 text-xl md:text-2xl font-extrabold italic text-charcoal">
              IMPORTANT NOTE
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              HRTs will either slope to the left (as in the example above) or to the right.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              To make a pair of <strong>LEFT</strong> sloping HRTs (as above), draw your line and
              place rectangles like this:
            </p>

            <SlopeSequence marked="image17.png" placed="image13.png" result="image16.png" slope="left" />

            <p className="mt-6 text-lg text-charcoal/85">
              To make a pair of <strong>RIGHT</strong> sloping HRTs, draw your line and place
              rectangles like this:
            </p>

            <SlopeSequence marked="image18.png" placed="image19.png" result="image20.png" slope="right" />

            <p className="mt-6 text-lg text-charcoal/85">
              Carefully check your Quilt Explorer pattern to see which direction your HRTs should
              slope and make accordingly.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to trim HRTs
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              Trimming HRTs can be tricky. But this stage is the make or break when it comes to
              having lovely points that meet nicely in your quilt.
            </p>

            <TrimStep img="image24.png" alt="A rectangular quilting ruler">
              <p className="font-semibold text-charcoal underline decoration-charcoal">
                For the sake of this tutorial, assume a finished and sewn HRT of 3 x 6 inches.
              </p>
              <p>A helpful trick at this point is to mark up your quilting ruler.</p>
            </TrimStep>

            <p className="mt-6 text-lg text-charcoal/85">
              If you want to trim your units to 3½ x 6½ inches (giving you ¼ inch seam allowance
              all around), place some tape over your ruler to create a perfect rectangular window of
              the size you want to cut.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image22.png`} alt="Ruler with tape marking a 3½ x 6½ inch window" className="w-full max-w-xl h-auto" loading="lazy" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then, place a dot at exactly ¼ inch inside each corner.{" "}
              <em>
                (If you don't wish to permanently mark your ruler, place a piece of clear tape on the
                ruler before marking your dots.)
              </em>
            </p>

            <div className="mt-6">
              <img src={`${IMG}image23.png`} alt="Taped ruler with a dot ¼ inch inside each corner" className="w-full max-w-xl h-auto" loading="lazy" />
            </div>

            <TrimStep img="image25.png" alt="Marked ruler window">
              <p>
                Take your marked up ruler and place your untrimmed HRT unit underneath so that the
                diagonal line you have sewn falls through two of the dots you have drawn on your
                ruler.
              </p>
            </TrimStep>

            <TrimStep img="image26.png" alt="Untrimmed HRT positioned under the ruler window">
              <p>
                You may have to jiggle the placement a bit so that there are no gaps in your window
                without fabric underneath.
              </p>
              <p>This may look a little wonky but don't worry, this is expected at this stage.</p>
            </TrimStep>

            <TrimStep img="image27.png" alt="HRT with two exposed sides trimmed">
              <p>Trim off the two exposed sides of your block.</p>
            </TrimStep>

            <TrimStep img="image28.png" alt="HRT flipped 180° with cut edges inside the tape markings">
              <p>
                Now flip your block 180° nesting the newly cut edges carefully inside your tape
                markings. Make sure your dots still fall across your diagonal line.
              </p>
            </TrimStep>

            <TrimStep img="image29.png" alt="Fully trimmed HRT">
              <p>Now trim the other two sides.</p>
            </TrimStep>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <p className="text-lg text-charcoal/85">
                You will be left with a unit where the diagonal line does <strong>NOT</strong> go
                exactly from corner to corner. Instead, there will be small ⅛ inch gaps at either
                end.
              </p>
              <img src={`${IMG}image30.png`} alt="Trimmed HRT with a close-up of the ⅛ inch gap at the corner" className="w-72 h-auto object-contain shrink-0" loading="lazy" />
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center gap-6">
              <img src={`${IMG}image31.png`} alt="HRT with seam allowance outlined, diagonal meeting the corners" className="w-56 h-auto object-contain shrink-0" loading="lazy" />
              <p className="text-lg text-charcoal/85">
                Once sewn with a ¼ inch seam allowance, your diagonal will once again meet nicely at
                the corners.
              </p>
            </div>

            <p className="mt-8 text-lg text-charcoal/85">
              Continue to make HRTs until you have completed all required units according to your
              Quilt Explorer pattern.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Appendix A — Cutting chart
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    {["Starting rectangle", "HRT size (unsewn)", "Finished (sewn) HRT"].map((h) => (
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
                  {[
                    ['2 x 4"', '1.5 x 2.5"', '1 x 2"'],
                    ['2.5 x 5"', '2 x 3.5"', '1.5 x 3"'],
                    ['3 x 6"', '2.5 x 4.5"', '2 x 4"'],
                    ['3.5 x 7"', '3 x 5.5"', '2.5 x 5"'],
                    ['4 x 8"', '3.5 x 6.5"', '3 x 6"'],
                    ['4.5 x 9"', '4 x 7.5"', '3.5 x 7"'],
                    ['5 x 10"', '4.5 x 8.5"', '4 x 8"'],
                    ['5.5 x 11"', '5 x 9.5"', '4.5 x 9"'],
                    ['6 x 12"', '5.5 x 10.5"', '5 x 10"'],
                    ['6.5 x 13"', '6 x 11.5"', '5.5 x 11"'],
                    ['7 x 14"', '6.5 x 12.5"', '6 x 12"'],
                    ['7.5 x 15"', '7 x 13.5"', '6.5 x 13"'],
                    ['8 x 16"', '7.5 x 14.5"', '7 x 14"'],
                    ['8.5 x 17"', '8 x 15.5"', '7.5 x 15"'],
                    ['9 x 18"', '8.5 x 16.5"', '8 x 16"'],
                    ['9.5 x 19"', '9 x 17.5"', '8.5 x 17"'],
                    ['10 x 20"', '9.5 x 18.5"', '9 x 18"'],
                    ['10.5 x 21"', '10 x 19.5"', '9.5 x 19"'],
                    ['11 x 22"', '10.5 x 20.5"', '10 x 20"'],
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#edc0d1" : "transparent" }}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="px-6 py-2 text-center text-charcoal/80 border border-pink-300"
                        >
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

export default HRTsTutorial;
