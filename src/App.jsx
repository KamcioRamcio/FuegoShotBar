import React from "react"
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import {Legal, Home, Join , Franchise} from './pages'


const App = () =>{

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Legal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
    </div>
        
    </Router>
  )
}

export default App
