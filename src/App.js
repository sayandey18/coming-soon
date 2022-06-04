import React from 'react';
import { Routes, Route } from "react-router-dom";
import Coming from './components/Coming';
import About from './components/About';
import './components/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Coming />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App