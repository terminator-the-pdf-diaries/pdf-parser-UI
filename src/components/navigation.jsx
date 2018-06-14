import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom'

//import Button from '../components/button';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'home',
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
    }

    onChange(e) {
        this.setState({
            selected: e
        });
    }


    render() {
        return (
            <header>
                <div>
                    <Navbar style={{ backgroundColor: '#074a7a' }} className="nav-bar" dark expand="md">
                        <Link to="/"> <NavbarBrand style={{ color: '#fff' }}>PDF Terminator</NavbarBrand></Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/rules"> <NavLink>Rules</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                            </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>

        );
    }
}
