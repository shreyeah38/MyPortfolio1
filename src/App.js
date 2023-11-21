import React from 'react'
import './App.css';
import About from './Components/About/about';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Skills from './Components/Skills/skills';
import Project from './Components/Project/project';

const App = () => {
  return (
  <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App