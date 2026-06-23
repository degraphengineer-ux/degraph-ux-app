import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from './stores/appStore'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Marketplace from './pages/Marketplace'
import Photography from './pages/Photography'
import Community from './pages/Community'
import DesignStudio from './pages/DesignStudio'

function App() {
  const { theme, initializeApp } = useStore()

  useEffect(() => {
    initializeApp()
  }, [])

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/community" element={<Community />} />
            <Route path="/design-studio" element={<DesignStudio />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App