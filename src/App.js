import React from 'react'
import Navbar from './component/Navbar';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Services from './component/pages/Services';
import Blog from './component/pages/Blog';
import Contact from './component/pages/Contact';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
