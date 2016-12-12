import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Navigation component
export default class Navigation extends React.Component {
    // render
    render() {
        return (
            <Nav bsStyle="pills">
                <IndexLinkContainer to="/">
                    <NavItem>
                        Home
                    </NavItem>
                </IndexLinkContainer>

                <LinkContainer to="/product-edit">
                    <NavItem>
                        Product Edit <Glyphicon glyph="text-editor"/>
                    </NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}