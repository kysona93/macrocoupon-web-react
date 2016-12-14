/**
 * Created by Naseat on 11/28/2016.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SearchProduct from'./search-product';
import { Row,Col,Grid,Navbar,Nav,NavItem,NavDropdown,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';


export default class Header extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col sm={2}lg={2}>Logo</Col>
                        <Col sm={12}lg={3}><SearchProduct/></Col>
                        <Col sm={12}lg={3}><SearchProduct/></Col>
                        <Col sm={1}lg={1}>Button</Col>
                        <Col sm={1}lg={1}>cart</Col>
                        <Col sm={1}lg={1}>Logo</Col>
                        <Col sm={1}lg={1}>Logo</Col>

                    </Row>
                </Grid>
            </div>

        );
    }
}