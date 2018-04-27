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
                    <p></p>
                    <button className="modal-button">See the project</button>
                    <button className="modal-button">See the code</button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'fridge')
        return (
            <div>
                <div className="modal">
                    <h1>Fridge Vision</h1>
                    <p></p>
                    <button className="modal-button">See the project</button>
                    <button className="modal-button">See the code</button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'shelf')
        return (
            <div>
                <div className="modal">
                    <h1>Shelf Life</h1>
                    <p></p>
                    <button className="modal-button">See the project</button>
                    <button className="modal-button">See the code</button>
                </div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>
        )
        if (this.props.whichModal == 'score')
        return (
            <div>
                <div className="modal">
                    <h1>Fridge Vision</h1>
                    <p></p>
                    <button className="modal-button">See the project</button>
                    <button className="modal-button">See the code</button>
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