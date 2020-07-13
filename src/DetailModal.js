import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Modal from "react-bootstrap/es/Modal";

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
        return <div className="card_badge card_badge--iso">ISO</div>;
    }
    return null;
}

function EMTALA(props) {
    if (props.patient.emtala) {
        return <div className="card_badge card_badge--emtala">EMTALA</div>;
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
class DetailModal extends Component {

    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {

        return (
            <div>
                <div className="container-header">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6  card_row">
                            {/*<div*/}
                                {/*className={"card_badge " + ((this.props.patient.sex.toString() == 'Male') ? 'card_badge--male' : 'card_badge--female')}>*/}
                                {/*{this.props.patient.sex}*/}
                            {/*</div>*/}
                            {/*<div className="card_age">{this.props.patient.age}</div>*/}
                        </div>
                        <div className="col-xs-12 col-sm-6 hidden-xs-down">
                            <div className="container-alerticons pull-left">
                                {/*<Stroke patient={this.props.patient}/>*/}
                                {/*<Trauma patient={this.props.patient}/>*/}
                                {/*<Heart patient={this.props.patient}/>*/}
                                {/*<ISO patient={this.props.patient}/>*/}
                                {/*<EMTALA patient={this.props.patient}/>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <hr className="border-thin_light"/>
                    </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 card_row card_text-modal">
                    <label>Sending Facility</label>
                    <span className="glyph-facility"></span>afafasf
                  </div>
                </div>
                <div className="row container-bottom-section">
                  {/*<div className="col-xs-12 col-sm-6">*/}
                    {/*<label>Notes</label>*/}
                    {/*<div className="container-notes-block">*/}
                      {/*<div className="notes_author-name">{this.props.patient.notes.authorlname}, {this.props.patient.notes.authorfname}</div>*/}
                      {/*<div className="notes_time">{this.props.patient.notes.notedate}</div>*/}
                      {/*<div className="notes_time">{this.props.patient.notes.notetime}</div>*/}
                      {/*<div className="notes_message">{this.props.patient.notes.message}</div>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className="col-xs-12 col-sm-6">*/}
                    {/*<label>Case Owner</label>*/}
                    {/*<div className="card_row">{this.props.patient.notes.authorlname}, {this.props.patient.notes.authorfname}</div>*/}
                    {/*<label>Date Created</label>*/}
                    {/*<div className="card_row">{this.props.patient.datecreated}</div>*/}
                    {/*<label>Case Timer</label>*/}
                    {/*<div className="card_row">{this.props.patient.casetimer}</div>*/}
                  {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default DetailModal
