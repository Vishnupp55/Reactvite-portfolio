import React from 'react'
import './contact.css'
import mail_icon from '../../assets/mail-icon.jpg'
import call_icon from '../../assets/call-icon.png'
import location_icon from '../../assets/location-icon.png'


const contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>feel free to send me a message about anything that you want me to work on. you can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img className='circle' src={mail_icon} alt="" /><p>Vishnublsy5@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img className='circle' src={call_icon} alt="" /><p>9645207451</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Balussery,calicut,kerala</p>
                    </div>
                </div>
            </div>
       
        <form className='contact-right'>
        <label htmlFor="">Your name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message here' ></textarea>
        <button type='submit' className="contact-submit">Submit now</button>

        </form>
         
        </div>

    </div>
  )
}

export default contact