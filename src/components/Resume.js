import React from 'react'

import resumePDF from '../assets/WILL-FERENS.4-26.pdf'

const Resume = () => {
    return (
        <div className="page">
            <h1>Resume</h1>
            <img id="resume-pic" src="/resume.png" alt="resume" />
            <div className="resume-links">
                <a className="rlink" href="https://drive.google.com/file/d/1SiV7TlT5r4vHKUFN4gv-moc3uIzsh0ZN/view?usp=sharing" target="_blank" rel="noopener noreferrer">View</a>
                <a className="rlink">|</a>
                <a className="rlink" href="https://drive.google.com/uc?export=download&id=1SiV7TlT5r4vHKUFN4gv-moc3uIzsh0ZN">Download</a>
            </div>
        </div>
    )
}

export default Resume