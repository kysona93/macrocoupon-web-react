import React from 'react';
import { Accordion,Panel,Row,Col,Grid,Navbar,Nav,InputGroup,DropdownButton,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button,ControlLabel,Badge} from 'react-bootstrap';
import Header from'./Header';
import SearchLocation from'./serach-location';
import SearchProduct from './search-product';
import IconHeader from'./header-icon';

const styles={
    style:{
        color:'rgba(0, 0, 0, 0.870588)',
        backgroundColor: 'rgb(255, 255, 255)',
        transition: 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        boxSizing: 'border-box',
        boxShadow:'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        borderRadius:'0px',
        height: '100%',
        width: 256,
        position: 'fixed',
        zIndex: '1300',
        left: '0px',
        top: '0px',
        transform: 'translate(0px, 0px)',
        overflow: 'auto'
    },
    icon:{
        fontSize:'20px',
        color: 'white',
        position: 'relative',
        top: '11px',
        display: 'inline-block',
        fontFamily: 'Glyphicons Halflings',
        fontStyle: 'normal',
        fontWeight: '400px',
        paddingRight: '6px',
        marginRight:'5px'
    },
    a:{
        color:'white'
    },
    h3:{
        textAlign:'center'
    }
}
export default class Navigation extends React.Component{

    constructor(props) {
        super(props);

        }
    render(){

        return(

                <div>
                    <Navbar inverse fluid fixedTop >
                        <Grid>
                            <IconHeader/>
                            <Navbar.Form pullLeft>
                                <FormGroup>
                                   <SearchLocation/>
                                </FormGroup>
                                &nbsp;
                                <FormGroup>
                                  <SearchProduct/>
                                </FormGroup>
                                {' '}
                                <Button type="submit">Search</Button>
                            </Navbar.Form>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <NavItem eventKey={1} href="#" className="hidden-xs hidden-sm">Cart[0]</NavItem>
                                    <NavItem eventKey={2} href="#" className="hidden-xs hidden-sm">SignIn</NavItem>
                                    <NavItem eventKey={3} href="#" className="hidden-xs hidden-sm">SignUp</NavItem>
                                    <NavItem eventKey={4} href="#" className="hidden-xs hidden-sm hidden-md">Eng</NavItem>
                                    <NavItem eventKey={5} href="#" className="hidden-xs hidden-sm hidden-md">Kh</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Grid>
                    </Navbar>

                </div>


        );
    }
}
