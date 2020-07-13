import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import people from './peopleCards';
import Card from './Card';
import SplitButton from "react-bootstrap/es/SplitButton";
import MenuItem from "react-bootstrap/es/MenuItem";

const peopleAll = people.people;
const demand = peopleAll.splice(0, 6);
const addressing = peopleAll.splice(0, 4);
const consulting = peopleAll.splice(0, 3);
const transferring = peopleAll.splice(0, 4);
const complete = peopleAll.splice(0, 2);

// reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

// inline styles
const grid = 12;
const getItemStyle = (draggableStyle, isDragging) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: 8,
    margin: `0 0 ${grid}px 0`,
    borderRadius: 4,

    // change background colour if dragging
    background: isDragging ? 'rgba(255, 255, 255, 0.8)' : 'white',
    cursor: isDragging ? 'move' : 'pointer',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#B6C9D7' : 'transparent',
    //padding: grid,
    //width: 250,
});

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demand: demand,
            consulting: consulting,
            addressing: addressing,
            transferring: transferring,
            complete: complete,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        console.log(result);

        let demand = this.state.demand;
        let consulting = this.state.consulting;
        let addressing = this.state.addressing;
        let transferring = this.state.transferring;
        let complete = this.state.complete;

        // dropped outside the list
        if (!result.destination) {
            return;
        }

        //moving within the same column
        if (result.source.droppableId == result.destination.droppableId) {
            if (result.destination.droppableId == 'demand') {
                demand = reorder(
                    this.state.demand,
                    result.source.index,
                    result.destination.index
                );
            } else if (result.destination.droppableId == 'consulting') {
                consulting = reorder(
                    this.state.consulting,
                    result.source.index,
                    result.destination.index
                );
            } else if (result.destination.droppableId == 'addressing') {
                addressing = reorder(
                    this.state.addressing,
                    result.source.index,
                    result.destination.index
                );
            } else if (result.destination.droppableId == 'transferring') {
                transferring = reorder(
                    this.state.transferring,
                    result.source.index,
                    result.destination.index
                );
            } else if (result.destination.droppableId == 'complete') {
                complete = reorder(
                    this.state.complete,
                    result.source.index,
                    result.destination.index
                );
            }

            this.setState({
                demand,
                consulting,
                addressing,
                transferring,
                complete
            });

            // const list = reorder (
            //     this.state[result.destination.droppableId.toString()],
            //     result.source.index,
            //     result.destination.index
            // );
        }

        // moving from one column to another
        if (result.source.droppableId != result.destination.droppableId) {
            let movedItem;

            for (let item of this.state[result.source.droppableId.toString()]) {
                if (item.id == result.draggableId) {
                    movedItem = item;
                }
            }

            let sourceArray = this.state[result.source.droppableId];
            let destArray = this.state[result.destination.droppableId];

            sourceArray.splice(sourceArray.indexOf(movedItem), 1);
            destArray.unshift(movedItem);

            let finalDestList;

            if (result.destination.droppableId == 'demand') {
                finalDestList = reorder(
                    this.state.demand,
                    result.source.index,
                    result.destination.index
                );

                this.setState({
                    demand: finalDestList
                });
            } else if (result.destination.droppableId == 'consulting') {
                finalDestList = reorder(
                    this.state.consulting,
                    result.source.index,
                    result.destination.index
                );

                this.setState({
                    consulting: finalDestList
                });
            } else if (result.destination.droppableId == 'addressing') {
                finalDestList = reorder(
                    this.state.addressing,
                    result.source.index,
                    result.destination.index
                );

                this.setState({
                    addressing: finalDestList
                });
            } else if (result.destination.droppableId == 'transferring') {
                finalDestList = reorder(
                    this.state.transferring,
                    result.source.index,
                    result.destination.index
                );

                this.setState({
                    transferring: finalDestList
                });
            } else if (result.destination.droppableId == 'complete') {
                finalDestList = reorder(
                    this.state.complete,
                    result.source.index,
                    result.destination.index
                );

                this.setState({
                    complete: finalDestList
                });
            }
        }
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>

                <div className="container-routing">
                    <div className="container-demand-list">
                        {/*<div className="header">*/}
                            {/*<h2>Demand</h2>*/}
                        {/*</div>*/}
                        {/*<div className="container-worklist_header">Complete</div>*/}
                        <div className="body">
                            <Droppable droppableId="demand">
                                {(provided, snapshot) => (
                                    <div>
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                        >
                                            {/*DEMAND*/}
                                            {this.state.demand.map(patient => (
                                                <Draggable key={patient.id} draggableId={patient.id}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <div ref={provided.innerRef}
                                                                 style={getItemStyle(
                                                                     provided.draggableStyle,
                                                                     snapshot.isDragging
                                                                 )}
                                                                 {...provided.dragHandleProps}>

                                                                <Card patient={patient}/>

                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                    <div className="container-cards">
                        {/*<div className="header">*/}
                            {/*<h2>Worklist</h2>*/}
                            {/*<button className="btn btn_positive">Create Case</button>*/}
                            {/*/!*<SplitButton bsStyle={"test"} title="test">*!/*/}
                                {/*/!*<MenuItem eventKey="1">Action</MenuItem>*!/*/}
                                {/*/!*<MenuItem eventKey="2">Another action</MenuItem>*!/*/}
                                {/*/!*<MenuItem eventKey="3">Something else here</MenuItem>*!/*/}
                                {/*/!*<MenuItem divider />*!/*/}
                                {/*/!*<MenuItem eventKey="4">Separated link</MenuItem>*!/*/}
                            {/*/!*</SplitButton>*!/*/}
                        {/*</div>*/}
                            <div className="container-cards-wrapper">
                                <div className="container-columns">
                                    <div className="container-worklist-column column0 hidden-md-up">
                                        <div className="container-worklist_header">Demand</div>
                                        <Droppable droppableId="demand1">
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                    >
                                                        {/*DEMAND*/}
                                                        {this.state.demand.map(patient => (
                                                            <Draggable key={patient.id} draggableId={patient.id}>
                                                                {(provided, snapshot) => (
                                                                    <div>
                                                                        <div ref={provided.innerRef}
                                                                             style={getItemStyle(
                                                                                 provided.draggableStyle,
                                                                                 snapshot.isDragging
                                                                             )}
                                                                             {...provided.dragHandleProps}>
                                                                            <Card patient={patient}/>
                                                                        </div>
                                                                        {provided.placeholder}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="container-worklist-column column1">
                                        <div className="container-worklist_header">Known</div>
                                        <Droppable droppableId="addressing">
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                    >
                                                        {/*ADDRESSING*/}
                                                        {this.state.addressing.map(patient => (
                                                            <Draggable key={patient.id} draggableId={patient.id}>
                                                                {(provided, snapshot) => (
                                                                    <div>
                                                                        <div ref={provided.innerRef}
                                                                             style={getItemStyle(
                                                                                 provided.draggableStyle,
                                                                                 snapshot.isDragging
                                                                             )}
                                                                             {...provided.dragHandleProps}>

                                                                            <Card patient={patient}/>

                                                                        </div>
                                                                        {provided.placeholder}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="container-worklist-column column2">
                                        <div className="container-worklist_header">Unknown</div>
                                        <Droppable droppableId="consulting">
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                    >
                                                        {/*CONSULTING*/}
                                                        {this.state.consulting.map(patient => (
                                                            <Draggable key={patient.id} draggableId={patient.id}>
                                                                {(provided, snapshot) => (
                                                                    <div>
                                                                        <div ref={provided.innerRef}
                                                                             style={getItemStyle(
                                                                                 provided.draggableStyle,
                                                                                 snapshot.isDragging
                                                                             )}
                                                                             {...provided.dragHandleProps}>

                                                                            <Card patient={patient}/>

                                                                        </div>
                                                                        {provided.placeholder}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className="container-worklist-column column3">
                                        <div className="container-worklist_header">Potential Actions</div>
                                        <Droppable droppableId="transferring">
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                    >
                                                        {/*TRANSFERRING*/}
                                                        {this.state.transferring.map(patient => (
                                                            <Draggable key={patient.id} draggableId={patient.id}>
                                                                {(provided, snapshot) => (
                                                                    <div>
                                                                        <div ref={provided.innerRef}
                                                                             style={getItemStyle(
                                                                                 provided.draggableStyle,
                                                                                 snapshot.isDragging
                                                                             )}
                                                                             {...provided.dragHandleProps}>

                                                                            <Card patient={patient}/>

                                                                        </div>
                                                                        {provided.placeholder}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>
                                    <div className="container-worklist-column column4">
                                        <div className="container-worklist_header">Completed Actions</div>
                                        <Droppable droppableId="complete">
                                            {(provided, snapshot) => (
                                                <div>
                                                    <div
                                                        ref={provided.innerRef}
                                                        style={getListStyle(snapshot.isDraggingOver)}
                                                    >
                                                        {/*COMPLETE*/}
                                                        {this.state.complete.map(patient => (
                                                            <Draggable key={patient.id} draggableId={patient.id}>
                                                                {(provided, snapshot) => (
                                                                    <div>
                                                                        <div ref={provided.innerRef}
                                                                             style={getItemStyle(
                                                                                 provided.draggableStyle,
                                                                                 snapshot.isDragging
                                                                             )}
                                                                             {...provided.dragHandleProps}>

                                                                            <Card patient={patient}/>

                                                                        </div>
                                                                        {provided.placeholder}
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </DragDropContext>
        );
    }
}

export default Cards;
