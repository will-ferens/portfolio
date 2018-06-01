import React from 'react'

class Modal extends React.Component {
    close(e) {
        e.preventDefault()
    
        if (this.props.onClose) {
            this.props.onClose()
        }
    }
    render() {
        if (this.props.isOpen === false)
        return null
        if (this.props.whichModal == 'haiku')
        return (
            <div>
                <div className="modal">
                    <h1>Haiku You</h1>
                    <p><strong>Tech Used:</strong> React, Node.js, Express, PostgreSQL</p>
                    <p><strong>Description:</strong> Using a given Twitter user's content, Haiku You updates it's own twitter feed with an original poem.<br/> By parsing syllables using regular expressions, the app delivers the iconic 5-7-5 pattern to create<br/> idiosyncratic techno poems!</p>
                    <img src="/haiku-screen.png"  width="33%" height="27%"/>
                    <button className="modal-button-open"><a href="http://haiku-you.surge.sh/" target="_blank" rel="noopener noreferrer">See the project</a></button>
                    <button className="modal-button-open"><a href="https://github.com/will-ferens/haiku-you" target="_blank" rel="noopener noreferrer">See the code</a></button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'fridge')
        return (
            <div>
                <div className="modal">
                    <h1>Fridge Vision</h1>
                    <p><strong>Tech Used:</strong> React Native, Node.JS, PostgreSQL, AWS S3</p>
                    <p><strong>Description:</strong> An image recognition native app. The user inputs a photo of the ingredients with which they'd<br/> like to make a meal and the app returns a list of recipes that matches the contents of the image!<br/> You can save and access your favorite recipes in an easy to use list linked to your profile.</p>
                    <img src="https://media.giphy.com/media/1xpA8Pi4BTdN0GUG22/giphy.gif" />
                    <button className="modal-button-open"><a href="https://github.com/will-ferens/fridge-vision" target="_blank" rel="noopener noreferrer">See the code</a></button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'shelf')
        return (
            <div>
                <div className="modal">
                    <h1>Shelf Life</h1>
                    <p><strong>Tech Used:</strong> Swift, Realm, Core Data, Xcode</p>
                    <p><strong>Description:</strong> A reading list app used to keep track of your books, search for new things to read, and find recommendations. <br/> Having you ever felt that emptiness that accompanies finishing a book you love? <br/> Shelf Life is a personalized reading list app that can help you find the next love of your reading life!</p>
                    <img src="https://media.giphy.com/media/LUihlhgGLWl4vT3d1L/giphy.gif"/>
                    <button className="modal-button-open"><a href="https://github.com/will-ferens/capstone" target="_blank" rel="noopener noreferrer">See the code</a></button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'score')
        return (
            <div>
                <div className="modal">
                    <h1>Score Board</h1>
                    <p><strong>Tech Used:</strong> HTML, CSS, Vanilla Javascript, FeathersJS</p>
                    <p>My first full stack app, Score Board lets you track your wins and loses across a number of videogames.<br/> You always win. Now you can prove it!</p>
                    <img src="/scoreboard.png" width="33%" height="27%"/>
                    <button className="modal-button-open"><a href="http://full-pump.surge.sh/" target="_blank" rel="noopener noreferrer">See the project</a></button>
                    <button className="modal-button-open"><a href="https://github.com/will-ferens/score-board" target="_blank" rel="noopener noreferrer">See the code</a></button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
    return (
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>

        )
    }

}

export default Modal