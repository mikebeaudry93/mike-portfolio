import React, { Component } from 'react'
import './Contact.scss'

export class Contact extends Component {
    render() {
        return (
            <>
            <div className="contact">
                <h1 className="contact__font">Let's Get In Touch!</h1>
                <p className="contact__font">michaelbeaudry93@gmail.com</p>
                {/* <p className="contact__font">www.linkedin.com/in/michael-beaudry/</p> */}
                <a  className="contact__font contact__link" href="https://www.linkedin.com/in/michael-beaudry/">http://www.linkedin.com/in/michael-beaudry/</a>
                {/* <p className="contact__font">6472695512</p>   */}
            </div>
            </>
        )
    }
}

export default Contact

