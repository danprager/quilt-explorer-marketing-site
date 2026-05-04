import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/images/";

const HSTsTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Half-Square Triangles (HSTs)
            </h1>

            <p className="mt-8 text-lg text-charcoal/85">
              Let me start by saying that there are <em>MANY</em> different ways to construct HSTs. If
              you have a favourite method that is different to this one, please go ahead and use it.
              This is simply one possible option for sewing HSTs.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What is an HST?
            </h2>

            <div className="mt-6 flex justify-center">
              <img
                src={`${IMG}image10.png`}
                alt="A single half-square triangle unit"
                className="w-24 h-24 object-contain"
              />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              An HST is a sewn unit that consists of 2 right-angle triangles, sewn together along
              their hypotenuse (longest side) to make a square.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              blocks used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 flex justify-center">
              <img
                src={`${IMG}hst-design.png`}
                alt="A 4x4 arrangement of HST blocks showing various design possibilities"
                className="w-64 h-64 object-contain"
              />
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make HSTs
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              Our preferred method for making HSTs is the <strong>2-at-a-time method</strong>.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Cut starting-squares of your chosen fabrics according to the cutting chart in{" "}
              <strong>Appendix A</strong>.
            </p>

            <div className="mt-6 flex items-start gap-6">
              <img src={`${IMG}image7.png`} alt="Fabric square 1" className="w-24 h-24 object-contain" />
              <img src={`${IMG}image8.png`} alt="Fabric square 2" className="w-24 h-24 object-contain" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Take a square of each fabric you would like to join together. Draw a diagonal line on
              the back of one of the squares from one corner to the opposite corner.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image6.png`} alt="Square with diagonal line drawn" className="w-24 h-24 object-contain" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then place the 2 squares neatly right-sides together.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Sew two lines, each a ¼ inch from your drawn line.
            </p>

            <div className="mt-6">
              <img src={`${IMG}split-hst.png`} alt="Squares sewn with two lines either side of diagonal" className="w-24 h-24 object-contain" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Then cut along your drawn line using a rotary cutter or scissors.
            </p>

            <div className="mt-6">
              <img src={`${IMG}image11.png`} alt="Unit being cut along the drawn line" className="w-24 h-24 object-contain" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              You now have two units that can be ironed open to reveal two unsewn HSTs.
            </p>
            <p className="mt-2 text-base text-charcoal/60 italic">
              Note: "Unsewn" means "not yet sewn into the final quilt top".
            </p>

            <div className="mt-6 flex items-start gap-6">
              <img src={`${IMG}image2.png`} alt="First HST unit" className="w-24 h-24 object-contain rotate-90" />
              <img src={`${IMG}image2.png`} alt="Second HST unit" className="w-24 h-24 object-contain rotate-90" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              These units will be slightly larger than necessary. Carefully trim each HST unit to
              your desired size, which is the chosen finished unit size for your design, plus ½ inch
              (for seam allowances).{" "}
              <em>
                Be sure to keep your diagonal sewn lines connecting with the corner points of the
                unit.
              </em>
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              Continue to make HSTs until you have completed all required units according to your
              Quilt Explorer pattern.
            </p>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Appendix A — Cutting chart
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    {["Starting square", "HST size (unsewn)", "Finished (sewn) HST"].map((h) => (
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
                    ['2"', '1.5"', '1"'],
                    ['2.5"', '2"', '1.5"'],
                    ['3"', '2.5"', '2"'],
                    ['3.5"', '3"', '2.5"'],
                    ['4"', '3.5"', '3"'],
                    ['4.5"', '4"', '3.5"'],
                    ['5"', '4.5"', '4"'],
                    ['5.5"', '5"', '4.5"'],
                    ['6"', '5.5"', '5"'],
                    ['6.5"', '6"', '5.5"'],
                    ['7"', '6.5"', '6"'],
                    ['7.5"', '7"', '6.5"'],
                    ['8"', '7.5"', '7"'],
                    ['8.5"', '8"', '7.5"'],
                    ['9"', '8.5"', '8"'],
                    ['9.5"', '9"', '8.5"'],
                    ['10"', '9.5"', '9"'],
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

export default HSTsTutorial;
