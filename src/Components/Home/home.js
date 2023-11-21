import React from 'react'
import './home.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { TbChevronsDown, TbArrowBigRightLines } from 'react-icons/tb'
import { SiLeetcode } from 'react-icons/si'

const Home = () => {
  return (
    <section className='home section' id="home">
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/shreyeah38" target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/shreya-rai-742952226/" target='_blank'>
            <AiFillLinkedin className='icon'/>
          </a>
          <a href="https://leetcode.com/shreyaaa3/" target='_blank'>
            <SiLeetcode className='icon'/>
          </a>
          <div className="line">

          </div>
        </div>
      </div>
      <div className="container homeContainer">
        <span className="introText">
          Hi! My Name is,
        </span>
        <h1 className="title">
          Shreya Rai
        </h1>
        <span className="subTitle">
          I am a React Developer who enjoys crafting utility web-apps for the users.

        </span>
        <p className="homeParagraph">
          I am a driven individual who offers strong interpersonal and task- prioritisation skills, seeks real world experience as an intern.    
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href='#contact' className='flex'>
              Contact Me <TbArrowBigRightLines className="icon"/>

            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className='flex'>
              Scroll Down <TbChevronsDown className='icon'/>
            </a>
          </div>
        </div>
      </div>
      <div className="rightEmail">
        <div className="">
          <div className="emailAddress">
            <a href='https://mailto:shreyarai0308@gmail.com' target='_blank'>
              shreyarai0308@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Home