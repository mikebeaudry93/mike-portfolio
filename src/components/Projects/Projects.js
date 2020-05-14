import React, { Component } from 'react'
import './Projects.scss'
import {Link} from "react-router-dom"
import image1 from "../../assets/tictactoe.png"
import image2 from "../../assets/ufitness.png"


export class Projects extends Component {
    render() {
        return (
            <div className="projects-page">
                <h1 className="p-font">What I've Worked On!</h1>
                <div className="projects-page__box">
                    <a href="https://youthful-beaver-86231a.netlify.com/"><img className="projects" src={image1} alt="p1"/></a>
                </div>
            </div>
        )
    }
}

export default Projects
