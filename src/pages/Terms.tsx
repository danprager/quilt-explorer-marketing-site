import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Terms & Conditions — Quilt Explorer</title>
        <meta name="description" content="Quilt Explorer terms of service, privacy policy, and refund policy." />
      </Helmet>
      <Navbar />
      <section className="bg-section-pink flex-1">
        <iframe
          src="/legal/qe-legal.html"
          title="Quilt Explorer Terms and Conditions"
          className="w-full"
          style={{ height: "calc(100vh - 4rem)", border: "none" }}
        />
      </section>
      <footer className="bg-charcoal text-kona-white">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Quilt Explorer. Your magic kaleidoscope for quilt design.
          </div>
          <a href="/terms" className="hover:underline">
            Terms and conditions
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
