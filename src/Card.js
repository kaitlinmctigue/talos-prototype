import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Modal from "react-bootstrap/es/Modal";
import DetailModal from "./DetailModal";

function Stroke(props) {
    if (props.patient.stroke) {
        return <div className="card_critical-alert--icon stroke-icon"></div>;
    }
    return null;
}

function Trauma(props) {
    if (props.patient.trauma) {
        return <div className="card_critical-alert--icon trauma-icon"></div>;
    }
    return null;
}

function Heart(props) {
    if (props.patient.stroke) {
        return <div className="card_critical-alert--icon heart-icon"></div>;
    }
    return null;
}

function ISO(props) {
    if (props.patient.stroke) {
        return <div className="card_badge card_badge--iso"></div>;
    }
    return null;
}

function EMTALA(props) {
    if (props.patient.emtala) {
        return <div className="card_badge card_badge--emtala"></div>;
    }
    return null;
}

const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 8,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'rgba(255, 255, 255, 0.8)' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle,
});

//CARD
class Card extends Component {

    constructor(props) {
        super(props);
        console.log(this);

        this.state = {
            showModal: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    render() {

        return (
            <div>
                <Modal
                    {...this.props}
                    onHide={this.toggleModal}
                    show={this.state.showModal}
                    bsSize="large"
                    aria-labelledby="contained-modal-title-lg"
                    className="modal_case-detail">
                    <span className="close-modal-icon" onClick={this.toggleModal}></span>
                    <Modal.Body>
                        <DetailModal patient={this.props.patient}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn_positive"
                                onClick={this.toggleModal}>
                            <span className="glyph-edit"></span>
                            Save
                        </button>
                        <button className="btn btn_negative"
                                onClick={this.toggleModal}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>

                <div onClick={this.toggleModal}
                     className={"card-patient"}>
                    <div className="container-header">
                        <div
                            className={"card_badge pull-right"}>
                            Action
                        </div>
                        <div className="card_age">
                            {/*<ISO patient={this.props.patient}/>*/}
                            {/*<EMTALA patient={this.props.patient}/>*/}
                        </div>
                        {/*<div className="container-alerticons">*/}
                            {/*<Stroke patient={this.props.patient}/>*/}
                            {/*<Trauma patient={this.props.patient}/>*/}
                            {/*<Heart patient={this.props.patient}/>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        className="card_name">Text on the card</div>
                    {/*<div className="container-diagnosis">*/}
                        {/*<div className="card_diagnosis">{this.props.patient.condition}</div>*/}
                        {/*<div className="card_critical">{this.props.patient.status}</div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-xs-12 container-iso-details">
                            {/*this is replaced with the whole card being clickable*/}
                            {/*<span onClick={this.toggleModal} className="card_button--view">view</span>*/}

                            <span className="button-ellipsis"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
