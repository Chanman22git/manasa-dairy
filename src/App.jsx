import { useEffect } from "react";
import {
  BrowserRouter, Route, Routes, useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";

import {
  Cursor, Footer, Header, LangProvider, PageShell, ScrollRail,
} from "./ui.jsx";
import Backdrop from "./backdrop.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Quality from "./pages/Quality.jsx";
import Story from "./pages/Story.jsx";
import Enquiry from "./pages/Enquiry.jsx";
import Contact from "./pages/Contact.jsx";

const TITLES = {
  "/": "Manasa Dairy — Institutional dairy supply",
  "/products": "The range — Manasa Dairy",
  "/quality": "Quality & manufacturing — Manasa Dairy",
  "/story": "Our story — Manasa Dairy",
  "/enquiry": "Bulk enquiry — Manasa Dairy",
  "/contact": "Find us — Manasa Dairy",
};

function Routed() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = TITLES[location.pathname] || TITLES["/"];
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageShell><Home /></PageShell>} />
        <Route path="/products" element={<PageShell><Products /></PageShell>} />
        <Route path="/quality" element={<PageShell><Quality /></PageShell>} />
        <Route path="/story" element={<PageShell><Story /></PageShell>} />
        <Route path="/enquiry" element={<PageShell><Enquiry /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="*" element={<PageShell><Home /></PageShell>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LangProvider>
        {/* two layers: the backdrop, then everything else on top of it */}
        <Backdrop />
        <div className="layer-content">
          <Cursor />
          <ScrollRail />
          <Header />
          <main><Routed /></main>
          <Footer />
        </div>
      </LangProvider>
    </BrowserRouter>
  );
}
