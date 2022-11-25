import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <div className="max-w-[1440px] w-screen h-screen bg-[#c]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
