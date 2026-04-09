import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sectors from './pages/Sectors'
import SectorPage from './pages/SectorPage'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Apps from './pages/Apps'
import AppPage from './pages/AppPage'
import Growth from './pages/Growth'

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
