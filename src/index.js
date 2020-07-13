import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import kanbanIcon from './images/list.svg';
import boardIcon from './images/board.svg';
import splitIcon from './images/split.svg';

import Cards from "./Cards2";
import TopNav from "./TopNav";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/index.css';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/es/ToggleButtonGroup";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import Button from "react-bootstrap/es/Button";
import Board from "./Board";
// import 'https://use.fontawesome.com/fb0cdb711b.js';

function Routing(props) {
    console.log(props);
    if (props.mode == 'board') {
        return <Board/>
    } else if (props.mode == 'split'){
        return <Cards/>;
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'split'
        };
        this.toList = this.toList.bind(this);
        this.toCards = this.toCards.bind(this);
    }

    toList() {
        this.setState({
            page: 'board'
        });
    }

    toCards() {
        this.setState({
            page: 'split'
        });
    }

    render() {
        return (
            <div>
                {/*nav*/}
                <TopNav/>

                {/*/!*mode switch*!/*/}
                <div className="nav_toggle-view-bar">
                    {/*<ToggleButtonGroup type="radio" name="options" defaultValue={false}>*/}
                        {/*<ToggleButton value={false} onClick={this.toCards}>*/}
                            {/*<span className="glyph-cards"></span>*/}
                        {/*</ToggleButton>*/}
                        {/*<ToggleButton value={true} onClick={this.toList}>*/}
                            {/*<span className="glyph glyph-clipboard"></span>*/}
                        {/*</ToggleButton>*/}
                    {/*</ToggleButtonGroup>*/}

                    <ButtonGroup aria-label="Basic example" className={'nav_toggle-view-bar'}>
                        <Button onClick={this.toList} active={(this.state.page == 'board')} variant="secondary">
                            <img src={boardIcon} />
                        </Button>
                        <Button onClick={this.toCards} active={(this.state.page == 'split')} variant="secondary">
                            <img src={splitIcon} />
                        </Button>
                        <Button active={(this.state.page == 'cards')} variant="secondary">
                            <img src={kanbanIcon} />
                        </Button>
                    </ButtonGroup>
                </div>

                {/*route rest of page*/}
                <Routing mode={this.state.page}/>
                {/*<Cards className={this.state.listMode ? 'hidden ' : ''}/>*/}
                {/*<Listview className={this.state.listMode ? '' : 'hidden '}/>*/}
            </div>
        );
    }
}

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById('root'));
