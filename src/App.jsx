import React from "react"
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import {Legal, Home,English, Ukraine, LegalEN, LegalUA} from './pages'


const App = () =>{

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Legal />} />
        <Route path="/en" element={<LegalEN />} />
        <Route path="/ua" element={<LegalUA />} />
        <Route path="/home" element={<Home />} />
        <Route path="/en/home" element={<English />} />
        <Route path="/ua/home" element={<Ukraine />} />        
      </Routes>
    </div>
        
    </Router>
  )
}

export default App
