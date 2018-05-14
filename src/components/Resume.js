import React, { Component } from 'react'

import resumePDF from '../assets/WILL-FERENS.4-26.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="page">
                <h1>Resume</h1>
                <img id="resume-pic" src="/resume.png" alt="resume" />
                <div className="resume-links">
                    <a className="rlink" href="https://drive.google.com/file/d/1rK-Ta8nSO1XFJbQJcnVvPiyFIz4TLJCl/view?usp=sharing">View</a>
                    <a className="rlink">|</a>
                    <a className="rlink" href="https://drive.google.com/uc?export=download&id=1rK-Ta8nSO1XFJbQJcnVvPiyFIz4TLJCl">Download</a>
                </div>
            </div>
        )
    }
}

export default Resume