import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import AboutAgents from "./components/AboutAgents";
import Testimonials from "./components/Testimonials";
import ChatPage from "./pages/ChatPage";
import ContactPage from "./pages/ContactPage";
import LeadsPage from "./pages/LeadsPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutAgents />
        <Solutions />
        <Process />
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
        {/* Gradiente de fundo — obsidian + violet + gold sutil */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(124,101,246,0.14),transparent_55%),radial-gradient(ellipse_at_85%_75%,rgba(201,163,74,0.07),transparent_52%),radial-gradient(ellipse_at_50%_95%,rgba(45,212,191,0.06),transparent_50%)]" />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/leads" element={<LeadsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
