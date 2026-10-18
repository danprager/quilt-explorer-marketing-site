import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const IMG = "/tutorials/fg-images/";

// The how-to images share one piece scale: the large "geese" square is 218px wide throughout,
// so each step shows the pieces at the same size as the step before.
const LARGE = 218;
const SMALL = 118;
const OPENED = 309; // half-square-triangle pieces: the diagonal of the large square
const GOOSE = 196; // an unsewn goose is about 0.9 x the large square's side (see the cutting chart)

const Pic = ({ src, width, alt = "" }: { src: string; width: number; alt?: string }) => (
  <img src={`${IMG}${src}`} alt={alt} style={{ width }} className="h-auto max-w-full" loading="lazy" />
);

const FlyingGeeseTutorial = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Flying Geese Tutorial — Quilt Explorer</title>
        <meta name="description" content="Step-by-step guide to making Flying Geese units with the four-at-a-time method, with a cutting chart for common sizes." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Tutorial — Flying Geese
            </h1>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              What is a Flying Geese unit?
            </h2>

            <div className="mt-6">
              <Pic src="image1.png" width={159} alt="A single Flying Geese unit" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              A Flying Geese unit is a rectangular patchwork unit made of one large center triangle
              (the "goose") with two smaller corner triangles (the "sky") on either side.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              They are used in many different ways in patchwork quilting and are a very useful unit
              for creating a variety of patchwork designs. That's why they are one of the basic
              blocks used within Quilt Explorer to generate wonderful, unique block designs.
            </p>

            <div className="mt-8 flex justify-center">
              <Pic src="image2.png" width={480} alt="Three blocks made from Flying Geese units" />
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              How to make Flying Geese units
            </h2>

            <p className="mt-4 text-lg text-charcoal/85">
              We prefer the <strong>four-at-a-time</strong> Flying Geese method as it minimises fabric
              wastage, and gives you finished units with edges on the straight grain (rather than on
              the bias which would cause the units to have excessive stretch).
            </p>

            <h3 className="mt-8 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Cut and prepare your fabric pieces
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              For each lot of 4 Flying Geese units, you will need to cut 1 large square (for the
              "geese") and 4 small squares (for the "sky"). See <strong>Appendix A</strong> for
              cutting sizes.
            </p>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <Pic src="image3.png" width={LARGE} alt="One large square for the geese" />
              {[1, 2, 3, 4].map((i) => (
                <Pic key={i} src="image4.png" width={SMALL} alt={i === 1 ? "Four small squares for the sky" : ""} />
              ))}
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Cut enough pieces to create all the Flying Geese units for your Quilt Explorer pattern.
            </p>
            <p className="mt-4 text-lg text-charcoal/85">
              On the back of the smaller "sky" squares, draw a diagonal line from corner to corner.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Pic key={i} src="image5.png" width={SMALL} alt={i === 1 ? "Small squares with a diagonal line drawn" : ""} />
              ))}
            </div>

            <h3 className="mt-12 text-xl md:text-2xl font-bold text-kona-pomegranate">
              Sew your units
            </h3>

            <p className="mt-4 text-lg text-charcoal/85">
              Place your large square face up. Place 2 of the smaller squares face down on opposite
              corners as shown below. Pin in place. The corners will overlap a little. Don't worry.
              This is supposed to happen.
            </p>

            <div className="mt-6">
              <Pic src="placed.png" width={LARGE} alt="Two small squares placed face down on opposite corners of the large square" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Now sew a quarter inch along each side of your drawn lines.
            </p>

            <div className="mt-6">
              <Pic src="image7.png" width={LARGE} alt="Two lines sewn either side of the drawn diagonal" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">Then cut along your drawn line.</p>

            <div className="mt-6">
              <Pic src="image8.png" width={LARGE} alt="Unit cut in two along the drawn line" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">Iron your smaller triangles open.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pic src="image9.png" width={OPENED} alt="First half with its small triangles ironed open" />
              <Pic src="image9.png" width={OPENED} alt="Second half with its small triangles ironed open" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Now place your remaining small squares, face down, on your pieces as below. Sew a
              quarter inch along each side of your drawn lines.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pic src="image10.png" width={OPENED} alt="Small square placed on the first piece and sewn" />
              <Pic src="image10.png" width={OPENED} alt="Small square placed on the second piece and sewn" />
            </div>

            <p className="mt-6 text-lg text-charcoal/85">
              Cut along your drawn lines and iron open your smaller triangles to reveal 4 Flying Geese
              units.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Pic src="image11.png" width={OPENED} alt="First piece cut along the drawn line" />
              <Pic src="image11.png" width={OPENED} alt="Second piece cut along the drawn line" />
            </div>

            {/* Each column sits centred under one of the pairs above. */}
            <div className="mt-6 w-fit grid grid-cols-2 gap-3 sm:gap-x-[125px] sm:pl-14">
              {[1, 2, 3, 4].map((i) => (
                <Pic key={i} src="image12.png" width={GOOSE} alt={`Finished Flying Geese unit ${i}`} />
              ))}
            </div>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold text-kona-pomegranate">
              Appendix A — Cutting chart
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="border-collapse text-sm md:text-base">
                <thead>
                  <tr>
                    {["Finished (sewn) FG", "4 small squares", "1 large square"].map((h) => (
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
                    ['1 x 2"', '1 ⅞"', '3 ¼"'],
                    ['1.5 x 3"', '2 ⅜"', '4 ¼"'],
                    ['2 x 4"', '2 ⅞"', '5 ¼"'],
                    ['2.5 x 5"', '3 ⅜"', '6 ¼"'],
                    ['3 x 6"', '3 ⅞"', '7 ¼"'],
                    ['3.5 x 7"', '4 ⅜"', '8 ¼"'],
                    ['4 x 8"', '4 ⅞"', '9 ¼"'],
                    ['4.5 x 9"', '5 ⅜"', '10 ¼"'],
                    ['5 x 10"', '5 ⅞"', '11 ¼"'],
                    ['5.5 x 11"', '6 ⅜"', '12 ¼"'],
                    ['6 x 12"', '6 ⅞"', '13 ¼"'],
                    ['6.5 x 13"', '7 ⅜"', '14 ¼"'],
                    ['7 x 14"', '7 ⅞"', '15 ¼"'],
                    ['7.5 x 15"', '8 ⅜"', '16 ¼"'],
                    ['8 x 16"', '8 ⅞"', '17 ¼"'],
                    ['8.5 x 17"', '9 ⅜"', '18 ¼"'],
                    ['9 x 18"', '9 ⅞"', '19 ¼"'],
                    ['9.5 x 19"', '10 ⅜"', '20 ¼"'],
                    ['10 x 20"', '10 ⅞"', '21 ¼"'],
                  ].map((row, i) => (
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

export default FlyingGeeseTutorial;
