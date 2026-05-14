import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>FAQ — Quilt Explorer</title>
        <meta name="description" content="Answers to common questions about Quilt Explorer — pricing, licensing, accounts, fabric, patterns, and more." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <div className="container py-16 md:py-24">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kona-pomegranate text-center">
              Frequently Asked Questions
            </h1>

            <div className="mt-8 flex justify-center">
              <img
                src="/faq/images/image1.webp"
                alt="Quilt Explorer FAQ banner"
                className="w-full max-w-xl object-contain rounded-xl"
              />
            </div>

            <Accordion type="multiple" className="mt-10 space-y-2">

              {/* 1. Who is Quilt Explorer for? */}
              <AccordionItem value="who-for" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  Who is Quilt Explorer for?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5">
                  <p className="font-semibold mb-2">Quilt Explorer is for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>every quilter who has ever said <em>"I'd love to create my own designs, but I don't understand how to use all those complex design tools"</em></li>
                    <li>quilters who want instant visual feedback on their design choices</li>
                    <li>anyone who enjoys playing with colors and shapes and creating beautiful designs.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* 2. Pricing */}
              <AccordionItem value="pricing" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  How much does Quilt Explorer cost?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">What's free?</h3>
                    <p>Using Quilt Explorer's starter features to create amazing quilt blocks is <strong>FREE</strong>!</p>
                    <p className="mt-1">Exploring possibilities in Quilt Explorer is fun and creative: <strong>GO NUTS</strong>!</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">What do I pay for?</h3>
                    <p className="font-semibold">Patterns — US$12.50</p>
                    <p className="mt-1">If you create a stunning design and want to make it into a quilt, you can purchase a fully-featured pattern with all the instructions.</p>
                    <p className="font-semibold mt-4">Premium — US$50 per year (includes 4 FREE PATTERNS)</p>
                    <p className="mt-1">Premium subscription gives you access to the full range of Quilt Explorer design tools. Custom color palettes, advanced styles, and so many more design options.</p>
                    <p className="mt-1">PLUS … with 4 free patterns thrown in, the subscription pays for itself!!</p>
                    <div className="mt-4 text-sm text-charcoal/60 space-y-2">
                      <p><strong>TERMS REMINDER:</strong> Your Quilt Explorer subscription will automatically renew annually.</p>
                      <p><strong>CANCELLATION:</strong> A friendly renewal reminder email will be sent to you 5 days before your scheduled renewal payment. If you wish to cancel your subscription, please sign into your account to cancel before it renews.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 3. Technology */}
              <AccordionItem value="technology" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  Can I use QE on my phone, tablet, and laptop?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Can I use Quilt Explorer on any device?</h3>
                    <p>Yes! Quilt Explorer is fully functional on any device that is connected to the internet.</p>
                    <div className="mt-3 space-y-2">
                      <p><strong>Landscape mode</strong> — tablets, desktops, and laptops</p>
                      <ul className="list-disc pl-6"><li>All design features visible in a single screen</li></ul>
                      <p><strong>Portrait mode</strong> — phones</p>
                      <ul className="list-disc pl-6"><li>On the main design page, toggle between 'block' view and 'quilt' view to see all the features</li>
                      <li>Other pages may require scrolling</li></ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Is Quilt Explorer available as an app?</h3>
                    <p>Yes! You can add Quilt Explorer to the home screen of your phone, tablet, or computer for quick, easy access — just like a regular app, without any downloading required.</p>
                    <p className="mt-1">To do it, open Quilt Explorer in your browser, tap or click the menu icon (☰) in the top left corner, and select <strong>"Install App."</strong> That's it! A Quilt Explorer icon will appear on your home screen, so you can jump straight in whenever you like.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Technology problems?</h3>
                    <p>We are always looking to improve our website so please <a href="/contact" className="text-kona-pomegranate underline">contact us</a> if you encounter any difficulties using Quilt Explorer on your device. We aim to fix these sorts of problems as a matter of high priority!</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 4. Accounts */}
              <AccordionItem value="accounts" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  Do I need an account?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Do I have to sign up / log in to use Quilt Explorer?</h3>
                    <p>No you don't! You can use Quilt Explorer to make fabulous quilt designs without creating an account.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Do I have to sign up / log in to buy a pattern?</h3>
                    <p>No! We do need your email address when you order a pattern, so that we can send it to you. But you won't need to create an account for this.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">What are the benefits of creating an account?</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Once you have signed into a Quilt Explorer account, you can save your favourite designs and your purchased patterns in one place and come back to them whenever you like.</li>
                      <li>Premium users can only access Premium benefits while logged into their accounts.</li>
                      <li>As an account holder, Quilt Explorer can store your purchasing information so you don't have to enter your details every time you order a new quilt pattern.</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 5. Patterns */}
              <AccordionItem value="patterns" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  What's included in a Quilt Explorer pattern?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-2">
                  <p>Quilt Explorer patterns are provided in standard PDF format.</p>
                  <p>The patterns contain a range of large color plates, and provide you with fabric yardages and detailed cutting and assembly instructions.</p>
                  <p>We feel confident that you will be delighted with the level of detail and useful information provided in our patterns.</p>
                </AccordionContent>
              </AccordionItem>

              {/* 6. Fabric */}
              <AccordionItem value="fabric" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  What fabric does Quilt Explorer use?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Tell me about Kona cotton solids</h3>
                    <p>Kona cotton solids are an extensive range of plain (non-patterned) fabrics by the Robert Kaufman fabric company. We love this range as there are a huge number of colors available and their dye lots are so consistent that you can purchase the same color fabric from 2 different batches and be confident that they will be a pretty perfect match.</p>
                    <p className="mt-1">Many quilters like to buy a Kona Cotton Solids color chart to keep at home, to easily match fabrics to their Kona names.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Where can I buy my fabric?</h3>
                    <p>The Kona Cotton Solid fabrics are available in many specialty quilting stores in the United States, Canada, United Kingdom, Australia and beyond!</p>
                    <p className="mt-1">Some of these stores are bricks-and-mortar establishments that you can visit. Others offer an online shopping experience. Some shops carry the full range of Kona Cotton Solids while others carry a smaller selection from the range.</p>
                    <p className="mt-1">A quick internet search can help you find what you need.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Do I have to use Kona fabrics?</h3>
                    <p>No you don't. You can switch them out for any fabrics you like. Solids, patterns, anything goes!!</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 7. Licensing */}
              <AccordionItem value="licensing" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  What are the licensing conditions on QE patterns?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Can I on-sell my Quilt Explorer patterns? Can I copy them or otherwise give them away?</h3>
                    <p>No and no. All patterns generated using quiltexplorer.com remain the intellectual property of Quilt Explorer. Patterns are licensed for strictly personal use.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Can I sell the quilts I make?</h3>
                    <p>You may sell a quilt or two made using a Quilt Explorer pattern. However, you may not have them made up and sold in commercial quantities.</p>
                    <p className="mt-1">If you are interested in obtaining a <strong>commercial license</strong> for a Quilt Explorer pattern, please <a href="/contact" className="text-kona-pomegranate underline">contact us</a>.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">Can I enter my Quilt Explorer quilts into quilt shows?</h3>
                    <p>You absolutely can!! But we do ask that you acknowledge Quilt Explorer as a design tool in your artist statement.</p>
                    <p className="mt-1">Please send us photos of your prizes and ribbons!!</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 8. Data */}
              <AccordionItem value="data" className="bg-white rounded-xl border-none px-6 shadow-soft">
                <AccordionTrigger className="text-xl font-bold text-kona-pomegranate hover:no-underline hover:text-kona-pomegranate/80 py-5">
                  Does Quilt Explorer store my information?
                </AccordionTrigger>
                <AccordionContent className="text-base text-charcoal/85 pb-5 space-y-2">
                  <p>Once you have created an account, Quilt Explorer does keep some details (such as your name, email address, Premium status, and which designs are your favourite).</p>
                  <p>This enables us to give you a better experience on the website:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>You will be able to checkout faster and more easily as your details will be automatically entered.</li>
                    <li>Your favourite designs will be stored for you to access and edit whenever you like.</li>
                  </ul>
                  <p className="mt-2">For further information about this topic, please refer to our <a href="/terms" className="text-kona-pomegranate underline">Terms &amp; conditions</a>.</p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
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

export default FAQ;
