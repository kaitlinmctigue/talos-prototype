import React, {Component} from 'react';
import './styles/index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {Navbar} from 'react-bootstrap'
import NavItem from "react-bootstrap/es/NavItem";
import Nav from "react-bootstrap/es/Nav";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import MenuItem from "react-bootstrap/es/MenuItem";
import Accordion from "react-bootstrap/es/Accordion";
import Panel from "react-bootstrap/es/Panel";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <div className="nav--mobile">
                    <nav className="navbar navbar-light">
                        <div className="row">
                            <div className="col-xs-3 nav-items">
                                <button className="navbar-toggler" type="button" onClick={this.handleToggle}>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-xs-6 nav-items">
                                <h1><span className="navbar-brand" title="Transfer Center"></span></h1>
                            </div>
                            <div className="col-xs-3 nav-items text-right">
                                <Nav className="pull-right">
                                    {/*<span className="glyph-user button-settings"></span>*/}
                                    <NavDropdown className="button-settings" eventKey={4} title="" id="basic-nav-dropdown">
                                        <MenuItem eventKey={4.1}>My Settings</MenuItem>
                                        <MenuItem eventKey={4.2}>Help</MenuItem>
                                        <MenuItem eventKey={4.3}>Legal Information</MenuItem>
                                        <MenuItem eventKey={4.4}>About TeleTracking</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={4.5}>Sign Out</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </div>
                            {/*<div className="collapse navbar-collapse" id="navbarNavAltMarkup">*/}
                                {/*<div className="navbar-nav">*/}
                                    {/*<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>*/}
                                    {/*<a className="nav-item nav-link" href="#">Features</a>*/}
                                    {/*<a className="nav-item nav-link" href="#">Pricing</a>*/}
                                    {/*<a className="nav-item nav-link disabled" href="#">Disabled</a>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                    <MuiThemeProvider>
                        <div>
                            <Drawer width={280}
                                    docked={false}
                                    open={this.state.open}
                                    onRequestChange={(open) => this.setState({open})}>

                                {/*header*/}
                                <nav className="navbar navbar-light nav_sidebar_header">
                                    <div className="row">
                                        <div className="col-xs-12 nav-items">
                                            <button className="navbar-toggler pull-right" type="button" onClick={this.handleToggle}>
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                </nav>

                                {/*body*/}
                                <div className="row nav_sidebar_body">

                                </div>
                            </Drawer>
                        </div>
                    </MuiThemeProvider>
                </div>
                <div className="nav--desktop">

                    <Navbar>
                        <Navbar.Header>
                            <h1><span className="navbar-brand" title="TALOS"></span></h1>
                        </Navbar.Header>
                        <Nav className={"file-name"}>Warp Malfunction</Nav>
                        <button className="btn btn_positive pull-right">Send</button>
                    </Navbar>

                </div>
            </div>
        );
    }
}

export default TopNav;
