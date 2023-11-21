import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import './about.css'
import img from '/home/shreyarai0308/portfolio/src/Assets/profile.jpeg'

const About = () => {
  return (
    <div className= "about-wrapper container">
      <div className= "about-left">
        <div className= "about-left-content">
          <div>
            <div className= "shadow">
              <div className= "about-img">
                <img src = {img}/>
              </div>
            </div>

            <h2>Shreya Rai</h2>
            <h3>Web Developer</h3>
          </div>

          <ul className= "icons">
            <li><FaFacebook/></li>
            <li><i className= "fab fa-github"></i></li>
            <li><i className= "fab fa-linkedin"></i></li>
            <li><i className= "fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>

      <div className= "about-right">
        <h1>Shreya <span>RAI</span></h1>
        
        <div className= "about-btns">
          <button type = "button" className= "btn btn-pink">resume</button>
        </div>

        <div className= "about-para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur possimus ullam quaerat, laboriosam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure tempora alias laudantium sapiente impedit!</p>
        </div>
      </div>
    </div>
  )
}

export default About