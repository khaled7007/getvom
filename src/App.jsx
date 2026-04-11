import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactWidget from './components/ContactWidget'

const Home = lazy(() => import('./pages/Home'))
const Sectors = lazy(() => import('./pages/Sectors'))
const SectorPage = lazy(() => import('./pages/SectorPage'))
const Features = lazy(() => import('./pages/Features'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Apps = lazy(() => import('./pages/Apps'))
const AppPage = lazy(() => import('./pages/AppPage'))
const Growth = lazy(() => import('./pages/Growth'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Help = lazy(() => import('./pages/Help'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const News = lazy(() => import('./pages/News'))
const NewsPost = lazy(() => import('./pages/NewsPost'))
const AccountingSoftware = lazy(() => import('./pages/AccountingSoftware'))
const EInvoicing = lazy(() => import('./pages/EInvoicing'))
const StudentPackage = lazy(() => import('./pages/StudentPackage'))
const ApiPage = lazy(() => import('./pages/ApiPage'))
const SalesInvoices = lazy(() => import('./pages/SalesInvoices'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-teal border-t-transparent rounded-full animate-spin" />
            </div>
          }>
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsPost />} />
            <Route path="/accounting-software" element={<AccountingSoftware />} />
            <Route path="/einvoicing" element={<EInvoicing />} />
            <Route path="/student" element={<StudentPackage />} />
            <Route path="/api" element={<ApiPage />} />
            <Route path="/invoices" element={<SalesInvoices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <ContactWidget />
      </div>
    </BrowserRouter>
  )
}
