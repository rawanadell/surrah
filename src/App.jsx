import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesPage from './pages/Features'
import FeaturesSection from './components/Features'
import HowItWorksPage from './pages/HowItWorks'
import HowItWorksSection from './components/HowItWorks'
import ReportsPage from './pages/Reports'
import ReportsSection from './components/Reports'
import FAQPage from './pages/FAQ'
import FAQSection from './components/FAQ'
import ContactPage from './pages/Contact'
import ContactSection from './components/Contact'
import PrivacyPage from './pages/Privacy'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    // التعديل تم هنا: إضافة basename
    <Router basename="/surrah">
      <div className="min-h-screen bg-surface">
        <Navbar />
        
        <main className="pt-24">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturesSection />
                <HowItWorksSection />
                <ReportsSection />
                <FAQSection />
                <ContactSection />
              </>
            } />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
          </Routes>
          
          <Footer />
        </main>
      </div>
    </Router>
  )
}

export default App