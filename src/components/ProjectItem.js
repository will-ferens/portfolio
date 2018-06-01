import React, { Component } from 'react'

import Modal from './Modal'



class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isModalOpen: false,
            whichModal: null
        }
    }
    openModal() {
        this.setState({ isModalOpen: true })
    }
    closeModal() {
        this.setState({ isModalOpen: false })
    }
    handleHaiku() {
        this.setState({whichModal: 'haiku'})
    }
    handleFridge() {
        this.setState({whichModal: 'fridge'})
    }
    handleShelf() {
        this.setState({whichModal: 'shelf'})
    }
    handleScore() {
        this.setState({whichModal: 'score'})
    }

    render() {
        return (
        <div className="card-wrapper">
            <div className="card" id="card-1">
                <div className="title">
                    <h2><button onClick={() => {this.openModal(); this.handleHaiku();}} className="modal-button">Haiku You</button></h2>
                </div>  
            </div>
            <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} whichModal={this.state.whichModal}>
            <button onClick={() => this.closeModal()}>close</button>
            </Modal>
            <div className="card" id="card-2">
                <div className="title">
                    <h2><button onClick={() => {this.openModal(); this.handleFridge();}} className="modal-button">Fridge Vision</button></h2>
                </div>  
            </div>
            <div className="card" id="card-3">
                <div className="title">
                    <h2><button onClick={() => {this.openModal(); this.handleShelf();}} className="modal-button">Shelf Life</button></h2>
                </div>  
            </div>
            <div className="card" id="card-4">
                <div className="title">
                    <h2><button onClick={() => {this.openModal(); this.handleScore();}} className="modal-button">Scoreboard</button></h2>
                </div>  
            </div>
        </div> 
        )
    }
}


export default ProjectItem