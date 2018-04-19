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
        
    return (
        
            <div>
                <div className="modal">{this.props.children}</div>
                <div className="backdrop" onClick={e => this.close(e)}/>
            </div>

        )
    }

}

export default Modal