import { Helmet } from "react-helmet-async";
import Navbar from "@/components/qe/Navbar";

const NotFound = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Helmet><title>Page Not Found — Quilt Explorer</title></Helmet>
    <Navbar />
    <section className="bg-section-pink flex-1 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-kona-pomegranate">404</h1>
        <p className="mt-4 text-2xl font-semibold text-charcoal">Page not found</p>
        <p className="mt-2 text-lg text-charcoal/70">That page doesn't exist — but there are lots of great designs waiting for you.</p>
        <a href="/" className="mt-8 inline-block px-6 py-3 rounded-md bg-kona-pomegranate text-white font-semibold hover:bg-kona-pomegranate/90 transition-colors">
          Back to home
        </a>
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

export default NotFound;
