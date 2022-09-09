import React from 'react'
import '../css_styles/style.css'

export default function NavBar(){

    return (
        <div class="topnav">
            <h1>API-Test</h1>
            <a href="#home">Explore</a>
            <a href="#news">Report</a>
            <a href="#contact">Workplaces</a>
            <a class="active" href="#about">Home</a>
        </div>
    )
}

