import React, { Component } from 'react'
import "./Navbar.scss"

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <p className="navbar__home">HOME</p>
                <p className="navbar__contact">CONTACT</p>
            </div>
        )
    }
}

export default Navbar

