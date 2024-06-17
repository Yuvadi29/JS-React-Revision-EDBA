import React, { useState } from 'react'
import Header from './components/Header/Header'
import useMousePosition from './utils/useMousePosition'
import { sampleContext } from './context/sampleConetext'
import Data from './components/Data';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState({
    name: "adi",
    age: 99,
    place: "palghar"
  })
  // const mousePosition = useMousePosition();
  // console.log(mousePosition);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/data" element={<Data />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="*" element={<div>404 page</div>} />
      </Routes>
    </Router>
  )
}

export default App