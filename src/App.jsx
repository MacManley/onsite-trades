import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Highlights />
      <Pricing />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
