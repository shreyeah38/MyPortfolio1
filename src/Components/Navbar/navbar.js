import React,{useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const[active,setActive] = useState('navBar');
  const showNavBar=()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavBar=()=>{
    setActive('navBar')
  }
  const [activeHeader,setactiveHeader] = useState('header');
  const addBg = () => {
    if(window.scrollY>=10)
    {
      setactiveHeader('header activeHeader')
    }
    else{
      setactiveHeader('header')
    }
  }
  window.addEventListener('scroll', addBg)
  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Ai.</a>
        </h1>
      </div>
      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a className="navLink" href="#about">
              <span>About</span>
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#skills">
              <span>Skills</span>
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#project">
              <span>Project</span>
            </a>
          </li>
          <li className="navItem">
            <a className="navLink" href="#contact">
              <span>Contact Me</span>
            </a>
          </li>
          <button className="btn">
            <a href="">Resume</a>
          </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon"></AiFillCloseCircle>
        </div>
      </div>
      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className="icon"></TbGridDots>
      </div>
    </header>
  )
}

export default Navbar