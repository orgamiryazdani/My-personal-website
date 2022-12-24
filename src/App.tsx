import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import SinglePortfolio from './components/SinglePortfolio'
import Skills from './components/Skills'
import HomePage from './pages/HomePage'
import PortfolioProvider from './Providers/PortfolioProviders'

const App = () => {
  return (
    <div id='scrollDiv' className="max-w-[1440px] w-screen h-screen overflow-x-hidden">
      <PortfolioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/singlePortfolio/:id" element={<SinglePortfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </div>
  )
}

export default App
