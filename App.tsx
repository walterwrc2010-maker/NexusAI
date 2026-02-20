import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Comparison from "./components/Comparison";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import AboutAgents from "./components/AboutAgents";
import Testimonials from "./components/Testimonials";
import ChatPage from "./pages/ChatPage";
import ContactPage from "./pages/ContactPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutAgents />
        <Solutions />
        <Comparison />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        {/* fundo sutil */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.16),transparent_55%)]" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
