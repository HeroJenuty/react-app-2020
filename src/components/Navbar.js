import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'

const HeaderNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" light expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink}
                                    to="/"
                                    exact
                                    activeClassName="active">Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink}
                                to="/profile"
                                activeClassName="active">Profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink}
                                to="/users"
                                activeClassName="active">Users</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default HeaderNavbar;