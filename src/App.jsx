import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactWidget from './components/ContactWidget'
import Home from './pages/Home'
import Sectors from './pages/Sectors'
import SectorPage from './pages/SectorPage'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Apps from './pages/Apps'
import AppPage from './pages/AppPage'
import Growth from './pages/Growth'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Help from './pages/Help'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/sectors/:slug" element={<SectorPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:slug" element={<AppPage />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ContactWidget />
      </div>
    </BrowserRouter>
  )
}
