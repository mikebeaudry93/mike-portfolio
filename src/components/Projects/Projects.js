import React, { Component } from 'react'
import './Projects.scss'
import {Link} from "react-router-dom"
import image1 from "../../assets/tictactoe.png"
import image2 from "../../assets/ufitness.png"


export class Projects extends Component {
    render() {
        return (
            <div className="projects-page">
                <h1 className="p-font">Projects I've worked on</h1>
                <div className="projects-page__box">
                    <a href="https://youthful-beaver-86231a.netlify.com/"><img className="projects" src={image1} alt="p1"/></a>
                    <a href="https://happy-mahavira-f477ed.netlify.com/"><img className="projects" src={image2} alt="p2"/></a>
                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
