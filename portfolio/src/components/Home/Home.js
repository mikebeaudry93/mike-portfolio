import React, { Component } from 'react'
import "./Home.scss"

export class Home extends Component {
    render() {
        return (
            <div className="title">
                <h1 className="title__name">MIKE BEAUDRY</h1>
                <p className="title__developer">DEVELOPER</p>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        )
    }
}

export default Home
