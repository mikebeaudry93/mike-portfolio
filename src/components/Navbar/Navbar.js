import React, { Component } from 'react'
import "./Navbar.scss"
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/" className="links"><p className="navbar__home">HOME</p></Link>
                <Link to="/projects" className="links"><p className="navbar__projects"> PROJECTS </p></Link>
                <Link to="/contact" className="links"><p className="navbar__contact">CONTACT</p></Link>
            </div>
        )
    }
}

export default Navbar

