import React,{useRef} from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import emailjs, { send } from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67573fq', 'template_60fya3n', form.current, 'sAL3smyggefjNk9Y2')
      e.target.reset()
  };
  return (
    <section id="contact" className="contact container section">
      <div className="sectionTitle">
        <span className="titleNumber">04</span>
        <h5 className="titleText">Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>
          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon"/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @shreyaa3
              </span>
              <div>
                <a href="https://www.instagra.com/shreyaa0308/" className="flex" target='_blank'>
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <BsInstagram className="icon"/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @shreyaa3
              </span>
              <div>
                <a href="https://www.instagra.com/shreyaa0308/" className="flex" target='_blank'>
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <BsInstagram className="icon"/>
              </div>
              <h4>Instagram</h4>
              <span className="userName">
                @shreyaa3
              </span>
              <div>
                <a href="https://www.instagra.com/shreyaa0308/" className="flex" target='_blank'>
                  Send Message <TbArrowBigRightLines className="icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter your Name' name = 'name'/>
            <input type="email" placeholder='Enter your Email' name='email'/>
            <textarea name="message" placeholder='Enter your message'></textarea>
            <button className="formBtn" type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact