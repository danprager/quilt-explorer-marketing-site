import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Terms from "./pages/Terms.tsx";
import AboutStory from "./pages/AboutStory.tsx";
import AboutTeam from "./pages/AboutTeam.tsx";
import Contact from "./pages/Contact.tsx";
import HSTsTutorial from "./pages/tutorials/HSTsTutorial.tsx";
import QSTsTutorial from "./pages/tutorials/QSTsTutorial.tsx";
import FullTutorial from "./pages/tutorials/FullTutorial.tsx";
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/tutorials/hsts" element={<HSTsTutorial />} />
          <Route path="/tutorials/qsts" element={<QSTsTutorial />} />
          <Route path="/tutorials/full" element={<FullTutorial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
