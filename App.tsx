import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';
import LeadsPage from './pages/LeadsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden font-sans flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/leads" element={<LeadsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
